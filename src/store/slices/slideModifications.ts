import { create } from "zustand";
import { PRESET_LAYOUT } from "../../Components/SlideContainer";
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
