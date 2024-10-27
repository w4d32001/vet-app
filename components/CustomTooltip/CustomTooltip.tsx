import React from "react";
import { CustomTooltipProps } from "./CustomTooltip.types";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function CustomTooltip(props: CustomTooltipProps) {
  const { content, icon: Icon } = props;
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <Icon strokeWidth={2} className="h-5 w-5" />
        </TooltipTrigger>
        <TooltipContent>
          <p>{content}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
