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

var copy = require( './copy.js' );


// MAIN //

/**
* Merges JSON-compatible objects into a destination object.
*
* ## Notes
*
* -   This function assumes JSON-compatible input objects, which is a valid assumption as we know that ESLint configuration files can be stored as JSON.
*
* @private
* @param {Object} dest - destination object
* @param {...Object} o - objects to merge
* @returns {Object} destination object
*/
function merge( dest ) {
	var keys;
	var o;
	var k;
	var i;
	var j;

	for ( i = 1; i < arguments.length; i++ ) {
		o = arguments[ i ];
		keys = Object.keys( o ); // Note: we are not concerned about backward compatibility with older browsers
		for ( j = 0; j < keys.length; j++ ) {
			k = keys[ j ];
			dest[ k ] = copy( o[ k ] );
		}
	}
	return dest;
} // end FUNCTION merge()


// EXPORTS //

module.exports = merge;
