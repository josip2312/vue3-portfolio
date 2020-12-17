<template>
    <button
        class="toggleLightMode"
        @click.prevent="toggleLightMode"
        @mouseout="unFocusButton"
        aria-label="Toggle light mode"
    >
        <svg width="24" height="24" viewBox="0 0 24 24">
            <path
                fill="var(--font-primary)"
                d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10v-20zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12z"
            />
        </svg>
        <div class="tooltip" role="label">
            Click to enable {{ lightModeToggled ? 'Light' : 'Dark' }} Mode
        </div>
    </button>
</template>

<script>
import { onMounted, ref } from 'vue';
export default {
    name: 'LightModeButton',
    setup() {
        let lightModeToggled = ref('');
        lightModeToggled.value = localStorage.getItem('light-mode');

        const enableLightMode = () => {
            lightModeToggled.value = !lightModeToggled.value;
            document.body.classList.add('light-mode');
            localStorage.setItem('light-mode', 'enabled');
        };
        const disableLightMode = () => {
            lightModeToggled.value = !lightModeToggled.value;
            document.body.classList.remove('light-mode');
            localStorage.setItem('light-mode', null);
        };

        onMounted(() => {
            if (localStorage.getItem('light-mode') === 'enabled') {
                enableLightMode();
            }
        });

        const toggleLightMode = () => {
            let lightMode = localStorage.getItem('light-mode');

            if (lightMode !== 'enabled') {
                enableLightMode();
            } else {
                disableLightMode();
            }
        };

        const unFocusButton = () => {
            document.querySelector('.toggleLightMode').blur();
        };

        return {
            toggleLightMode,
            unFocusButton,
            lightModeToggled,
        };
    },
};
</script>

<style lang="scss" scoped>
.toggleLightMode {
    z-index: 50;
    position: absolute;
    right: 0%;
    top: 8rem;

    background: none;
    border: none;

    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;

    cursor: pointer;

    svg {
        position: relative;
        width: 2.5rem;
        height: 2.5rem;
    }

    svg:hover {
        transform: scale(1.05);
    }
    svg:hover ~ .tooltip {
        opacity: 1;
    }
}
.toggleLightMode:focus {
    outline: none;
    .tooltip {
        opacity: 1;
    }
}
.tooltip {
    position: absolute;
    top: 4rem;
    color: var(--font-primary);
    font-weight: 500;
    left: -15rem;
    background-color: var(--neutral-400);
    box-shadow: var(--shadow-sm);

    padding: 1rem;
    pointer-events: none;
    width: 17.5rem;
    transition: opacity 200ms ease-in-out;
    opacity: 0;
}
</style>
