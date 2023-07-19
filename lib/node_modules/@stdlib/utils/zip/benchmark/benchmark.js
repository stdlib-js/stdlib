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
var isArray = require( '@stdlib/assert/is-array' );
var randu = require( '@stdlib/random/base/randu' );
var EPS = require( '@stdlib/constants/float64/eps' );
var pkg = require( './../package.json' ).name;
var zip = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var len;
	var o;
	var i;
	var x;
	var y;

	x = new Array( 100 );
	y = new Array( 100 );
	len = y.length;
	for ( i = 0; i < len; i++ ) {
		x[ i ] = ( randu()*100.0 ) + EPS;
		y[ i ] = ( randu()*100.0 ) + EPS;
	}
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x[ i % len ] += 10.0;
		o = zip( x, y );
		if ( typeof o !== 'object' ) {
			b.fail( 'should return an array' );
		}
	}
	b.toc();
	if ( !isArray( o ) ) {
		b.fail( 'should return an array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
