"use client";

import { useCallback, useEffect, useRef } from "react";

const DEFAULT_CLOSE_DELAY_MS = 200;

type UseHoverDropdownOptions = {
  /** This item's own id. */
  id: string;
  /** The currently-active id, shared across every item in the group (one at a time). */
  activeId: string | null;
  onSelect: (id: string | null) => void;
  delayMs?: number;
};

type UseHoverDropdownResult = {
  isActive: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
};

/**
 * useHoverDropdown.ts
 * --------------------------------------------------------------
 * Hover-open / delayed-close behavior for one item in a group of
 * mutually-exclusive hover dropdowns (a mega-menu with a single shared
 * `activeId`, e.g. NavigationProvider's `activeDropdown`).
 *
 * The bug this fixes: a previous version of this hook (and the inline
 * logic in NavbarDesktop before that) scheduled `onSelect(null)` on
 * mouseleave unconditionally. With multiple dropdowns in the same
 * group, moving straight from dropdown A into dropdown B raced two
 * updates — B's mouseenter fires immediately (`onSelect(B.id)`), but
 * A's *delayed* close then fires ~200ms later and calls `onSelect(null)`
 * regardless, clobbering B's just-opened state back to closed. "Close"
 * meant "reset the shared value to null", not "close ME specifically,
 * only if I'm still the one that's open."
 *
 * This hook tracks the latest `activeId` in a ref (always current, even
 * inside a stale-closure timeout callback) and only actually calls
 * `onSelect(null)` if THIS item is still the active one when the timer
 * fires — so a fast A -> B hover leaves B open instead of being closed
 * by A's leftover timer.
 */
export const useHoverDropdown = ({
  id,
  activeId,
  onSelect,
  delayMs = DEFAULT_CLOSE_DELAY_MS,
}: UseHoverDropdownOptions): UseHoverDropdownResult => {
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const activeIdRef = useRef(activeId);
  activeIdRef.current = activeId;

  const clearCloseTimeout = useCallback(() => {
    if (closeTimeoutRef.current === null) return;
    clearTimeout(closeTimeoutRef.current);
    closeTimeoutRef.current = null;
  }, []);

  const onMouseEnter = useCallback(() => {
    clearCloseTimeout();
    onSelect(id);
  }, [onSelect, id, clearCloseTimeout]);

  const onMouseLeave = useCallback(() => {
    clearCloseTimeout();
    closeTimeoutRef.current = setTimeout(() => {
      // Only close if nothing else (another item's onMouseEnter) claimed
      // the shared active slot in the meantime.
      if (activeIdRef.current === id) onSelect(null);
    }, delayMs);
  }, [onSelect, id, delayMs, clearCloseTimeout]);

  // Don't leave a pending close running after this item unmounts.
  useEffect(() => clearCloseTimeout, [clearCloseTimeout]);

  return { isActive: activeId === id, onMouseEnter, onMouseLeave };
};
