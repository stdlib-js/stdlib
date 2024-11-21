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

tape( 'the `render` method throws an error if instances or child classes do not implement a `_render` method', function test( t ) {
	var sparkline = ctor();
	t.throws( foo, Error, 'throws an error' );
	t.end();

	function foo() {
		sparkline.render();
	}
});

tape( 'the `render` method emits a `render` event upon rendering', function test( t ) {
	var sparkline;

	sparkline = ctor({
		'data': [ 1, 2, 3 ]
	});
	sparkline._render = render; // eslint-disable-line no-underscore-dangle

	sparkline.on( 'render', onRender );
	sparkline.render();

	function render() {
		return '...';
	}

	function onRender( str ) {
		t.ok( true, 'triggers event' );
		t.strictEqual( str, '...', 'provides expected value' );
		t.end();
	}
});
