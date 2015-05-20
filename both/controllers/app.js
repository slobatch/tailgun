AppController = RouteController.extend({
  layoutTemplate: 'tailgunLayout'
});

AppController.events({
  'click [data-action=logout]' : function() {
    AccountsTemplates.logout();
  }
});
