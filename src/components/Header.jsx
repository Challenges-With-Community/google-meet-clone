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
                  <Avatar alt="Profile image" src='https://lh3.googleusercontent.com/fife/AAWUweW7IcAZ3iInuLztIlVCY6MgX1E7Al6VuiMFFw50-JCKjlnWZdAiMltdjv1pt9pt4OuL2Tni2qpM2yvJghxytpU8MYaLma4DCTCPijDCrepa4rdIL_1mQcvlG8_tbQat_DjCwJzTK1RwD82koZsfpH5brPDejH-hYIBwXfl1kWt1ItlfAS2oWFT0j60-14n17W2E_KEQBqT_tkB9f9D1kGOLN48OvTX5BC7rh2E1C5mFCOO9ujDhmbxNcV7aUwPv6y_nOFCelHHrId4cNWk3UA9Mizf0h94gOEF_i7P-yd-tcAhkExeqQjFNXOea2dkRLmGThN_BpRL4BLDZgbr0Xd5LAab4YGi5T6NbpR5Ngoh0i7iPPVhP9kgNIgVX1kHReWr5JiVAD0q0Iw5ont5L1ezppL5hixJC8LTiY6fpNWi8Slv3WBIUXzLATSlwksx1dMsfo46leTmaG_daZgZt2g_sm5ST2Vs3znt1msRWjgY10JqCcJ85EPSo567is18ws-7pncMnIOPJzZD0kIJghQBfbF4ker6EAw1t_QKO-kg-tCRFV1hEgalkaA6IA5VXdTp_0ebdr3_2A1zkR6xhgHdSNDHeHKAb1UsbkWepXEWuZjrC_5qiKldn83OJNO2iBNbDK_v48oGLMDvAvORoAatjG_fJocoe_Qk5Joi5LfFSGnf4f5u7ZBZyp5kubRute7ou2WXLbQQmEjkaBlqEUfyT0XPw_eWRuR8OlvtjzO5K_SUdqNHW0sBX5d_zOAkERKza36Y9AbcdM7PoNCq6BOfCNwRO4ptZGY2GZXkR5HlWgO6i80ZmE4VG7XtoahOnI8HDimSY6VxQKKtSFKYvYumczktMRziY_xNY3hwxaeVJ8BYiV7BPLgUuoFTTbID70-6D=s32-c' />
              </div>
      </div>
  );
}

export default Header;
