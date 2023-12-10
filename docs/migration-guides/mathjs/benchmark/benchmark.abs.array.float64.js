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
var filledBy = require( '@stdlib/array/filled-by' );
var zeros = require( '@stdlib/array/zeros' );
var uniform = require( '@stdlib/random/base/uniform' ).factory;
var strided = require( '@stdlib/math/strided/special/abs' );
var dabs = require( '@stdlib/math/strided/special/dabs' );
var abs = require( '@stdlib/math/special/abs' );
var tryRequire = require( '@stdlib/utils/try-require' );
var pkg = require( './../package.json' ).name;


// VARIABLES //

var mathjs = tryRequire( resolve( __dirname, '..', 'node_modules', 'mathjs' ) );
var opts = {
	'skip': ( mathjs instanceof Error )
};


// MAIN //

bench( pkg+'::stdlib:math/strided/special/abs:value=array,dtype=float64,len=100', opts, function benchmark( b ) {
	var x;
	var y;
	var i;

	x = filledBy( 100, 'float64', uniform( -100.0, 100.0 ) );
	y = zeros( x.length, 'float64' );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		strided( x.length, 'float64', x, 1, 'float64', y, 1 );
		if ( isnan( y[ 0 ] ) || isnan( y[ y.length-1 ] ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( y[ 0 ] ) || isnan( y[ y.length-1 ] ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::stdlib:math/strided/special/dabs:value=array,dtype=float64,len=100', opts, function benchmark( b ) {
	var x;
	var y;
	var i;

	x = filledBy( 100, 'float64', uniform( -100.0, 100.0 ) );
	y = zeros( x.length, 'float64' );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dabs( x.length, x, 1, y, 1 );
		if ( isnan( y[ 0 ] ) || isnan( y[ y.length-1 ] ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( y[ 0 ] ) || isnan( y[ y.length-1 ] ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::stdlib:math/special/abs:value=array,dtype=float64,len=100', opts, function benchmark( b ) {
	var x;
	var y;
	var i;

	x = filledBy( 100, 'float64', uniform( -100.0, 100.0 ) );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = abs( x );
		if ( isnan( y[ 0 ] ) || isnan( y[ y.length-1 ] ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( y[ 0 ] ) || isnan( y[ y.length-1 ] ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

// NOTE: Math.js does not seem to accept typed arrays for element-wise functions
opts = {
	'skip': true
};
bench( pkg+'::mathjs:abs:value=array,dtype=float64,len=100', opts, function benchmark( b ) {
	var x;
	var y;
	var i;

	x = filledBy( 100, 'float64', uniform( -100.0, 100.0 ) );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = mathjs.abs( x );
		if ( isnan( y[ 0 ] ) || isnan( y[ y.length-1 ] ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( y[ 0 ] ) || isnan( y[ y.length-1 ] ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
