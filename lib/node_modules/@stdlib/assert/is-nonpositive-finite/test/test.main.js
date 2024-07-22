/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
var NINF = require( '@stdlib/constants/float64/ninf' );
var Number = require( '@stdlib/number/ctor' );
var isNonPositiveFinite = require( './../lib/main.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isNonPositiveFinite, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `true` if provided a number having a nonpositive finite number value', function test( t ) {
	t.equal( isNonPositiveFinite( -5.0 ), true, 'returns true' );
	t.equal( isNonPositiveFinite( new Number( -5.0 ) ), true, 'returns true' );
	t.end();
});

tape( 'the function returns `false` if not provided a number having a nonpositive finite number value', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		3.14,
		NINF,
		1.0,
		null,
		true,
		void 0,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.equal( isNonPositiveFinite( values[i] ), false, 'returns false when provided '+values[i] );
	}
	t.end();
});
