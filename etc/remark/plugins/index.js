'use strict';

var plugins = [];

plugins.push( require( 'remark-lint' ) );
plugins = plugins.concat( require( './lint' ) );
plugins.push( [ require( 'remark-validate-links' ), require( './validate-links' ) ] );


// EXPORTS //

module.exports = plugins;
