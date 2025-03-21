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
var isDataProperty = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isDataProperty, 'function', 'export is a function' );
	t.end();
});

tape( 'the function returns `true` if an object property has a data descriptor', function test( t ) {
	var bool;
	var obj;

	function Foo() {
		this.bar = 'beep';
		return this;
	}

	obj = {
		'a': 'b'
	};
	bool = isDataProperty( obj, 'a' );
	t.equal( bool, true, 'returns true' );

	bool = isDataProperty( [ 1, 2, 3 ], '1' );
	t.equal( bool, true, 'returns true' );

	bool = isDataProperty( [ 1, 2, 3 ], 1 );
	t.equal( bool, true, 'returns true' );

	bool = isDataProperty( new Foo(), 'bar' );
	t.equal( bool, true, 'returns true' );

	bool = isDataProperty( [ 'a' ], 'length' );
	t.equal( bool, true, 'returns true' );

	obj = {};
	defineProperty( obj, 'a', {
		'configurable': false,
		'enumerable': false,
		'writable': true,
		'value': 'b'
	});

	bool = isDataProperty( obj, 'a' );
	t.equal( bool, true, 'returns true' );

	t.end();
});

tape( 'the function returns `false` if provided `null` or `undefined` for the first argument', function test( t ) {
	var bool;

	bool = isDataProperty( null, 'beep' );
	t.equal( bool, false, 'returns false when provided null' );

	bool = isDataProperty( void 0, 'beep' );
	t.equal( bool, false, 'returns false when provided undefined' );

	t.end();
});

tape( 'the function returns `false` if provided a property argument which does not correspond to a property having a data descriptor', function test( t ) {
	var bool;
	var obj;

	obj = {
		'a': 'b'
	};

	bool = isDataProperty( obj, 'c' );
	t.equal( bool, false, 'returns false' );

	obj = {};
	defineProperty( obj, 'a', {
		'configurable': false,
		'enumerable': false,
		'get': getter,
		'set': setter
	});

	bool = isDataProperty( obj, 'a' );
	t.equal( bool, false, 'returns false' );

	t.end();

	function getter() {
		// No-op...
	}

	function setter() {
		// No-op...
	}
});

tape( 'the function returns `false` if provided an inherited property', function test( t ) {
	var bool;

	bool = isDataProperty( {}, 'hasOwnProperty' );
	t.equal( bool, false, 'returns false' );

	bool = isDataProperty( {}, 'toString' );
	t.equal( bool, false, 'returns false' );

	bool = isDataProperty( {}, 'constructor' );
	t.equal( bool, false, 'returns false' );

	t.end();
});

tape( 'values are coerced to objects', function test( t ) {
	var bool;

	bool = isDataProperty( 'beep', 'length' );
	t.equal( bool, true, 'returns true' );

	t.end();
});
