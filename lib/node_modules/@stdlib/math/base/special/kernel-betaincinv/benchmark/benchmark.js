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
var isNumberArray = require( '@stdlib/assert/is-number-array' );
var EPS = require( '@stdlib/constants/math/float64-eps' );
var pkg = require( './../package.json' ).name;
var kernelBetaincinv = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( assert ) {
	var p;
	var y;
	var a;
	var b;
	var i;

	assert.tic();
	for ( i = 0; i < assert.iterations; i++ ) {
		p = randu();
		a = ( randu()*1000.0 ) + EPS;
		b = ( randu()*1000.0 ) + EPS;
		y = kernelBetaincinv( a, b, p, 1.0-p );
		if ( !isNumberArray( y ) ) {
			assert.fail( 'should return an array of numbers' );
		}
	}
	assert.toc();
	if ( !isNumberArray( y ) ) {
		assert.fail( 'should return an array of numbers' );
	}
	assert.pass( 'benchmark finished' );
	assert.end();
});
