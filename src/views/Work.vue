<template>
    <section id="work">
        <div class="container">
            <div class="heading-2">Work</div>
            <div class="projects">
                <div class="projects spacing">
                    <ProjectPreview
                        v-for="(project, index) in projects"
                        :key="index"
                        :project="project"
                    />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import ProjectPreview from '@/components/main/ProjectPreview';
import { projects } from '@/data/projects';
export default {
    name: 'Work',
    components: {
        ProjectPreview,
    },
    setup() {
        return { projects };
    },
};
</script>

<style lang="scss" scoped>
#work {
    background-color: var(--neutral-600);
    min-height: 100vh;
    padding: 17.5rem 0;
}
.projects {
    --spacer: 12.5rem;
}
</style>
