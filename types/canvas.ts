export type Color = {
    r: number;
    g: number;
    b: number;
};

export type Camera = {
    x: number;
    y: number;
};

export enum LayerType {
    Rectangle,
    Ellipse,
    Path,
    Text,
    Note,
    Diamond,
    Arrow,
    LeftArrow,
    TopArrow,
    BottomArrow,
}

export type RectangleLayer = {
    type: LayerType.Rectangle;
    x: number;
    y: number;
    height: number;
    width: number;
    fill: Color;
    value?: string;
};

export type EllipseLayer = {
    type: LayerType.Ellipse;
    x: number;
    y: number;
    height: number;
    width: number;
    fill: Color;
    value?: string;
};

export type PathLayer = {
    type: LayerType.Path;
    x: number;
    y: number;
    height: number;
    width: number;
    fill: Color;
    points: number[][];
    value?: string;
};

export type TextLayer = {
    type: LayerType.Text;
    x: number;
    y: number;
    height: number;
    width: number;
    fill: Color;
    value?: string;
};

export type NoteLayer = {
    type: LayerType.Note;
    x: number;
    y: number;
    height: number;
    width: number;
    fill: Color;
    value?: string;
};

export type DiamondLayer = {
    type: LayerType.Diamond;
    x: number;
    y: number;
    height: number;
    width: number;
    fill: Color;
    value?: string;
};

export type ArrowLayer = {
    type: LayerType.Arrow;
    x: number;
    y: number;
    height: number;
    width: number;
    fill: Color;
    value?: string;
};

export type LeftArrowLayer = {
    type: LayerType.LeftArrow;
    x: number;
    y: number;
    height: number;
    width: number;
    fill: Color;
    value?: string;
};

export type TopArrowLayer = {
    type: LayerType.TopArrow;
    x: number;
    y: number;
    height: number;
    width: number;
    fill: Color;
    value?: string;
};

export type BottomArrowLayer = {
    type: LayerType.BottomArrow;
    x: number;
    y: number;
    height: number;
    width: number;
    fill: Color;
    value?: string;
};

export type Point = {
    x: number;
    y: number;
};

export type XYWH = {
    x: number;
    y: number;
    width: number;
    height: number;
};

export enum Side {
    Top = 1,
    Bottom = 2,
    Left = 4,
    Right = 8,
}

export type CanvasState =
    | {
          mode: CanvasMode.None;
      }
    | {
          mode: CanvasMode.SelectionNet;
          origin: Point;
          current?: Point;
      }
    | {
          mode: CanvasMode.Translating;
          current: Point;
      }
    | {
          mode: CanvasMode.Inserting;
          layerType:
              | LayerType.Ellipse
              | LayerType.Rectangle
              | LayerType.Text
              | LayerType.Note
              | LayerType.Diamond
              | LayerType.Arrow
              | LayerType.LeftArrow
              | LayerType.TopArrow
              | LayerType.BottomArrow;
      }
    | {
          mode: CanvasMode.Pencil;
      }
    | {
          mode: CanvasMode.Pressing;
          origin: Point;
      }
    | {
          mode: CanvasMode.Resizing;
          initialBounds: XYWH;
          corner: Side;
      };

export enum CanvasMode {
    None,
    SelectionNet,
    Translating,
    Inserting,
    Pencil,
    Pressing,
    Resizing,
}

export type Layer =
    | RectangleLayer
    | EllipseLayer
    | PathLayer
    | TextLayer
    | NoteLayer
    | DiamondLayer
    | ArrowLayer
    | LeftArrowLayer
    | TopArrowLayer
    | BottomArrowLayer;
