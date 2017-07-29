'use strict';

var plugins = [];

plugins.push( [ 'remark-validate-links', require( './validate-links' ) ] );
plugins = plugins.concat( require( './lint' ) );


// EXPORTS //

module.exports = plugins;
