import DS from 'ember-data';

export default DS.Transform.extend({
  deserialize: function(serialized) {
    console.log('deserialize', serialized)
    return serialized;
  },

  serialize: function(deserialized) {
    console.log('serialize', deserialized)
    return deserialized;
  }
});
