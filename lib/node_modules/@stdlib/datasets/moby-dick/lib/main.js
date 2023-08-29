/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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

var join = require( 'path' ).join;
var resolve = require( 'path' ).resolve;
var readJSON = require( '@stdlib/fs/read-json' ).sync;
var replace = require( '@stdlib/string/replace' );
var fileList = require( './../data/file_list.json' );


// VARIABLES //

var dataPath = resolve( __dirname, '..', 'data' );
var opts = {
	'encoding': 'utf8'
};


// MAIN //

/**
* Returns the text of Moby Dick.
*
* ## Notes
*
* -   This function synchronously reads data from disk for each invocation. Such behavior is intentional and so is the avoidance of `require`. We assume that invocations are infrequent, and we want to avoid the `require` cache. This means that we allow data to be garbage collected and a user is responsible for explicitly caching data.
*
* @throws {Error} unable to read data
* @returns {ObjectArray} data
*
* @example
* var data = text();
* // returns [ {...}, {...}, ... ]
*/
function text() {
	var fpath;
	var data;
	var text;
	var i;

	data = new Array( 139 );
	for ( i = 0; i < data.length; i++ ) {
		fpath = join( dataPath, replace( fileList[ i ], 'txt', 'json' ) );
		text = readJSON( fpath, opts );
		if ( text instanceof Error ) {
			throw text;
		}
		data[ i ] = text;
	}
	return data;
}


// EXPORTS //

module.exports = text;
