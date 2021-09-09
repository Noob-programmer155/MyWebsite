import {Box,Paper,IconButton, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';

var useStyle = makeStyles((theme)=>({
  root:{
    marginTop:'20px',
    background:'#00e6b8',
    color:'#ffff',
    '&:hover':{
      background:'rgba(0, 230, 184, 0.5)'
    },
  },
  main:{
    width:'100%',
    fontFamily:'Candara',
    textAlign:'center',
    color:'#ffff',
    fontSize:'4vw',
    fontWeight:700,
    [theme.breakpoints.up(500)]:{
      fontSize:'2.2vw',
    },
    [theme.breakpoints.up(1000)]:{
      fontSize:'1.4vw',
    },
  },
  submain:{
    width:'100%',
    fontFamily:'Candara',
    textAlign:'center',
    color:'#a6a6a6',
    fontSize:'3.5vw',
    [theme.breakpoints.up(500)]:{
      fontSize:'1.7vw',
    },
    [theme.breakpoints.up(1000)]:{
      fontSize:'1vw',
    },
  },
  copyright:{
    width:'100%',
    marginTop:'40px',
    paddingBottom:'10px',
    fontFamily:'Calibri',
    textAlign:'center',
    color:'#ffff',
    fontSize:'4vw',
    fontWeight:500,
    fontStyle:'italic',
    [theme.breakpoints.up(500)]:{
      fontSize:'2.2vw',
    },
    [theme.breakpoints.up(1000)]:{
      fontSize:'1vw',
    },
  },
}))

export default function Contact() {
  const style = useStyle();
  return(
    <Paper id='contact12' square style={{background:'#00004d',paddingTop:'50px', marginTop:'50px'}}>
      <Box>
        <Box justifyContent='center' alignItems='center' display='flex' flexWrap='wrap'>
          <Box justifyContent='center' alignItems='center' display='flex' flexWrap='wrap'>
            <IconButton className={style.root} component='a' rel='noreferrer' href="mailto:amrrrr572@gmail.com"><EmailIcon/></IconButton>
            <Typography className={style.main}>
              Email
            </Typography>
            <Typography className={style.submain}>
              amrrrr572@gmail.com
            </Typography>
          </Box>
          <Box justifyContent='center' alignItems='center' display='flex' flexWrap='wrap'>
            <IconButton className={style.root} component='a' href="https://facebook.com/amar.rijal.336" rel='noreferrer' target="_blank"><FacebookIcon/></IconButton>
            <Typography className={style.main}>
              Facebook
            </Typography>
            <Typography className={style.submain}>
              Amar Rijal
            </Typography>
          </Box>
          <Box justifyContent='center' alignItems='center' display='flex' flexWrap='wrap'>
            <IconButton className={style.root} component='a' href="https://github.com/Noob-programmer155" rel='noreferrer' target="_blank"><GitHubIcon/></IconButton>
            <Typography className={style.main}>
              Github
            </Typography>
            <Typography className={style.submain}>
              Noob-programmer155
            </Typography>
          </Box>
          <Box justifyContent='center' alignItems='center' display='flex' flexWrap='wrap'>
            <IconButton className={style.root} component='a' href="https://www.linkedin.com/in/arrijal-amar-735b71206" rel='noreferrer' target="_blank"><LinkedInIcon/></IconButton>
            <Typography className={style.main}>
              LinkedIn
            </Typography>
            <Typography className={style.submain}>
              Arrijal Amar
            </Typography>
          </Box>
        </Box>
        <Box>
          <Typography className={style.copyright}>
            ©2021 Amar Dev. All Rights Reserved
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
};
