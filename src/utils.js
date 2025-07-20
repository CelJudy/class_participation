import axios from "axios";

//const ip="http://localhost:3000/api/";
const ip="http://192.168.1.101:3000/api/";

export const saveAnswer=async(data)=>{
    try{
        const options={
            url:`${ip}ejercicios/guardar`,
            method:"POST",
            headers:{
                'Content-Type':'application/json',
            },
            data:data
        }
        const response=await axios.request(options);
        return {status:response.status, data:response.data}
    }catch(error){
        console.log(error);
    }
}

export const selectAnswerNum=async(id)=>{
    try{
        const options={
            url:`${ip}ejercicios/validar`,
            method:"GET",
            headers:{
                'Content-Type':'application/json',
            }
        }
        const response=await axios.request(options);
        return {status:response.status, data:response.data}
    }catch(error){
        console.log(error);
    }
}

export const selectAnswers=async(id)=>{
    try{
        const options={
            url:`${ip}ejercicios/respuestas/${id}`,
            method:"GET",
            headers:{
                'Content-Type':'application/json',
            }
        }
        const response=await axios.request(options);
        return response.data;
    }catch(error){
        console.log(error);
    }
}