import { LoadingGIF } from "~/components/icons/icons";

import React from "react";
import { cn } from "~/utils/cn";

interface LoadingProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

function Loading({ className, ...props }: LoadingProps) {
  return (
    <div
      className={cn(
        "flex h-full w-full animate-pulse items-center justify-center",
        className
      )}
      {...props}
    >
      <LoadingGIF
        className={cn(
          "h-16 w-16 animate-pulse fill-primary stroke-primary lg:h-32 lg:w-32"
        )}
      ></LoadingGIF>
    </div>
  );
}

export default Loading;
