
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';

import Logo from "@/assets/img/GoogleMeet.svg";
import "./styles.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <a href="">
        <img
          className="navbar_logo"
          aria-hidden="true"
          data-atf="true"
          width="180"
          src={Logo}
          alt=""
        />
      </a>
      <div>
        <Button
          variant="contained"
          disableElevation={true}
          style={{
            textTransform: "lowercase",
            fontSize: "15px",
            fontWeight: "500",
            height: "45px",
          }}
        >
          Iniciar una reunión
        </Button>
        {/* <Avatar alt="Remy Sharp" src="https://lh3.googleusercontent.com/ogw/ADea4I7d0fN4b7KaeBN6GbI2JW7-0HWvsdMP3WsL-Dn_=s32-c-mo" /> */}
      </div>
    </div>
  );
};