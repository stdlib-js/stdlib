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
var isReadWritePropertyIn = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isReadWritePropertyIn, 'function', 'export is a function' );
	t.end();
});

tape( 'the function returns `true` if an object property is readable and writable', function test( t ) {
	var bool;
	var obj;

	function Foo() {
		this.bar = 'beep';
		return this;
	}

	obj = {
		'a': 'b'
	};
	bool = isReadWritePropertyIn( obj, 'a' );
	t.equal( bool, true, 'returns true' );

	bool = isReadWritePropertyIn( [ 1, 2, 3 ], '1' );
	t.equal( bool, true, 'returns true' );

	bool = isReadWritePropertyIn( [ 1, 2, 3 ], 1 );
	t.equal( bool, true, 'returns true' );

	bool = isReadWritePropertyIn( new Foo(), 'bar' );
	t.equal( bool, true, 'returns true' );

	bool = isReadWritePropertyIn( [ 'a' ], 'length' );
	t.equal( bool, true, 'returns true' );

	obj = {};
	defineProperty( obj, 'a', {
		'configurable': false,
		'enumerable': false,
		'writable': true,
		'value': 'b'
	});

	bool = isReadWritePropertyIn( obj, 'a' );
	t.equal( bool, true, 'returns true' );

	obj = {};
	defineProperty( obj, 'a', {
		'configurable': false,
		'enumerable': false,
		'get': getter,
		'set': setter
	});

	bool = isReadWritePropertyIn( obj, 'a' );
	t.equal( bool, true, 'returns true' );

	t.end();

	function getter() {
		// No-op...
	}

	function setter() {
		// No-op...
	}
});

tape( 'the function returns `true` if provided an inherited readable and writable property', function test( t ) {
	var bool;

	bool = isReadWritePropertyIn( {}, 'hasOwnProperty' );
	t.equal( bool, true, 'returns true ' );

	bool = isReadWritePropertyIn( {}, 'toString' );
	t.equal( bool, true, 'returns true' );

	bool = isReadWritePropertyIn( {}, 'constructor' );
	t.equal( bool, true, 'returns true' );

	t.end();
});

tape( 'the function returns `false` if provided `null` or `undefined` for the first argument', function test( t ) {
	var bool;

	bool = isReadWritePropertyIn( null, 'beep' );
	t.equal( bool, false, 'returns false when provided null' );

	bool = isReadWritePropertyIn( void 0, 'beep' );
	t.equal( bool, false, 'returns false when provided undefined' );

	t.end();
});

tape( 'the function returns `false` if provided a property argument which does not correspond to a readable and writable property', function test( t ) {
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
		'get': getter
	});

	defineProperty( obj, 'f', {
		'configurable': false,
		'enumerable': false,
		'writable': false,
		'value': 'g'
	});

	bool = isReadWritePropertyIn( obj, 'c' );
	t.equal( bool, false, 'returns false' );

	bool = isReadWritePropertyIn( obj, 'd' );
	t.equal( bool, false, 'returns false' );

	bool = isReadWritePropertyIn( obj, 'e' );
	t.equal( bool, false, 'returns false' );

	bool = isReadWritePropertyIn( obj, 'f' );
	t.equal( bool, false, 'returns false' );

	t.end();

	function setter() {
		// No-op...
	}

	function getter() {
		// No-op...
	}
});

tape( 'values are coerced to objects', function test( t ) {
	var bool;

	bool = isReadWritePropertyIn( 'beep', 'length' );
	t.equal( bool, false, 'returns false' );

	t.end();
});
