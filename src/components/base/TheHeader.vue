<template>
    <header class="header">
        <nav class="container">
            <router-link :to="{ name: 'Home' }" class="logo">
                Ivancic Josip
            </router-link>
            <TheNavigation
                :class="{ isSidebarVisible: isSidebarVisible }"
                @hide-sidebar="hideSidebar"
            />

            <HamburgerMenu
                @click="toggleSidebar"
                @hide-sidebar="isSidebarVisible = false"
                :isSidebarVisible="isSidebarVisible"
            />
            <LightModeButton />
        </nav>

        <TheMobileNav />
    </header>
</template>

<script>
import { ref } from 'vue';

import LightModeButton from '@/components/main/LightModeButton';
import HamburgerMenu from '@/components/main/HamburgerMenu';
import TheMobileNav from '@/components/base/TheMobileNav';
import TheNavigation from '@/components/base/TheNavigation';
export default {
    name: 'Header',
    components: {
        TheMobileNav,
        LightModeButton,
        HamburgerMenu,
        TheNavigation,
    },
    setup() {
        const isSidebarVisible = ref(false);

        const toggleSidebar = () => {
            isSidebarVisible.value = !isSidebarVisible.value;
        };
        const hideSidebar = () => {
            isSidebarVisible.value = false;
        };
        return {
            isSidebarVisible,
            toggleSidebar,
            hideSidebar,
        };
    },

    mounted() {
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            header.classList.toggle('sticky', window.scrollY > 0);
        });
    },
};
</script>

<style scoped lang="scss">
.header {
    display: flex;
    align-items: center;

    position: fixed;
    top: 0;
    left: 0;
    right: 0;

    background-color: transparent;

    transition: background-color 300ms ease-in-out;
    z-index: 100;
    border-top: 3px solid var(--accent);

    &.sticky {
        background-color: var(--neutral-500);
    }
}

.container {
    position: relative;

    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo {
        font-family: 'Vegan Style';
        font-size: 2rem;
        margin: 1.5rem 0;
    }
}
</style>
