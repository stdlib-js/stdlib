/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' );
var randu = require( '@stdlib/random/base/randu' );
var floor = require( '@stdlib/math/base/special/floor' );
var pkg = require( './../package.json' ).name;
var singletonDimensions = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var shape;
	var n;
	var i;

	shape = [ 0, 0, 0 ];
	shape[ 0 ] = discreteUniform( 1, 5 );
	shape[ 1 ] = discreteUniform( 1, 5 );
	shape[ 2 ] = discreteUniform( 1, 5 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		shape[ 0 ] = floor( randu()*5.0 );
		n = singletonDimensions( shape );
		if ( n < 0 ) {
			b.fail( 'should be nonnegative' );
		}
	}
	b.toc();
	if ( n < 0 ) {
		b.fail( 'should be nonnegative' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
