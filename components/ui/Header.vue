<template> 
    <header class="w-full flex flex-col transition-all ease-linear" :class="showMenu ? 'xs:h-dvh md:h-[80px]' : 'h-[80px]'">
        <Container class="flex h-[80px] justify-between items-center">
            <nuxt-img src="/logo.png" class="h-[60px]"/>

            <nav class="xs:hidden md:flex items-center gap-4 text-ligth hover:brightness-90">
                <a href="">INÍCIO</a>
                <a href="">SOBRE</a>
                <a href="">PRODUTOS</a>
                <a href="">CONTATO</a>
            </nav>

            <div class="xs:fled md:hidden">
                <button class="hamburger" type="button" @click="toogleMenu" :class="defineAnimationToHamburgueMenu">
                    <span class="hamburger-box">
                        <span class="hamburger-inner"></span>
                    </span>
                </button>
            </div>
        </Container>
        <nav class="w-full flex-1 flex flex-col justify-center items-center gap-8 bg-white text-rose" v-if="showMenu">
            <a href="" class="font-bold text-xl">INÍCIO</a>
            <a href="" class="font-bold text-xl">SOBRE</a>
            <a href="" class="font-bold text-xl">PRODUTOS</a>
            <a href="" class="font-bold text-xl">CONTATO</a>
        </nav>
    </header>
</template>

<script setup lang="ts">

const showMenu = ref(false)

const toogleMenu = () => {
    showMenu.value = !showMenu.value
}

const defineAnimationToHamburgueMenu = computed(() => {
    if(showMenu.value) {
        return 'hamburger--spin-r is-active'
    } else {
        return 'hamburger--spin'
    }
})

</script>