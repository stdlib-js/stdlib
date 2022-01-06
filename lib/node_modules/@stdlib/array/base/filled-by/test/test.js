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

'use strict';

// MODULES //

var tape = require( 'tape' );
var constantFunction = require( '@stdlib/utils/constant-function' );
var filledBy = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof filledBy, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns a filled "generic" array', function test( t ) {
	var expected;
	var actual;

	expected = [ 'beep', 'beep', 'beep' ];
	actual = filledBy( 3, constantFunction( 'beep' ) );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function returns an empty array if provided a length of `0`', function test( t ) {
	var expected;
	var actual;

	expected = [];
	actual = filledBy( 0, constantFunction( 'beep' ) );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports providing an execution context', function test( t ) {
	var expected;
	var actual;
	var ctx;

	ctx = {
		'count': 0
	};
	expected = [ 'beep', 'beep', 'beep' ];
	actual = filledBy( 3, clbk, ctx );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.strictEqual( ctx.count, 3, 'returns expected value' );

	t.end();

	function clbk() {
		this.count += 1; // eslint-disable-line no-invalid-this
		return 'beep';
	}
});

tape( 'the function invokes a provided callback function with one argument', function test( t ) {
	var expected;
	var actual;
	var idx;

	idx = [];
	actual = filledBy( 3, clbk );

	expected = [ 'beep', 'beep', 'beep' ];
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ 0, 1, 2 ];
	t.deepEqual( idx, expected, 'returns expected value' );

	t.end();

	function clbk( i ) {
		idx.push( i );
		return 'beep';
	}
});
