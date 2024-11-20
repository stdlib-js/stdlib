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
var isNonConfigurableProperty = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isNonConfigurableProperty, 'function', 'export is a function' );
	t.end();
});

tape( 'the function returns `false` if provided `null` or `undefined` for the first argument', function test( t ) {
	var bool;

	bool = isNonConfigurableProperty( null, 'beep' );
	t.equal( bool, false, 'returns false when provided null' );

	bool = isNonConfigurableProperty( void 0, 'beep' );
	t.equal( bool, false, 'returns false when provided undefined' );

	t.end();
});

tape( 'the function returns `false` if an object property is configurable', function test( t ) {
	var bool;
	var obj;

	function Foo() {
		this.bar = 'beep';
		return this;
	}

	obj = {
		'a': 'b'
	};
	bool = isNonConfigurableProperty( obj, 'a' );
	t.equal( bool, false, 'returns false' );

	bool = isNonConfigurableProperty( [ 1, 2, 3 ], '1' );
	t.equal( bool, false, 'returns false' );

	bool = isNonConfigurableProperty( [ 1, 2, 3 ], 1 );
	t.equal( bool, false, 'returns false' );

	bool = isNonConfigurableProperty( new Foo(), 'bar' );
	t.equal( bool, false, 'returns false' );

	t.end();
});

tape( 'the function returns `false` if provided a property argument which does not correspond to a non-configurable property', function test( t ) {
	var bool;
	var obj;

	obj = {
		'a': 'b'
	};

	bool = isNonConfigurableProperty( obj, 'c' );
	t.equal( bool, false, 'returns false' );

	t.end();
});

tape( 'the function returns `true` if an object property is non-configurable', function test( t ) {
	var bool;
	var obj;

	obj = {};
	defineProperty( obj, 'a', {
		'configurable': false,
		'enumerable': true,
		'writable': true,
		'value': 'b'
	});

	bool = isNonConfigurableProperty( obj, 'a' );
	t.equal( bool, true, 'returns true' );

	bool = isNonConfigurableProperty( [ 'a' ], 'length' );
	t.equal( bool, true, 'returns true' );

	t.end();
});

tape( 'the function returns `false` if provided an inherited property', function test( t ) {
	var bool;

	bool = isNonConfigurableProperty( {}, 'hasOwnProperty' );
	t.equal( bool, false, 'returns false' );

	bool = isNonConfigurableProperty( {}, 'toString' );
	t.equal( bool, false, 'returns false' );

	bool = isNonConfigurableProperty( {}, 'constructor' );
	t.equal( bool, false, 'returns false' );

	t.end();
});

tape( 'values are coerced to objects', function test( t ) {
	var bool;

	bool = isNonConfigurableProperty( 'beep', 'length' );
	t.equal( bool, true, 'returns true' );

	t.end();
});
