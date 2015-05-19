Meteor.methods({
  'addUserToMailingList': function(userEmail){
    console.log("inside method: "+userEmail);

    var putURL = "https://api.mailgun.net/v3/lists/note_instantly_beta_signup@props.knotable.com/members";
    var options = {
      'auth': 'api:key-63r1aardtcyto350ctg7hpm5bxxewgf2',
      'params': {
        'subscribed': "True",
        'address': userEmail
      }
    }

    Meteor.http.call("POST", putURL, options, function(error, result) {
      var returnData;
      if (error) {
        returnData = {
          status: "ERROR",
          message: 'addUserToMailingList Error: ' + error
        };
      } else {
        returnData = {
          status: "SUCCESS"
        }
      };
      return returnData;
    });
  }
});

Meteor.methods({
  'getUnsubsFromMailingList': function(mailgunDomain, mailingList, apiKey){
    var callURL = "https://api.mailgun.net/v3/" + mailgunDomain + "/unsubscribes";
    var options = {
      'auth': 'api:'+apiKey
    }
    console.log("Getting unsub: " + callURL);

    var response = Meteor.http.call("GET", callURL, options);
    var data = response.data
    var unsubList = [];

    for(var item in data.items){
      console.log(data.items[item]);
      unsubList.push(data.items[item]);
    }

    console.log("unsubList "+unsubList)
    refreshUnsubscribedUsersCollection(unsubList);
    return unsubList;
  }
});

Meteor.methods({
  'insertUnsubRequest': function(domain, mailingList, key){
    var domainVar = domain;
    var mailingListVar = mailingList;
    var keyVar = key;

    Requests.insert({
      domain: domainVar,
      address: mailingListVar,
      key: keyVar,
      createdAt: new Date()
    });

    console.log("Inserted "+domainVar+" "+mailingListVar+" "+keyVar+" SUCCESSFULLY!");
  }
});

refreshUnsubscribedUsersCollection = function(userList){
  clearUnsubscribedUsersCollection();
  for (var user in userList){
    console.log("Collection method: "+ userList[user]);
    UnsubscribedUsers.insert(userList[user]);
  };
  return UnsubscribedUsers.find({});
};
