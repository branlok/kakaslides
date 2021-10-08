import React from "react";

function getDefaultText(currentColor, style) {
  let result = defaultValues[style].find((item) => {
    return item.color === currentColor;
  });
  if (!result) {
    return {
      mainText: "蟹",
      secondaryText: "hitagicrab.",
      numberText: "(3232)",
    };
  }
  return result;
}

let defaultValues = {
  identity: [
    {
      color: "red",
      mainText: "蟹",
      secondaryText: "hitagicrab.",
      numberText: "(3232)",
    },
    {
      color: "black",
      mainText: "猫",
      secondaryText: "tubasacat.",
      numberText: "(1984)",
    },
    {
      color: "orange",
      mainText: "猿",
      secondaryText: "surugamonkey.",
      numberText: "(3636)",
    },
    {
      color: "yellow",
      mainText: "猿",
      secondaryText: "surugamonkey.",
      numberText: "(3636)",
    },
    {
      color: "lilac",
      mainText: "蛇",
      secondaryText: "nadekosnake.",
      numberText: "(6969)",
    },
    {
      color: "peach",
      mainText: "蝸牛",
      secondaryText: "mayoi. maimai.",
      numberText: "(1978) (6798)",
    },
    {
      color: "green",
      mainText: "人形",
      secondaryText: "yotsugidoll.",
      numberText: "(1215)",
    },
    {
      color: "offWhite",
      mainText: "..",
      secondaryText: "...",
      numberText: "(1111)",
    },
    {
      color: "purple",
      mainText: "ʅ(°益°)ʃ",
      secondaryText: "✖✖✖",
      numberText: "(1112)",
    },
  ],
  message: [
    {
      color: "red",
      mainText: "赤 齣",
      secondaryText: "Aka.",
      numberText: "(135)",
    },
    {
      color: "black",
      mainText: "黒 齣",
      secondaryText: "kuro.",
      numberText: "(629)",
    },
    {
      color: "orange",
      mainText: "黄 齣",
      secondaryText: "Ki.",
      numberText: "(0303)",
    },
    {
      color: "yellow",
      mainText: "黄 齣",
      secondaryText: "ki.",
      numberText: "(0303)",
    },
    {
      color: "lilac",
      mainText: "楝 齣",
      secondaryText: "nadekosnake.",
      numberText: "(6969)",
    },
    {
      color: "peach",
      mainText: "桃 齣",
      secondaryText: "momo.",
      numberText: "(372)",
    },
    {
      color: "green",
      mainText: "萌 緑 齣",
      secondaryText: "moegi.",
      numberText: "(469)",
    },
    {
      color: "offWhite",
      mainText: "白",
      secondaryText: "shiro.",
      numberText: "(4646)",
    },
    {
      color: "purple",
      mainText: "紫 齣",
      secondaryText: "murasaki.",
      numberText: "(039)",
    },
  ],

};

export default getDefaultText;
