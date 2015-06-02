Meteor.publishComposite("unsubscribedUsers", function() {
  return {
    find: function() {
      return UnsubscribedUsers.find({});
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
