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
var uniform = require( '@stdlib/random/base/uniform' );
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' );
var Float64Array = require( '@stdlib/array/float64' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var EPS = require( '@stdlib/constants/float64/eps' );
var pkg = require( './../package.json' ).name;
var stdev = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var len;
	var r;
	var p;
	var y;
	var i;

	len = 100;
	r = new Float64Array( len );
	p = new Float64Array( len );
	for ( i = 0; i < len; i++ ) {
		r[ i ] = discreteUniform( 1, 100 );
		p[ i ] = uniform( EPS, 1.0 );
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = stdev( r[ i % len ], p[ i % len ] );
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
