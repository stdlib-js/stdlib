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

var isNumericArray = require( '@stdlib/assert/is-numeric-array' );


// MAIN //

/**
* Converts two arrays .
*
* @private
* @param {NumericArray} x - array of x values
* @param {NumericArray} y - array of y values
* @throws {TypeError} first argument must be a numeric array
* @throws {TypeError} second argument must be a numeric array
* @throws {Error} first and second arguments must be of the same length
* @returns {Object} object that mirrors an `ndarray`
*
* @example
* var x = [ 0.6333, 0.8643, 1.0952, 1.3262, 1.5571, 1.7881, 2.019, 2.25, 2.481, 2.7119 ];
* var y = [ -0.0468, 0.8012, 1.6492, 2.4973, 3.3454, 4.1934, 5.0415, 5.8896, 6.7376, 7.5857 ];
* var out = ndarrayLike( x, y );
*/
function ndarrayLike( x, y ) {
	if ( !isNumericArray(x) ) {
		throw new TypeError( 'First argument must be a numeric array' );
	}

	if ( !isNumericArray(y) ) {
		throw new TypeError( 'Second argument must be a numeric array' );
	}

	if ( x.length !== y.length ) {
		throw new Error( 'First and second argument must be of same length' );
	}

	return {
		'get': get,
		'shape': [ x.length, 2 ]
	};

	/**
	* Gets an element of an nd-array-like object .
	*
	* @private
	* @param {number} i - row index
	* @param {number} j - column index
	* @returns {number} number stored in row i and column j
	*/
	function get( i, j ) {
		if ( j === 0 ) {
			return x[ i ];
		}
		return y[ i ];
	}
}


// EXPORTS //

module.exports = ndarrayLike;
