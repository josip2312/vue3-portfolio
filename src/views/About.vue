<template>
    <section id="about">
        <div class="container">
            <div class="about-image">
                <img src="@/assets/images/me.jpeg" alt="A picture of me" />
            </div>

            <div class="about-content spacing">
                <h1 class="heading-3">About me</h1>
                <p class="about-bio">
                    Highly invested and passionate about creating high quality
                    websites. Recently received a Bachelor's degree in Computer
                    Science at the University of Mostar.
                </p>
                <p class="about-bio">
                    Working as a Frontend Developer for one of the top software companies in the eastern European region - 
                    <a class="about-link" target="_blank" href="https://www.nsoft.com/">NSoft</a>
                </p>
                <div class="about-links">
                    <a
                        href="https://github.com/josip2312"
                        target="_blank"
                        class="about-link"
                        >Github</a
                    >
                    <a
                        href="https://www.linkedin.com/in/josip-ivancic-b3521a1b4/"
                        target="_blank"
                        class="about-link"
                        >Linkedin</a
                    >
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@import '@/sass/_animations.scss';
#about {
    padding: 15rem 0;
    background-color: var(--neutral-600);
    min-height: 100vh;
}
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @include mq-min($v-10) {
        flex-direction: row;
    }
}
.about-image {
    flex: 1;
    max-width: 50rem;
    margin-bottom: 5rem;
    border-radius: var(--br-sm);
    overflow: hidden;

    animation: appear 800ms var(--in-out-sine) forwards;

    @include mq-min($v-10) {
        margin-bottom: 0;
        margin-right: 3rem;
    }
}
.about-content {
    flex: 1;
    max-width: 60rem;

    line-height: 1.7;
    opacity: 0;
    animation: fadeLeft 500ms ease forwards 600ms;
    @include mq-min($v-10) {
        margin-top: -5rem;
        max-width: 30em;
        margin-left: 3.5rem;
    }
}
.about-link {
    margin-right: 2.5rem;
    color: var(--accent-2);
    text-decoration: underline;
}
</style>
