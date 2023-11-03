import { create } from "zustand";

type LayoutNames = "default" | "identity" | "excerpt";
type SlideAppearance = {
    layout: LayoutNames;
    setLayout: (layout: LayoutNames) => void;
};

const useLayout = create<SlideAppearance>((set) => ({
    layout: "default",
    setLayout(layout: LayoutNames) {
        set((state) => ({
            ...state,
            layout,
        }));
    },
}));

export default useLayout;
