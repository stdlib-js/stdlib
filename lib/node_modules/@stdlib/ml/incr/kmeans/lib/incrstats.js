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

var incrmeanstdev = require( '@stdlib/stats/incr/meanstdev' );
var Float64Array = require( '@stdlib/array/float64' );


// MAIN //

/**
* Initializes incremental accumulators for computing the mean vector and associated standard deviation along each dimension.
*
* @private
* @param {PositiveInteger} ndims - number of dimensions
* @returns {Object} accumulators
*/
function incrstats( ndims ) {
	var stride;
	var nstats;
	var acc;
	var out;
	var ob;
	var i;

	// Define the number of computed statistics:
	nstats = 2;

	// Create a single linear array in which to store accumulated statistics:
	out = new Float64Array( ndims*nstats );

	// Define the array buffer stride (in bytes):
	stride = nstats * out.BYTES_PER_ELEMENT;

	// Initialize accumulators which will write to sections of the linear array:
	acc = [];
	ob = 0;
	for ( i = 0; i < ndims; i++ ) {
		acc.push( incrmeanstdev( new Float64Array( out.buffer, ob, nstats ) ) );
		ob += stride; // buffer offset
	}
	return accumulator;

	/**
	* If provided a data point vector, updates the mean vector and associated standard deviation along each dimension. If not provided a data point vector, returns the current mean vector and associated standard deviation along each dimension.
	*
	* @private
	* @param {ndarray} [vec] - data point vector
	* @returns {Float64Array} current mean vector and associated standard deviation along each dimension
	*/
	function accumulator( vec ) {
		var i;
		if ( arguments.length === 0 ) {
			return out;
		}
		for ( i = 0; i < ndims; i++ ) {
			acc[ i ]( vec.get( i ) );
		}
		return out;
	}
}


// EXPORTS //

module.exports = incrstats;
