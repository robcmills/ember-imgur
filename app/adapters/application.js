import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'https://api.imgur.com',
  namespace: '3',
  defaultSerializer: 'JSONAPISerializer'  
});
