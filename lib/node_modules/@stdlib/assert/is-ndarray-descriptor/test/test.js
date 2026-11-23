/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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
var zeros = require( '@stdlib/ndarray/zeros' );
var isndarrayDescriptor = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isndarrayDescriptor, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `true` if provided an ndarray', function test( t ) {
	var arr = zeros( [ 2, 2 ] );
	t.strictEqual( isndarrayDescriptor( arr ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `true` if provided an ndarray descriptor', function test( t ) {
	var arr;

	arr = {
		'data': [ 0, 0, 0, 0 ],
		'shape': [ 2, 2 ],
		'strides': [ 2, 1 ],
		'offset': 0,
		'order': 'row-major',
		'dtype': 'generic'
	};

	t.strictEqual( isndarrayDescriptor( arr ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `false` if not provided an ndarray descriptor', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		null,
		void 0,
		true,
		false,
		[],
		{},
		function noop() {},
		{
			'data': [ 0, 0, 0, 0 ]
		},
		{
			'data': [ 0, 0, 0, 0 ],
			'shape': [ 2, 2 ]
		},
		{
			'data': [ 0, 0, 0, 0 ],
			'shape': [ 2, 2 ],
			'strides': [ 2, 1 ]
		},
		{
			'data': [ 0, 0, 0, 0 ],
			'shape': [ 2, 2 ],
			'strides': [ 2, 1 ],
			'offset': 0
		},
		{
			'data': [ 0, 0, 0, 0 ],
			'shape': [ 2, 2 ],
			'strides': [ 2, 1 ],
			'offset': 0,
			'order': 'row-major'
		}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( isndarrayDescriptor( values[i] ), false, 'returns expected value when provided '+values[i] );
	}
	t.end();
});
