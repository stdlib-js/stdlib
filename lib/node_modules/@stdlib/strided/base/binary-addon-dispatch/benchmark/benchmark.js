/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

/* eslint-disable max-len, max-params */

'use strict';

// MODULES //

var bench = require( '@stdlib/bench' );
var isFunction = require( '@stdlib/assert/is-function' );
var Float64Array = require( '@stdlib/array/float64' );
var pkg = require( './../package.json' ).name;
var dispatch = require( './../lib' );


// FUNCTIONS //

function addon( N, dtypeX, x, strideX, dtypeY, y, strideY, dtypeZ, z, strideZ ) {
	z[ strideZ ] = x[ strideX ] + y[ strideY ];
}

function fallback1( N, dtypeX, x, strideX, dtypeY, y, strideY, dtypeZ, z, strideZ ) {
	z[ strideZ ] = x[ strideX ] + y[ strideY ];
}

function fallback2( N, dtypeX, x, strideX, offsetX, dtypeY, y, strideY, offsetY, dtypeZ, z, strideZ, offsetZ ) {
	z[ offsetZ+strideZ ] = x[ offsetX+strideX ] + y[ offsetY+strideY ];
}


// MAIN //

bench( pkg+'::create', function benchmark( b ) {
	var f;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		f = dispatch( addon, fallback1 );
		if ( typeof f !== 'function' ) {
			b.fail( 'should return a function' );
		}
	}
	b.toc();
	if ( !isFunction( f ) ) {
		b.fail( 'should return a function' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::create:ndarray', function benchmark( b ) {
	var f;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		f = dispatch.ndarray( addon, fallback2 );
		if ( typeof f !== 'function' ) {
			b.fail( 'should return a function' );
		}
	}
	b.toc();
	if ( !isFunction( f ) ) {
		b.fail( 'should return a function' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::dispatch,addon', function benchmark( b ) {
	var f;
	var x;
	var y;
	var z;
	var i;

	f = dispatch( addon, fallback1 );
	x = new Float64Array( [ 1.0, 2.0 ] );
	y = new Float64Array( x.length );
	z = new Float64Array( x.length );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x[ 1 ] = i;
		f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1 );
		if ( z[ 1 ] !== z[ 1 ] ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( z[ 1 ] !== z[ 1 ] ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::dispatch,fallback', function benchmark( b ) {
	var f;
	var x;
	var y;
	var z;
	var i;

	f = dispatch( addon, fallback1 );
	x = [ 1.0, 2.0 ];
	y = [ 0.0, 0.0 ];
	z = [ 0.0, 0.0 ];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x[ 1 ] = i;
		f( x.length, 'generic', x, 1, 'generic', y, 1, 'generic', z, 1 );
		if ( z[ 1 ] !== z[ 1 ] ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( z[ 1 ] !== z[ 1 ] ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::dispatch,addon:ndarray', function benchmark( b ) {
	var f;
	var x;
	var y;
	var z;
	var i;

	f = dispatch.ndarray( addon, fallback2 );
	x = new Float64Array( [ 1.0, 2.0 ] );
	y = new Float64Array( x.length );
	z = new Float64Array( x.length );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x[ 1 ] = i;
		f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0 );
		if ( z[ 1 ] !== z[ 1 ] ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( z[ 1 ] !== z[ 1 ] ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::dispatch,fallback:ndarray', function benchmark( b ) {
	var f;
	var x;
	var y;
	var z;
	var i;

	f = dispatch.ndarray( addon, fallback2 );
	x = [ 1.0, 2.0 ];
	y = [ 0.0, 0.0 ];
	z = [ 0.0, 0.0 ];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x[ 1 ] = i;
		f( x.length, 'generic', x, 1, 0, 'generic', y, 1, 0, 'generic', z, 1, 0 );
		if ( z[ 1 ] !== z[ 1 ] ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( z[ 1 ] !== z[ 1 ] ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
