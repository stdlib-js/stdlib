/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

var bench = require( '@stdlib/bench' );
var hasWebAssemblySupport = require( '@stdlib/assert/has-wasm-support' );
var Memory = require( '@stdlib/wasm/memory' );
var bytesPerElement = require( '@stdlib/ndarray/base/bytes-per-element' );
var uniform = require( '@stdlib/random/base/uniform' );
var bernoulli = require( '@stdlib/random/base/bernoulli' );
var filledarrayBy = require( '@stdlib/array/filled-by' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var pow = require( '@stdlib/math/base/special/pow' );
var pkg = require( './../package.json' ).name;
var dnanvariancewd = require( './../lib' );


// VARIABLES //

var opts = {
	'skip': !hasWebAssemblySupport()
};
var options = {
	'dtype': 'float64'
};


// FUNCTIONS //

/**
* Returns a random number.
*
* @private
* @returns {number} random number or `NaN`
*/
function rand() {
	if ( bernoulli( 0.8 ) < 1 ) {
		return NaN;
	}
	return uniform( -10.0, 10.0 );
}

/**
* Creates a benchmark function.
*
* @private
* @param {PositiveInteger} len - array length
* @returns {Function} benchmark function
*/
function createBenchmark( len ) {
	return benchmark;

	/**
	* Benchmark function.
	*
	* @private
	* @param {Benchmark} b - benchmark instance
	*/
	function benchmark( b ) {
		var xptr;
		var mod;
		var mem;
		var nb;
		var v;
		var i;

		// Create a new routine interface:
		mem = new Memory({
			'initial': 0
		});
		mod = new dnanvariancewd.Module( mem );

		// Initialize the module:
		mod.initializeSync(); // eslint-disable-line node/no-sync

		// Reallocate the underlying memory to allow storing a vector:
		nb = bytesPerElement( options.dtype );
		mod.realloc( len*nb );

		// Define a pointer (i.e., byte offset) to the first vector element:
		xptr = 0;

		// Write random values to module memory:
		mod.write( xptr, filledarrayBy( len, options.dtype, rand ) );

		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			v = mod.main( len, 1, xptr, 1 );
			if ( isnan( v ) ) {
				b.fail( 'should not return NaN' );
			}
		}
		b.toc();
		if ( isnan( v ) ) {
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
		bench( pkg+'::module,pointers:len='+len, opts, f );
	}
}

main();
