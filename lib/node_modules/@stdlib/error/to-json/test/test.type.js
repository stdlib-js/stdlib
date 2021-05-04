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
var typeName = require( './../lib/type.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof typeName, 'function', 'export is a function' );
	t.end();
});

tape( 'if provided an error or error subclass, the function returns the closest error type', function test( t ) {
	var expected;
	var values;
	var i;

	values = [
		new Error( 'beep' ),
		new SyntaxError( 'boop' ),
		new TypeError( 'bop' ),
		new URIError( 'bap' ),
		new ReferenceError( 'bip' ),
		new EvalError( 'bup' ),
		new RangeError( 'bep' )
	];

	expected = [
		'Error',
		'SyntaxError',
		'TypeError',
		'URIError',
		'ReferenceError',
		'EvalError',
		'RangeError'
	];

	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( typeName( values[i] ), expected[ i ], 'returns the constructor name: ' + expected[ i ] );
	}
	t.end();
});

tape( 'if provided an error from a different realm, the function returns the closest error type', function test( t ) {
	var typeName;
	var expected;
	var values;
	var i;

	typeName = proxyquire( './../lib/type.js', {
		'@stdlib/assert/instance-of': instanceOf
	});

	values = [
		new Error( 'beep' ),
		new SyntaxError( 'boop' ),
		new TypeError( 'bop' ),
		new URIError( 'bap' ),
		new ReferenceError( 'bip' ),
		new EvalError( 'bup' ),
		new RangeError( 'bep' )
	];

	expected = [
		'Error',
		'SyntaxError',
		'TypeError',
		'URIError',
		'ReferenceError',
		'EvalError',
		'RangeError'
	];

	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( typeName( values[i] ), expected[ i ], 'returns the constructor name: ' + expected[ i ] );
	}
	t.end();

	function instanceOf() {
		// Mocks comparing values from different realms...
		return false;
	}
});

tape( 'if not provided an error, the function returns `undefined`', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		NaN,
		5,
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {},
		function error() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( typeName( values[i] ), void 0, 'returns expected value' );
	}
	t.end();
});
