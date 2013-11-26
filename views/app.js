console.log("...LOADING app.js")
// View: App, renders Hello World and documentation link

define(['backbone', 'router', 'views/login'], function(Backbone, Router, LoginView){
    return {
        start: function(){
            var loginView = new LoginView(),
            router = new Router();
            loginView.render();
            Backbone.history.start();
        }
    }
});