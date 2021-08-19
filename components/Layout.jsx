import { Container, Box } from "@chakra-ui/react";
import Footer from "./Footer";

export default function Layout({ children }) {
	return (
		<>
			<Container maxW="container.lg" minH="90vh" p="5">
				<Box as="main" my={10}>
					{children}
				</Box>
			</Container>
			<Footer />
		</>
	);
}
