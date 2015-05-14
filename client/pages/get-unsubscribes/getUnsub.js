if (Meteor.isClient) {
  // This code only runs on the client
  Template.getUnsub.helpers({
    requests: [
      { address: "mail1@domain.com"},
      { address: "mail2@domain.com"},
      { address: "mail3@domain.com"}
    ]
  });
}

// if (Meteor.isClient) {
//   // This code only runs on the client
//   Template.body.helpers({
//     requests: function () {
//       return Requests.find({});
//     }
//   });
// }
//
// Requests = new Mongo.Collection("requests");
