import * as React from "react";
export interface GridDropZoneProps extends React.HTMLAttributes<HTMLDivElement> {
    columnWidth: number;
    rowHeight: number;
    id: string;
    children: React.ReactNodeArray;
    disableDrag?: boolean;
    disableDrop?: boolean;
    style?: React.CSSProperties;
}
export declare function GridDropZone({ id, children, style, disableDrag, disableDrop, columnWidth, rowHeight, ...other }: GridDropZoneProps): JSX.Element | null;
