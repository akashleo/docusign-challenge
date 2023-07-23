import React, { useEffect } from "react";
import "./App.css";
import EmojiList from "./EmojiList/EmojiList";
import {
  fetchEmojiData,
  emojiDataState,
  emojiCategory,
  emojiGroup,
} from "./service/FetchEmoji";
import { useSetRecoilState, useRecoilValue } from "recoil";
function App() {
  const emojiState = useRecoilValue(fetchEmojiData);
  const setEmojiData = useSetRecoilState(emojiDataState);
  const setEmojiCategory = useSetRecoilState(emojiCategory);
  const setEmojiGroup = useSetRecoilState(emojiGroup);

  useEffect(() => {
    setEmojiData(emojiState);
    const categoryList = [];
    for (const { category } of emojiState) {
      if (!categoryList.includes(category)) {
        categoryList.push(category);
      }
    }
    setEmojiCategory(categoryList);
    const groupList = [];
    for (const { group } of emojiState) {
      if (!groupList.includes(group)) {
        groupList.push(group);
      }
    }
    setEmojiGroup(groupList);
  }, [emojiState]);

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <div className="App">
        <EmojiList />
      </div>
    </React.Suspense>
  );
}

export default App;
