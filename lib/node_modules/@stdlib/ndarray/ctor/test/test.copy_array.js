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
var isArray = require( '@stdlib/assert/is-array' );
var copy = require( './../lib/copy_array.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof copy, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function copies the elements of an array-like input value and returns an output array', function test( t ) {
	var arr;
	var out;

	arr = [ 1.0, 2.0, 3.0 ];
	out = copy( arr, arr.length );

	t.strictEqual( isArray( out ), true, 'returns an array' );
	t.notEqual( out, arr, 'returns a new instance' );
	t.deepEqual( arr, out, 'returns expected value' );

	t.end();
});

tape( 'the function copies the elements of an array-like input value and returns an output array (>64K elements)', function test( t ) {
	var arr;
	var out;
	var i;

	arr = [];
	for ( i = 0; i < 1e6; i++ ) {
		arr.push( i );
	}
	out = copy( arr, arr.length );

	t.strictEqual( isArray( out ), true, 'returns an array' );
	t.notEqual( out, arr, 'returns a new instance' );
	t.deepEqual( arr, out, 'returns expected value' );

	t.end();
});
