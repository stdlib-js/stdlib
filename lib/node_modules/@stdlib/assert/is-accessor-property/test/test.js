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
var defineProperty = require( '@stdlib/utils/define-property' );
var isAccessorProperty = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isAccessorProperty, 'function', 'export is a function' );
	t.end();
});

tape( 'the function returns `true` if an object property has an accessor descriptor', function test( t ) {
	var bool;
	var obj;

	obj = {};

	defineProperty( obj, 'a', {
		'configurable': true,
		'enumerable': true,
		'get': getter,
		'set': setter
	});

	defineProperty( obj, 'b', {
		'configurable': true,
		'enumerable': true,
		'get': getter
	});

	defineProperty( obj, 'c', {
		'configurable': true,
		'enumerable': true,
		'set': setter
	});

	bool = isAccessorProperty( obj, 'a' );
	t.strictEqual( bool, true, 'returns expected value' );

	bool = isAccessorProperty( obj, 'b' );
	t.strictEqual( bool, true, 'returns expected value' );

	bool = isAccessorProperty( obj, 'c' );
	t.strictEqual( bool, true, 'returns expected value' );

	t.end();

	function getter() {
		// No-op...
	}

	function setter() {
		// No-op...
	}
});

tape( 'the function returns `false` if an object property has a data descriptor', function test( t ) {
	var bool;
	var obj;

	function Foo() {
		this.bar = 'beep';
		return this;
	}

	obj = {
		'a': 'b'
	};
	bool = isAccessorProperty( obj, 'a' );
	t.strictEqual( bool, false, 'returns expected value' );

	bool = isAccessorProperty( [ 1, 2, 3 ], '1' );
	t.strictEqual( bool, false, 'returns expected value' );

	bool = isAccessorProperty( [ 1, 2, 3 ], 1 );
	t.strictEqual( bool, false, 'returns expected value' );

	bool = isAccessorProperty( new Foo(), 'bar' );
	t.strictEqual( bool, false, 'returns expected value' );

	bool = isAccessorProperty( [ 'a' ], 'length' );
	t.strictEqual( bool, false, 'returns expected value' );

	obj = {};
	defineProperty( obj, 'a', {
		'configurable': false,
		'enumerable': false,
		'writable': true,
		'value': 'b'
	});

	bool = isAccessorProperty( obj, 'a' );
	t.strictEqual( bool, false, 'returns expected value' );

	t.end();
});

tape( 'the function returns `false` if provided `null` or `undefined` for the first argument', function test( t ) {
	var bool;

	bool = isAccessorProperty( null, 'beep' );
	t.strictEqual( bool, false, 'returns false when provided null' );

	bool = isAccessorProperty( void 0, 'beep' );
	t.strictEqual( bool, false, 'returns false when provided undefined' );

	t.end();
});

tape( 'the function returns `false` if provided a property argument which does not correspond to a property', function test( t ) {
	var bool;
	var obj;

	obj = {
		'a': 'b'
	};

	bool = isAccessorProperty( obj, 'c' );
	t.strictEqual( bool, false, 'returns expected value' );

	bool = isAccessorProperty( obj, 'd' );
	t.strictEqual( bool, false, 'returns expected value' );

	t.end();
});

tape( 'the function returns `false` if provided an inherited property', function test( t ) {
	var bool;
	var obj;

	function Foo() {
		return this;
	}

	defineProperty( Foo.prototype, 'a', {
		'configurable': true,
		'enumerable': true,
		'get': getter
	});

	obj = new Foo();

	bool = isAccessorProperty( obj, 'a' );
	t.strictEqual( bool, false, 'returns expected value' );

	bool = isAccessorProperty( {}, 'hasOwnProperty' );
	t.strictEqual( bool, false, 'returns expected value' );

	bool = isAccessorProperty( {}, 'toString' );
	t.strictEqual( bool, false, 'returns expected value' );

	bool = isAccessorProperty( {}, 'constructor' );
	t.strictEqual( bool, false, 'returns expected value' );

	t.end();

	function getter() {
		// No-op...
	}
});

tape( 'values are coerced to objects', function test( t ) {
	var bool;

	bool = isAccessorProperty( 'beep', 'length' );
	t.strictEqual( bool, false, 'returns expected value' );

	t.end();
});
