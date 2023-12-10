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

import { ndarray, float64ndarray, float32ndarray, int32ndarray, int16ndarray, int8ndarray, uint32ndarray, uint16ndarray, uint8ndarray, uint8cndarray, complex128ndarray, complex64ndarray, DataType } from '@stdlib/types/ndarray';

/**
* Transposes a matrix (or a stack of matrices).
*
* @param x - input array
* @returns ndarray view
*
* @example
* var array = require( `@stdlib/ndarray/array` );
*
* var x = array( [ [ 1, 2, 3 ], [ 4, 5, 6 ] ], {
*     'dtype': 'float64'
* });
* // returns <ndarray>
*
* var sh = x.shape;
* // returns [ 2, 3 ]
*
* var y = transpose( x );
* // returns <ndarray>
*
* sh = y.shape;
* // returns [ 3, 2 ]
*
* var bool = ( x.get( 0, 1 ) === y.get( 1, 0 ) );
* // returns true
*
* bool = ( x.data === y.data );
* // returns true
*/
declare function transpose( x: float64ndarray ): float64ndarray;

/**
* Transposes a matrix (or a stack of matrices).
*
* @param x - input array
* @returns ndarray view
*
* @example
* var array = require( `@stdlib/ndarray/array` );
*
* var x = array( [ [ 1, 2, 3 ], [ 4, 5, 6 ] ], {
*     'dtype': 'float32'
* });
* // returns <ndarray>
*
* var sh = x.shape;
* // returns [ 2, 3 ]
*
* var y = transpose( x );
* // returns <ndarray>
*
* sh = y.shape;
* // returns [ 3, 2 ]
*
* var bool = ( x.get( 0, 1 ) === y.get( 1, 0 ) );
* // returns true
*
* bool = ( x.data === y.data );
* // returns true
*/
declare function transpose( x: float32ndarray ): float32ndarray;

/**
* Transposes a matrix (or a stack of matrices).
*
* @param x - input array
* @returns ndarray view
*
* @example
* var Complex128Array = require( `@stdlib/array/complex128` );
* var ndarray = require( `@stdlib/ndarray/ctor` );
*
* var buf = new Complex128Array( [ 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6 ] );
* var x = ndarray( 'complex128', buf, [ 2, 3 ], [ 3, 1 ], 0, 'row-major' );
* // returns <ndarray>
*
* var sh = x.shape;
* // returns [ 2, 3 ]
*
* var y = transpose( x );
* // returns <ndarray>
*
* sh = y.shape;
* // returns [ 3, 2 ]
*
* bool = ( x.data === y.data );
* // returns true
*/
declare function transpose( x: complex128ndarray ): complex128ndarray;

/**
* Transposes a matrix (or a stack of matrices).
*
* @param x - input array
* @returns ndarray view
*
* @example
* var Complex64Array = require( `@stdlib/array/complex64` );
* var ndarray = require( `@stdlib/ndarray/ctor` );
*
* var buf = new Complex64Array( [ 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6 ] );
* var x = ndarray( 'complex64', buf, [ 2, 3 ], [ 3, 1 ], 0, 'row-major' );
* // returns <ndarray>
*
* var sh = x.shape;
* // returns [ 2, 3 ]
*
* var y = transpose( x );
* // returns <ndarray>
*
* sh = y.shape;
* // returns [ 3, 2 ]
*
* bool = ( x.data === y.data );
* // returns true
*/
declare function transpose( x: complex64ndarray ): complex64ndarray;

/**
* Transposes a matrix (or a stack of matrices).
*
* @param x - input array
* @returns ndarray view
*
* @example
* var array = require( `@stdlib/ndarray/array` );
*
* var x = array( [ [ 1, 2, 3 ], [ 4, 5, 6 ] ], {
*     'dtype': 'int32'
* });
* // returns <ndarray>
*
* var sh = x.shape;
* // returns [ 2, 3 ]
*
* var y = transpose( x );
* // returns <ndarray>
*
* sh = y.shape;
* // returns [ 3, 2 ]
*
* var bool = ( x.get( 0, 1 ) === y.get( 1, 0 ) );
* // returns true
*
* bool = ( x.data === y.data );
* // returns true
*/
declare function transpose( x: int32ndarray ): int32ndarray;

/**
* Transposes a matrix (or a stack of matrices).
*
* @param x - input array
* @returns ndarray view
*
* @example
* var array = require( `@stdlib/ndarray/array` );
*
* var x = array( [ [ 1, 2, 3 ], [ 4, 5, 6 ] ], {
*     'dtype': 'int16'
* });
* // returns <ndarray>
*
* var sh = x.shape;
* // returns [ 2, 3 ]
*
* var y = transpose( x );
* // returns <ndarray>
*
* sh = y.shape;
* // returns [ 3, 2 ]
*
* var bool = ( x.get( 0, 1 ) === y.get( 1, 0 ) );
* // returns true
*
* bool = ( x.data === y.data );
* // returns true
*/
declare function transpose( x: int16ndarray ): int16ndarray;

