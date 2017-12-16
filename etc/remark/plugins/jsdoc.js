'use strict';

var plugins = [];

plugins = plugins.concat( require( './lint/jsdoc.js' ) );
plugins = plugins.concat( require( './eslint' ) );
plugins = plugins.concat( require( './lint-equations' ) );


// EXPORTS //

module.exports = plugins;
