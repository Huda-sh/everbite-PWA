<script setup>


import Restaurant from "@/components/Cards/Restaurant.vue";
import BreadCrumbs from "@/components/Components/BreadCrumbs.vue";
import MenuItem from "@/components/Cards/MenuItem.vue";

defineProps({
  items: Array,
  id: Number
})
</script>

<template>
  <Restaurant>
    <template #default>
      <div class="flex justify-between mb-12">
        <BreadCrumbs class="basis-3/4 mt-3"/>
      </div>
      <div class="grid grid-cols-4 gap-8">
        <MenuItem v-for="item in items" :name="item.name" :ingredients="item.ingredients"
                  :price="item.price+'$'" :id="item.id" :key="item.id"
                  :discount="item.discount"
                  :after_discount="item.after_discount"
        />
      </div>
    </template>
  </Restaurant>
</template>

<style scoped>

</style>
