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

/* eslint-disable max-len */

'use strict';

// MODULES //

var resolve = require( 'path' ).resolve;
var bench = require( '@stdlib/bench' );
var pow = require( '@stdlib/math/base/special/pow' );
var floor = require( '@stdlib/math/base/special/floor' );
var numel = require( '@stdlib/ndarray/base/numel' );
var filled2dBy = require( '@stdlib/array/base/filled2d-by' );
var filledndBy = require( '@stdlib/array/base/fillednd-by' );
var unary2d = require( '@stdlib/array/base/unary2d' );
var unarynd = require( '@stdlib/array/base/unarynd' );
var zeros2d = require( '@stdlib/array/base/zeros2d' );
var zerosnd = require( '@stdlib/array/base/zerosnd' );
var array = require( '@stdlib/ndarray/array' );
var uniform = require( '@stdlib/random/base/uniform' ).factory;
var base = require( '@stdlib/math/base/special/erf' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var format = require( '@stdlib/string/format' );
var tryRequire = require( '@stdlib/utils/try-require' );
var pkg = require( './../package.json' ).name;


// VARIABLES //

var mathjs = tryRequire( resolve( __dirname, '..', 'node_modules', 'mathjs' ) );
var opts = {
	'skip': ( mathjs instanceof Error )
};
var OPTS = {
	'dtype': 'generic'
};
var rand = uniform( -100.0, 100.0 );


// FUNCTIONS //

/**
* Creates a benchmark function.
*
* @private
* @param {PositiveIntegerArray} shape - array shape
* @returns {Function} benchmark function
*/
function createBenchmark1( shape ) {
	var x = array( filled2dBy( shape, rand ), OPTS );
	return benchmark;

	/**
	* Benchmark function.
	*
	* @private
	* @param {Benchmark} b - benchmark instance
	*/
	function benchmark( b ) {
		var y;
		var i;

		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			// y = erf( x ); FIXME: support once we have `@stdlib/math/special/erf`
			if ( typeof y !== 'object' ) {
				b.fail( 'should return an object' );
			}
		}
		b.toc();
		if ( isnan( y.get( 0, 0 ) ) || isnan( y.get( shape[0]-1, shape[1]-1 ) ) ) {
			b.fail( 'should not return NaN' );
		}
		b.pass( 'benchmark finished' );
		b.end();
	}
}

/**
* Creates a benchmark function.
*
* @private
* @param {PositiveIntegerArray} shape - array shape
* @returns {Function} benchmark function
*/
function createBenchmark2( shape ) {
	var x = filled2dBy( shape, rand );
	return benchmark;

	/**
	* Benchmark function.
	*
	* @private
	* @param {Benchmark} b - benchmark instance
	*/
	function benchmark( b ) {
		var y;
		var i;

		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			y = zeros2d( shape );
			unary2d( [ x, y ], shape, base );
			if ( typeof y !== 'object' ) {
				b.fail( 'should return an object' );
			}
		}
		b.toc();
		if ( isnan( y[ 0 ][ 0 ] ) || isnan( y[ shape[0]-1 ][ shape[1]-1 ] ) ) {
			b.fail( 'should not return NaN' );
		}
		b.pass( 'benchmark finished' );
		b.end();
	}
}

/**
* Creates a benchmark function.
*
* @private
* @param {PositiveIntegerArray} shape - array shape
* @returns {Function} benchmark function
*/
function createBenchmark3( shape ) {
	var x = filledndBy( shape, rand );
	return benchmark;

	/**
	* Benchmark function.
	*
	* @private
	* @param {Benchmark} b - benchmark instance
	*/
	function benchmark( b ) {
		var y;
		var i;

		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			y = zerosnd( shape );
			unarynd( [ x, y ], shape, base );
			if ( typeof y !== 'object' ) {
				b.fail( 'should return an object' );
			}
		}
		b.toc();
		if ( isnan( y[ 0 ][ 0 ] ) || isnan( y[ shape[0]-1 ][ shape[1]-1 ] ) ) {
			b.fail( 'should not return NaN' );
		}
		b.pass( 'benchmark finished' );
		b.end();
	}
}

/**
* Creates a benchmark function.
*
* @private
* @param {PositiveIntegerArray} shape - input array shape
* @returns {Function} benchmark function
*/
function createBenchmark4( shape ) {
	var x = mathjs.matrix( filled2dBy( shape, rand ) );
	return benchmark;

	/**
	* Benchmark function.
	*
	* @private
	* @param {Benchmark} b - benchmark instance
	*/
	function benchmark( b ) {
		var y;
		var i;

		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			y = mathjs.erf( x );
			if ( typeof y !== 'object' ) {
				b.fail( 'should return an object' );
			}
		}
		b.toc();
		if ( isnan( y.get( [ 0, 0 ] ) ) || isnan( y.get( [ shape[0]-1, shape[1]-1 ] ) ) ) {
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
	var shape;
	var min;
	var max;
	var N;
	var f;
	var i;

	min = 1; // 10^min
	max = 6; // 10^max

	for ( i = min; i <= max; i++ ) {
		N = floor( pow( pow( 10, i ), 1.0/2.0 ) );
		shape = [ N, N ];

		f = createBenchmark2( shape );
		bench( format( '%s::stdlib:array/base/unary2d:dtype=%s,size=%d,shape=(%s)', pkg, OPTS.dtype, numel( shape ), shape.join( ',' ) ), f );

		f = createBenchmark3( shape );
		bench( format( '%s::stdlib:array/base/unarynd:dtype=%s,size=%d,shape=(%s)', pkg, OPTS.dtype, numel( shape ), shape.join( ',' ) ), f );

		f = createBenchmark4( shape );
		bench( format( '%s::mathjs:erf:dtype=%s,size=%d,shape=(%s)', pkg, OPTS.dtype, numel( shape ), shape.join( ',' ) ), opts, f );
	}
}

main();
