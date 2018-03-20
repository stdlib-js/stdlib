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

var resolve = require( 'path' ).resolve;
var tape = require( 'tape' );
var isPositiveZero = require( '@stdlib/math/base/assert/is-positive-zero' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var PINF = require( '@stdlib/constants/math/float64-pinf' );
var NINF = require( '@stdlib/constants/math/float64-ninf' );
var PI = require( '@stdlib/constants/math/float64-pi' );
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var abs2 = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( abs2 instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof abs2, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function computes the squared absolute value of a number', opts, function test( t ) {
	t.strictEqual( abs2( -2.0 ), 4.0, 'negative number' );
	t.strictEqual( abs2( 3.0 ), 9.0, 'positive number' );
	t.strictEqual( abs2( 0.0 ), 0.0, 'zero' );
	t.strictEqual( abs2( -PI ), PI*PI, 'pi' );
	t.end();
});

tape( 'the function computes the squared absolute value of negative zero', opts, function test( t ) {
	t.strictEqual( isPositiveZero( abs2( -0.0 ) ), true, 'returns positive zero' );
	t.end();
});

tape( 'the function computes the squared absolute value of infinity', opts, function test( t ) {
	t.strictEqual( abs2( PINF ), PINF, 'returns +infinity' );
	t.strictEqual( abs2( NINF ), PINF, 'returns +infinity' );
	t.end();
});

tape( 'if provided `NaN`, the function returns `NaN`', opts, function test( t ) {
	var v = abs2( NaN );
	t.strictEqual( isnan( v ), true, 'returns NaN' );
	t.end();
});
