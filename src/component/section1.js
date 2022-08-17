import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Box, Typography, CardMedia, Grid, Button} from '@material-ui/core';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import dev from '../images/Dev.jpeg';
import gbr1 from '../images/gambar1.jpg';
import {useSelector} from 'react-redux';
import {project} from './redux/sourceRedux';

gsap.registerPlugin(ScrollTrigger);

const useStyle = makeStyles((theme) => ({
  titleSec:{
    fontSize:'10vw',
    fontFamily:'Candara',
    color:'#0066cc',
    fontWeight:800,
    [theme.breakpoints.up(500)]:{
      fontSize: '7vw',
    },
    [theme.breakpoints.up(1000)]:{
      fontSize: '5vw',
    },
  },
  titleSec2:{
    fontSize:'3vw',
    fontFamily:'Century Gothic',
    color:'#ffff',
    fontWeight:800,
    marginRight:'5px',
    [theme.breakpoints.up(500)]:{
      fontSize: '2vw',
    },
    [theme.breakpoints.up(1000)]:{
      fontSize: '1vw',
    },
  },
  card1:{
    minWidth:'100%',
    height:'50vh',
    [theme.breakpoints.up(1000)]:{
      minWidth:'32vw',
      height:'400px',
    },
  },
  secCard:{
    maxWidth: '100%',
    [theme.breakpoints.up(1000)]:{
      maxWidth:'32vw',
      height:'400px'
    },
  },
  descCardMain:{
    fontFamily:'Tahoma',
    color:'#ff9933',
    fontSize:'5vw',
    [theme.breakpoints.up(500)]:{
      fontSize: '4vw',
    },
    [theme.breakpoints.up(1000)]:{
      fontSize: '2vw',
    },
  },
  descCard: {
    fontFamily:'Tahoma',
    textAlign: 'justify',
    textIndent:'50px',
    marginLeft:'10px',
    color:'#b3b3b3',
    fontSize:'4vw',
    [theme.breakpoints.up(500)]:{
      fontSize: '2.3vw',
    },
    [theme.breakpoints.up(1000)]:{
      fontSize: '1.2vw',
    },
  },
  descCard1: {
    fontFamily:'Tahoma',
    marginLeft:'20px',
    color:'#b3b3b3',
    verticalAlign:'top',
    fontSize:'4vw',
    [theme.breakpoints.up(500)]:{
      fontSize: '2.3vw',
    },
    [theme.breakpoints.up(1000)]:{
      fontSize: '1.2vw',
    },
  },
  descCard2: {
    fontFamily:'Tahoma',
    marginRight:'10px',
    textAlign:'center',
    color:'#3399ff',
    fontSize:'5vw',
    [theme.breakpoints.up(500)]:{
      fontSize: '4vw',
    },
    [theme.breakpoints.up(1000)]:{
      fontSize: '2vw',
    },
  },
  proj:{
    marginRight:'15px',
  },
  projTit:{
    marginTop:'50px',
    color:'#ff9900',
    paddingLeft:'8px',
    fontFamily:'Dejavu Sans',
    fontSize:'4vw',
    fontWeight:550,
    [theme.breakpoints.up(500)]:{
      fontSize:'3vw',
    },
    [theme.breakpoints.up(1000)]:{
      fontSize:'1.5vw',
    },
  },
  projTitSec:{
    fontFamily:'Gill Sans',
    fontSize:'7vw',
    textAlign:'center',
    fontWeight:800,
    color:'#1a8cff',
    [theme.breakpoints.up(500)]:{
      fontSize:'4vw',
    },
    [theme.breakpoints.up(1000)]:{
      fontSize:'2.2vw',
    },
  },
  projTitSecDes:{
    fontFamily:'Gill Sans',
    fontSize:'4vw',
    textAlign:'center',
    color:'#ff9900',
    fontWeight:600,
    [theme.breakpoints.up(500)]:{
      fontSize:'2.5vw',
    },
    [theme.breakpoints.up(1000)]:{
      fontSize:'1.2vw',
    },
  },
}));

