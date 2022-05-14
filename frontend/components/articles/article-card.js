import {
  Box,
  chakra,
  Flex,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { getStrapiMedia } from "../../lib/media";

export function ArticleCard({ article }) {
  return (
    <Box
      rounded="lg"
      shadow="md"
      bg={useColorModeValue("white", "gray.800")}
      // maxW="xs"
    >
      <Image
        roundedTop="lg"
        w="full"
        h={56}
        fit="cover"
        src={getStrapiMedia(article.image.data.attributes.url)}
        alt="Article"
      />

      <Box p={6}>
        <Box>
          <chakra.span
            fontSize="xs"
            textTransform="uppercase"
            color={useColorModeValue("brand.600", "brand.400")}
          >
            {article.__typename}
          </chakra.span>
          <Text>
            <Link href={`/article/${article.slug}`}>{article.title}</Link>
          </Text>
          <chakra.p
            mt={2}
            fontSize="sm"
            color={useColorModeValue("gray.600", "gray.400")}
          >
            {article.description}
          </chakra.p>
        </Box>

        <Box mt={4}>
          <Flex alignItems="center">
            <Flex alignItems="center">
              <Image
                h={10}
                fit="cover"
                rounded="full"
                src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60"
                alt="Avatar"
              />
              <Text>
                <Link href={`/article/${article.slug}`}>
                  {article.author.data.attributes.name}
                </Link>
              </Text>
            </Flex>
            <chakra.span
              mx={1}
              fontSize="sm"
              color={useColorModeValue("gray.600", "gray.300")}
            >
              {article.createdAt}
            </chakra.span>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}
