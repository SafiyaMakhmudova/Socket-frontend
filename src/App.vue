<!-- <script setup>
import AppLayout from "./layouts/AppLayout.vue";
import Login from "./views/Login.vue"
</script>

<template>
  <!-- <Login/> -->
  <!-- <AppLayout>
    <router-view />
  </AppLayout>
  
</template> --> 

<script setup>
import { ref } from 'vue';
import {socket} from './socket';

const isJoined = ref(false);
const join = ref('');
const username = ref('');
const newMessage = ref('');
const messages = ref([]);

function onUserJoin() {
  if (!username.value.length) {
    alert('Please, add username');
    return;
  }
  socket.emit('join', `${username.value} joined`)
  isJoined.value = true;
}

function onNewMessage() {
  const message = {
    message: newMessage.value,
    sender: username.value
  }
  socket.emit('message:sent', message)
  messages.value.push(message)
}

socket.on('user:joined', (joinMessage) => {
  join.value = joinMessage;
})

socket.on('message:received', (message) => {
  messages.value.push(message);
})
</script>

<template>
  <div v-if="!isJoined" class="welcome">
    <input v-model="username" class="join-input" type="text" placeholder="Username..."/>
    <button class="join-btn" @click="onUserJoin">Join</button>
    <a href="#learn"></a>
  </div>
  <div v-else>
    <div id="learn"></div>
    <div v-if="join.length">{{ join }}</div>
    <div v-for="message of messages" :key="message.sender">
      <div class="message-wrapper" :class="{'self-message': message.sender === username}">
        <div class="sender">{{ message.sender === username? "O'zim": message.sender }}</div>
        <div class="body">{{ message.message }}</div>
      </div>
    </div>
    <div class="message-input-wrapper">
      <input v-model="newMessage" class="message-input" type="text" placeholder="Message..." @keyup.enter="onNewMessage"/>
    </div>
  </div>
</template>
