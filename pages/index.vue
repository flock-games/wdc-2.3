<script setup lang="ts">
const main = useMain()
</script>

<template>
    <h1 class="text-2xl font-inter">Hello, {{  main.number  }} doubled is  {{  main.double  }}</h1>
    <button class='btn btn-primary'  @click="main.increment()">
        MORE
        <font-awesome-icon icon="fa-solid fa-user-secret" />
    </button><br>
    <NuxtLink to="/page2">Page 2</NuxtLink>
</template>