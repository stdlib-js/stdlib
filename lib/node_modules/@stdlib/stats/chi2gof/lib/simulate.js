/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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

var incrspace = require( '@stdlib/array/incrspace' );
var sample = require( '@stdlib/random/sample' );
var Float64Array = require( '@stdlib/array/float64' );
var dfill = require( '@stdlib/blas/ext/base/dfill' );
var tabulate = require( './tabulate.js' );
var testStatistic = require( './statistic.js' );


// MAIN //

/**
* Performs a Monte-Carlo simulation.
*
* @private
* @param {NonNegativeInteger} N - number of indexed elements
* @param {Float64Array} expected - expected number of observations
* @param {NumericArray} p - probabilities
* @param {number} stat - test statistic
* @param {NonNegativeInteger} nobs - total number of observations
* @param {NonNegativeInteger} niter - number of iterations
* @returns {number} p-value
*/
function simulate( N, expected, p, stat, nobs, niter ) {
	var pool;
	var opts;
	var freq;
	var cnt;
	var v;
	var i;

	pool = incrspace( 0, N, 1 ); // TODO: replace with strided interface
	opts = {
		'size': nobs,
		'probs': p
	};
	freq = new Float64Array( N );
	cnt = 1;
	for ( i = 0; i < niter; i++ ) {
		v = sample( pool, opts ); // TODO: use `sample.factory` method once sample pkg is updated
		freq = tabulate( N, v, 1, freq, 1 );
		if ( testStatistic( N, freq, 1, expected, 1 ) >= stat ) { // TODO: consider replacing with low-level double-precision strided interface
			cnt += 1;
		}
		if ( i < niter-1 ) {
			dfill( N, 0.0, freq, 1 );
		}
	}
	return cnt / ( niter+1 );
}


// EXPORTS //

module.exports = simulate;
