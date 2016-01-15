import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return this.store.findAll('project');
    },
    actions: {
        deleteProject(project) {
            return project.destroyRecord();
        }
    }
});
