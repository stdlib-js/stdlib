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

var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var isNonNegativeInteger = require( '@stdlib/assert/is-nonnegative-integer' ).isPrimitive;
var isCollection = require( '@stdlib/assert/is-collection' );
var isArrayBuffer = require( '@stdlib/assert/is-arraybuffer' );
var isObject = require( '@stdlib/assert/is-object' );
var isFunction = require( '@stdlib/assert/is-function' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var ctors = require( '@stdlib/array/ctors' );
var gfill = require( '@stdlib/blas/ext/base/gfill' );
var hasIteratorSymbolSupport = require( '@stdlib/assert/has-iterator-symbol-support' );
var ITERATOR_SYMBOL = require( '@stdlib/symbol/iterator' );


// VARIABLES //

var HAS_ITERATOR_SYMBOL = hasIteratorSymbolSupport();


// MAIN //

/**
* Creates a filled array.
*
* @param {*} [value] - fill value
* @param {(NonNegativeInteger|TypedArray|ArrayLikeObject|ArrayBuffer)} [arg] - a length, typed array, array-like object, or buffer
* @param {NonNegativeInteger} [byteOffset=0] - byte offset
* @param {NonNegativeInteger} [length] - view length
* @param {string} [dtype="float64"] - data type
* @throws {TypeError} must provide a recognized data type
* @throws {TypeError} must provide a length, typed array, array-like object, or buffer
* @throws {Error} creating a generic array from an `ArrayBuffer` is not supported
* @returns {(TypedArray|Array)} array or typed array
*
* @example
* var arr = filledarray();
* // returns <Float64Array>
*
* @example
* var arr = filledarray( 1.0, 2 );
* // returns <Float64Array>[ 1.0, 1.0 ]
*
* @example
* var arr = filledarray( 1.0, 2, 'float32' );
* // returns <Float32Array>[ 1.0, 1.0 ]
*
* @example
* var arr = filledarray( 1.0, 2, 'generic' );
* // returns [ 1.0, 1.0 ]
*
* @example
* var arr = filledarray( 1.0, [ 0.5, 0.5 ] );
* // returns <Float64Array>[ 1.0, 1.0 ]
*
* @example
* var arr = filledarray( 1, [ 5, -3 ], 'int32' );
* // returns <Int32Array>[ 1, 1 ]
*
* @example
* var arr1 = filledarray( 2, [ 5, 3 ], 'int32' );
* var arr2 = filledarray( 1.0, arr1 );
* // returns <Float64Array>[ 1.0, 1.0 ]
*
* @example
* var arr1 = filledarray( 2, [ 5, 3 ], 'int32' );
* var arr2 = filledarray( 1, arr1, 'uint32' );
* // returns <Uint32Array>[ 1, 1 ]
*
* @example
* var ArrayBuffer = require( '@stdlib/array/buffer' );
*
* var buf = new ArrayBuffer( 16 );
* var arr = filledarray( 1.0, buf );
* // returns <Float64Array>[ 1.0, 1.0 ]
*
* @example
* var ArrayBuffer = require( '@stdlib/array/buffer' );
*
* var buf = new ArrayBuffer( 16 );
* var arr = filledarray( 1.0, buf, 'float32' );
* // returns <Float32Array>[ 1.0, 1.0, 1.0, 1.0 ]
*
* @example
* var ArrayBuffer = require( '@stdlib/array/buffer' );
*
* var buf = new ArrayBuffer( 16 );
* var arr = filledarray( 1.0, buf, 8 );
* // returns <Float64Array>[ 1.0 ]
*
* @example
* var ArrayBuffer = require( '@stdlib/array/buffer' );
*
* var buf = new ArrayBuffer( 16 );
* var arr = filledarray( 1.0, buf, 8, 'float32' );
* // returns <Float32Array>[ 1.0, 1.0 ]
*
* @example
* var ArrayBuffer = require( '@stdlib/array/buffer' );
*
* var buf = new ArrayBuffer( 32 );
* var arr = filledarray( 1.0, buf, 8, 2 );
* // returns <Float64Array>[ 1.0, 1.0 ]
*
* @example
* var ArrayBuffer = require( '@stdlib/array/buffer' );
*
* var buf = new ArrayBuffer( 32 );
* var arr = filledarray( 1, buf, 8, 2, 'int32' );
* // returns <Int32Array>[ 1, 1 ]
*/
function filledarray() {
	var value;
	var nargs;
	var dtype;
	var ctor;
	var arr;
	var len;
	var arg;
	var v;
	var i;

	nargs = arguments.length;
	nargs -= 1;
	if ( nargs >= 0 && isString( arguments[ nargs ] ) ) {
		dtype = arguments[ nargs ];
		nargs -= 1;
	} else {
		dtype = 'float64';
	}
	ctor = ctors( dtype );
	if ( ctor === null ) {
		throw new TypeError( 'invalid argument. Must provide a recognized data type. Value: `'+dtype+'`.' );
	}
	if ( dtype === 'generic' ) {
		if ( nargs <= 0 ) {
			return [];
		}
		value = arguments[ 0 ];
		arg = arguments[ 1 ];
		if ( nargs === 1 ) {
			if ( isNonNegativeInteger( arg ) ) {
				len = arg;
			} else if ( isCollection( arg ) ) {
				len = arg.length;
			}
			if ( len !== void 0 ) {
				arr = [];

				// Manually push elements in order to ensure "fast" elements...
				for ( i = 0; i < len; i++ ) {
					arr.push( value );
				}
				return arr;
			}
			if ( isArrayBuffer( arg ) ) {
				throw new Error( 'invalid arguments. Creating a generic array from an ArrayBuffer is not supported.' );
			}
			if ( isObject( arg ) ) {
				if ( HAS_ITERATOR_SYMBOL === false ) {
					throw new TypeError( 'invalid argument. Environment lacks Symbol.iterator support. Must provide a length, typed array, or array-like object. Value: `'+arg+'`.' );
				}
				if ( !isFunction( arg[ ITERATOR_SYMBOL ] ) ) {
					throw new TypeError( 'invalid argument. Must provide a length, typed array, array-like object, or an iterable. Value: `'+arg+'`.' );
				}
				arg = arg[ ITERATOR_SYMBOL ]();
				if ( !isFunction( arg.next ) ) {
					throw new TypeError( 'invalid argument. Must provide a length, typed array, array-like object, or an iterable.' );
				}
				arr = [];
				while ( true ) {
					v = arg.next();
					if ( hasOwnProp( v, 'value' ) ) {
						arr.push( value );
					}
					if ( v.done ) {
						break;
					}
				}
				return arr;
			}
			throw new TypeError( 'invalid argument. Must provide a length, typed array, array-like object, or an iterable. Value: `'+arg+'`.' );
		} else if ( isArrayBuffer( arg ) ) {
			throw new Error( 'invalid arguments. Creating a generic array from an ArrayBuffer is not supported.' );
		}
		throw new TypeError( 'invalid argument. Must provide a length, typed array, array-like object, or an iterable. Value: `'+arg+'`.' );
	}
	if ( nargs <= 0 ) {
		return new ctor( 0 );
	}
	if ( nargs === 1 ) {
		arr = new ctor( arguments[1] );
	} else if ( nargs === 2 ) {
		arr = new ctor( arguments[1], arguments[2] );
	} else {
		arr = new ctor( arguments[1], arguments[2], arguments[3] );
	}
	value = arguments[ 0 ];
	if ( arr.length > 0 && value !== 0 ) { // i.e., nonzero
		gfill( arr.length, value, arr, 1 );
	}
	return arr;
}


// EXPORTS //

module.exports = filledarray;
