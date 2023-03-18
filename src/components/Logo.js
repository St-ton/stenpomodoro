import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";
import classes from "./Logo.module.css";

export default function Logo() {
  return (
    <h1 className={classes.text}>
      <Link to="/" className={classes.link}>
        STEN <img src={logo} alt="stenpomodoro" className={classes.logo} />
        POMODORO
      </Link>
    </h1>
  );
}
