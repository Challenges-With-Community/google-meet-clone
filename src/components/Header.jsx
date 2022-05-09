import { useHeader } from "../hooks/useHeader";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import FeedbackOutlinedIcon from "@material-ui/icons/FeedbackOutlined";
import HelpOutlineOutlinedIcon from "@material-ui/icons/HelpOutlineOutlined";
import IconButton from "@material-ui/core/IconButton";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";

const Header = () => {
  const { user, signIn, isUserExist, currentDate} = useHeader();

  return (
    <div className="Header">
      <div className="Logo">
        <a
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
          }}
        >
          <img
            src="src/assets/img/google_meet_horizontal_wordmark_2020q4_1x_icon.png"
            alt="Google Meet Image"
          />
          <span
            style={{
              paddingLeft: "4px",
              color: "#5f6368",
              opacity: 1,
              display: "inline-block",
              fontFamily: '"Product Sans",Arial,sans-serif',
              fontSize: "22px",
              lineHeight: "24px",
              position: "relative",
              top: "-1.5px",
              verticalAlign: "middle",
              fontWeight: 400,
            }}
          >
            Meet
          </span>
        </a>
      </div>
      <div className="Header-Info">
        <div className="Datetime">{currentDate}</div>
        <div className="Header-Info-Icons">
          <IconButton>
            <HelpOutlineOutlinedIcon />
          </IconButton>
          <IconButton>
            <FeedbackOutlinedIcon />
          </IconButton>
          <IconButton>
            <SettingsOutlinedIcon />
          </IconButton>
        </div>
      </div>
      <div style={{ paddingLeft: "18px" }}>
        {isUserExist ? (
          <Avatar alt="Profile image" src={user?.photoURL} />
        ) : (
          <Button
            color="primary"
            disableElevation={true}
            variant="contained"
            onClick={signIn}
          >
            Iniciar sesion
          </Button>
        )}
      </div>
    </div>
  );
};

export default Header;
