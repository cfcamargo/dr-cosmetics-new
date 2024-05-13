<template>
    <Container class="py-20" id="products">
        <div class="flex flex-col gap-4 justify-center items-center max-w-[700px] mx-auto">
            <h4 class="text-3xl font-bold text-gold">Nossos Produtos</h4>
            <p class="text-ligth text-center">Trabalhamos com uma vasta linha de aromatizantes, óleos, difusores, e cosméticos em geral. Com representação da linha Via Aroma.</p>
        </div>


        <div class="flex xs:flex-col md:flex-row gap-4 items-center py-10 justify-center">
            <button @click="fetchByBrand(product.value)" class="rounded-full py-2 px-8 border border-gold text-gold hover:bg-pink hover:border-pink" v-for="(product, index) in productData" :key="index" :class="buttonSelected === product.value ? 'bg-pink border-pink' : 'bg-white border-gold'">
                {{ product.button }}
            </button>
        </div>

        <div class=" flex justify-center items-center py-44" v-if="loading">
            <LoaderCircle :size="40" color="#D8AD6C" class="animate-spin"/>
        </div>

        <div class="grid xs:grid-cols-1 md:grid-cols-4 gap-10" v-else-if="productsList.length > 0">
            <CardProduct :title="product.title" :image="product.image" :description="product.description" v-for="(product, index) in productsList" :key="index"/>
        </div>

        <div class="flex justify-center items-center gap-2 py-10 text-ligth" v-else>
            <PackageOpen :size="30"/>
            <span>Nada para mostrar</span>
        </div>
    </Container>
</template>

<script setup lang="ts">
import { PackageOpen, LoaderCircle } from 'lucide-vue-next';

const buttonSelected = ref('ViaAroma')
const loading = ref(false)

const productsList = ref<any>([])

const productData = ref({
    ViaAroma: {
        button: 'Via Aroma',
        value: 'ViaAroma',
        title: 'VIA AROMA',
        description : 'Somos representantes oficiais da Via Aroma, uma marca líder em aromaterapia. Aqui, você encontra uma linha completa de óleos essenciais, aromatizadores elétricos e águas perfumadas, perfeitos para criar um ambiente mais acolhedor e personalizado. Explore nossa seleção exclusiva e descubra como transformar qualquer espaço com os aromas que melhor se adaptam ao seu estilo de vida. Visite-nos e mergulhe no universo da Via Aroma!'
    },

    bioage: {
        button: 'Bio Age',
        value: 'bioage',
        title: 'BIOAGE BY PATRICIA POETA',
        description : 'Descubra a inovação em cuidados com a pele com a linha Bio Age Ro-Aging, assinada por PPoeta. Nossa seleção exclusiva inclui produtos essenciais para um tratamento antienvelhecimento eficaz: máscaras revitalizantes, sérum primer e mousse de limpeza. Cada produto é desenvolvido com tecnologia de ponta e ingredientes de alta qualidade, projetados para nutrir sua pele, melhorar a elasticidade e proporcionar um brilho rejuvenescido. Experimente a transformação e sinta a diferença com a linha Ro-Aging.'
    },

    areta: {
        button: 'Areta Nardelli',
        value: 'areta',
        title: 'ARETA NARDELLI',
        description : 'Apresentamos a exclusiva linha de aromatizadores essenciais da Areta Nardeli, uma coleção cuidadosamente elaborada para enriquecer seu ambiente com fragrâncias que relaxam, revitalizam e inspiram. Cada aromatizador é desenvolvido com a mais alta qualidade e precisão, garantindo que os aromas não só perfumem seu espaço, mas também contribuam para o seu bem-estar. Deixe-se envolver pelas sensações únicas que só a Areta Nardeli pode oferecer e transforme sua casa ou escritório em um refúgio de harmonia e tranquilidade.'
    },

    bath: {
        button: 'Bath & Body Works',
        value: 'bath',
        title: 'BATH AND BODY WORKS',
        description : 'Conheça a Bath & Body Works, a renomada marca americana de cosméticos e produtos para o lar, agora disponível exclusivamente em nossa loja! Especializada em enriquecer o cotidiano com uma variedade de sabonetes líquidos, hidratantes corporais, velas aromáticas e sprays de ambiente, a Bath & Body Works traz para você o melhor em fragrâncias marcantes e inconfundíveis. Cada produto é uma promessa de qualidade e sofisticação, oferecendo uma experiência sensorial única que só uma marca importada e consagrada pode proporcionar. Descubra o poder das essências da Bath & Body Works e transforme sua casa e cuidado pessoal com itens exclusivos encontrados somente em nossa loja.'
    },

    promo : {
        button: 'Promoções',
        value: 'promo',
        title: 'PROMOÇÕES',
        description : 'Descubra as sensacionais promoções que nossa loja preparou especialmente para os amantes de aromas e essências! Nossa seleção inclui desde difusores de ar sofisticados até exclusivas essências que prometem transformar qualquer ambiente.'
    }

})


const fetchByBrand = async(brand: string) => {
    buttonSelected.value = brand
    loading.value = true

    const spreadsheetId = '1w32S825dtGOiosdFmzK2ChCDV1zB498PbYjnzgf5QCU'; 
    const apiKey = 'AIzaSyDPg4y3-mp98bxMxYSzWZwQw8VWqmiZHc0';
    const range = 'BD!A:D';
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?key=${apiKey}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        for(let i = 0; i < data.values.length; i++) {
            if(data.values[i][0] === brand) {
                let product = {
                    brand: data.values[i][0],
                    title: data.values[i][1],
                    description: data.values[i][2],
                    image: data.values[i][3]
                }

                productsList.value.push(product)
            }
        }
    } catch (error) {
        console.error('Error fetching data: ', error);
    } finally {
        productsList.value = productsList.value.filter((product:any) => product.brand === brand); 
        loading.value = false; 
    }

}


onMounted(() => {
    fetchByBrand('ViaAroma')
})

</script>