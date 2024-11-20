/**
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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
var isStringArray = require( '@stdlib/assert/is-string-array' ).primitives;
var aliases = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof aliases, 'function', 'main export is a function' );
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
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			aliases( value );
		};
	}
});

tape( 'the function returns a list of aliases', function test( t ) {
	var o1;
	var o2;

	o1 = aliases();
	t.strictEqual( isStringArray( o1 ), true, 'returns an array of strings' );

	o2 = aliases();
	t.strictEqual( isStringArray( o2 ), true, 'returns an array of strings' );
	t.notEqual( o1, o2, 'returns new reference' );

	t.end();
});

tape( 'the function supports filtering the list of aliases according to a provided namespace filter', function test( t ) {
	var filter;
	var o1;
	var o2;
	var o3;

	// Note: the following is intentional, as a build process workaround during individual package publishing...
	filter = '@stdlib/';
	filter += 'math/base/special';

	o1 = aliases( filter );
	t.strictEqual( isStringArray( o1 ), true, 'returns an array of strings' );

	o2 = aliases( filter );
	t.strictEqual( isStringArray( o2 ), true, 'returns an array of strings' );
	t.notEqual( o1, o2, 'returns new reference' );

	o3 = aliases( 'nonexistent_namespace' );
	t.deepEqual( o3, [], 'returns expected value' );

	t.end();
});
