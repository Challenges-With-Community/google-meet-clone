import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

const Steps = [
    {
        title: <span className="StepsTitles">Obtén un enlace para compartir</span>,
        description: <span className="StepsDescriptions">Toca <strong>Nueva reunión</strong> para generar un enlace que puedes compartir con las personas con las que quieres reunirte</span>,
        imgPath:
            'src/assets/svgs/user_edu_get_a_link_light.svg',
    },
    {
        title: <span className="StepsTitles">Ver a todos juntos</span>,
        description: <span className="StepsDescriptions">Para ver más participantes a la vez, ve a Cambiar diseño en el menú de opciones Más</span>,
        imgPath:
            'src/assets/svgs/user_edu_brady_bunch_light.svg',
    },
    {
        title: <span className="StepsTitles">Tu reunión es segura</span>,
        description: <span className="StepsDescriptions">Ninguna persona ajena a tu organización puede unirse a una reunión a menos que haya recibido una invitación o que la haya admitido el organizador</span>,
        imgPath:
            'src/assets/svgs/user_edu_safety_light.svg',
    },
];

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 400,
        flexGrow: 1,
        background: 'transparent',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 'auto',
    },
    texts: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: "auto",
        maxWidth: 330,
    },
    img: {
        height: 330,
        maxWidth: 330,
        overflow: 'hidden',
        // width: '100%',
    },
    buttons: {
        maxWidth: 450,
        overflow: 'hidden',
        width: '130%',
        display: "flex",
        justifyContent: "space-between",
        margin: 0,
        position: 'absolute',
        top: '140px',
    }
}));

export default function Carousel() {
    const classes = useStyles();
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = Steps.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <div className={classes.root} style={{ position: 'relative' }}>
            <div className={classes.buttons}>
                <IconButton onClick={handleBack} disabled={activeStep === 0}>
                    {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                </IconButton>
                <IconButton onClick={handleNext} disabled={activeStep === 2}>
                    {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                </IconButton>
            </div>
            <img
                className={classes.img}
                src={Steps[activeStep].imgPath}
                alt={Steps[activeStep].label}
            />
            <Paper square elevation={0} className={classes.texts}>
                <Typography>{Steps[activeStep].title}</Typography>
                <Typography>{Steps[activeStep].description}</Typography>
            </Paper>
            <MobileStepper
                variant="dots"
                steps={3}
                position="static"
                activeStep={activeStep}
                className={classes.root}
            />
        </div>
    );
}
