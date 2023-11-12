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

import { Complex64, Complex128 } from '@stdlib/types/complex';
import { Complex64Array, Complex128Array, AccessorArrayLike } from '@stdlib/types/array';

/**
* Returns an element from a `Complex128Array`.
*
* @param
arr - input array
* @param idx - element index
* @returns element value
*/
type GetComplex128 = ( arr: Complex128Array, idx: number ) => Complex128 | void;

/**
* Returns an element from a `Complex64Array`.
*
* @param arr - input array
* @param idx - element index
* @returns element value
*/
type GetComplex64 = ( arr: Complex64Array, idx: number ) => Complex64 | void;

/**
* Returns an element from an array-like object supporting the get/set protocol.
*
* @param arr - input array
* @param idx - element index
* @returns element value
*/
type GetArrayLike<T> = ( arr: AccessorArrayLike<T>, idx: number ) => T;

/**
* Returns an accessor function for retrieving an element from a `Complex128Array`.
*
* @param dtype - data type
* @returns accessor function
*
* @example
* var Complex128Array = require( `@stdlib/array/complex128` );
* var real = require( `@stdlib/array/real` );
* var imag = require( `@stdlib/array/imag` );
*
* var arr = new Complex128Array( [ 1, 2, 3, 4 ] );
*
* var get = getter( 'complex128' );
* var v = get( arr, 1 );
* // returns <Complex128>
*
* var re = real( v );
* // returns 3.0
*
* var im = imag( v );
* // returns 4.0
*/
declare function getter( dtype: 'complex128' ): GetComplex128;

/**
* Returns an accessor function for retrieving an element from a `Complex64Array`.
*
* @param dtype - data type
* @returns accessor function
*
* @example
* var Complex64Array = require( `@stdlib/array/complex64` );
* var realf = require( `@stdlib/array/realf` );
* var imagf = require( `@stdlib/array/imagf` );
*
* var arr = new Complex64Array( [ 1, 2, 3, 4 ] );
*
* var get = getter( 'complex64' );
* var v = get( arr, 1 );
* // returns <Complex64>
*
* var re = realf( v );
* // returns 3.0
*
* var im = imagf( v );
* // returns 4.0
*/
declare function getter( dtype: 'complex64' ): GetComplex64;

/**
* Returns an accessor function for retrieving an element from an array-like object supporting the get/set protocol.
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
* var get = getter( 'foo' );
* var v = get( arr, 2 );
* // returns 3
*/
declare function getter<T = unknown>( dtype: string ): GetArrayLike<T>;


// EXPORTS //

export = getter;
