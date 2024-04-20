<script setup>
import RestaurantInfo from "@/components/RestaurantInfo.vue";

</script>

<template>
    <RestaurantInfo/>
    <div class="px-36 py-10 bg-gray-100">
        <slot name="default"></slot>
    </div>
</template>

<style scoped>

</style>
