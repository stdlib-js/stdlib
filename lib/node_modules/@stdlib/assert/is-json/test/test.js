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
var isJSON = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isJSON, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `true` if provided a parseable JSON string', function test( t ) {
	var bool;

	bool = isJSON( '{"a":5}' );
	t.ok( bool );

	bool = isJSON( '{}' );
	t.ok( bool );

	bool = isJSON( '[]' );
	t.ok( bool );
	t.end();
});

tape( 'the function returns `false` if not provided a parseable JSON string', function test( t ) {
	var values;
	var i;

	values = [
		5,
		'5',
		'true',
		'null',
		'NaN',
		'[',
		'{',
		']',
		'}',
		'[{',
		']}',
		'{[',
		'}]',
		null,
		void 0,
		true,
		NaN,
		function noop() {},
		[],
		{},
		'{a":5}',
		new String( '{"a":5}' )
	];

	for ( i = 0; i < values.length; i++ ) {
		t.equal( isJSON( values[i] ), false, 'returns false when provided '+values[i] );
	}
	t.end();
});
