/*
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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

// TypeScript Version: 4.1

/// <reference types="@stdlib/types"/>

import { ComplexLike } from '@stdlib/types/complex';
import { Complex64Array, Complex128Array, AccessorArrayLike } from '@stdlib/types/array';

/**
* Sets an element in a `Complex128Array`.
*
* @param arr - input array
* @param idx - element index
* @param value - value to set
*/
type SetComplex128 = ( arr: Complex128Array, idx: number, value: ComplexLike ) => void;

/**
* Sets an element in a `Complex64Array`.
*
* @param arr - input array
* @param idx - element index
* @param value - value to set
*/
type SetComplex64 = ( arr: Complex64Array, idx: number, value: ComplexLike ) => void;

/**
* Sets an element in an array-like object supporting the get/set protocol.
*
* @param arr - input array
* @param idx - element index
* @param value - value to set
*/
type SetArrayLike<T> = ( arr: AccessorArrayLike<T>, idx: number, value: T ) => void;

/**
* Returns an accessor function for setting an element in a `Complex128Array`.
*
* @param dtype - data type
* @returns accessor function
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
* var Complex128 = require( '@stdlib/complex/float64/ctor' );
* var real = require( '@stdlib/array/real' );
* var imag = require( '@stdlib/array/imag' );
*
* var arr = new Complex128Array( [ 1, 2, 3, 4 ] );
*
* var set = setter( 'complex128' );
* set( arr, 1, new Complex128( 10.0, 11.0 ) );
*
* var v = arr.get( 1 );
* // returns <Complex128>
*
* var re = real( v );
* // returns 10.0
*
* var im = imag( v );
* // returns 11.0
*/
declare function setter( dtype: 'complex128' ): SetComplex128;

/**
* Returns an accessor function for setting an element in a `Complex64Array`.
*
* @param dtype - data type
* @returns accessor function
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
* var Complex64 = require( '@stdlib/complex/float32/ctor' );
* var realf = require( '@stdlib/array/realf' );
* var imagf = require( '@stdlib/array/imagf' );
*
* var arr = new Complex64Array( [ 1, 2, 3, 4 ] );
*
* var set = setter( 'complex64' );
* set( arr, 1, new Complex64( 10.0, 11.0 ) );
*
* var v = arr.get( 1 );
* // returns <Complex64>
*
* var re = realf( v );
* // returns 3.0
*
* var im = imagf( v );
* // returns 4.0
*/
declare function setter( dtype: 'complex64' ): SetComplex64;

/**
* Returns an accessor function for setting an element in an array-like object supporting the get/set protocol.
*
* @param dtype - data type
* @returns accessor function
*
* @example
* var arr = [ 1, 2, 3, 4 ];
*
* function aget( idx ) {
*    return arr[ idx ];
* }
*
* function aset( value, idx ) {
*    arr[ idx ] = value;
* }
*
* arr.get = aget;
* arr.set = aset;
*
* var set = setter( 'foo' );
* set( arr, 2, 10 );
*
* var v = arr.get( 2 );
* // returns 3
*/
declare function setter<T = unknown>( dtype: string ): SetArrayLike<T>;


// EXPORTS //

export = setter;
