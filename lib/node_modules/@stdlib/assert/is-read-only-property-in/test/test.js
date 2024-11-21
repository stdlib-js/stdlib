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
var isReadOnlyPropertyIn = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isReadOnlyPropertyIn, 'function', 'export is a function' );
	t.end();
});

tape( 'the function returns `true` if an object property is read-only', function test( t ) {
	var bool;
	var obj;

	obj = {};

	defineProperty( obj, 'a', {
		'configurable': false,
		'enumerable': true,
		'writable': false,
		'value': true
	});

	defineProperty( obj, 'b', {
		'configurable': false,
		'enumerable': false,
		'writable': false,
		'value': true
	});

	defineProperty( obj, 'c', {
		'configurable': false,
		'enumerable': true,
		'get': getter
	});

	defineProperty( obj, 'd', {
		'configurable': false,
		'enumerable': false,
		'get': getter
	});

	bool = isReadOnlyPropertyIn( obj, 'a' );
	t.equal( bool, true, 'returns true' );

	bool = isReadOnlyPropertyIn( obj, 'b' );
	t.equal( bool, true, 'returns true' );

	bool = isReadOnlyPropertyIn( obj, 'c' );
	t.equal( bool, true, 'returns true' );

	bool = isReadOnlyPropertyIn( obj, 'd' );
	t.equal( bool, true, 'returns true' );

	t.end();

	function getter() {
		// No-op...
	}
});

tape( 'the function returns `true` if provided an inherited property which is read-only', function test( t ) {
	var bool;
	var obj;

	function Foo() {
		return this;
	}

	defineProperty( Foo.prototype, 'bar', {
		'configurable': false,
		'enumerable': true,
		'writable': false,
		'value': true
	});

	defineProperty( Foo.prototype, 'beep', {
		'configurable': false,
		'enumerable': false,
		'get': getter
	});

	obj = new Foo();

	bool = isReadOnlyPropertyIn( obj, 'bar' );
	t.equal( bool, true, 'returns true' );

	bool = isReadOnlyPropertyIn( obj, 'beep' );
	t.equal( bool, true, 'returns true' );

	t.end();

	function getter() {
		// No-op...
	}
});

tape( 'the function returns `false` if an object property is not read-only', function test( t ) {
	var bool;
	var obj;

	function Foo() {
		this.bar = 'beep';
		return this;
	}

	obj = {
		'a': 'b'
	};
	bool = isReadOnlyPropertyIn( obj, 'a' );
	t.equal( bool, false, 'returns false' );

	bool = isReadOnlyPropertyIn( [ 1, 2, 3 ], '1' );
	t.equal( bool, false, 'returns false' );

	bool = isReadOnlyPropertyIn( [ 1, 2, 3 ], 1 );
	t.equal( bool, false, 'returns false' );

	bool = isReadOnlyPropertyIn( new Foo(), 'bar' );
	t.equal( bool, false, 'returns false' );

	bool = isReadOnlyPropertyIn( [ 'a' ], 'length' );
	t.equal( bool, false, 'returns false' );

	obj = {};
	defineProperty( obj, 'a', {
		'configurable': false,
		'enumerable': false,
		'writable': true,
		'value': 'b'
	});

	bool = isReadOnlyPropertyIn( obj, 'a' );
	t.equal( bool, false, 'returns false' );

	obj = {};

	defineProperty( obj, 'a', {
		'configurable': false,
		'enumerable': false,
		'get': getter,
		'set': setter
	});

	defineProperty( obj, 'b', {
		'configurable': false,
		'enumerable': false,
		'set': setter
	});

	bool = isReadOnlyPropertyIn( obj, 'a' );
	t.equal( bool, false, 'returns false' );

	bool = isReadOnlyPropertyIn( obj, 'b' );
	t.equal( bool, false, 'returns false' );

	t.end();

	function getter() {
		// No-op...
	}

	function setter() {
		// No-op...
	}
});

tape( 'the function returns `false` if provided `null` or `undefined` for the first argument', function test( t ) {
	var bool;

	bool = isReadOnlyPropertyIn( null, 'beep' );
	t.equal( bool, false, 'returns false when provided null' );

	bool = isReadOnlyPropertyIn( void 0, 'beep' );
	t.equal( bool, false, 'returns false when provided undefined' );

	t.end();
});

tape( 'the function returns `false` if provided a property argument which does not correspond to a read-only property', function test( t ) {
	var bool;
	var obj;

	obj = {
		'a': 'b'
	};

	defineProperty( obj, 'd', {
		'configurable': true,
		'enumerable': true,
		'set': setter
	});

	defineProperty( obj, 'e', {
		'configurable': true,
		'enumerable': true,
		'set': setter,
		'get': getter
	});

	defineProperty( obj, 'f', {
		'configurable': true,
		'enumerable': false,
		'writable': false,
		'value': 'g'
	});

	bool = isReadOnlyPropertyIn( obj, 'c' );
	t.equal( bool, false, 'returns false' );

	bool = isReadOnlyPropertyIn( obj, 'd' );
	t.equal( bool, false, 'returns false' );

	bool = isReadOnlyPropertyIn( obj, 'e' );
	t.equal( bool, false, 'returns false' );

	bool = isReadOnlyPropertyIn( obj, 'f' );
	t.equal( bool, false, 'returns false' );

	t.end();

	function setter() {
		// No-op...
	}

	function getter() {
		// No-op...
	}
});

tape( 'the function returns `false` if provided an inherited property which is not read-only', function test( t ) {
	var bool;

	bool = isReadOnlyPropertyIn( {}, 'hasOwnProperty' );
	t.equal( bool, false, 'returns false' );

	bool = isReadOnlyPropertyIn( {}, 'toString' );
	t.equal( bool, false, 'returns false' );

	bool = isReadOnlyPropertyIn( {}, 'constructor' );
	t.equal( bool, false, 'returns false' );

	t.end();
});

tape( 'values are coerced to objects', function test( t ) {
	var bool;

	bool = isReadOnlyPropertyIn( 'beep', 'length' );
	t.equal( bool, true, 'returns true' );

	t.end();
});
