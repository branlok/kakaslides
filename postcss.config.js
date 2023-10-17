import postcssPresetEnv from "postcss-preset-env";

export default {
    plugins: [
        postcssPresetEnv({
            /* pluginOptions */
            stage: 3,
            features: {
                "nesting-rules": true,
            },
        }),
    ],
};
