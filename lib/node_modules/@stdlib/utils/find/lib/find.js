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

var isFunction = require( '@stdlib/assert/is-function' );
var isInteger = require( '@stdlib/assert/is-integer' ).isPrimitive;
var isObject = require( '@stdlib/assert/is-plain-object' );
var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var isCollection = require( '@stdlib/assert/is-collection' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );


// MAIN //

/**
* Finds elements in an array-like object that satisfy a test condition.
*
* @param {(Collection|string)} arr - object from which elements will be tested
* @param {Options} [options] - function options
* @param {integer} [options.k=arr.length] - limits the number of returned elements
* @param {string} [options.returns='indices'] - if `values`, values are returned; if `indices`, indices are returned; if `*`, both indices and values are returned
* @param {Function} clbk - function invoked for each array element. If the return value is truthy, the value is considered to have satisfied the test condition.
* @throws {TypeError} first argument must be an array-like object
* @throws {TypeError} options argument must be an object
* @throws {TypeError} last argument must be a function
* @throws {TypeError} `options.k` must be an integer
* @throws {TypeError} `options.returns` must be a string equal to `values`, `indices` or `*`
* @returns {Array} array of indices, element values, or arrays of index-value pairs
*
* @example
* var data = [ 30, 20, 50, 60, 10 ];
* var vals = find( data, condition );
* // returns [ 0, 2, 3 ]
*
* function condition( val ) {
*     return val > 20;
* }
*
* @example
* var data = [ 30, 20, 50, 60, 10 ];
* var opts = {
*     'k': 2,
*     'returns': 'values'
* };
* var vals = find( data, opts, condition );
* // returns [ 30, 50 ]
*
* function condition( val ) {
*     return val > 20;
* }
*
* @example
* var data = [ 30, 20, 50, 60, 10 ];
* var vals = find( data, condition );
* // returns []
*
* function condition( val ) {
*     return val > 1000;
* }
*
* @example
* var data = [ 30, 20, 50, 60, 10 ];
* var opts = {
*     'k': -2,
*     'returns': 'values'
* };
* var vals = find( data, opts, condition );
* // returns [ 60, 50 ]
*
* function condition( val ) {
*     return val > 20;
* }
*
* @example
* var data = [ 30, 20, 50, 60, 10 ];
* var opts = {
*     'k': -2,
*     'returns': '*'
* };
* var vals = find( data, opts, condition );
* // returns [ [3, 60], [2, 50] ]
*
* function condition( val ) {
*     return val > 20;
* }
*/
function find( arr, options, clbk ) { // eslint-disable-line stdlib/no-redeclare
	var returns;
	var count;
	var mode;
	var opts;
	var len;
	var out;
	var ret;
	var cb;
	var i;
	var k;
	var v;

	mode = 0;
	returns = [ 'values', 'indices', '*' ];

	if ( !isCollection( arr ) && !isString( arr ) ) {
		throw new TypeError( 'invalid argument. Must provide an array-like object. Value: `' + arr + '`' );
	}
	len = arr.length;
	if ( arguments.length < 3 ) {
		opts = {};
		cb = options;
	} else {
		opts = options;
		cb = clbk;
	}
	if ( !isFunction( cb ) ) {
		throw new TypeError( 'invalid argument. Callback argument must be a function. Value: `' + cb + '`' );
	}
	if ( !isObject( opts ) ) {
		throw new TypeError( 'invalid argument. Options must be an object. Value: `' + opts + '`' );
	}
	if ( hasOwnProp( opts, 'k' ) ) {
		k = opts.k;
		if ( !isInteger( k ) ) {
			throw new TypeError( 'invalid argument. `k` must be an integer. Value: `' + k + '`' );
		}
	} else {
		k = len;
	}
	if ( hasOwnProp( opts, 'returns' ) ) {
		ret = opts.returns;
		if ( !isString( ret ) || returns.indexOf( ret ) === -1 ) {
			throw new TypeError( 'invalid argument. `returns` option must be a string and have one of the following values: `values`, `indices`, `all`. Value: `' + ret + '`' );
		}
		if ( ret === 'values' ) {
			mode = 1;
		} else if ( ret === '*' ) {
			mode = 2;
		}
	}
	out = [];
	count = 0;

	if ( k === 0 ) {
		return out;
	}
	if ( k > 0 ) {
		// Search moving from begin-to-end [0,1,...]:
		for ( i = 0; i < len; i++ ) {
			v = arr[ i ];
			if ( cb( v, i, arr ) ) { // eslint-disable-line callback-return
				if ( mode === 2 ) {
					out.push( [ i, v ] );
				} else if ( mode === 1 ) {
					out.push( v );
				} else {
					out.push( i );
				}
				count += 1;
				if ( count === k ) {
					break;
				}
			}
		}
		return out;
	}
	// Search moving from end-to-begin [...,2,1,0]:
	k = -k;
	for ( i = len-1; i >= 0; i-- ) {
		v = arr[ i ];
		if ( cb( v, i, arr ) ) { // eslint-disable-line callback-return
			if ( mode === 2 ) {
				out.push( [ i, v ] );
			} else if ( mode === 1 ) {
				out.push( v );
			} else {
				out.push( i );
			}
			count += 1;
			if ( count === k ) {
				break;
			}
		}
	}
	return out;
}


// EXPORTS //

module.exports = find;
