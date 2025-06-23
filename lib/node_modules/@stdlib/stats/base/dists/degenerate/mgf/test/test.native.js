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
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var exp = require( '@stdlib/math/base/special/exp' );


// VARIABLES //

var mgf = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( mgf instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof mgf, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided `NaN` for any parameter, the function returns `NaN`', opts, function test( t ) {
	var y;

	y = mgf( NaN, 0.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = mgf( 0.0, NaN );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = mgf( NaN, NaN );
	t.equal( isnan( y ), true, 'returns NaN' );

	t.end();
});

tape( 'the function evaluates the MGF of a degenerate distribution centered at `mu`', opts, function test( t ) {
	var mu;
	var x;
	var y;

	mu = 0.0;
	x = 2.0;
	y = mgf( x, mu );
	t.equal( y, exp( x*mu ), 'returns expected value' );

	mu = 2.0;
	x = 1.0;
	y = mgf( x, mu );
	t.equal( y, exp( x*mu ), 'returns expected value' );

	x = 3.0;
	y = mgf( x, mu );
	t.equal( y, exp( x*mu ), 'returns expected value' );

	t.end();
});
