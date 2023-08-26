import React, { useState } from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Box, Typography, CardMedia, Grid, Button, FormControl, InputLabel, Input, FormHelperText, FormGroup, Dialog, FormLabel, RadioGroup, FormControlLabel, Radio, Accordion, AccordionDetails, AccordionSummary} from '@material-ui/core';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import dev from '../images/Dev.jpeg';
import gbr1 from '../images/gambar1.jpg';
import {useSelector} from 'react-redux';
import {project} from './redux/sourceRedux';
import cv1 from '../source/cv/CV-Indonesia.pdf';
import cv2 from '../source/cv/CV-English.pdf';
import { ExpandMoreRounded } from '@material-ui/icons';

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
    display:'flex',
    border:'5px solid #ff9900',
    marginRight:'0px',
  },
  projTit:{
    display:'flex',
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
    width:"100%",
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

const ApplicationForm = (props) => {
  const {open,setOpen} = props
  const [data,setData] = useState({
    language:'Indonesian',
    subjectName:'',
    subjectGender:'Mr.',
    subjectPosition:'',
    companyName:'',
    companyAddress:'',
    companyCitystatezipcode:'',
    jobTarget:'',
    jobSource:''
  });

  const onClick = () => {
    const token = window.btoa(Array.from(new TextEncoder().encode(JSON.stringify(data)),i => String.fromCodePoint(i)).join(""))
    window.open(`/application-letter/${token}`,'blank')
  }
  return(
    <Dialog open={open} onClick={e => setOpen(!open)} PaperProps={{onClick:e => e.stopPropagation(),style:{width:'95%',maxWidth:"400px"}}}>
      <FormGroup style={{margin:"20px"}}>
        <FormControl>
          <InputLabel htmlFor='guest-name'>Your Name</InputLabel>
          <Input id='guest-name' aria-describedby='guest-name-desc' type='text' onChange={e => {setData({...data,subjectName:e.target.value})}}/>
          <FormHelperText id='guest-name-desc'></FormHelperText>
        </FormControl>
        {(data.language === 'English')?
          <FormControl>
            <FormLabel component='legend'>As</FormLabel>
            <RadioGroup value={data.subjectGender} onChange={e => {setData({...data,subjectGender:e.target.value})}}>
              <FormControlLabel value={'Mr.'} control={<Radio/>} label="His"/>
              <FormControlLabel value={'Ms.'} control={<Radio/>} label="Her"/>
            </RadioGroup>
          </FormControl>:null
        }
        <FormControl>
          <InputLabel htmlFor='guest-position'>Your Position</InputLabel>
          <Input id='guest-position' aria-describedby='guest-position-desc' type='text' onChange={e => {setData({...data,subjectPosition:e.target.value})}}/>
          <FormHelperText id='guest-position-desc'></FormHelperText>
        </FormControl>
        <FormControl>
          <InputLabel htmlFor='guest-company'>Company Name</InputLabel>
          <Input id='guest-company' aria-describedby='guest-company-desc' type='text' onChange={e => {setData({...data,companyName:e.target.value})}}/>
          <FormHelperText id='guest-company-desc'></FormHelperText>
        </FormControl>
        <FormControl>
          <InputLabel htmlFor='guest-company-addr'>Company Address</InputLabel>
          <Input id='guest-company-addr' aria-describedby='guest-company-addr-desc' type='text' onChange={e => {setData({...data,companyAddress:e.target.value})}}/>
          <FormHelperText id='guest-company-addr-desc'></FormHelperText>
        </FormControl>
        <FormControl>
          <InputLabel htmlFor='guest-company-cpc'>City, State & Postal Code</InputLabel>
          <Input id='guest-company-cpc' aria-describedby='guest-company-cpc-desc' type='text' onChange={e => {setData({...data,companyCitystatezipcode:e.target.value})}}/>
          <FormHelperText id='guest-company-cpc-desc'></FormHelperText>
        </FormControl>
        <FormControl>
          <InputLabel htmlFor='guest-job'>Target Job</InputLabel>
          <Input id='guest-job' aria-describedby='guest-job-desc' type='text' onChange={e => {setData({...data,jobTarget:e.target.value})}}/>
          <FormHelperText id='guest-job-desc'></FormHelperText>
        </FormControl>
        <FormControl>
          <InputLabel htmlFor='guest-job-src'>Job Source</InputLabel>
          <Input id='guest-job-src' aria-describedby='guest-job-src-desc' type='text' onChange={e => {setData({...data,jobSource:e.target.value})}}/>
          <FormHelperText id='guest-job-src-desc'></FormHelperText>
        </FormControl>
        <FormControl>
          <FormLabel component='legend'>Language</FormLabel>
          <RadioGroup value={data.language} onChange={e => {setData({...data,language:e.target.value})}}>
            <FormControlLabel value={'Indonesian'} control={<Radio/>} label="Indonesian"/>
            <FormControlLabel value={'English'} control={<Radio/>} label="English"/>
          </RadioGroup>
        </FormControl>
        <FormControl>
          <Button variant='outlined' onClick={e => {onClick()}} color='primary'>Generate</Button>
        </FormControl>
      </FormGroup>
    </Dialog>
  )
}

export default function Section1() {
  const [open,setOpen] = useState(false);
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
      start: "center bottom",
      scrub:0,
    }})
    tr.from("#subsec11",{opacity:0, x:-100, ease:'power4'});
    tr.from("#subsec12",{opacity:0, y:-100, ease:'power4'});
    var tr1 = gsap.timeline({
      scrollTrigger: {
      trigger: "#subsec13",
      start: "center bottom",
      scrub:0,
    }})
    tr1.from("#subsec13",{opacity:0, x:100, ease:'power4'});
    tr1.from("#subsec14",{opacity:0, y:-100, ease:'power4'});
  },[])

  return(
    <>
      <Box sx={{display:'flex', flexWrap:'wrap', justifyContent:'center', alignItems:'center'}}>
        <Typography id='about12' variant='h4' style={{width:'100%', textAlign:'center', marginTop:'200px'}}>
          <span className={style.titleSec}>About Me</span>
        </Typography>
        <Grid container style={{maxWidth:'1000px', width:'100%', marginTop:'40px'}}>
          <Grid item xs={6}>
            <Box sx={{display:'flex', flexWrap:'wrap'}}>
              <CardMedia id='subsec11' image={dev} className={style.card1}/>
              <Box id='subsec12' className={style.secCard}>
                <Typography style={{marginBottom:'15px'}}>
                  <span className={style.descCardMain}>General Information</span>
                </Typography>
                <Typography className={style.descCard}>
                  Assalamu`alaikum, I`m Junior Software Developer from Central Java Indonesia, I am motivated, adaptable, innovative, creative, likes challenges and coding and are responsible person.
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
                        <td className={style.descCard1}>Central Java, Indonesia</td>
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
          </Grid>
          <Grid item xs={6}></Grid>
          <Grid item xs={6}></Grid>
          <Grid item xs={6}>
            <Box sx={{display:'flex', flexWrap:'wrap', flexDirection:"row-reverse"}}>
              <CardMedia id='subsec13' image={gbr1} className={style.card1}/>
              <Box id='subsec14' className={style.secCard}>
                <Typography style={{marginBottom:'40px',}}>
                  <span className={style.descCardMain}>Other Info</span>
                </Typography>
                <Typography className={style.descCard2}>
                  "Give the best then you will get the best"
                </Typography>
                <Box style={{width:'100%',display:'flex',justifyContent:'center',flexDirection:'column'}}>
                {/* href="https://storage.googleapis.com/web-private-amr-321/cv/CV.docx" */}
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreRounded />}
                    >
                      <Typography>My Resume</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Button type="a" variant='contained' color="primary" href={cv2} download style={{margin:'10px 10px 0 0',width:"100%",textTransform:'none'}}>English</Button>
                      <Button type="a" variant='contained' color="primary" href={cv1} download style={{margin:'10px 10px 0 0',width:"100%",textTransform:'none'}}>Indonesia</Button>
                    </AccordionDetails>
                  </Accordion>
                  <Button onClick={e => setOpen(!open)} color='primary' style={{marginTop:"10px",textTransform:'none'}}>
                      <Typography>need application letter ?</Typography>
                  </Button>
                </Box>
                <Box>
                  <Typography className={style.projTit}>My Project</Typography>
                </Box>
                <Box className={style.proj}>
                    <Typography className={style.projTitSec}>
                      {proj.length}
                    </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <ApplicationForm open={open} setOpen={setOpen}/>
    </>
  );
}
