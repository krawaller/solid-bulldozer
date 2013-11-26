console.log("...LOADING login.js")
// View: App, renders Hello World and documentation link

define(['backbone', 'jquery', 'underscore', 'jade!templates/main'], function(Backbone, jquery, underscore, template){
    return Backbone.View.extend({
        el: '.container',
        // It's the first function called when this view it's instantiated.
        template: template,
        
        // $el - it's a cached jQuery object (el), in which you can use jQuery functions 
        // to push content. Like the Hello World in this case.
        render: function(){
            this.$el.html(template);
        }
    });
});