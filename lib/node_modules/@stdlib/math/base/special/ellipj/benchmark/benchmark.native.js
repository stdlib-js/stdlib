/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

var resolve = require( 'path' ).resolve;
var bench = require( '@stdlib/bench' );
var isFloat64Array = require( '@stdlib/assert/is-float64array' );
var isNumber = require( '@stdlib/assert/is-number' ).isPrimitive;
var uniform = require( '@stdlib/random/array/uniform' );
var tryRequire = require( '@stdlib/utils/try-require' );
var pkg = require( './../package.json' ).name;


// VARIABLES //

var ellipj = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( ellipj instanceof Error )
};


// MAIN //

bench( pkg+'::native', opts, function benchmark( b ) {
	var out;
	var x;
	var m;
	var i;

	x = uniform( 100, -50.0, 50.0 );
	m = uniform( 100, 0.0, 1.0 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = ellipj( x[ i%x.length ], m[ i%m.length ] );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isFloat64Array( out ) ) {
		b.fail( 'should return a Float64Array' );
	}
	for ( i = 0; i < 4; i++ ) {
		if ( !isNumber( out[ i ] ) ) {
			b.fail( 'should return a number' );
		}
	}
	b.pass( 'benchmark finished' );
	b.end();
});
