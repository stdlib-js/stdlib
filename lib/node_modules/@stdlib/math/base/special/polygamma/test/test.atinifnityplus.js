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
var factorial = require( '@stdlib/math/base/special/factorial' );
var pow = require( '@stdlib/math/base/special/pow' );
var atinfinityplus = require( './../lib/atinfinityplus.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof atinfinityplus, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided a large `x` and `n = 1`, the function returns `1/x`', function test( t ) {
	var val;
	var x;

	x = 4.27e17;
	val = atinfinityplus( 1, x );
	t.strictEqual( val, 1.0/x, 'returns 1/x' );

	x = 2.8e17;
	val = atinfinityplus( 1, x );
	t.strictEqual( val, 1.0/x, true, 'returns 1/x' );
	t.end();
});

tape( 'the function evaluates the polygamma function for large `x` and small `n` ', function test( t ) {
	var val;
	var x;
	var n;

	x = 4.27e17;
	n = 3;
	val = atinfinityplus( n, x );
	t.strictEqual( val, (1.0) * factorial( n-1 ) * pow( x, -n ), 'returns expected value' );

	x = 4.27e17;
	n = 4;
	val = atinfinityplus( n, x );
	t.strictEqual( val, (-1.0) * factorial( n-1 ) * pow( x, -n ), 'returns expected value' );

	t.end();
});
