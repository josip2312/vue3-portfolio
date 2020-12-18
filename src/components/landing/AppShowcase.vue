<template>
    <div class="showcase container">
        <div class="showcase-content spacing">
            <h1 class="heading-1">Delivering quality <span>websites </span></h1>
            <p class="desc">
                Hi, I'm a <span>web developer</span> passionate about creating
                aesthetically appealing and functional websites.
            </p>
            <div class="buttons">
                <a class="btn btn-main" href="#work">See my work</a>
                <a class="btn btn-sec" href="#contact">Contact me</a>
            </div>
        </div>
        <div class="showcase-image">
            <ShowcaseImage />
        </div>
        <ScrollIndicator />
    </div>
</template>

<script>
import ScrollIndicator from '@/components/main/ScrollIndicator';
import ShowcaseImage from '@/components/main/ShowcaseImage';
export default {
    name: 'AppShowcase',
    components: {
        ScrollIndicator,
        ShowcaseImage,
    },
    setup() {
        return {};
    },
};
</script>

<style lang="scss" scoped>
@import '@/sass/_animations.scss';

.showcase {
    position: relative;
    height: 100%;

    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(6, 1fr);

    &-content {
        opacity: 0;
        animation: appear 800ms var(--in-out-sine) forwards 100ms;
        grid-row: 1 / 5;
        grid-column: 1 / -1;

        z-index: 10;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        @include mq-min($v-10) {
            align-items: start;
            text-align: left;
            grid-column: 1 / -1;
            grid-row: 2 / 5;
        }
        .heading-1 {
            max-width: 60rem;
            span {
                color: var(--accent-2);
            }
        }
        .desc {
            width: 100%;
            max-width: 25em;
            font-size: var(--s-18);
            color: var(--font-paragraph);
            span {
                color: var(--accent-2);
                font-weight: bold;
            }
        }
        .buttons {
            margin-top: 4rem;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            @include mq-max($v-3) {
                flex-direction: column;
            }

            .btn-sec {
                margin-top: 2.5rem;
                @include mq-min($v-3) {
                    margin-top: 0;
                    margin-left: 2.5rem;
                }
            }
        }
    }
    &-image {
        z-index: 0;
        grid-row: 4 / -1;
        grid-column: 1 / -1;
        align-self: center;
        width: 100%;
        @include mq-min($v-10) {
            grid-column: 5 / -1;
            grid-row: 1 / -1;
            align-self: center;
        }
    }
}
</style>
