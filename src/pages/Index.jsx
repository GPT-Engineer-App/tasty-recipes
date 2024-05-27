import { Box, Container, Flex, Heading, Text, VStack, Image, Link, HStack, Spacer } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const recipes = [
  {
    title: "Spaghetti Carbonara",
    image: "https://via.placeholder.com/150",
    description: "A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper."
  },
  {
    title: "Chicken Tikka Masala",
    image: "https://via.placeholder.com/150",
    description: "Chunks of grilled chicken (tikka) cooked in a creamy, spiced tomato sauce."
  },
  {
    title: "Chocolate Cake",
    image: "https://via.placeholder.com/150",
    description: "A rich and moist chocolate cake perfect for any occasion."
  }
];

const Index = () => {
  return (
    <Box>
      <Flex as="nav" bg="teal.500" color="white" padding={4}>
        <HStack spacing={8} alignItems="center">
          <Heading size="md">RecipeShare</Heading>
          <Link href="/">Home</Link>
          <Link href="/recipes">Recipes</Link>
          <Link href="/submit">Submit a Recipe</Link>
          <Link href="/contact">Contact</Link>
        </HStack>
      </Flex>

      <Container maxW="container.md" centerContent py={10}>
        <VStack spacing={4} textAlign="center">
          <Heading>Welcome to RecipeShare</Heading>
          <Text>Discover and share amazing recipes from around the world. Whether you're a seasoned chef or a home cook, you'll find something to inspire your next meal.</Text>
        </VStack>
      </Container>

      <Container maxW="container.md" py={10}>
        <Heading size="lg" mb={6}>Recipes</Heading>
        <VStack spacing={8}>
          {recipes.map((recipe, index) => (
            <Flex key={index} w="100%" borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src={recipe.image} alt={recipe.title} boxSize="150px" objectFit="cover" />
              <Box p={6}>
                <Heading size="md">{recipe.title}</Heading>
                <Text mt={4}>{recipe.description}</Text>
              </Box>
            </Flex>
          ))}
        </VStack>
      </Container>

      <Box as="footer" bg="gray.800" color="white" py={6}>
        <Container maxW="container.md">
          <Flex justify="space-between" align="center">
            <Text>&copy; 2023 RecipeShare. All rights reserved.</Text>
            <HStack spacing={4}>
              <Link href="https://facebook.com" isExternal><FaFacebook /></Link>
              <Link href="https://twitter.com" isExternal><FaTwitter /></Link>
              <Link href="https://instagram.com" isExternal><FaInstagram /></Link>
            </HStack>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;