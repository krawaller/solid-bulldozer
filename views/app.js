console.log("...LOADING app.js")
// View: App, renders Hello World and documentation link

define(['backbone', 'router', 'views/mainview', 'views/navview', 'views/contentview', 'views/login'], 
    function(Backbone, Router, MainView, NavView, ContentView, LoginView){
     return {
        start: function(){
            var navView = new NavView();
            var contentView = new ContentView(),
            mainView = new MainView({el:".container",navView:navView,contentView:contentView}),
            router = new Router();
            
            mainView.render();
            Backbone.history.start();
        }
    }
});