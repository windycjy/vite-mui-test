import Navigation from "./layouts/Navigation";
import Home from "./layouts/Home";
import { Container } from "@mui/material";

const App = () => {
  return (
    <>
      <Navigation />
      <Container maxWidth="xl">
        <Home />
      </Container>
    </>
  );
};

export default App;
