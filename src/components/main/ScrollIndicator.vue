<template>
    <div class="scroll-indicator"></div>
</template>

<style lang="scss" scoped>
@import '@/sass/_animations.scss';
.scroll-indicator {
    animation: appear 750ms ease forwards 1400ms;
}
.scroll-indicator {
    position: absolute;
    display: block;
    left: 50%;
    transform: translateX(-50%);
    bottom: 5rem;
    box-shadow: inset 0 0 0 2px var(--font-paragraph);
    border-radius: 2.5rem;
    height: 7rem;
    width: 4rem;
    opacity: 0;

    @include mq-min($v-9) {
        bottom: 10rem;
    }
}
.scroll-indicator::before {
    content: '';
    position: absolute;
    left: 50%;

    transform: translateX(-50%);
    width: 1.1rem;
    height: 1.1rem;
    border-radius: 1rem;

    color: var(--font-paragraph);
    background: var(--font-paragraph);
    animation: scroll 2s infinite 350ms;
}
.scroll-indicator::after {
    content: 'Scroll';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);

    letter-spacing: 2px;
    bottom: -3rem;
}

@keyframes scroll {
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
        transform: translate(-50%, 4rem);
    }
}
@keyframes appear {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 0.7;
    }
}
</style>
