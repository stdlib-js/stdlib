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
var INT32_MIN = require( '@stdlib/constants/math/int32-min' );
var labs = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof labs, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function computes the absolute value of an integer', function test( t ) {
	t.strictEqual( labs( -2|0 ), 2, 'negative number' );
	t.strictEqual( labs( 3|0 ), 3, 'positive number' );
	t.strictEqual( labs( 0|0 ), 0, 'zero' );
	t.end();
});

tape( 'the absolute value for the minimum 32-bit signed integer is not defined', function test( t ) {
	var v = labs( INT32_MIN|0 );
	t.strictEqual( v, INT32_MIN, 'returns min 32-bit integer' );
	t.strictEqual( v < 0, true, 'returns negative integer' );
	t.end();
});
