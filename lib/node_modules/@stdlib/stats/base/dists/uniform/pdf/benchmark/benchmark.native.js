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

var resolve = require( 'path' ).resolve;
var bench = require( '@stdlib/bench' );
var Float64Array = require( '@stdlib/array/float64' );
var uniform = require( '@stdlib/random/array/uniform' );
var runif = require( '@stdlib/random/base/uniform' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var tryRequire = require( '@stdlib/utils/try-require' );
var pkg = require( './../package.json' ).name;


// VARIABLES //

var pdf = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( pdf instanceof Error )
};


// MAIN //

bench( pkg+'::native', opts, function benchmark( b ) {
	var len;
	var min;
	var max;
	var x;
	var y;
	var i;

	len = 100;
	x = uniform( len, -10.0, 10.0 );
	min = uniform( len, -20.0, 0.0 );
	max = new Float64Array( len );
	for ( i = 0; i < len; i++ ) {
		max[ i ] = runif( min[ i ], min[ i ] + 40.0 );
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = pdf( x[ i % len ], min[ i % len ], max[ i % len ] );
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
