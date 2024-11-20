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
var isObject = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isObject, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `true` if provided an object', function test( t ) {
	t.equal( isObject( {} ), true, 'returns true' );
	t.equal( isObject( Object.create( null ) ), true, 'returns true' );
	t.end();
});

tape( 'the function returns `true` when provided object instances', function test( t ) {
	t.equal( isObject( new Date() ), true, 'returns true when provided a Date object' );
	t.equal( isObject( /.*/ ), true, 'returns true when provided a regular expression' );
	t.end();
});

tape( 'the function returns `false` if not provided an object', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		void 0,
		null,
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.equal( isObject( values[i] ), false, 'returns false when provided '+values[i] );
	}
	t.end();
});
