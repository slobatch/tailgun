Meteor.publishComposite("requests", function() {
  return {
    find: function() {
      return Requests.find({});
    }
    // ,
    // children: [
    //   {
    //     find: function(item) {
    //       return [];
    //     }
    //   }
    // ]
  }
});
