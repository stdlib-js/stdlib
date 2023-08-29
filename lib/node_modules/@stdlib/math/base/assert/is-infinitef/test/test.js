/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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
var PINF = require( '@stdlib/constants/float32/pinf' );
var NINF = require( '@stdlib/constants/float32/ninf' );
var isInfinitef = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isInfinitef, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `true` if provided `+infinity`', function test( t ) {
	t.equal( isInfinitef( PINF ), true, 'returns true' );
	t.end();
});

tape( 'the function returns `true` if provided `-infinity`', function test( t ) {
	t.equal( isInfinitef( NINF ), true, 'returns true' );
	t.end();
});

tape( 'the function returns `false` if not provided an infinite number', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5.0,
		-1.0e38,
		4.0e-38,
		NaN,
		true,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.equal( isInfinitef( values[i] ), false, 'returns false' );
	}
	t.end();
});
