import gsap from "gsap";
import { Box, Typography, Divider, Grid } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import GitHubIcon from "@mui/icons-material/GitHub";

import Link from "next/link";
import { useRouter } from "next/router";
function Copyright() {
  return (
    <>
      <Divider />
      <Box
        maxWidth="lg"
        sx={{
          textAlign: "center",
          margin: "1em auto",
        }}
      >
        <Typography variant="h1" fontSize="1em">
          {"Copyright © "}
          Daniel Febrian {""}
          {new Date().getFullYear()}
          {"."}
        </Typography>
      </Box>
    </>
  );
}
const styles = {
  mt: "1em",
  display: "flex",
  flexDirection: "column",
  gap: "15px",
  flexWrap: "wrap",
  color: "white",
};

function Footer() {
  const router = useRouter();
  return (
    <Box id="contact">
      <Divider />
      <Typography
        className="h1"
        variant="h1"
        sx={{
          fontSize: {
            xs: "2.2em",
            sm: "2.5em",
            md: "3em",
          },
          mt: "0.5em",
          textAlign: "center",
        }}
        fontWeight="600"
      >
        Contact
      </Typography>
      <Box
        sx={{
          width: "100%",
          color: "white",
          minHeight: "200px",
          display: "flex",
          flexDirection: {
            xs: "column",
            md: "row",
            lg: "row",
          },
          justifyContent: "space-around",
          margin: "0",
          pt: "1em",
          px: {
            xs: "0.5em",
            sm: "0.5em",
            md: "8em",
            lg: "8em",
          },
          gap: {
            xs: "0.7em",
            sm: "0.7em",
          },
        }}
      >
        <Link href={"https://www.instagram.com/danfeb._"}>
          <Box
            sx={{
              display: "flex",
              flexDirection: {
                xs: "row",
                sm: "row",
                md: "column",
                lg: "column",
              },
              justifyContent: {
                xs: "start",
                sm: "start",
                md: "center",
                lg: "center",
              },
              alignItems: "center",
              ":hover": {
                color: "#0092ff",
              },
              gap: "8px",
            }}
          >
            <InstagramIcon
              sx={{
                fontSize: "42px",
                // marginBottom: "8px",
              }}
            />
            @danfeb._
          </Box>
        </Link>
        <Link href={"https://www.linkedin.com/in/danfeb"}>
          <Box
            sx={{
              display: "flex",
              flexDirection: {
                xs: "row",
                md: "column",
                lg: "column",
              },
              justifyContent: {
                xs: "start",
                sm: "start",
                md: "center",
                lg: "center",
              },
              alignItems: "center",
              ":hover": {
                color: "#0092ff",
              },
              gap: "8px",
            }}
          >
            <LinkedInIcon
              sx={{
                fontSize: "42px",
              }}
            />
            Daniel Febrian
          </Box>
        </Link>
        <Link href={"https://github.com/DanFeb7"}>
          <Box
            sx={{
              display: "flex",
              flexDirection: {
                xs: "row",
                md: "column",
                lg: "column",
              },
              justifyContent: {
                xs: "start",
                sm: "start",
                md: "center",
                lg: "center",
              },
              alignItems: "center",
              ":hover": {
                color: "#0092ff",
              },
              gap: "8px",
            }}
          >
            <GitHubIcon
              sx={{
                fontSize: "42px",
              }}
            />
            DanFeb7
          </Box>
        </Link>
        <Link href={"mailto:danfeb.febrian007@gmail.com"}>
          <Box
            sx={{
              display: "flex",
              flexDirection: {
                xs: "row",
                md: "column",
                lg: "column",
              },
              justifyContent: {
                xs: "start",
                sm: "start",
                md: "center",
                lg: "center",
              },
              alignItems: "center",
              ":hover": {
                color: "#0092ff",
              },
              gap: "8px",
            }}
          >
            <EmailIcon
              sx={{
                fontSize: "42px",
              }}
            />
            danfeb.febrian007@gmail.com
          </Box>
        </Link>
        <Link href={"http://wa.me/+6289624783493"}>
          <Box
            sx={{
              display: "flex",
              flexDirection: {
                xs: "row",
                md: "column",
                lg: "column",
              },
              justifyContent: {
                xs: "start",
                sm: "start",
                md: "center",
                lg: "center",
              },
              alignItems: "center",
              ":hover": {
                color: "#0092ff",
              },
              gap: "8px",
              mb: {
                xs: "1em",
                sm: "1em",
                md: "0",
                lg: "0",
              },
            }}
          >
            <WhatsAppIcon
              sx={{
                fontSize: "42px",
              }}
            />
            +62896-2478-3493
          </Box>
        </Link>
      </Box>
      <Copyright />
    </Box>
  );
}
export default Footer;
