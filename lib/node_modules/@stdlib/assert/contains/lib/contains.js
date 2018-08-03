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
var isInteger = require( '@stdlib/assert/is-integer' ).isPrimitive;
var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var isnan = require( '@stdlib/assert/is-nan' ).isPrimitive;


// MAIN //

/**
* Tests if an array-like value contains a search value.
*
* @param {(Collection|string)} val - input value
* @param {*} searchValue - search value
* @param {integer} [position=0] - position at which to start searching for `searchValue`
* @throws {TypeError} first argument must be array-like
* @throws {Error} must provide a search value
* @throws {TypeError} second argument must be a primitive string primitive when the first argument is a string
* @throws {TypeError} third argument must be an integer
* @returns {boolean} boolean indicating whether one value contains another
*
* @example
* var bool = contains( 'last man standing', 'stand' );
* // returns true
*
* @example
* var bool = contains( [ 1, 2, 3, 4 ], 2 );
* // returns true
*
* @example
* var bool = contains( 'presidential election', 'president' );
* // returns true
*
* @example
* var bool = contains( [ NaN, 2, 3, 4 ], NaN );
* // returns true
*
* @example
* var bool = contains( 'javaScript', 'js' );
* // returns false
*
* @example
* var bool = contains( [ 1, 2, 3, {} ], {} );
* // returns false
*
* @example
* var bool = contains( 'Hidden Treasures', '' );
* // returns true
*/
function contains( val, searchValue, position ) {
	var len;
	var pos;
	var i;
	if ( !isCollection( val ) && !isString( val ) ) {
		throw new TypeError( 'invalid argument. First argument must be array-like. Value: `' + val + '`.' );
	}
	if ( arguments.length < 2 ) {
		throw new Error( 'insufficient input arguments. Must provide a search value.' );
	}
	if ( arguments.length > 2 ) {
		if ( !isInteger( position ) ) {
			throw new TypeError( 'invalid argument. Third argument must be an integer. Value: `' + position + '`.' );
		}
		pos = position;
		if ( pos < 0 ) {
			pos = 0;
		}
	} else {
		pos = 0;
	}
	if ( isString( val ) ) {
		if ( !isString( searchValue ) ) {
			throw new TypeError( 'invalid argument. Second argument must be a string primitive. Value: `' + searchValue + '`.' );
		}
		return val.indexOf( searchValue, pos ) !== -1;
	}
	len = val.length;
	if ( isnan( searchValue ) ) {
		for ( i = pos; i < len; i++ ) {
			if ( isnan( val[ i ] ) ) {
				return true;
			}
		}
		return false;
	}
	for ( i = pos; i < len; i++ ) {
		if ( val[ i ] === searchValue ) {
			return true;
		}
	}
	return false;
}


// EXPORTS //

module.exports = contains;
