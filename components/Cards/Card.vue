<template>
    <div class="w-full rounded-xl flex items-center overflow-hidden bg-pink shadow-md">
        <div class="flex-1 p-4">
            <div class="text-gold">
                <span class="text-xs">
                    {{ smallTitle }}
                </span>
                <p class="font-bold text-lg">
                    {{ title }}
                </p>
            </div>

            <p class=" text-ligth text-sm">
                {{  content }}
            </p>
        </div>
        
        <div class="w-[40%] h-full">
            <nuxt-img :src="cover" class="w-full h-full object-cover"/>
        </div>
    </div>
</template>

<script setup lang="ts">
const { smallTitle, title, content, cover} = defineProps<{
    smallTitle: string,
    title: string,
    content: string,
    cover: string
}>()

</script>
