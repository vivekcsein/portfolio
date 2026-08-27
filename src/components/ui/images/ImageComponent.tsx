import Image from "next/image";
import Link from "next/link";
import { memo } from "react";
import { useImageFromGit } from "@/packages/hooks/useImageFromGit";
import type { ImageProps } from "@/types/app";

const ImageComponent = (props: ImageProps) => {
  const gitSrc = useImageFromGit(props.src);
  const {
    id,
    src,
    alt,
    href,
    width,
    height,
    className,
    loading = "lazy",
    priority,
    ...imageProps
  } = props;

  const image = (
    <Image
      id={id}
      src={gitSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      loading={priority ? undefined : loading}
      {...imageProps}
    />
  );

  return href ? <Link href={href}>{image}</Link> : image;
};

ImageComponent.displayName = "ImageComponent";

export default memo(ImageComponent);
