Template.dashboard.rendered = function() {

};


Template.dashboard.helpers({
  userEmail: function () {
    return Meteor.user().emails[0].address;
  }
})
