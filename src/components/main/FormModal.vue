<template>
    <transition name="fade" mode="out-in">
        <div v-if="isModalVisible" class="overlay">
            <div class="modal spacing">
                <h3 class="heading-3">
                    Title
                </h3>
                <p class="paragraph">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Illum, natus. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Blanditiis, cumque.
                </p>
                <button class="btn" @click="$emit('hide-modal')">Ok</button>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'FormModal',
    props: {
        isModalVisible: {
            type: Boolean,
            default: false,
        },
    },
    setup() {
        return {};
    },
};
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 200ms ease, transform 200ms ease;
}
.fade-leave-to {
    transform: scale(1.1);
}
.fade-enter-from {
    opacity: 0;
}
.overlay {
    z-index: 110;

    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background-color: rgba(0, 0, 0, 0.6);

    display: flex;
    align-items: center;
    justify-content: center;
}
.modal {
    z-index: 120;
    padding: 3.5rem 5rem;
    background-color: var(--neutral-400);
    border-radius: var(--br-sm);

    .paragraph {
        max-width: 27.5em;
    }
    .btn {
        width: 100%;
    }
}
</style>
