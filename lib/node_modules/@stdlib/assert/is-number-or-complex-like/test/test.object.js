/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var Number = require( '@stdlib/number/ctor' );
var isNumberOrComplexLike = require( './../lib/object.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isNumberOrComplexLike, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `true` if provided a number object', function test( t ) {
	t.strictEqual( isNumberOrComplexLike( new Number( 5 ) ), true, 'returns expected value' );
	t.strictEqual( isNumberOrComplexLike( new Number( NaN ) ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `false` if provided a primitive number or complex number-like object', function test( t ) {
	t.strictEqual( isNumberOrComplexLike( 3.14 ), false, 'returns expected value' );
	t.strictEqual( isNumberOrComplexLike( NaN ), false, 'returns expected value' );
	t.strictEqual( isNumberOrComplexLike( new Complex128( 3.0, 5.0 ) ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `false` if not provided a number or complex number-like object', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		null,
		true,
		void 0,
		[],
		{},
		new Date(),
		/./,
		new RegExp( '.' ), // eslint-disable-line prefer-regex-literals
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( isNumberOrComplexLike( values[i] ), false, 'returns expected value when provided '+values[i] );
	}
	t.end();
});
