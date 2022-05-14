import { Box, Flex } from "@chakra-ui/react";
import React, { Fragment } from "react";
import ArticleCard from "../article-card";

export const ArticlesCardGrid = ({ articles }) => {
  console.log(articles);
  return (
    <Flex>
      {articles.map((article, index) => (
        <Box margin={4}>
          <ArticleCard key={index} article={article.attributes} />
        </Box>
      ))}
    </Flex>
  );
};
