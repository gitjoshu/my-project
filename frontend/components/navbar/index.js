import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
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
  Stack,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";

const NavLink = ({ children, href }) => (
  <NextLink passHref href={href}>
    <Link
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
    >
      {children}
    </Link>
  </NextLink>
);

const Navbar = ({ categories }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  //   const { data: session, status } = useSession();

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
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
              {/* <a>
                <NextImage
                  src="/assets/img/logo.png"
                  alt="Logo"
                  width={32}
                  height={32}
                />
              </a> */}
              Home
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
          {/* {status === "loading" && <Spinner />}
          {status === "authenticated" && ( */}
          <Flex alignItems={"center"}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                {/* <Avatar size={"sm"} src={session.user.image} /> */}
              </MenuButton>
              <MenuList>
                <MenuItem>Log out</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
          {/* )} */}
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

export default Navbar;
