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

/* tslint:disable:unified-signatures */

// TypeScript Version: 4.1

/// <reference types="@stdlib/types"/>

import { ArrayLike } from '@stdlib/types/array';
import { ndarray } from '@stdlib/types/ndarray';

/**
* Interface defining function options.
*/
interface Options {
	/**
	* Distance metric (default: 'euclidean').
	*/
	metric?: 'euclidean' | 'correlation' | 'cosine';

	/**
	* Method for determining initial centroids.
	*/
	init?: ArrayLike<any>;

	/**
	* Boolean indicating whether to normalize incoming data (only relevant for non-Euclidean distance metrics) (default: true).
	*/
	normalize?: boolean;

	/**
	* Boolean indicating whether to copy incoming data to prevent mutation during normalization (default: true).
	*/
	copy?: boolean;

	/**
	* PRNG seed.
	*/
	seed?: any;
}

/**
* Cluster results.
*/
interface Results {
	/**
	* A `k`-by-`ndims` matrix containing centroid locations. Each centroid is the component-wise mean of the data points assigned to a centroid's corresponding cluster.
	*/
	centroids: ndarray;

	/**
	* A `k`-by-`4` matrix containing cluster statistics.
	*
	* ## Notes
	*
	* -   Cluster statistics consists of the following columns:
	*
	*     -   `0`: number of data points assigned to a cluster.
	*     -   `1`: total within-cluster sum of squared distances.
	*     -   `2`: arithmetic mean of squared distances.
	*     -   `3`: corrected sample standard deviation of squared distances.
	*/
	stats: ndarray;
}

/**
* Accumulator interface.
*/
interface Accumulator {
	/**
	* If provided a data point vector, the accumulator function returns updated cluster results. If not provided a data point vector, the accumulator function returns the current cluster results.
	*
	* @param vector - data vector
	* @throws must provide a 1-dimensional ndarray
	* @throws vector length must match centroid dimensions
	* @returns cluster results or null
	*/
	( vector?: ndarray ): Results | null;

	/**
	* Computes data point distances to centroids and returns centroid assignment predictions.
	*
	* @param out - output vector for storing centroid assignment predictions
	* @param X - matrix containing data points (`n x d`, where `n` is the number of data points and `d` is the number of dimensions)
	* @throws vector length must match number of data points
	* @throws number of matrix columns must match centroid dimensions
	* @returns vector containing centroid (index) predictions or null
	*/
	predict( out: ndarray, X: ndarray ): ndarray | null;

	/**
	* Computes data point distances to centroids and returns centroid assignment predictions.
	*
	* @param X - matrix containing data points (`n x d`, where `n` is the number of data points and `d` is the number of dimensions)
	* @throws vector length must match number of data points
	* @throws number of matrix columns must match centroid dimensions
	* @returns vector containing centroid (index) predictions or null
	*/
	predict( X: ndarray ): ndarray | null;
}

/**
* Returns an accumulator function which incrementally partitions data into `k` clusters.
*
* @param k - number of clusters or a `k x ndims` matrix containing initial centroids
* @param ndims - number of dimensions (should only be provided if provided a numeric `k` argument)
* @param options - function options
* @param options.metric - distance metric (default: 'euclidean')
* @param options.init - method for determining initial centroids
* @param options.normalize - boolean indicating whether to normalize incoming data (only relevant for non-Euclidean distance metrics) (default: true)
* @param options.copy - boolean indicating whether to copy incoming data to prevent mutation during normalization (default: true)
* @param options.seed - PRNG seed
* @throws must provide valid options
* @throws when using sampling to generate initial centroids, the sample size must be greater than or equal to the number of clusters
* @returns accumulator function
*
* @example
* var Float64Array = require( `@stdlib/array/float64` );
* var ndarray = require( `@stdlib/ndarray/ctor` );
*
* // Define initial centroid locations:
* var buffer = [
*     0.0, 0.0,
*     1.0, 1.0,
*     1.0, -1.0,
*     -1.0, -1.0,
*     -1.0, 1.0
* ];
* var shape = [ 5, 2 ];
* var strides = [ 2, 1 ];
* var offset = 0;
* var order = 'row-major';
*
* var centroids = ndarray( 'float64', buffer, shape, strides, offset, order );
*
* // Create a k-means accumulator:
* var accumulator = incrkmeans( centroids );
*
* var out = accumulator();
* // returns {...}
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
* // returns {...}
*
* vec.set( 0, -5.0 );
* vec.set( 1, 3.14 );
*
* out = accumulator( vec );
* // returns {...}
*
* // Retrieve the current cluster results:
* out = accumulator();
* // returns {...}
*/
declare function incrkmeans( k: number | ndarray, ndims: number, options?: Options ): Accumulator;


// EXPORTS //

export = incrkmeans;
