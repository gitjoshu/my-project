import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { ArticleCard } from "./article-card";

export const ArticlesCardGrid = ({ articles }) => {
  return (
    <Flex flexWrap="wrap" alignItems="center">
      {articles.map((article, index) => (
        <Box key={index} py={4} px={4}>
          <ArticleCard article={article.attributes} />
        </Box>
      ))}
    </Flex>
  );
};
