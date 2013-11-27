define([ "backbone","jquery","underscore"],function(Backbone, jquery, underscore){
	return Backbone.View.extend({
		// empty the element and append the results of each processed content definition
		render: function(){
		    console.log("render called in contentview");
		    this.$el.empty();
		    this.options.view.render().el;
			return this;
		}
	});
});