GetUnsubController = AppController.extend({
  waitOn: function() {
    Meteor.subscribe('requests');
    Meteor.subscribe('unsubscribedUsers')
  },
  data: {

  },
  onAfterAction: function () {
    Meta.setTitle('Get Unsubscribes');
  }
});
