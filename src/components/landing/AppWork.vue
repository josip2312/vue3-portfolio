<template>
    <div class="work container">
        <h2 class="heading-2">Work</h2>

        <div class="projects spacing">
            <ProjectPreview
                v-for="(project, index) in showcaseProjects"
                :key="index"
                :project="project"
            />
        </div>
        <router-link :to="{ name: 'Work' }" class="btn btn-main" tag="button">
            See more projects
        </router-link>
    </div>
</template>

<script>
import { showcaseProjects } from '@/data/projects';

import ProjectPreview from '@/components/main/ProjectPreview';
export default {
    name: 'Work',
    components: {
        ProjectPreview,
    },
    setup() {
        return {
            showcaseProjects,
        };
    },
};
</script>

<style lang="scss" scoped>
.work {
    display: flex;
    flex-direction: column;
}
.projects {
    --spacer: 10rem;
}
.btn {
    font-size: 1.8rem;
    margin-top: 10rem;
    align-self: center;
    width: 100%;
    max-width: 35rem;
}
</style>
