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
var isFunctionArray = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isFunctionArray, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function tests if a value is an array of functions', function test( t ) {
	var bool;
	var arr;

	function beep() {}
	function boop() {}

	arr = [ beep, boop ];
	bool = isFunctionArray( arr );
	t.strictEqual( bool, true, 'returns true' );

	arr = [ beep, null ];
	bool = isFunctionArray( arr );
	t.strictEqual( bool, false, 'returns false' );

	arr = [];
	bool = isFunctionArray( arr );
	t.strictEqual( bool, false, 'returns false when provided an empty array' );

	bool = isFunctionArray( null );
	t.strictEqual( bool, false, 'returns false when provided a null' );

	bool = isFunctionArray( beep );
	t.strictEqual( bool, false, 'returns false when provided a function' );

	t.end();
});
