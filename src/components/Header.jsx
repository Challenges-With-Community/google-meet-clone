import React, {useEffect, useState} from 'react';
import {Avatar} from "@material-ui/core";
import FeedbackOutlinedIcon from '@material-ui/icons/FeedbackOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import IconButton from "@material-ui/core/IconButton";

const Header = () => {
    const [time, setTime] = useState('');

    const days = ['dom', 'lun', 'mar', 'mie', 'jue', 'vie', 'sab'];
    const months = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'];

    const date = () => {
        let today = new Date();
        let month = months[today.getMonth()];
        let dayNumber = today.getDate();
        let day = days[today.getDay()];
        let hour = today.getHours();
        let minutes = today.getMinutes();
        if (String(minutes).length === 1) {
            minutes = `0${minutes}`;
        }
        return `${hour}:${minutes} • ${day}, ${dayNumber} ${month}`;
    }

    useEffect(() => {
        setInterval(() => {
            setTime(date());
        }, 1000)
    }, [])

  return (
      <div className="Header">
          <div className="Logo">
              <a href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                  <img src='src/assets/img/google_meet_horizontal_wordmark_2020q4_1x_icon.png' alt='Google Meet Image'/>
                  <span style={{
                      paddingLeft: '4px',
                      color: '#5f6368',
                      opacity: 1,
                      display: 'inline-block',
                      fontFamily: '"Product Sans",Arial,sans-serif',
                      fontSize: '22px',
                      lineHeight: '24px',
                      position: 'relative',
                      top: '-1.5px',
                      verticalAlign: 'middle',
                      fontWeight: 400
                  }}
                  >
                      Meet
                  </span>
              </a>
          </div>
              <div className="Header-Info">
                  <div className="Datetime">
                      {date()}
                  </div>
                  <div className="Header-Info-Icons">
                      <IconButton><HelpOutlineOutlinedIcon /></IconButton>
                      <IconButton><FeedbackOutlinedIcon /></IconButton>
                      <IconButton><SettingsOutlinedIcon /></IconButton>
                  </div>
              </div>
              <div>
                  <Avatar alt="Profile image" src='' />
              </div>
      </div>
  );
}

export default Header;
