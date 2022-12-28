/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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
var randu = require( '@stdlib/random/base/randu' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var pkg = require( './../package.json' ).name;
var quantile = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var v;
	var r;
	var p;
	var y;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		p = randu();
		r = ( randu()*20.0 ) + 2.0;
		v = ( randu()*20.0 ) + 2.0;
		y = quantile( p, r, v );
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
	var myquantile;
	var r;
	var p;
	var v;
	var y;
	var i;

	v = 5.0;
	r = 3.0;
	myquantile = quantile.factory( v, r );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		p = randu();
		y = myquantile( p );
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
