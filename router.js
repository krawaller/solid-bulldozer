define(['backbone', 'jquery', 'underscore'],function(Backbone, jquery, underscore){
    return Backbone.Router.extend({
           routes:{
               "" : function(){
                    require(['views/login'], function(LoginView){
                        new LoginView();
                    });
                    console.log("loginView");
               },
               "register" : function(){
                    require(['views/register'], function(RegisterView){
                        new RegisterView();
                    });
                    console.log("registerView");
               }
           }
    });
});