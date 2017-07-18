'use strict';

// MODULES //

var resolve = require( 'path' ).resolve;


// MAIN //

var config = {};

// Link database:
config.database = resolve( __dirname, '../docs/links/database.json' );


// EXPORTS //

module.exports = config;
