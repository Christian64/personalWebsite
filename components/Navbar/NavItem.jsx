import { Link, VStack, Icon, Text } from "@chakra-ui/react";

export const NavItem = ({ text, link, icon, isLast = false }) => (
  <Link
    _hover={{ color: isLast ? "white" : "#FF3131" }}
    flexGrow={1}
    borderRadius={50}
    color={isLast ? "white" : ""}
    bg={isLast ? "#FF3131" : ""}
    p={3}
    href={link}
    target="_blank"
  >
    <VStack spacing={1}>
      <Icon as={icon} />
      <Text>{text}</Text>
    </VStack>
  </Link>
);
