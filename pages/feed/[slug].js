import React from "react";

const News = () => {
  return <div>News</div>;
};

export const getServerSideProps = async (pageContext) => {
  const pageNumber = pageContext.query.slug;

  if (!pageNumber || pageNumber < 1 || pageNumber > 5) {
    return {
      props: {
        articles: [],
        pageNumber: 1,
      },
    };
  }

  const response = fetch(
    `https://newsapi.org/v2/top-headlines?country=us&pageSize=5&page=${pageNumber}`, 
    {
        headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_NEWS_KEY}`
        }
    }
  );
};

export default News;
