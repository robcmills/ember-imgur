import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string') // gallery
  description: DS.attr('string'), // Returns the images in the gallery. 
  example: DS.attr('string'), // For example the main gallery is https://api.imgur.com/3/gallery/hot/viral/0.json
  method: DS.attr('string'), // Method  GET
  routes: DS.attr('list'), // Routes 
    // https://api.imgur.com/3/gallery/{section}/{sort}/{page}?showViral=bool
    // https://api.imgur.com/3/gallery/{section}/{sort}/{window}/{page}?showViral=bool
  responseModel: DS.attr('string') // Response Model  Gallery Image OR Gallery Album
  // Parameters
  // Key Required  Value
  section: DS.attr('list'), // optional  hot | top | user (default hot)
  sort: DS.attr('list'),  // optional  viral | top | time | rising (only available with user section) default viral
  page: DS.attr('number'), // optional  integer - the data paging number
  window: DS.attr('list'),  // optional  Change the date range of the request if the section is "top", day | week | month | year | all (default day)
  showViral: DS.attr('boolean'), // optional  true | false - Show or hide viral images from the 'user' section (default true)  
});
