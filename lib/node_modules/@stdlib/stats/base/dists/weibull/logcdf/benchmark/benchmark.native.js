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
var EPS = require( '@stdlib/constants/float64/eps' );
var randu = require( '@stdlib/random/base/randu' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var tryRequire = require( '@stdlib/utils/try-require' );
var pkg = require( './../package.json' ).name;


// VARIABLES //

var logcdf = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( logcdf instanceof Error )
};


// MAIN //

bench( pkg+'::native', opts, function benchmark( b ) {
	var lambda;
	var len;
	var k;
	var x;
	var y;
	var i;

	len = 100;
	x = new Float64Array( len );
	lambda = new Float64Array( len );
	k = new Float64Array( len );
	for ( i = 0; i < len; i++ ) {
		x[ i ] = ( randu()*100.0 ) + EPS;
		lambda[ i ] = ( randu()*100.0 ) + EPS;
		k[ i ] = ( randu()*100.0 ) + EPS;
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = logcdf( x[ i % len ], k[ i % len ], lambda[ i % len ] );
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
