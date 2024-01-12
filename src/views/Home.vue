<template>
    <div class="pb-20   bg-blue-200 border-4" >  
       
       <div class="flex bg-fixed " >
        
        
        <div class=" sm:w-[50%]  ">
            <img class=" h-[750px] w-[100%] "  src="../assets/images/fon-image.jpg" >
        </div>
        <div class="bg-blue-200  w-[50%] h-[750px] ">
            <h2 class=" items-center text-center font-medium text-4xl sm:pt-10 pt-20">Full Course</h2>
            <p class="pt-6 px-24  items-center justify-center sm:px-4" >Bomb Course has all courses in programming. The most qualified teachers teach. After completing this course, a diploma will be awarded and a job will be secured. You will not regret choosing us</p>
            
        <h3 class="text-3xl text-center sm:mt-16  sm:text-center   mt-10">Contact us</h3>
         <div class="mx-24 my-6">
              <INPUT
              type="email"
              class=" bg-none p-3 pl-6 mt-4 font-bold w-[75%] rounded-md  border-b-2 border-gray-300  border-solid "
              placeholder="Email"
              v-model="clientProp.email"
            />
                <INPUT
              type="name"
              class=" bg-none p-3 pl-6 mt-4 font-bold w-[75%] rounded-md  border-b-2 border-gray-300  border-solid "
              placeholder="Name"
              v-model="clientProp.name"
            />
                <INPUT
              type="Phone"
              class=" bg-none p-3 pl-6 mt-4 font-bold w-[75%] rounded-md  border-b-2 border-gray-300  border-solid "
              placeholder="Phone number"
              v-model="clientProp.phoneNumber"
            />
                <INPUT
              type="text"
              class=" bg-none  pl-6 mt-7  font-bold w-[75%] rounded-md h-[90px] border-b-2 border-gray-300  border-solid "
              placeholder="Comment"
              v-model="clientProp.comment"
            />
            <BUTTON
            class="mt-8 px-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-300 duration-300  bg-white text-purple-800 py-5 rounded-3xl items-center w-[75%] uppercase font-bold border-purple-300  border-solid border-2 "
            icon="fas fa-chevron-right"
            color="#4c489d" @click="sendData(clientProp)"
            >
            SEND
            </BUTTON>
         </div>
        </div>

       </div>
       
        <chatMenu/>
 
    </div>
</template>

<script setup>
import chatMenu from '../components/chatMenu'
import INPUT from '../components/input'
import BUTTON from "../components/button.vue";
import { warningToast } from "../utils/toast";

import  {useClient}  from '../composables/client';
import { reactive } from 'vue'

const { createClient } = useClient();

const clientProp = reactive({
    email: '',
    name: '',
    phoneNumber: '',
    comment:'',
    username:"Salim"
    
})

function clearData(){
    clientProp.email = ''
    clientProp.name = ''
    clientProp.phoneNumber = ''
    clientProp.comment = ''
    console.log(clientProp.email);
}

 async function sendData(data) {
    if (!data.email && !data.name && !data.phoneNumber) {
        warningToast("Fill the planks")
        return 
    }
    await createClient(data)
    clearData()
}

</script>

<style scoped>

</style>