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
var uniform = require( '@stdlib/random/array/uniform' );
var isnanf = require( '@stdlib/math/base/assert/is-nanf' );
var pow = require( '@stdlib/math/base/special/pow' );
var Complex64Array = require( '@stdlib/array/complex64' );
var pkg = require( './../package.json' ).name;
var scasum = require( './../lib' );


// VARIABLES //

var opts = {
	'skip': !hasWebAssemblySupport()
};
var options = {
	'dtype': 'float32'
};


// FUNCTIONS //

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
		var sum;
		var nb;
		var x;
		var N;
		var i;

		N = len * 2;

		// Create a new BLAS routine interface:
		mem = new Memory({
			'initial': 0
		});
		mod = new scasum.Module( mem );

		// Initialize the module:
		mod.initializeSync(); // eslint-disable-line node/no-sync

		// Reallocate the underlying memory to allow storing one vector:
		nb = bytesPerElement( options.dtype );
		mod.realloc( N*nb );

		// Define a pointer (i.e., byte offset) for storing the input vector:
		xptr = 0;

		// Generate an array of random complex numbers:
		x = new Complex64Array( uniform( N, -10.0, 10.0, options ) );

		// Write random values to module memory:
		mod.write( xptr, x );

		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			sum = mod.ndarray( len, xptr, 1, 0 );
			if ( isnanf( sum ) ) {
				b.fail( 'should not return NaN' );
			}
		}
		b.toc();
		if ( isnanf( sum ) ) {
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
		bench( pkg+'::module,pointers:ndarray:len='+len, opts, f );
	}
}

main();
