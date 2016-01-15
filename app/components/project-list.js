import Ember from 'ember';

export default Ember.Component.extend({
    projectCount: Ember.computed('projects.[]', function() {
        return this.get('projects').get('length');
    })
});
