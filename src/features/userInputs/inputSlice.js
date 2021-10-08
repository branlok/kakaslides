import { createSlice } from "@reduxjs/toolkit";

export const inputSlice = createSlice({
  name: "inputs",
  initialState: {
    mainText: null,
    secondaryText: null,
    numberText: null,
    longText: '驚かない所をみると知ってたのね。「どうかしたの？」と小さい白いウサギが聞きました。私たちがそこへ行くかどうかを決めるのは君の責任だ。イベントが成功したのは貴殿のたゆみ無い努力と献身のおかげです。私たちがそこへ行くかどうかを決めるのは君の責任だ。',
  },
  reducers: {
    changeText: (state, action) => {
      state.mainText = action.payload.mainText;
      state.secondaryText = action.payload.secondaryText;
      state.numberText = action.payload.numberText;
    },
    changeLongText: (state, action) => {
      state.longText = action.payload;
    },
  },
});

export const { changeText, changeLongText } = inputSlice.actions;
export default inputSlice.reducer;
