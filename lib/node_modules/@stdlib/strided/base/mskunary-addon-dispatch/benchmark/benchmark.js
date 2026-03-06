/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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

/* eslint-disable max-len */

'use strict';

// MODULES //

var bench = require( '@stdlib/bench' );
var isFunction = require( '@stdlib/assert/is-function' );
var Float64Array = require( '@stdlib/array/float64' );
var Uint8Array = require( '@stdlib/array/uint8' );
var pkg = require( './../package.json' ).name;
var dispatch = require( './../lib' );


// FUNCTIONS //

function addon( N, dtypeX, x, strideX, dtypeMask, mask, strideMask, dtypeY, y, strideY ) {
	if ( mask[ strideMask ] === 0 ) {
		y[ strideY ] = x[ strideX ];
	}
}

function fallback1( N, dtypeX, x, strideX, dtypeMask, mask, strideMask, dtypeY, y, strideY ) {
	if ( mask[ strideMask ] === 0 ) {
		y[ strideY ] = x[ strideX ];
	}
}

function fallback2( N, dtypeX, x, strideX, offsetX, dtypeMask, mask, strideMask, offsetMask, dtypeY, y, strideY, offsetY ) { // eslint-disable-line max-params
	if ( mask[ offsetMask+strideMask ] === 0 ) {
		y[ offsetY+strideY ] = x[ offsetX+strideX ];
	}
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
	var m;
	var i;

	f = dispatch( addon, fallback1 );
	x = new Float64Array( [ 1.0, 2.0 ] );
	y = new Float64Array( x.length );
	m = new Uint8Array( x.length );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x[ 1 ] = i;
		f( x.length, 'float64', x, 1, 'uint8', m, 1, 'float64', y, 1 );
		if ( y[ 1 ] !== y[ 1 ] ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( y[ 1 ] !== y[ 1 ] ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::dispatch,fallback', function benchmark( b ) {
	var f;
	var x;
	var y;
	var m;
	var i;

	f = dispatch( addon, fallback1 );
	x = [ 1.0, 2.0 ];
	y = [ 0.0, 0.0 ];
	m = [ 0, 1 ];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x[ 1 ] = i;
		f( x.length, 'generic', x, 1, 'generic', m, 1, 'generic', y, 1 );
		if ( y[ 1 ] !== y[ 1 ] ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( y[ 1 ] !== y[ 1 ] ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::dispatch,addon:ndarray', function benchmark( b ) {
	var f;
	var x;
	var y;
	var m;
	var i;

	f = dispatch.ndarray( addon, fallback2 );
	x = new Float64Array( [ 1.0, 2.0 ] );
	y = new Float64Array( x.length );
	m = new Uint8Array( x.length );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x[ 1 ] = i;
		f( x.length, 'float64', x, 1, 0, 'uint8', m, 1, 0, 'float64', y, 1, 0 );
		if ( y[ 1 ] !== y[ 1 ] ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( y[ 1 ] !== y[ 1 ] ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::dispatch,fallback:ndarray', function benchmark( b ) {
	var f;
	var x;
	var y;
	var m;
	var i;

	f = dispatch.ndarray( addon, fallback2 );
	x = [ 1.0, 2.0 ];
	y = [ 0.0, 0.0 ];
	m = [ 0, 1 ];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x[ 1 ] = i;
		f( x.length, 'generic', x, 1, 0, 'generic', m, 1, 0, 'generic', y, 1, 0 );
		if ( y[ 1 ] !== y[ 1 ] ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( y[ 1 ] !== y[ 1 ] ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
