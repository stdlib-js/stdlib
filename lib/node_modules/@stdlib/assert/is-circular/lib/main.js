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


// FUNCTIONS //

/**
* Tests if a value is an object.
*
* ## Notes
*
* -   The function excludes `null`.
*
* @private
* @param {*} value - value to test
* @returns {boolean} boolean indicating if a value is an object
*/
function isObject( value ) {
	var type = typeof value;
	return ( value !== null && ( type === 'object' || type === 'function' ) );
}

/**
* Tests if the seen array contains a search value.
*
* @private
* @param {Array} seen - array of seen objects
* @param {*} searchValue - search value
* @returns {boolean} boolean indicating whether array contains search value
*/
function contains( seen, searchValue ) {
	var i;
	for ( i = 0; i < seen.length; i++ ) {
		if ( seen[ i ] === searchValue ) {
			return true;
		}
	}
	return false;
}

/**
* Tests if an object contains a circular reference by recursively traversing object keys.
*
* @private
* @param {Object} obj - object to test
* @param {Array} seen - array of seen objects
* @returns {boolean} boolean indicating whether object contains a circular reference
*/
function isCircObj( obj, seen ) {
	var keys;
	var val;
	var i;

	seen.push( obj );
	keys = objectKeys( obj );
	if ( keys.length === 0 ) {
		return false;
	}
	for ( i = 0; i < keys.length; i++ ) {
		val = obj[ keys[ i ] ];
		if ( isObject( val ) && ( contains( seen, val ) || isCircObj( val, seen ) ) ) { // eslint-disable-line max-len
			return true;
		}
	}
	seen.pop( obj );
	return false;
}


// MAIN //

/**
* Tests if an object-like value contains a circular reference.
*
* @param {*} value - value to test
* @returns {boolean} boolean indicating whether value is object-like and contains a circular reference
*
* @example
* var obj = {
*   'a': 'beep',
*   'b': {
*     'c': 'boop'
*   }
* };
* obj.b.self = obj;
* var bool = isCircular( obj );
* // returns true
*
* @example
* var arr = [ 1, 2, 3 ];
* arr.push( arr );
* var bool = isCircular( arr );
* // returns true
*
* @example
* var bool = isCircular( {} );
* // returns false
*
* @example
* var bool = isCircular( null );
* // returns false
*/
function isCircular( value ) {
	if ( !isObject( value ) ) {
		return false;
	}
	return isCircObj( value, [] );
}


// EXPORTS //

module.exports = isCircular;
