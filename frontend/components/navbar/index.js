import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spinner,
  Stack,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { signOut, useSession } from "next-auth/react";
import NextLink from "next/link";
import React from "react";
import { getStrapiMedia } from "../../lib/media";

const NavLink = ({ children, href }) => (
  <NextLink passHref href={href}>
    <Link
      px={2}
      py={1}
      textColor="white"
      textTransform="uppercase"
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
        color: "gray.600",
      }}
    >
      {children}
    </Link>
  </NextLink>
);

export const Navbar = ({ categories, global }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data: session, status } = useSession();

  return (
    <>
      <Box bg={"gray.200"} px={4} shadow="md">
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <NextLink href="/" passHref>
              <Link
                px={2}
                py={1}
                textColor="white"
                textTransform="uppercase"
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  bg: useColorModeValue("gray.200", "gray.700"),
                  color: "gray.600",
                }}
              >
                HOME
              </Link>
            </NextLink>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {categories &&
                categories.map((category, index) => {
                  return (
                    <NavLink
                      key={index}
                      href={`/category/${category.attributes.slug}`}
                    >
                      {category.attributes.name}
                    </NavLink>
                  );
                })}
            </HStack>
          </HStack>
          {status === "loading" && <Spinner />}
          {status === "authenticated" && (
            <Flex alignItems={"center"}>
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar
                    size={"md"}
                    // src={getStrapiMedia(global.favicon.data.attributes.url)}
                  />
                </MenuButton>
                <MenuList>
                  <MenuItem onClick={() => signOut()}>Cerrar sesión</MenuItem>
                </MenuList>
              </Menu>
            </Flex>
          )}
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {categories.map((category, index) => {
                return (
                  <NavLink
                    key={index}
                    href={`/category/${category.attributes.slug}`}
                  >
                    {category.attributes.name}
                  </NavLink>
                );
              })}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
};
