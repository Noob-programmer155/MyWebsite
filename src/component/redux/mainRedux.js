import { configureStore } from "@reduxjs/toolkit";
import res from './sourceRedux'

export default configureStore({
    reducer:{
        res: res  
    }
})