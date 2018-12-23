// import router from '../router';
import Vue from 'vue';
import HTTP from '../http';


export default {
  namespaced: true,
  state: {
    projects: [],
    newProjectName: null,
  },
  actions: {
    deleteProject({ commit }, project) {
      return HTTP().delete(`/projects/${project.id}`)
        .then(() => {
          commit('removeProject', project);
        });
    },
    saveProject({ commit }, project) {
      return HTTP().patch(`/projects/${project.id}`, project)
        .then(() => {
          commit('unsetEditMode', project);
        });
    },
    fetchProjects({ commit }) {
      return HTTP().get('/projects')
        .then(({ data }) => {
          commit('setProjects', data);
        });
    },
    createProjects({ commit, state}) {
      return HTTP().post('/projects', {
        title: state.newProjectName,
      })
        .then(({ data }) => {
          commit('appendProjects', data);
          commit('setNewProjectName', null);
        });
    },
  },
  getters: {

  },
  mutations: {
    setNewProjectName(state, name) {
      state.newProjectName = name;
    },
    appendProjects(state, project) {
      state.projects.push(project);
    },
    setProjects(state, projects) {
      state.projects = projects;
    },
    setProjectTitle(state, { project, title }) {
      project.title = title;
    },
    setEditMode(state, project) {
      Vue.set(project, 'isEditMode', true);
    },
    unsetEditMode(state, project) {
      Vue.set(project, 'isEditMode', false);
    },
    removeProject(state, project) {
      state.projects.splice(state.projects.indexOf(project), 1);
    },
  },
};