import {
  Box,
  chakra,
  Container,
  Flex,
  Heading,
  Image,
  Link,
  SimpleGrid,
  Stack,
  StackDivider,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { getStrapiMedia } from "../../lib/media";

export default function ArticleDetail({ article }) {
  return (
    <Container maxW={"7xl"}>
      <SimpleGrid
        columns={{ base: 1, lg: 1 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      >
        <Flex>
          <Image
            rounded={"md"}
            alt={"product image"}
            src={getStrapiMedia(article.attributes.image.data.attributes.url)}
            fit={"cover"}
            align={"center"}
            w={"100%"}
            h={{ base: "100%", sm: "400px", lg: "500px" }}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={"header"}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
            >
              {article.attributes.title}
            </Heading>
            <Text
              color={useColorModeValue("gray.900", "gray.400")}
              fontWeight={300}
              fontSize={"2xl"}
            >
              {article.attributes.__typename}
            </Text>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={"column"}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.200", "gray.600")}
              />
            }
          >
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text
                color={useColorModeValue("gray.500", "gray.400")}
                fontSize={"2xl"}
                fontWeight={"300"}
              >
                {article.attributes.description}
              </Text>
              <Text fontSize={"lg"}>{article.attributes.content}</Text>
            </VStack>
            <Box mt={4}>
              <Flex alignItems="center">
                <Flex alignItems="center">
                  <Image
                    h={10}
                    fit="cover"
                    rounded="full"
                    src={getStrapiMedia(
                      article.attributes.author.data.attributes.picture.data
                        .attributes.url
                    )}
                    alt="Avatar"
                  />
                  <Text>
                    <Link href={`#`}>
                      {article.attributes.author.data.attributes.name}
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
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}
