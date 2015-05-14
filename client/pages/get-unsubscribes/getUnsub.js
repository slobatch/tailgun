Template.getUnsub.helpers({
  requests: function () {
    return Requests.find();
  }
});

Template.body.events({
  "submit .new-task": function (event) {
    // This function is called when the new task form is submitted

    var text = event.target.text.value;

    Tasks.insert({
      text: text,
      createdAt: new Date() // current time
    });

    // Clear form
    event.target.text.value = "";

    // Prevent default form submit
    return false;
  }
});

Template.getUnsub.events({
  "submit .new-request": function (event) {
    // This function is called when the new task form is submitted
    event.preventDefault();
    console.log("Form Submitted");
    console.log(event.type);
    var addressVar = event.target.mailingList.value;
    console.log(addressVar);
    var keyVar = event.target.apiKey.value;
    console.log(keyVar);

    Requests.insert({
      address: addressVar,
      key: keyVar,
      createdAt: new Date() // current time
    });
    console.log("boop!");

    // Clear form
    event.target.mailingList.value = "";
    event.target.apiKey.value = "";

    // Prevent default form submit
    return false;
  }
});
