<script setup>
import { useRoute } from 'vue-router';
import {ref, onMounted, onBeforeUnmount } from 'vue';
import { selectAnswers } from '@/utils';

const route = useRoute();
const res=ref([]);

const select=async ()=>{
    res.value=await selectAnswers(route.params.id);
}

onMounted(() => {
    select();
    setInterval(()=>{select()}, 5000);
});

</script>
<template>
    <div class="flex-auto p-4">
        <div class="w-full flex flex-wrap gap-y-3">
            <div v-for="data in res" class="w-1/4 p-2">
                <div class="text-white text-base rounded-md border border-gray-600 px-2 py-2 break-words whitespace-normal overflow-hidden">
                    {{ data.respuesta }}
                </div>
            </div>
        </div>
    </div>
</template>