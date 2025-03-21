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
var isFalsyArray = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isFalsyArray, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `true` if provided an array-like object containing only "falsy" values (array)', function test( t ) {
	var bool;
	var arr;

	arr = [ false, null, void 0, '', 0, NaN ];
	bool = isFalsyArray( arr );
	t.strictEqual( bool, true, 'returns true' );

	t.end();
});

tape( 'the function returns `true` if provided an array-like object containing only "falsy" values (object)', function test( t ) {
	var bool;
	var arr;

	arr = {
		'length': 6,
		'0': false,
		'1': null,
		'2': void 0,
		'3': '',
		'4': 0,
		'5': NaN
	};
	bool = isFalsyArray( arr );
	t.strictEqual( bool, true, 'returns true' );
	t.end();
});

tape( 'the function returns `false` if not provided an array-like object containing only "falsy" values', function test( t ) {
	var bool;
	var arr;

	arr = [];
	bool = isFalsyArray( arr );
	t.strictEqual( bool, false, 'returns false when provided an empty array' );

	arr = {
		'length': 0
	};
	bool = isFalsyArray( arr );
	t.strictEqual( bool, false, 'returns false when provided an empty array-like object' );

	bool = isFalsyArray( null );
	t.strictEqual( bool, false, 'returns false when provided null' );

	bool = isFalsyArray( false );
	t.strictEqual( bool, false, 'returns false when provided false' );

	bool = isFalsyArray( '' );
	t.strictEqual( bool, false, 'returns false when provided an empty string' );

	bool = isFalsyArray( noop );
	t.strictEqual( bool, false, 'returns false when provided an empty function' );

	t.end();

	function noop() {
		// no-op...
	}
});
