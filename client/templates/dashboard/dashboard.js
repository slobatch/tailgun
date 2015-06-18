Template.dashboard.rendered = function() {

};


Template.dashboard.helpers({
  userEmail: function () {
    return Meteor.user().emails[0].address;
  },
  userApiKey: function() {
    try {
      var apiKey = Meteor.user().profile.apiKey;
    }
    catch (err){
      return "API Key does not exist."
    }
    finally {
      if (apiKey){
        return apiKey;
      }
      else {
        return "API Key is not set. Add it below."
      }
    }
  },
  userId: function() {
    return Meteor.userId();
  }
})


Template.dashboard.events({
  "submit .api-form": function (event){
    var apiKeyVar = event.target.apiKeyInput.value;
    console.log("apiKeyVar: "+apiKeyVar);
    Meteor.users.update(this.userId, {$set: {"profile.apiKey" : apiKeyVar}});
    console.log(Meteor.user());
  }
});
