import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import FolderIcon from '@mui/icons-material/Folder';
import { Avatar } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkIcon from '@mui/icons-material/Link';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import { Download } from '@mui/icons-material';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Paper from '@mui/material/Paper';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import MobileStepper from '@mui/material/MobileStepper';
import Divider from '@mui/material/Divider';
import { useMediaQuery } from '@mui/material';
import { Link as ScrollLink, Element } from 'react-scroll';

const theme = createTheme({
  palette: {
    primary: {
      main: '#45664b',
    },
    secondary: {
      main: '#dbccee',
    },
  },
  typography: {
    fontFamily: 'Abril Fatface, Arial, sans-serif',
    h6: {
      fontWeight: 'bold',
    },
    button: {
      textTransform: 'none',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#dddddd',
        },
      },
    },
  },
});

// Images for About Me

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'XC Championships @ McDaniel, 2023',
    imgPath: `${process.env.PUBLIC_URL}/images/ucxc.jpg`,
  },
  {
    label: 'New Orleans Saints @ Philadelphia Eagles, 2023',
    imgPath: `${process.env.PUBLIC_URL}/images/dadeagles.jpg`,
  },
  {
    label: 'Outdoor Track Meet @ Widener Invitational, 2023',
    imgPath: `${process.env.PUBLIC_URL}/images/wide.jpg`,
  },
  {
    label: 'My Chihuahua, Lucky',
    imgPath: `${process.env.PUBLIC_URL}/images/lucky.jpg`,
  },
];

// SwipeableTextMobileStepper Component
function SwipeableTextMobileStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxWidth: 510, flexGrow: 1}}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: 'background.default',
        }}
      >
        <Typography>{images[activeStep].label}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 400,
                  width: 510,
                  display: 'block',
                  overflow: 'hidden',
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
}

function SectionHeader({ label }) {
  return (
    <Box display="flex" alignItems="center" mt={4} mb={2}>
      <Divider sx={{ flex: 1, borderBottomWidth: '4px', borderColor: '#3c3c3c' }} />
      <Typography variant="h3" color='#3c3c3c' sx={{ mx: 2, fontWeight: 'light' }}>
        {label}
      </Typography>
      <Divider sx={{ flex: 1, borderBottomWidth: '4px', borderColor: '#3c3c3c' }} />
    </Box>
  );
}

// Define the ResponsiveAppBar component

