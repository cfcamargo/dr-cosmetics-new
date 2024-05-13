<template>
    <section id="home">
        <Container class="bg-pink rounded-2xl xs:h-auto md:h-[calc(100dvh_-_80px)] xs:py-10 md:py-0 shadow-md">
            <div class="grid xs:grid-cols-1 md:grid-cols-2 xs:gap-2 md:gap-10 px-10 items-center justify-center h-full">
                <div class="flex flex-col xs:gap-6 md:gap-10 xs:items-center md:items-start xs:px-0 md:px-10">
                    <h2 class="xs:text-2xl md:text-4xl text-gold font-bold xs:text-center md:text-start">
                        Transforme espaços em experiências
                    </h2>

                    <p class="text-ligth xs:text-center md:text-start">Descubra nossa linha Via Aroma e encontre a fragrância perfeita para seu espaço. Contate um consultor hoje e transforme ambientes com aromas que inspiram.</p>

                    <a href="" class="text-rose underline font-bold hover:brightness-90">Falar com uma consultora</a>
                </div>

                <div class="w-full flex items-center justify-center">
                    <nuxt-img src="/banner-cover.png" class="w-full"/>
                </div>
            </div>
        </Container>
    </section>
</template>

<script setup lang="ts">

</script>
