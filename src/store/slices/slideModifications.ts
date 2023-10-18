import { create } from "zustand";

type SlideAppearance = {
    blackBarsOn: boolean;
    blackBarsVisual: {
        height: number;
        backgroundColor: string;
    };
    toggleBlackBar: () => void;
    adjustHeight: (pixels: number) => void;
    adjustBackgroundColor: (hexColor: string) => void;
};

const useBlackbarSettings = create<SlideAppearance>((set) => ({
    blackBarsOn: true,
    blackBarsVisual: {
        height: 50,
        backgroundColor: "#00000000",
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
}));

export default useBlackbarSettings;
