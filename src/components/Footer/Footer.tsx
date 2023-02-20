import React, { FC, ReactElement } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

export const Footer: FC = (): ReactElement => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        backgroundColor: "black",
        paddingTop: "1rem",
        paddingBottom: "1rem",
        color: "white",
      }}
    >
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <Typography variant="h5">Shopstore</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1">
              {`${new Date().getFullYear()} | &copy; | All right reserved`}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
