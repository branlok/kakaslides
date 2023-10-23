import { create } from "zustand";

type BlendModes =
    | "multiply"
    | "hardlight"
    | "difference"
    | "color-burn"
    | "screen"
    | "overlay"
    | "normal";
type ColorFilter = "#0B76DA" | "#BC678B" | "#9167BC" | "#A6BC67" | "#E3A541" | "#E00C4B";
type BackgroundMotion = "Sliding" | "Mouse Tracking" | "Off";
type TextMotion = "None" | "Fast" | "Slow";
type SlideAppearance = {
    blackBarsOn: boolean;
    blackBarsVisual: {
        height: number;
        backgroundColor: string;
    };
    blendMode: BlendModes;
    intensity: Number;
    colorFilter: ColorFilter | string;
    // localImage: string | null;
    // setLocalImage: (str) => void;
    setIntensity: (num: number) => void;
    toggleBlackBar: () => void;
    adjustHeight: (pixels: number) => void;
    adjustBackgroundColor: (hexColor: string) => void;
    setColorFilter: (color: string) => void;
    setBlendMode: (blendModes: BlendModes) => void;
    // background Motion
    backgroundMotion: "Sliding" | "Mouse Tracking" | "Off";
    setBackgroundMotion: (on: BackgroundMotion) => void;
    textMotion: "None" | "Fast" | "Slow";
    setTextMotion: (on: TextMotion) => void;
};

export let PRESET_LAYOUT = {
    "#dd0a0a": {
        title: {
            value: "赤 齣",
            fontSize: "md",
        },
        subtitle: {
            value: "aka.",
            fontSize: "xs",
        },
        subscript: {
            value: "(135)",
            fontSize: "xs",
        },
    },
    "#62608f": {
        title: {
            value: "楝 齣",
            fontSize: "md",
        },
        subtitle: {
            value: "nadekosnake.",
            fontSize: "xs",
        },
        subscript: {
            value: "(6969)",
            fontSize: "xs",
        },
    },
    "#fd7a71": {
        title: {
            value: "桃 齣",
            fontSize: "md",
        },
        subtitle: {
            value: "momo.",
            fontSize: "xs",
        },
        subscript: {
            value: "(372)",
            fontSize: "xs",
        },
    },
    "#9ec044": {
        title: {
            value: "萌 緑 齣",
            fontSize: "md",
        },
        subtitle: {
            value: "moegi.",
            fontSize: "xs",
        },
        subscript: {
            value: "(469)",
            fontSize: "xs",
        },
    },
    "#811477": {
        title: {
            value: "紫 齣",
            fontSize: "md",
        },
        subtitle: {
            value: "murasaki.",
            fontSize: "xs",
        },
        subscript: {
            value: "(036)",
            fontSize: "xs",
        },
    },
    "#413424": {
        title: {
            value: "黒 齣",
            fontSize: "md",
        },
        subtitle: {
            value: "kuro.",
            fontSize: "xs",
        },
        subscript: {
            value: "(629)",
            fontSize: "xs",
        },
    },
    "#f9f4f8": {
        title: {
            value: "白",
            fontSize: "md",
        },
        subtitle: {
            value: "shiro.",
            fontSize: "xs",
        },
        subscript: {
            value: "(4646)",
            fontSize: "xs",
        },
    },
    "#f28f18": {
        title: {
            value: "黄 齣",
            fontSize: "md",
        },
        subtitle: {
            value: "ki.",
            fontSize: "xs",
        },
        subscript: {
            value: "(0303)",
            fontSize: "xs",
        },
    },
};

const useBlackbarSettings = create<SlideAppearance>((set) => ({
    blackBarsOn: true,
    blackBarsVisual: {
        height: 100,
        backgroundColor: "#00000000",
    },
    blendMode: "color-burn",
    intensity: 95,
    colorFilter: "#dd0a0a",
    backgroundMotion: "Sliding",
    textMotion: "Slow",
    setTextMotion(motion: TextMotion) {
        set((state) => ({
            ...state,
            textMotion: motion,
        }));
    },
    setBackgroundMotion(on: BackgroundMotion) {
        set((state) => ({
            ...state,
            backgroundMotion: on,
        }));
    },
    setIntensity(val: number) {
        set((state) => ({
            ...state,
            intensity: val,
        }));
    },
    setColorFilter(val: string) {
        set((state) => ({
            ...state,
            colorFilter: val,
        }));
    },
    toggleBlackBar() {
        set((state) => ({
            ...state,
            blackBarsOn: !state.blackBarsOn,
        }));
    },
    adjustHeight(height) {
        set((state) => ({
            ...state,
            blackBarsVisual: {
                ...state.blackBarsVisual,
                height,
            },
        }));
    },
    adjustBackgroundColor(bgColorHex) {
        set((state) => ({
            ...state,
            blackBarVisual: {
                ...state.blackBarsVisual,
                backgroundColor: bgColorHex,
            },
        }));
    },
    setBlendMode(blendMode: BlendModes) {
        set((state) => ({
            ...state,
            blendMode: blendMode,
        }));
    },
}));

export default useBlackbarSettings;
