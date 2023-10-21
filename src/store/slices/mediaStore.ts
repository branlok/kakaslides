import { create } from "zustand";

type SlideAppearance = {
    mediaURL: string;
    topImage: string | null;
    bottomImage: string | null;
    setLocalImage: (str) => void;
};

const useMediaStore = create<SlideAppearance>((set) => ({
    topImage:
        null,
    bottomImage:
        "https://kakaslides.netlify.app//static/media/horizotalTexturePattern.2f4c26b3.webp",

    mediaURL:
        "https://images.unsplash.com/photo-1506792006437-256b665541e2?auto=format&fit=crop&q=80&w=3687&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    setLocalImage(val: string) {
        set((state) => ({
            ...state,
            mediaURL: val,
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
