/*
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

import { ArrayLike } from '@stdlib/types/array';
import { typedndarray } from '@stdlib/types/ndarray';

/**
* Callback invoked for each ndarray element.
*/
type Nullary<U> = ( this: U ) => void;

/**
* Callback invoked for each ndarray element.
*
* @param value - current array element
*/
type Unary<T, U> = ( this: U, value: T ) => void;

/**
* Callback invoked for each ndarray element.
*
* @param value - current array element
* @param indices - current array element indices
*/
type Binary<T, U> = ( this: U, value: T, indices: Array<number> ) => void;

/**
* Callback invoked for each ndarray element.
*
* @param value - current array element
* @param indices - current array element indices
* @param arr - input array
*/
type Ternary<T, U> = ( this: U, value: T, indices: Array<number>, arr: typedndarray<T> ) => void;

/**
* Callback invoked for each ndarray element.
*
* @param value - current array element
* @param indices - current array element indices
* @param arr - input array
*/
type Callback<T, U> = Nullary<U> | Unary<T, U> | Binary<T, U> | Ternary<T, U>;

/**
* Invokes a callback function once for each ndarray element.
*
* @param arrays - array-like object containing an output ndarray
* @param fcn - callback function
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var naryFunction = require( '@stdlib/utils/nary-function' );
* var log = require( '@stdlib/console/log' );
*
* // Create data buffers:
* var xbuf = new Float64Array( 12 );
*
* // Define the shape of the array:
* var shape = [ 3, 1, 2 ];
*
* // Define the array strides:
* var sx = [ 4, 4, 1 ];
*
* // Define the index offset:
* var ox = 1;
*
* // Create the output ndarray:
* var x = ndarray( 'float64', xbuf, shape, sx, ox, 'row-major' );
*
* // Apply the callback function:
* forEach( [ x ], naryFunction( log, 1 ) );
*/
declare function forEach<T = unknown, U = unknown>( arrays: ArrayLike<typedndarray<T>>, fcn: Callback<T, U>, thisArg?: ThisParameterType<Callback<T, U>> ): void;


// EXPORTS //

export = forEach;
