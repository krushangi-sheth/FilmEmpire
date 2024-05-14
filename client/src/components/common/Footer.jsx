 import { Paper, Stack, Typography,Grid} from '@mui/material';
import React from 'react';
import Container from './Container';
import Logo from './Logo';
import uiConfigs from "../../configs/ui.configs";

const Footer = () => {
  return (
    <Container>
  <Paper square={true} sx={{ backgroundImage: "unset", padding: "2rem" }}>
    <Grid
      container
      justifyContent="space-between"
      alignItems="center"
      sx={{ height: "max-content" }}
    >
      <Grid item>
        <Logo />
      </Grid>
      <Grid item>
        <Stack>
        <Typography
                    variant="h6"
                    fontSize={{ xs: "1rem", md: "1rem", lg: "1rem" }}
                    fontWeight="300"
                    sx={{
                      ...uiConfigs.style.typoLines(2, "left")
                    }}
        >
          Designed By
          <br/>
          Krushangi Sheth
        </Typography>
        </Stack>
      </Grid>
    </Grid>
  </Paper>
</Container>
  );
};

export default Footer;