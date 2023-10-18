import { create } from "zustand";

type SlideAppearance = {
    mediaURL: string;
};

const useMediaStore = create<SlideAppearance>((set) => ({
    mediaURL:
        "https://images.unsplash.com/photo-1506792006437-256b665541e2?auto=format&fit=crop&q=80&w=3687&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
}));

export default useMediaStore;
