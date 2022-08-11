import React, {useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Box, Typography, Grid} from '@material-ui/core';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const useStyle = makeStyles((theme)=>({
  root:{
    width:'100vw',
    marginTop:'200px',
    background:'#1a1a1a',
    justifyContent:'center',
    alignItems:'flex-start',
    display:'flex',
    flexWrap:'wrap',
    paddingBottom:'40px',
  },
  title:{
    color:'#6699ff',
    fontFamily:'Candara',
    fontSize:'10vw',
    textAlign:'center',
    width:'100%',
    fontWeight:600,
    [theme.breakpoints.up(500)]:{
      fontSize:'7vw',
    },
    [theme.breakpoints.up(1000)]:{
      fontSize:'5vw',
    },
  },
  circle:{
    width:'4vw',
    height:'4vw',
    borderColor:'#ff6600',
    [theme.breakpoints.up(500)]:{
      width:'3vw',
      height:'3vw',
    },
    [theme.breakpoints.up(1000)]:{
      width:'2vw',
      height:'2vw',
    },
  },
  circle2:{
    width:'2.5vw',
    height:'2.5vw',
    position:'relative',
    left:'2vw',
    top:'-4.5vw',
    background:'#ff6600',
    [theme.breakpoints.up(500)]:{
      width:'2vw',
      height:'2vw',
      left:'1vw',
      top:'-3vw',
    },
    [theme.breakpoints.up(1000)]:{
      width:'1.5vw',
      height:'1.5vw',
      left:'0.5vw',
      top:'-2vw',
    },
  },
  circleDesc:{
    fontSize:'3.5vw',
    color:'#b3b3b3',
    [theme.breakpoints.up(500)]:{
      fontSize:'2vw',
    },
    [theme.breakpoints.up(1000)]:{
      fontSize:'1.5vw',
    },
  },
  circleDescPos:{
    fontSize:'4vw',
    color:'#b3b3b3',
    backgroundColor:'#0066cc',
    [theme.breakpoints.up(500)]:{
      fontSize:'2.5vw',
    },
    [theme.breakpoints.up(1000)]:{
      fontSize:'2vw',
    },
  },
  circleDescFac:{
    fontSize:'3.2vw',
    color:'white',
    [theme.breakpoints.up(500)]:{
      fontSize:'1.7vw',
    },
    [theme.breakpoints.up(1000)]:{
      fontSize:'1.2vw',
    },
  },
  circleDescTahun:{
    fontSize:'4.5vw',
    color:'#33cccc',
    [theme.breakpoints.up(500)]:{
      fontSize:'3vw',
    },
    [theme.breakpoints.up(1000)]:{
      fontSize:'2.5vw',
    },
  },
}))

function ProgressCircle(props) {
  const {reverse, position, desc, faculty, tahun, ...other} = props;
  var style = useStyle();
  return(
    <Grid container style={{display:'flex', alignItems:'center', flexDirection:(reverse)? 'row-reverse':'row'}}>
      <Grid item xs={6}/>
      <Grid item xs={6}>
        <Box borderLeft={(reverse)? 0:5} borderRight={(reverse)? 5:0} display='flex' alignItems='flex-start' style={{position:'relative',
          left:(reverse)? '5px':'0px', right:(reverse)? '0px':'5px', flexDirection:(reverse)? 'row-reverse':'row', borderColor:'#ff6600'}} {...other}>
          <Box style={{marginLeft:'8px',marginRight:'8px'}}>
            <Box borderRadius='50%' border={4} className={style.circle}/>
            <Box borderRadius='50%' className={style.circle2}/>
          </Box>
          <Box>
            <Typography className={style.circleDescPos} style={{textAlign:(reverse)? 'right':'left'}}>
              {position}
            </Typography>
            <Typography className={style.circleDesc} style={{textAlign:(reverse)? 'right':'left'}}>
              {desc}
            </Typography>
            <Typography className={style.circleDescFac} style={{textAlign:(reverse)? 'right':'left'}}>
              {faculty}
            </Typography>
            <Typography className={style.circleDescTahun} style={{textAlign:(reverse)? 'right':'left'}}>
              {tahun}
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default function Section2() {
  var style = useStyle();
  useEffect(()=>{
    var jh = gsap.timeline({
      scrollTrigger:{
        trigger:'.mainsec',
        start:'center bottom',
        scrub:1
      }
    });
    jh.from('.mainsec',{opacity:0, y:100, ease:'power4'});
    jh.from('.subsec',{opacity:0, x:-100, ease:'power4'});
    jh.from('.subsec2',{opacity:0, x:100, ease:'power4'});
  },[])
  return(
    <Box id='experience12' className={style.root}>
      <Box justifyContent='center' alignItems='center' display='flex' flexWrap='wrap' style={{width:'50%', minWidth:'300px'}}>
        <Typography className={'mainsec '+style.title}>
          Experience
        </Typography>
        <ProgressCircle className='subsec' reverse={false} desc='No current Experience'/>
      </Box>
      <Box style={{width:'50%',minWidth:'300px'}}>
        <Typography className={'mainsec '+style.title}>
          Education
        </Typography>
        <ProgressCircle className='subsec' reverse={false} desc='Study in University of Muhammadiyah Surakarta' tahun='2019 - Now' faculty='faculty of informatics engineering'/>
      </Box>
    </Box>
  );
}
