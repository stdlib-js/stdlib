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

tape( 'an instance throws an error if provided an invalid `autoRender` value', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		null,
		void 0,
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
			chart.autoRender = value;
		};
	}
});

tape( 'an instance supports setting and getting the property value', function test( t ) {
	var chart;

	chart = ctor({
		'autoRender': false
	});
	t.strictEqual( chart.autoRender, false, 'returns expected value' );

	chart.autoRender = true;
	t.strictEqual( chart.autoRender, true, 'returns expected value' );

	chart.autoRender = false;
	t.strictEqual( chart.autoRender, false, 'returns expected value' );

	t.end();
});

tape( 'if `autoRender` is `true`, when a returned instance receives a `change` event, it re-renders and emits a `render` event', function test( t ) {
	var chart;

	chart = ctor({
		'autoRender': true,
		'data': [ 0.10, 0.50, 0.90 ]
	});

	chart.on( 'render', onRender );
	chart.emit( 'change' );

	function onRender( str ) {
		t.ok( true, 'emits a render event' );
		t.strictEqual( typeof str, 'string', 'provides expected value' );
		t.end();
	}
});

tape( 'if `autoRender` is `false`, when a returned instance receives a `change` event, it does not re-render or emit a `render` event', function test( t ) {
	var chart;

	chart = ctor({
		'data': [ 0.10, 0.50, 0.90 ],
		'autoRender': false
	});

	chart.on( 'render', onRender );
	chart.emit( 'change' );

	t.pass( 'is ok' );
	t.end();

	function onRender() {
		t.fail( 'should never be invoked' );
	}
});

tape( 'setting the `autoRender` property triggers a `change` event', function test( t ) {
	var chart;

	chart = ctor({
		'autoRender': true
	});

	chart.on( 'change', onChange );
	chart.autoRender = false;

	function onChange() {
		t.ok( true, 'triggers event' );
		t.end();
	}
});

tape( 'setting the `autoRender` property triggers a `change` event', function test( t ) {
	var chart;

	chart = ctor({
		'autoRender': false
	});

	chart.on( 'change', onChange );
	chart.autoRender = true;

	function onChange() {
		t.ok( true, 'triggers event' );
		t.end();
	}
});

tape( 'setting the `autoRender` property to an existing value does not trigger a `change` event', function test( t ) {
	var chart;

	chart = ctor({
		'autoRender': true
	});

	chart.on( 'change', onChange );
	chart.autoRender = true;

	t.pass( 'is ok' );
	t.end();

	function onChange() {
		t.fail( 'should never be called' );
	}
});

tape( 'setting the `autoRender` property to an existing value does not trigger a `change` event', function test( t ) {
	var chart;

	chart = ctor({
		'autoRender': false
	});

	chart.on( 'change', onChange );
	chart.autoRender = false;

	t.pass( 'is ok' );
	t.end();

	function onChange() {
		t.fail( 'should never be called' );
	}
});
