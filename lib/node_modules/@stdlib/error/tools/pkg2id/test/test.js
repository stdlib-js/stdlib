/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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
var replace = require( '@stdlib/string/replace' );
var pkg2id = require( './../lib' );


// VARIABLES //

var RE_ID_FORMAT = /^[a-zA-Z0-9]+$/;
var PKG_LIST = [
	'@stdlib/math-base-special-sin',
	'@stdlib/math-base-special-cos',
	'@stdlib/math-base-special-tan',
	'@stdlib/math-base-special-asin'
];


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof pkg2id, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if not provided a string', function test( t ) {
	var values;
	var i;

	values = [
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			pkg2id( value );
		};
	}
});

tape( 'the function returns a three-character identifier containing letters and digits (internal package name)', function test( t ) {
	var actual;
	var pkg;
	var i;

	for ( i = 0; i < PKG_LIST.length; i++ ) {
		pkg = replace( PKG_LIST[ i ], '-', '/' );
		actual = pkg2id( pkg );
		t.strictEqual( typeof actual, 'string', 'returns a string' );
		t.strictEqual( actual.length, 3, 'returns a three-character string' );
		t.ok( actual.match( RE_ID_FORMAT ), 'returns a string containing only letters and digits' );
	}
	t.end();
});

tape( 'the function returns a three-character identifier containing letters and digits (standalone package name)', function test( t ) {
	var actual;
	var pkg;
	var i;

	for ( i = 0; i < PKG_LIST.length; i++ ) {
		pkg = PKG_LIST[ i ];
		actual = pkg2id( pkg );
		t.strictEqual( typeof actual, 'string', 'returns a string' );
		t.strictEqual( actual.length, 3, 'returns a three-character string' );
		t.ok( actual.match( RE_ID_FORMAT ), 'returns a string containing only letters and digits' );
	}
	t.end();
});

tape( 'the function returns `null` if provided an unrecognized package name', function test( t ) {
	var values;
	var i;

	values = [
		'adfkaljdfdsafs',
		'adklfadjflajdslfjalsdf',
		'adflkajdlkfjasdlkfjsadlkfjlasdjflsdjfla'
	];
	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( pkg2id( values[ i ] ), null, 'returns expected value' );
	}
	t.end();
});
