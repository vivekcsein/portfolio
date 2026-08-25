import type { SVGProps } from "react";

type BrandIconProps = SVGProps<SVGSVGElement>;

export const GithubBrandIcon = (props: BrandIconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    role="img"
    aria-labelledby="github-icon-title"
    {...props}
  >
    <title id="github-icon-title">GitHub</title>
    <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.4 7.86 10.93.58.1.79-.25.79-.56v-2.17c-3.2.7-3.87-1.36-3.87-1.36-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.17.08 1.78 1.2 1.78 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.5 3.17-1.18 3.17-1.18.64 1.6.24 2.76.12 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.4-5.27 5.69.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A10.51 10.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
  </svg>
);

export const LinkedinBrandIcon = (props: BrandIconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    role="img"
    aria-labelledby="linkedin-icon-title"
    {...props}
  >
    <title id="linkedin-icon-title">LinkedIn</title>
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.86 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.8 0 0 .78 0 1.75v20.5C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.75V1.75C24 .78 23.2 0 22.22 0Z" />
  </svg>
);

export const TwitterBrandIcon = (props: BrandIconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    role="img"
    aria-labelledby="twitter-icon-title"
    {...props}
  >
    <title id="twitter-icon-title">X (Twitter)</title>
    <path d="M18.9 2H22l-7.6 8.68L23.4 22h-7.1l-5.55-6.7L4.4 22H1.3l8.13-9.29L.8 2h7.28l5.02 6.13L18.9 2Zm-1.25 18.13h1.72L6.44 3.77H4.6l13.05 16.36Z" />
  </svg>
);

export default { GithubBrandIcon, LinkedinBrandIcon, TwitterBrandIcon };