export default function Section1() {
  var style = useStyle();
  const proj = useSelector(project);
  React.useEffect(()=>{
    gsap.from("#about12",{scrollTrigger:{
      trigger:'#about12',
      start:'top center',
      scrub:0,
    },opacity:0, y:100, ease:'power4'});
    var tr = gsap.timeline({
      scrollTrigger: {
      trigger: "#subsec11",
      start: "top center",
      scrub:0,
    }})
    tr.from("#subsec11",{opacity:0, x:-100, ease:'power4'});
    tr.from("#subsec13",{opacity:0, x:100, ease:'power4'});
    var tr1 = gsap.timeline({
      scrollTrigger: {
      trigger: "#subsec12",
      start: "top center",
      scrub:0,
    }})
    tr1.from("#subsec12",{opacity:0, y:-100, ease:'power4'});
    tr1.from("#subsec14",{opacity:0, y:100, ease:'power4'});
  },[])
  return(
    <Box justifyContent='center' alignItems='center' display='flex' flexWrap='wrap'>
      <Typography id='about12' variant='h4' style={{width:'100%', textAlign:'center', marginTop:'200px'}}>
        <span className={style.titleSec}>About Me</span>
      </Typography>
      <Box justifyContent='center' alignItems='center' display='flex' style={{maxWidth:'1000px', width:'90%', marginTop:'40px'}}>
        <Box display='flex' flexWrap='wrap'>
          <CardMedia id='subsec11' image={dev} className={style.card1}/>
          <Box id='subsec12' className={style.secCard}>
            <Typography style={{marginBottom:'15px'}}>
              <span className={style.descCardMain}>General Information</span>
            </Typography>
            <Typography className={style.descCard}>
              Assalamu`alaikum, I`m Junior Software Developer from Central Java Indonesia, I am motivated, adaptable, innovative, likes challenges and coding and are responsible person.
            </Typography>
            <Box style={{marginTop:'30px',marginLeft:'10px'}}>
              <table>
                <tbody>
                  <tr>
                    <td className={style.descCard1}>D.O.B</td>
                    <td className={style.descCard1}>:</td>
                    <td className={style.descCard1}>19-09-2000</td>
                  </tr>
                  <tr>
                    <td className={style.descCard1}>Phone</td>
                    <td className={style.descCard1}>:</td>
                    <td className={style.descCard1}>(+62) 089 8868 4379</td>
                  </tr>
                  <tr>
                    <td className={style.descCard1}>Address</td>
                    <td className={style.descCard1}>:</td>
                    <td className={style.descCard1}>Bolon 05/02, Colomadu, Karanganyar, Central Java, Indonesia</td>
                  </tr>
                  <tr>
                    <td className={style.descCard1}>E-Mail</td>
                    <td className={style.descCard1}>:</td>
                    <td className={style.descCard1}>amrrrr572@gmail.com</td>
                  </tr>
                </tbody>
              </table>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box justifyContent='center' alignItems='center' display='flex' style={{maxWidth:'1000px', width:'90%'}}>
        <Box display='flex' flexDirection="row-reverse" flexWrap='wrap'>
          <CardMedia id='subsec13' image={gbr1} className={style.card1}/>
          <Box id='subsec14' className={style.secCard}>
            <Typography style={{marginBottom:'40px',}}>
              <span className={style.descCardMain}>Other Info</span>
            </Typography>
            <Typography className={style.descCard2}>
              "Give the best then you will get the best"
            </Typography>
            <Box style={{width:'100%',display:'flex',justifyContent:'center'}}>
              <Button type="a" variant='contained' color="primary" href="https://storage.googleapis.com/web-private-amr-321/cv/CV.docx" download style={{margin:'10px 10px 0 0'}}>Download My Resume</Button>
            </Box>
            <Box>
              <Typography display='flex' className={style.projTit}>My Project</Typography>
            </Box>
            <Box display='flex' border={5} borderColor='#ff9900' className={style.proj}>
              <Grid container>
                <Grid item xs={4}>
                  <Typography className={style.projTitSec}>
                    {proj.filter(i => i.label === 'java').length}
                  </Typography>
                  <Typography className={style.projTitSecDes}>
                    Java Projects
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography className={style.projTitSec}>
                    {proj.filter(i => i.label === 'react').length}
                  </Typography>
                  <Typography className={style.projTitSecDes}>
                    React Projects
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography className={style.projTitSec}>
                    {proj.filter(i => i.label !== 'react' && i.label !== 'java').length}
                  </Typography>
                  <Typography className={style.projTitSecDes}>
                    Other Projects
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
