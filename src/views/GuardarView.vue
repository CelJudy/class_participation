<script setup>
import {ref, onMounted, onBeforeUnmount } from 'vue';
import { selectAnswerNum, saveAnswer } from '@/utils';
import alumnos from '@/alumnos.json'

const name=ref("");
const answer=ref("");
const login=ref(false);

const iniciar=async ()=>{
    if(name.value!=""){
        const res=await selectAnswerNum();
        if(res.data){
            login.value=true;
        }
    }
}

const guardar=async ()=>{
    await saveAnswer({alumno:name.value, respuesta:answer.value});
    answer.value="";
}

const lostWindowFocus=()=>{
    login.value=false;
}

onMounted(() => {
    document.addEventListener('visibilitychange', lostWindowFocus);
    document.addEventListener('blur', lostWindowFocus);
});

onBeforeUnmount(() => {
    document.removeEventListener('visibilitychange');
    document.removeEventListener('blur');
});

</script>
<template>
    <div class="flex min-h-screen w-full items-start bg-gray-900 transition duration-300 ease-in-out relative">
        <div class="flex-auto p-4">
            <div class="flex justify-center min-h-screen space-x-2">
                <div class="md:w-8/12 lg:w-4/12" v-if="!login">
                    <select
                        v-model="name"
                        class="form-input w-full rounded-md px-4 py-2 border focus:outline-none focus:ring-2 bg-gray-800 text-white border-gray-600 text-lg"
                    >
                        <option v-for="(value, index) in alumnos.tercero" :value="index">{{ value }}</option>
                    </select>
                    <button
                        class="mt-5 w-full flex items-center justify-center rounded-md focus:outline-none transition duration-300 ease-in-out bg-blue-500 hover:bg-blue-700 px-4 py-2 text-white text-base"
                        @click="iniciar"
                        >
                    Iniciar
                    </button>
                    
                </div>
                <div class="md:w-8/12 lg:w-4/12" v-if="login">
                    <p class="subtitle-text mb-3">Escribe tu respuesta</p>
                    <textarea
                        v-model="answer"
                        class="form-input w-full rounded-md px-4 py-2 border focus:outline-none focus:ring-2 bg-gray-800 text-white border-gray-600 text-lg"
                    />
                    <button
                        class="mt-5 w-full flex items-center justify-center rounded-md focus:outline-none transition duration-300 ease-in-out bg-blue-500 hover:bg-blue-700 px-4 py-2 text-white text-base"
                        @click="guardar"
                    >
                    Responder
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>