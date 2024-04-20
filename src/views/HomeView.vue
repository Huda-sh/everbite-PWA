<script setup>

import FormInput from "@/components/Components/FormInput.vue";
import Restaurant from "@/components/Cards/Restaurant.vue";
import {useRestaurantStore} from "@/stores/useRestaurantStore.js";
import {onMounted, ref, watch} from "vue";
import {debounce} from "lodash";

let store = useRestaurantStore();

onMounted(async () => {
  await store.getRestaurants();
});

let search = ref('');

watch(search, debounce(async value => {
  console.log(value);
  await store.filter(value);
}, 500));

</script>

<template>
  <img src="./../assets/images/banner-home.webp">

  <main class="mt-20 w-3/4 mx-auto">
    <h1 class="text-6xl mx-auto w-min">Restaurants</h1>
    <FormInput v-model="search" placeholder="Search" class="mt-3"></FormInput>
    <div class="grid grid-cols-3 gap-10 px-8 py-5">
      <Restaurant v-for="item in store.restaurants.value" :key="item.id" :name="item.name" :id="item.id"
                  :location="item.location" :phone="item.phone_number"/>
    </div>
  </main>
</template>

<style scoped>

</style>
