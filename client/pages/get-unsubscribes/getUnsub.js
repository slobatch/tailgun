Template.getUnsub.helpers({
  requests: function () {
    return Requests.find();
  },

  unsubscribedUsers: function(){
    return UnsubscribedUsers.find();
  }
});


Template.getUnsub.events({
  "submit .new-request": function (event) {
    // This function is called when the new task form is submitted
    event.preventDefault();
    var domainVar = event.target.mailgunDomain.value;
    var mailingListVar = event.target.mailingList.value;
    var keyVar = event.target.apiKey.value;

    Meteor.call('insertUnsubRequest', domainVar, mailingListVar, keyVar, function(error, result){
      if (error){
        return error;
      } else {
        console.log(result);
        return result;
      };
    });

    var unsubList = Meteor.call('getUnsubsFromMailingList', domainVar, mailingListVar, keyVar, function(error, result){
      if (error){
        return error;
      } else {
        console.log(result);
        return result;
      };
    });
    console.log(unsubList);

    // Clear form
    // event.target.mailgunDomain.value = "";
    // event.target.mailingList.value = "";
    // event.target.apiKey.value = "";

    // Prevent default form submit
    return false;
  },
  "click .clear-history": function () {
    Meteor.call('clearRequestsCollection');
  }
});
