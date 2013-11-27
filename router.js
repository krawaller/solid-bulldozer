define(['backbone', 'jquery', 'underscore', 'views/login', 'views/register'],function(Backbone, jquery, underscore, LoginView, RegisterView){
    return Backbone.Router.extend({
        
           initialize: function(o){
               
           },
            
           routes:{
               "" : function(){
                    this.options.mainView.show();
                    console.log("loginView");
               },
               "register" : function(){

                    console.log("registerView");
               }
           },
           
           nav: function(){  }
           
    });
});