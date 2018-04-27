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

var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var FILES = require( './file_list.js' );
var RE = require( './re_filename.js' );
var unsnakecase = require( './unsnakecase.js' );


// VARIABLES //

var idx;


// FUNCTIONS //

/**
* Generates an index for querying the SOTU database by President name.
*
* @private
* @returns {Object} database index
*/
function index() {
	var out;
	var id;
	var i;
	out = {};
	for ( i = 0; i < FILES.length; i++ ) {
		// Extract the President's name from the filename:
		id = FILES[ i ].match( RE )[ 2 ];

		// Convert the name from snakecase:
		id = unsnakecase( id );

		if ( hasOwnProp( out, id ) ) {
			out[ id ].push( i );
		} else {
			out[ id ] = [ i ];
		}
	}
	return out;
}


// MAIN //

idx = index();


// EXPORTS //

module.exports = idx;
