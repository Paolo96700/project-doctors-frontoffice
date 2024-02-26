<script>
import { RouterLink, RouterView } from 'vue-router';
import { initFlowbite } from "flowbite";
export default{
  created() {
    initFlowbite();
  },
}
</script>

<template>
  <header>
 
    <nav class="">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
    
    
  </header>
  <main>
    <RouterView />
  </main>

</template>

<style>

</style>
