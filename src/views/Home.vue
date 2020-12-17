<template>
    <main id="landing">
        <section id="showcase">
            <AppShowcase />
        </section>
        <section id="work">
            <AppWork />
        </section>
        <section id="skills">
            <AppSkills />
        </section>
        <section id="contact">
            <AppContact />
        </section>
    </main>
</template>

<script>
import AppShowcase from '@/components/landing/AppShowcase';
import AppWork from '@/components/landing/AppWork';
import AppSkills from '@/components/landing/AppSkills';
import AppContact from '@/components/landing/AppContact';

export default {
    name: 'Landing',

    components: {
        AppShowcase,
        AppWork,
        AppSkills,
        AppContact,
    },
};
</script>

<style lang="scss" scoped>
#showcase {
    height: 100vh;

    background-color: var(--neutral-400);
}
#work {
    padding: 10rem 0;
    background-color: var(--neutral-600);
}
#skills {
    padding: 10rem 0;
    background-color: var(--neutral-400);
}
#contact {
    padding: 10rem 0;
    background-color: var(--neutral-600);
}
</style>
