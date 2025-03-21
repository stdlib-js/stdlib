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
var FLOAT64_MAX = require( '@stdlib/constants/float64/max' );
var ctor = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof ctor, 'function', 'main export is a function' );
	t.end();
});

tape( 'an instance throws an error if provided an invalid `bufferSize` value', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5,
		0,
		3.14,
		NaN,
		void 0,
		true,
		false,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var chart = ctor();
			chart.bufferSize = value;
		};
	}
});

tape( 'an instance throws an error if provided a `bufferSize` which is less than the number of data elements', function test( t ) {
	var values;
	var i;

	values = [
		1,
		2,
		3,
		4,
		5
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), RangeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var chart = ctor({
				'data': [ 1, 2, 3, 4, 5, 6 ]
			});
			chart.bufferSize = value;
		};
	}
});

tape( 'an instance supports setting and getting the property value', function test( t ) {
	var chart;

	chart = ctor({
		'bufferSize': 10
	});
	t.strictEqual( chart.bufferSize, 10, 'returns expected value' );

	chart.bufferSize = 20;
	t.strictEqual( chart.bufferSize, 20, 'returns expected value' );

	chart.bufferSize = 30;
	t.strictEqual( chart.bufferSize, 30, 'returns expected value' );

	chart.bufferSize = null;
	t.strictEqual( chart.bufferSize, FLOAT64_MAX, 'returns expected value' );

	t.end();
});

tape( 'setting the `bufferSize` property to a new value triggers a `change` event', function test( t ) {
	var chart;

	chart = ctor({
		'bufferSize': 10
	});

	chart.on( 'change', onChange );
	chart.bufferSize = 30;

	function onChange() {
		t.ok( true, 'triggers event' );
		t.end();
	}
});

tape( 'setting the `bufferSize` property to its current value does not trigger a `change` event', function test( t ) {
	var chart;

	chart = ctor({
		'bufferSize': 10
	});

	chart.on( 'change', onChange );
	chart.bufferSize = 10;

	t.ok( true, 'does not trigger event' );
	t.end();

	function onChange() {
		t.ok( false, 'should not trigger event' );
	}
});
