<script setup>

import Restaurant from "./Restaurant.vue";
import BreadCrumbs from "@/components/Components/BreadCrumbs.vue";
import Category from "@/components/Cards/Category.vue";

defineProps({
    categories:Array,
    id:Number
});

</script>

<template>
    <Restaurant>
        <template #default>
            <div class="flex justify-between mb-12">
                <BreadCrumbs class="basis-3/4 mt-3"/>
            </div>
            <div class="grid grid-cols-4 gap-8">
                <Category v-for="category in categories" :name="category.name" :id="category.id" :discount="category.discount" :key="category.id"/>
            </div>
        </template>
    </Restaurant>
</template>

<style scoped>

</style>
