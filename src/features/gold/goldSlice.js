import {createSlice} from "@reduxjs/toolkit";


const goldSlice = createSlice({
    name:"image",
    initialState:{
     categories:[],
        subCategories: [],

    },
    reducers:{
        addImage : (state,action)=>{
            state.categories = [...state.categories, {id:Math.random(),name:action.payload.name,
                gender:action.payload.gender,url:action.payload.url}]

        },

        deleteImage: (state,action)=>{
            state.categories =  state.categories.filter(val => val.id !== action.payload.id)
        },
        editImage: (state,action)=>{
           state.categories.find(val => val.id === action.payload.id).name = action.payload.name
           state.categories.find(val => val.id === action.payload.id).url = action.payload.url
           state.categories.find(val => val.id === action.payload.id).gender = action.payload.gender
            return state
        },
        addSubCategories: (state,action)=>{
            state.subCategories = [...state.subCategories,{subId:Math.random(),
                name:action.payload.name,category:action.payload.category}]


        },

    }
})
export const {addImage,deleteImage,editImage,addSubCategories} = goldSlice.actions
export  default goldSlice.reducer