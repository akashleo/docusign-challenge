import React, { useState } from "react";
import { Row, Col, Select, Button } from "antd";
import { useRecoilValue , useSetRecoilState} from "recoil";
import { emojiCategory, emojiGroup, emojiDataState } from "../service/FetchEmoji";
import { fetchEmojiDataByCategory, fetchEmojiDataByGroup, fetchEmojiData } from "../service/FetchCondition";

const { Option } = Select;

const CategoryFilters = () => {
  // Define the options for the Select boxes (Category and Group)
  const categoryOptions = useRecoilValue(emojiCategory);
  const groupOptions = useRecoilValue(emojiGroup);
  const [category, setCategory] = useState("");
  const [group, setGroup] = useState("")
  
  const setEmojiData = useSetRecoilState(emojiDataState);
  console.log(categoryOptions, groupOptions);

  // Handlers for the Select boxes
  const handleCategoryChange = async (value) => {
    console.log("Category:", value);
    const cat_list = await fetchEmojiDataByCategory(value);
    setEmojiData(cat_list);
    setCategory(value);
    setGroup("");
  };

  const handleGroupChange = async (value) => {
    console.log("Group:", value);
    const group_list = await fetchEmojiDataByGroup(value);
    setEmojiData(group_list);
    setGroup(value);
    setCategory("");
  };

  // Handler for the Clear All button
  const handleClearAll = async () => {
    // Implement the logic to clear the selected values of the Select boxes here
    console.log("Clear All clicked");
    const group_list = await fetchEmojiData();
    setEmojiData(group_list);
    setGroup("");
    setCategory("");
  };

  return (
    <Row gutter={[10,10]}>
      <Col lg={12} md={12} sm={24} xs={24}>
        <Select
          style={{ width: "100%" }}
          placeholder="Select Category"
          onChange={handleCategoryChange}
          value={category}
        >
          {categoryOptions.map((category) => (
            <Option key={category} value={category}>
              {category}
            </Option>
          ))}
        </Select>
      </Col>
      <Col lg={12} md={12} sm={24} xs={24}>
        <Select
          style={{ width: "100%" }}
          placeholder="Select Group"
          onChange={handleGroupChange}
          value={group}
        >
          {groupOptions.map((group) => (
            <Option key={group} value={group}>
              {group}
            </Option>
          ))}
        </Select>
      </Col>
      <Col span={24}>
        <Button type="primary" block onClick={handleClearAll} colSpan={2}>
          Clear All
        </Button>
      </Col>
    </Row>
  );
};

export default CategoryFilters;
