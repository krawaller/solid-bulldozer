console.log("...LOADING config.js");

//We configure require with paths to our modules, so we can reference them by name when we include them.
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

require(['views/app'], function(AppView){
    new AppView();
});