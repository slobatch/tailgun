Router.configure({
   layoutTemplate: 'tailgun'  //can be any template name
 });

// Router.map(function(){
//   this.route('home', {path: '/'} );
//   this.route('hello', {path: '/hello'});
//   this.route('getUnsub', {path: '/get-unsubscribes'})
//   // global notfound
//   this.route( 'shotDown', {
//     path: '/(.*)'
//   });
// });

Router.route('/', function(){
  this.render('home');
});

Router.route('/hello', function(){
  this.render('hello');
});

Router.route('/get-unsubscribes', function(){
  this.render('getUnsub');
});

Router.route('/(.*)', function(){
  this.render('shotDown');
});
