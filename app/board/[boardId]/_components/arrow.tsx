import { colorToCss } from "@/lib/utils";
import { ArrowLayer } from "@/types/canvas";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { RotateCcw, RotateCw } from "lucide-react";

interface ArrowProps {
    id: string;
    layer: ArrowLayer;
    onPointerDown: (e: React.PointerEvent, id: string) => void;
    selectionColor?: string;
}

export const Arrow = ({
    id,
    layer,
    onPointerDown,
    selectionColor,
}: ArrowProps) => {
    const { x, y, width, height, fill } = layer;
    const [rotation, setRotation] = useState(0);

    // Arrow head size
    const arrowHeadSize = Math.min(width, height) * 0.2;
    
    // Calculate arrow points
    const startX = 0;
    const startY = height / 2;
    const endX = width;
    const endY = height / 2;

    // Arrow head points
    const arrowHeadX = endX;
    const arrowHeadY = endY;
    const arrowHeadLeftX = endX - arrowHeadSize;
    const arrowHeadLeftY = endY - arrowHeadSize;
    const arrowHeadRightX = endX - arrowHeadSize;
    const arrowHeadRightY = endY + arrowHeadSize;

    // Create the arrow path
    const path = `
        M ${startX} ${startY}
        L ${endX} ${endY}
        M ${arrowHeadLeftX} ${arrowHeadLeftY}
        L ${arrowHeadX} ${arrowHeadY}
        L ${arrowHeadRightX} ${arrowHeadRightY}
    `;

    const rotateLeft = () => {
        setRotation(prev => (prev - 45) % 360);
    };

    const rotateRight = () => {
        setRotation(prev => (prev + 45) % 360);
    };

    return (
        <g
            className="drop-shadow-md"
            onPointerDown={(e) => onPointerDown(e, id)}
            style={{
                transform: `translate(${x}px, ${y}px) rotate(${rotation}deg)`,
                transformOrigin: 'center',
            }}
        >
            <path
                d={path}
                fill="none"
                stroke={fill ? colorToCss(fill) : "#000"}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            {selectionColor && (
                <>
                    <path
                        d={path}
                        fill="none"
                        stroke={selectionColor}
                        strokeWidth={1}
                        strokeDasharray="5,5"
                    />
                    <foreignObject
                        x={width + 10}
                        y={height / 2 - 20}
                        width={80}
                        height={40}
                        style={{ overflow: 'visible' }}
                    >
                        <div className="flex gap-2">
                            <Button
                                size="sm"
                                variant="secondary"
                                onClick={rotateLeft}
                                className="h-8 w-8 p-0"
                            >
                                <RotateCcw className="h-4 w-4" />
                            </Button>
                            <Button
                                size="sm"
                                variant="secondary"
                                onClick={rotateRight}
                                className="h-8 w-8 p-0"
                            >
                                <RotateCw className="h-4 w-4" />
                            </Button>
                        </div>
                    </foreignObject>
                </>
            )}
        </g>
    );
}; 