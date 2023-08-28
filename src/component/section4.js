import React, {useEffect, useState} from 'react';
import {CardMedia, Typography, Box, Tab, Tabs, CardActionArea, Divider, IconButton, Button, Dialog} from '@material-ui/core';
import {makeStyles, alpha} from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import { useSelector } from 'react-redux';
import { project } from './redux/sourceRedux';

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
  closeBtn:{
    backgroundColor:'#fa1d05',
    color:'#ffff',
    transition: 'all .3s ease-in',
    '&:hover':{
      backgroundColor:'#fa6705',
      color:'#ffff',
      transform: 'rotate(90deg) scale(1.2)',
    }
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
    background: alpha('#000000', 0),
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
  dialog:{
    zIndex: th.zIndex.drawer + 1,
  },
  readHover:{
    '&:hover':{
      '& $readBox':{
        opacity:1,
        background: alpha('#000000', 0.7),
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
  readMainSecondary:{
    fontFamily:'Segoe UI',
    fontSize:'2vw',
    fontStyle:'italic',
    fontWeight:500,
    color:'#5ed1b4',
    marginBottom:'0px',
    [th.breakpoints.up(500)]:{
      fontSize:'1vw',
    },
    [th.breakpoints.up(1000)]:{
      fontSize:'.8vw',
    },
  },
  readMain:{
    fontFamily:'Segoe UI',
    fontSize:'3.5vw',
    marginBottom:'40px',
    textAlign:'justify',
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
  const proj = useSelector(project);
  const[labels,setLabels] = useState([]);
  const[tab, setTab] = useState(0);
  const[open, setOpen] = useState(0);
  // const head = "../source/images/";

  useEffect(() => {
    setLabels(['All',...new Set(proj.map(e => e.label).sort())])
  },[proj])

  const handleTab = (val, newVal) => {
    setTab(newVal);
  }

  function importAll(img) {
    return img.keys().map(imgs => img(imgs))
  }
  
  const images = importAll(require.context('../source/images',false));

  const imagesContainer = (img) => {
    return require(`../source/images/${img}`);
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
            {
              labels.map((i,index) => (
                <Tab key={i} label={i} {...controller(index)}/>
              ))
            }
          </Tabs>
        </Box>
        <Divider variant='middle' style={{width:'100%'}}/>
        {
          labels.map((c,index) => (
            <TabPanel key={index} value={tab} index={index} style={{width:'100%'}}>
              <Box justifyContent='center' alignItems='flex-start' display='flex' flexWrap='wrap' style={{width:'100%'}}>
                <Box justifyContent='center' alignItems='flex-start' display='flex' flexWrap='wrap' style={{width:'90%', minWidth:'140px'}}>
                {
                  proj.filter(e => e.label === c || index === 0).map((item,i) => (
                    <Box key={i} style={{margin: '10px'}}>
                      <CardActionArea className={style.readHover} onClick={v => {setOpen(item.id);}}>
                        <CardMedia
                          image={imagesContainer(item.image)}
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
        <Dialog className={style.dialog} open={Boolean(open)} PaperProps={{style:{overflow:"visible",
          backgroundColor:"transparent",width:'90vw',minWidth:'280px',maxWidth:'700px'},elevation:0}}>
          <Box style={{background:'#ffff', height:'100%', border:'6px solid #bfbfbf'}}>
            <Box display='flex'>
              <CardMedia src={(open)? imagesContainer(proj[parseInt(open-1)].image):null} style={{minWidth:'30%', height:'inherit'}}/>
              <Box style={{margin:'10px 5px 10px 5px',overflow:'auto'}}>
                <Typography className={style.readMainSecondary}>
                  {(open)? proj[parseInt(open-1)].label:null}
                </Typography>
                <Typography className={style.readMainTitle}>
                  {(open)? proj[parseInt(open-1)].nama:null}
                </Typography>
                <Typography className={style.readMain}>
                  {(open)? proj[parseInt(open-1)].descript:null}
                </Typography>
                <Button
                  color='primary'
                  variant='contained'
                  id='linkProj'
                  href={(open)? proj[parseInt(open-1)].link:null}
                  target='blank'
                  style={{width:'100%',textDecoration:"none"}}
                  >To Repo</Button>
              </Box>
            </Box>
          </Box>
          <Box justifyContent='left' display='flex' width='100%' sx={{position:'relative',left:'-25px',top:'-25px'}}>
            <IconButton className={style.closeBtn} onClick={a => setOpen(null)}><CloseIcon/></IconButton>
          </Box>
        </Dialog>
      </Box>
    </Box>
  );
}
