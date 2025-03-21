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
var nonEnumerablePropertiesIn = require( './../lib' );


// VARIABLES //

var hasSymbols = hasSymbolSupport();


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof nonEnumerablePropertiesIn, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns an array of an object\'s own and inherited non-enumerable property names and symbols', function test( t ) {
	var expected;
	var symbols;
	var actual;
	var obj;
	var idx;
	var i;

	if ( hasSymbols ) {
		symbols = [
			Symbol( 'a' ),
			Symbol( 'b' ),
			Symbol( 'c' )
		];
	} else {
		symbols = [];
	}

	function Foo() {
		defineProperty( this, 'a', {
			'configurable': true,
			'enumerable': false,
			'writable': false,
			'value': 'a'
		});
		defineProperty( this, 'b', {
			'configurable': true,
			'enumerable': true,
			'writable': false,
			'value': 'b'
		});
		if ( hasSymbols ) {
			defineProperty( this, symbols[ 0 ], {
				'configurable': true,
				'enumerable': false,
				'writable': true,
				'value': 'a'
			});
			defineProperty( this, symbols[ 1 ], {
				'configurable': true,
				'enumerable': true,
				'writable': true,
				'value': 'b'
			});
		}
		return this;
	}

	defineProperty( Foo.prototype, 'b', {
		'configurable': true,
		'enumerable': false,
		'writable': true,
		'value': 'c'
	});
	defineProperty( Foo.prototype, 'c', {
		'configurable': true,
		'enumerable': false,
		'writable': true,
		'value': 'c'
	});
	defineProperty( Foo.prototype, 'd', {
		'configurable': true,
		'enumerable': true,
		'writable': false,
		'value': 'd'
	});
	if ( hasSymbols ) {
		defineProperty( Foo.prototype, symbols[ 1 ], {
			'configurable': true,
			'enumerable': false,
			'writable': true,
			'value': 'b'
		});
		defineProperty( Foo.prototype, symbols[ 2 ], {
			'configurable': true,
			'enumerable': true,
			'writable': true,
			'value': 'c'
		});
	}

	obj = new Foo();

	expected = [ 'a', 'c' ];
	if ( hasSymbols ) {
		expected.push( symbols[ 0 ] );
	}
	actual = nonEnumerablePropertiesIn( obj );

	t.strictEqual( actual.length >= expected.length, true, 'has expected length' );
	for ( i = 0; i < expected.length; i++ ) {
		idx = indexOf( actual, expected[ i ] );
		t.strictEqual( idx !== -1, true, 'contains property: '+expected[i].toString() );
	}
	idx = indexOf( actual, 'b' );
	t.strictEqual( idx, -1, 'does not contain property' );
	if ( hasSymbols ) {
		idx = indexOf( actual, symbols[ 1 ] );
		t.strictEqual( idx, -1, 'does not contain property' );
	}
	t.end();
});

tape( 'the function returns an array of an object\'s own and inherited non-enumerable property names and symbols (mock)', function test( t ) {
	var nonEnumerablePropertiesIn;
	var expected;
	var symbols;
	var actual;
	var obj;
	var idx;
	var i;

	nonEnumerablePropertiesIn = proxyquire( './../lib/main.js', {
		'@stdlib/utils/property-symbols': propertySymbols
	});

	symbols = [ '__a__', '__b__', '__c__' ];

	function Foo() {
		defineProperty( this, 'a', {
			'configurable': true,
			'enumerable': false,
			'writable': false,
			'value': 'a'
		});
		defineProperty( this, 'b', {
			'configurable': true,
			'enumerable': true,
			'writable': false,
			'value': 'b'
		});
		defineProperty( this, symbols[ 0 ], {
			'configurable': true,
			'enumerable': false,
			'writable': true,
			'value': 'a'
		});
		defineProperty( this, symbols[ 1 ], {
			'configurable': true,
			'enumerable': true,
			'writable': true,
			'value': 'b'
		});
		return this;
	}

	defineProperty( Foo.prototype, 'b', {
		'configurable': true,
		'enumerable': false,
		'writable': true,
		'value': 'c'
	});
	defineProperty( Foo.prototype, 'c', {
		'configurable': true,
		'enumerable': false,
		'writable': true,
		'value': 'c'
	});
	defineProperty( Foo.prototype, 'd', {
		'configurable': true,
		'enumerable': true,
		'writable': false,
		'value': 'd'
	});
	defineProperty( Foo.prototype, symbols[ 1 ], {
		'configurable': true,
		'enumerable': false,
		'writable': true,
		'value': 'b'
	});
	defineProperty( Foo.prototype, symbols[ 2 ], {
		'configurable': true,
		'enumerable': true,
		'writable': true,
		'value': 'c'
	});

	obj = new Foo();

	expected = [ 'a', 'c', symbols[ 0 ] ];
	actual = nonEnumerablePropertiesIn( obj );

	t.strictEqual( actual.length >= expected.length, true, 'has expected length' );
	for ( i = 0; i < expected.length; i++ ) {
		idx = indexOf( actual, expected[ i ] );
		t.strictEqual( idx !== -1, true, 'contains property: '+expected[i].toString() );
	}
	idx = indexOf( actual, 'b' );
	t.strictEqual( idx, -1, 'does not contain property' );

	idx = indexOf( actual, symbols[ 1 ] );
	t.strictEqual( idx, -1, 'does not contain property' );

	t.end();

	function propertySymbols( value ) {
		if ( value === obj ) {
			return symbols.slice( 0, 2 );
		}
		if ( value === Foo.prototype ) {
			return symbols.slice( 1 );
		}
		return [];
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
		actual = nonEnumerablePropertiesIn( values[ i ] );
		t.deepEqual( actual, expected, 'returns expected value when provided '+values[ i ] );
	}
	t.end();
});
