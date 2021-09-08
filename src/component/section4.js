import React, {useState, useEffect} from 'react';
import {Card, CardMedia, Typography, Box, Tab, Tabs, CardActionArea, Backdrop, Divider, InputBase, IconButton} from '@material-ui/core';
import {makeStyles, fade} from '@material-ui/core/styles';
import LinkIcon from '@material-ui/icons/Link';
import CloseIcon from '@material-ui/icons/Close';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ClipboardJS from "clipboard";

new ClipboardJS(".copy");
gsap.registerPlugin(ScrollTrigger);

const useStyle = makeStyles((th)=> ({
  title:{
    color:'#0066cc',
    marginTop:'90px',
    fontFamily:'Candara',
    fontSize:'9vw',
    textAlign:'center',
    width:'100%',
    fontWeight:600,
    [th.breakpoints.up(500)]:{
      fontSize:'6vw',
    },
    [th.breakpoints.up(1000)]:{
      fontSize:'4vw',
    },
  },
  root:{
    width:'100%',
    justifyContent:'center',
    alignItems:'center',
    display:'flex'
  },
  cardImg:{
    width:'20vw',
    minWidth:'140px',
    minHeight:'140px',
    height:'20vw',
  },
  read:{
    background:'#6666ff',
    color:'#ffff',
    padding:'5px',
    paddingLeft:'10px',
    paddingRight:'10px',
    position:'relative',
    fontSize:'3vw',
    transition: th.transitions.create('top', {duration:'0.7s',  easing: th.transitions.easing.easeOut}),
    [th.breakpoints.up(500)]:{
      fontSize:'1.5vw',
    },
    [th.breakpoints.up(1000)]:{
      top:'100px',
      fontSize:'1.2vw',
    },
  },
  readBox:{
    background: fade('#000000', 0),
    opacity:1,
    display:'flex',
    width:'inherit',
    height:'inherit',
    transition: th.transitions.create('background', {duration:'0.7s', easing: th.transitions.easing.easeOut}),
    [th.breakpoints.up(1000)]:{
      opacity:0,
    },
  },
  backdrop:{
    zIndex: th.zIndex.drawer + 1,
  },
  readHover:{
    '&:hover':{
      '& $readBox':{
        opacity:1,
        background: fade('#000000', 0.7),
      },
      '& $read':{
        top:0,
      },
    },
  },
  readMainTitle:{
    fontFamily:'Segoe UI',
    fontSize:'4vw',
    fontWeight:700,
    color:'#00cc99',
    marginBottom:'20px',
    [th.breakpoints.up(500)]:{
      fontSize:'2.5vw',
    },
    [th.breakpoints.up(1000)]:{
      fontSize:'1.5vw',
    },
  },
  readMain:{
    fontFamily:'Segoe UI',
    fontSize:'3.5vw',
    marginBottom:'40px',
    color:'#8c8c8c',
    [th.breakpoints.up(500)]:{
      fontSize:'1.7vw',
    },
    [th.breakpoints.up(1000)]:{
      fontSize:'1vw',
    },
  },
  readMainLink:{
    fontFamily:'Segoe UI',
    fontSize:'3.5vw',
    [th.breakpoints.up(500)]:{
      fontSize:'1.7vw',
    },
    [th.breakpoints.up(1000)]:{
      fontSize:'1vw',
    },
  },
}))

function TabPanel(props) {
  const {children, value, index, ...oth } = props;
  return(
    <div
      role='tabpanel'
      hidden = {value !== index}
      id={`tab-${index}`}
      aria-labelledby={`tab-label-${index}`}
      {...oth}
      >
        {children}
    </div>
  );
}

function controller(index) {
  return {
    id: `tab-label-${index}`,
    'aria-controls': `tab-${index}`,
  };
}

