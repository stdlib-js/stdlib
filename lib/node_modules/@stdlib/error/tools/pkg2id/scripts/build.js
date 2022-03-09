#!/usr/bin/env node

/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var resolve = require( 'path' ).resolve;
var logger = require( 'debug' );
var writeFile = require( '@stdlib/fs/write-file' ).sync;
var objectKeys = require( '@stdlib/utils/keys' );
var copy = require( '@stdlib/utils/copy' );
var pkgs = require( '@stdlib/_tools/pkgs/names' ).sync;
var objectValues = require( '@stdlib/utils/values' );
var incrspace = require( '@stdlib/array/incrspace' );
var randu = require( '@stdlib/random/base/randu' );
var floor = require( '@stdlib/math/base/special/floor' );
var existing = require( './../data/data.json' );


// VARIABLES //

var debug = logger( 'error:pkg2id:build' );

// Output file paths:
var OUTPUT_JSON = resolve( __dirname, '..', 'data', 'data.json' );
var OUTPUT_CSV = resolve( __dirname, '..', 'data', 'data.csv' );

var CHAR_CODES = incrspace( 97, 123 ) // a-z
	.concat( incrspace( 65, 91 ) ) // A-Z
	.concat( incrspace( 48, 58 ) ); // 0-9

var RE_IGNORE = /_tools/;


// FUNCTIONS //

/**
* Generates a random identifier of the form `[a-zA-Z0-9_]+{3}`.
*
* @private
* @returns {string} identifier
*/
function generateID() {
	var char;
	var hash;
	var i;

	hash = '';
	for ( i = 0; i < 3; i++ ) {
		char = CHAR_CODES[ floor( randu()*CHAR_CODES.length ) ];
		hash += String.fromCharCode( char );
	}
	return hash;
}

/**
* Main execution sequence.
*
* @private
*/
function main() {
	var fopts;
	var names;
	var name;
	var keys;
	var json;
	var ids;
	var csv;
	var id;
	var i;

	debug( 'Extracting package names and generate identifiers if not yet present...' );
	names = pkgs();
	json = copy( existing );
	ids = objectValues( json );
	for ( i = 0; i < names.length; i++ ) {
		name = names[ i ];
		if ( !RE_IGNORE.test( name ) && !json[ name ] ) {
			id = generateID();
			while ( ids.includes( id ) ) {
				id = generateID();
			}
			json[ name ] = id;
			ids.push( id );
		}
	}

	debug( 'Writing to JSON file...' );
	fopts = {
		'encoding': 'utf8'
	};
	writeFile( OUTPUT_JSON, JSON.stringify( json ), fopts );

	debug( 'Writing to CSV file...' );
	fopts = {
		'encoding': 'utf8'
	};
	keys = objectKeys( json );
	csv = '';
	for ( i = 0; i < keys.length; i++ ) {
		csv += '"' + keys[ i ] + '",' + json[ keys[i] ] + '\n'; // Note: ensures trailing newline
	}
	writeFile( OUTPUT_CSV, csv, fopts );
}


// MAIN //

main();
