import React, { useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Hidden from "@material-ui/core/Hidden";
import Zoom from "@material-ui/core/Zoom";
import { makeStyles } from "@material-ui/styles";
import { StaticImage } from "gatsby-plugin-image";

import Social from "./Social";

const useStyles = makeStyles((theme) => ({
  section: {
    height: "90vh",
  },
  content: {
    height: "100%",
    zIndex: 100,
    position: "relative",
  },
  container: {
    height: "100%",
  },
  overlay: {
    backgroundColor: "rgba(0,0,0, 0.4)",
    height: "100%",
    width: "100%",
    position: "absolute",
    zIndex: 2,
  },
  aboutMeImage: {
    height: "100%",
    width: "100%",
    position: "absolute",
    zIndex: 1,
  },
}));

const AboutMe = () => {
  const [shouldShow, setShouldShow] = useState(false);
  const styles = useStyles();

  useEffect(() => setShouldShow(true), []);

  return (
    <Paper className={styles.section}>
      <StaticImage
        className={styles.aboutMeImage}
        src="https://cdn.wallpapersafari.com/57/75/IhN4JX.png"
      />
      <div className={styles.overlay}></div>
      <Container className={styles.container} maxWidth="md">
        <Grid
          className={styles.content}
          container
          justifyContent="space-between"
          alignItems="center"
        >
          <Zoom in={shouldShow}>
            <Grid item sm={8}>
              <Typography component="h1" variant="h3">
                Hi there, my name is Jesus Mirena,
              </Typography>
              <Typography variant="h5">
                I'm a full-stack Javascript developer based in Peru with 1 year
                of experience. I make websites and web applications.
              </Typography>
              <Box my={2}>
                <Button
                  href="mailto:jesusamh16@gmail.com"
                  variant="outlined"
                  color="secondary"
                >
                  Reach me out!
                </Button>
              </Box>
            </Grid>
          </Zoom>

          <Hidden xsDown>
            <Grid item>
              <Social direction="column" />
            </Grid>
          </Hidden>
        </Grid>
      </Container>
    </Paper>
  );
};

export default AboutMe;
