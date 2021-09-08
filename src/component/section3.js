import React, {useState, useEffect} from 'react';
import gbr from '../ilya-pavlov-OqtafYT5kTw-unsplash.jpg';
import {Card, CardMedia, Typography, Box} from '@material-ui/core';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const useStyle = makeStyles((theme)=>({
  card:{
    background:'rgba(0,0,0,0.7)',
  },
  title:{
    color:'#66b3ff',
    fontFamily:'Candara',
    fontSize:'9vw',
    textAlign:'center',
    width:'100%',
    fontWeight:600,
    [theme.breakpoints.up(500)]:{
      fontSize:'6vw',
    },
    [theme.breakpoints.up(1000)]:{
      fontSize:'4vw',
    },
  },
  titleProg:{
    color:'white',
    fontFamily:'Cambria',
    fontSize:'3.3vw',
    [theme.breakpoints.up(500)]:{
      fontSize:'1.8vw',
    },
    [theme.breakpoints.up(1000)]:{
      fontSize:'1.5vw',
    },
  },
  progDesc:{
    marginLeft:'12px',
    color:'white',
    fontFamily:'Cambria',
    fontSize:'3vw',
    [theme.breakpoints.up(500)]:{
      fontSize:'1.5vw',
    },
    [theme.breakpoints.up(1000)]:{
      fontSize:'1.3vw',
    },
  },
}))

function ProgressBar(pr) {
  var style = useStyle();
  const {id, value} = pr;
  const[color1w,setColor1w] = useState(0);
  const[color2w,setColor2w] = useState(0);
  const[values, setValues] = useState(value);
  var color1 = ['#248f24','#0059b3','#0059b3','#e65c00','#ac00e6']
  var color2 = ['#99ff66','#ff99cc','#6699ff','#00ffcc','#ffff66']
  useEffect(()=>{
    setColor1w(Math.floor(Math.random()*5));
    setColor2w(Math.floor(Math.random()*5));
  },[]);
  return(
    <Box display='flex' alignItems='center' style={{width:'100%'}}>
      <Box style={{width:'80%', height:'10px',borderRadius:4, background:'#d9d9d9'}}>
        <Box id={id} onChange={(a,b)=> setValues(b)} style={{width:`${value}%`,height:'inherit',borderRadius:4, background:`linear-gradient(to left, ${color1[color1w]}, ${color2[color2w]})`}}/>
      </Box>
      <Typography className={style.progDesc}>
        {`${Math.round(values)} %`}
      </Typography>
    </Box>
  );
}

// const ProgressBar = withStyles((theme)=>({
//   root:{
//     height:'10px',
//     borderRadius:4,
//   },
//   colorPrimary:{
//     backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
//   },
//   bar:{
//     borderRadius:4,
//     background:`linear-gradient(to left, ${color1[color1w]}, ${color2[color2w]})`
//   },
// }))(LinearProgress);

function Progress(props) {
  const {id, title, value} = props;
  var style = useStyle();
  return(
    <Box style={{marginBottom:'35px'}}>
      <Typography className={style.titleProg}>
        {title}
      </Typography>
      <ProgressBar id={id} value={value}/>
    </Box>
  );
}

export default function Section3() {
  var style = useStyle();
  useEffect(()=>{
    ['#java1','#react1','#spring1','#mysql1','#oracle1','#css1','#jsp1','#mongo1','#firebase1','#gcp1'].map(a => {
      gsap.from(a, {scrollTrigger:{trigger:a,start:'top bottom',scrub:0}, width:0, ease:'power4'});
    });
  },[])
  return(
    <Card square>
      <CardMedia image={gbr}>
        <Box className={style.card}>
          <Typography className={style.title}>
            My Skills
          </Typography>
          <Box justifyContent='center' alignItems='center' display='flex' flexWrap='wrap' style={{marginTop:'30px'}}>
            <Box alignItems='flex-start' justifyContent='center' display='flex' style={{width:'50%', minWidth:'300px'}}>
              <Box style={{width:'90%', minWidth:'300px'}}>
                <Progress id='java1' value={95} title='Java'/>
                <Progress id='react1' value={83} title='React Js'/>
                <Progress id='spring1' value={60} title='Spring Framework(Springboot, Spring Cloud, etc)'/>
                <Progress id='mysql1' value={88} title='MySql'/>
                <Progress id='oracle1' value={88} title='Oracle'/>
              </Box>
            </Box>
            <Box alignItems='flex-start' justifyContent='center' display='flex' style={{width:'50%', minWidth:'300px'}}>
              <Box style={{width:'90%', minWidth:'300px'}}>
                <Progress id='css1' value={80} title='CSS'/>
                <Progress id='jsp1' value={75} title='JSP(Java Server Page)'/>
                <Progress id='mongo1' value={25} title='Mongo Db'/>
                <Progress id='firebase1' value={45} title='Firebase'/>
                <Progress id='gcp1' value={40} title='GCP'/>
              </Box>
            </Box>
          </Box>
          <span style={{color:'#ffff', fontStyle:'italic'}}>Photo by <a href="https://unsplash.com/@ilyapavlov?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ilya Pavlov</a> on <a href="https://unsplash.com/s/photos/coding?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></span>
        </Box>
      </CardMedia>
    </Card>
  );
}