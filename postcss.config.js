import postcssPresetEnv from "postcss-preset-env";

export default {
    plugins: [
        postcssPresetEnv({
            /* pluginOptions */
            stage: 2,
            features: {
                "nesting-rules": true,
            },
        }),
    ],
};
