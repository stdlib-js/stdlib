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

var objectKeys = require( '@stdlib/utils/keys' );
var getPrototypeOf = require( '@stdlib/utils/get-prototype-of' );
var isDate = require( '@stdlib/assert/is-date-object' );
var isError = require( '@stdlib/assert/is-error' );
var isBuffer = require( '@stdlib/assert/is-buffer' );
var isRegExp = require( '@stdlib/assert/is-regexp' );


// MAIN //

/**
* Tests for deep equality between two values.
*
* @param {*} a - first comparison value
* @param {*} b - second comparison value
* @returns {boolean} boolean indicating if `a` is deep equal to `b`
*
* @example
* var bool = deepEqual( [ 1, 2, 3 ], [ 1, 2, 3 ] );
* // returns true
*
* @example
* var bool = deepEqual( [ 1, 2, 3 ], [ 1, 2, '3' ] );
* // returns false
*
* @example
* var bool = deepEqual( { 'a': 2 }, { 'a': [ 2 ] } );
* // returns false
*
* @example
* var bool = deepEqual( [], {} );
* // returns false
*
* @example
* var bool = deepEqual( null, null );
* // returns true
*/
function deepEqual( a, b ) {
	var aKeys;
	var bKeys;
	var typeA;
	var typeB;
	var key;
	var i;

	typeA = typeof a;
	typeB = typeof b;
	if ( a === null || typeA !== 'object' ) {
		if ( b === null || typeB !== 'object' ) {
			return a === b;
		}
		return false;
	}
	// Case: `a` is of type 'object'
	if ( typeB !== 'object' ) {
		return false;
	}
	if ( getPrototypeOf( a ) !== getPrototypeOf( b ) ) {
		return false;
	}
	if ( isDate( a ) ) {
		return a.getTime() === b.getTime();
	}
	if ( isRegExp( a ) ) {
		return a.source === b.source && a.flags === b.flags;
	}
	if ( isError( a ) ) {
		if ( a.message !== b.message || a.name !== b.name ) {
			return false;
		}
	}
	if ( isBuffer( a ) ) {
		if ( a.length !== b.length ) {
			return false;
		}
		for ( i = 0; i < a.length; i++ ) {
			if ( a[ i ] !== b[ i ] ) {
				return false;
			}
		}
		return true;
	}
	aKeys = objectKeys( a );
	bKeys = objectKeys( b );
	if ( aKeys.length !== bKeys.length ) {
		return false;
	}
	aKeys.sort();
	bKeys.sort();

	// Cheap key test:
	for ( i = 0; i < aKeys.length; i++ ) {
		if ( aKeys[ i ] !== bKeys[ i ] ) {
			return false;
		}
	}
	// Possibly expensive deep equality test for each corresponding key:
	for ( i = 0; i < aKeys.length; i++ ) {
		key = aKeys[ i ];
		if ( !deepEqual( a[ key ], b[ key ] ) ) {
			return false;
		}
	}
	return typeA === typeB;
}


// EXPORTS //

module.exports = deepEqual;
