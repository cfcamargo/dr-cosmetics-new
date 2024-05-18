<template>
    <div class="flex flex-col gap-2 shadow-md p-8">
        <div class="h-[200px]">
            <nuxt-img :src="props.image" class="object-cover h-full"/>
        </div>


        <div class="flex flex-col gap-2 justify-center items-center">
            <h3 class="font-bold text-gold text-lg text-center">{{ props.title }}</h3>
            <p class="text-sm text-ligth text-center">{{ props.description }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    title: string,
    image: string,
    description: string
}>()

</script>
