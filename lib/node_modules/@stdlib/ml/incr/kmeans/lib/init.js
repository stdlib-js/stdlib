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

var gcopy = require( '@stdlib/blas/base/gcopy' ).ndarray;
var createMatrix = require( './matrix.js' );
var norm = require( './normalize_matrix.js' );
var standardize = require( './standardize_matrix.js' );
var sample = require( './init_sample.js' );
var kmeansplusplus = require( './init_kmeansplusplus.js' );
var forgy = require( './init_forgy.js' );
var clusters = require( './init_clusters.js' );


// MAIN //

/**
* Returns an initialization accumulator for computing initial centroids.
*
* @private
* @param {ndarray} centroids - matrix for storing centroids
* @param {ndarray} stats - matrix for storing cluster statistics
* @param {Function} clusterstats - cluster statistics accumulator
* @param {(Function|void)} incrstats - mean vector accumulator
* @param {Function} dist - distance function
* @param {Options} opts - accumulator options
* @param {string} opts.metric - distance metric
* @param {Array} opts.init - initialization metric and associated parameters
* @param {boolean} opts.normalize - boolean indicating whether to normalize incoming data (only relevant for non-Euclidean distance metrics)
* @param {*} opts.seed - PRNG seed
* @returns {Function} accumulator
*/
function init( centroids, stats, clusterstats, incrstats, dist, opts ) {
	var buffer;
	var ndims;

	ndims = centroids.shape[ 1 ];
	return accumulator;

	/**
	* Computes initial centroids and associated cluster statistics.
	*
	* @private
	* @param {ndarray} v - data vector
	* @returns {boolean} boolean indicating whether an accumulator has finished computing initial centroids
	*/
	function accumulator( v ) {
		// If this is the first data vector, we need to begin caching data vectors for future centroid initialization...
		if ( buffer === void 0 ) {
			buffer = createMatrix( opts.init[1], ndims, true ); // low-level
			buffer.count = 0;
		}
		// Check if we are still building our cache of data vectors...
		if ( buffer.count < opts.init[ 1 ] ) {
			// Copy data into the buffer (why? because (1) we have no guarantee that program execution is synchronous, and, thus, we have no guarantee that data vectors will not have been mutated before sampling, and (2) we can freely mutate buffer data, as may be needed during normalization):
			gcopy( ndims, v.data, v.strides[0], v.offset, buffer.data, buffer.strides[1], buffer.strides[0]*buffer.count ); // eslint-disable-line max-len

			// Increment the data vector counter:
			buffer.count += 1;

			// Only proceed to perform centroid initialization if the cache is still not full...
			if ( buffer.count < opts.init[ 1 ] ) {
				return false;
			}
		}
		// If required by the metric, normalize the data vectors along the dimensions...
		if ( opts.normalize ) {
			if ( opts.metric === 'cosine' ) {
				buffer = norm( buffer );
			} else if ( opts.metric === 'correlation' ) {
				buffer = standardize( buffer, incrstats() );
			}
		}
		// Compute initial centroids...
		if ( opts.init[ 0 ] === 'forgy' ) {
			centroids = forgy( centroids, buffer, opts.seed );
		} else if ( opts.init[ 0 ] === 'sample' ) {
			centroids = sample( centroids, buffer, opts.seed );
		} else {
			centroids = kmeansplusplus( centroids, buffer, opts.metric, opts.init[2], opts.seed ); // eslint-disable-line max-len
		}
		// Compute initial clusters:
		clusters( buffer, centroids, stats, clusterstats, dist );

		return true;
	}
}


// EXPORTS //

module.exports = init;