function ResponsiveAppBar() {

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const tabs = [
    { label: 'Home', icon: <HomeIcon /> },
    { label: 'About Me', icon: <SentimentSatisfiedAltIcon /> },
    { label: 'Projects', icon: <FolderIcon /> },
    {label: 'Contact Me', icon: <MailOutlineIcon/>}
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
   <AppBar position="fixed" color="primary" sx={{ height: isMobile ? '60px' : '80px' }}>
      <Toolbar variant={isMobile ? 'regular' : 'dense'} sx={{ paddingX: isMobile ? 1 : 4}}>
        <Typography
          ml={isMobile ? 1 : 2}
          mt={isMobile ? 1 : 2.5}
          variant="h3"
          color="white"
          component="div"
          fontSize={isMobile ? '1rem' : '2.5rem'}
          fontFamily="Handlee"
          sx={{ flexGrow: 1, textAlign:'left' }}
        >
          Mia Sideris
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: isMobile ? 'row' : 'row',
            alignItems: 'center',
            ml: isMobile ? -25 : 4,
            mb: isMobile ? -1.5 : -5,
            
          }}
        >
          {tabs.map((tab) => (
            <ScrollLink
              key={tab.label}
              to={tab.label.toLowerCase().replace(' ', '')}
              spy={true}
              smooth={true}
              duration={500}
              style={{ textDecoration: 'none' }}
            >
              <Button
                startIcon={tab.icon}
                sx={{
                  ml: isMobile ? -1 : 2,
                  fontFamily: 'Handlee',
                  fontWeight:'300',
                  color: 'white',
                  fontSize: isMobile ? '0.67rem' : '1.8rem', 
                  mb: isMobile ? 1 : 3
                }}
              >
                {tab.label}
              </Button>
            </ScrollLink>
          ))}
        </Box>
      </Toolbar>
    </AppBar>

      <Box mt={11} sx={{ padding: 0.5 }}>
        {tabs.map((item) => (
          <Element name={item.label.toLowerCase().replace(' ', '')} key={item.label}>
            <SectionHeader label={item.label} />

{item.label === 'Home' && (
  <Box display="flex" flexDirection="column" alignItems="center" mt={6} sx={{ px: 2 }}>
    <Grid container spacing={4} alignItems="center">
      <Grid item xs={12} md={6} display="flex" justifyContent="center">
        <Avatar
          alt="Mia Sideris"
          src={`${process.env.PUBLIC_URL}/images/headshot.jpg`}
          sx={{ width: { xs: 200, md: 450 }, height: { xs: 200, md: 450 }, mb: { xs: 4, md: 0 } }}
        />
      </Grid>
      <Grid item xs={12} md={6} mr={{ xs: 0, md: '-100px' }} textAlign={{ xs: 'center', md: 'left' }}>
        <Typography variant="h2" fontFamily='Handlee' align='center' gutterBottom color='primary' sx={{ padding: 0, mt: { xs: 2, md: '50px' } }}>
          Hello, I am Mia Sideris
        </Typography>
        <Typography variant="h2" fontFamily='Handlee' align='center' gutterBottom color='primary' sx={{ padding: 0, mt: { xs: 2, md: '20px' } }}> 
          Welcome to my Personal Website!
        </Typography>
      </Grid>
    </Grid>
    <Box sx={{ mt: 3, textAlign: 'center' }}>
      <a href='/images/M.Sideris Resumepdf'>
        <Button color='primary' variant='contained' sx={{ fontFamily: 'Abril FatFace', fontSize: { xs: '1rem', md: '1.2rem' } }}>
          <Download /> Download CV
        </Button>
      </a>
    </Box>
    <Stack direction="row" spacing={2} sx={{ mt: 3.5, justifyContent: 'center', flexWrap: 'wrap' }}>
      <Box display="flex" alignItems="center" flexDirection="column">
        <a href="https://linkedin.com/in/miasideris" target="_blank" rel="noopener noreferrer">
          <IconButton sx={{ cursor: 'pointer' }}>
            <LinkedInIcon sx={{ cursor: 'pointer', fontSize: { xs: '2.5rem', md: '3.2rem' }, color: '#3361ad', bgcolor: '#fbfbfb', borderRadius: '25%', border: '3px solid white' }} />
          </IconButton>
        </a>
      </Box>
      <Box display="flex" alignItems="center" flexDirection="column">
        <a href="https://github.com/misideris" target="_blank" rel="noopener noreferrer">
          <IconButton sx={{ cursor: 'pointer' }}>
            <InstagramIcon sx={{ cursor: 'pointer', fontSize: { xs: '2.5rem', md: '3.2rem' }, color: '#a40ba9', bgcolor: '#fbfbfb', borderRadius: '25%', border: '3px solid white' }} />
          </IconButton>
        </a>
      </Box>
      <Box display="flex" alignItems="center" flexDirection="column">
        <a href="https://github.com/misideris" target="_blank" rel="noopener noreferrer">
          <IconButton sx={{ cursor: 'pointer' }}>
            <GitHubIcon sx={{ cursor: 'pointer', fontSize: { xs: '2.5rem', md: '3.2rem' }, color: '#272727', bgcolor: '#fbfbfb', borderRadius: '25%', border: '3px solid white' }} />
          </IconButton>
        </a>
      </Box>
    </Stack>
  </Box>
)}

{item.label === 'About Me' && (
      <Box
        display="flex"
        flexDirection={isMobile ? 'column' : 'row'}
        alignItems="flex-start"
        justifyContent="space-between"
        mt={3}
        mb={10}
      >
        <Box
          flex="1"
          mr={isMobile ? 0 : 2}
          mb={isMobile ? 4 : 0}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Typography
            variant="h4"
            fontFamily='Handlee'
            gutterBottom
            align='center'
            color='primary'
            sx={{ mb: 3, fontSize: isMobile ? '1.5rem' : '1' }} 
          >
            Swipe through to see more about me!
          </Typography>
          <Box
            width={isMobile ? '100%' : 'auto'} 
            maxWidth={isMobile ? '400px' : '550px'}
            maxHeight={isMobile ? '500px' : '600px'} 
            overflow="hidden" 
          >
            <SwipeableTextMobileStepper
              sx={{
                height: isMobile ? '300px' : '400px', 
                img: {
                  objectFit: 'cover', 
                }
              }}
            />
          </Box>
        </Box>
        <Box
          flex="1"
          mt={isMobile ? 0 : 14}
          ml={isMobile ? 0 : -6}
        >
          <Typography
            variant="subtitle1"
            gutterBottom
            align='left'
            color='#3c3c3c'
            sx={{
              ml: isMobile ? 0 : '-20px',
              fontWeight: 'medium',
              fontSize: isMobile ? '0.95rem' : '1.4rem' 
            }}
          >
            I am currently a rising junior at Ursinus College studying Applied Economics and Computer Science.
            In addition to the independent project of developing my personal website, I have taken the initiative
            to learn programming languages such as Python and R outside the scope of the courses I am currently enrolled in.
            This demonstrates my self-motivation and eagerness to adopt more tools to my skill set. Simultaneously, I find that I can excel even on the most rigid
            schedules, maintaining multiple Dean’s List Honors, while balancing the time-commitments that come
            along with being a three-season Cross-Country, Track & Field athlete. Furthermore, I am a member of the Student Athlete
            Advisory Committee, and Inclusive Data Science and Innovative Research Initiative.
          </Typography>
        </Box>
      </Box>
    )}

{item.label === 'Projects' && (
  <Box display="flex" flexDirection="column" alignItems="center" gap={4} mt={4} mb={8}>
    <Grid container spacing={4} justifyContent="center">
      <Grid item xs={12} sm={6}>
        <Card elevation={24} sx={{ height: isMobile ? 710 : 400}}>
          <CardActionArea>
            <Grid container>
              <Grid item xs={12} sm={6}>
                <CardMedia
                  component="img"
                  image="/images/plot.png"
                  alt="The Influence of Institutional Barriers and Personality on Gendered Occupational Choice"
                  sx={{ objectFit: 'scale-down', width: '100%', height: 240, objectPosition: '40px', mt: '70px', ml:-2 }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <CardContent sx={{ height: 240, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <Typography gutterBottom variant="subtitle1" component="div" fontFamily='Abril FatFace' color='primary' sx={{ mt: '-9px' }}>
                    The Influence of Institutional Barriers and Personality on Gendered Occupational Choice
                  </Typography>
                  <Typography variant="body2" color="#3c3c3c" fontFamily='Abril FatFace' fontWeight='light'>
                    In this paper, I suppose two primary factors can explain the persistent trend of men dominating 
                    lucrative occupations: institutional barriers and biological predispositions.
                    Research suggests that the application of short-term gender quotas in congruence with DEI trainings 
                    executed with nudge theory techniques can ultimately narrow the occupational gap.
                  </Typography>
                  <Box mt={2}>
                    {['Research', 'Data Analysis', 'Policy Analysis', 'R Programming'].map(skill => (
                      <Button key={skill} variant="contained" color="primary" sx={{ mr: 1, mt: 1 }}>
                        {skill}
                      </Button>
                    ))}
                  </Box>
                </CardContent>
                <Box p={1} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <a href='/images/projects/Final Policy Paper.pdf' target="_blank" rel="noopener noreferrer">
                    <IconButton sx={{ cursor: 'pointer' }}>
                      <LinkIcon sx={{ cursor: 'pointer', fontSize: '2.5rem', color: '#638459', borderRadius: '25%', mt:12.5, ml:3 }} />
                    </IconButton>
                  </a>
                </Box>
              </Grid>
            </Grid>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Card elevation={24} sx={{ height: isMobile ? 710 : 400 }}>
          <CardActionArea>
            <Grid container>
              <Grid item xs={12} sm={6}>
                <CardMedia
                  component="img"
                  image="/images/code2.png"
                  alt="The Design and Implementation of Blackjack Using Assembly Language"
                  sx={{ objectFit: 'scale-down', width: '100%', height: 240, objectPosition: '4px', mt: '70px' }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <CardContent sx={{ height: 240, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <Typography gutterBottom variant="subtitle1" component="div" fontFamily='Abril FatFace' color='primary' sx={{ mt: '-8px' }}>
                    The Design and Implementation of Blackjack Using Assembly Language
                  </Typography>
                  <Typography variant="body2" color="#3c3c3c" fontFamily='Abril FatFace' fontWeight='light'>
                    Using an 8086 Emulator and Turbo Assembly Language, we have designed and implemented a simple game of Blackjack.
                    Our choice of software design is flexible enough to allow for the implementation of multiple, unique game modes that 
                    present engaging, yet challenging experiences for the user.
                  </Typography>
                  <Box mt={2}>
                    {['8086 Emulator', 'Turbo Assembly Language', 'Debugging', 'Technical Writing'].map(skill => (
                      <Button key={skill} variant="contained" color="primary" sx={{ mr: 1, mt: 1 }}>
                        {skill}
                      </Button>
                    ))}
                  </Box>
                </CardContent>
                <Box p={1} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <a href="https://github.com/jujusf13/Assembly_blackjack/blob/main/CP2_Final_File.s" target="_blank" rel="noopener noreferrer">
                    <IconButton sx={{ cursor: 'pointer' }}>
                      <LinkIcon sx={{ cursor: 'pointer', fontSize: '2.5rem', color: '#638459', borderRadius: '25%', mt:12.5, ml:3 }} />
                    </IconButton>
                  </a>
                </Box>
              </Grid>
            </Grid>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Card elevation={24} sx={{ height: isMobile ? 720 : 400 }}>
          <CardActionArea>
            <Grid container>
              <Grid item xs={12} sm={6}>
                <CardMedia
                  component="img"
                  image="/images/pub.png"
                  alt="The Economics of the Evil Eye"
                  sx={{ objectFit: 'contain', width: '100%', height: 260, objectPosition: '45px', mt: '60px', ml: -3 }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <CardContent sx={{ height: 240, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <Typography gutterBottom variant="subtitle1" component="div" fontFamily='Abril FatFace' color='primary' sx={{ mt: '1px' }}>
                    The Economics of the Evil Eye
                  </Typography>
                  <Typography variant="body2" color="#3c3c3c" fontFamily='Abril FatFace' fontWeight='light'>
                    The evil eye, described as the destructive force of envy projected through the eyes of the envier. 
                    It is said that people can cause harm by a mere envious glance at coveted objects or their owners.
                    In this paper, I suppose the evil eye provides individuals utility in the form of cultural belonging, can act as a substitute
                    for religious institutions that lack credibility, and is effective in resolving low-grade conflicts.
                  </Typography>
                  <Box mt={2} mb={-10}>
                    {['Cultural Analysis', 'Economic Theory', 'Research', 'R Programming'].map(skill => (
                      <Button key={skill} variant="contained" color="primary" sx={{ mr: 1, mt: 1, paddingBottom: 1, width: '-6px' }}>
                        {skill}
                      </Button>
                    ))}
                  </Box>
                </CardContent>
                <Box p={1} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <a href='/images/projects/Final Paper - Evil Eye.pdf' target="_blank" rel="noopener noreferrer">
                    <IconButton sx={{ cursor: 'pointer' }}>
                      <LinkIcon sx={{ cursor: 'pointer', fontSize: '2.5rem', color: '#638459', borderRadius: '25%', mt:12.5, ml:3 }} />
                    </IconButton>
                  </a>
                </Box>
              </Grid>
            </Grid>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Card elevation={24} sx={{ height: isMobile ? 720 : 400 }}>
          <CardActionArea>
            <Grid container>
              <Grid item xs={12} lg={6}>
                <CardMedia
                  component="img"
                  image="/images/web.png"
                  alt="My Personal Website"
                  sx={{ objectFit: 'scale-down', width: '100%', height: 260, objectPosition: '0px', mt: '60px', ml: '6px' }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <CardContent sx={{ height: 240, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <Typography gutterBottom variant="subtitle1" component="div" fontFamily='Abril FatFace' color='primary' sx={{ mt: '1px' }}>
                    My Personal Website
                  </Typography>
                  <Typography variant="body2" color="#3c3c3c" fontFamily='Abril FatFace' fontWeight='light'>
                    This website was made entirely from scratch with the use of Material-UI, React, and Node.
                  </Typography>
                  <Box mt={2} mb={-15} ml={1}>
                    {['JavaScript', 'Material-UI', 'React.js', 'Node.js', 'HTML'].map(skill => (
                      <Button key={skill} variant="contained" color="primary" sx={{ mr: 1, mt: 1, paddingBottom: 1, width: '-6px' }}>
                        {skill}
                      </Button>
                    ))}
                  </Box>
                </CardContent>
                <Box p={1} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <a href='/images/projects/Final Paper - Evil Eye.pdf' target="_blank" rel="noopener noreferrer">
                    <IconButton sx={{ cursor: 'pointer' }}>
                      <LinkIcon sx={{ cursor: 'pointer', fontSize: '2.5rem', color: '#638459', borderRadius: '25%', mt:12.5, ml:3}} />
                    </IconButton>
                  </a>
                </Box>
              </Grid>
            </Grid>
          </CardActionArea>
        </Card>
      </Grid>
    </Grid>
  </Box>
)}
        {item.label === 'Contact Me' && (
       <Box sx={{ maxWidth: 600, margin: 'auto', borderRadius: '55%' }}>
       <Typography fontFamily='Handlee' color='#3c3c3c' align='center' mb={25} mt={25} variant='h5'>
      Reach me via email at <span style={{ textDecoration: 'underline', color:'#286583' }}>mia20031110@gmail.com</span>
       </Typography>
         </Box>
    )}
        </Element>
        ))}
      </Box>
    </Box>
  );
}

// Define the App component
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ResponsiveAppBar />
    </ThemeProvider>
  );
}

export default App;
