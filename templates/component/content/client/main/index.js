
/**
 * Module dependencies.
 */

var Collection = require('collection')
  , keyname = require('keyname')
  , page = require('page')


/**
 * Todo input.
 */

var canvas = document.querySelector('body');


/**
 * Clear list.
 */

page('*', function(ctx, next){

  next();
});

/**
 * HP
 */

page('/', function(){
  
});

/**
 * item detail
 */

page('/detail', function(){
  canvas.innerHTML = "detail";
});

page();
