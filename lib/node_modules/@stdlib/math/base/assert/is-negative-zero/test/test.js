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
var isNegativeZero = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isNegativeZero, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `true` if provided `-0`', function test( t ) {
	t.equal( isNegativeZero( -0.0 ), true, 'returns true' );
	t.end();
});

tape( 'the function returns `false` if provided `+0`', function test( t ) {
	t.equal( isNegativeZero( +0.0 ), false, 'returns false' );
	t.end();
});

tape( 'the function returns `false` if not provided `-0`', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5.0,
		-1.0,
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
		t.equal( isNegativeZero( values[i] ), false, 'returns false if provided ' + values[ i ] );
	}
	t.end();
});
