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

var isArrayArray = require( '@stdlib/assert/is-array-array' );


// MAIN //

/**
* Creates an object from an array of key-value pairs.
*
* @param {ArrayArray} entries - input object
* @throws {TypeError} must provide an array of arrays
* @returns {Object} object created from `[key, value]` pairs
*
* @example
* var entries = [ ['beep', 'boop'], ['foo', 'bar'] ];
*
* var obj = objectFromEntries( entries );
* // returns {'beep': 'boop', 'foo': 'bar'}
*/
function objectFromEntries( entries ) {
	var out;
	var i;
	if ( !isArrayArray( entries ) ) {
		throw new TypeError( 'invalid argument. Must provide an array of arrays. Value: `'+entries+'`.' );
	}
	out = {};
	for ( i = 0; i < entries.length; i++ ) {
		out[ entries[i][0] ] = entries[ i ][ 1 ];
	}
	return out;
}


// EXPORTS //

module.exports = objectFromEntries;
