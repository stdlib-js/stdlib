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

import { NumericArray } from '@stdlib/types/array';
import { ndarray } from '@stdlib/types/ndarray';

/**
* Interface defining function options.
*/
interface Options {
	/**
	* Array of length two containing the bandwidth values for x and y.
	*/
	h?: NumericArray;

	/**
	* Number of partitions on the x- and y-axes (default: 25).
	*/
	n?: number;

	/**
	* Lower limit of x.
	*/
	xMin?: number;

	/**
	* Upper limit of x.
	*/
	xMax?: number;

	/**
	* Lower limit of y.
	*/
	yMin?: number;

	/**
	* Upper limit of y.
	*/
	yMax?: number;

	/**
	* A string or function to specifying the used kernel function (default: 'gaussian').
	*/
	kernel?: 'gaussian' | 'epanechnikov' | 'cosine' | 'quartic' | 'triangular' | 'tricube' | 'triweight' | 'uniform' | Function; // tslint-disable-line max-line-length
}

/**
* Density values for (x,y) gridpoints.
*/
interface Output {
	/**
	* x-values.
	*/
	x: Array<number>;

	/**
	* y-values.
	*/
	y: Array<number>;

	/**
	* Density values.
	*/
	z: Array<number>;
}

/**
* Computes two-dimensional kernel density estimates.
*
* @param arr - two column ndarray with the first column containing the `x` values and the second column containing the `y` values
* @param options - function options
* @param options.h - array of length two containing the bandwidth values for x and y
* @param options.n - number of partitions on the x- and y-axes (default: 25)
* @param options.xMin - lower limit of x
* @param options.xMax - upper limit of x
* @param options.yMin - lower limit of y
* @param options.yMax - upper limit of y
* @param options.kernel - a string or function to specifying the used kernel function (default: 'gaussian')
* @throws must provide valid options
* @returns object containing the density estimates (`z`) along grid points (`x` and `y` values)
*
* @example
* var ndarray = require( `@stdlib/ndarray/ctor` );
*
* var x = [ 0.6333, 0.8643, 1.0952, 1.3262, 1.5571, 1.7881, 2.019, 2.25, 2.481, 2.7119 ];
* var y = [ -0.0468, 0.8012, 1.6492, 2.4973, 3.3454, 4.1934, 5.0415, 5.8896, 6.7376, 7.5857 ];
*
* var buffer = x.concat( y );
* var n = x.length;
* var shape = [ n, 2 ];
* var strides = [ 1, n ];
* var offset = 0;
* var order = 'column-major';
*
* var arr = ndarray( 'generic', buffer, shape, strides, offset, order );
* var out = kde2d( arr );
*/
declare function kde2d( arr: ndarray, options?: Options ): Output;

/**
* Computes two-dimensional kernel density estimates.
*
* @param x - array of x values
* @param y - array of y values
* @param options - function options
* @param options.h - array of length two containing the bandwidth values for x and y
* @param options.n - number of partitions on the x- and y-axes (default: 25)
* @param options.xMin - lower limit of x
* @param options.xMax - upper limit of x
* @param options.yMin - lower limit of y
* @param options.yMax - upper limit of y
* @param options.kernel - a string or function to specifying the used kernel function (default: 'gaussian')
* @throws first and second arguments must be of the same length
* @throws must provide valid options
* @returns object containing the density estimates (`z`) along grid points (`x` and `y` values)
*
* @example
* var x = [ 0.6333, 0.8643, 1.0952, 1.3262, 1.5571, 1.7881, 2.019, 2.25, 2.481, 2.7119 ];
* var y = [ -0.0468, 0.8012, 1.6492, 2.4973, 3.3454, 4.1934, 5.0415, 5.8896, 6.7376, 7.5857 ];
* var out = kde2d( x, y );
*/
declare function kde2d( x: NumericArray, y: NumericArray, options?: Options ): Output; // tslint-disable-line max-line-length


// EXPORTS //

export = kde2d;
