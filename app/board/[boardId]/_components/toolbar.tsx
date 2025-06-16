import { Skeleton } from "@/components/ui/skeleton";
import { ToolButton } from "./tool-button";
import {
    Circle,
    MousePointer2,
    Pencil,
    Redo2,
    Square,
    StickyNote,
    TypeIcon,
    Undo2,
    Diamond,
    ArrowRight,
    ArrowLeft,
    ArrowUp,
    ArrowDown,
    MoreHorizontal,
    ChevronUp,
} from "lucide-react";
import { CanvasMode, CanvasState, LayerType } from "@/types/canvas";
import { useEffect, useState } from "react";
import { useSelf } from "@/liveblocks.config";

interface ToolbarProps {
    canvasState: CanvasState;
    setCanvasState: (newState: CanvasState) => void;
    undo: () => void;
    redo: () => void;
    canUndo: boolean;
    canRedo: boolean;
}

const Toolbar = ({
    canvasState,
    setCanvasState,
    undo,
    redo,
    canUndo,
    canRedo,
}: ToolbarProps) => {
    const selection = useSelf((me) => me.presence.selection);
    const [showMore, setShowMore] = useState(false);

    useEffect(() => {
        const onKeyDown = (e: KeyboardEvent) => {
            if (selection?.length > 0) return;
            switch (e.key) {
                case "s":
                    if (e.ctrlKey) setCanvasState({ mode: CanvasMode.None });
                    break;

                case "t":
                    if (e.ctrlKey)
                        setCanvasState({
                            layerType: LayerType.Text,
                            mode: CanvasMode.Inserting,
                        });
                    break;

                case "n":
                    if (e.ctrlKey)
                        setCanvasState({
                            mode: CanvasMode.Inserting,
                            layerType: LayerType.Note,
                        });
                    break;

                case "r":
                    if (e.ctrlKey)
                        setCanvasState({
                            mode: CanvasMode.Inserting,
                            layerType: LayerType.Rectangle,
                        });
                    break;

                case "e":
                    if (e.ctrlKey)
                        setCanvasState({
                            mode: CanvasMode.Inserting,
                            layerType: LayerType.Ellipse,
                        });
                    break;

                case "d":
                    if (e.ctrlKey)
                        setCanvasState({
                            mode: CanvasMode.Inserting,
                            layerType: LayerType.Diamond,
                        });
                    break;

                case "a":
                    if (e.ctrlKey)
                        setCanvasState({
                            mode: CanvasMode.Inserting,
                            layerType: LayerType.Arrow,
                        });
                    break;

                case "l":
                    if (e.ctrlKey)
                        setCanvasState({
                            mode: CanvasMode.Inserting,
                            layerType: LayerType.LeftArrow,
                        });
                    break;

                case "u":
                    if (e.ctrlKey)
                        setCanvasState({
                            mode: CanvasMode.Inserting,
                            layerType: LayerType.TopArrow,
                        });
                    break;

                case "b":
                    if (e.ctrlKey)
                        setCanvasState({
                            mode: CanvasMode.Inserting,
                            layerType: LayerType.BottomArrow,
                        });
                    break;

                default:
                    break;
            }
        };

        document.addEventListener("keydown", onKeyDown);

        return () => {
            document.removeEventListener("keydown", onKeyDown);
        };
    }, [selection, setCanvasState]);

    return (
        <div className="absolute top-[20%] left-2 flex flex-row gap-x-4">
            <div className="bg-white rounded-md p-1.5 flex gap-1 flex-col items-center shadow-md">
                <ToolButton
                    label="Select (Ctrl+S)"
                    icon={MousePointer2}
                    onClick={() => setCanvasState({ mode: CanvasMode.None })}
                    isActive={
                        canvasState.mode === CanvasMode.None ||
                        canvasState.mode === CanvasMode.Translating ||
                        canvasState.mode === CanvasMode.SelectionNet ||
                        canvasState.mode === CanvasMode.Pressing ||
                        canvasState.mode === CanvasMode.Resizing
                    }
                />
                <ToolButton
                    label="Text (Ctrl+T)"
                    icon={TypeIcon}
                    onClick={() =>
                        setCanvasState({
                            layerType: LayerType.Text,
                            mode: CanvasMode.Inserting,
                        })
                    }
                    isActive={
                        canvasState.mode === CanvasMode.Inserting &&
                        canvasState.layerType === LayerType.Text
                    }
                />
                <ToolButton
                    label="Sticky Note (Ctrl+N)"
                    icon={StickyNote}
                    onClick={() =>
                        setCanvasState({
                            mode: CanvasMode.Inserting,
                            layerType: LayerType.Note,
                        })
                    }
                    isActive={
                        canvasState.mode === CanvasMode.Inserting &&
                        canvasState.layerType === LayerType.Note
                    }
                />
                <ToolButton
                    label="Rectangle (Ctrl+R)"
                    icon={Square}
                    onClick={() =>
                        setCanvasState({
                            mode: CanvasMode.Inserting,
                            layerType: LayerType.Rectangle,
                        })
                    }
                    isActive={
                        canvasState.mode === CanvasMode.Inserting &&
                        canvasState.layerType === LayerType.Rectangle
                    }
                />
                <ToolButton
                    label="Ellipse (Ctrl+E)"
                    icon={Circle}
                    onClick={() =>
                        setCanvasState({
                            mode: CanvasMode.Inserting,
                            layerType: LayerType.Ellipse,
                        })
                    }
                    isActive={
                        canvasState.mode === CanvasMode.Inserting &&
                        canvasState.layerType === LayerType.Ellipse
                    }
                />
                <ToolButton
                    label={showMore ? "Less" : "More"}
                    icon={showMore ? ChevronUp : MoreHorizontal}
                    onClick={() => setShowMore(!showMore)}
                    isActive={showMore}
                />
            </div>
            {showMore && (
                <div className="bg-white rounded-md p-1.5 flex gap-1 flex-col items-center shadow-md">
                    <ToolButton
                        label="Diamond (Ctrl+D)"
                        icon={Diamond}
                        onClick={() =>
                            setCanvasState({
                                mode: CanvasMode.Inserting,
                                layerType: LayerType.Diamond,
                            })
                        }
                        isActive={
                            canvasState.mode === CanvasMode.Inserting &&
                            canvasState.layerType === LayerType.Diamond
                        }
                    />
                    <ToolButton
                        label="Arrow (Ctrl+A)"
                        icon={ArrowRight}
                        onClick={() =>
                            setCanvasState({
                                mode: CanvasMode.Inserting,
                                layerType: LayerType.Arrow,
                            })
                        }
                        isActive={
                            canvasState.mode === CanvasMode.Inserting &&
                            canvasState.layerType === LayerType.Arrow
                        }
                    />
                    <ToolButton
                        label="Left Arrow (Ctrl+L)"
                        icon={ArrowLeft}
                        onClick={() =>
                            setCanvasState({
                                mode: CanvasMode.Inserting,
                                layerType: LayerType.LeftArrow,
                            })
                        }
                        isActive={
                            canvasState.mode === CanvasMode.Inserting &&
                            canvasState.layerType === LayerType.LeftArrow
                        }
                    />
                    <ToolButton
                        label="Top Arrow (Ctrl+U)"
                        icon={ArrowUp}
                        onClick={() =>
                            setCanvasState({
                                mode: CanvasMode.Inserting,
                                layerType: LayerType.TopArrow,
                            })
                        }
                        isActive={
                            canvasState.mode === CanvasMode.Inserting &&
                            canvasState.layerType === LayerType.TopArrow
                        }
                    />
                    <ToolButton
                        label="Bottom Arrow (Ctrl+B)"
                        icon={ArrowDown}
                        onClick={() =>
                            setCanvasState({
                                mode: CanvasMode.Inserting,
                                layerType: LayerType.BottomArrow,
                            })
                        }
                        isActive={
                            canvasState.mode === CanvasMode.Inserting &&
                            canvasState.layerType === LayerType.BottomArrow
                        }
                    />
                    <ToolButton
                        label="Pen"
                        icon={Pencil}
                        onClick={() =>
                            setCanvasState({
                                mode: CanvasMode.Pencil,
                            })
                        }
                        isActive={canvasState.mode === CanvasMode.Pencil}
                    />
                </div>
            )}
            <div className="bg-white rounded-md p-1.5 flex flex-col items-center shadow-md">
                <ToolButton
                    label="Undo (Ctrl+Z)"
                    icon={Undo2}
                    onClick={undo}
                    isDisabled={!canUndo}
                />
                <ToolButton
                    label="Redo (Ctrl+Shift+Z)"
                    icon={Redo2}
                    onClick={redo}
                    isDisabled={!canRedo}
                />
            </div>
        </div>
    );
};

export const ToolbarSkeleton = () => {
    return (
        <div className="absolute top-[20%] left-2 flex flex-col gap-y-4 rounded-md animate-shimmer bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 bg-[length:200%_100%] h-[360px] w-[52px]">
            <Skeleton />
        </div>
    );
};

export default Toolbar;
