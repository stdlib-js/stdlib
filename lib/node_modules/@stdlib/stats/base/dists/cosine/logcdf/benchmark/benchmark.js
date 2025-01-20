/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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
var Float64Array = require( '@stdlib/array/float64' );
var randu = require( '@stdlib/random/base/randu' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var EPS = require( '@stdlib/constants/float64/eps' );
var pkg = require( './../package.json' ).name;
var logcdf = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var len;
	var mu;
	var s;
	var x;
	var y;
	var i;

	len = 100;
	x = new Float64Array( len );
	mu = new Float64Array( len );
	s = new Float64Array( len );
	for ( i = 0; i < len; i++ ) {
		x[ i ] = ( randu()*100.0 ) - 50.0;
		mu[ i ] = ( randu()*20.0 ) - 10.0;
		s[ i ] = ( randu()*5.0 ) + EPS;
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = logcdf( x[ i % len ], mu[ i % len ], s[ i % len ] );
		if ( isnan( y ) ) {
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

bench( pkg+':factory', function benchmark( b ) {
	var mylogcdf;
	var mu;
	var s;
	var x;
	var y;
	var i;

	mu = 10.0;
	s = 4.0;
	mylogcdf = logcdf.factory( mu, s );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x = ( randu()*50.0 );
		y = mylogcdf( x );
		if ( isnan( y ) ) {
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
