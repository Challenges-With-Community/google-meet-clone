import React from 'react';
import {Button, ClickAwayListener, Grow, Menu, MenuItem, MenuList, Popper} from "@material-ui/core";
import VideoCallOutlinedIcon from '@material-ui/icons/VideoCallOutlined';
import Paper from "@material-ui/core/Paper";
import LinkOutlinedIcon from '@material-ui/icons/LinkOutlined';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';

const NewMeeting = () => {
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        setOpen(false);
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }
        prevOpen.current = open;
    }, [open]);

  return (
      <div style={{ marginBottom: '25px' }}>
          <Button
              ref={anchorRef}
              aria-controls={open ? 'menu-list-grow' : undefined}
              aria-haspopup="true"
              onClick={handleToggle}
              startIcon={<VideoCallOutlinedIcon />}
              disableElevation={true}
              className='NewMeetingButton'
              style={{ height: 56, textTransform: 'inherit', fontSize: '1rem', fontWeight: 500, marginRight: 15 }}
              variant="contained"
              color="primary"
          >
              Nueva reunión
          </Button>
          <Popper style={{ zIndex: 1 }} open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
              {({ TransitionProps, placement }) => (
                  <Grow
                      {...TransitionProps}
                      style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                  >
                      <Paper>
                          <ClickAwayListener onClickAway={handleClose}>
                              <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                  <MenuItem className="NewMeetingItems" onClick={handleClose}><LinkOutlinedIcon /> Crear una reunión para más tarde</MenuItem>
                                  <MenuItem className="NewMeetingItems" onClick={handleClose}><AddOutlinedIcon /> Iniciar una reunión ahora</MenuItem>
                                  <MenuItem className="NewMeetingItems" onClick={handleClose}><CalendarTodayIcon /> Programar en Google Calendar</MenuItem>
                              </MenuList>
                          </ClickAwayListener>
                      </Paper>
                  </Grow>
              )}
          </Popper>
      </div>
  );
}

export default NewMeeting;
