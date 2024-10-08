import { Container, Box, Grid, Divider } from "@mui/material";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import ReadMore from "../ReadMore/ReadMore";
import { ColorModeContext } from "../../../../pages/_app";
import { useContext } from "react";
const About = () => {
  const colorMode = useContext(ColorModeContext);
  return (
    <>
      <Container
        id="about"
        maxWidth="lg"
        sx={{
          margin: "0 auto",
          py: "6em",
        }}
      >
        <Grid
          container
          sx={{
            justifyContent: {
              sm: "center",
              md: "space-between",
            },
          }}
        >
          <Grid item xs={12} sm={12} md={4} lg={5}>
            <Box
              sx={{
                maxWidth: "400px",
                width: "100%",
                height: "450px",
                margin: "0 auto",
                boxShadow: {
                  xs: "-.5em 1.5em 0px #0092ff",
                  sm: "-1.5em 1.5em 0px #0092ff",
                },
                position: "relative",
              }}
            >
              <Box
                sx={{
                  width: "100px",
                  height: "100px",
                  zIndex: "0",
                  position: "absolute",
                  right: {
                    xs: "-4%",
                    sm: "90%",
                  },

                  bottom: {
                    xs: "-5%",
                    sm: "-10%",
                  },
                  background: "transparent",
                  backgroundImage:
                    colorMode.mode === "dark"
                      ? "radial-gradient(white 2px, transparent 0)"
                      : "radial-gradient(black 2px, transparent 0)",
                  backgroundSize: "15px 13px",
                }}
              ></Box>
              <Image
                alt="Personal Image"
                className="img1 "
                layout="fill"
                src={`https://ucarecdn.com/62fd897f-f614-48a8-9c09-07badaf8f9f4/-/scale_crop/800x800/`}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={7.5} lg={7}>
            <Box
              sx={{
                pb: ".5em",
              }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontSize: {
                    xs: "2.2em",
                    sm: "2.5em",
                    md: "3em",
                  },
                  mt: {
                    lg: "1.5em",
                  },
                  py: ".5em",
                  pt: {
                    xs: "1.8em",
                    md: 0,
                  },
                }}
                fontWeight="600"
              >
                About Me
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  maxWidth: "570px",
                  fontSize: {
                    xs: ".8em",
                    sm: "1em",
                  },
                }}
              >
                I am a Web Developer who embarked on my educational journey at
                UNIKA Soegijapranata, nestled in the heart of Semarang, Central
                Java. My initial foray into the world of Web Development saw me
                navigating various projects as a versatile Fullstack Developer.
                However, my current endeavors find me predominantly immersed in
                the captivating realm of Frontend Development.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Divider />
    </>
  );
};

export default About;
