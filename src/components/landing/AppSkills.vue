<template>
    <div class="container">
        <div class="heading-2">Skills</div>
        <div class="skills">
            <SkillSingle
                v-for="(skill, index) in skills"
                :key="index"
                :skill="skill"
            />
        </div>
    </div>
</template>

<script>
import { skills } from '@/data/skills';
import SkillSingle from '@/components/main/SkillSingle';
export default {
    name: 'AppSkills',
    components: {
        SkillSingle,
    },
    setup() {
        return { skills };
    },
};
</script>

<style lang="scss" scoped>
.skills {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    gap: 2.5rem 15rem;
    @include mq-min($v-10) {
        grid-template-columns: 1fr 1fr;
        justify-items: stretch;
    }
}
</style>
