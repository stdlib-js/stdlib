/*
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

// TypeScript Version: 2.0

/// <reference types="@stdlib/types"/>

import { ndarray } from '@stdlib/types/ndarray';

/**
* If provided a data vector, the accumulator function returns an updated unbiased sample covariance matrix. If not provided a data vector, the accumulator function returns the current unbiased sample covariance matrix.
*
* @param vector - data vector
* @throws must provide a 1-dimensional ndarray
* @throws vector length must match covariance matrix dimensions
* @returns unbiased sample covariance matrix or null
*/
type accumulator = ( vector?: ndarray ) => ndarray | null;

/**
* Returns an accumulator function which incrementally computes an unbiased sample covariance matrix.
*
* @param out - order of the covariance matrix or a square 2-dimensional output ndarray for storing the covariance matrix
* @param means - mean values
* @throws first argument must be either a positive integer or a 2-dimensional ndarray having equal dimensions
* @throws second argument must be a 1-dimensional ndarray
* @throws number of means must match covariance matrix dimensions
* @returns accumulator function
*
* @example
* var Float64Array = require( `@stdlib/array/float64` );
* var ndarray = require( `@stdlib/ndarray/ctor` );
*
* // Create an output covariance matrix:
* var buffer = new Float64Array( 4 );
* var shape = [ 2, 2 ];
* var strides = [ 2, 1 ];
* var offset = 0;
* var order = 'row-major';
*
* var cov = ndarray( 'float64', buffer, shape, strides, offset, order );
*
* // Create a covariance matrix accumulator:
* var accumulator = incrcovmat( cov );
*
* var out = accumulator();
* // returns null
*
* // Create a data vector:
* buffer = new Float64Array( 2 );
* shape = [ 2 ];
* strides = [ 1 ];
*
* var vec = ndarray( 'float64', buffer, shape, strides, offset, order );
*
* // Provide data to the accumulator:
* vec.set( 0, 2.0 );
* vec.set( 1, 1.0 );
*
* out = accumulator( vec );
* // returns <ndarray>
*
* var bool = ( out === cov );
* // returns true
*
* vec.set( 0, -5.0 );
* vec.set( 1, 3.14 );
*
* out = accumulator( vec );
* // returns <ndarray>
*
* // Retrieve the covariance matrix:
* out = accumulator();
* // returns <ndarray>
*/
declare function incrcovmat( out: number | ndarray, means?: ndarray ): accumulator; // tslint-disable-line max-line-length


// EXPORTS //

export = incrcovmat;
