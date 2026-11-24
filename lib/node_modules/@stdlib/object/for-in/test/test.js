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
var objectKeys = require( '@stdlib/utils/keys' );
var noop = require( '@stdlib/utils/noop' );
var forIn = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof forIn, 'function', 'main export is a function' );
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
		void 0
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			forIn( value, noop );
		};
	}
});

tape( 'the function throws an error if not provided a function to invoke', function test( t ) {
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
		{},
		[],
		/.*/,
		new Date()
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			forIn( {}, value );
		};
	}
});

tape( 'if provided an empty object, the function never invokes a provided function', function test( t ) {
	var obj = {};

	function foo() {
		t.fail( 'should not be invoked' );
	}

	forIn( obj, foo );

	t.deepEqual( obj, {}, 'expected result' );
	t.end();
});

tape( 'the function returns the input object', function test( t ) {
	var obj;
	var out;

	function foo() {
		t.pass( 'invoked provided function' );
	}

	obj = {
		'a': 1,
		'b': 2,
		'c': 3
	};

	out = forIn( obj, foo );

	t.strictEqual( out, obj, 'returns input object' );
	t.end();
});

tape( 'the function invokes a provided function for each own and inherited enumerable property in an object', function test( t ) {
	var expected;
	var obj;
	var out;

	function copy( value, key ) {
		out[ key ] = value;
	}

	function Obj() {
		if ( !(this instanceof Obj) ) {
			return new Obj();
		}
		this.a = 1;
		this.b = 2;
		this.c = 3;

		defineProperty( this, 'nonenum1', {
			'configurable': false,
			'writable': false,
			'enumerable': false,
			'value': 'beep'
		});

		return this;
	}

	Obj.prototype.d = 4;
	Obj.prototype.e = 5;

	defineProperty( Obj.prototype, 'noenum2', {
		'configurable': false,
		'writable': false,
		'enumerable': false,
		'value': 'boop'
	});

	out = {};

	obj = new Obj();
	forIn( obj, copy );

	expected = {
		'a': 1,
		'b': 2,
		'c': 3,
		'd': 4,
		'e': 5
	};
	t.deepEqual( out, expected, 'expected result' );
	t.end();
});

tape( 'the function supports early termination', function test( t ) {
	var keys;
	var obj;
	var out;

	function copy( value, key ) {
		out[ key ] = value;

		// Explicitly return `false`:
		return false;
	}

	obj = {
		'a': 1,
		'b': 2,
		'c': 3
	};
	out = {};

	forIn( obj, copy );

	keys = objectKeys( out );
	t.strictEqual( keys.length, 1, 'object contains only one property' );
	t.strictEqual( out[ keys[0] ], obj[ keys[0] ], 'copies property value' );

	t.end();
});

tape( 'the function supports providing an execution context', function test( t ) {
	var ctx;
	var obj;

	function sum( value ) {
		/* eslint-disable no-invalid-this */
		this.sum += value;
		this.count += 1;
	}

	ctx = {
		'sum': 0.0,
		'count': 0.0
	};
	obj = {
		'a': 1.0,
		'b': 2.0,
		'c': 3.0
	};

	forIn( obj, sum, ctx );

	t.strictEqual( ctx.sum/ctx.count, 2.0, 'expected result' );

	t.end();
});
