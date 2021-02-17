/**
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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
var readFile = require( '@stdlib/fs/read-file' ).sync;
var writeFile = require( '@stdlib/fs/write-file' ).sync;
var reEOL = require( '@stdlib/regexp/eol' );


// VARIABLES //

var INPUT_CSV = resolve( __dirname, '..', 'data', 'data.csv' );
var OUTPUT_JSON = resolve( __dirname, '..', 'data', 'data.json' );


// MAIN //

/**
* Main execution sequence.
*
* @private
* @throws {Error} unexpected error
*/
function main() {
	var fields;
	var data;
	var opts;
	var json;
	var tmp;
	var d;
	var i;
	var j;

	opts = {
		'encoding': 'utf8'
	};

	// Read the raw CSV file:
	data = readFile( INPUT_CSV, opts );
	if ( data instanceof Error ) {
		throw data;
	}

	// Parse the CSV data (NOTE: we assume well-formatted CSV)...
	data = data.split( reEOL.REGEXP );
	fields = data[ 0 ].split( ',' );
	data = data.slice( 1, data.length-1 ); // remove the header line and trailing newline
	for ( i = 0; i < data.length; i++ ) {
		d = data[ i ].split( ',' );
		if ( d.length !== fields.length ) {
			throw new Error( 'unexpected error. Number of row values ('+d.length+') does not match the expected number of fields ('+fields.length+').' );
		}
		for ( j = 0; j < d.length; j++ ) {
			d[ j ] = parseFloat( d[ j ] );
		}
		data[ i ] = d;
	}

	// Create the JSON data...
	json = [];
	for ( i = 0; i < data.length; i++ ) {
		d = data[ i ];
		tmp = {};
		for ( j = 0; j < fields.length; j++ ) {
			tmp[ fields[ j ] ] = d[ j ];
		}
		json.push( tmp );
	}

	// Write the output file:
	writeFile( OUTPUT_JSON, JSON.stringify( json )+'\n', opts );
}

main();
