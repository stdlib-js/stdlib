/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
var Complex128Array = require( '@stdlib/array/complex128' );
var isFloat64Array = require( '@stdlib/assert/is-float64array' );
var Complex64Array = require( '@stdlib/array/complex64' );
var isFloat32Array = require( '@stdlib/assert/is-float32array' );
var pkg = require( './../package.json' ).name;
var reinterpret = require( './../lib' );


// MAIN //

bench( pkg+'::complex128', function benchmark( b ) {
	var values;
	var out;
	var i;

	values = [
		new Complex128Array( 10 ),
		new Complex128Array( 5 ),
		new Complex128Array( 20 )
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = reinterpret( values[ i%values.length ], 1 );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isFloat64Array( out ) ) {
		b.fail( 'should return a Float64Array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::complex64', function benchmark( b ) {
	var values;
	var out;
	var i;

	values = [
		new Complex64Array( 10 ),
		new Complex64Array( 5 ),
		new Complex64Array( 20 )
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = reinterpret( values[ i%values.length ], 1 );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isFloat32Array( out ) ) {
		b.fail( 'should return a Float32Array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
