import { create } from "zustand";

type FontValueAndSettings = {
    value: string;
    draftValue: string;
    fontStyle: string;
};

type TextBox = {
    value: string;
    draftValue: string;
    settingsOpen: boolean | null;
    appearance: {
        fontStyle: string;
        fontSize: number;
        fontColor: string;
    };
};

type NewContet = {
    presetTextBox: {
        title: TextBox;
        subtitle: TextBox;
        footerText: TextBox;
    };
    presets: ["title", "subtitle", "footerText"];
    setValue: (target: "title" | "subtitle" | "footerText") => void;
    setDraftValue: (newStr: string, target: "title" | "subtitle" | "footerText") => void;
    setEditStatus: (newStr: null | boolean, target: "title" | "subtitle" | "footerText") => void;
    setNewFont: (newStr: string, target: "title" | "subtitle" | "footerText") => void;
    // setNewFont: (fontStyle: string, target: string) => void;
};

type Content = {
    title: FontValueAndSettings;
    subtitle: FontValueAndSettings;
    footerText: FontValueAndSettings;
    setValue: (newStr: string, target: "title" | "subtitle" | "footerText") => void;
    setDraftValue: (str: string, target: string) => void;
    setNewFont: (fontStyle: string, target: string) => void;
    // setTitleValue: (str: string) => void;
    // setSubtitleValue: (str: string) => void;
    // setFooterValue: (str: string) => void;
};

const useContent = create<NewContet>((set) => ({
    presetTextBox: {
        title: {
            value: "Title",
            draftValue: "Title",
            settingsOpen: null,
            appearance: {
                fontStyle: "Droid Sans",
                fontSize: 6,
                fontColor: "black",
            },
        },
        subtitle: {
            value: "Title",
            draftValue: "Title",
            settingsOpen: null,
            appearance: {
                fontStyle: "Droid Sans",
                fontSize: 6,
                fontColor: "black",
            },
        },
        footerText: {
            value: "Title",
            draftValue: "Title",
            settingsOpen: null,
            appearance: {
                fontStyle: "Droid Sans",
                fontSize: 6,
                fontColor: "black",
            },
        },
    },
    presets: ["title", "subtitle", "footerText"],
    setValue(target) {
        set((state) => ({
            ...state,
            presetTextBox: {
                ...state.presetTextBox,
                [target]: {
                    ...state.presetTextBox[target],
                    value: state.presetTextBox[target].draftValue,
                },
            },
        }));
    },
    setDraftValue(newStr, target) {
        set((state) => ({
            ...state,
            presetTextBox: {
                ...state.presetTextBox,
                [target]: {
                    ...state.presetTextBox[target],
                    draftValue: newStr,
                },
            },
        }));
    },
    setEditStatus(val, target) {
        set((state) => ({
            ...state,
            presetTextBox: {
                ...state.presetTextBox,
                [target]: {
                    ...state.presetTextBox[target],
                    settingsOpen: val,
                },
            },
        }));
    },
    setNewFont(val, target) {
        console.log('ran', val, target)
        set((state) => ({
            ...state,
            presetTextBox: {
                ...state.presetTextBox,
                [target]: {
                    ...state.presetTextBox[target],
                    appearance: {
                        ...state.presetTextBox[target].appearance,
                        fontStyle: val,
                    },
                },
            },
        }));
    },
}));

export default useContent;
// const useContent = create<Content>((set) => ({
//     title: {
//         value: "Title",
//         draftValue: "Title",
//         fontStyle: "Droid Sans",
//     },
//     subtitle: {
//         value: "Subtitle",
//         draftValue: "Subtitle",
//         fontStyle: "Droid Sans",
//     },
//     footerText: {
//         value: "FooterText",
//         draftValue: "FooterText",
//         fontStyle: "Droid Sans",
//     },
//     setDraftValue(newVal: string, target: "title" | "subtitle" | "footerText") {
//         set((state) => ({
//             ...state,
//             [target]: {
//                 ...state[target],
//                 draftValue: newVal,
//             },
//         }));
//     },
//     setValue(target: "title" | "subtitle" | "footerText") {
//         set((state) => ({
//             ...state,
//             [target]: {
//                 ...state[target],
//                 value: state[target].draftValue,
//             },
//         }));
//     },
//     setNewFont(fontStyle, target: "title" | "subtitle" | "footerText") {
//         set((state) => ({
//             ...state,
//             [target]: {
//                 ...state[target],
//                 fontStyle,
//             },
//         }));
//     },
// }));

// Allow fine grain control of font, color, bold,
// allow indepdent fonts
