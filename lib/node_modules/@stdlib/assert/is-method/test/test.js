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
var noop = require( '@stdlib/utils/noop' );
var isMethod = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isMethod, 'function', 'export is a function' );
	t.end();
});

tape( 'the function returns `false` if provided `null` or `undefined` for the first argument (native throws)', function test( t ) {
	var bool;

	bool = isMethod( null, 'toString' );
	t.strictEqual( bool, false, 'returns false when provided null' );

	bool = isMethod( void 0, 'toString' );
	t.strictEqual( bool, false, 'returns false when provided undefined' );

	t.end();
});

tape( 'the function returns `true` if an object has a specified method name', function test( t ) {
	var bool;

	bool = isMethod( { 'a': noop }, 'a' );
	t.strictEqual( bool, true, 'returns true' );

	t.end();
});

tape( 'the function returns `false` if an object does not have a specified own method name', function test( t ) {
	var bool;

	bool = isMethod( { 'a': 'b' }, 'a' );
	t.strictEqual( bool, false, 'returns false' );

	bool = isMethod( { 'a': 'b' }, null );
	t.strictEqual( bool, false, 'returns false' );

	t.end();
});

tape( 'the function returns `false` if provided a prototype property', function test( t ) {
	var bool;

	bool = isMethod( {}, 'toString' );
	t.strictEqual( bool, false, 'returns false when provided a prototype property' );

	t.end();
});

tape( 'values are coerced to objects', function test( t ) {
	var bool;

	bool = isMethod( 'beep', 'toString' );
	t.strictEqual( bool, false, 'returns false' );

	t.end();
});

tape( 'property values are coerced to strings', function test( t ) {
	var bool;

	bool = isMethod( { 'null': noop }, null );
	t.strictEqual( bool, true, 'returns true' );

	bool = isMethod( { '[object Object]': noop }, {} );
	t.strictEqual( bool, true, 'returns true' );

	t.end();
});
