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

var resolve = require( 'path' ).resolve;
var bench = require( '@stdlib/bench' );
var bernoulli = require( '@stdlib/random/base/bernoulli' );
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' );
var filledarrayBy = require( '@stdlib/array/filled-by' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var pow = require( '@stdlib/math/base/special/pow' );
var Float64Array = require( '@stdlib/array/float64' );
var tryRequire = require( '@stdlib/utils/try-require' );
var pkg = require( './../package.json' ).name;


// VARIABLES //

var dnannsumkbn = tryRequire( resolve( __dirname, './../lib/ndarray.native.js' ) );
var opts = {
	'skip': ( dnannsumkbn instanceof Error )
};


// FUNCTIONS //

/**
* Returns a random number.
*
* @private
* @returns {number} random number
*/
function rand() {
	if ( bernoulli( 0.5 ) < 1 ) {
		return discreteUniform( -10.0, 10.0 );
	}
	return NaN;
}

/**
* Creates a benchmark function.
*
* @private
* @param {PositiveInteger} len - array length
* @returns {Function} benchmark function
*/
function createBenchmark( len ) {
	var out;
	var x = filledarrayBy( len, 'float64', rand );
	out = new Float64Array( 2 );
	return benchmark;

	function benchmark( b ) {
		var i;

		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			dnannsumkbn( x.length, x, 1, 0, out, 1, 0 );
			if ( isnan( out[ i%2 ] ) ) {
				b.fail( 'should not return NaN' );
			}
		}
		b.toc();
		if ( isnan( out[ i%2 ] ) ) {
			b.fail( 'should not return NaN' );
		}
		b.pass( 'benchmark finished' );
		b.end();
	}
}


// MAIN //

/**
* Main execution sequence.
*
* @private
*/
function main() {
	var len;
	var min;
	var max;
	var f;
	var i;

	min = 1; // 10^min
	max = 6; // 10^max

	for ( i = min; i <= max; i++ ) {
		len = pow( 10, i );
		f = createBenchmark( len );
		bench( pkg+'::native:ndarray:len='+len, opts, f );
	}
}

main();
