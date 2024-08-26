import { faEarth, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AppBar, Container, IconButton, useTheme } from "@mui/material";
import { FC } from "react";
import FlexRow from "../components/FlexRow";

const Navigation: FC = () => {
  const theme = useTheme();
  return (
    <AppBar
      component="nav"
      position="static"
      sx={{ py: 2, backgroundColor: theme.palette.background.default }}
    >
      <Container maxWidth="xl">
        <FlexRow sx={{ justifyContent: "flex-end", gap: 1 }}>
          <IconButton size="small">
            <FontAwesomeIcon icon={faUser} color="white" />
          </IconButton>
          <IconButton size="small">
            <FontAwesomeIcon icon={faEarth} color="white" />
          </IconButton>
        </FlexRow>
      </Container>
    </AppBar>
  );
};

export default Navigation;
