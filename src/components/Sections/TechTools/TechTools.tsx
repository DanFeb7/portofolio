import { Container, Typography, Grid, Divider } from "@mui/material";
import { useContext, useEffect } from "react";
import { ColorModeContext } from "../../../../pages/_app";
import MainTitleAnimation from "../../../gsap/MainTitleAnimation";
import { centeredStyles } from "../Perks/Perks";
import ToolCard from "./ToolCard";
import gsap from "gsap";

const TechTools = ({ iconsArray }: any) => {
  //   let FrontendTools =
  //     iconsArray && iconsArray.filter((icon: any) => !icon.isBackend);
  const FrontendTools = [
    {
      title: "Next JS",
      svg: "https://www.svgrepo.com/show/373873/next.svg",
      isBackend: false,
    },
    {
      title: "React JS",
      svg: "https://www.svgrepo.com/show/493719/react-javascript-js-framework-facebook.svg",
      isBackend: false,
    },
    {
      title: "Vue JS",
      svg: "https://www.svgrepo.com/show/493625/vue-vuejs-javascript-js-framework.svg",
      isBackend: false,
    },
    {
      title: "Laravel",
      svg: "https://www.svgrepo.com/show/373472/blade.svg",
      isBackend: false,
    },
    {
      title: "Angular JS",
      svg: "https://www.svgrepo.com/show/373427/angular.svg",
      isBackend: false,
    },
    {
      title: "Typescript",
      svg: "https://www.svgrepo.com/show/349540/typescript.svg",
      isBackend: false,
    },
    {
      title: "Javascript",
      svg: "https://www.svgrepo.com/show/349419/javascript.svg",
      isBackend: false,
    },
    {
      title: "PHP",
      svg: "https://www.svgrepo.com/show/373970/php3.svg",
      isBackend: false,
    },
    {
      title: "PostgreSQL",
      svg: "https://www.svgrepo.com/show/373965/pgsql.svg",
      isBackend: false,
    },
    {
      title: "MySQL",
      svg: "https://www.svgrepo.com/show/303251/mysql-logo.svg",
      isBackend: false,
    },
    {
      title: "Git",
      svg: "https://www.svgrepo.com/show/373623/git.svg",
      isBackend: false,
    },
  ];
  let OtherTools =
    iconsArray && iconsArray.filter((icon: any) => icon.isBackend);

  const colorMode = useContext(ColorModeContext);
  // turn off "filter" mode when the theme is set to dark mode
  const isfilterMode = (item: any) =>
    colorMode?.mode === "light" ? false : item?.filter;

  useEffect(() => {
    MainTitleAnimation(".title1", ".title2");
    gsap.to(".secondTitle", {
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: ".secondTitle",
        start: "top 70%",
      },
    });
  }, []);

  return (
    <>
      {" "}
      <Container
        id="framework"
        maxWidth="lg"
        sx={{
          margin: "0 auto",
          py: {
            xs: "6em",
          },
        }}
      >
        <Grid container>
          <Grid item sx={centeredStyles}>
            <Typography
              className=" title1 t25o0"
              variant="h1"
              sx={{
                fontSize: {
                  xs: "2.2em",
                  sm: "2.5em",
                  md: "2.8em",
                },
              }}
              fontWeight="600"
            >
              {/* Tools Of The Present And Future  */}
              Framework & Technologies
            </Typography>
            <Typography
              variant="h2"
              className="secondary title2 t25o0"
              sx={{
                pt: "1.5em",
                maxWidth: "570px",
                fontSize: {
                  xs: ".8em",
                  sm: "1em",
                },
              }}
            >
              My preferred framework & technologies
            </Typography>
          </Grid>
          <Grid
            sx={{
              ...centeredStyles,
              flexDirection: "row",
              justifyContent: {
                xs: "center",
              },
              mt: "3em",
              flexWrap: "wrap",
            }}
            xs={12}
            item
          >
            {FrontendTools &&
              FrontendTools.map((item: any) => {
                return (
                  <ToolCard
                    className="toolCard1"
                    filter={isfilterMode(item)}
                    svg={item.svg}
                    title={item.title}
                    key={item.title}
                  />
                );
              })}
          </Grid>
        </Grid>
      </Container>{" "}
      <Divider />{" "}
    </>
  );
};

export default TechTools;
