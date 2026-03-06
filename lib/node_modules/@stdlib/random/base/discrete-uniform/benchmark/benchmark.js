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
var floor = require( '@stdlib/math/base/special/floor' );
var round = require( '@stdlib/math/base/special/round' );
var pkg = require( './../package.json' ).name;
var discreteUniform = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( assert ) {
	var a;
	var b;
	var z;
	var i;

	assert.tic();
	for ( i = 0; i < assert.iterations; i++ ) {
		a = floor( randu()*100.0 );
		b = floor( randu()*100.0 ) + a + 1;
		z = discreteUniform( a, b );
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
	var rand;
	var a;
	var b;
	var z;
	var i;

	a = 0;
	b = 100;
	rand = discreteUniform.factory( a, b );

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
	var rand;
	var a;
	var b;
	var z;
	var i;

	a = 0;
	b = 100;
	rand = discreteUniform.factory();

	assert.tic();
	for ( i = 0; i < assert.iterations; i++ ) {
		z = rand( a, b );
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

bench( pkg+'::naive', function benchmark( assert ) {
	var a;
	var b;
	var z;
	var i;

	a = 10;
	b = 100;

	assert.tic();
	for ( i = 0; i < assert.iterations; i++ ) {
		z = round( (b-a) * randu() ) + a;
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

bench( pkg+'::naive,built-in', function benchmark( assert ) {
	var a;
	var b;
	var z;
	var i;

	a = 10;
	b = 100;

	assert.tic();
	for ( i = 0; i < assert.iterations; i++ ) {
		z = round( (b-a) * Math.random() ) + a; // eslint-disable-line stdlib/no-builtin-math
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
