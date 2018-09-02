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
var hasSymbolSupport = require( '@stdlib/assert/has-symbol-support' );
var Symbol = require( '@stdlib/symbol/ctor' );
var getOwnPropertySymbols = require( './../lib' );


// VARIABLES //

var opts = {
	'skip': ( typeof Object.getOwnPropertySymbols === 'undefined' )
};


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof getOwnPropertySymbols, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns an array of symbol properties', opts, function test( t ) {
	var expected;
	var actual;
	var obj;
	var s1;
	var s2;

	if ( hasSymbolSupport() ) {
		obj = {};

		s1 = Symbol( 'beep' );
		s2 = Symbol( 'foo' );

		obj[ s1 ] = 'boop';
		obj[ s2 ] = 'bar';

		actual = getOwnPropertySymbols( obj );
		expected = [ s1, s2 ];

		t.deepEqual( actual, expected, 'returns expected value' );
	} else {
		t.pass( 'environment does not support symbols' );
	}
	t.end();
});

tape( 'the function returns an empty array if an object does not have symbol properties', opts, function test( t ) {
	var actual;
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
		[],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		actual = getOwnPropertySymbols( values[ i ] );
		t.deepEqual( actual, [], 'returns expected results when provided '+values[i] );
	}
	t.end();
});
