Router.map(function(){
  this.route('home', {path: '/'} );
  this.route('hello', {path: '/hello'});

  // global notfound
  this.route( 'shotDown', {
    path: '/(.*)'
  });
});
