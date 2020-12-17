<template>
    <TheHeader />

    <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
            <component :is="Component" />
        </transition>
    </router-view>

    <TheFooter />
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';

import TheHeader from '@/components/base/TheHeader';
import TheFooter from '@/components/base/TheFooter';
export default {
    components: {
        TheHeader,
        TheFooter,
    },
    mounted() {
        AOS.init({
            offset: 100,
            duration: 600,
            easing: 'ease-out-sine',
            delay: 100,
        });
    },
};
</script>
<style lang="scss">
@import '@/sass/app.scss';
.fade-enter-active,
.fade-leave-active {
    transition: opacity 200ms ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
