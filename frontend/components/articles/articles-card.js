import { Box, Flex, Stack } from "@chakra-ui/react";
import React from "react";
import { ArticleCard } from "./article-card";

export const ArticlesCardGrid = ({ articles }) => {
  return (
    <>
      <Flex>
        {articles.map((article, index) => (
          <Stack spacing={4}>
            <Box margin={4} key={index}>
              <ArticleCard article={article.attributes} />
            </Box>
          </Stack>
        ))}
      </Flex>
    </>
  );
};
