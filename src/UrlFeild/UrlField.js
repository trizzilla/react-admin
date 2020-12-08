import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import LaunchIcon from "@material-ui/icons/Launch";

//JSS
const Styles = makeStyles({
  link: {
    textDecoration: "none",
  },
  icon: {
    width: "0.5em",
    paddingLeft: 2,
  },
});

//defining href
const Url = ({ record = {}, source }) => {
  const classes = Styles();
  return (
    <a href={record[source]} className={classes.link}>
      {record[source]}

      <LaunchIcon className={classes.icon} />
    </a>
  );
};

export default Url;
