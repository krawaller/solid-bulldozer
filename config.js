console.log("...LOADING config.js");

//This  file is a config for all the dependencies needed in the project.
require.config({
	paths: {
		jQuery: "lib/jquery/jquery",
		underscore: "lib/underscore/underscore",
		backbone: "lib/backbone/backbone",
		bootstrap: "lib/bootstrap/bootstrap",
		jade: "lib/jade/jade",
		"bb-rel":"lib/backbone/backbone-relational",
        "bb-loc":"lib/backbone/backbone.localStorage.async",
	},
	shim: {
        underscore: {
        exports: '_'
    },
    backbone: {
      deps: ['underscore', 'jQuery'],
      exports: 'Backbone'
    }
  }
});

//Init method which uses appview to render hello world! and docco documentation
require(['views/app'], function(AppView){
    new AppView();
});