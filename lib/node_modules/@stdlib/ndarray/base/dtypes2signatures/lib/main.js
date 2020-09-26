/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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

var isArrayLikeObject = require( '@stdlib/assert/is-array-like-object' );
var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var isNonNegativeInteger = require( '@stdlib/assert/is-nonnegative-integer' ).isPrimitive;


// MAIN //

/**
* Transforms a list of array argument data types into a list of signatures.
*
* @param {StringArray} dtypes - list of array argument data types
* @param {NonNegativeInteger} nin - number of input array arguments
* @param {NonNegativeInteger} nout - number of output array arguments
* @throws {TypeError} first argument must be an array-like object containing strings
* @throws {TypeError} second argument must be a nonnegative integer
* @throws {TypeError} third argument must be a nonnegative integer
* @throws {RangeError} first argument must have at least one element
* @throws {RangeError} length of the first argument is incompatible with the second and third arguments
* @returns {StringArray} list of signatures
*
* @example
* var dtypes = [
*     'float64', 'float64',
*     'float32', 'float32'
* ];
*
* var sigs = dtypes2signatures( dtypes, 1, 1 );
* // returns [ '(float64) => (float64)', '(float32) => (float32)' ]
*/
function dtypes2signatures( dtypes, nin, nout ) {
	var len;
	var out;
	var tmp;
	var N;
	var M;
	var i;
	var m;

	if ( !isArrayLikeObject( dtypes ) ) {
		throw new TypeError( 'invalid argument. First argument must be an array-like object containing strings. Value: `' + dtypes + '`.' );
	}
	if ( !isNonNegativeInteger( nin ) ) {
		throw new TypeError( 'invalid argument. Second argument must be a nonnegative integer. Value: `' + nin + '`.' );
	}
	if ( !isNonNegativeInteger( nout ) ) {
		throw new TypeError( 'invalid argument. Third argument must be a nonnegative integer. Value: `' + nout + '`.' );
	}
	len = dtypes.length;
	if ( len === 0 ) {
		throw new RangeError( 'invalid argument. First argument must contain at least one element.' );
	}
	N = nin + nout;
	if ( len%N !== 0 ) {
		throw new RangeError( 'invalid arguments. The length of the first argument is incompatible with the second and third arguments.' );
	}
	out = [];

	// Create a temporary array for storing signatures...
	tmp = [];

	// [ '(', <in_dtype>, ', ', ..., ') => (', <out_dtype>, ', ', ..., ')' ] => 1+nin+nin-1+1+nout+nout-1+1 => 1 + (2*nin) + (2*nout) => 1 + (2*(nin+nout))
	M = 2 * N;
	m = 2 * nin;
	for ( i = 0; i <= M; i++ ) {
		if ( i === 0 ) {
			if ( i === m ) {
				tmp.push( '() => (' );
			} else {
				tmp.push( '(' );
			}
		} else if ( i === M ) {
			if ( i === m ) {
				tmp.push( ') => ()' );
			} else {
				tmp.push( ')' );
			}
		} else if ( i === m ) {
			tmp.push( ') => (' );
		} else if ( i%2 === 1 ) {
			tmp.push( '' );
		} else {
			tmp.push( ', ' );
		}
	}
	for ( i = 0; i < len; i++ ) {
		if ( !isString( dtypes[ i ] ) ) {
			throw new TypeError( 'invalid argument. First argument must be an array-like object containing strings. Value: `' + dtypes + '`.' );
		}
		m = i % N;
		tmp[ (2*m)+1 ] = dtypes[ i ];
		if ( m === N-1 ) {
			out.push( tmp.join( '' ) );
		}
	}
	return out;
}


// EXPORTS //

module.exports = dtypes2signatures;
