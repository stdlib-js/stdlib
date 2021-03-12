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

var compute = require( './minmax.js' );


// MAIN //

/**
* Returns the minimum and maximum values.
*
* @param {(Array|TypedArray|Object)} [out] - output object
* @param {number} x - first number
* @param {number} [y] - second number
* @param {...number} [args] - numbers
* @returns {(Array|TypedArray|Object)} minimum and maximum values
*
* @example
* var v = minmax( 3.14, 4.2 );
* // returns [ 3.14, 4.2 ]
*
* @example
* var out = [ 0.0, 0.0 ];
* var v = minmax( out, 5.9, 3.14, 4.2 );
* // returns [ 3.14, 5.9 ]
*
* var bool = ( v === out );
* // returns true
*
* @example
* var v = minmax( 3.14, NaN );
* // returns [ NaN, NaN ]
*
* @example
* var v = minmax( +0.0, -0.0 );
* // returns [ -0.0, 0.0 ]
*/
function minmax( out, x, y ) {
	var bool;
	var args;
	var len;
	var i;

	len = arguments.length;
	if ( len === 1 ) {
		return compute( [ 0.0, 0.0 ], out );
	}
	bool = ( typeof arguments[ 0 ] === 'number' );
	if ( len === 2 ) {
		if ( bool ) {
			return compute( [ 0.0, 0.0 ], out, x );
		}
		return compute( out, x );
	}
	if ( len === 3 ) {
		if ( bool ) {
			return compute( [ 0.0, 0.0 ], out, x, y );
		}
		return compute( out, x, y );
	}
	if ( bool ) {
		args = [];
		args.push( [ 0.0, 0.0 ] );
		i = 0;
	} else {
		args = [];
		args.push( arguments[ 0 ] );
		i = 1;
	}
	for ( ; i < len; i++ ) {
		args.push( arguments[ i ] );
	}
	return compute.apply( null, args );
}


// EXPORTS //

module.exports = minmax;
