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
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var filled2dBy = require( '@stdlib/array/base/filled2d-by' );
var filledndBy = require( '@stdlib/array/base/fillednd-by' );
var unary2d = require( '@stdlib/array/base/unary2d' );
var unarynd = require( '@stdlib/array/base/unarynd' );
var zeros2d = require( '@stdlib/array/base/zeros2d' );
var zerosnd = require( '@stdlib/array/base/zerosnd' );
var ndmap = require( '@stdlib/ndarray/map' );
var ndzeros = require( '@stdlib/ndarray/zeros' );
var ndunary = require( '@stdlib/ndarray/base/unary' );
var uniform = require( '@stdlib/random/base/uniform' ).factory;
var randu = require( '@stdlib/random/uniform' );
var base = require( '@stdlib/math/base/special/sqrt' );
var tryRequire = require( '@stdlib/utils/try-require' );
var pkg = require( './../package.json' ).name;


// VARIABLES //

var mathjs = tryRequire( resolve( __dirname, '..', 'node_modules', 'mathjs' ) );
var opts = {
	'skip': ( mathjs instanceof Error )
};


// MAIN //

bench( pkg+'::stdlib:array/base/unary2d:value=nested_array,dtype=generic,size=10000,shape=(100,100)', opts, function benchmark( b ) {
	var sh;
	var x;
	var y;
	var i;

	sh = [ 100, 100 ];
	x = filled2dBy( sh, uniform( 0.0, 100.0 ) );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = zeros2d( sh );
		unary2d( [ x, y ], sh, base );
		if ( isnan( y[ 0 ][ 0 ] ) || isnan( y[ 99 ][ 99 ] ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( y[ 1 ][ 1 ] ) || isnan( y[ 98 ][ 98 ] ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::stdlib:array/base/unarynd:value=nested_array,dtype=generic,size=10000,shape=(100,100)', opts, function benchmark( b ) {
	var sh;
	var x;
	var y;
	var i;

	sh = [ 100, 100 ];
	x = filledndBy( sh, uniform( 0.0, 100.0 ) );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = zerosnd( sh );
		unarynd( [ x, y ], sh, base );
		if ( isnan( y[ 0 ][ 0 ] ) || isnan( y[ 99 ][ 99 ] ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( y[ 1 ][ 1 ] ) || isnan( y[ 98 ][ 98 ] ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::stdlib:ndarray/base/unary:value=ndarray,dtype=generic,size=10000,shape=(100,100)', opts, function benchmark( b ) {
	var opts;
	var sh;
	var x;
	var y;
	var i;

	sh = [ 100, 100 ];
	opts = {
		'dtype': 'generic'
	};
	x = randu( sh, 0.0, 100.0, opts );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = ndzeros( sh, opts );
		ndunary( [ x, y ], base );
		if ( isnan( y.get( 0, 0 ) ) || isnan( y.get( 99, 99 ) ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( y.get( 1, 1 ) ) || isnan( y.get( 98, 98 ) ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::stdlib:ndarray/map:value=ndarray,dtype=generic,size=10000,shape=(100,100)', opts, function benchmark( b ) {
	var sh;
	var x;
	var y;
	var i;

	sh = [ 100, 100 ];
	x = randu( sh, 0.0, 100.0, {
		'dtype': 'generic'
	});

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = ndmap( x, base );
		if ( isnan( y.get( 0, 0 ) ) || isnan( y.get( 99, 99 ) ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( y.get( 1, 1 ) ) || isnan( y.get( 98, 98 ) ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::mathjs:sqrt:value=matrix,dtype=generic,size=10000,shape=(100,100)', opts, function benchmark( b ) {
	var buf;
	var x;
	var y;
	var i;

	buf = mathjs.random( [ 100, 100 ], 0, 100 );
	x = mathjs.matrix( buf, 'dense', 'number' );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = x.map( base );
		if ( typeof y !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( isnan( y.get( [ 0, 0 ] ) ) || isnan( y.get( [ 99, 99 ] ) ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
