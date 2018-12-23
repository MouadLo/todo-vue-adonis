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
      <h1>testing</h1>

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
    ...mapMutations('projects', [
      'setNewProjectName',
      'setEditMode',
      'setProjectTitle',
    ]),
    ...mapActions('projects' , [
      'createProjects',
      'fetchProjects',
      'saveProject',
      'deleteProject',
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