export default function Section4() {
  var style = useStyle();
  const[tab, setTab] = useState(0);
  const[open, setOpen] = useState(0);

  const handleTab = (val, newVal) => {
    setTab(newVal);
  }

  var project = [
    {
      id:1,
      nama:'Slicing Image',
      descript:"This is my first Java project, this project 100% full java code and it used \
                to divide the image into many with full settings\(width and height\) without loosing quality",
      link:'https://github.com/Noob-programmer155/Slicing-Image',
      image: require('../proj1.jpg').default,
      index:[0,1],
    },
    {
      id:2,
      nama:'Default Store Rest API',
      descript:"This is my fourth Java project with Springboot, this \
                project descript default Rest API that must have in store",
      link:'https://github.com/Noob-programmer155/Default-Store-Rest-API',
      image: require('../proj2.jpg').default,
      index:[0,1,3],
    },
    {
      id:3,
      nama:'Rest API with JPA ORACLE, JWT, X509 basic authentication',
      descript:'This is my fifth Java project with Springboot & Spring Security, this project is descript of how to implement Springboot with Spring Security token basic & certified auth in server',
      link:'https://github.com/Noob-programmer155/Rest-API-with-JPA-ORACLE-JWT-X509-basic-authentication',
      image: require('../proj3.jpg').default,
      index:[0,1,3],
    },
    {
      id:4,
      nama:'My Website',
      descript:'This is my six Project in React js, with fully customized with Github & Firebase',
      link:'this website',
      image: require('../proj4.jpg').default,
      index:[0,2,3],
    },
  ]

  return(
    <Box>
      <Typography className={style.title}>
        My Projects
      </Typography>
      <Box justifyContent='center' alignItems='flex-start' display='flex' flexWrap='wrap'>
        <Box className={style.root}>
          <Tabs
            value={tab}
            onChange={handleTab}
            indicatorColor="primary"
            textColor="primary"
           >
            <Tab label='All' {...controller(0)}/>
            <Tab label='Java' {...controller(1)}/>
            <Tab label='React' {...controller(2)}/>
            <Tab label='Web' {...controller(3)}/>
          </Tabs>
        </Box>
        <Divider variant='middle' style={{width:'100%'}}/>
        {
          [0,1,2,3].map( c => (
              <TabPanel value={tab} index={c}>
                <Box justifyContent='center' alignItems='flex-start' display='flex' flexWrap='wrap' style={{width:'100%'}}>
                  <Box justifyContent='center' alignItems='flex-start' display='flex' flexWrap='wrap' style={{width:'90%', minWidth:'140px'}}>
                  {
                    project.map( a => {
                      if (a.index.includes(c)) {
                        return (
                          <Box style={{margin: '10px'}}>
                            <CardActionArea className={style.readHover} onClick={v => {setOpen(a.id);}}>
                              <CardMedia
                                image={a.image}
                                className={style.cardImg}
                                >
                                  <Box justifyContent='center' alignItems='center' className={style.readBox}>
                                    <Typography className={style.read}>
                                      Read More
                                    </Typography>
                                  </Box>
                              </CardMedia>
                            </CardActionArea>
                          </Box>
                        )
                    }})
                  }
                  </Box>
                </Box>
              </TabPanel>
            )
          )
        }
        <Backdrop className={style.backdrop} open={Boolean(open)}>
          <Box>
            <Box display='flex' border={6} borderColor='#bfbfbf' style={{background:'#ffff', width:'90vw', height:'45vh', minWidth:'280px', maxWidth:'600px'}}>
              <CardMedia image={(open)? project[parseInt(open-1)].image:null} style={{minWidth:'30%', height:'inherit'}}/>
              <Box style={{marginLeft:'5px'}}>
                <Typography className={style.readMainTitle}>
                  {(open)? project[parseInt(open-1)].nama:null}
                </Typography>
                <Typography className={style.readMain}>
                  {(open)? project[parseInt(open-1)].descript:null}
                </Typography>
                <Card className='copy' style={{display:'flex',marginRight:'15px', marginLeft:'15px'}} data-clipboard-action="copy" data-clipboard-target="#linkProj">
                  <Box display='flex' alignItems='center' style={{padding:'4px', paddingRight:'6px', background:'#f2f2f2'}}>
                    <LinkIcon fontSize='medium'/>
                  </Box>
                  <Divider orientation='vertical'  flexItem/>
                  <InputBase
                    id='linkProj'
                    style={{width:'100%', marginLeft:'5px'}}
                    value={(open)? project[parseInt(open-1)].link:null}
                   />
                </Card>
              </Box>
            </Box>
            <Box justifyContent='center' display='flex'>
              <IconButton style={{background:'#3399ff',color:'#ffff',position:'relative',top:'-25px'}} onClick={a => setOpen(null)}><CloseIcon/></IconButton>
            </Box>
          </Box>
        </Backdrop>
      </Box>
    </Box>
  );
}
