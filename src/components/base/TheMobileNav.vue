<template>
    <div class="mobile-nav">
        <router-link class="link" :to="{ name: 'Home' }">
            <svg
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
                ></path>
            </svg>
            <span> Home </span>
        </router-link>
        <router-link class="link" :to="{ name: 'Work' }">
            <svg
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fill-rule="evenodd"
                    d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                    clip-rule="evenodd"
                ></path>
            </svg>
            <span> My Work </span>
        </router-link>
        <router-link class="link" :to="{ name: 'About' }">
            <svg
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                    clip-rule="evenodd"
                ></path>
            </svg>
            <span> About me </span>
        </router-link>
    </div>
</template>

<style lang="scss" scoped>
.mobile-nav {
    @include mq-min($v-6) {
        display: none;
    }
    display: flex;
    justify-content: space-around;
    align-items: center;

    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;

    background-color: var(--neutral-500);
    z-index: 100;

    .link {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: opacity 200ms ease-out;
        padding: 1.35rem 0;
        svg {
            width: 3rem;
            margin-right: 0.5rem;
        }
    }
    .link:hover {
        opacity: 0.9;
    }
    .router-link-exact-active {
        background-color: var(--neutral-400);
    }
}
</style>
