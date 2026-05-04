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
var proxyquire = require( 'proxyquire' );
var isEnumerableProperty = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isEnumerableProperty, 'function', 'export is a function' );
	t.end();
});

tape( 'the function returns `false` if provided `null` or `undefined` for the first argument (native throws)', function test( t ) {
	var bool;

	bool = isEnumerableProperty( null, 'beep' );
	t.strictEqual( bool, false, 'returns false when provided null' );

	bool = isEnumerableProperty( void 0, 'beep' );
	t.strictEqual( bool, false, 'returns false when provided undefined' );

	t.end();
});

tape( 'the function returns `true` if an object property is enumerable', function test( t ) {
	var bool;

	function Foo() {
		this.bar = 'beep';
		return this;
	}

	bool = isEnumerableProperty({
		'a': 'b'
	}, 'a' );
	t.strictEqual( bool, true, 'returns expected value' );

	bool = isEnumerableProperty( [ 1, 2, 3 ], '1' );
	t.strictEqual( bool, true, 'returns expected value' );

	bool = isEnumerableProperty( [ 1, 2, 3 ], 1 );
	t.strictEqual( bool, true, 'returns expected value' );

	bool = isEnumerableProperty( new Foo(), 'bar' );
	t.strictEqual( bool, true, 'returns expected value' );

	t.end();
});

tape( 'the function returns `false` if an object property is not enumerable', function test( t ) {
	var bool;
	var obj;

	obj = {
		'a': 'b'
	};

	bool = isEnumerableProperty( obj, 'c' );
	t.strictEqual( bool, false, 'returns expected value' );

	bool = isEnumerableProperty( [ 'a' ], 'length' );
	t.strictEqual( bool, false, 'returns expected value' );

	t.end();
});

tape( 'the function returns `false` if provided an inherited property', function test( t ) {
	var bool;

	bool = isEnumerableProperty( {}, 'hasOwnProperty' );
	t.strictEqual( bool, false, 'returns expected value' );

	bool = isEnumerableProperty( {}, 'toString' );
	t.strictEqual( bool, false, 'returns expected value' );

	bool = isEnumerableProperty( {}, 'constructor' );
	t.strictEqual( bool, false, 'returns expected value' );

	t.end();
});

tape( 'values are coerced to objects', function test( t ) {
	var bool;

	bool = isEnumerableProperty( 'beep', '1' );
	t.strictEqual( bool, true, 'returns expected value' );

	t.end();
});

tape( 'addresses `propertyIsEnumerable` bug in Node v0.10 when provided a `string`', function test( t ) {
	var isEnumerableProperty;
	var bool;

	isEnumerableProperty = proxyquire( './../lib/main.js', {
		'./has_string_enumerability_bug.js': true
	});

	bool = isEnumerableProperty( 'beep', '1' );
	t.strictEqual( bool, true, 'returns expected value' );

	bool = isEnumerableProperty( 'beep', 1 );
	t.strictEqual( bool, true, 'returns expected value' );

	bool = isEnumerableProperty( 'beep', 'boop' );
	t.strictEqual( bool, false, 'returns expected value' );

	bool = isEnumerableProperty( 'beep', '10' );
	t.strictEqual( bool, false, 'returns expected value' );

	bool = isEnumerableProperty( 'beep', 'length' );
	t.strictEqual( bool, false, 'returns expected value' );

	t.end();
});

tape( 'property values are coerced to strings', function test( t ) {
	var bool;
	var obj;

	obj = {
		'null': false
	};
	bool = isEnumerableProperty( obj, null );
	t.strictEqual( bool, true, 'returns expected value' );

	obj = {
		'[object Object]': false
	};
	bool = isEnumerableProperty( obj, {} );
	t.strictEqual( bool, true, 'returns expected value' );

	t.end();
});
