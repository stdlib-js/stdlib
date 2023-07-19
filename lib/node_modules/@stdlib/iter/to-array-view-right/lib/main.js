/**
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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
var isCollection = require( '@stdlib/assert/is-collection' );
var isIteratorLike = require( '@stdlib/assert/is-iterator-like' );
var isInteger = require( '@stdlib/assert/is-integer' ).isPrimitive;
var isAccessorArray = require( '@stdlib/array/base/assert/is-accessor-array' );
var accessorSetter = require( '@stdlib/array/base/accessor-setter' );
var setter = require( '@stdlib/array/base/setter' );
var dtype = require( '@stdlib/array/dtype' );
var format = require( '@stdlib/string/format' );


// MAIN //

/**
* Fills an array-like object view from right to left with values returned from an iterator.
*
* @param {Iterator} iterator - source iterator
* @param {Collection} out - output array
* @param {integer} [begin=0] - starting index (inclusive)
* @param {integer} [end=out.length] - ending index (non-inclusive)
* @param {Function} [mapFcn] - function to invoke for each iterated value
* @param {*} [thisArg] - execution context
* @throws {TypeError} first argument must be an iterator
* @throws {TypeError} second argument must be an array-like object
* @throws {TypeError} third argument must be an integer (starting index) or a callback function
* @throws {TypeError} fourth argument must be an integer (ending index) or a callback function
* @throws {TypeError} fifth argument must be a function
* @returns {Collection} output array
*
* @example
* var randu = require( '@stdlib/random/iter/randu' );
* var Float64Array = require( '@stdlib/array/float64' );
*
* var iter = randu({
*     'iter': 10
* });
*
* var arr = iterator2arrayviewRight( iter, new Float64Array( 20 ), 5 );
* // returns <Float64Array>
*/
function iterator2arrayviewRight( iterator, out ) {
	var thisArg;
	var nargs;
	var begin;
	var end;
	var fcn;
	var set;
	var dt;
	var i;
	var v;

	if ( !isIteratorLike( iterator ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be an iterator protocol-compliant object. Value: `%s`.', iterator ) );
	}
	if ( !isCollection( out ) ) {
		throw new TypeError( format( 'invalid argument. Second argument must be an array-like object. Value: `%s`.', out ) );
	}
	nargs = arguments.length;
	if ( nargs === 2 ) {
		begin = 0;
		end = out.length;
	} else if ( nargs === 3 ) {
		if ( isFunction( arguments[ 2 ] ) ) {
			begin = 0;
			fcn = arguments[ 2 ];
		} else {
			begin = arguments[ 2 ];
		}
		end = out.length;
	} else if ( nargs === 4 ) {
		if ( isFunction( arguments[ 2 ] ) ) {
			begin = 0;
			end = out.length;
			fcn = arguments[ 2 ];
			thisArg = arguments[ 3 ];
		} else if ( isFunction( arguments[ 3 ] ) ) {
			begin = arguments[ 2 ];
			end = out.length;
			fcn = arguments[ 3 ];
		} else {
			begin = arguments[ 2 ];
			end = arguments[ 3 ];
		}
	} else if ( nargs === 5 ) {
		begin = arguments[ 2 ];
		if ( isFunction( arguments[ 3 ] ) ) {
			end = out.length;
			fcn = arguments[ 3 ];
			thisArg = arguments[ 4 ];
		} else {
			end = arguments[ 3 ];
			fcn = arguments[ 4 ];
			if ( !isFunction( fcn ) ) {
				throw new TypeError( format( 'invalid argument. Fifth argument must be a function. Value: `%s`.', fcn ) );
			}
		}
	} else { // nargs > 5
		begin = arguments[ 2 ];
		end = arguments[ 3 ];
		fcn = arguments[ 4 ];
		if ( !isFunction( fcn ) ) {
			throw new TypeError( format( 'invalid argument. Fifth argument must be a function. Value: `%s`.', fcn ) );
		}
		thisArg = arguments[ 5 ];
	}
	if ( !isInteger( begin ) ) {
		throw new TypeError( format( 'invalid argument. Third argument must be either an integer (starting index) or a function. Value: `%s`.', begin ) );
	}
	if ( !isInteger( end ) ) {
		throw new TypeError( format( 'invalid argument. Fourth argument must be either an integer (ending index) or a function. Value: `%s`.', end ) );
	}
	if ( end < 0 ) {
		end = out.length + end;
		if ( end < 0 ) {
			end = 0;
		}
	} else if ( end > out.length ) {
		end = out.length;
	}
	if ( begin < 0 ) {
		begin = out.length + begin;
		if ( begin < 0 ) {
			begin = 0;
		}
	}
	dt = dtype( out );
	if ( isAccessorArray( out ) ) {
		set = accessorSetter( dt );
	} else {
		set = setter( dt );
	}
	i = end;
	if ( fcn ) {
		while ( i > begin ) {
			i -= 1;
			v = iterator.next();
			if ( v.done ) {
				break;
			}
			set( out, i, fcn.call( thisArg, v.value, i, end-i-1 ) );
		}
		return out;
	}
	while ( i > begin ) {
		i -= 1;
		v = iterator.next();
		if ( v.done ) {
			break;
		}
		set( out, i, v.value );
	}
	return out;
}


// EXPORTS //

module.exports = iterator2arrayviewRight;
