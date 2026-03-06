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

var sqrt = require( '@stdlib/math/base/special/sqrt' );


// MAIN //

/**
* Returns an accumulator for computing cluster statistics.
*
* @private
* @param {ndarray} out - matrix for storing cluster statistics
* @param {PositiveInteger} k - number of clusters
* @returns {Function} accumulator
*/
function stats( out, k ) {
	var M2;
	var i;

	// Create an array for storing second moments:
	M2 = [];
	for ( i = 0; i < k; i++ ) {
		M2.push( 0.0 );
	}

	return accumulator;

	/**
	* Updates cluster statistics.
	*
	* @private
	* @param {NonNegativeInteger} c - cluster index to which a data point belongs
	* @param {number} dist - a data point's squared distance to its respective centroid
	* @returns {ndarray} matrix containing cluster statistics
	*/
	function accumulator( c, dist ) {
		var delta;
		var mu;
		var N;

		// Update number of data points belonging to a cluster:
		N = out.get( c, 0 ) + 1;
		out.set( c, 0, N );

		// Update the total sum of squared distances within a cluster:
		out.set( c, 1, out.get( c, 1 )+dist );

		// Update the cluster's squared distance mean and standard deviation (using Welford's algorithm):
		mu = out.get( c, 2 );
		delta = dist - mu;
		mu += delta / N;
		M2[ c ] += delta * ( dist-mu );
		out.set( c, 2, mu );
		out.set( c, 3, sqrt( M2[c]/(N-1) ) );

		return out;
	}
}


// EXPORTS //

module.exports = stats;
