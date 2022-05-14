import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { ArticleCard } from "./article-card";

export const ArticlesCardGrid = ({ articles }) => {
  return (
    <Flex>
      {articles.map((article, index) => (
        <Box key={index} margin={4}>
          <ArticleCard article={article.attributes} />
        </Box>
      ))}
    </Flex>
  );
};
