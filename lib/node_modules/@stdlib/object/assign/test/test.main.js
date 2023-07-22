/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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
var assign = require( './../lib' );


// VARIABLES //

var opts = {
	'skip': !hasSymbolSupport()
};


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( typeof assign === 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided `undefined` or `null` as a target object', function test( t ) {
	var values;
	var i;

	values = [
		undefined,
		null
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			assign( value, {} );
		};
	}
});

tape( 'the function returns the target object', function test( t ) {
	var out;
	var obj;

	obj = {};
	out = assign( obj, {
		'a': 'b'
	});

	t.strictEqual( out, obj, 'returns target object' );
	t.end();
});

tape( 'the function assigns enumerable own properties of one or more source objects to a target object', function test( t ) {
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

	out = assign( {}, obj1, obj2, obj3 );

	expected = {
		'a': 'b',
		'c': 'd',
		'e': 'f'
	};

	t.deepEqual( out, expected, 'returns expected object' );
	t.end();
});

tape( 'the function copies symbol-typed properties', opts, function test( t ) {
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

	out = assign( {}, obj1, obj2 );
	expected = {
		'a': 'b'
	};
	expected[ sym ] = 'boop';

	t.deepEqual( out, expected, 'returns expected object' );
	t.end();
});

tape( 'the function wraps primitives to objects', function test( t ) {
	var expected;
	var obj1;
	var obj2;
	var out;

	obj1 = {
		'a': 'b'
	};
	obj2 = 'c';
	out = assign( {}, obj1, obj2 );
	expected = {
		'a': 'b',
		'0': 'c'
	};
	t.deepEqual( out, expected, 'returns expected object' );

	obj2 = 'abc';
	out = assign( {}, obj1, obj2 );
	expected = {
		'a': 'b',
		'0': 'a',
		'1': 'b',
		'2': 'c'
	};
	t.deepEqual( out, expected, 'returns expected object' );
	t.end();
});
