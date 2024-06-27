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

/* eslint-disable no-new-wrappers */

'use strict';

// MODULES //

var tape = require( 'tape' );
var Number = require( '@stdlib/number/ctor' );
var Boolean = require( '@stdlib/boolean/ctor' );
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var Complex64 = require( '@stdlib/complex/float32/ctor' );
var isSameValue = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isSameValue, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `true` if provided two arguments which are the same value', function test( t ) {
	var values;
	var i;

	values = [
		'',
		'beep',
		5,
		3.14,
		-3.14,
		0.0,
		-0.0,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {},
		new Date(),
		/.*/,
		new Complex128( 5.0, 3.0 ),
		new Complex64( 5.0, 2.0 )
	];
	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( isSameValue( values[ i ], values[ i ] ), true, 'returns true when provided '+values[ i ] );
	}

	t.strictEqual( isSameValue( new Complex128( 5.0, 3.0 ), new Complex128( 5.0, 3.0 ) ), true, 'returns expected value' );
	t.strictEqual( isSameValue( new Complex64( 5.0, 3.0 ), new Complex64( 5.0, 3.0 ) ), true, 'returns expected value' );
	t.strictEqual( isSameValue( new Complex64( 5.0, 3.0 ), new Complex128( 5.0, 3.0 ) ), true, 'returns expected value' );
	t.strictEqual( isSameValue( new Complex128( 5.0, 3.0 ), new Complex64( 5.0, 3.0 ) ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns `false` if not provided two arguments which are the same value', function test( t ) {
	var a;
	var b;
	var i;

	a = [
		'',
		'beep',
		new String( 'beep' ),
		5,
		3.14,
		-3.14,
		0.0,
		-0.0,
		new Number( 5 ),
		true,
		false,
		new Boolean( true ),
		null,
		void 0,
		[],
		{},
		function noop() {},
		new Date(),
		/.*/,
		new Complex128( 5.0, 3.0 ),
		new Complex64( 5.0, 2.0 )
	];
	b = [
		'abc',
		'boop',
		new String( 'beep' ),
		-5,
		-3.14,
		3.14,
		-0.0,
		0.0,
		new Number( 5 ),
		false,
		true,
		new Boolean( true ),
		void 0,
		null,
		[],
		{},
		function noop() {},
		new Date(),
		/.*/,
		new Complex128( -5.0, 3.0 ),
		new Complex64( 5.0, -2.0 )
	];
	for ( i = 0; i < a.length; i++ ) {
		t.strictEqual( isSameValue( a[ i ], b[ i ] ), false, 'returns false when provided '+a[ i ]+' and '+b[ i ] );
	}
	t.end();
});
