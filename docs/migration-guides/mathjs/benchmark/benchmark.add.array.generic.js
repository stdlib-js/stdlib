/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var filledBy = require( '@stdlib/array/filled-by' );
var zeros = require( '@stdlib/array/zeros' );
var uniform = require( '@stdlib/random/base/uniform' ).factory;
var strided = require( '@stdlib/math/strided/ops/add' );
var tryRequire = require( '@stdlib/utils/try-require' );
var pkg = require( './../package.json' ).name;


// VARIABLES //

var mathjs = tryRequire( resolve( __dirname, '..', 'node_modules', 'mathjs' ) );
var opts = {
	'skip': ( mathjs instanceof Error )
};


// MAIN //

bench( pkg+'::stdlib:math/strided/ops/add:value=array,dtype=generic,len=100', opts, function benchmark( b ) {
	var x;
	var y;
	var z;
	var i;

	x = filledBy( 100, 'generic', uniform( -100.0, 100.0 ) );
	y = filledBy( 100, 'generic', uniform( -100.0, 100.0 ) );
	z = zeros( x.length, 'generic' );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		strided( x.length, 'generic', x, 1, 'generic', y, 1, 'generic', z, 1 );
		if ( isnan( z[ 0 ] ) || isnan( z[ z.length-1 ] ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( z[ 0 ] ) || isnan( z[ z.length-1 ] ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

// TODO: add math/ops/add benchmarks

bench( pkg+'::mathjs:add:value=array,dtype=generic,len=100', opts, function benchmark( b ) {
	var x;
	var y;
	var z;
	var i;

	x = filledBy( 100, 'generic', uniform( -100.0, 100.0 ) );
	y = filledBy( 100, 'generic', uniform( -100.0, 100.0 ) );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		z = mathjs.add( x, y );
		if ( isnan( z[ 0 ] ) || isnan( z[ z.length-1 ] ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( z[ 0 ] ) || isnan( z[ z.length-1 ] ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
