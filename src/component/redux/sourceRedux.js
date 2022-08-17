import {createSlice} from '@reduxjs/toolkit';

const resource = createSlice({
    name: 'res',
    initialState: {
        project:[],
        experience:[],
        education:[],
        skill1:[],
        skill2:[]
    },
    reducers: {
        setProject: (state, value) => {state.project = value.payload},
        setExperience: (state, value) => {state.experience = value.payload},
        setEducation: (state, value) => {state.education = value.payload},
        setSkill1: (state, value) => {state.skill1 = value.payload},
        setSkill2: (state, value) => {state.skill2 = value.payload}
    }
})

export const {setEducation,setExperience,setProject,setSkill1,setSkill2} = resource.actions;

export const project = state => state.res.project;
export const experience = state => state.res.experience;
export const education = state => state.res.education;
export const skill1 = state => state.res.skill1;
export const skill2 = state => state.res.skill2;

export default resource.reducer;