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
var noop = require( '@stdlib/utils/noop' );
var ctor = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof ctor, 'function', 'main export is a function' );
	t.end();
});

tape( 'an instance throws an error if provided an invalid `label` value', function test( t ) {
	var values;
	var i;

	values = [
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
			var sparkline = ctor();
			sparkline.label = value;
		};
	}
});

tape( 'an instance supports setting and getting the property value', function test( t ) {
	var sparkline;

	sparkline = ctor({
		'label': 'beep'
	});
	sparkline._render = noop; // eslint-disable-line no-underscore-dangle
	t.strictEqual( sparkline.label, 'beep', 'returns expected value' );

	sparkline.label = 'boop';
	t.strictEqual( sparkline.label, 'boop', 'returns expected value' );

	t.end();
});

tape( 'setting the `label` property to a new value triggers a `change` event', function test( t ) {
	var sparkline;

	sparkline = ctor({
		'label': 'a'
	});
	sparkline._render = noop; // eslint-disable-line no-underscore-dangle

	sparkline.on( 'change', onChange );
	sparkline.label = 'b';

	function onChange() {
		t.ok( true, 'triggers event' );
		t.end();
	}
});

tape( 'setting the `label` property to its current value does not trigger a `change` event', function test( t ) {
	var sparkline;

	sparkline = ctor({
		'label': 'a'
	});
	sparkline._render = noop; // eslint-disable-line no-underscore-dangle

	sparkline.on( 'change', onChange );
	sparkline.label = 'a';

	t.ok( true, 'does not trigger event' );
	t.end();

	function onChange() {
		t.ok( false, 'should not trigger event' );
	}
});
