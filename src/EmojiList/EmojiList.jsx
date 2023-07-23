import React, { useState } from "react";
import EmojiTable from "./EmojiTable";
import CategoryFilters from "./CategoryFilter";
import EmojiCard from "./EmojiCard";
import { useRecoilValue } from "recoil";
import { emojiDataState } from "../service/FetchEmoji";
import "./styles.css";
import { Switch } from "antd";

const EmojiList = () => {
  // Sample data array containing emoji details for 10 rows
  const emojiData = useRecoilValue(emojiDataState);
  console.log(emojiDataState, emojiData);
  const [toggle, setToggle] = useState(true);

  const onToggle = (event) => {
    setToggle(event)
  };

  return (
    <div style={{ padding: "20px" }}>
      <div className="header">
        <span>Emoji Listing Table</span> &nbsp;
        <Switch checkedChildren="Card View" unCheckedChildren="Table View" defaultChecked  checked={toggle} onChange={(event)=>onToggle(event)}/>
      </div>
      <div className="filters">
        <CategoryFilters />
      </div>
      <div className="content">{toggle ? <EmojiCard /> : <EmojiTable />}</div>
    </div>
  );
};

export default EmojiList;
