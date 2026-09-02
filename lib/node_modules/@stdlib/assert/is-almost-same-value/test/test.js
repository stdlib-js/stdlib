/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
var EPS_F64 = require( '@stdlib/constants/float64/eps' );
var EPS_F32 = require( '@stdlib/constants/float32/eps' );
var Number = require( '@stdlib/number/ctor' );
var Boolean = require( '@stdlib/boolean/ctor' );
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var Complex64 = require( '@stdlib/complex/float32/ctor' );
var isAlmostSameValue = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isAlmostSameValue, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `true` if provided two arguments which are the same value irrespective of the specified number of ULPs', function test( t ) {
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
		t.strictEqual( isAlmostSameValue( values[ i ], values[ i ], 0 ), true, 'returns expected value' );
		t.strictEqual( isAlmostSameValue( values[ i ], values[ i ], 1 ), true, 'returns expected value' );
	}

	t.strictEqual( isAlmostSameValue( new Complex128( 5.0, 3.0 ), new Complex128( 5.0, 3.0 ), 0 ), true, 'returns expected value' );
	t.strictEqual( isAlmostSameValue( new Complex128( 5.0, 3.0 ), new Complex128( 5.0, 3.0 ), 1 ), true, 'returns expected value' );

	t.strictEqual( isAlmostSameValue( new Complex64( 5.0, 3.0 ), new Complex64( 5.0, 3.0 ), 0 ), true, 'returns expected value' );
	t.strictEqual( isAlmostSameValue( new Complex64( 5.0, 3.0 ), new Complex64( 5.0, 3.0 ), 1 ), true, 'returns expected value' );

	t.strictEqual( isAlmostSameValue( new Complex64( 5.0, 3.0 ), new Complex128( 5.0, 3.0 ), 0 ), true, 'returns expected value' );
	t.strictEqual( isAlmostSameValue( new Complex64( 5.0, 3.0 ), new Complex128( 5.0, 3.0 ), 1 ), true, 'returns expected value' );

	t.strictEqual( isAlmostSameValue( new Complex128( 5.0, 3.0 ), new Complex64( 5.0, 3.0 ), 0 ), true, 'returns expected value' );
	t.strictEqual( isAlmostSameValue( new Complex128( 5.0, 3.0 ), new Complex64( 5.0, 3.0 ), 1 ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns `true` if provided two arguments which are approximately the same value within a specified number of ULPs', function test( t ) {
	t.strictEqual( isAlmostSameValue( 1.0, 1.0+EPS_F64, 1 ), true, 'returns expected value' );
	t.strictEqual( isAlmostSameValue( 1.0+EPS_F64, 1.0, 1 ), true, 'returns expected value' );
	t.strictEqual( isAlmostSameValue( 1.0, 1.0+EPS_F64+EPS_F64, 2 ), true, 'returns expected value' );

	t.strictEqual( isAlmostSameValue( new Complex128( 1.0, 3.0 ), new Complex128( 1.0+EPS_F64, 3.0 ), 1 ), true, 'returns expected value' );
	t.strictEqual( isAlmostSameValue( new Complex64( 1.0, 3.0 ), new Complex64( 1.0+EPS_F32, 3.0 ), 1 ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns `false` if provided two arguments which are not approximately the same value within a specified number of ULPs', function test( t ) {
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
		t.strictEqual( isAlmostSameValue( a[ i ], b[ i ], 1 ), false, 'returns expected value' );
	}

	t.strictEqual( isAlmostSameValue( 1.0, 1.0+EPS_F64+EPS_F64, 1 ), false, 'returns expected value' );
	t.strictEqual( isAlmostSameValue( 1.0+EPS_F64+EPS_F64, 1.0, 1 ), false, 'returns expected value' );

	t.strictEqual( isAlmostSameValue( new Complex128( 1.0, 3.0 ), new Complex128( 1.0+EPS_F64+EPS_F64, 3.0 ), 1 ), false, 'returns expected value' );
	t.strictEqual( isAlmostSameValue( new Complex64( 1.0, 3.0 ), new Complex64( 1.0+EPS_F32+EPS_F32, 3.0 ), 1 ), false, 'returns expected value' );

	t.end();
});

tape( 'the function treats `NaNs` as the same value', function test( t ) {
	var expected;
	var a;
	var b;
	var i;

	a = [
		NaN,
		NaN,
		new Complex128( NaN, 3.0 ),
		new Complex64( 5.0, NaN ),
		new Complex128( NaN, NaN ),
		new Complex64( NaN, NaN )
	];
	b = [
		NaN,
		1.0,
		new Complex128( 1.0, 2.0 ),
		new Complex64( 3.0, 4.0 ),
		new Complex128( NaN, NaN ),
		new Complex64( NaN, NaN )
	];
	expected = [
		true,
		false,
		false,
		false,
		true,
		true
	];
	for ( i = 0; i < a.length; i++ ) {
		t.strictEqual( isAlmostSameValue( a[ i ], b[ i ], 1 ), expected[ i ], 'returns expected value' );
	}

	t.end();
});

tape( 'the function distinguishes between signed zeros when the specified number of ULPs is zero', function test( t ) {
	t.strictEqual( isAlmostSameValue( -0.0, 0.0, 0 ), false, 'returns expected value' );
	t.strictEqual( isAlmostSameValue( 0.0, -0.0, 1 ), true, 'returns expected value' );

	t.strictEqual( isAlmostSameValue( new Complex128( -0.0, 3.0 ), new Complex128( 0.0, 3.0 ), 0 ), false, 'returns expected value' );
	t.strictEqual( isAlmostSameValue( new Complex64( -0.0, 3.0 ), new Complex64( 0.0, 3.0 ), 1 ), true, 'returns expected value' );

	t.end();
});
