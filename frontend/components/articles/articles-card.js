import { Box, Flex, Stack, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { ArticleCard } from "./article-card";

export const ArticlesCardGrid = ({ articles }) => {
  console.log(articles);
  return (
    //flex columns with articles
    <Flex
      flexWrap="wrap"
      justifyContent="space-between"
      alignItems="center"
      mx={-4}
      my={-4}
    >
      {articles.map((article) => (
        <Box
          key={article.id}
          p={4}
          w={["full", "full", "full", "1/2"]}
          rounded="lg"
          shadow="md"
          bg={useColorModeValue("white", "gray.800")}
          maxW="xs"
        >
          <ArticleCard article={article} />
        </Box>
      ))}
    </Flex>
  );
};
