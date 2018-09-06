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

/* eslint-disable object-curly-newline */

'use strict';

// MODULES //

var tape = require( 'tape' );
var hasSymbolSupport = require( '@stdlib/assert/has-symbol-support' );
var Symbol = require( '@stdlib/symbol/ctor' );
var hasProp = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof hasProp, 'function', 'export is a function' );
	t.end();
});

tape( 'the function returns `false` if provided `null` or `undefined` for the first argument', function test( t ) {
	var bool;

	bool = hasProp( null, 'beep' );
	t.strictEqual( bool, false, 'returns false when provided null' );

	bool = hasProp( void 0, 'beep' );
	t.strictEqual( bool, false, 'returns false when provided undefined' );

	t.end();
});

tape( 'the function returns `true` if an object has a specified property (either own or inherited)', function test( t ) {
	var bool;

	bool = hasProp( { 'a': 'b' }, 'a' );
	t.strictEqual( bool, true, 'returns true' );

	bool = hasProp( [ 1, 2, 3 ], '1' );
	t.strictEqual( bool, true, 'returns true' );

	bool = hasProp( [ 1, 2, 3 ], 1 );
	t.strictEqual( bool, true, 'returns true' );

	bool = hasProp( {}, 'hasOwnProperty' );
	t.strictEqual( bool, true, 'returns true when provided a prototype property' );

	t.end();
});

tape( 'the function returns `false` if an object does not have a specified property (either own or inherited)', function test( t ) {
	var bool;

	bool = hasProp( { 'a': 'b' }, 'c' );
	t.strictEqual( bool, false, 'returns false' );

	bool = hasProp( { 'a': 'b' }, null );
	t.strictEqual( bool, false, 'returns false' );

	t.end();
});

tape( 'values are coerced to objects', function test( t ) {
	var bool;

	bool = hasProp( 'beep', 'length' );
	t.strictEqual( bool, true, 'returns true' );

	t.end();
});

tape( 'non-symbol property values are coerced to strings', function test( t ) {
	var bool;

	bool = hasProp( { 'null': false }, null );
	t.strictEqual( bool, true, 'returns true' );

	bool = hasProp( { '[object Object]': false }, {} );
	t.strictEqual( bool, true, 'returns true' );

	t.end();
});

tape( 'the function supports symbols', function test( t ) {
	var bool;
	var obj;
	var s;

	if ( hasSymbolSupport() ) {
		obj = {};
		s = Symbol( 'foo' );
		obj[ s ] = true;
		bool = hasProp( obj, s );
		t.strictEqual( bool, true, 'returns true' );
	} else {
		t.pass( 'environment does not support symbols' );
	}
	t.end();
});
