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
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var pow = require( '@stdlib/math/base/special/pow' );
var cbrt = require( '@stdlib/math/base/special/cbrt' );
var floor = require( '@stdlib/math/base/special/floor' );
var array = require( '@stdlib/ndarray/array' );
var filledarray = require( '@stdlib/array/filled' );
var orders = require( '@stdlib/ndarray/orders' );
var pkg = require( './../package.json' ).name;
var random = require( './../lib' );


// VARIABLES //

var DTYPES = [
	'float64',
	'generic'
];
var ORDERS = orders();
var PARAM1 = 0.0;
var PARAM2 = 1.0;


// FUNCTIONS //

/**
* Creates a benchmark function.
*
* @private
* @param {PositiveInteger} len - ndarray length
* @param {NonNegativeIntegerArray} shape - ndarray shape
* @param {string} dtype - output ndarray data type
* @param {string} order - output ndarray memory layout
* @returns {Function} benchmark function
*/
function createBenchmark( len, shape, dtype, order ) {
	var param1;
	var param2;
	var opts;

	param1 = array( filledarray( PARAM1, len, dtype ), {
		'shape': shape,
		'order': order
	});

	param2 = array( filledarray( PARAM2, len, dtype ), {
		'shape': shape,
		'order': order
	});

	opts = {
		'dtype': dtype,
		'order': order
	};
	return benchmark;

	/**
	* Benchmark function.
	*
	* @private
	* @param {Benchmark} b - benchmark instance
	*/
	function benchmark( b ) {
		var x;
		var i;

		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			x = random( shape, param1, param2, opts );
			if ( isnan( x.data[ i%len ] ) ) {
				b.fail( 'should not return NaN' );
			}
		}
		b.toc();
		if ( isnan( x.data[ i%len ] ) ) {
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
	var ord;
	var sh;
	var t1;
	var f;
	var i;
	var j;
	var k;

	min = 1; // 10^min
	max = 6; // 10^max

	for ( k = 0; k < ORDERS.length; k++ ) {
		ord = ORDERS[ k ];
		for ( j = 0; j < DTYPES.length; j++ ) {
			t1 = DTYPES[ j ];
			for ( i = min; i <= max; i++ ) {
				len = pow( 10, i );

				sh = [ len/2, 2, 1 ];
				f = createBenchmark( len, sh, t1, ord );
				bench( pkg+'::same_shape:ndims='+sh.length+',len='+len+',shape=['+sh.join(',')+'],xorder='+ord+',xtype='+t1, f );

				sh = [ 1, 2, len/2 ];
				f = createBenchmark( len, sh, t1, ord );
				bench( pkg+'::same_shape:ndims='+sh.length+',len='+len+',shape=['+sh.join(',')+'],xorder='+ord+',xtype='+t1, f );

				len = floor( cbrt( len ) );
				sh = [ len, len, len ];
				len *= len * len;
				f = createBenchmark( len, sh, t1, ord );
				bench( pkg+'::same_shape:ndims='+sh.length+',len='+len+',shape=['+sh.join(',')+'],xorder='+ord+',xtype='+t1, f );
			}
		}
	}
}

main();
