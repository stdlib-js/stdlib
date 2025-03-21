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
var filled3dBy = require( '@stdlib/array/base/filled3d-by' );
var filledndBy = require( '@stdlib/array/base/fillednd-by' );
var unary3d = require( '@stdlib/array/base/unary3d' );
var unarynd = require( '@stdlib/array/base/unarynd' );
var zeros3d = require( '@stdlib/array/base/zeros3d' );
var zerosnd = require( '@stdlib/array/base/zerosnd' );
var array = require( '@stdlib/ndarray/array' );
var uniform = require( '@stdlib/random/base/uniform' ).factory;
var base = require( '@stdlib/math/base/special/abs' );
var abs = require( '@stdlib/math/special/abs' );
var tryRequire = require( '@stdlib/utils/try-require' );
var pkg = require( './../package.json' ).name;


// VARIABLES //

var mathjs = tryRequire( resolve( __dirname, '..', 'node_modules', 'mathjs' ) );
var opts = {
	'skip': ( mathjs instanceof Error )
};


// MAIN //

bench( pkg+'::stdlib:math/special/abs:value=ndarray,dtype=generic,size=100,shape=(4,5,5)', opts, function benchmark( b ) {
	var x;
	var y;
	var i;

	x = array( filled3dBy( [ 4, 5, 5 ], uniform( -100.0, 100.0 ) ), {
		'dtype': 'generic'
	});

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = abs( x );
		if ( typeof y !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( isnan( y.get( 0, 0, 0 ) ) || isnan( y.get( 3, 4, 4 ) ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::stdlib:array/base/unary3d:value=nested_array,dtype=generic,size=100,shape=(4,5,5)', opts, function benchmark( b ) {
	var sh;
	var x;
	var y;
	var i;

	sh = [ 4, 5, 5 ];
	x = filled3dBy( sh, uniform( -100.0, 100.0 ) );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = zeros3d( sh );
		unary3d( [ x, y ], sh, base );
		if ( isnan( y[ 0 ][ 0 ][ 0 ] ) || isnan( y[ 3 ][ 4 ][ 4 ] ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( y[ 1 ][ 1 ][ 1 ] ) || isnan( y[ 2 ][ 3 ][ 3 ] ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::stdlib:array/base/unarynd:value=nested_array,dtype=generic,size=100,shape=(4,5,5)', opts, function benchmark( b ) {
	var sh;
	var x;
	var y;
	var i;

	sh = [ 4, 5, 5 ];
	x = filledndBy( sh, uniform( -100.0, 100.0 ) );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = zerosnd( sh );
		unarynd( [ x, y ], sh, base );
		if ( isnan( y[ 0 ][ 0 ][ 0 ] ) || isnan( y[ 3 ][ 4 ][ 4 ] ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( y[ 1 ][ 1 ][ 1 ] ) || isnan( y[ 2 ][ 3 ][ 3 ] ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::mathjs:abs:value=matrix,dtype=generic,size=100,shape=(4,5,5)', opts, function benchmark( b ) {
	var x;
	var y;
	var i;

	x = mathjs.matrix( filled3dBy( [ 4, 5, 5 ], uniform( -100.0, 100.0 ) ) );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = mathjs.abs( x );
		if ( typeof y !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( isnan( y.get( [ 0, 0, 0 ] ) ) || isnan( y.get( [ 3, 4, 4 ] ) ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
