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
var isNullArray = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isNullArray, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function tests for an array-like object having only `null` values', function test( t ) {
	var arr;

	arr = [ null, null ];
	t.equal( isNullArray( arr ), true, 'returns true' );

	arr = {
		'length': 2,
		'0': null,
		'1': null
	};
	t.equal( isNullArray( arr ), true, 'returns true' );

	arr = [ null, 3, null ];
	t.equal( isNullArray( arr ), false, 'returns false' );

	arr = [ null, void 0, false, null ];
	t.equal( isNullArray( arr ), false, 'returns false' );

	t.end();
});
