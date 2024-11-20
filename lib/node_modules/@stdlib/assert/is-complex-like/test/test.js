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
var Complex64 = require( '@stdlib/complex/float32/ctor' );
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var isComplexLike = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isComplexLike, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `true` if provided a complex number-like object', function test( t ) {
	var v;

	v = new Complex64( 3.0, 2.0 );
	t.equal( isComplexLike( v ), true, 'returns true' );

	v = new Complex128( 3.0, 2.0 );
	t.equal( isComplexLike( v ), true, 'returns true' );

	v = {
		're': 1.0,
		'im': -1.0
	};
	t.equal( isComplexLike( v ), true, 'returns true' );
	t.end();
});

tape( 'the function returns `false` if not provided a complex number-like object', function test( t ) {
	var values;
	var i;

	values = [
		5,
		'5',
		null,
		void 0,
		NaN,
		true,
		false,
		[],
		[ 1.0, -1.0 ],
		{},
		{
			're': 1.0
		},
		{
			'im': -1.0
		},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.equal( isComplexLike( values[i] ), false, 'returns false when provided '+values[i] );
	}
	t.end();
});
