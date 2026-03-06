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
var randu = require( '@stdlib/random/base/randu' );
var abs = require( '@stdlib/math/base/special/abs' );
var tan = require( '@stdlib/math/base/special/tan' );
var pkg = require( './../package.json' ).name;
var continuedFraction = require( './../lib' );


// FUNCTIONS //

function tanClosure( v ) {
	var a = -(v*v);
	var b = -1.0;
	return makePair;

	function makePair() {
		b += 2;
		return [ a, b ];
	}
}


// MAIN //

bench( pkg, function benchmark( b ) {
	var expected;
	var opts;
	var out;
	var v;
	var i;

	opts = {
		'keep': true
	};
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = randu()*100.0;
		out = continuedFraction( tanClosure( v ), opts );
		if ( out !== out ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();

	// Calculate `tan(v)`:
	out = v / out;
	expected = tan( v );
	if ( abs( out - expected ) / abs( expected ) > 1e-12 ) {
		b.fail( 'should return expected value' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
