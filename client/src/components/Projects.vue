<template>
  <Panel title="Projects">
      <div
          class="project mb-2"
          v-for="project in projects"
          :key="project.id"
      >
        <EditableRecord
          :isEditMode="!project.isEditMode"
          :title="project.title"
          @onInput="setProjectTitle({
              project,
              title: $event,
          })"
          @onClick="projectClicked(project)"
          @onEdit="setEditMode(project)"
          @onSave="saveProject(project)"
          @onDelete="deleteProject(project)"
         />
      </div>
      <CreateRecord
       placeholder="My project name is .... "
       @onInput="setNewProjectName"
       :value="newProjectName"
       @create="createProjects"
       />
  </Panel>
</template>

<script>

import { mapMutations, mapState, mapActions } from 'vuex';
import CreateRecord from '@/components/CreateRecord.vue';
import EditableRecord from '@/components/EditableRecord.vue';

export default {
  mounted() {
    this.fetchProjects();
  },
  components:{
    CreateRecord,
    EditableRecord,
  },
  computed: {
    ...mapState('projects', [
      'newProjectName',
      'projects',
    ]),
  },
  methods: {
    projectClicked(project) {
        this.setCurrentProject(project);
        this.fetchTasksForProject(project);
    },
    ...mapMutations('projects', [
      'setNewProjectName',
      'setEditMode',
      'setProjectTitle',
      'setCurrentProject',
    ]),
    ...mapActions('projects' , [
      'createProjects',
      'fetchProjects',
      'saveProject',
      'deleteProject',
    ]),
     ...mapActions('tasks' , [
      'fetchTasksForProject',
    ]),
  },
};
</script>

<style>
.project {
  font-size: 18px;
}

.icon {
  cursor: pointer;
}
.icon:hover {
  color: #db8230;
}
</style>
