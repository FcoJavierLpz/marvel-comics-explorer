import React, { useState } from "react";
import { cn } from "@/utils/helpers";

interface BlurImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}

export const BlurImage = ({
  src,
  alt,
  className,
  ...props
}: BlurImageProps) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <img
      src={src}
      alt={alt}
      className={cn(
        "duration-700 ease-in-out",
        isLoading ? "scale-105 blur-lg" : "scale-100 blur-0",
        className,
      )}
      onLoad={() => setIsLoading(false)}
      {...props}
    />
  );
};
