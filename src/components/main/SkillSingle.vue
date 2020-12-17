<template>
    <div class="skill spacing" data-aos="fade-up">
        <div tabindex="0" class="icon">
            <img :src="skill.imgSrc" alt="" />
        </div>
        <div class="skill-desc spacing-sm">
            <h3 class="heading-4">
                {{ skill.title }}
            </h3>
            <p class="skill-paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                temporibus non reprehenderit architecto illo? Tenetur officiis
                perferendis quas dolorum architecto!
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SkillSingle',

    props: {
        skill: {
            type: Object,
            required: true,
        },
    },
};
</script>

<style lang="scss" scoped>
.skill {
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    padding: 3rem 0;
    border-radius: var(--br-md);
    font-size: 1.8rem;

    transition: transform 250ms cubic-bezier(0.49, 0.07, 0.36, 1);
    .icon {
        background-color: var(--neutral-500);
        padding: 1.5rem;
        border-radius: 50%;
        border: 1px solid var(--neutral-200);
        img {
            width: 4.5rem;
            height: 4.5rem;
        }
        &:focus {
            outline: 1px solid var(--accent);
            outline-offset: 2px;
        }
    }
    &-desc {
        .heading-4 {
            font-size: 2.4rem;
            margin-bottom: 2.5rem;
        }
    }

    &-paragraph {
        max-width: 30em;

        @include mq-min($v-10) {
            max-width: 100%;
        }
    }
}

.skill:focus {
    outline: 1px solid var(--accent-2);
}
</style>
