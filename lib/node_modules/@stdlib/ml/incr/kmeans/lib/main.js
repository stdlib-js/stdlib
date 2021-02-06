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

// MODULES //

var isPositiveInteger = require( '@stdlib/assert/is-positive-integer' ).isPrimitive;
var isMatrixLike = require( '@stdlib/assert/is-matrix-like' );
var isVectorLike = require( '@stdlib/assert/is-vector-like' );
var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var minstd = require( '@stdlib/random/base/minstd-shuffle' );
var floor = require( '@stdlib/math/base/special/floor' );
var ln = require( '@stdlib/math/base/special/ln' );
var dcopy = require( '@stdlib/blas/base/dcopy' );
var createMatrix = require( './matrix.js' );
var copyMatrix = require( './copy_matrix.js' );
var createVector = require( './vector.js' );
var copyVector = require( './copy_vector.js' );
var validate = require( './validate.js' );
var INIT_DEFAULTS = require( './init_defaults.json' );
var initialization = require( './init.js' );
var statistics = require( './stats.js' );
var incrstatistics = require( './incrstats.js' );
var squaredEuclidean = require( './squared_euclidean.js' );
var squaredCosine = require( './squared_cosine.js' );
var squaredCorrelation = require( './squared_correlation.js' );
var closestCentroid = require( './find_closest_centroid.js' );
var updateCentroid = require( './update_centroid.js' );
var normalize = require( './normalize.js' );
var normalizeMatrix = require( './normalize_matrix.js' );
var standardize = require( './standardize.js' );
var standardizeMatrix = require( './standardize_matrix.js' );


// VARIABLES //

// Number of cluster statistics:
var NSTATS = 4; // [ n_obs, sum_squared_dist, mean_squared_dist, stdev_squared_dist ]


// FUNCTIONS //

/**
* Returns a results object.
*
* @private
* @param {PositiveInteger} k - number of clusters
* @param {PositiveInteger} ndims - number of dimensions
* @returns {Object} results object
*/
function createResults( k, ndims ) {
	var out = {};
	out.centroids = createMatrix( k, ndims, false ); // high-level
	out.stats = createMatrix( k, NSTATS, false ); // high-level
	return out;
}


// MAIN //

