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
			var sparkline = ctor();
			sparkline.autoRender = value;
		};
	}
});

tape( 'an instance supports setting and getting the property value', function test( t ) {
	var sparkline;

	sparkline = ctor({
		'autoRender': false
	});
	sparkline._render = noop; // eslint-disable-line no-underscore-dangle
	t.strictEqual( sparkline.autoRender, false, 'returns expected value' );

	sparkline.autoRender = true;
	t.strictEqual( sparkline.autoRender, true, 'returns expected value' );

	sparkline.autoRender = false;
	t.strictEqual( sparkline.autoRender, false, 'returns expected value' );

	t.end();
});

tape( 'if `autoRender` is `true`, when a returned instance receives a `change` event, it re-renders and emits a `render` event', function test( t ) {
	var sparkline;

	sparkline = ctor({
		'autoRender': true,
		'data': [ 0.10, 0.50, 0.90 ]
	});
	sparkline._render = render; // eslint-disable-line no-underscore-dangle

	sparkline.on( 'render', onRender );
	sparkline.emit( 'change' );

	function render() {
		return '...';
	}

	function onRender( str ) {
		t.ok( true, 'emits a render event' );
		t.strictEqual( str, '...', 'provides expected value' );
		t.end();
	}
});

tape( 'if `autoRender` is `false`, when a returned instance receives a `change` event, it does not re-render or emit a `render` event', function test( t ) {
	var sparkline;

	sparkline = ctor({
		'data': [ 0.10, 0.50, 0.90 ],
		'autoRender': false
	});
	sparkline._render = noop; // eslint-disable-line no-underscore-dangle

	sparkline.on( 'render', onRender );
	sparkline.emit( 'change' );

	t.pass( 'is ok' );
	t.end();

	function onRender() {
		t.fail( 'should never be invoked' );
	}
});

tape( 'setting the `autoRender` property triggers a `change` event', function test( t ) {
	var sparkline;

	sparkline = ctor({
		'autoRender': true
	});
	sparkline._render = noop; // eslint-disable-line no-underscore-dangle

	sparkline.on( 'change', onChange );
	sparkline.autoRender = false;

	function onChange() {
		t.ok( true, 'triggers event' );
		t.end();
	}
});

tape( 'setting the `autoRender` property triggers a `change` event', function test( t ) {
	var sparkline;

	sparkline = ctor({
		'autoRender': false
	});
	sparkline._render = noop; // eslint-disable-line no-underscore-dangle

	sparkline.on( 'change', onChange );
	sparkline.autoRender = true;

	function onChange() {
		t.ok( true, 'triggers event' );
		t.end();
	}
});

tape( 'setting the `autoRender` property to an existing value does not trigger a `change` event', function test( t ) {
	var sparkline;

	sparkline = ctor({
		'autoRender': true
	});
	sparkline._render = noop; // eslint-disable-line no-underscore-dangle

	sparkline.on( 'change', onChange );
	sparkline.autoRender = true;

	t.pass( 'is ok' );
	t.end();

	function onChange() {
		t.fail( 'should never be called' );
	}
});

tape( 'setting the `autoRender` property to an existing value does not trigger a `change` event', function test( t ) {
	var sparkline;

	sparkline = ctor({
		'autoRender': false
	});
	sparkline._render = noop; // eslint-disable-line no-underscore-dangle

	sparkline.on( 'change', onChange );
	sparkline.autoRender = false;

	t.pass( 'is ok' );
	t.end();

	function onChange() {
		t.fail( 'should never be called' );
	}
});
