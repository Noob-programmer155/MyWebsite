import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Paper, Typography, makeStyles } from "@material-ui/core";
import { ExpandMoreRounded, InsertDriveFileRounded } from "@material-ui/icons";
import { PDFDocument } from "pdf-lib";
import React from "react";

const useStyle = makeStyles(th => ({
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
    toolcontainer:{
        '& .MuiAccordionSummary-content':{
            alignItems:'center'
        }
    }
}))

export default function Section5() {
    const style = useStyle()
    const[files,setFiles] = React.useState([])
    const[pdf,setPdf] = React.useState()
    const onchange = (e) => {
        setFiles(Array.from(e.target.files))
    }
    return(
        <Box id='tools12'>
            <Typography className={style.title}>Tools</Typography>
            <Accordion style={{margin:'10px'}}>
                <AccordionSummary className={style.toolcontainer} expandIcon={<ExpandMoreRounded/>}>
                    <Typography style={{color:'GrayText',fontFamily:'Candara',fontSize:'20pt',fontWeight:600,flexBasis:'20%'}}>Merge PDF</Typography>
                    <Typography style={{color:'GrayText',fontFamily:'Candara',fontSize:'12pt',fontWeight:400}}>merge your pdf with ease step</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Box sx={{width:'100%',display:'flex',flexDirection:'column',alignItems:'center'}}>
                        <label for='input-file-merge' style={{width:'100%'}}>
                            <Paper style={{width:'100%',cursor:'pointer',overflow:"auto"}}>
                                <Box sx={{margin:'10px',border:'6px dashed #a1a1a1'}}>
                                    <Box sx={{display:'flex',justifyContent:'center',padding:'30px 30px 0 30px'}}>
                                        <InsertDriveFileRounded style={{color:'GrayText'}}/>
                                        <Typography style={{color:'GrayText',fontFamily:'Candara',fontSize:'12pt',fontWeight:600}}>Add Files</Typography>
                                    </Box>
                                    <Typography style={{color:'GrayText',fontFamily:'Candara',fontSize:'12pt',fontWeight:600,paddingBottom:'30px'}} align="center">Processing Files Ready: {files.length}</Typography>
                                </Box>
                                <input id='input-file-merge' type="file" multiple onChange={onchange} hidden/>
                            </Paper>
                        </label>
                        <Button variant="contained" color="primary" onClick={async(e) => {setPdf(await generateMultiPDF(files))}} style={{margin:'10px 0 10px 0',textTransform:'none'}}>Generate</Button>
                        {pdf && <Button variant="contained" color="secondary" href={URL.createObjectURL(pdf)} download="merge.pdf" style={{textTransform:'none'}}>Download</Button>}
                    </Box>
                </AccordionDetails>
            </Accordion>
        </Box>
    )
}

async function generateMultiPDF(files) {
    const doc = await PDFDocument.create()

    for (const file of files) {
        const fl = await fetch(URL.createObjectURL(file)).then(fs => fs.arrayBuffer())
        const loadpage = await PDFDocument.load(fl)
        const copy = await doc.copyPages(loadpage,loadpage.getPageIndices())
        copy.forEach(flc => doc.addPage(flc))
    }

    const pdfs = await doc.save()
    return new Blob([pdfs],{type:'application/pdf'})
}