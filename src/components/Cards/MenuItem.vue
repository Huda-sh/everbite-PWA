<script setup>

defineProps({
    name: String,
    ingredients: String,
    price: String,
    discount: String,
    after_discount: String,
    id:Number,
});

</script>

<template>
    <div class="
    rounded-3xl card card bg-white flex-col justify-self-center
">
        <div class="m-12">
            <p class="text-2xl font-semibold align-baseline">
                {{ name }}
                <span v-if="discount" class="text-sm text-white bg-amber-300 p-1 px-2 rounded-xl">-{{ discount }}%</span>
            </p>
            <p class="text-xl text-gray-500">
                {{ ingredients }}
            </p>

            <div class="flex">
                <p class="text-3xl font-bold align-baseline">
          <span
              :class="{
                    'me-3' : true,
                    'line-through' : discount
                }">
          {{ price }}</span>
                    <span v-if="after_discount" class="text-4xl text-amber-400 me-3">{{ after_discount }}$</span>
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
