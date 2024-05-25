/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var real = require( '@stdlib/complex/real' );
var imag = require( '@stdlib/complex/imag' );
var base = require( '@stdlib/math/base/ops/cadd' );
var tryRequire = require( '@stdlib/utils/try-require' );
var pkg = require( './../package.json' ).name;


// VARIABLES //

var mathjs = tryRequire( resolve( __dirname, '..', 'node_modules', 'mathjs' ) );
var opts = {
	'skip': ( mathjs instanceof Error )
};


// MAIN //

bench( pkg+'::stdlib:math/base/special/cadd:value=complex_number', opts, function benchmark( b ) {
	var x;
	var y;
	var i;
	var j;

	x = [
		new Complex128( 5.0, 3.0 ),
		new Complex128( -5.0, 3.0 ),
		new Complex128( 5.0, -3.0 ),
		new Complex128( -5.0, -3.0 ),
		new Complex128( 3.0, -4.0 )
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		j = i % x.length;
		y = base( x[ j ], x[ j ] );
		if ( typeof y !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( isnan( real( y ) ) || isnan( imag( y ) ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

// TODO: add math/special/add benchmarks

bench( pkg+'::mathjs:add:value=complex_number', opts, function benchmark( b ) {
	var x;
	var y;
	var i;
	var j;

	x = [
		mathjs.complex( 5.0, 3.0 ),
		mathjs.complex( -5.0, 3.0 ),
		mathjs.complex( 5.0, -3.0 ),
		mathjs.complex( -5.0, -3.0 ),
		mathjs.complex( 3.0, -4.0 )
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		j = i % x.length;
		y = mathjs.add( x[ j ], x[ j ] );
		if ( typeof y !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( isnan( mathjs.re( y ) ) || isnan( mathjs.im( y ) ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
