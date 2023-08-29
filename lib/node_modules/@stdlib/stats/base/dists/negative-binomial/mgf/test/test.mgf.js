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
var mgf = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof mgf, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided `NaN` for any parameter, the function returns `NaN`', function test( t ) {
	var y = mgf( NaN, 10, 0.5 );
	t.equal( isnan( y ), true, 'returns NaN' );
	y = mgf( 0.0, NaN, 0.5 );
	t.equal( isnan( y ), true, 'returns NaN' );
	y = mgf( 0.0, 10, NaN );
	t.equal( isnan( y ), true, 'returns NaN' );
	t.end();
});

tape( 'if provided a `r` which is not a positive number, the function returns `NaN`', function test( t ) {
	var y;

	y = mgf( 2.0, -2.0, 0.5 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = mgf( 2.0, -1.0, 0.5 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = mgf( 0.0, 0.0, 0.5 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = mgf( 0.0, NINF, 0.5 );
	t.equal( isnan( y ), true, 'returns NaN' );

	t.end();
});

tape( 'if provided a success probability `p` outside of `[0,1]`, the function returns `NaN`', function test( t ) {
	var y;

	y = mgf( 2.0, 20, -1.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = mgf( 0.0, 20, 1.5 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = mgf( 2.0, 20, NINF );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = mgf( 2.0, 20, PINF );
	t.equal( isnan( y ), true, 'returns NaN' );

	t.end();
});

tape( 'if provided `t >= -ln( p )`, the function returns `NaN`', function test( t ) {
	var y = mgf( 0.7, 10.0, 0.5 ); // -ln( p ) = ~0.693
	t.equal( isnan( y ), true, 'returns NaN' );
	y = mgf( 1.7, 10.0, 0.2 ); // -ln( p ) = ~1.609
	t.equal( isnan( y ), true, 'returns NaN' );
	t.end();
});

tape( 'the function evaluates the mgf', function test( t ) {
	var i;
	var r;
	var p;
	var x;
	var y;

	// TODO: Add test fixtures (function is not available in R and Julia)
	for ( i = 0; i < 100; i++ ) {
		r = randu() * 20.0;
		p = randu();
		x = ln( p ) - randu();
		y = mgf( x, r, p );
		t.strictEqual( !isnan( y ) && isNumber( y ), true, 'returns a number' );
	}
	t.end();
});
