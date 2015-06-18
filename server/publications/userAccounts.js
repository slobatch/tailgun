Meteor.publishComposite("userData", function() {
  if (this.userId) {
    return Meteor.users.find({_id: this.userId},
                             {fields: {'profile': 1, 'domains': 1}});
  } else {
    this.ready();
  }
});
