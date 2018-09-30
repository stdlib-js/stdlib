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
var Symbol = require( '@stdlib/symbol/ctor' );
var hasSymbols = require( '@stdlib/assert/has-symbol-support' );
var tryToString = require( './../lib/try2tostring.js' );


// VARIABLES //

var opts = {
	'skip': !hasSymbols()
};


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof tryToString, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `false` if not provided a symbol', function test( t ) {
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
		t.strictEqual( tryToString( values[i] ), false, 'returns false when provided '+values[i] );
	}
	t.end();
});

tape( 'the function returns `false` if provided an empty object without a prototype', function test( t ) {
	var o = Object.create( null );
	t.strictEqual( tryToString( o ), false, 'returns false' );
	t.end();
});

tape( 'the function returns `false` if provided an object whose primitive value is a symbol', opts, function test( t ) {
	var o = Object.create( null );
	o.valueOf = valueOf;

	t.strictEqual( tryToString( o ), false, 'returns false' );
	t.end();

	function valueOf() {
		return Symbol( 'beep' );
	}
});

tape( 'the function returns `true` if able to successfully call a Symbol method', opts, function test( t ) {
	var tryToString;
	var o;

	tryToString = proxyquire( './../lib/try2tostring.js', {
		'./tostring.js': toStr
	});

	o = Object.create( null );
	o.valueOf = valueOf;

	t.strictEqual( tryToString( o ), true, 'returns true' );
	t.end();

	function valueOf() {
		return Symbol( 'beep' );
	}

	function toStr() {
		return 'Symbol(beep)';
	}
});

tape( 'if an environment supports symbols, the function returns `true`', opts, function test( t ) {
	t.strictEqual( tryToString( Symbol( 'beep' ) ), true, 'returns true' );
	t.strictEqual( tryToString( Object( Symbol( 'beep' ) ) ), true, 'returns true' );
	t.end();
});
