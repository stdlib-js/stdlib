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

tape( 'the function appends a datum to the sparkline data', function test( t ) {
	var sparkline;
	var expected;
	var data;
	var v;

	data = [ 1, 2, 3 ];
	sparkline = ctor({
		'data': data
	});
	sparkline._render = noop; // eslint-disable-line no-underscore-dangle

	sparkline.push( 4 );
	v = sparkline.data;

	expected = [ 1, 2, 3, 4 ];
	t.deepEqual( v, expected, 'appends to sparkline data' );

	t.end();
});

tape( 'if appending data to the internal data buffer will result in the sparkline data exceeding the data buffer size, the function will remove the first data element', function test( t ) {
	var sparkline;
	var expected;
	var data;
	var v;

	data = [ 1, 2, 3 ];
	sparkline = ctor({
		'data': data,
		'bufferSize': 3
	});
	sparkline._render = noop; // eslint-disable-line no-underscore-dangle

	sparkline.push( 4 );
	v = sparkline.data;

	expected = [ 2, 3, 4 ];
	t.deepEqual( v, expected, 'removes first data element' );

	t.end();
});

tape( 'appending `data` triggers a `change` event', function test( t ) {
	var sparkline;

	sparkline = ctor({
		'data': [ 1, 2, 3 ]
	});
	sparkline._render = noop; // eslint-disable-line no-underscore-dangle

	sparkline.on( 'change', onChange );
	sparkline.push( 4 );

	function onChange() {
		t.ok( true, 'triggers event' );
		t.end();
	}
});
