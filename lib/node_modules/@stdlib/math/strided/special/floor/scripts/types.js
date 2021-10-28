/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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
var types = require( './../lib/types.js' );


// VARIABLES //

var OPTS = {
	'encoding': 'utf8'
};
var FPATH = resolve( __dirname, '..', 'lib', 'types.json' );


// MAIN //

/**
* Main execution sequence.
*
* @private
* @throws {Error} unexpected error
*/
function main() {
	var err = writeFile( FPATH, JSON.stringify( types )+'\n', OPTS );
	if ( err ) {
		throw err;
	}
}

main();
