import React from "react";
import { cn } from "@/lib/utils";

interface FlippingCardProps {
  className?: string;
  frontContent?: React.ReactNode;
  backContent?: React.ReactNode;
}

export function FlippingCard({
  className,
  frontContent,
  backContent,
}: FlippingCardProps) {
  return (
    <div className="group/flipping-card [perspective:1000px]">
      <div
        className={cn(
          "relative transition-all duration-700 [transform-style:preserve-3d] group-hover/flipping-card:[transform:rotateY(180deg)]",
          className
        )}
      >
        <div className="[backface-visibility:hidden]">{frontContent}</div>
        <div className="absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden]">
          {backContent}
        </div>
      </div>
    </div>
  );
}
