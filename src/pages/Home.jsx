import React, { useState } from "react";
import NewMeeting from "../components/NewMeeting";
import {
  Button,
  Box,
  TextField,
  InputAdornment,
  Divider,
} from "@material-ui/core";
import Carousel from "../components/Carousel";
import KeyboardOutlinedIcon from "@material-ui/icons/KeyboardOutlined";

const Home = () => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [roomCode, setRoomCode] = useState("");
  const [joinButtonClass, setJoinButtonClass] = useState("Hide-Join-Button");

  const handleFocus = (e) => {
    e.preventDefault();
    setJoinButtonClass("Show-Join-Button");
  };

  const handleBlur = (e) => {
    e.preventDefault();
    if (roomCode.length > 0) {
      setJoinButtonClass("Show-Join-Button");
    } else {
      setJoinButtonClass("Hide-Join-Button");
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setRoomCode(value);
    if (value.length === 0) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  };

  return (
    <div className="Home">
      <div className="Home-Meeting">
        <div className="Home-Meeting-Description">
          <h1>
            Videollamadas Premium. <br />
            Ahora gratis para todos.{" "}
          </h1>
          <p className="GoogleMeetDescription">
            Hemos rediseñado nuestro servicio de reuniones seguras para
            empresas, Google Meet, para que todo el mundo pueda usarlo de forma
            gratuita.
          </p>
        </div>
        <div className="Home-Meeting-Buttons">
          <NewMeeting />
          <div className="Home-Meeting-Buttons-Code">
            <TextField
              onFocus={handleFocus}
              onBlur={handleBlur}
              onChange={handleChange}
              type="text"
              size="medium"
              id="input-rom-code"
              value={roomCode}
              variant="outlined"
              placeholder="Introduce un código o apodo"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <KeyboardOutlinedIcon />
                  </InputAdornment>
                ),
              }}
            />
            <Button
              color="primary"
              id="join-button"
              className={joinButtonClass}
              style={{
                height: "3em",
                fontSize: "1em",
                marginBottom: "1em",
                marginRight: ".5em",
                marginLeft: ".5rem",
                whiteSpace: "nowrap",
                outline: "1px solid transparent",
                textTransform: "none",
              }}
              disabled={isDisabled}
            >
              Unirme
            </Button>
          </div>
          <div className="LinkContainerOne">
            <div
              style={{
                marginTop: "2em",
                borderBottom: "1px solid",
                alignSelf: "stretch",
                width: "100%",
                borderColor: "#dadce0",
              }}
            />
            <div style={{ marginTop: "2rem" }}>
              <a
                className="Link"
                href="https://meet.google.com/about/redirect/landing-learn-more/?hl=es"
                target="_blank"
              >
                Más información sobre Google Meet
              </a>
            </div>
          </div>
        </div>
      </div>
      <Divider variant="middle" />
      <div className="Home-Info">
        <Carousel />
        <div className="LinkContainerTwo">
          <a
            className="Link"
            href="https://meet.google.com/about/redirect/landing-learn-more/?hl=es"
            target="_blank"
          >
            Más información sobre Google Meet
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
