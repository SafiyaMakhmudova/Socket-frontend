<template>
    <div>
        <template>
  <div>
    <v-table>
      <thead>
        <tr>
          <th class="text-left !font-bold">#</th>
          <th class="text-left !font-bold">First Name</th>
          <th class="text-left !font-bold">Last Name</th>
          <th class="text-left !font-bold">Phone</th>
          <th class="text-left !font-bold">Role</th>
          <th class="text-left !font-bold">Email</th>
          <!-- <th class="text-left !font-bold">Status</th> -->
          <!-- Should be replace other fields add translation -->
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, i) in items"
          @click="onStaffSelected(item.person_id)"
          :key="item.id"
          class="cursor-pointer"
        >
          <td class="font-semibold">{{ i + 1 }}</td>
          <td>{{ item.first_name }}</td>
          <td>{{ item.last_name }}</td>
          <td>{{ item.phone }}</td>
          <td v-if="item.is_admin">Admin</td>
          <td v-if="item.is_teacher">Teacher</td>
          <td>{{ item.email }}</td>
          <!-- <td>
            <input v-model="item.is_active" type="checkbox" @change.stop="toggleUserStatus(item)" />
          </td> -->
        </tr>
      </tbody>
    </v-table>
  </div>
</template>

<script setup>
import { RT_SINGLE_STAFF } from '@/constants/routes/director';
import router from '@/router';

// function toggleUserStatus(user) {
//   console.log(user);
// }

const props = defineProps({
  items: {
    type: Array,
    required: true
  }
});

function onStaffSelected(id) {
  router.push({ name: RT_SINGLE_STAFF, params: { id } });
}
</script>

    </div>
</template>

<script setup>
    
</script>

<style scoped>

</style>