UnsubscribedUsers = new Mongo.Collection("unsubscribedUsers");

clearUnsubscribedUsersCollection = function(){
    UnsubscribedUsers.remove({});
  };
