/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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

/**
* Incrementally partition data into `k` clusters.
*
* @module @stdlib/ml/incr/kmeans
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var incrkmeans = require( '@stdlib/ml/incr/kmeans' );
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

// MAIN //

var incrkmeans = require( './main.js' );


// EXPORTS //

module.exports = incrkmeans;
