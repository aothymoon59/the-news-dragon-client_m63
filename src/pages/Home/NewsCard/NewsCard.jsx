import React from "react";
import { Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  FaRegBookmark,
  FaShareAlt,
  FaEye,
  FaRegStar,
  FaStar,
} from "react-icons/fa";
import moment from "moment";
import Rating from "react-rating";

const NewsCard = ({ news }) => {
  const { _id, title, details, image_url, author, rating, total_view } = news;
  return (
    <Card className="mb-4">
      <Card.Header
        className="d-flex justify-content-between align-items-center"
        style={{ padding: "13px 20px" }}
      >
        <div className="news-header-left d-flex align-items-center">
          <Image
            src={author?.img}
            style={{ width: "40px", height: "40px", marginRight: "10px" }}
            roundedCircle
          />
          <div>
            <h5 className="m-0">{author?.name}</h5>
            <p className="m-0 mt-1">
              {moment(author?.published_date).format("YYYY-MM-DD")}
            </p>
          </div>
        </div>
        <div className="news-header-right fs-4 d-flex gap-2">
          <FaRegBookmark />
          <FaShareAlt />
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text>
          {details.length < 250 ? (
            <>{details}</>
          ) : (
            <>
              {details.slice(0, 250)}...{" "}
              <Link to={`/news/${_id}`}>read more</Link>
            </>
          )}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted d-flex justify-content-between">
        <div className="flex align-items-center">
          <Rating
            readonly
            placeholderRating={rating.number}
            emptySymbol={<FaRegStar />}
            placeholderSymbol={<FaStar className="text-warning" />}
            fullSymbol={<FaStar />}
          />
          <span className="ms-2">{rating?.number}</span>
        </div>
        <div>
          <FaEye /> {total_view}
        </div>
      </Card.Footer>
    </Card>
  );
};

export default NewsCard;
