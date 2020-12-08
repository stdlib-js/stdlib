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
var uniform = require( '@stdlib/random/base/uniform' ).factory;
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var pow = require( '@stdlib/math/base/special/pow' );
var filledarray = require( '@stdlib/array/filled' );
var tryRequire = require( '@stdlib/utils/try-require' );
var pkg = require( './../package.json' ).name;
var types = require( './../lib/types.json' );


// VARIABLES //

var strided = tryRequire( resolve( __dirname, './../lib/sqrt.native.js' ) );
var opts = {
	'skip': ( strided instanceof Error )
};
var rand = uniform( 0.0, 100.0 );


// FUNCTIONS //

/**
* Creates a benchmark function.
*
* @private
* @param {PositiveInteger} len - array length
* @param {string} xtype - input array data type
* @param {string} ytype - output array data type
* @returns {Function} benchmark function
*/
function createBenchmark( len, xtype, ytype ) {
	var x;
	var y;
	var i;

	x = filledarray( 0.0, len, xtype );
	y = filledarray( 0.0, len, ytype );
	for ( i = 0; i < len; i++ ) {
		x[ i ] = rand();
	}
	return benchmark;

	/**
	* Benchmark function.
	*
	* @private
	* @param {Benchmark} b - benchmark instance
	*/
	function benchmark( b ) {
		var z;
		var i;

		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			z = strided( len, x, 1, y, 1 );
			if ( isnan( z[ i%len ] ) ) {
				b.fail( 'should not return NaN' );
			}
		}
		b.toc();
		if ( isnan( z[ i%len ] ) ) {
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
	var t1;
	var t2;
	var f;
	var i;
	var j;

	min = 1; // 10^min
	max = 6; // 10^max

	for ( j = 0; j < types.length; j += 2 ) {
		t1 = types[ j ];
		t2 = types[ j+1 ];
		for ( i = min; i <= max; i++ ) {
			len = pow( 10, i );
			f = createBenchmark( len, t1, t2 );
			bench( pkg+'::native:len='+len+',xtype='+t1+',ytype='+t2, opts, f );
		}
	}
}

main();
