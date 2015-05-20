Router.route('/', {
  name: 'home'
});

Router.route('/dashboard', {
  name: 'dashboard'
});

Router.route('/get-unsubscribes', {
  name: 'getUnsub'
});

Router.plugin('ensureSignedIn', {
  only: ['dashboard', 'getUnsub']
});
