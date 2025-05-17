<script setup lang="ts">
import { Database } from '~~/types/database.types'

const main = useMain()
const client = useSupabaseClient<Database>()

const { data: demoData } = await useAsyncData('demo', async () => {
  const { data } = await client.from('demo').select('id, created_at, value').order('created_at')
  return data
})

/*
// Alternatively, can use API calls to fetch data from the server
const tasksFromServer = ref()

const fetchTasksFromServerRoute = async () => {
  const { data } = await useFetch('/api/tasks', { headers: useRequestHeaders(['cookie']), key: 'tasks-from-server' })
  tasksFromServer.value = data
}
*/
</script>
<template>
    <h1>Page 2</h1>
    <p>We remember the number was {{ main.number }}</p>
    <ul>
        <li
          v-for="row of demoData"
          :key="row.id"
          class="border-b border-gray-200 divide-y divide-gray-200"
        >
            {{ row.id }}: {{ row.value }}
        </li>
    </ul>
</template>