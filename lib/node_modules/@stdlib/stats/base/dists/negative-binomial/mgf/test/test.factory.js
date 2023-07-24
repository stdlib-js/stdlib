/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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

var tape = require( 'tape' );
var isNumber = require( '@stdlib/assert/is-number' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var randu = require( '@stdlib/random/base/randu' );
var ln = require( '@stdlib/math/base/special/ln' );
var PINF = require( '@stdlib/constants/float64/pinf' );
var NINF = require( '@stdlib/constants/float64/ninf' );
var factory = require( './../lib/factory.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof factory, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns a function', function test( t ) {
	var mgf = factory( 0.0, 1.0 );
	t.equal( typeof mgf, 'function', 'returns a function' );
	t.end();
});

tape( 'if provided `NaN` for any parameter, the created function returns `NaN`', function test( t ) {
	var mgf;
	var y;

	mgf = factory( 20, 0.5 );
	y = mgf( NaN );
	t.equal( isnan( y ), true, 'returns NaN' );

	mgf = factory( NaN, 0.5 );
	y = mgf( 0.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	mgf = factory( 20, NaN );
	y = mgf( 0.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	mgf = factory( NaN, NaN );
	y = mgf( 0.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	mgf = factory( NaN, NaN );
	y = mgf( NaN );
	t.equal( isnan( y ), true, 'returns NaN' );

	t.end();
});

tape( 'if provided a `r` which is not a positive number, the created function always returns `NaN`', function test( t ) {
	var mgf;
	var y;

	mgf = factory( -10.0, 0.5 );

	y = mgf( 2.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = mgf( 0.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	mgf = factory( -4.0, 0.5 );
	y = mgf( 2.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	mgf = factory( NINF, 0.5 );
	y = mgf( 2.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	t.end();
});

tape( 'if provided a success probability `p` outside `[0,1]`, the created function always returns `NaN`', function test( t ) {
	var mgf;
	var y;

	mgf = factory( 20.0, 1.5 );

	y = mgf( 2.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = mgf( 0.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	mgf = factory( 20.0, -0.5 );
	y = mgf( 2.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	mgf = factory( 20.0, PINF );
	y = mgf( 2.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	mgf = factory( 20.0, NINF );
	y = mgf( 2.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	t.end();
});

tape( 'the created function returns `NaN` if provided `t >= -ln( p )`', function test( t ) {
	var mgf;
	var y;

	mgf = factory( 10, 0.5 ); // -ln( p ) = ~0.693
	y = mgf( 0.7 );
	t.equal( isnan( y ), true, 'returns NaN' );

	mgf = factory( 10, 0.2 ); // -ln( p ) = ~1.609
	y = mgf( 1.7 );
	t.equal( isnan( y ), true, 'returns NaN' );
	t.end();
});

tape( 'the created function evaluates the mgf', function test( t ) {
	var mgf;
	var r;
	var p;
	var i;
	var x;
	var y;

	// TODO: Add test fixtures (function is not available in R and Julia)
	r = 10;
	p = 0.5;
	mgf = factory( r, p );
	for ( i = 0; i < 100; i++ ) {
		x = ln( p ) - randu();
		y = mgf( x );
		t.strictEqual( !isnan( y ) && isNumber( y ), true, 'returns a number' );
	}
	t.end();
});
