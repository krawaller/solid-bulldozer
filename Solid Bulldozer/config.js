console.log("...LOADING config.js");

//This  file is a config for all the dependencies needed in the project.
require.config({
	paths: {
		jquery: "lib/jquery/jquery",
		underscore: "lib/underscore/underscore",
		backbone: "lib/backbone/backbone",
		jade: "lib/jade/jade",
		"bb-rel":"lib/backbone/backbone-relational",
        "bb-loc":"lib/backbone/backbone.localStorage.async",
	},
	shim: {
        underscore: {
        exports: '_'
    },
    backbone: {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    }
  }
});

//Init method which uses appview to render hello world! and docco documentation
require(['views/app'], function(AppView){
    new AppView();
});