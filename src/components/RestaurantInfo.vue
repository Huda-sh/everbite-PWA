<script setup>

let id = 1;
let name = "kfjslfj";
let location = "kfjslfj";
let phone_number = '0987654321';

</script>

<template>
    <div class="w-3/4 mx-auto my-16">
        <div class="flex justify-between">
            <h1 class="text-4xl font-semibold basis-8/12">{{ name }}</h1>
        </div>
        <p class="text-gray-600 mt-6">{{ location }}</p>
        <p class="text-gray-600 mt-6">{{ phone_number }}</p>
    </div>
</template>

<style scoped>

</style>
