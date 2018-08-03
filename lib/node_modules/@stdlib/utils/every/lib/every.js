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

var isCollection = require( '@stdlib/assert/is-collection' );


// MAIN //

/**
* Tests whether all elements in a collection are truthy.
*
* @param {Collection} collection - input collection
* @throws {TypeError} must provide a collection
* @returns {boolean} boolean indicating whether all elements are truthy
*
* @example
* var arr = [ 1, 1, 1, 1, 1 ];
*
* var bool = every( arr );
* // returns true
*/
function every( collection ) {
	var len;
	var i;
	if ( !isCollection( collection ) ) {
		throw new TypeError( 'invalid argument. Must provide a collection. Value: `'+collection+'`.' );
	}
	len = collection.length;
	for ( i = 0; i < len; i++ ) {
		if ( !collection[ i ] ) {
			return false;
		}
	}
	return true;
}


// EXPORTS //

module.exports = every;
