/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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
var ms2duration = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof ms2duration, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided a value which is not a nonnegative integer', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5.3,
		-5,
		'abc',
		NaN,
		null,
		true,
		void 0,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			ms2duration( value );
		};
	}
});

tape( 'the function returns `0ms` when provided `0`', function test( t ) {
	var duration = ms2duration( 0 );
	t.equal( duration, '0ms', 'returns 0ms' );
	t.end();
});

tape( 'the function converts milliseconds to a string duration (seconds)', function test( t ) {
	t.equal( ms2duration( 1000 ), '1s', 'converts 1s' );
	t.equal( ms2duration( 2000 ), '2s', 'converts 2s' );
	t.equal( ms2duration( 3000 ), '3s', 'converts 3s' );
	t.equal( ms2duration( 4000 ), '4s', 'converts 4s' );
	t.equal( ms2duration( 5000 ), '5s', 'converts 5s' );
	t.equal( ms2duration( 6000 ), '6s', 'converts 6s' );
	t.equal( ms2duration( 7000 ), '7s', 'converts 7s' );
	t.equal( ms2duration( 8000 ), '8s', 'converts 8s' );
	t.equal( ms2duration( 9000 ), '9s', 'converts 9s' );
	t.end();
});

tape( 'the function converts milliseconds to a string duration (minutes)', function test( t ) {
	t.equal( ms2duration( 60000 ), '1m', 'converts 1m' );
	t.equal( ms2duration( 120000 ), '2m', 'converts 2m' );
	t.equal( ms2duration( 180000 ), '3m', 'converts 3m' );
	t.equal( ms2duration( 240000 ), '4m', 'converts 4m' );
	t.equal( ms2duration( 300000 ), '5m', 'converts 5m' );
	t.equal( ms2duration( 360000 ), '6m', 'converts 6m' );
	t.equal( ms2duration( 420000 ), '7m', 'converts 7m' );
	t.equal( ms2duration( 480000 ), '8m', 'converts 8m' );
	t.equal( ms2duration( 540000 ), '9m', 'converts 9m' );
	t.end();
});

tape( 'the function converts milliseconds to a string duration (hours)', function test( t ) {
	t.equal( ms2duration( 3600000 ), '1h', 'converts 1h' );
	t.equal( ms2duration( 7200000 ), '2h', 'converts 2h' );
	t.equal( ms2duration( 10800000 ), '3h', 'converts 3h' );
	t.equal( ms2duration( 14400000 ), '4h', 'converts 4h' );
	t.equal( ms2duration( 18000000 ), '5h', 'converts 5h' );
	t.equal( ms2duration( 21600000 ), '6h', 'converts 6h' );
	t.equal( ms2duration( 25200000 ), '7h', 'converts 7h' );
	t.equal( ms2duration( 28800000 ), '8h', 'converts 8h' );
	t.equal( ms2duration( 32400000 ), '9h', 'converts 9h' );
	t.end();
});

tape( 'the function converts milliseconds to a string duration (days)', function test( t ) {
	t.equal( ms2duration( 86400000 ), '1d', 'converts 1d' );
	t.equal( ms2duration( 172800000 ), '2d', 'converts 2d' );
	t.equal( ms2duration( 259200000 ), '3d', 'converts 3d' );
	t.equal( ms2duration( 345600000 ), '4d', 'converts 4d' );
	t.equal( ms2duration( 432000000 ), '5d', 'converts 5d' );
	t.equal( ms2duration( 518400000 ), '6d', 'converts 6d' );
	t.equal( ms2duration( 604800000 ), '7d', 'converts 7d' );
	t.end();
});

tape( 'the function converts a value in milliseconds to a string duration', function test( t ) {
	t.equal( ms2duration( 1234 ), '1s234ms', 'converts 1s234ms' );
	t.equal( ms2duration( 12345 ), '12s345ms', 'converts 12s345ms' );
	t.equal( ms2duration( 123456 ), '2m3s456ms', 'converts 2m3s456ms' );
	t.equal( ms2duration( 1234567 ), '20m34s567ms', 'converts 20m34s567ms' );
	t.equal( ms2duration( 12345678 ), '3h25m45s678ms', 'converts 3h25m45s678ms' );
	t.end();
});
