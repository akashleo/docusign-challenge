import React, { useState, useEffect } from "react";
import { Card, Row, Col, Button } from "antd";
import { useRecoilValue } from "recoil";
import { emojiDataState } from "../service/FetchEmoji";
import "./styles.css";

const EmojiCard = () => {
  const emojiData = useRecoilValue(emojiDataState);
  const [cardList, setCardList] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    if (emojiData.length > 0) {
      setCardList(emojiData);
      if (page !== 1) {
        const startIndex = (page - 1) * 10;
        const temp = emojiData?.slice(startIndex, startIndex + 10);
        console.log(temp, startIndex);
        setCardList(temp);
      }
    }
  }, [emojiData]);

  useEffect(() => {
    if (page > 0 && page < Math.ceil(emojiData?.length / 10)) {
      const startIndex = (page - 1) * 10;
      const temp = emojiData?.slice(startIndex, startIndex + 10);
      setCardList(temp);
    }
    if (page === 0 || page > Math.ceil(emojiData?.length / 10)) {
      setPage(1);
    }
  }, [page]);

  return (
    <Row gutter={10}>
      {cardList.map(({ name, category, group, unicode, htmlCode }, index) => {
        // const startIndex = (page-1)* 10;
        // if(index>==startIndex && index<==(startIndex+10))
        return (
          <Col lg={8} md={12} sm={24} xs={24} key={name}>
            <Card
              hoverable
              style={{ width: "100%", height: "350px", margin: "10px" }}
              cover={
                <span
                  className="emoji-pad"
                  dangerouslySetInnerHTML={{ __html: htmlCode }}
                />
              }
            >
              <p className="category">{name}</p>
              <p className="unicode">Unicode: {unicode}</p>
              <p className="unicode">HTML code: {htmlCode}</p>
              <p className="category">Category: {category}</p>
              <p className="unicode">Group: {group}</p>
            </Card>
          </Col>
        );
      })}
      <Col span={24}>
        <Row gutter={10}>
          <Col
            span={8}
            className="pagination"
            onClick={() => setPage(page - 1)}
          >
            <Button>Previous</Button>
          </Col>
          <Col span={8} className="pagination">
            <Button>
              Page {page} of {Math.ceil(emojiData?.length / 10)}
            </Button>
          </Col>
          <Col
            span={8}
            className="pagination"
            onClick={() => setPage(page + 1)}
          >
            <Button>Next</Button>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default EmojiCard;
