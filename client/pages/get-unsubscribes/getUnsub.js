// if (Meteor.isClient) {
//   // This code only runs on the client
//   Template.getUnsub.helpers({
//     requests: [
//       { address: "mail1@domain.com", key:"aslkjhadhgdalkjhblkajh" },
//       { address: "mail2@domain.com", key:"aslkjhaasaadlkjhblkajh" },
//       { address: "mail3@domain.com", key:"aslkjhalkjhbasdfhlkajh" }
//     ]
//   });
// }

Requests = new Mongo.Collection("requests");

if (Meteor.isClient) {
  console.log("boop");
  // This code only runs on the client
  Template.getUnsub.helpers({
    requests: function () {
      console.log(Requests.find());
      return Requests.find();
    }
  });
}
