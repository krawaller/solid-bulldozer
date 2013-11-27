console.log("...LOADING app.js")
// View: App, renders Hello World and documentation link

define(['backbone', 'router', 'views/mainview', 'views/navview', 'views/contentview', 'views/login'], 
    function(Backbone, Router, MainView, NavView, ContentView, LoginView){
     return {
        start: function(){
            var view = new LoginView();
            var navView = new NavView(),
            contentView = new ContentView({view:view}),
            mainView = new MainView({el:".container",navView:navView,contentView:contentView}),
            router = new Router({mainView:mainView});
            
            mainView.render();
            Backbone.history.start();
        }
    }
});