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
var Complex128 = require( '@stdlib/complex/float64' );
var isComplex128 = require( '@stdlib/assert/is-complex128' );
var uniform = require( '@stdlib/random/base/uniform' );
var pkg = require( './../package.json' ).name;
var cneg = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var values;
	var z;
	var y;
	var i;

	values = [
		new Complex128( uniform( -500.0, 500.0 ), uniform( -500.0, 500.0 ) ),
		new Complex128( uniform( -500.0, 500.0 ), uniform( -500.0, 500.0 ) )
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		z = values[ i%values.length ];
		y = cneg( z );
		if ( typeof y !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isComplex128( y ) ) {
		b.fail( 'should return a Complex128' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
