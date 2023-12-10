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
var isEnumerablePropertyIn = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isEnumerablePropertyIn, 'function', 'export is a function' );
	t.end();
});

tape( 'the function returns `true` if an object property is enumerable', function test( t ) {
	var bool;
	var obj;

	function Foo() {
		this.bar = 'beep';
		return this;
	}

	obj = {
		'a': 'b'
	};
	bool = isEnumerablePropertyIn( obj, 'a' );
	t.equal( bool, true, 'returns true' );

	bool = isEnumerablePropertyIn( [ 1, 2, 3 ], '1' );
	t.equal( bool, true, 'returns true' );

	bool = isEnumerablePropertyIn( [ 1, 2, 3 ], 1 );
	t.equal( bool, true, 'returns true' );

	bool = isEnumerablePropertyIn( new Foo(), 'bar' );
	t.equal( bool, true, 'returns true' );

	obj = {};
	defineProperty( obj, 'a', {
		'configurable': true,
		'enumerable': true,
		'writable': true,
		'value': 'b'
	});

	bool = isEnumerablePropertyIn( obj, 'a' );
	t.equal( bool, true, 'returns true' );

	t.end();
});

tape( 'the function returns `true` if provided an enumerable inherited property', function test( t ) {
	var bool;
	var obj;

	function Foo() {
		return this;
	}

	defineProperty( Foo.prototype, 'a', {
		'configurable': true,
		'enumerable': true,
		'writable': true,
		'value': true
	});

	obj = new Foo();

	bool = isEnumerablePropertyIn( obj, 'a' );
	t.equal( bool, true, 'returns true' );

	t.end();
});

tape( 'the function returns `false` if provided `null` or `undefined` for the first argument', function test( t ) {
	var bool;

	bool = isEnumerablePropertyIn( null, 'beep' );
	t.equal( bool, false, 'returns false when provided null' );

	bool = isEnumerablePropertyIn( void 0, 'beep' );
	t.equal( bool, false, 'returns false when provided undefined' );

	t.end();
});

tape( 'the function returns `false` if provided a property argument which does not correspond to an enumerable property', function test( t ) {
	var bool;
	var obj;

	obj = {
		'a': 'b'
	};

	defineProperty( obj, 'd', {
		'configurable': true,
		'enumerable': false,
		'writable': true,
		'value': true
	});

	bool = isEnumerablePropertyIn( obj, 'c' );
	t.equal( bool, false, 'returns false' );

	bool = isEnumerablePropertyIn( obj, 'd' );
	t.equal( bool, false, 'returns false' );

	bool = isEnumerablePropertyIn( [ 'a' ], 'length' );
	t.equal( bool, false, 'returns false' );

	t.end();
});

tape( 'the function returns `false` if provided a non-enumerable inherited property', function test( t ) {
	var bool;
	var obj;

	function Foo() {
		return this;
	}

	defineProperty( Foo.prototype, 'bar', {
		'configurable': true,
		'enumerable': false,
		'writable': true,
		'value': true
	});

	obj = new Foo();

	bool = isEnumerablePropertyIn( obj, 'bar' );
	t.equal( bool, false, 'returns false' );

	bool = isEnumerablePropertyIn( {}, 'hasOwnProperty' );
	t.equal( bool, false, 'returns false' );

	bool = isEnumerablePropertyIn( {}, 'toString' );
	t.equal( bool, false, 'returns false' );

	bool = isEnumerablePropertyIn( {}, 'constructor' );
	t.equal( bool, false, 'returns false' );

	t.end();
});

tape( 'values are coerced to objects', function test( t ) {
	var bool;

	bool = isEnumerablePropertyIn( 'beep', 'length' );
	t.equal( bool, false, 'returns false' );

	bool = isEnumerablePropertyIn( 'beep', 'toString' );
	t.equal( bool, false, 'returns false' );

	t.end();
});
