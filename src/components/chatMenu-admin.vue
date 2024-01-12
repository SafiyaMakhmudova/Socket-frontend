
<script setup>
import { ref } from 'vue';
import {socket} from '../socket';
import {useClient}  from '../composables/client'

const { yes, iconBtn  } = useClient()

const newMessage = ref('');
const messages = ref([]);


function onNewMessage() {
  if (newMessage.value.length == 0) {
        return;
  }
  const message = {
    message: newMessage.value,
  }
  socket.emit('message', message)
    messages.value.push(message)
    newMessage.value = ''
  
}


socket.on('message:received', (message) => {
  messages.value.push(message);
  yes.value = true
})
</script>

<template>
  
<div  v-if="yes" class="border-2 border-purple-300 sm:w-[60%] lg:w-[40%] mt-4 md:w-[55%] xl:w-[50%] 2xl:w-[35%] mr-10 rounded-md bg-white float-right mb-10    ">
   <div class="border-2 border-purple-300 h-16 flex justify-between bg-mainBg   ">
    <div class="flex items-center pl-3">
        <i class='text-3xl text-white  bx bx-conversation'></i>
       <div class="pl-3">
        <h5>User bilan chat</h5>
        <p class="font-thin ">Online</p>
       </div>
    </div>
    <div>  
        <i class='float-right text-3xl text-red-800   bx bx-message-x' @click="iconBtn"></i>
    </div>
   </div>
   
  <div   class="pt-10 ">
   <div class="overflow-y-scroll scroll-smooth h-56  ">
     <div v-for="message of messages" :key="message" class="mb-5 w-[40%] ">
      <div class=" rounded-lg bg-purple-200  ">
        <div class="pl-5 font-medium pt-4  ">{{ message.message }}</div>
      </div>
    </div>
   </div>
    <div class="flex  justify-between  gap-3 border-t-2 ">
      <input v-model="newMessage" class="w-full pl-3" type="text" placeholder="Message..."/>
        <i class='text-3xl pr-3 text-mainBg bx bxl-telegram' @click="onNewMessage"></i>
    </div>
  </div>
</div>
</template>