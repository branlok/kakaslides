import { create } from "zustand";

export const BLEND_MODES = [
    "normal",
    "multiply",
    "screen",
    "overlay",
    "darken",
    "lighten",
    "color-dodge",
    "color-burn",
    "hard-light",
    "soft-light",
    "difference",
    "exclusion",
    "hue",
    "saturation",
    "color",
    "luminosity",
];

type Positions = "topImage" | "bottomImage";
type SlideAppearance = {
    mediaURL: string;
    topImage: string | null;
    bottomImage: string | null;
    setImageSettings: (str: string | boolean, position: string, attri: string) => void;
    setNewBlendMode: (str: string, position: string) => void;
    setImage: (str: string, position: Positions) => void;
    setImageZoom: (str: string, position: Positions) => void;
};

const useMediaStore = create<SlideAppearance>((set) => ({
    topImage: null,
    topImageSettings: {
        opacity: 1,
        noRepeat: false,
        noAnimation: false,
    },
    bottomImageSettings: {
        opacity: 1,
        noRepeat: false,
        noAnimation: false,
    },
    topImageZoom: "120%",
    topImageBlend: "screen",
    bottomImageZoom: "120%",
    bottomImageBlend: "hard-light",
    bottomImage: null,
    mediaURL:
        "https://images.unsplash.com/photo-1506792006437-256b665541e2?auto=format&fit=crop&q=80&w=3687&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    setImageSettings(val, position, attri) {
        set((state) => ({
            ...state,
            [position + "Settings"]: {
                ...state[position + "Settings"],
                [attri]: val,
            },
        }));
    },
    setNewBlendMode(val, position) {
        set((state) => ({
            ...state,
            [position + "Blend"]: val,
        }));
    },
    setImageZoom(val, position) {
        set((state) => ({
            ...state,
            [position + "Zoom"]: val,
        }));
    },
    setImage(val: string, position: "topImage" | "bottomImage") {
        set((state) => ({
            ...state,
            [position]: val,
        }));
    },
}));

export default useMediaStore;
