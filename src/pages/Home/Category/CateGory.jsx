import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import NewsCard from "../NewsCard/NewsCard";

const CateGory = () => {
  const { id } = useParams();
  const categoryNews = useLoaderData();
  return (
    <div>
      {id && <h2>This category news: {categoryNews.length}</h2>}
      {categoryNews.map((news) => (
        <NewsCard news={news} key={news._id}></NewsCard>
      ))}
    </div>
  );
};

export default CateGory;
