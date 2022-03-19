import React from "react";
import GitHub from "@material-ui/icons/GitHub";
import Twitter from "@material-ui/icons/Twitter";
import LinkedIn from "@material-ui/icons/LinkedIn";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Link from "@material-ui/core/Link";

const socialItems = [
  {
    icon: GitHub,
    url: "https://github.com/jesusmirena",
  },
  {
    icon: Twitter,
    url: "https://twitter.com/Sr_leblanc16",
  },
  {
    icon: LinkedIn,
    url: "https://www.linkedin.com/in/jesus-alejandro-mirena-hidalgo/",
  },
];
const Social = ({ direction }) => {
  return (
    <Grid container direction={direction || "row"} spacing={1}>
      {socialItems.map((item) => (
        <Grid item>
          <Link href={item.url}>
            <IconButton>
              <item.icon />
            </IconButton>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

export default Social;
