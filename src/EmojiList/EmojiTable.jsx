import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { emojiDataState } from "../service/FetchEmoji";
import { useRecoilValue } from "recoil";

const EmojiTable = () => {
  const emojiData = useRecoilValue(emojiDataState);
  const [tableData, setTableData] = useState([]);
  useEffect(() => {
    setTableData(emojiData);
  }, [emojiData]);
  const columns = [
    {
      title: "Emoji",
      dataIndex: "htmlCode",
      key: "emoji",
      render: (htmlCode) => (
        <span dangerouslySetInnerHTML={{ __html: htmlCode }} />
      ),
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "HTML Code",
      dataIndex: "htmlCode",
      key: "htmlCode",
      render: (htmlCode) => <p>{htmlCode}</p>,
    },
    {
      title: "Unicode",
      dataIndex: "unicode",
      key: "unicode",
    },
  ];

  return (
    <div className="table-wrapper">
      <Table dataSource={tableData} columns={columns} />
    </div>
  );
};

export default EmojiTable;
