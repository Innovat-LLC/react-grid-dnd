import * as React from "react";
interface GridItemProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    disableDrag?: boolean;
}
export declare function GridItem({ children, style, className, disableDrag: disableDragItem, ...other }: GridItemProps): any;
export {};
