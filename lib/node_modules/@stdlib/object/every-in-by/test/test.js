/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
var noop = require( '@stdlib/utils/noop' );
var everyInBy = require( './../lib' );


// FUNCTIONS //

function isPositive( value ) {
	return value > 0;
}


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof everyInBy, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if not provided an object', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		function noop() { }
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided ' + values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			everyInBy( value, noop );
		};
	}
});

tape( 'the function throws an error if not provided a predicate function', function test( t ) {
	var values;
	var i;

	values = [ '5', 5, NaN, true, false, null, void 0, {}, [], /.*/, new Date() ];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided ' + values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			everyInBy( {}, value );
		};
	}
});

tape( 'if provided an empty object, the function returns `true`', function test( t ) {
	var bool;
	var obj;

	obj = {};
	bool = everyInBy( obj, noop );

	t.strictEqual( bool, true, 'returns true for empty object' );
	t.end();
});

tape( 'the function returns `true` if all properties pass a test', function test( t ) {
	var bool;
	var obj;

	obj = {
		'a': 1,
		'b': 2,
		'c': 3
	};

	bool = everyInBy( obj, isPositive );

	t.strictEqual( bool, true, 'returns true for all positive values' );
	t.end();
});

tape( 'the function returns `false` if one or more properties fail a test', function test( t ) {
	var bool;
	var obj;

	obj = {
		'a': 1,
		'b': -2,
		'c': 3
	};

	bool = everyInBy( obj, isPositive );

	t.strictEqual( bool, false, 'returns false for negative value' );
	t.end();
});

tape( 'the function considers inherited properties', function test( t ) {
	var bool;
	var obj;

	function Parent() {
		this.inherited = 'property';
	}

	obj = new Parent();
	obj.own = 'value';

	function hasBoth( value, key ) {
		return key === 'inherited' || key === 'own';
	}

	bool = everyInBy( obj, hasBoth );

	t.strictEqual( bool, true, 'returns true for inherited and own properties' );
	t.end();
});

tape( 'the function supports providing an execution context', function test( t ) {
	var bool;
	var ctx;
	var obj;

	function sum( value ) {
		// eslint-disable-next-line no-invalid-this
		this.sum += value;
		return true;
	}

	ctx = {
		'sum': 0
	};

	obj = {
		'a': 1,
		'b': 2,
		'c': 3
	};

	bool = everyInBy( obj, sum, ctx );

	t.strictEqual( bool, true, 'returns true' );
	t.end();
});
