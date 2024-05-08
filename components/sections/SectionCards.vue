<template>
    <section id="cards">
        <Container class="grid xs:grid-cols-1 md:grid-cols-3 gap-10 py-10 px-0">
            <Card v-for="(card, index) in cards" :key="index" :small-title="card.smallTitle" :title="card.title" :content="card.content" :cover="card.cover"/>
        </Container>
    </section>
</template>

<script setup lang="ts">


const cards = [
    {
        smallTitle: 'Linha',
        title: 'Via Aroma',
        content: 'Fornecemos uma variedade de óleos e essências da renomada Via Aroma, perfeitos para criar ambientes acolhedores e personalizados',
        cover: '/card-via-aroma.png'
    },
    {
        smallTitle: 'Linha de',
        title: 'Difusores',
        content: 'Explore uma variedade encantadora de difusores. Transforme seu ambiente com nossas fragancias.',
        cover: '/card-difusores.png' 
    },
    {
        smallTitle: 'Novidade',
        title: 'Linha para Corpo',
        content: 'Descubra a magia dos produtos Bath and Body Works, agora disponíveis em nossa loja.',
        cover: '/card-body-works.png' 
    }
]

</script>
