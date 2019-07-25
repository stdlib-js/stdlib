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
var writeFile = require( '@stdlib/fs/write-file' ).sync;
var objectKeys = require( '@stdlib/utils/keys' );
var dataset = require( '@stdlib/datasets/emoji' );


// VARIABLES //

var OUTPUT_JSON = resolve( __dirname, '..', 'data', 'data.json' );
var OUTPUT_CSV = resolve( __dirname, '..', 'data', 'data.csv' );


// MAIN //

/**
* Main execution sequence.
*
* @private
*/
function main() {
	var codes;
	var data;
	var keys;
	var json;
	var opts;
	var csv;
	var len;
	var d;
	var i;
	var j;

	data = dataset();

	// Create the JSON dataset...
	json = {};
	for ( i = 0; i < data.length; i++ ) {
		d = data[ i ];
		json[ d.emoji ] = d.codes;
	}
	// Create the CSV dataset...
	keys = objectKeys( json );
	len = keys.length;
	csv = '';
	for ( i = 0; i < len; i++ ) {
		codes = json[ keys[ i ] ];
		for ( j = 0; j < codes.length; j++ ) {
			csv += '' + keys[ i ] + ',"' + codes[ j ] + '"\n';
		}
	}
	// Write the data files:
	opts = {
		'encoding': 'utf8'
	};
	writeFile( OUTPUT_JSON, JSON.stringify( json )+'\n', opts );
	writeFile( OUTPUT_CSV, csv, opts );
}

main();
