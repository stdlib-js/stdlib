/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var pow = require( '@stdlib/math/base/special/pow' );
var typedarray = require( '@stdlib/array/typed' );
var ArrayBuffer = require( '@stdlib/array/buffer' );
var DataView = require( '@stdlib/array/dataview' );
var bytesPerElement = require( '@stdlib/ndarray/base/bytes-per-element' );
var pkg = require( './../package.json' ).name;
var writeDataView = require( './../lib/main.js' );


// VARIABLES //

var opts = {
	'dtype': 'float64'
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
	var view;
	var buf;
	var x;
	var y;

	x = discreteUniform( len, -100, 100, opts );

	buf = new ArrayBuffer( len*bytesPerElement( opts.dtype ) );
	view = new DataView( buf );
	y = typedarray( buf, opts.dtype );

	return benchmark;

	/**
	* Benchmark function.
	*
	* @private
	* @param {Benchmark} b - benchmark instance
	*/
	function benchmark( b ) {
		var out;
		var i;

		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			out = writeDataView( x.length, x, 1, view, 1, true );
			if ( out === null || isnan( y[ i%len ] ) ) {
				b.fail( 'should not return NaN' );
			}
		}
		b.toc();
		if ( out === null || isnan( y[ i%len ] ) ) {
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
		bench( pkg+':dtype='+opts.dtype+',len='+len, f );
	}
}

main();
