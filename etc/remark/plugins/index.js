'use strict';

var plugins = [];

plugins = plugins.concat( require( './lint' ) );
plugins = plugins.concat( require( './eslint' ) );
plugins = plugins.concat( require( './validate-links' ) );


// EXPORTS //

module.exports = plugins;
