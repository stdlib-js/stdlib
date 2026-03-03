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

import { ndarray, typedndarray, genericndarray } from '@stdlib/types/ndarray';

/**
* Transposes a matrix (or a stack of matrices).
*
* @param x - input array
* @param writable - boolean indicating whether the returned ndarray should be writable
* @returns ndarray view
*
* @example
* var getData = require( '@stdlib/ndarray/data-buffer' );
* var array = require( '@stdlib/ndarray/array' );
*
* var x = array( [ [ 1, 2, 3 ], [ 4, 5, 6 ] ], {
*     'dtype': 'float64',
*     'casting': 'unsafe'
* });
* // returns <ndarray>[ [ 1, 2, 3 ], [ 4, 5, 6 ] ]
*
* var y = transpose( x, false );
* // returns <ndarray>[ [ 1, 4 ], [ 2, 5 ], [ 3, 6 ] ]
*
* var bool = ( getData( x ) === getData( y ) );
* // returns true
*/
declare function transpose<T extends typedndarray<unknown> = typedndarray<unknown>>( x: T, writable: boolean ): T;

/**
* Transposes a matrix (or a stack of matrices).
*
* @param x - input array
* @param writable - boolean indicating whether the returned ndarray should be writable
* @returns ndarray view
*
* @example
* var getData = require( '@stdlib/ndarray/data-buffer' );
* var array = require( '@stdlib/ndarray/array' );
*
* var x = array( [ [ 1, 2, 3 ], [ 4, 5, 6 ] ], {
*     'dtype': 'generic',
*     'casting': 'unsafe'
* });
* // returns <ndarray>[ [ 1, 2, 3 ], [ 4, 5, 6 ] ]
*
* var y = transpose( x, false );
* // returns <ndarray>[ [ 1, 4 ], [ 2, 5 ], [ 3, 6 ] ]
*
* var bool = ( getData( x ) === getData( y ) );
* // returns true
*/
declare function transpose<T extends genericndarray<unknown> = genericndarray<unknown>>( x: T, writable: boolean ): T;

/**
* Transposes a matrix (or a stack of matrices).
*
* @param x - input array
* @param writable - boolean indicating whether the returned ndarray should be writable
* @returns ndarray view
*
* @example
* var getData = require( '@stdlib/ndarray/data-buffer' );
* var array = require( '@stdlib/ndarray/array' );
*
* var x = array( [ [ 1, 2, 3 ], [ 4, 5, 6 ] ], {
*     'dtype': 'generic'
* });
* // returns <ndarray>[ [ 1, 2, 3 ], [ 4, 5, 6 ] ]
*
* var y = transpose( x, false );
* // returns <ndarray>[ [ 1, 4 ], [ 2, 5 ], [ 3, 6 ] ]
*
* var bool = ( getData( x ) === getData( y ) );
* // returns true
*/
declare function transpose( x: ndarray, writable: boolean ): ndarray;


// EXPORTS //

export = transpose;
