import { Box } from "@mui/material";
import CustomLink from "../Mui/CustomLink";
import { useRouter } from "next/router";
import gsap from "gsap";

const Logo = ({ toggleDrawer, colorMode, color }: any) => {
  const router = useRouter();
  return (
    <Box
      onClick={() => {
        toggleDrawer(false);
        if (router.pathname !== "/") {
          console.log("pathname: ", router);
          router.push("/");
        }
        gsap.to(window, {
          duration: 1,
          scrollTo: `#hero`,
        });
      }}
      sx={{
        flex: 1,
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        gap: 1,
      }}
    >
      <img
        className={`${colorMode.mode === "dark" ? " " : ""}small`}
        src="https://ucarecdn.com/797bbf2b-71b1-4687-ad21-24b3311dfb1c/-/scale_crop/300x300/"
        alt=""
      />
      <CustomLink color={color} fontWeight="600" text="DanFeb" href="/" />
    </Box>
  );
};

export default Logo;
