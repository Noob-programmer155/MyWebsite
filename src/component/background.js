import React from 'react';
import {CardMedia, Box, Avatar, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import gsap from 'gsap';
import gbr from '../Amar.jpg';
import img from '../back.jpg';

const useStyle = makeStyles((theme)=>({
  root:{
    backgroundColor:'rgba(0,0,0,0.4)',
    top:0,
  },
  box:{
    width:'80vw',
    marginTop:'40px',
    borderStyle:'dashed none none none',
    [theme.breakpoints.up(500)]:{
      width: '70vw',
    },
    [theme.breakpoints.up(1000)]:{
      width: '60vw',
    },
  },
  CareerGoal:{
    fontSize:'7vw',
    fontFamily:'Cambria',
    color:'#ffff',
    fontWeight:700,
    textAlign:'center',
    backgroundColor:'rgba(89, 89, 89, 0.3)',
    width:'100%',
    [theme.breakpoints.up(500)]:{
      fontSize: '4vw',
    },
    [theme.breakpoints.up(1000)]:{
      fontSize: '3vw',
    },
  },
  CareerGoal2:{
    fontSize:'3vw',
    fontFamily:'Cambria',
    color:'#ffff',
    fontWeight:500,
    [theme.breakpoints.up(500)]:{
      fontSize: '2vw',
    },
    [theme.breakpoints.up(1000)]:{
      fontSize: '1.5vw',
    },
  },
  avatar: {
    marginTop:'60px',
    width:'40vw',
    height:'40vw',
    zIndex:'2',
    [theme.breakpoints.up(500)]:{
      width:'25vw',
      height:'25vw',
    },
    [theme.breakpoints.up(1000)]:{
      width:'12vw',
      height:'12vw',
    },
  },
  title: {
    fontSize:'8vw',
    fontFamily:'Candara',
    color:'#ffff',
    [theme.breakpoints.up(500)]:{
      fontSize: '6vw',
    },
    [theme.breakpoints.up(1000)]:{
      fontSize: '4vw',
    },
  },
  title1: {
    fontSize:'5vw',
    fontFamily:'Candara',
    color:'#66d9ff',
    [theme.breakpoints.up(500)]:{
      fontSize: '3vw',
    },
    [theme.breakpoints.up(1000)]:{
      fontSize: '1.5vw',
    },
  },
}))

export default function Background() {
  var style = useStyle();
  React.useEffect(()=>{
    gsap.from('#mainback',{opacity: 0, y:100, ease: "power4", duration:1});
    gsap.from('#subback1',{opacity: 0, x:100, delay:1, ease: "power4", duration:1});
    gsap.from('#subback2',{opacity: 0, x:-100, delay:1.2, ease: "power4", duration:1});
    gsap.from('#subback3',{opacity: 0, y:-100, delay:1.3, ease: "power4", duration:1});
  },[])
  return(
    <CardMedia image={img} style={{height:'100vh'}}>
      <Box height='100vh' className={style.root}>
          <Box id='mainback' justifyContent='center' alignItems='center' display='flex'>
            <Avatar alt="Arrijal Amar M" src={gbr} className={style.avatar}/>
          </Box>
          <Typography style={{textAlign:'center', width:'100%', paddingTop:'40px'}}>
            <span id='subback1' className={style.title}><strong>Arrijal Amar Ma`ruf</strong><br/></span>
            <span id='subback2' className={style.title1}>Junior Fullstack Java Developer</span>
          </Typography>
          <Box justifyContent='center' alignItems='center' display='flex'><Box borderTop={2}
            borderColor='#ff6600' className={style.box}/></Box>
          <Box id='subback3' justifyContent='center' alignItems='center' display='flex' style={{marginTop:'4vh'}}>
            <Box justifyContent='center' alignItems='center' display='flex' borderRadius='0% 0% 20% 20%' flexWrap='wrap' style={{backgroundColor:'rgba(89, 89, 89, 0.3)'}}>
              <Typography component='span' className={style.CareerGoal}>
                Career Goal
              </Typography>
              <Typography component='span' className={style.CareerGoal2}>
                <ul>
                  <li>Improving my networking skills</li>
                  <li>Learning a new skill</li>
                  <li>Becoming an expert in my field</li>
                  <li>Have a wide network</li>
                </ul>
              </Typography>
            </Box>
          </Box>
      </Box>
    </CardMedia>
  );
}
