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
var Int8Array = require( '@stdlib/array/int8' );
var Buffer = require( '@stdlib/buffer/ctor' );
var Number = require( '@stdlib/number/ctor' );
var Boolean = require( '@stdlib/boolean/ctor' );
var Fcn = require( '@stdlib/function/ctor' );
var functionName = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof functionName, 'function', 'export is a function' );
	t.end();
});

tape( 'if not provided a function, the function will throw a type error', function test( t ) {
	var values;
	var i;

	values = [
		'beep',
		5,
		NaN,
		null,
		true,
		void 0,
		[],
		{}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a TypeError when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			functionName( value );
		};
	}
});

tape( 'the function returns a function\'s name', function test( t ) {
	function beep() {
		return 'boop';
	}
	t.equal( functionName( beep ), 'beep', 'returns beep' );
	t.equal( functionName( Date ), 'Date', 'returns Date' );
	t.equal( functionName( Buffer ), 'Buffer', 'returns Buffer' );
	t.equal( functionName( Number ), 'Number', 'returns Number' );
	t.equal( functionName( Math.sqrt ), 'sqrt', 'returns sqrt' ); // eslint-disable-line stdlib/no-builtin-math
	t.equal( functionName( Int8Array ), 'Int8Array', 'returns Int8Array' );
	t.equal( functionName( Boolean ), 'Boolean', 'returns Boolean' );
	t.equal( functionName( String ), 'String', 'returns String' );
	t.equal( functionName( Fcn ), 'Function', 'returns Function' );
	t.end();
});

tape( 'if provided an anonymous function, the function returns an empty string or "anonymous" (ES2015 and some browsers)', function test( t ) {
	var name;

	/*
	* See
	*   - http://www.2ality.com/2015/09/function-names-es6.html
	*   - https://bugs.webkit.org/show_bug.cgi?id=7726
	*   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/name (which claims that functions created using the `Function` constructor should have an empty string as a name)
	*     - "Functions created with the syntax new Function(...) or just Function(...) have their name property set to an empty string."
	*
	* In Node.js <v6.0, the returned name is an empty string. For Node.js v6.0, the returned name when using the `Function` constructor is `"anonymous"`.
	*/

	name = functionName( function () {} ); // eslint-disable-line func-names
	t.equal( check( name ), true, 'returns an empty string (or "anonymous")' );

	name = functionName( new Fcn('a', 'b', 'return') );
	t.equal( check( name ), true, 'returns an empty string (or "anonymous")' );

	t.end();

	function check() {
		if ( name === '' || name === 'anonymous' ) {
			return true;
		}
		return false;
	}
});

tape( 'the function supports returning a function name in ES5 and earlier environments', function test( t ) {
	var functionName = proxyquire( './../lib/main.js', {
		'@stdlib/assert/has-function-name-support': stub
	});
	t.equal( functionName( beep ), 'beep', 'returns beep' );
	t.end();

	function beep() {
		return 'boop';
	}

	// Earlier environments did not have a `name` property:
	function stub() {
		return false;
	}
});
