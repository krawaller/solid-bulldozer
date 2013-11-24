//The main application! It will simply load the testmodules for coffeescript and sweet makros, and execute them.

define(['backbone', 'underscore'],function(Backbone, underscore){
    var App = Backbone.View.extend({
        el: '.container',
        // It's the first function called when this view it's instantiated.
        template: _.template('<h3>Hello <%= who %><h3><a class="sidelink" href="doc.html">documentation</a><hr/>'),
        initialize: function(){
            this.render();
        },
        // $el - it's a cached jQuery object (el), in which you can use jQuery functions 
        // to push content. Like the Hello World in this case.
        render: function(){
            this.$el.html(this.template({who: 'world!'}));
        }
    })
    return App;
});