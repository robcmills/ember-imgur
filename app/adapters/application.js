import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'https://ember.imgur.zqx.ca',
  namespace: 'loopback/api',
  // defaultSerializer: 'JSONAPISerializer'  
});
