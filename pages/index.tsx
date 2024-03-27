import { Box } from "@mui/material";
import type { NextPage } from "next";
import Experience from "../src/components/Sections/TechTools/TechTools";
import Hero from "../src/components/Sections/Hero/Hero";
import Perks from "../src/components/Sections/Perks/Perks";
import Projects from "../src/components/Sections/Projects/Projects";
import CTA from "../src/components/Sections/CallToAction/CTA";
import { useEffect, useRef } from "react";
import CursorAnimation from "../src/gsap/CursorAnimation";
import About from "../src/components/Sections/About/About";
import Layout from "../Layout/Layout";

const Home: NextPage = ({ projectsArray, iconsArray }: any) => {
  const ball = useRef();

  useEffect(() => {
    if (ball && ball.current) {
      CursorAnimation(ball.current);
    }
  }, []);
  return (
    <Layout desc={``} title="Daniel Febrian">
      <Box
        sx={{
          margin: "0 auto",
          color: "white",
        }}
      >
        <Hero />
        <About />
        <Perks />
        <Experience iconsArray={iconsArray} />
        <Projects />
        {/* <CTA /> */}

        <Box
          ref={ball}
          sx={{
            display: {
              xs: "none",
              md: "block",
            },
          }}
          className="ball"
        ></Box>
      </Box>
    </Layout>
  );
};

export default Home;
