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
* Tests if a value is an array-like object where every element is between two values.
*
* @param {*} value - value to test
* @param {*} a - left comparison value
* @param {*} b - right comparison value
* @param {string} [left="closed"] - indicates whether the left comparison value is inclusive
* @param {string} [right="closed"] - indicates whether the right comparison value is inclusive
* @throws {TypeError} `left` must be a recognized string
* @throws {TypeError} `right` must be a recognized string
* @returns {boolean} boolean indicating whether a value is an array-like object where every element is between two values
*
* @example
* var arr = [ 3.0, 3.14, 4.0 ];
* var bool = isBetweenArray( arr, 3.0, 4.0 );
* // returns true
*
* @example
* var arr = [ 3.0, 3.14, 4.0 ];
* var bool = isBetweenArray( arr, 3.14, 4.0 );
* // returns false
*
* @example
* var arr = [ 3.0, 3.14, 4.0 ];
* var bool = isBetweenArray( arr, 3.0, 3.14 );
* // returns false
*
* @example
* var arr = [ 3.0, 3.14, 4.0 ];
* var bool = isBetweenArray( arr, 3.0, 4.0, 'open', 'closed' );
* // returns false
*
* @example
* var arr = [ 3.0, 3.14, 4.0 ];
* var bool = isBetweenArray( arr, 3.0, 4.0, 'closed', 'open' );
* // returns false
*/
function isBetweenArray( value, a, b, left, right ) {
	var len;
	var i;
	if ( arguments.length > 3 ) {
		if ( left !== 'closed' && left !== 'open' ) {
			throw new TypeError( 'invalid argument. `left` must be one of the following strings: \'closed\' or \'open\'. Value: `'+left+'`.' );
		}
		if ( right !== 'closed' && right !== 'open' ) {
			throw new TypeError( 'invalid argument. `right` must be one of the following strings: \'closed\' or \'open\'. Value: `'+right+'`.' );
		}
	}
	if ( !isCollection( value ) ) {
		return false;
	}
	len = value.length;
	if ( len === 0 ) {
		return false;
	}
	if ( left === 'closed' || left === void 0 ) {
		if ( right === 'closed' || right === void 0 ) {
			for ( i = 0; i < len; i++ ) {
				if ( value[ i ] < a || value[ i ] > b ) {
					return false;
				}
			}
			return true;
		}
		for ( i = 0; i < len; i++ ) {
			if ( value[ i ] < a || value[ i ] >= b ) {
				return false;
			}
		}
		return true;
	}
	if ( right === 'closed' || right === void 0 ) {
		for ( i = 0; i < len; i++ ) {
			if ( value[ i ] <= a || value[ i ] > b ) {
				return false;
			}
		}
		return true;
	}
	for ( i = 0; i < len; i++ ) {
		if ( value[ i ] <= a || value[ i ] >= b ) {
			return false;
		}
	}
	return true;
}


// EXPORTS //

module.exports = isBetweenArray;
