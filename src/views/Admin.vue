<template>
  <div v-if="loading">
    <Loading/>
  </div>
  <div>
    <h2 class="text-3xl items-center text-center pt-9  bg-blue-200 ">Users</h2>
    
    <div class=" pb-10 p-9  bg-blue-200 h-[510px]">
    <table class="text-xl  w-[90%] rounded-md  items-center  ">
      <thead class="  ">
        <tr class="">
          <th class="text-left !font-bold">ID</th>
          <th class="text-left !font-bold">First Name</th>
          <th class="text-left !font-bold">Phone</th>
          <th class="text-left !font-bold">Comment</th>
          <th class="text-left !font-bold">Email</th>
        </tr>
      </thead>
      <tbody class="">
        <tr
          v-for="(item, i) in clients"
          @click="onStaffSelected(item.id)"
          :key="item.id"
          class="cursor-pointer"
        >
          <td class="font-semibold">{{ i + 1 }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.phoneNumber }}</td>
          <td>{{ item.comment }}</td>
          <td>{{ item.email }}</td>
      
        </tr>
      </tbody>
    </table>
    
    <chatMenu/>
    </div>
  </div>


</template>

<script setup>
import {useAdmin} from '../composables/admin';
import chatMenu from '../components/chatMenu-admin';
import Loading from '../components/loading'
const {clients, loading} = useAdmin()

</script>

<style scoped>

</style>