/**
* Returns an accumulator function which incrementally partitions data into `k` clusters.
*
* @param {(PositiveInteger|ndarray)} k - number of clusters or a `k x ndims` matrix containing initial centroids
* @param {PositiveInteger} [ndims] - number of dimensions (should only be provided if provided a numeric `k` argument)
* @param {Options} [options] - function options
* @param {string} [options.metric="euclidean"] - distance metric
* @param {ArrayLikeObject} [options.init] - method for determining initial centroids
* @param {boolean} [options.normalize=true] - boolean indicating whether to normalize incoming data (only relevant for non-Euclidean distance metrics)
* @param {boolean} [options.copy=true] - boolean indicating whether to copy incoming data to prevent mutation during normalization
* @param {*} [options.seed] - PRNG seed
* @throws {TypeError} first argument must be a positive integer
* @throws {TypeError} second argument must be a positive integer
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @throws {RangeError} when using sampling to generate initial centroids, the sample size must be greater than or equal to the number of clusters
* @returns {Function} accumulator function
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
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
function incrkmeans() {
	var clusterstats;
	var centroids;
	var incrstats;
	var options;
	var results;
	var vcopy;
	var stats;
	var ndims;
	var dist;
	var opts;
	var init;
	var err;
	var FLG;
	var k;

	if ( isMatrixLike( arguments[ 0 ] ) ) {
		k = arguments[ 0 ].shape[ 0 ];
		ndims = arguments[ 0 ].shape[ 1 ];
		centroids = createMatrix( k, ndims, true ); // low-level
		centroids = copyMatrix( centroids, arguments[ 0 ] );
		if ( arguments.length > 1 ) {
			options = arguments[ 1 ];
			FLG = true;
		}
	} else if ( isPositiveInteger( arguments[ 0 ] ) ) {
		k = arguments[ 0 ];
		ndims = arguments[ 1 ];
		if ( !isPositiveInteger( ndims ) ) {
			throw new TypeError( 'invalid argument. Argument specifying number of dimensions must be a positive integer. Value: `' + ndims + '`.' );
		}
		if ( arguments.length > 2 ) {
			options = arguments[ 2 ];
			FLG = true;
		}
	} else {
		throw new TypeError( 'invalid argument. First argument must either be a positive integer specifying the number of clusters or a matrix containing initial centroids. Value: `' + arguments[ 0 ] + '`.' );
	}
	opts = {
		'metric': 'euclidean',
		'init': INIT_DEFAULTS[ 'kmeans++' ].slice(),
		'seed': minstd(),
		'normalize': true,
		'copy': true
	};
	opts.init[ 1 ] = k; // Note: this default applies to all initialization methods
	opts.init[ 2 ] = 2 + floor( ln( k ) ); // Note: from Arthur's and Vassilvitskii's paper "kmeans++: The Advantages of Careful Seeding" (see conclusion)
	if ( FLG ) {
		err = validate( opts, options );
		if ( err ) {
			throw err;
		}
	}
	if ( opts.init[ 1 ] < k ) {
		throw new RangeError( 'invalid option. First `init` parameter option must be greater than or equal to the number of clusters. Options: `' + opts.init[ 1 ] + '`.' );
	}
	// Initialize a results object:
	results = createResults( k, ndims );

	// Initialize an internal matrix for tabulating cluster statistics:
	stats = createMatrix( k, NSTATS, true ); // low-level

	// Initialize an internal cluster statistics accumulator:
	clusterstats = statistics( stats, k );

	// Initialize metric-related variables...
	if ( opts.metric === 'cosine' ) {
		dist = squaredCosine;

		// Initialize a scratch vector for copying input vectors:
		if ( opts.copy ) {
			vcopy = createVector( ndims, true ); // low-level
		}
	} else if ( opts.metric === 'correlation' ) {
		dist = squaredCorrelation;

		// Initialize an accumulator for computing the mean vector and associated standard deviation along each dimension:
		if ( opts.normalize ) {
			incrstats = incrstatistics( ndims );
		}
		// Initialize a scratch vector for copying input vectors:
		if ( opts.copy ) {
			vcopy = createVector( ndims, true ); // low-level
		}
	} else {
		dist = squaredEuclidean;
	}
	// Check if we need to compute initial centroids...
	if ( centroids === void 0 ) {
		// Initialize an internal matrix for storing centroids:
		centroids = createMatrix( k, ndims, true ); // low-level

		// Initialize an accumulator for computing initial centroids:
		init = initialization( centroids, stats, clusterstats, incrstats, dist, opts ); // eslint-disable-line max-len
	} else {
		// Update cluster results to include the initial centroids (why? so that, even if no data is provided, the `results` object contains the provided centroids):
		copyMatrix( results.centroids, centroids );
	}
	// Attach properties and methods to the accumulator:
	setReadOnly( accumulator, 'seed', opts.seed );
	setReadOnly( accumulator, 'predict', predict );

	return accumulator;

	/**
	* If provided a data point vector, the accumulator function returns updated cluster results. If not provided a data point vector, the accumulator function returns the current cluster results.
	*
	* @private
	* @param {ndarray} [vec] - data vector
	* @throws {TypeError} must provide a 1-dimensional ndarray
	* @throws {Error} vector length must match centroid dimensions
	* @returns {(Object|null)} cluster results or null
	*/
	function accumulator( vec ) {
		var bool;
		var cbuf;
		var vbuf;
		var sbuf;
		var sv;
		var sc;
		var ov;
		var oc;
		var v;
		var N;
		var d;
		var c;
		if ( arguments.length === 0 ) {
			if ( init ) {
				return null;
			}
			return results;
		}
		v = vec; // Why? We mention `arguments` in the function and perform a subsequent reassignment.
		if ( !isVectorLike( v ) ) {
			throw new TypeError( 'invalid argument. Must provide a 1-dimensional ndarray. Value: `' + v + '`.' );
		}
		if ( v.shape[ 0 ] !== ndims ) {
			throw new Error( 'invalid argument. Vector length must match centroid dimensions. Expected: ' + ndims + '. Actual: ' + v.shape[ 0 ] + '.' );
		}
		// Check if we need to update the data point mean vector...
		if ( incrstats ) {
			incrstats( v );
		}
		// Check if we have yet to compute initial centroids...
		if ( init ) {
			bool = init( v );
			if ( bool === false ) {
				return null;
			}
			// De-reference `init` so that it and its internal variables can be garbage collected:
			init = void 0;
		} else {
			// If required by the metric, normalize the data vector...
			if ( opts.normalize ) {
				if ( opts.metric === 'cosine' ) {
					if ( opts.copy ) {
						v = copyVector( vcopy, v );
					}
					normalize( ndims, v.data, v.strides[ 0 ], v.offset );
				} else if ( opts.metric === 'correlation' ) {
					if ( opts.copy ) {
						v = copyVector( vcopy, v );
					}
					sbuf = incrstats();

					// Magic numbers come from knowing that `sbuf` is an interleaved strided array...
					standardize( ndims, v.data, v.strides[ 0 ], v.offset, sbuf, 2, 0, sbuf, 2, 1 ); // eslint-disable-line max-len
				}
			}
			cbuf = centroids.data;
			sc = centroids.strides[ 0 ];

			vbuf = v.data;
			sv = v.strides[ 0 ];
			ov = v.offset;

			// Find the closest centroid by computing the distance from the provided data point to each centroid:
			c = closestCentroid( dist, k, ndims, cbuf, sc, 0, vbuf, sv, ov ); // Magic number `0` for offset as we know that the matrix view begins at the first buffer element

			// Compute the centroids buffer index offset to point to the closest centroid:
			oc = sc * c;

			// Update the closest centroid:
			N = stats.get( c, 0 ) + 1;
			updateCentroid( ndims, N, cbuf, 1, oc, vbuf, sv, ov ); // Magic number `1` as we know that the matrix is row-major single-segment contiguous

			// Recompute the distance based on the updated centroid position:
			d = dist( ndims, cbuf, 1, oc, vbuf, sv, ov ); // Magic number `1` as we know that the matrix is row-major single-segment contiguous

			// Update cluster statistics:
			clusterstats( c, d );
		}
		// Update the results object:
		dcopy( centroids.length, centroids.data, 1, results.centroids.data, 1 ); // Magic number `1` as we know that these matrices are row-major single-segment contiguous
		dcopy( stats.length, stats.data, 1, results.stats.data, 1 ); // Magic number `1` as we know that these matrices are row-major single-segment contiguous

		return results;
	}

	/**
	* Computes data point distances to centroids and returns centroid assignment predictions.
	*
	* @private
	* @param {ndarray} [out] - output vector for storing centroid assignment predictions
	* @param {ndarray} X - matrix containing data points (`n x d`, where `n` is the number of data points and `d` is the number of dimensions)
	* @throws {TypeError} output argument must be a vector
	* @throws {TypeError} must provide a matrix
	* @throws {Error} vector length must match number of data points
	* @throws {Error} number of matrix columns must match centroid dimensions
	* @returns {(ndarray|null)} vector containing centroid (index) predictions or null
	*/
	function predict( out, X ) {
		var xbuf;
		var cbuf;
		var npts;
		var sx1;
		var sx2;
		var sc;
		var ox;
		var x;
		var o;
		var c;
		var i;
		if ( arguments.length > 1 ) {
			if ( !isVectorLike( out ) ) {
				throw new TypeError( 'invalid argument. Output argument must be a 1-dimensional ndarray. Value: `' + out + '`.' );
			}
			o = out;
			x = X;
		} else {
			x = out;
		}
		if ( !isMatrixLike( x ) ) {
			throw new TypeError( 'invalid argument. Must provide a 2-dimensional ndarray. Value: `' + x + '`.' );
		}
		if ( x.shape[ 1 ] !== ndims ) {
			throw new Error( 'invalid argument. Number of matrix columns must match centroid dimensions. Expected: ' + ndims + '. Actual: ' + x.shape[ 1 ] + '.' );
		}
		if ( o === void 0 ) {
			o = createVector( x.shape[ 0 ], false ); // high-level
		} else if ( o.length !== x.shape[ 0 ] ) {
			throw new Error( 'invalid argument. Output vector length must match the number of data points. Expected: ' + x.shape[ 0 ] + '. Actual: ' + o.length + '.' );
		}
		if ( init ) {
			return null;
		}
		npts = x.shape[ 0 ];

		// If required by the metric, normalize the data vectors along the dimensions...
		if ( opts.normalize ) {
			if ( opts.metric === 'cosine' ) {
				if ( opts.copy ) {
					x = copyMatrix( createMatrix( npts, ndims, true ), x ); // low-level
				}
				x = normalizeMatrix( x );
			} else if ( opts.metric === 'correlation' ) {
				if ( opts.copy ) {
					x = copyMatrix( createMatrix( npts, ndims, true ), x ); // low-level
				}
				x = standardizeMatrix( x, incrstats() );
			}
		}
		cbuf = centroids.data;
		sc = centroids.strides[ 0 ];

		xbuf = x.data;
		sx1 = x.strides[ 0 ];
		sx2 = x.strides[ 1 ];
		ox = x.offset;

		// For each data point, find the closest centroid...
		for ( i = 0; i < npts; i++ ) {
			c = closestCentroid( dist, k, ndims, cbuf, sc, 0, xbuf, sx2, ox ); // Magic number `0` for offset as we know that the matrix view begins at the first buffer element

			// Update the output vector:
			o.set( i, c );

			// Compute the data point buffer index offset to point to the next data point:
			ox += sx1;
		}
		return o;
	}
}


// EXPORTS //

module.exports = incrkmeans;
