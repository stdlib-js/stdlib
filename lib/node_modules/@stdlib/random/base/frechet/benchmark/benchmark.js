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
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var EPS = require( '@stdlib/constants/float64/eps' );
var pkg = require( './../package.json' ).name;
var frechet = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( assert ) {
	var alpha;
	var s;
	var m;
	var z;
	var i;

	assert.tic();
	for ( i = 0; i < assert.iterations; i++ ) {
		alpha = ( randu()*100.0 ) + EPS;
		s = ( randu()*100.0 ) + EPS;
		m = ( randu()*100.0 ) - 50.0;
		z = frechet( alpha, s, m );
		if ( isnan( z ) ) {
			assert.fail( 'should not return NaN' );
		}
	}
	assert.toc();
	if ( isnan( z ) ) {
		assert.fail( 'should not return NaN' );
	}
	assert.pass( 'benchmark finished' );
	assert.end();
});

bench( pkg+'::factory', function benchmark( assert ) {
	var alpha;
	var rand;
	var s;
	var m;
	var z;
	var i;

	alpha = 200.0;
	s = 440.0;
	m = 383.5;
	rand = frechet.factory( alpha, s, m );

	assert.tic();
	for ( i = 0; i < assert.iterations; i++ ) {
		z = rand();
		if ( isnan( z ) ) {
			assert.fail( 'should not return NaN' );
		}
	}
	assert.toc();
	if ( isnan( z ) ) {
		assert.fail( 'should not return NaN' );
	}
	assert.pass( 'benchmark finished' );
	assert.end();
});

bench( pkg+'::factory,arguments', function benchmark( assert ) {
	var alpha;
	var rand;
	var s;
	var m;
	var z;
	var i;

	alpha = 200.0;
	s = 440.0;
	m = 383.5;
	rand = frechet.factory();

	assert.tic();
	for ( i = 0; i < assert.iterations; i++ ) {
		z = rand( alpha, s, m );
		if ( isnan( z ) ) {
			assert.fail( 'should not return NaN' );
		}
	}
	assert.toc();
	if ( isnan( z ) ) {
		assert.fail( 'should not return NaN' );
	}
	assert.pass( 'benchmark finished' );
	assert.end();
});
