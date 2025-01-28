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
var tape = require( 'tape' );
var tryRequire = require( '@stdlib/utils/try-require' );
var isNumber = require( '@stdlib/assert/is-number' ).isPrimitive;
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var randu = require( '@stdlib/random/base/randu' );
var PINF = require( '@stdlib/constants/float64/pinf' );
var NINF = require( '@stdlib/constants/float64/ninf' );
var EPS = require( '@stdlib/constants/float64/eps' );


// VARIABLES //

var logcdf = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( logcdf instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof logcdf, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided `NaN` for any parameter, the function returns `NaN`', opts, function test( t ) {
	var y = logcdf( NaN, 0.0, 1.0 );
	t.equal( isnan( y ), true, 'returns NaN' );
	y = logcdf( 0.0, NaN, 1.0 );
	t.equal( isnan( y ), true, 'returns NaN' );
	y = logcdf( 0.0, 1.0, NaN );
	t.equal( isnan( y ), true, 'returns NaN' );
	t.end();
});

tape( 'if provided a number greater than or equal to one for `x` and a finite `a` and `b`, the function returns `1`', opts, function test( t ) {
	var y = logcdf( PINF, 0.5, 1.0 );
	t.equal( y, 0.0, 'returns 0' );

	y = logcdf( 100.0, 0.5, 1.0 );
	t.equal( y, 0.0, 'returns 0' );

	y = logcdf( 10.0, 0.5, 1.0 );
	t.equal( y, 0.0, 'returns 0' );

	y = logcdf( 1.0, 0.5, 1.0 );
	t.equal( y, 0.0, 'returns 0' );

	t.end();
});

tape( 'if provided a number less than or equal to zero for `x` and a finite `a` and `b`, the function returns `0`', opts, function test( t ) {
	var y = logcdf( NINF, 0.5, 1.0 );
	t.equal( y, NINF, 'returns -infinity' );

	y = logcdf( -100.0, 0.5, 1.0 );
	t.equal( y, NINF, 'returns -infinity' );

	y = logcdf( -1.0, 0.5, 1.0 );
	t.equal( y, NINF, 'returns -infinity' );

	y = logcdf( 0.0, 0.5, 1.0 );
	t.equal( y, NINF, 'returns -infinity' );

	t.end();
});

tape( 'if provided a nonpositive `a`, the function returns `NaN`', opts, function test( t ) {
	var y;

	y = logcdf( 2.0, 0.0, 2.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = logcdf( 2.0, -1.0, 2.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = logcdf( 0.0, -1.0, 2.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = logcdf( 2.0, NINF, 1.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = logcdf( 2.0, NINF, PINF );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = logcdf( 2.0, NINF, NINF );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = logcdf( 2.0, NINF, NaN );
	t.equal( isnan( y ), true, 'returns NaN' );

	t.end();
});

tape( 'if provided a nonpositive `b`, the function returns `NaN`', opts, function test( t ) {
	var y;

	y = logcdf( 2.0, 2.0, 0.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = logcdf( 2.0, 2.0, -1.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = logcdf( 0.0, 2.0, -1/0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = logcdf( 2.0, 1.0, NINF );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = logcdf( 2.0, PINF, NINF );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = logcdf( 2.0, NINF, NINF );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = logcdf( 2.0, NaN, NINF );
	t.equal( isnan( y ), true, 'returns NaN' );

	t.end();
});

tape( 'the function evaluates the logcdf of a Kumaraswamy\'s double bounded distribution', opts, function test( t ) {
	var a;
	var b;
	var x;
	var y;
	var i;

	// TODO: Add fixtures
	for ( i = 0; i < 100; i++ ) {
		x = randu();
		a = ( randu()*5.0 ) + EPS;
		b = ( randu()*5.0 ) + EPS;
		y = logcdf( x, a, b );
		t.equal( isNumber( y ), true, 'returns a number' );
	}
	t.end();
});
