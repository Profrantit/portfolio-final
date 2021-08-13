import React from "react";

import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Image from "../images/AvatarMak.png";

export default function Hero() {
  return (
    <>
      <Container fixed>
        <Typography
          className="animate__animated animate__bounce"
          lg={12}
          style={{ fontWeight: "bold" }}
          variant="h3"
        >
          Front End Developer
        </Typography>
        <Typography variant="h5">I code, I review, I drink coffee</Typography>

        <img className="avatar" align="center" alt="avatar" src={Image} />
      </Container>
    </>
  );
}
