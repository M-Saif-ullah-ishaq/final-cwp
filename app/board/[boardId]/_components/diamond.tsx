import { colorToCss } from "@/lib/utils";
import { DiamondLayer } from "@/types/canvas";

interface DiamondProps {
    id: string;
    layer: DiamondLayer;
    onPointerDown: (e: React.PointerEvent, id: string) => void;
    selectionColor?: string;
}

export const Diamond = ({
    id,
    layer,
    onPointerDown,
    selectionColor,
}: DiamondProps) => {
    const { x, y, width, height, fill } = layer;

    // Calculate diamond points
    const points = [
        [width / 2, 0],           // top
        [width, height / 2],      // right
        [width / 2, height],      // bottom
        [0, height / 2],          // left
    ].join(" ");

    return (
        <polygon
            className="drop-shadow-md"
            onPointerDown={(e) => onPointerDown(e, id)}
            style={{
                transform: `translate(${x}px, ${y}px)`,
            }}
            points={points}
            fill={fill ? colorToCss(fill) : "#000"}
            stroke={selectionColor || "transparent"}
            strokeWidth={1}
        />
    );
}; 