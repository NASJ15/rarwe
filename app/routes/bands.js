import Route from '@ember/routing/route';
import AuthenticateRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticateRouteMixin, { 
	model() {
		return this.store.findAll('band');
	},

});