/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
var isArray = require( '@stdlib/assert/is-array' );
var mskrejectMap = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof mskrejectMap, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function rejects array elements', function test( t ) {
	var expected;
	var actual;
	var mask;
	var x;

	x = [ 1, 2, 3, 4 ];

	function clbk( val ) {
		return val * 2;
	}

	mask = [ 0, 1, 0, 1 ];
	actual = mskrejectMap( x, mask, clbk );
	expected = [ 2, 6 ];
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.notEqual( actual, x, 'returns new array' );
	t.deepEqual( actual, expected, 'returns expected value' );

	mask = [ 1, 1, 1, 1 ];
	actual = mskrejectMap( x, mask, clbk );
	expected = [];
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.notEqual( actual, x, 'returns new array' );
	t.deepEqual( actual, expected, 'returns expected value' );

	mask = [ 0, 0, 0, 1 ];
	actual = mskrejectMap( x, mask, clbk );
	expected = [ 2, 4, 6 ];
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.notEqual( actual, x, 'returns new array' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns an empty array if provided empty arrays', function test( t ) {
	function clbk( val ) {
		return val * 2;
	}
	t.deepEqual( mskrejectMap( [], [], clbk ), [], 'returns expected value' );
	t.end();
});

tape( 'the function applies a mask to a provided input array and maps the unmasked values according to different callback functions', function test( t ) {
	var expected;
	var actual;
	var mask;
	var x;

	x = [ 1, 2, 3, 4 ];

	function clbk1( val ) {
		return val * 2;
	}

	function clbk2( val ) {
		return val * val;
	}

	mask = [ 0, 1, 0, 1 ];
	actual = mskrejectMap( x, mask, clbk1 );
	expected = [ 2, 6 ];
	t.deepEqual( actual, expected, 'returns expected value' );

	actual = mskrejectMap( x, mask, clbk2 );
	expected = [ 1, 9 ];
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns an empty array if provided empty arrays', function test( t ) {
	function clbk( val ) {
		return val * 2;
	}
	t.deepEqual( mskrejectMap( [], [], clbk ), [], 'returns expected value' );
	t.end();
});
