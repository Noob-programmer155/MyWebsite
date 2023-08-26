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

const data = [
  {title:'Email',link:'mailto:amrrrr572@gmail.com',label:'amrrrr572@gmail.com',icon:<EmailIcon/>},
  {title:'Facebook',link:'https://facebook.com/amar.rijal.336',label:'Amar Rijal',icon:<FacebookIcon/>},
  {title:'Github',link:'https://github.com/Noob-programmer155',label:'Noob-programmer155',icon:<GitHubIcon/>},
  {title:'LinkedIn',link:'https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3BREemPE%2FXSPy98cZbvwVHJw%3D%3D',label:'Arrijal Amar',icon:<LinkedInIcon/>}
]

export default function Contact() {
  const style = useStyle();
  return(
    <Paper id='contact12' square style={{background:'#00004d',paddingTop:'50px', marginTop:'50px'}}>
      <Box>
        <Box sx={{justifyContent:'center', alignItems:'center', display:'flex', flexWrap:'wrap'}}>
          {
            data.map((item,i) => (
              <Box key={i} sx={{justifyContent:'center', alignItems:'center', display:'flex', flexWrap:'wrap'}}>
                <IconButton className={style.root} component='a' rel='noreferrer' href={item.link} target='_blank'>{item.icon}</IconButton>
                <Typography className={style.main}>
                  {item.title}
                </Typography>
                <Typography className={style.submain}>
                  {item.label}
                </Typography>
              </Box>
            ))
          }
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
