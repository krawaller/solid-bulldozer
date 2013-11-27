define([ "backbone","jquery","underscore","jade!templates/nav"],function(Backbone, jquery, underscore, template){
	return Backbone.View.extend({
	    
		template: template,
		initialize: function(o){
		},
		render: function()
		{ 
		    console.log("..LOADING View navview")
		    this.$el.html(this.template); 
		    return this; 
		},
		setSection: function(sectionid){
			this.$(".active").removeClass('active');
			this.$("."+sectionid).addClass('active');
		}
	});
});