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
var isTruthyArray = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isTruthyArray, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `true` if provided an array-like object containing only "truthy" values (array)', function test( t ) {
	var bool;
	var arr;

	arr = [ true, 5, 'beep', [], {}, isTruthyArray, new Date(), /.*/ ];
	bool = isTruthyArray( arr );
	t.strictEqual( bool, true, 'returns expected value' );

	t.end();
});

tape( 'the function returns `true` if provided an array-like object containing only "truthy" values (object)', function test( t ) {
	var bool;
	var arr;

	arr = {
		'length': 6,
		'0': true,
		'1': 5,
		'2': 'beep',
		'3': [],
		'4': {},
		'5': isTruthyArray
	};
	bool = isTruthyArray( arr );
	t.strictEqual( bool, true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `false` if not provided an array-like object containing only "truthy" values', function test( t ) {
	var bool;
	var arr;

	arr = [ false, null, void 0, '', 0, NaN ];
	bool = isTruthyArray( arr );
	t.strictEqual( bool, false, 'returns false when provided a falsy array' );

	arr = [ 'beep', false ];
	bool = isTruthyArray( arr );
	t.strictEqual( bool, false, 'returns false when provided an array containing a falsy value' );

	arr = [ 'beep', null ];
	bool = isTruthyArray( arr );
	t.strictEqual( bool, false, 'returns false when provided an array containing a falsy value' );

	arr = [ 'beep', void 0 ];
	bool = isTruthyArray( arr );
	t.strictEqual( bool, false, 'returns false when provided an array containing a falsy value' );

	arr = [ 'beep', '' ];
	bool = isTruthyArray( arr );
	t.strictEqual( bool, false, 'returns false when provided an array containing a falsy value' );

	arr = [ 'beep', 0 ];
	bool = isTruthyArray( arr );
	t.strictEqual( bool, false, 'returns false when provided an array containing a falsy value' );

	arr = [ 'beep', NaN ];
	bool = isTruthyArray( arr );
	t.strictEqual( bool, false, 'returns false when provided an array containing a falsy value' );

	arr = [];
	bool = isTruthyArray( arr );
	t.strictEqual( bool, false, 'returns false when provided an empty array' );

	arr = {
		'length': 0
	};
	bool = isTruthyArray( arr );
	t.strictEqual( bool, false, 'returns false when provided an empty array-like object' );

	bool = isTruthyArray( null );
	t.strictEqual( bool, false, 'returns false when provided null' );

	bool = isTruthyArray( true );
	t.strictEqual( bool, false, 'returns false when provided true' );

	bool = isTruthyArray( '' );
	t.strictEqual( bool, false, 'returns false when provided an empty string' );

	bool = isTruthyArray( foo );
	t.strictEqual( bool, false, 'returns false when provided a function' );

	t.end();

	function foo( a, b ) {
		return ( a === b );
	}
});
