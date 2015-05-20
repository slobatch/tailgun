Requests = new Mongo.Collection("requests");

Meteor.methods({
  'clearRequestsCollection': function(){
    Requests.remove({});
  }
});
