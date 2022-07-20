import React, {useState, useEffect} from 'react';
import {Card, CardMedia, Typography, Box, Tab, Tabs, CardActionArea, Backdrop, Divider, InputBase, IconButton} from '@material-ui/core';
import {makeStyles, fade} from '@material-ui/core/styles';
import LinkIcon from '@material-ui/icons/Link';
import CloseIcon from '@material-ui/icons/Close';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ClipboardJS from "clipboard";
import {data} from './data/data';

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
    width:'20vw',
    minWidth:'140px',
    minHeight:'140px',
    height:'20vw',
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

  return(
    <Box id='project12'>
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
            <Tab label='Other Projects' {...controller(3)}/>
          </Tabs>
        </Box>
        <Divider variant='middle' style={{width:'100%'}}/>
        {
          [0,1,2,3].map(c => (
            <TabPanel value={tab} index={c}>
              <Box justifyContent='center' alignItems='flex-start' display='flex' flexWrap='wrap' style={{width:'100%'}}>
                <Box justifyContent='center' alignItems='flex-start' display='flex' flexWrap='wrap' style={{width:'90%', minWidth:'140px'}}>
                {
                  data.filter(e => e.index.includes(c)).map((item,i) => (
                    <Box key={i} style={{margin: '10px'}}>
                      <CardActionArea className={style.readHover} onClick={v => {setOpen(item.id);}}>
                        <CardMedia
                          image={item.image}
                          className={style.cardImg}>
                            <Box justifyContent='center' alignItems='center' className={style.readBox}>
                              <Typography className={style.read}>
                                Read More
                              </Typography>
                            </Box>
                        </CardMedia>
                      </CardActionArea>
                    </Box>
                  ))
                }
                </Box>
              </Box>
            </TabPanel>
          ))
        }
        <Backdrop className={style.backdrop} open={Boolean(open)}>
          <Box>
            <Box display='flex' border={6} borderColor='#bfbfbf' style={{background:'#ffff', width:'90vw', height:'45vh', minWidth:'280px', maxWidth:'600px'}}>
              <CardMedia image={(open)? data[parseInt(open-1)].image:null} style={{minWidth:'30%', height:'inherit'}}/>
              <Box style={{marginLeft:'5px'}}>
                <Typography className={style.readMainTitle}>
                  {(open)? data[parseInt(open-1)].nama:null}
                </Typography>
                <Typography className={style.readMain}>
                  {(open)? data[parseInt(open-1)].descript:null}
                </Typography>
                <Card className='copy' style={{display:'flex',marginRight:'15px', marginLeft:'15px'}} data-clipboard-action="copy" data-clipboard-target="#linkProj">
                  <Box display='flex' alignItems='center' style={{padding:'4px', paddingRight:'6px', background:'#f2f2f2'}}>
                    <LinkIcon fontSize='medium'/>
                  </Box>
                  <Divider orientation='vertical'  flexItem/>
                  <InputBase
                    id='linkProj'
                    style={{width:'100%', marginLeft:'5px'}}
                    value={(open)? data[parseInt(open-1)].link:null}
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
