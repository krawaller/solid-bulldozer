define([ "backbone","jquery","underscore","jade!templates/main"],function(Backbone, jquery, underscore, template){
	return Backbone.View.extend({
		template: template,
		render: function(){
			this.$el.html(template);
            this.$(".navbar-collapse").append(this.options.navView.render().el);
			this.$(".content").append(this.options.contentView.el);
			return this;
		},
		show: function(){
			this.options.contentView.render();
			this.options.navView.setSection();
		}
	});
});