/**
* Transposes a matrix (or a stack of matrices).
*
* @param x - input array
* @returns ndarray view
*
* @example
* var array = require( `@stdlib/ndarray/array` );
*
* var x = array( [ [ 1, 2, 3 ], [ 4, 5, 6 ] ], {
*     'dtype': 'int8'
* });
* // returns <ndarray>
*
* var sh = x.shape;
* // returns [ 2, 3 ]
*
* var y = transpose( x );
* // returns <ndarray>
*
* sh = y.shape;
* // returns [ 3, 2 ]
*
* var bool = ( x.get( 0, 1 ) === y.get( 1, 0 ) );
* // returns true
*
* bool = ( x.data === y.data );
* // returns true
*/
declare function transpose( x: int8ndarray ): int8ndarray;

/**
* Transposes a matrix (or a stack of matrices).
*
* @param x - input array
* @returns ndarray view
*
* @example
* var array = require( `@stdlib/ndarray/array` );
*
* var x = array( [ [ 1, 2, 3 ], [ 4, 5, 6 ] ], {
*     'dtype': 'uint32'
* });
* // returns <ndarray>
*
* var sh = x.shape;
* // returns [ 2, 3 ]
*
* var y = transpose( x );
* // returns <ndarray>
*
* sh = y.shape;
* // returns [ 3, 2 ]
*
* var bool = ( x.get( 0, 1 ) === y.get( 1, 0 ) );
* // returns true
*
* bool = ( x.data === y.data );
* // returns true
*/
declare function transpose( x: uint32ndarray ): uint32ndarray;

/**
* Transposes a matrix (or a stack of matrices).
*
* @param x - input array
* @returns ndarray view
*
* @example
* var array = require( `@stdlib/ndarray/array` );
*
* var x = array( [ [ 1, 2, 3 ], [ 4, 5, 6 ] ], {
*     'dtype': 'uint16'
* });
* // returns <ndarray>
*
* var sh = x.shape;
* // returns [ 2, 3 ]
*
* var y = transpose( x );
* // returns <ndarray>
*
* sh = y.shape;
* // returns [ 3, 2 ]
*
* var bool = ( x.get( 0, 1 ) === y.get( 1, 0 ) );
* // returns true
*
* bool = ( x.data === y.data );
* // returns true
*/
declare function transpose( x: uint16ndarray ): uint16ndarray;

/**
* Transposes a matrix (or a stack of matrices).
*
* @param x - input array
* @returns ndarray view
*
* @example
* var array = require( `@stdlib/ndarray/array` );
*
* var x = array( [ [ 1, 2, 3 ], [ 4, 5, 6 ] ], {
*     'dtype': 'uint8'
* });
* // returns <ndarray>
*
* var sh = x.shape;
* // returns [ 2, 3 ]
*
* var y = transpose( x );
* // returns <ndarray>
*
* sh = y.shape;
* // returns [ 3, 2 ]
*
* var bool = ( x.get( 0, 1 ) === y.get( 1, 0 ) );
* // returns true
*
* bool = ( x.data === y.data );
* // returns true
*/
declare function transpose( x: uint8ndarray ): uint8ndarray;

/**
* Transposes a matrix (or a stack of matrices).
*
* @param x - input array
* @returns ndarray view
*
* @example
* var array = require( `@stdlib/ndarray/array` );
*
* var x = array( [ [ 1, 2, 3 ], [ 4, 5, 6 ] ], {
*     'dtype': 'uint8c'
* });
* // returns <ndarray>
*
* var sh = x.shape;
* // returns [ 2, 3 ]
*
* var y = transpose( x );
* // returns <ndarray>
*
* sh = y.shape;
* // returns [ 3, 2 ]
*
* var bool = ( x.get( 0, 1 ) === y.get( 1, 0 ) );
* // returns true
*
* bool = ( x.data === y.data );
* // returns true
*/
declare function transpose( x: uint8cndarray ): uint8cndarray;

/**
* Transposes a matrix (or a stack of matrices).
*
* @param x - input array
* @returns ndarray view
*
* @example
* var array = require( `@stdlib/ndarray/array` );
*
* var x = array( [ [ 1, 2, 3 ], [ 4, 5, 6 ] ], {
*     'dtype': 'generic'
* });
* // returns <ndarray>
*
* var sh = x.shape;
* // returns [ 2, 3 ]
*
* var y = transpose( x );
* // returns <ndarray>
*
* sh = y.shape;
* // returns [ 3, 2 ]
*
* var bool = ( x.get( 0, 1 ) === y.get( 1, 0 ) );
* // returns true
*
* bool = ( x.data === y.data );
* // returns true
*/
declare function transpose( x: ndarray ): ndarray;


// EXPORTS //

export = transpose;
