<template>
    <ul class="nav-items" v-click-outside-nav="hideSidebar">
        <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'Home' }" tag="button"
                >Home</router-link
            >
        </li>
        <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'Work' }" tag="button"
                >Work</router-link
            >
        </li>
        <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'About' }" tag="button">
                About me
            </router-link>
        </li>
    </ul>
</template>

<script>
import { clickOutsideNav } from '@/directives/click-outside';
export default {
    name: 'Navigation',
    directives: {
        clickOutsideNav,
    },
    methods: {
        hideSidebar() {
            this.$emit('hide-sidebar');
        },
    },
};
</script>

<style lang="scss" scoped>
.nav-items {
    position: fixed;
    right: 0;
    top: 0;

    display: flex;
    flex-direction: column;
    justify-content: center;

    transform: translateX(75vw);
    transition: transform 300ms ease;
    transform-origin: right;

    background-color: var(--neutral-500);
    height: 100vh;
    width: 75vw;
    z-index: 10;

    text-align: center;

    @include mq-min($v-6) {
        position: relative;
        height: auto;
        width: auto;
        transform: translate(0);
        flex-direction: row;
        background-color: transparent;
        justify-content: space-between;
        & > * + * {
            margin-left: 3.5rem;
        }
    }

    .nav-item {
        cursor: pointer;
        font-size: var(--s-24);
        padding: 2.5rem 0;

        @include mq-min($v-6) {
            font-size: 1.6rem;
            padding: 0;
        }

        .nav-link {
            position: relative;
            font-weight: 500;
            padding: 0.5rem 0;
            color: var(--font-primary);
        }

        .nav-link::after {
            content: '';
            position: absolute;

            left: 0;
            bottom: -0.4rem;
            height: 4px;
            border-radius: var(--br-sm);
            width: 100%;

            transform: scale(0, 1);
            transform-origin: left;
            transition: transform 250ms var(--in-out-sine);
            background-color: var(--accent);
        }
        .nav-link:hover {
            text-decoration: underline;
        }
        .router-link-active::after {
            transform: scale(1, 1);
        }
        .router-link-active:hover {
            text-decoration: none;
        }
    }
    .about {
        margin-right: 0;
    }

    &.isSidebarVisible {
        opacity: 1;
        transform: translateX(0);
    }
}
</style>
