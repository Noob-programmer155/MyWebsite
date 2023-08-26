import React, {useState, useEffect} from 'react';
import gbr from '../images/ilya-pavlov-OqtafYT5kTw-unsplash.jpg';
import {Card, CardMedia, Typography, Box} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import {useSelector} from 'react-redux';
import { skill1, skill2 } from './redux/sourceRedux';
import ScrollTrigger from 'gsap/ScrollTrigger';
import gsap from 'gsap';

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
  skillperanimate:{
    height:'inherit',
    borderRadius:4,
  }
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
        <Box id={id} onChange={(a,b)=> setValues(b)} style={{width:`${value}%` ,background:`linear-gradient(to left, ${color1[color1w]}, ${color2[color2w]})`}} className={style.skillperanimate}/>
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
  var sk1 = useSelector(skill1);
  var sk2 = useSelector(skill2);
  useEffect(() => {
    var jh = gsap.timeline({
      scrollTrigger:{
        trigger:'.skillContain',
        start:'top bottom',
        scrub:1
      }
    });
    var jh1 = gsap.timeline({
      scrollTrigger:{
        trigger:'.skillContain2',
        start:'top bottom',
        scrub:1
      }
    });
    jh.from('.skillContain',{opacity:0, x:-100, ease:'power2'});
    jh1.from('.skillContain2',{opacity:0, x:100, ease:'power2'});
  },[])
  return(
    <Card id='skill12' square>
      <CardMedia image={gbr}>
        <Box className={style.card}>
          <Typography className={'skills '+style.title}>
            My Skills
          </Typography>
          <Box justifyContent='center' alignItems='center' display='flex' flexWrap='wrap' style={{marginTop:'30px'}}>
            <Box alignItems='flex-start' justifyContent='center' display='flex' style={{width:'50%', minWidth:'300px'}}>
              <Box className='skillContain' style={{width:'90%', minWidth:'300px'}}>
                {
                  (sk1)?
                  sk1.map((item,i) => (
                    <Progress key={i} id={item.id} value={item.value} title={item.name}/>
                  )):null
                }
              </Box>
            </Box>
            <Box alignItems='flex-start' justifyContent='center' display='flex' style={{width:'50%', minWidth:'300px'}}>
              <Box className='skillContain2' style={{width:'90%', minWidth:'300px'}}>
                {
                  (sk2)?
                  sk2.map((item,i) => (
                    <Progress key={i} id={item.id} value={item.value} title={item.name}/>
                  )):null
                }
              </Box>
            </Box>
          </Box>
          <span style={{color:'#ffff', fontStyle:'italic'}}>Photo by <a href="https://unsplash.com/@ilyapavlov?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ilya Pavlov</a> on <a href="https://unsplash.com/s/photos/coding?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></span>
        </Box>
      </CardMedia>
    </Card>
  );
}
