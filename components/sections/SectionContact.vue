<template>
    <Container class="py-10 grid grid-cols-2 gap-20 items-center">
        <div class="flex flex-col gap-6">
            <h2 class="text-2xl font-bold text-gold">Entre em contato com a gente!</h2>

            <p class="text-ligth">Entre em contato com a Dr Cosméticos queremos tirar suas dúvidas, ouvir suas críticas e sugestões.</p>

            <a href="https://api.whatsapp.com/send?phone=5567992084022&text=" class="flex gap-2 py-2 px-4 bg-pink w-[200px] justify-center items-center h-12 rounded text-gold">
                <WhatsappIcon color="w-[20px] fill-current" />
                <span>Entre em contato</span>
            </a>
        </div>

        <div class="flex flex-col gap-4">
            <a href="https://www.instagram.com/dr_cosmeticosbr/" class="flex items-center gap-2 text-ligth">
                <Instagram :size="25" color="#D1A59E"/>
                <span>dr_cosmeticosbr</span>
            </a>

            <a href="https://api.whatsapp.com/send?phone=5567992084022&text=" class="flex items-center gap-2 text-ligth">
                <WhatsappIcon color="w-[26px] fill-current text-rose" />
                <span>(67) 99208-4022</span>
            </a>

            <a href="mailto:drcosmeticospp@gmail.com" class="flex items-center gap-2 text-ligth">
                <Mail :size="25" color="#D1A59E"/>
                <span>drcosmeticospp@gmail.com</span>
            </a>

            <a href="https://maps.app.goo.gl/opGR79QyZ3YnhsYh8" class="flex items-center gap-2 text-ligth">
                <MapPin :size="25" color="#D1A59E"/>
                <span>Av Marechal Floriano, 2804 - Ponta Porã - MS</span>
            </a>
        </div>
    </Container>
</template>

<script setup lang="ts">
import { Instagram, Mail, MapPin } from 'lucide-vue-next';

</script>