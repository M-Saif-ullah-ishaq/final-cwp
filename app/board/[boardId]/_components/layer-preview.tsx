"use client";

import { useStorage } from "@/liveblocks.config";
import { 
    LayerType, 
    Layer,
    RectangleLayer,
    EllipseLayer,
    TextLayer,
    NoteLayer,
    PathLayer,
    DiamondLayer,
    ArrowLayer,
    LeftArrowLayer,
    TopArrowLayer,
    BottomArrowLayer
} from "@/types/canvas";
import { memo } from "react";
import { Rectangle } from "./rectangle";
import { Ellipse } from "./ellipse";
import { Text } from "./text";
import { Note } from "./note";
import { Path } from "./path";
import { Diamond } from "./diamond";
import { Arrow } from "./arrow";
import { LeftArrow } from "./left-arrow";
import { TopArrow } from "./top-arrow";
import { BottomArrow } from "./bottom-arrow";
import { colorToCss } from "@/lib/utils";

interface LayerPreviewProps {
    id: string;
    onLayerPointerDown: (e: React.PointerEvent, layerId: string) => void;
    selectionColor?: string;
}

export const LayerPreview = memo(
    ({ id, onLayerPointerDown, selectionColor }: LayerPreviewProps) => {
        const layer = useStorage((root) => root.layers.get(id));
        if (!layer) return null;

        switch (layer.type) {
            case LayerType.Path:
                return (
                    <Path
                        points={layer.points}
                        onPointerDown={(e) => onLayerPointerDown(e, id)}
                        x={layer.x}
                        y={layer.y}
                        fill={layer.fill ? colorToCss(layer.fill) : "#000"}
                        stroke={selectionColor}
                    />
                );
            case LayerType.Note:
                return (
                    <Note
                        id={id}
                        layer={layer as NoteLayer}
                        onPointerDown={onLayerPointerDown}
                        selectionColor={selectionColor}
                    />
                );
            case LayerType.Text:
                return (
                    <Text
                        id={id}
                        layer={layer as TextLayer}
                        onPointerDown={onLayerPointerDown}
                        selectionColor={selectionColor}
                    />
                );
            case LayerType.Ellipse:
                return (
                    <Ellipse
                        id={id}
                        layer={layer as EllipseLayer}
                        onPointerDown={onLayerPointerDown}
                        selectionColor={selectionColor}
                    />
                );
            case LayerType.Rectangle:
                return (
                    <Rectangle
                        id={id}
                        layer={layer as RectangleLayer}
                        onPointerDown={onLayerPointerDown}
                        selectionColor={selectionColor}
                    />
                );
            case LayerType.Diamond:
                return (
                    <Diamond
                        id={id}
                        layer={layer as DiamondLayer}
                        onPointerDown={onLayerPointerDown}
                        selectionColor={selectionColor}
                    />
                );
            case LayerType.Arrow:
                return (
                    <Arrow
                        id={id}
                        layer={layer as ArrowLayer}
                        onPointerDown={onLayerPointerDown}
                        selectionColor={selectionColor}
                    />
                );
            case LayerType.LeftArrow:
                return (
                    <LeftArrow
                        id={id}
                        layer={layer as LeftArrowLayer}
                        onPointerDown={onLayerPointerDown}
                        selectionColor={selectionColor}
                    />
                );
            case LayerType.TopArrow:
                return (
                    <TopArrow
                        id={id}
                        layer={layer as TopArrowLayer}
                        onPointerDown={onLayerPointerDown}
                        selectionColor={selectionColor}
                    />
                );
            case LayerType.BottomArrow:
                return (
                    <BottomArrow
                        id={id}
                        layer={layer as BottomArrowLayer}
                        onPointerDown={onLayerPointerDown}
                        selectionColor={selectionColor}
                    />
                );
            default:
                console.warn("Unsupported layer type");
        }
    }
);

LayerPreview.displayName = "LayerPreview";
