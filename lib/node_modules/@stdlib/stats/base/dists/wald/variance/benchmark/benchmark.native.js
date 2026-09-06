/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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
var uniform = require( '@stdlib/random/array/uniform' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var tryRequire = require( '@stdlib/utils/try-require' );
var format = require( '@stdlib/string/format' );
var EPS = require( '@stdlib/constants/float64/eps' );
var pkg = require( './../package.json' ).name;


// VARIABLES //

var variance = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( variance instanceof Error )
};


// MAIN //

bench( format( '%s::native', pkg ), opts, function benchmark( b ) {
	var lambda;
	var len;
	var mu;
	var y;
	var i;

	len = 100;
	mu = uniform( len, EPS, 100.0 );
	lambda = uniform( len, EPS, 20.0 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = variance( mu[ i%len ], lambda[ i%len ] );
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
