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
var omit = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof omit, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided a source object argument which is not an object', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		null,
		void 0,
		true
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			omit( value, 'a' );
		};
	}
});

tape( 'the function throws an error if provided a source object argument which is not an object', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		null,
		void 0,
		true
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			omit( value, [ 'a' ] );
		};
	}
});

tape( 'the function throws an error if provided a second argument which is neither a string nor an array of strings', function test( t ) {
	var values;
	var i;

	values = [
		5,
		NaN,
		null,
		void 0,
		true,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			omit( {}, value );
		};
	}
});

tape( 'the function returns a partial copy of an object omitting specified keys (strings)', function test( t ) {
	var expected;
	var obj1;
	var obj2;

	obj1 = {
		'a': 1,
		'b': 2,
		'c': 3,
		'd': 4,
		'e': 5
	};

	obj2 = omit( obj1, [ 'b', 'c', 'e' ] );

	expected = {
		'a': 1,
		'd': 4
	};

	t.deepEqual( obj2, expected, 'returns expected object' );
	t.end();
});

tape( 'the function returns a partial copy of an object omitting a specified key (string)', function test( t ) {
	var expected;
	var obj1;
	var obj2;

	obj1 = {
		'a': 1,
		'b': 2,
		'c': 3,
		'd': 4,
		'e': 5
	};

	obj2 = omit( obj1, 'b' );

	expected = {
		'a': 1,
		'c': 3,
		'd': 4,
		'e': 5
	};

	t.deepEqual( obj2, expected, 'returns expected object' );
	t.end();
});

tape( 'the function ignores non-existent key paths (strings)', function test( t ) {
	var expected;
	var obj1;
	var obj2;

	obj1 = {
		'a': 1,
		'b': 2,
		'c': 3,
		'd': 4,
		'e': 5
	};

	obj2 = omit( obj1, [ 'b', 'c', 'e', 'f', 'g', 'beep', 'a' ] );

	expected = {
		'd': 4
	};

	t.deepEqual( obj2, expected, 'returns expected object' );
	t.end();
});

tape( 'the function ignores non-existent key paths (string)', function test( t ) {
	var expected;
	var obj1;
	var obj2;

	obj1 = {
		'a': 1,
		'b': 2,
		'c': 3,
		'd': 4,
		'e': 5
	};

	obj2 = omit( obj1, 'beep' );

	expected = {
		'a': 1,
		'b': 2,
		'c': 3,
		'd': 4,
		'e': 5
	};

	t.deepEqual( obj2, expected, 'returns expected object' );
	t.end();
});

tape( 'the function ignores inherited properties (strings)', function test( t ) {
	var expected;
	var obj1;
	var obj2;

	function Foo() {
		this.a = 1;
		this.b = 2;
		this.c = 3;
		this.d = 4;
		this.e = 5;
		return this;
	}

	Foo.prototype.f = 6;
	Foo.prototype.g = 7;

	obj1 = new Foo();

	obj2 = omit( obj1, [ 'b', 'c', 'e', 'f', 'g' ] );

	expected = {
		'a': 1,
		'd': 4
	};

	t.deepEqual( obj2, expected, 'returns expected object' );
	t.end();
});

tape( 'the function ignores inherited properties (string)', function test( t ) {
	var expected;
	var obj1;
	var obj2;

	function Foo() {
		this.a = 1;
		this.b = 2;
		this.c = 3;
		this.d = 4;
		this.e = 5;
		return this;
	}

	Foo.prototype.f = 6;
	Foo.prototype.g = 7;

	obj1 = new Foo();

	obj2 = omit( obj1, 'f' );

	expected = {
		'a': 1,
		'b': 2,
		'c': 3,
		'd': 4,
		'e': 5
	};

	t.deepEqual( obj2, expected, 'returns expected object' );
	t.end();
});

tape( 'the function accepts non-plain objects', function test( t ) {
	var expected;
	var obj1;
	var obj2;

	obj1 = [ 0, 1, 2, 3, 4, 5 ];

	obj2 = omit( obj1, [ '0', '2', '4' ] );

	expected = {
		'1': 1,
		'3': 3,
		'5': 5
	};

	t.deepEqual( obj2, expected, 'returns expected object' );
	t.end();
});

tape( 'the function returns a shallow copy (string)', function test( t ) {
	var expected;
	var obj1;
	var obj2;

	obj1 = {
		'a': [ 1 ],
		'b': [ 2 ],
		'c': [ 3 ],
		'd': [ 4 ],
		'e': [ 5 ]
	};

	obj2 = omit( obj1, 'b' );

	expected = {
		'a': obj1.a,
		'c': obj1.c,
		'd': obj1.d,
		'e': obj1.e
	};

	t.deepEqual( obj2, expected, 'returns expected object' );
	t.strictEqual( obj2.a, obj1.a, 'returns shallow copy' );
	t.strictEqual( obj2.c, obj1.c, 'returns shallow copy' );
	t.strictEqual( obj2.d, obj1.d, 'returns shallow copy' );
	t.strictEqual( obj2.e, obj1.e, 'returns shallow copy' );

	t.end();
});

tape( 'the function returns a shallow copy (strings)', function test( t ) {
	var expected;
	var obj1;
	var obj2;

	obj1 = {
		'a': [ 1 ],
		'b': [ 2 ],
		'c': [ 3 ],
		'd': [ 4 ],
		'e': [ 5 ]
	};

	obj2 = omit( obj1, [ 'b', 'c' ] );

	expected = {
		'a': obj1.a,
		'd': obj1.d,
		'e': obj1.e
	};

	t.deepEqual( obj2, expected, 'returns expected object' );
	t.strictEqual( obj2.a, obj1.a, 'returns shallow copy' );
	t.strictEqual( obj2.d, obj1.d, 'returns shallow copy' );
	t.strictEqual( obj2.e, obj1.e, 'returns shallow copy' );

	t.end();
});
