/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
var hasSymbolSupport = require( '@stdlib/assert/has-symbol-support' );
var Symbol = require( '@stdlib/symbol/ctor' );
var assignIn = require( './../lib' );


// VARIABLES //

var opts = {
	'skip': !hasSymbolSupport()
};


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof assignIn, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided `undefined` or `null` as a target object', function test( t ) {
	var values;
	var i;

	values = [
		void 0,
		null
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			assignIn( value, {} );
		};
	}
});

tape( 'the function returns the target object', function test( t ) {
	var out;
	var obj;

	obj = {};
	out = assignIn( obj, {
		'a': 'b'
	});

	t.strictEqual( out, obj, 'returns expected value' );
	t.end();
});

tape( 'the function copies enumerable own properties of one or more source objects to a target object', function test( t ) {
	var expected;
	var obj1;
	var obj2;
	var obj3;
	var out;

	obj1 = {
		'a': 'b'
	};
	obj2 = {
		'c': 'd'
	};
	obj3 = {
		'e': 'f'
	};

	out = assignIn( {}, obj1, obj2, obj3 );

	expected = {
		'a': 'b',
		'c': 'd',
		'e': 'f'
	};

	t.deepEqual( out, expected, 'returns expected object' );
	t.end();
});

tape( 'the function copies own symbol properties', opts, function test( t ) {
	var expected;
	var obj1;
	var obj2;
	var out;
	var sym;

	sym = Symbol( 'beep' );

	obj1 = {};
	obj1[ sym ] = 'boop';

	obj2 = {
		'a': 'b'
	};

	out = assignIn( {}, obj1, obj2 );
	expected = {
		'a': 'b'
	};
	expected[ sym ] = 'boop';

	t.strictEqual( out[ sym ], expected[ sym ], 'returns expected object' );
	t.strictEqual( out.a, expected.a, 'returns expected object' );
	t.end();
});

tape( 'the function copies enumerable own and inherited properties of one or more source objects to a target object', function test( t ) {
	var expected;
	var obj1;
	var obj2;
	var obj3;
	var out;

	function Foo() {
		this.a = 1;
		return this;
	}

	Foo.prototype.b = 2;

	function Bar() {
		this.c = 3;
		return this;
	}

	Bar.prototype.d = 4;

	obj1 = new Foo();
	obj2 = new Bar();
	obj3 = {
		'c': 5 // overwrites Bar.c
	};

	out = assignIn( {}, obj1, obj2, obj3 );

	expected = {
		'a': 1,
		'b': 2,
		'c': 5,
		'd': 4
	};

	t.deepEqual( out, expected, 'returns expected object' );
	t.end();
});

tape( 'the function copies inherited symbol properties', opts, function test( t ) {
	var expected;
	var obj1;
	var obj2;
	var out;
	var sym;

	sym = Symbol( 'beep' );

	function Foo() {
		this.a = 'b';
	}

	Foo.prototype[ sym ] = 'boop';

	obj1 = new Foo();
	obj2 = {
		'a': 'b'
	};

	out = assignIn( {}, obj1, obj2 );
	expected = {
		'a': 'b'
	};
	expected[ sym ] = 'boop';

	t.strictEqual( out[ sym ], expected[ sym ], 'returns expected object' );
	t.strictEqual( out.a, expected.a, 'returns expected object' );
	t.end();
});

tape( 'the function supports primitive source values', function test( t ) {
	var expected;
	var obj1;
	var obj2;
	var out;

	obj1 = {
		'a': 'b'
	};
	obj2 = 'c';
	out = assignIn( {}, obj1, obj2 );
	expected = {
		'a': 'b',
		'0': 'c'
	};
	t.deepEqual( out, expected, 'returns expected object' );

	obj2 = 'abc';
	out = assignIn( {}, obj1, obj2 );
	expected = {
		'a': 'b',
		'0': 'a',
		'1': 'b',
		'2': 'c'
	};
	t.deepEqual( out, expected, 'returns expected object' );
	t.end();
});
