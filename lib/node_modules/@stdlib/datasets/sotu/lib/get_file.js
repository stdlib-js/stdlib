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
var copy = require( '@stdlib/utils/copy' );
var dataDir = require( './data_dir.js' );
var FILES = require( './file_list.js' );
var db = require( './db.js' );
var loadJSON = require( './load_json.js' );


// MAIN //

/**
* Returns file data.
*
* @private
* @param {NonNegativeInteger} id - file id
* @returns {Object} file data
*/
function getFile( id ) {
	var fpath;
	var data;

	// Check if we can return data from cache...
	if ( db[ id ] ) {
		return copy( db[ id ] );
	}
	// Build the data file filename:
	fpath = join( dataDir, FILES[ id ] );

	// Synchronously load the data (prevents release of the zalgo):
	data = loadJSON( fpath );

	// Save the data to cache:
	db[ id ] = data;

	// Return a deep copy of the data:
	return copy( data );
}


// EXPORTS //

module.exports = getFile;
