Router.configure({
   layoutTemplate: 'tailgun'  //can be any template name
 });

Router.route('/',
  function(){
    this.render('home');
  },
  {name: 'home'}
);

Router.route('/hello',
  {name: 'hello'}
);

Router.route('/get-unsubscribes',
  {name: 'getUnsub'}
);

Router.route('/(.*)',
  {name: 'shotDown'}
);

// Router.map(function(){
//   this.route('home', {path: '/'} );
//   this.route('hello', {path: '/hello'});
//   this.route('getUnsub', {path: '/get-unsubscribes'})
//   // global notfound
//   this.route( 'shotDown', {
//     path: '/(.*)'
//   });
// });
