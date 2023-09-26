import Image from "next/image";
import Link from "next/link";
import { StyledLogo, Text } from "./styles";
import { Avatar, Box, Typography } from "@mui/material";

const Logo = () => (
  <Link href={"/"}>
    <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
      <Avatar src="https://res.cloudinary.com/rayson/image/upload/v1655049181/Santarem%20TI/FaveIcon/favicon.ico">
        {/* <Image
          
          width="40px"
          height="40px"
          objectFit={"cover"}
          layout="fixed"
        /> */}
      </Avatar>
      <Typography variant="h2" fontSize={24}>
        Santarém TI
      </Typography>
    </Box>
  </Link>
);

export default Logo;
