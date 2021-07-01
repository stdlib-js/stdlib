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
var ndarray = require( '@stdlib/ndarray/ctor' );
var ctor = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof ctor, 'function', 'main export is a function' );
	t.end();
});

tape( 'an instance throws an error if provided an invalid `data` value', function test( t ) {
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
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var chart = ctor();
			chart.data = value;
		};
	}
});

tape( 'an instance throws an error if provided a `data` value which more data elements than the data buffer size', function test( t ) {
	var values;
	var i;

	values = [
		[ 1, 2 ],
		[ 1, 2, 3 ],
		[ 1, 2, 3, 4 ]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), RangeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var chart = ctor({
				'bufferSize': 1
			});
			chart.data = value;
		};
	}
});

tape( 'an instance supports setting and getting the property value', function test( t ) {
	var chart;
	var arr;

	arr = [ 1, 2, 3 ];
	chart = ctor({
		'data': arr
	});
	t.notEqual( chart.data, arr, 'returns a new reference' );
	t.deepEqual( chart.data, arr, 'returns expected value' );

	arr = [ 4, 5, 6 ];
	chart.data = arr;
	t.notEqual( chart.data, arr, 'returns a new reference' );
	t.deepEqual( chart.data, arr, 'returns expected value' );

	arr = ndarray( 'generic', [ 7, 8, 9 ], [ 3 ], [ 1 ], 0, 'row-major' );
	chart.data = arr;
	t.notEqual( chart.data, arr, 'returns a new reference' );
	t.deepEqual( chart.data, [ 7, 8, 9 ], 'returns expected value' );

	t.end();
});

tape( 'setting the `data` property triggers a `change` event', function test( t ) {
	var chart;

	chart = ctor({
		'data': [ 1, 2, 3 ]
	});

	chart.on( 'change', onChange );
	chart.data = [ 4, 5, 6 ];

	function onChange() {
		t.ok( true, 'triggers event' );
		t.end();
	}
});
