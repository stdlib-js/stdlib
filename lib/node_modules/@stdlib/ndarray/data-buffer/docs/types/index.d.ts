/*
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

import { typedndarray, genericndarray, float64ndarray, float32ndarray, int32ndarray, int16ndarray, int8ndarray, uint32ndarray, uint16ndarray, uint8ndarray, uint8cndarray, complex128ndarray, complex64ndarray } from '@stdlib/types/ndarray';

/**
* Returns the underlying data buffer of a provided ndarray.
*
* @param x - input ndarray
* @returns underlying data buffer
*
* @example
* var zeros = require( '@stdlib/ndarray/zeros' );
*
* var x = zeros( [ 3, 3, 3 ], {
*     'dtype': 'float64'
* });
*
* var out = data( x );
* // returns <Float64Array>
*/
declare function data( x: float64ndarray ): float64ndarray[ 'data' ];

/**
* Returns the underlying data buffer of a provided ndarray.
*
* @param x - input ndarray
* @returns underlying data buffer
*
* @example
* var zeros = require( '@stdlib/ndarray/zeros' );
*
* var x = zeros( [ 3, 3, 3 ], {
*     'dtype': 'float32'
* });
*
* var out = data( x );
* // returns <Float32Array>
*/
declare function data( x: float32ndarray ): float32ndarray[ 'data' ];

/**
* Returns the underlying data buffer of a provided ndarray.
*
* @param x - input ndarray
* @returns underlying data buffer
*
* @example
* var zeros = require( '@stdlib/ndarray/zeros' );
*
* var x = zeros( [ 3, 3, 3 ], {
*     'dtype': 'int32'
* });
*
* var out = data( x );
* // returns <Int32Array>
*/
declare function data( x: int32ndarray ): int32ndarray[ 'data' ];

/**
* Returns the underlying data buffer of a provided ndarray.
*
* @param x - input ndarray
* @returns underlying data buffer
*
* @example
* var zeros = require( '@stdlib/ndarray/zeros' );
*
* var x = zeros( [ 3, 3, 3 ], {
*     'dtype': 'int16'
* });
*
* var out = data( x );
* // returns <Int16Array>
*/
declare function data( x: int16ndarray ): int16ndarray[ 'data' ];

/**
* Returns the underlying data buffer of a provided ndarray.
*
* @param x - input ndarray
* @returns underlying data buffer
*
* @example
* var zeros = require( '@stdlib/ndarray/zeros' );
*
* var x = zeros( [ 3, 3, 3 ], {
*     'dtype': 'int8'
* });
*
* var out = data( x );
* // returns <Int8Array>
*/
declare function data( x: int8ndarray ): int8ndarray[ 'data' ];

/**
* Returns the underlying data buffer of a provided ndarray.
*
* @param x - input ndarray
* @returns underlying data buffer
*
* @example
* var zeros = require( '@stdlib/ndarray/zeros' );
*
* var x = zeros( [ 3, 3, 3 ], {
*     'dtype': 'uint32'
* });
*
* var out = data( x );
* // returns <Uint32Array>
*/
declare function data( x: uint32ndarray ): uint32ndarray[ 'data' ];

/**
* Returns the underlying data buffer of a provided ndarray.
*
* @param x - input ndarray
* @returns underlying data buffer
*
* @example
* var zeros = require( '@stdlib/ndarray/zeros' );
*
* var x = zeros( [ 3, 3, 3 ], {
*     'dtype': 'uint16'
* });
*
* var out = data( x );
* // returns <Uint16Array>
*/
declare function data( x: uint16ndarray ): uint16ndarray[ 'data' ];

/**
* Returns the underlying data buffer of a provided ndarray.
*
* @param x - input ndarray
* @returns underlying data buffer
*
* @example
* var zeros = require( '@stdlib/ndarray/zeros' );
*
* var x = zeros( [ 3, 3, 3 ], {
*     'dtype': 'uint8'
* });
*
* var out = data( x );
* // returns <Uint8Array>
*/
declare function data( x: uint8ndarray ): uint8ndarray[ 'data' ];

/**
* Returns the underlying data buffer of a provided ndarray.
*
* @param x - input ndarray
* @returns underlying data buffer
*
* @example
* var zeros = require( '@stdlib/ndarray/zeros' );
*
* var x = zeros( [ 3, 3, 3 ], {
*     'dtype': 'uint8c'
* });
*
* var out = data( x );
* // returns <Uint8ClampedArray>
*/
declare function data( x: uint8cndarray ): uint8cndarray[ 'data' ];

/**
* Returns the underlying data buffer of a provided ndarray.
*
* @param x - input ndarray
* @returns underlying data buffer
*
* @example
* var zeros = require( '@stdlib/ndarray/zeros' );
*
* var x = zeros( [ 3, 3, 3 ], {
*     'dtype': 'complex128'
* });
*
* var out = data( x );
* // returns <Complex128Array>
*/
declare function data( x: complex128ndarray ): complex128ndarray[ 'data' ];

/**
* Returns the underlying data buffer of a provided ndarray.
*
* @param x - input ndarray
* @returns underlying data buffer
*
* @example
* var zeros = require( '@stdlib/ndarray/zeros' );
*
* var x = zeros( [ 3, 3, 3 ], {
*     'dtype': 'complex64'
* });
*
* var out = data( x );
* // returns <Complex64Array>
*/
declare function data( x: complex64ndarray ): complex64ndarray[ 'data' ];

/**
* Returns the underlying data buffer of a provided ndarray.
*
* @param x - input ndarray
* @returns underlying data buffer
*
* @example
* var zeros = require( '@stdlib/ndarray/zeros' );
*
* var x = zeros( [ 3, 3, 3 ], {
*     'dtype': 'generic'
* });
*
* var out = data( x );
* // returns <Array>
*/
declare function data<T = unknown>( x: genericndarray<T> ): genericndarray<T>[ 'data' ];

/**
* Returns the underlying data buffer of a provided ndarray.
*
* @param x - input ndarray
* @returns underlying data buffer
*
* @example
* var zeros = require( '@stdlib/ndarray/zeros' );
*
* var x = zeros( [ 3, 3, 3 ], {
*     'dtype': 'float64'
* });
*
* var out = data( x );
* // returns <Float64Array>
*/
declare function data<T = unknown>( x: typedndarray<T> ): typedndarray<T>[ 'data' ];


// EXPORTS //

export = data;
