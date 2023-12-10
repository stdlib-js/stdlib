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
var Complex128 = require( '@stdlib/complex/float64' );
var base = require( '@stdlib/math/base/special/cabs2' );
var tryRequire = require( '@stdlib/utils/try-require' );
var pkg = require( './../package.json' ).name;


// VARIABLES //

var mathjs = tryRequire( resolve( __dirname, '..', 'node_modules', 'mathjs' ) );
var opts = {
	'skip': ( mathjs instanceof Error )
};


// MAIN //

bench( pkg+'::stdlib:math/base/special/cabs2:value=complex_number', opts, function benchmark( b ) {
	var x;
	var y;
	var i;

	x = [
		new Complex128( 5.0, 3.0 ),
		new Complex128( -5.0, 3.0 ),
		new Complex128( 5.0, -3.0 ),
		new Complex128( -5.0, -3.0 ),
		new Complex128( 3.0, -4.0 )
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = base( x[ i%x.length ] );
		if ( y !== y ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( y ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

// TODO: add math/special/abs2 benchmarks

bench( pkg+'::mathjs:square:value=complex_number', opts, function benchmark( b ) {
	var x;
	var y;
	var i;

	x = [
		mathjs.complex( 5.0, 3.0 ),
		mathjs.complex( -5.0, 3.0 ),
		mathjs.complex( 5.0, -3.0 ),
		mathjs.complex( -5.0, -3.0 ),
		mathjs.complex( 3.0, -4.0 )
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = mathjs.square( x[ i%x.length ] );
		if ( y !== y ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( y ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
