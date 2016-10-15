'use strict';

// MODULES //

var resolve = require( 'path' ).resolve;


// MAIN //

var config = {};

// Reference database:
config.database = resolve( __dirname, '../docs/references/bib.bib' );

// Citation style language:
config.csl = resolve( __dirname, '../docs/references/csl/chicago-author-date.csl' );


// EXPORTS //

module.exports = config;
