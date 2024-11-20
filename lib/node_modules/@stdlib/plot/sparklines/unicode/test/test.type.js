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
var ctor = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof ctor, 'function', 'main export is a function' );
	t.end();
});

tape( 'an instance throws an error if provided an invalid `type` value', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		'COLUMN',
		'WIN/LOSS',
		'win/loss',
		'up/down',
		'Line',
		5,
		NaN,
		null,
		void 0,
		true,
		false,
		{},
		[],
		[ 'beep' ],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var chart = ctor();
			chart.type = value;
		};
	}
});

tape( 'an instance supports setting and getting the property value', function test( t ) {
	var chart;

	chart = ctor({
		'type': 'win-loss'
	});
	t.strictEqual( chart.type, 'win-loss', 'returns expected value' );

	chart.type = 'line';
	t.strictEqual( chart.type, 'line', 'returns expected value' );

	t.end();
});

tape( 'setting the `type` property to a new value triggers a `change` event', function test( t ) {
	var chart;

	chart = ctor({
		'type': 'column'
	});

	chart.on( 'change', onChange );
	chart.type = 'line';

	function onChange() {
		t.ok( true, 'triggers event' );
		t.end();
	}
});

tape( 'setting the `type` property to its current value does not trigger a `change` event', function test( t ) {
	var chart;

	chart = ctor({
		'type': 'line'
	});

	chart.on( 'change', onChange );
	chart.type = 'line';

	t.ok( true, 'does not trigger event' );
	t.end();

	function onChange() {
		t.ok( false, 'should not trigger event' );
	}
});
