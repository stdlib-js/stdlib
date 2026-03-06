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
var proxyquire = require( 'proxyquire' );
var indexOf = require( '@stdlib/utils/index-of' );
var defineProperty = require( '@stdlib/utils/define-property' );
var hasSymbolSupport = require( '@stdlib/assert/has-symbol-support' );
var Symbol = require( '@stdlib/symbol/ctor' );
var enumerablePropertySymbols = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof enumerablePropertySymbols, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns an array of an object\'s own enumerable symbol properties', function test( t ) {
	var hasSymbols;
	var expected;
	var actual;
	var syms;
	var obj;
	var idx;
	var i;

	hasSymbols = hasSymbolSupport();

	function Foo() {
		if ( hasSymbols ) {
			this[ syms[ 0 ] ] = 'boop';
			this[ syms[ 1 ] ] = {
				'b': 'c'
			};
			defineProperty( this, syms[ 2 ], {
				'configurable': false,
				'enumerable': true,
				'writable': true,
				'value': 'e'
			});
			defineProperty( this, syms[ 3 ], {
				'configurable': false,
				'enumerable': true,
				'writable': true,
				'value': 'g'
			});
			defineProperty( this, syms[ 4 ], {
				'configurable': false,
				'enumerable': false,
				'writable': true,
				'value': 'i'
			});
		}
		return this;
	}

	if ( hasSymbols ) {
		syms = [
			Symbol( 'beep' ),
			Symbol( 'a' ),
			Symbol( 'd' ),
			Symbol( 'f' ),
			Symbol( 'h' ),
			Symbol( 'foo' ),
			Symbol( 'baz' )
		];

		Foo.prototype[ syms[ 5 ] ] = [ 'bar' ];
		defineProperty( Foo.prototype, syms[ 6 ], {
			'configurable': false,
			'enumerable': false,
			'writable': false,
			'value': 'bap'
		});

		obj = new Foo();

		expected = [ syms[ 0 ], syms[ 1 ], syms[ 2 ], syms[ 3 ] ];
	} else {
		syms = [];
		expected = [];
	}
	actual = enumerablePropertySymbols( obj );

	t.strictEqual( actual.length, expected.length, 'has expected length' );
	for ( i = 0; i < expected.length; i++ ) {
		idx = indexOf( actual, expected[ i ] );
		t.strictEqual( idx !== -1, true, 'contains property name: '+expected[i].toString() );
	}
	t.end();
});

tape( 'the function returns an array of an object\'s own enumerable symbol properties (mock)', function test( t ) {
	var enumerablePropertySymbols;
	var expected;
	var actual;
	var syms;
	var obj;
	var idx;
	var i;

	enumerablePropertySymbols = proxyquire( './../lib/main.js', {
		'@stdlib/utils/property-symbols': propertySymbols
	});

	syms = [
		'beep',
		'a',
		'd',
		'f',
		'h',
		'foo',
		'baz'
	];

	function Foo() {
		this[ syms[ 0 ] ] = 'boop';
		this[ syms[ 1 ] ] = {
			'b': 'c'
		};
		defineProperty( this, syms[ 2 ], {
			'configurable': false,
			'enumerable': true,
			'writable': true,
			'value': 'e'
		});
		defineProperty( this, syms[ 3 ], {
			'configurable': false,
			'enumerable': true,
			'writable': true,
			'value': 'g'
		});
		defineProperty( this, syms[ 4 ], {
			'configurable': false,
			'enumerable': false,
			'writable': true,
			'value': 'i'
		});
		return this;
	}

	Foo.prototype[ syms[ 5 ] ] = [ 'bar' ];
	defineProperty( Foo.prototype, syms[ 6 ], {
		'configurable': false,
		'enumerable': true,
		'writable': false,
		'value': 'bap'
	});

	obj = new Foo();

	expected = [ syms[ 0 ], syms[ 1 ], syms[ 2 ], syms[ 3 ] ];
	actual = enumerablePropertySymbols( obj );

	t.strictEqual( actual.length, expected.length, 'has expected length' );
	for ( i = 0; i < expected.length; i++ ) {
		idx = indexOf( actual, expected[ i ] );
		t.strictEqual( idx !== -1, true, 'contains property name: '+expected[i].toString() );
	}
	t.end();

	function propertySymbols() {
		return syms.slice();
	}
});

tape( 'the function returns an empty array if provided `null` or `undefined`', function test( t ) {
	var expected;
	var actual;
	var values;
	var i;

	values = [
		void 0,
		null
	];
	expected = [];

	for ( i = 0; i < values.length; i++ ) {
		actual = enumerablePropertySymbols( values[ i ] );
		t.deepEqual( actual, expected, 'returns expected value when provided '+values[ i ] );
	}
	t.end();
});

tape( 'the function returns an empty array if provided a non-string primitive', function test( t ) {
	var expected;
	var actual;
	var values;
	var i;

	values = [
		3.14,
		NaN,
		true,
		false
	];
	expected = [];

	for ( i = 0; i < values.length; i++ ) {
		actual = enumerablePropertySymbols( values[ i ] );
		t.deepEqual( actual, expected, 'returns expected value when provided '+values[ i ] );
	}
	t.end();
});
