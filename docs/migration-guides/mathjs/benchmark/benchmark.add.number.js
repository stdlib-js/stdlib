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
var uniform = require( '@stdlib/random/base/uniform' ).factory;
var base = require( '@stdlib/number/float64/base/add' );
var tryRequire = require( '@stdlib/utils/try-require' );
var pkg = require( './../package.json' ).name;


// VARIABLES //

var mathjs = tryRequire( resolve( __dirname, '..', 'node_modules', 'mathjs' ) );
var opts = {
	'skip': ( mathjs instanceof Error )
};


// MAIN //

bench( pkg+'::stdlib:number/float64/base/add:value=number', opts, function benchmark( b ) {
	var x;
	var y;
	var z;
	var i;
	var j;

	x = filledBy( 100, uniform( -100.0, 100.0 ) );
	y = filledBy( 100, uniform( -100.0, 100.0 ) );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		j = i % x.length;
		z = base( x[ j ], y[ j ] );
		if ( z !== z ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( z ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

// TODO: add math/ops/add benchmarks

bench( pkg+'::mathjs:add:value=number', opts, function benchmark( b ) {
	var x;
	var y;
	var z;
	var i;
	var j;

	x = filledBy( 100, uniform( -100.0, 100.0 ) );
	y = filledBy( 100, uniform( -100.0, 100.0 ) );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		j = i % x.length;
		z = mathjs.add( x[ j ], y[ j ] );
		if ( z !== z ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( z ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
