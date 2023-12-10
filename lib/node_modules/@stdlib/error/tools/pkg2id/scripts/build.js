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
var pkgs = require( '@stdlib/_tools/pkgs/names' ).sync;
var objectValues = require( '@stdlib/utils/values' );
var replace = require( '@stdlib/string/replace' );
var data = require( './../data/data.json' );


// VARIABLES //

var debug = logger( 'error:pkg2id:build' );

// Output file paths:
var OUTPUT_JSON = resolve( __dirname, '..', 'data', 'data.json' );
var OUTPUT_CSV = resolve( __dirname, '..', 'data', 'data.csv' );

// Pattern for (internal) packages that will not receive an error identifier:
var RE_IGNORE = /_tools/;


// FUNCTIONS //

/**
* Converts an internal package name to a standalone package name.
*
* @private
* @param {string} name - internal package name
* @returns {string} standalone package name
*/
function pkg2standalone( name ) {
	// Note: every internal package name begins with `@stdlib/`, which is 8 characters long...
	return '@stdlib/' + replace( name.substring( 8 ), '/', '-' );
}

/**
* Returns the next identifier in the sequence of form `[a-zA-Z0-9]{3}` (in lexicographical order).
*
* @private
* @param {string} [prev=null] - previous identifier
* @returns {string} identifier
*/
function generateID( prev ) {
	var cn;
	var i;
	var c;
	var n;
	if ( !prev ) {
		return '000';
	}

	// Iterate from the last character in the identifier:
	n = prev.length;
	for ( i = n-1; i >= 0; i-- ) {
		c = prev.charCodeAt( i );

		// If the last character is a digit between 0 and 8, increment it:
		if ( c >= 48 && c <= 56 ) {
			cn = String.fromCharCode( c+1 );
			return prev.substring( 0, i ) + cn + prev.substring( i+1 );
		}
		// If the last character is equal to 9, set it to 'A':
		if ( c === 57 ) {
			return prev.substring( 0, i ) + 'A' + prev.substring( i+1 );
		}
		// If the last character is a letter between `A` and `Y`, increment it:
		if ( c >= 65 && c <= 89 ) {
			cn = String.fromCharCode( c+1 );
			return prev.substring( 0, i ) + cn + prev.substring( i+1 );
		}
		// If the last character is equal to `Z`, set it to `a`:
		if ( c === 90 ) {
			return prev.substring( 0, i ) + 'a' + prev.substring( i+1 );
		}
		// If the last character is a letter between `a` and `y`, increment it:
		if ( c >= 97 && c <= 121 ) {
			cn = String.fromCharCode( c+1 );
			return prev.substring( 0, i ) + cn + prev.substring( i+1 );
		}
		// If the last character is equal to `z`, set it to `0`:
		if ( c === 122 ) {
			prev = prev.substring( 0, i ) + '0' + prev.substring( i+1 );
		}
	}
}

/**
* Main execution sequence.
*
* @private
*/
function main() {
	var fopts;
	var names;
	var last;
	var name;
	var keys;
	var ids;
	var csv;
	var id;
	var i;

	debug( 'Extracting package names and generate identifiers if not yet present...' );
	names = pkgs();
	ids = objectValues( data );
	last = ids.sort()[ ids.length-1 ] || null;
	for ( i = 0; i < names.length; i++ ) {
		name = names[ i ];
		if ( !RE_IGNORE.test( name ) && !data[ name ] ) {
			id = generateID( last );
			data[ name ] = id;
			id = generateID( id );
			data[ pkg2standalone( name ) ] = id;
			last = id;
		}
	}

	debug( 'Writing to JSON file...' );
	fopts = {
		'encoding': 'utf8'
	};
	writeFile( OUTPUT_JSON, JSON.stringify( data ), fopts );

	debug( 'Writing to CSV file...' );
	fopts = {
		'encoding': 'utf8'
	};
	keys = objectKeys( data );
	csv = '';
	for ( i = 0; i < keys.length; i++ ) {
		csv += '"' + keys[ i ] + '",' + data[ keys[i] ] + '\n'; // Note: ensures trailing newline
	}
	writeFile( OUTPUT_CSV, csv, fopts );
}


// MAIN //

main();
