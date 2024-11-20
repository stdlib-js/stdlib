/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

/* eslint-disable max-lines-per-function */

'use strict';

// MODULES //

var tape = require( 'tape' );
var isSlice = require( '@stdlib/assert/is-slice' );
var seq2slice = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof seq2slice, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns an error object if provided a first argument which is not a valid subsequence string', function test( t ) {
	var expected;
	var values;
	var i;

	values = [
		'foo',
		'bar',
		'end+2',
		'end*2',
		'1/end',
		'1-end',
		':end+2',
		':end*2',
		':1/end',
		':1-end',
		'::end',
		'::1s',
		'1s::',
		':1s:',
		's1::',
		':s1:',
		'::s1',
		':end+2',
		'end+2:',
		'a',
		'3.14',
		'3.14:',
		'3.14::',
		':3.14',
		':3.14:',
		'::2/2',
		'::2-1',
		'::2*2',
		'2*2',
		'2*2:',
		'2*2::',
		':2+2',
		':2+2:',
		'1',
		'end',
		'0',
		' ',
		'_',
		'-',
		'-::',
		':-',
		'-:',
		'::-',
		'+::',
		':+',
		'+:',
		'::+',
		'end-:',
		'end/:',
		':end-',
		':end/',
		'end-1s:',
		'end/1s:',
		':end-1s',
		':end/1s'
	];
	expected = {
		'code': 'ERR_SLICE_INVALID_SUBSEQUENCE'
	};
	for ( i = 0; i < values.length; i++ ) {
		t.deepEqual( seq2slice( values[ i ], 10, false ), expected, 'returns expected value when provided ' + values[ i ] );
		t.deepEqual( seq2slice( values[ i ], 10, true ), expected, 'returns expected value when provided ' + values[ i ] );
	}
	t.end();
});

tape( 'the function returns an error object if provided a first argument which is not a valid subsequence string (out-of-bounds, non-strict)', function test( t ) {
	var expected;
	var values;
	var i;

	values = [
		'end/0.5:',
		':end/0.5',
		'end/0.5::',
		':end/0.5:'
	];
	expected = {
		'code': 'ERR_SLICE_INVALID_SUBSEQUENCE'
	};
	for ( i = 0; i < values.length; i++ ) {
		t.deepEqual( seq2slice( values[ i ], 10, false ), expected, 'returns expected value when provided ' + values[ i ] );
	}
	t.end();
});

tape( 'the function returns an error object if provided a first argument which is not a valid subsequence string (out-of-bounds, strict)', function test( t ) {
	var expected;
	var values;
	var i;

	values = [
		'40:',
		':40',
		'-40:',
		':-40',
		'1:40',
		'1:40:2',
		'1:40:-2',
		'1:-40:-2',
		':40:2',
		'-40::2',
		'-40:-100',
		'-40:-100:-2',
		'-40:100',
		'-40:100:2',
		'40:-100:2',
		'40:-100:-2',
		'end/0.5:',
		':end/0.5',
		'end/0.5::',
		':end/0.5:',
		'end-20:',
		'end-20::5',
		':end-20',
		':end-20:5'
	];
	expected = {
		'code': 'ERR_SLICE_OUT_OF_BOUNDS'
	};
	for ( i = 0; i < values.length; i++ ) {
		t.deepEqual( seq2slice( values[ i ], 10, true ), expected, 'returns expected value when provided ' + values[ i ] );
	}
	t.end();
});

tape( 'the function returns an error object if provided a first argument which is not a valid subsequence string (zero increment)', function test( t ) {
	var expected;
	var values;
	var i;

	values = [
		'::0',
		'1:2:0',
		'1::0',
		':2:0',
		'end::0',
		':end:0',
		'end:end:0'
	];
	expected = {
		'code': 'ERR_SLICE_INVALID_INCREMENT'
	};
	for ( i = 0; i < values.length; i++ ) {
		t.deepEqual( seq2slice( values[ i ], 10, false ), expected, 'returns expected value when provided ' + values[ i ] );
		t.deepEqual( seq2slice( values[ i ], 10, true ), expected, 'returns expected value when provided ' + values[ i ] );
	}
	t.end();
});

tape( 'the function converts a subsequence string to a Slice object', function test( t ) {
	var expected;
	var values;
	var args;
	var v;
	var o;
	var i;

	values = [
		// [ <input_arguments>, <expected_values> ]
		[ [ ':', 10, false ], [ 0, 10, 1 ] ],
		[ [ ':', 0, false ], [ 0, 0, 1 ] ],
		[ [ ':', 5, false ], [ 0, 5, 1 ] ],

		[ [ '::', 10, false ], [ 0, 10, 1 ] ],
		[ [ '::', 0, false ], [ 0, 0, 1 ] ],
		[ [ '::', 5, false ], [ 0, 5, 1 ] ],

		/* <start>: */

		[ [ '1:', 10, false ], [ 1, 10, 1 ] ],
		[ [ '1:', 0, false ], [ 0, 0, 1 ] ],
		[ [ '1:', 5, false ], [ 1, 5, 1 ] ],

		[ [ '-1:', 10, false ], [ 9, 10, 1 ] ],
		[ [ '-1:', 0, false ], [ 0, 0, 1 ] ],
		[ [ '-1:', 5, false ], [ 4, 5, 1 ] ],

		[ [ '2:', 10, false ], [ 2, 10, 1 ] ],
		[ [ '2:', 0, false ], [ 0, 0, 1 ] ],
		[ [ '2:', 5, false ], [ 2, 5, 1 ] ],

		[ [ '-2:', 10, false ], [ 8, 10, 1 ] ],
		[ [ '-2:', 0, false ], [ 0, 0, 1 ] ],
		[ [ '-2:', 5, false ], [ 3, 5, 1 ] ],

		[ [ 'end:', 10, false ], [ 10, 10, 1 ] ],
		[ [ 'end:', 0, false ], [ 0, 0, 1 ] ],
		[ [ 'end:', 5, false ], [ 5, 5, 1 ] ],

		[ [ 'end-0:', 10, false ], [ 10, 10, 1 ] ],
		[ [ 'end-0:', 0, false ], [ 0, 0, 1 ] ],
		[ [ 'end-0:', 5, false ], [ 5, 5, 1 ] ],

		[ [ 'end/1:', 10, false ], [ 10, 10, 1 ] ],
		[ [ 'end/1:', 0, false ], [ 0, 0, 1 ] ],
		[ [ 'end/1:', 5, false ], [ 5, 5, 1 ] ],

		[ [ 'end-1:', 10, false ], [ 9, 10, 1 ] ],
		[ [ 'end-1:', 0, false ], [ 0, 0, 1 ] ],
		[ [ 'end-1:', 5, false ], [ 4, 5, 1 ] ],

		[ [ 'end-2:', 10, false ], [ 8, 10, 1 ] ],
		[ [ 'end-2:', 0, false ], [ 0, 0, 1 ] ],
		[ [ 'end-2:', 5, false ], [ 3, 5, 1 ] ],

		[ [ 'end/2:', 10, false ], [ 5, 10, 1 ] ],
		[ [ 'end/2:', 0, false ], [ 0, 0, 1 ] ],
		[ [ 'end/2:', 5, false ], [ 2, 5, 1 ] ],

		[ [ 'end/3:', 10, false ], [ 3, 10, 1 ] ],
		[ [ 'end/3:', 0, false ], [ 0, 0, 1 ] ],
		[ [ 'end/3:', 5, false ], [ 1, 5, 1 ] ],

		/* <start>:<=stop> */

		[ [ '1:1', 10, false ], [ 1, 1, 1 ] ],
		[ [ '1:1', 0, false ], [ 0, 0, 1 ] ],
		[ [ '1:1', 5, false ], [ 1, 1, 1 ] ],

		[ [ '-1:-1', 10, false ], [ 9, 9, 1 ] ],
		[ [ '-1:-1', 0, false ], [ 0, 0, 1 ] ],
		[ [ '-1:-1', 5, false ], [ 4, 4, 1 ] ],

		[ [ '2:2', 10, false ], [ 2, 2, 1 ] ],
		[ [ '2:2', 0, false ], [ 0, 0, 1 ] ],
		[ [ '2:2', 5, false ], [ 2, 2, 1 ] ],

		[ [ '-2:-2', 10, false ], [ 8, 8, 1 ] ],
		[ [ '-2:-2', 0, false ], [ 0, 0, 1 ] ],
		[ [ '-2:-2', 5, false ], [ 3, 3, 1 ] ],

		[ [ 'end:end', 10, false ], [ 10, 10, 1 ] ],
		[ [ 'end:end', 0, false ], [ 0, 0, 1 ] ],
		[ [ 'end:end', 5, false ], [ 5, 5, 1 ] ],

		[ [ 'end-0:end-0', 10, false ], [ 10, 10, 1 ] ],
		[ [ 'end-0:end-0', 0, false ], [ 0, 0, 1 ] ],
		[ [ 'end-0:end-0', 5, false ], [ 5, 5, 1 ] ],

		[ [ 'end/1:end/1', 10, false ], [ 10, 10, 1 ] ],
		[ [ 'end/1:end/1', 0, false ], [ 0, 0, 1 ] ],
		[ [ 'end/1:end/1', 5, false ], [ 5, 5, 1 ] ],

		[ [ 'end-1:end-1', 10, false ], [ 9, 9, 1 ] ],
		[ [ 'end-1:end-1', 0, false ], [ 0, 0, 1 ] ],
		[ [ 'end-1:end-1', 5, false ], [ 4, 4, 1 ] ],

		[ [ 'end-2:end-2', 10, false ], [ 8, 8, 1 ] ],
		[ [ 'end-2:end-2', 0, false ], [ 0, 0, 1 ] ],
		[ [ 'end-2:end-2', 5, false ], [ 3, 3, 1 ] ],

		[ [ 'end/2:end/2', 10, false ], [ 5, 5, 1 ] ],
		[ [ 'end/2:end/2', 0, false ], [ 0, 0, 1 ] ],
		[ [ 'end/2:end/2', 5, false ], [ 2, 2, 1 ] ],

		[ [ 'end/3:end/3', 10, false ], [ 3, 3, 1 ] ],
		[ [ 'end/3:end/3', 0, false ], [ 0, 0, 1 ] ],
		[ [ 'end/3:end/3', 5, false ], [ 1, 1, 1 ] ],

		/* <start>:<+stop> */

		[ [ '1:4', 10, false ], [ 1, 4, 1 ] ],
		[ [ '1:4', 0, false ], [ 0, 0, 1 ] ],
		[ [ '1:4', 5, false ], [ 1, 4, 1 ] ],

		[ [ '-1:4', 10, false ], [ 9, 4, 1 ] ],
		[ [ '-1:4', 0, false ], [ 0, 0, 1 ] ],
		[ [ '-1:4', 5, false ], [ 4, 4, 1 ] ],

		[ [ '2:4', 10, false ], [ 2, 4, 1 ] ],
		[ [ '2:4', 0, false ], [ 0, 0, 1 ] ],
		[ [ '2:4', 5, false ], [ 2, 4, 1 ] ],

		[ [ '-2:4', 10, false ], [ 8, 4, 1 ] ],
		[ [ '-2:4', 0, false ], [ 0, 0, 1 ] ],
		[ [ '-2:4', 5, false ], [ 3, 4, 1 ] ],

		[ [ 'end:4', 10, false ], [ 10, 4, 1 ] ],
		[ [ 'end:4', 0, false ], [ 0, 0, 1 ] ],
		[ [ 'end:4', 5, false ], [ 5, 4, 1 ] ],

		[ [ 'end-0:4', 10, false ], [ 10, 4, 1 ] ],
		[ [ 'end-0:4', 0, false ], [ 0, 0, 1 ] ],
		[ [ 'end-0:4', 5, false ], [ 5, 4, 1 ] ],

		[ [ 'end/1:4', 10, false ], [ 10, 4, 1 ] ],
		[ [ 'end/1:4', 0, false ], [ 0, 0, 1 ] ],
		[ [ 'end/1:4', 5, false ], [ 5, 4, 1 ] ],

		[ [ 'end-1:4', 10, false ], [ 9, 4, 1 ] ],
		[ [ 'end-1:4', 0, false ], [ 0, 0, 1 ] ],
		[ [ 'end-1:4', 5, false ], [ 4, 4, 1 ] ],

		[ [ 'end-2:4', 10, false ], [ 8, 4, 1 ] ],
		[ [ 'end-2:4', 0, false ], [ 0, 0, 1 ] ],
		[ [ 'end-2:4', 5, false ], [ 3, 4, 1 ] ],

		[ [ 'end/2:4', 10, false ], [ 5, 4, 1 ] ],
		[ [ 'end/2:4', 0, false ], [ 0, 0, 1 ] ],
		[ [ 'end/2:4', 5, false ], [ 2, 4, 1 ] ],

		[ [ 'end/3:4', 10, false ], [ 3, 4, 1 ] ],
		[ [ 'end/3:4', 0, false ], [ 0, 0, 1 ] ],
		[ [ 'end/3:4', 5, false ], [ 1, 4, 1 ] ],

		/* <start>:<-stop> */

		[ [ '1:-4', 10, false ], [ 1, 6, 1 ] ],
		[ [ '1:-4', 0, false ], [ 0, 0, 1 ] ],
		[ [ '1:-4', 5, false ], [ 1, 1, 1 ] ],

		[ [ '-1:-4', 10, false ], [ 9, 6, 1 ] ],
		[ [ '-1:-4', 0, false ], [ 0, 0, 1 ] ],
		[ [ '-1:-4', 5, false ], [ 4, 1, 1 ] ],

		[ [ '2:-4', 10, false ], [ 2, 6, 1 ] ],
		[ [ '2:-4', 0, false ], [ 0, 0, 1 ] ],
		[ [ '2:-4', 5, false ], [ 2, 1, 1 ] ],

		[ [ '-2:-4', 10, false ], [ 8, 6, 1 ] ],
		[ [ '-2:-4', 0, false ], [ 0, 0, 1 ] ],
		[ [ '-2:-4', 5, false ], [ 3, 1, 1 ] ],

		[ [ 'end:-4', 10, false ], [ 10, 6, 1 ] ],
		[ [ 'end:-4', 0, false ], [ 0, 0, 1 ] ],
		[ [ 'end:-4', 5, false ], [ 5, 1, 1 ] ],

		[ [ 'end-0:-4', 10, false ], [ 10, 6, 1 ] ],
		[ [ 'end-0:-4', 0, false ], [ 0, 0, 1 ] ],
		[ [ 'end-0:-4', 5, false ], [ 5, 1, 1 ] ],

		[ [ 'end/1:-4', 10, false ], [ 10, 6, 1 ] ],
		[ [ 'end/1:-4', 0, false ], [ 0, 0, 1 ] ],
		[ [ 'end/1:-4', 5, false ], [ 5, 1, 1 ] ],

		[ [ 'end-1:-4', 10, false ], [ 9, 6, 1 ] ],
		[ [ 'end-1:-4', 0, false ], [ 0, 0, 1 ] ],
		[ [ 'end-1:-4', 5, false ], [ 4, 1, 1 ] ],

		[ [ 'end-2:-4', 10, false ], [ 8, 6, 1 ] ],
		[ [ 'end-2:-4', 0, false ], [ 0, 0, 1 ] ],
		[ [ 'end-2:-4', 5, false ], [ 3, 1, 1 ] ],

		[ [ 'end/2:-4', 10, false ], [ 5, 6, 1 ] ],
		[ [ 'end/2:-4', 0, false ], [ 0, 0, 1 ] ],
		[ [ 'end/2:-4', 5, false ], [ 2, 1, 1 ] ],

		[ [ 'end/3:-4', 10, false ], [ 3, 6, 1 ] ],
		[ [ 'end/3:-4', 0, false ], [ 0, 0, 1 ] ],
		[ [ 'end/3:-4', 5, false ], [ 1, 1, 1 ] ],

		/* <start>:<end> */

		[ [ '1:end', 10, false ], [ 1, 10, 1 ] ],
		[ [ '1:end', 0, false ], [ 0, 0, 1 ] ],
		[ [ '1:end', 5, false ], [ 1, 5, 1 ] ],

		[ [ '-1:end', 10, false ], [ 9, 10, 1 ] ],
		[ [ '-1:end', 0, false ], [ 0, 0, 1 ] ],
		[ [ '-1:end', 5, false ], [ 4, 5, 1 ] ],

		[ [ '2:end', 10, false ], [ 2, 10, 1 ] ],
		[ [ '2:end', 0, false ], [ 0, 0, 1 ] ],
		[ [ '2:end', 5, false ], [ 2, 5, 1 ] ],

		[ [ '-2:end', 10, false ], [ 8, 10, 1 ] ],
		[ [ '-2:end', 0, false ], [ 0, 0, 1 ] ],
		[ [ '-2:end', 5, false ], [ 3, 5, 1 ] ],

		[ [ 'end:end', 10, false ], [ 10, 10, 1 ] ],
		[ [ 'end:end', 0, false ], [ 0, 0, 1 ] ],
		[ [ 'end:end', 5, false ], [ 5, 5, 1 ] ],

		[ [ 'end-1:end', 10, false ], [ 9, 10, 1 ] ],
		[ [ 'end-1:end', 0, false ], [ 0, 0, 1 ] ],
		[ [ 'end-1:end', 5, false ], [ 4, 5, 1 ] ],

		[ [ 'end-2:end', 10, false ], [ 8, 10, 1 ] ],
		[ [ 'end-2:end', 0, false ], [ 0, 0, 1 ] ],
		[ [ 'end-2:end', 5, false ], [ 3, 5, 1 ] ],

		[ [ 'end/2:end', 10, false ], [ 5, 10, 1 ] ],
		[ [ 'end/2:end', 0, false ], [ 0, 0, 1 ] ],
		[ [ 'end/2:end', 5, false ], [ 2, 5, 1 ] ],

		[ [ 'end/3:end', 10, false ], [ 3, 10, 1 ] ],
		[ [ 'end/3:end', 0, false ], [ 0, 0, 1 ] ],
		[ [ 'end/3:end', 5, false ], [ 1, 5, 1 ] ],

		/* <start>:<end-x> */

		[ [ '1:end-4', 10, false ], [ 1, 6, 1 ] ],
		[ [ '1:end-4', 0, false ], [ 0, 0, 1 ] ],
		[ [ '1:end-4', 5, false ], [ 1, 1, 1 ] ],

		[ [ '-1:end-4', 10, false ], [ 9, 6, 1 ] ],
		[ [ '-1:end-4', 0, false ], [ 0, 0, 1 ] ],
		[ [ '-1:end-4', 5, false ], [ 4, 1, 1 ] ],

		[ [ '2:end-4', 10, false ], [ 2, 6, 1 ] ],
		[ [ '2:end-4', 0, false ], [ 0, 0, 1 ] ],
		[ [ '2:end-4', 5, false ], [ 2, 1, 1 ] ],

		[ [ '-2:end-4', 10, false ], [ 8, 6, 1 ] ],
		[ [ '-2:end-4', 0, false ], [ 0, 0, 1 ] ],
		[ [ '-2:end-4', 5, false ], [ 3, 1, 1 ] ],

		[ [ 'end:end-4', 10, false ], [ 10, 6, 1 ] ],
		[ [ 'end:end-4', 0, false ], [ 0, 0, 1 ] ],
		[ [ 'end:end-4', 5, false ], [ 5, 1, 1 ] ],

		[ [ 'end-1:end-4', 10, false ], [ 9, 6, 1 ] ],
		[ [ 'end-1:end-4', 0, false ], [ 0, 0, 1 ] ],
		[ [ 'end-1:end-4', 5, false ], [ 4, 1, 1 ] ],

		[ [ 'end-2:end-4', 10, false ], [ 8, 6, 1 ] ],
		[ [ 'end-2:end-4', 0, false ], [ 0, 0, 1 ] ],
		[ [ 'end-2:end-4', 5, false ], [ 3, 1, 1 ] ],

		[ [ 'end/2:end-4', 10, false ], [ 5, 6, 1 ] ],
		[ [ 'end/2:end-4', 0, false ], [ 0, 0, 1 ] ],
		[ [ 'end/2:end-4', 5, false ], [ 2, 1, 1 ] ],

		[ [ 'end/3:end-4', 10, false ], [ 3, 6, 1 ] ],
		[ [ 'end/3:end-4', 0, false ], [ 0, 0, 1 ] ],
		[ [ 'end/3:end-4', 5, false ], [ 1, 1, 1 ] ],

		/* <start>:<end/x> */

		[ [ '1:end/2', 10, false ], [ 1, 5, 1 ] ],
		[ [ '1:end/2', 0, false ], [ 0, 0, 1 ] ],
		[ [ '1:end/2', 5, false ], [ 1, 2, 1 ] ],

		[ [ '1:end/1.5', 10, false ], [ 1, 6, 1 ] ],
		[ [ '1:end/1.5', 0, false ], [ 0, 0, 1 ] ],
		[ [ '1:end/1.5', 5, false ], [ 1, 3, 1 ] ],

		[ [ '-1:end/2', 10, false ], [ 9, 5, 1 ] ],
		[ [ '-1:end/2', 0, false ], [ 0, 0, 1 ] ],
		[ [ '-1:end/2', 5, false ], [ 4, 2, 1 ] ],

		[ [ '2:end/2', 10, false ], [ 2, 5, 1 ] ],
		[ [ '2:end/2', 0, false ], [ 0, 0, 1 ] ],
		[ [ '2:end/2', 5, false ], [ 2, 2, 1 ] ],

		[ [ '-2:end/2', 10, false ], [ 8, 5, 1 ] ],
		[ [ '-2:end/2', 0, false ], [ 0, 0, 1 ] ],
		[ [ '-2:end/2', 5, false ], [ 3, 2, 1 ] ],

		[ [ 'end:end/2', 10, false ], [ 10, 5, 1 ] ],
		[ [ 'end:end/2', 0, false ], [ 0, 0, 1 ] ],
		[ [ 'end:end/2', 5, false ], [ 5, 2, 1 ] ],

		[ [ 'end-1:end/2', 10, false ], [ 9, 5, 1 ] ],
		[ [ 'end-1:end/2', 0, false ], [ 0, 0, 1 ] ],
		[ [ 'end-1:end/2', 5, false ], [ 4, 2, 1 ] ],

		[ [ 'end-2:end/2', 10, false ], [ 8, 5, 1 ] ],
		[ [ 'end-2:end/2', 0, false ], [ 0, 0, 1 ] ],
		[ [ 'end-2:end/2', 5, false ], [ 3, 2, 1 ] ],

		[ [ 'end/2:end/2', 10, false ], [ 5, 5, 1 ] ],
		[ [ 'end/2:end/2', 0, false ], [ 0, 0, 1 ] ],
		[ [ 'end/2:end/2', 5, false ], [ 2, 2, 1 ] ],

		[ [ 'end/3:end/2', 10, false ], [ 3, 5, 1 ] ],
		[ [ 'end/3:end/2', 0, false ], [ 0, 0, 1 ] ],
		[ [ 'end/3:end/2', 5, false ], [ 1, 2, 1 ] ],

		/* ::<+increment> */

		[ [ '::2', 10, false ], [ 0, 10, 2 ] ],
		[ [ '::2', 0, false ], [ 0, 0, 2 ] ],
		[ [ '::2', 5, false ], [ 0, 5, 2 ] ],

		/* <start>::<+increment> */

		[ [ '1::2', 10, false ], [ 1, 10, 2 ] ],
		[ [ '1::2', 0, false ], [ 0, 0, 2 ] ],
		[ [ '1::2', 5, false ], [ 1, 5, 2 ] ],

		[ [ '-1::2', 10, false ], [ 9, 10, 2 ] ],
		[ [ '-1::2', 0, false ], [ 0, 0, 2 ] ],
		[ [ '-1::2', 5, false ], [ 4, 5, 2 ] ],

		[ [ '2::2', 10, false ], [ 2, 10, 2 ] ],
		[ [ '2::2', 0, false ], [ 0, 0, 2 ] ],
		[ [ '2::2', 5, false ], [ 2, 5, 2 ] ],

		[ [ '-2::2', 10, false ], [ 8, 10, 2 ] ],
		[ [ '-2::2', 0, false ], [ 0, 0, 2 ] ],
		[ [ '-2::2', 5, false ], [ 3, 5, 2 ] ],

		[ [ 'end::2', 10, false ], [ 10, 10, 2 ] ],
		[ [ 'end::2', 0, false ], [ 0, 0, 2 ] ],
		[ [ 'end::2', 5, false ], [ 5, 5, 2 ] ],

		[ [ 'end-0::2', 10, false ], [ 10, 10, 2 ] ],
		[ [ 'end-0::2', 0, false ], [ 0, 0, 2 ] ],
		[ [ 'end-0::2', 5, false ], [ 5, 5, 2 ] ],

		[ [ 'end/1::2', 10, false ], [ 10, 10, 2 ] ],
		[ [ 'end/1::2', 0, false ], [ 0, 0, 2 ] ],
		[ [ 'end/1::2', 5, false ], [ 5, 5, 2 ] ],

		[ [ 'end-1::2', 10, false ], [ 9, 10, 2 ] ],
		[ [ 'end-1::2', 0, false ], [ 0, 0, 2 ] ],
		[ [ 'end-1::2', 5, false ], [ 4, 5, 2 ] ],

		[ [ 'end-2::2', 10, false ], [ 8, 10, 2 ] ],
		[ [ 'end-2::2', 0, false ], [ 0, 0, 2 ] ],
		[ [ 'end-2::2', 5, false ], [ 3, 5, 2 ] ],

		[ [ 'end/2::2', 10, false ], [ 5, 10, 2 ] ],
		[ [ 'end/2::2', 0, false ], [ 0, 0, 2 ] ],
		[ [ 'end/2::2', 5, false ], [ 2, 5, 2 ] ],

		[ [ 'end/3::2', 10, false ], [ 3, 10, 2 ] ],
		[ [ 'end/3::2', 0, false ], [ 0, 0, 2 ] ],
		[ [ 'end/3::2', 5, false ], [ 1, 5, 2 ] ],

		/* :<stop>:<+increment> */

		[ [ ':4:2', 10, false ], [ 0, 4, 2 ] ],
		[ [ ':4:2', 0, false ], [ 0, 0, 2 ] ],
		[ [ ':4:2', 5, false ], [ 0, 4, 2 ] ],

		[ [ ':-1:2', 10, false ], [ 0, 9, 2 ] ],
		[ [ ':-1:2', 0, false ], [ 0, 0, 2 ] ],
		[ [ ':-1:2', 5, false ], [ 0, 4, 2 ] ],

		[ [ ':4:2', 10, false ], [ 0, 4, 2 ] ],
		[ [ ':4:2', 0, false ], [ 0, 0, 2 ] ],
		[ [ ':4:2', 5, false ], [ 0, 4, 2 ] ],

		[ [ ':-2:2', 10, false ], [ 0, 8, 2 ] ],
		[ [ ':-2:2', 0, false ], [ 0, 0, 2 ] ],
		[ [ ':-2:2', 5, false ], [ 0, 3, 2 ] ],

		[ [ ':end:2', 10, false ], [ 0, 10, 2 ] ],
		[ [ ':end:2', 0, false ], [ 0, 0, 2 ] ],
		[ [ ':end:2', 5, false ], [ 0, 5, 2 ] ],

		[ [ ':end-0:2', 10, false ], [ 0, 10, 2 ] ],
		[ [ ':end-0:2', 0, false ], [ 0, 0, 2 ] ],
		[ [ ':end-0:2', 5, false ], [ 0, 5, 2 ] ],

		[ [ ':end/1:2', 10, false ], [ 0, 10, 2 ] ],
		[ [ ':end/1:2', 0, false ], [ 0, 0, 2 ] ],
		[ [ ':end/1:2', 5, false ], [ 0, 5, 2 ] ],

		[ [ ':end-1:2', 10, false ], [ 0, 9, 2 ] ],
		[ [ ':end-1:2', 0, false ], [ 0, 0, 2 ] ],
		[ [ ':end-1:2', 5, false ], [ 0, 4, 2 ] ],

		[ [ ':end-2:2', 10, false ], [ 0, 8, 2 ] ],
		[ [ ':end-2:2', 0, false ], [ 0, 0, 2 ] ],
		[ [ ':end-2:2', 5, false ], [ 0, 3, 2 ] ],

		[ [ ':end/2:2', 10, false ], [ 0, 5, 2 ] ],
		[ [ ':end/2:2', 0, false ], [ 0, 0, 2 ] ],
		[ [ ':end/2:2', 5, false ], [ 0, 2, 2 ] ],

		[ [ ':end/3:2', 10, false ], [ 0, 3, 2 ] ],
		[ [ ':end/3:2', 0, false ], [ 0, 0, 2 ] ],
		[ [ ':end/3:2', 5, false ], [ 0, 1, 2 ] ],

		/* <start>:<+stop>:<+increment> */

		[ [ '1:4:2', 10, false ], [ 1, 4, 2 ] ],
		[ [ '1:4:2', 0, false ], [ 0, 0, 2 ] ],
		[ [ '1:4:2', 5, false ], [ 1, 4, 2 ] ],

		[ [ '-1:4:2', 10, false ], [ 9, 4, 2 ] ],
		[ [ '-1:4:2', 0, false ], [ 0, 0, 2 ] ],
		[ [ '-1:4:2', 5, false ], [ 4, 4, 2 ] ],

		[ [ '2:4:2', 10, false ], [ 2, 4, 2 ] ],
		[ [ '2:4:2', 0, false ], [ 0, 0, 2 ] ],
		[ [ '2:4:2', 5, false ], [ 2, 4, 2 ] ],

		[ [ '-2:4:2', 10, false ], [ 8, 4, 2 ] ],
		[ [ '-2:4:2', 0, false ], [ 0, 0, 2 ] ],
		[ [ '-2:4:2', 5, false ], [ 3, 4, 2 ] ],

		[ [ 'end:4:2', 10, false ], [ 10, 4, 2 ] ],
		[ [ 'end:4:2', 0, false ], [ 0, 0, 2 ] ],
		[ [ 'end:4:2', 5, false ], [ 5, 4, 2 ] ],

		[ [ 'end-0:4:2', 10, false ], [ 10, 4, 2 ] ],
		[ [ 'end-0:4:2', 0, false ], [ 0, 0, 2 ] ],
		[ [ 'end-0:4:2', 5, false ], [ 5, 4, 2 ] ],

		[ [ 'end/1:4:2', 10, false ], [ 10, 4, 2 ] ],
		[ [ 'end/1:4:2', 0, false ], [ 0, 0, 2 ] ],
		[ [ 'end/1:4:2', 5, false ], [ 5, 4, 2 ] ],

		[ [ 'end-1:4:2', 10, false ], [ 9, 4, 2 ] ],
		[ [ 'end-1:4:2', 0, false ], [ 0, 0, 2 ] ],
		[ [ 'end-1:4:2', 5, false ], [ 4, 4, 2 ] ],

		[ [ 'end-2:4:2', 10, false ], [ 8, 4, 2 ] ],
		[ [ 'end-2:4:2', 0, false ], [ 0, 0, 2 ] ],
		[ [ 'end-2:4:2', 5, false ], [ 3, 4, 2 ] ],

		[ [ 'end/2:4:2', 10, false ], [ 5, 4, 2 ] ],
		[ [ 'end/2:4:2', 0, false ], [ 0, 0, 2 ] ],
		[ [ 'end/2:4:2', 5, false ], [ 2, 4, 2 ] ],

		[ [ 'end/3:4:2', 10, false ], [ 3, 4, 2 ] ],
		[ [ 'end/3:4:2', 0, false ], [ 0, 0, 2 ] ],
		[ [ 'end/3:4:2', 5, false ], [ 1, 4, 2 ] ],

		/* <start>:<-stop>:<+increment> */

		[ [ '1:-4:2', 10, false ], [ 1, 6, 2 ] ],
		[ [ '1:-4:2', 0, false ], [ 0, 0, 2 ] ],
		[ [ '1:-4:2', 5, false ], [ 1, 1, 2 ] ],

		[ [ '-1:-4:2', 10, false ], [ 9, 6, 2 ] ],
		[ [ '-1:-4:2', 0, false ], [ 0, 0, 2 ] ],
		[ [ '-1:-4:2', 5, false ], [ 4, 1, 2 ] ],

		[ [ '2:-4:2', 10, false ], [ 2, 6, 2 ] ],
		[ [ '2:-4:2', 0, false ], [ 0, 0, 2 ] ],
		[ [ '2:-4:2', 5, false ], [ 2, 1, 2 ] ],

		[ [ '-2:-4:2', 10, false ], [ 8, 6, 2 ] ],
		[ [ '-2:-4:2', 0, false ], [ 0, 0, 2 ] ],
		[ [ '-2:-4:2', 5, false ], [ 3, 1, 2 ] ],

		[ [ 'end:-4:2', 10, false ], [ 10, 6, 2 ] ],
		[ [ 'end:-4:2', 0, false ], [ 0, 0, 2 ] ],
		[ [ 'end:-4:2', 5, false ], [ 5, 1, 2 ] ],

		[ [ 'end-0:-4:2', 10, false ], [ 10, 6, 2 ] ],
		[ [ 'end-0:-4:2', 0, false ], [ 0, 0, 2 ] ],
		[ [ 'end-0:-4:2', 5, false ], [ 5, 1, 2 ] ],

		[ [ 'end/1:-4:2', 10, false ], [ 10, 6, 2 ] ],
		[ [ 'end/1:-4:2', 0, false ], [ 0, 0, 2 ] ],
		[ [ 'end/1:-4:2', 5, false ], [ 5, 1, 2 ] ],

		[ [ 'end-1:-4:2', 10, false ], [ 9, 6, 2 ] ],
		[ [ 'end-1:-4:2', 0, false ], [ 0, 0, 2 ] ],
		[ [ 'end-1:-4:2', 5, false ], [ 4, 1, 2 ] ],

		[ [ 'end-2:-4:2', 10, false ], [ 8, 6, 2 ] ],
		[ [ 'end-2:-4:2', 0, false ], [ 0, 0, 2 ] ],
		[ [ 'end-2:-4:2', 5, false ], [ 3, 1, 2 ] ],

		[ [ 'end/2:-4:2', 10, false ], [ 5, 6, 2 ] ],
		[ [ 'end/2:-4:2', 0, false ], [ 0, 0, 2 ] ],
		[ [ 'end/2:-4:2', 5, false ], [ 2, 1, 2 ] ],

		[ [ 'end/3:-4:2', 10, false ], [ 3, 6, 2 ] ],
		[ [ 'end/3:-4:2', 0, false ], [ 0, 0, 2 ] ],
		[ [ 'end/3:-4:2', 5, false ], [ 1, 1, 2 ] ],

		/* <start>:<end-x>:<+increment> */

		[ [ '1:end-4:2', 10, false ], [ 1, 6, 2 ] ],
		[ [ '1:end-4:2', 0, false ], [ 0, 0, 2 ] ],
		[ [ '1:end-4:2', 5, false ], [ 1, 1, 2 ] ],

		[ [ '-1:end-4:2', 10, false ], [ 9, 6, 2 ] ],
		[ [ '-1:end-4:2', 0, false ], [ 0, 0, 2 ] ],
		[ [ '-1:end-4:2', 5, false ], [ 4, 1, 2 ] ],

		[ [ '2:end-4:2', 10, false ], [ 2, 6, 2 ] ],
		[ [ '2:end-4:2', 0, false ], [ 0, 0, 2 ] ],
		[ [ '2:end-4:2', 5, false ], [ 2, 1, 2 ] ],

		[ [ '-2:end-4:2', 10, false ], [ 8, 6, 2 ] ],
		[ [ '-2:end-4:2', 0, false ], [ 0, 0, 2 ] ],
		[ [ '-2:end-4:2', 5, false ], [ 3, 1, 2 ] ],

		[ [ 'end:end-4:2', 10, false ], [ 10, 6, 2 ] ],
		[ [ 'end:end-4:2', 0, false ], [ 0, 0, 2 ] ],
		[ [ 'end:end-4:2', 5, false ], [ 5, 1, 2 ] ],

		[ [ 'end-1:end-4:2', 10, false ], [ 9, 6, 2 ] ],
		[ [ 'end-1:end-4:2', 0, false ], [ 0, 0, 2 ] ],
		[ [ 'end-1:end-4:2', 5, false ], [ 4, 1, 2 ] ],

		[ [ 'end-2:end-4:2', 10, false ], [ 8, 6, 2 ] ],
		[ [ 'end-2:end-4:2', 0, false ], [ 0, 0, 2 ] ],
		[ [ 'end-2:end-4:2', 5, false ], [ 3, 1, 2 ] ],

		[ [ 'end/2:end-4:2', 10, false ], [ 5, 6, 2 ] ],
		[ [ 'end/2:end-4:2', 0, false ], [ 0, 0, 2 ] ],
		[ [ 'end/2:end-4:2', 5, false ], [ 2, 1, 2 ] ],

		[ [ 'end/3:end-4:2', 10, false ], [ 3, 6, 2 ] ],
		[ [ 'end/3:end-4:2', 0, false ], [ 0, 0, 2 ] ],
		[ [ 'end/3:end-4:2', 5, false ], [ 1, 1, 2 ] ],

		/* <start>:<end/x>:<+increment> */

		[ [ '1:end/2:2', 10, false ], [ 1, 5, 2 ] ],
		[ [ '1:end/2:2', 0, false ], [ 0, 0, 2 ] ],
		[ [ '1:end/2:2', 5, false ], [ 1, 2, 2 ] ],

		[ [ '1:end/1.5:2', 10, false ], [ 1, 6, 2 ] ],
		[ [ '1:end/1.5:2', 0, false ], [ 0, 0, 2 ] ],
		[ [ '1:end/1.5:2', 5, false ], [ 1, 3, 2 ] ],

		[ [ '-1:end/2:2', 10, false ], [ 9, 5, 2 ] ],
		[ [ '-1:end/2:2', 0, false ], [ 0, 0, 2 ] ],
		[ [ '-1:end/2:2', 5, false ], [ 4, 2, 2 ] ],

		[ [ '2:end/2:2', 10, false ], [ 2, 5, 2 ] ],
		[ [ '2:end/2:2', 0, false ], [ 0, 0, 2 ] ],
		[ [ '2:end/2:2', 5, false ], [ 2, 2, 2 ] ],

		[ [ '-2:end/2:2', 10, false ], [ 8, 5, 2 ] ],
		[ [ '-2:end/2:2', 0, false ], [ 0, 0, 2 ] ],
		[ [ '-2:end/2:2', 5, false ], [ 3, 2, 2 ] ],

		[ [ 'end:end/2:2', 10, false ], [ 10, 5, 2 ] ],
		[ [ 'end:end/2:2', 0, false ], [ 0, 0, 2 ] ],
		[ [ 'end:end/2:2', 5, false ], [ 5, 2, 2 ] ],

		[ [ 'end-1:end/2:2', 10, false ], [ 9, 5, 2 ] ],
		[ [ 'end-1:end/2:2', 0, false ], [ 0, 0, 2 ] ],
		[ [ 'end-1:end/2:2', 5, false ], [ 4, 2, 2 ] ],

		[ [ 'end-2:end/2:2', 10, false ], [ 8, 5, 2 ] ],
		[ [ 'end-2:end/2:2', 0, false ], [ 0, 0, 2 ] ],
		[ [ 'end-2:end/2:2', 5, false ], [ 3, 2, 2 ] ],

		[ [ 'end/2:end/2:2', 10, false ], [ 5, 5, 2 ] ],
		[ [ 'end/2:end/2:2', 0, false ], [ 0, 0, 2 ] ],
		[ [ 'end/2:end/2:2', 5, false ], [ 2, 2, 2 ] ],

		[ [ 'end/3:end/2:2', 10, false ], [ 3, 5, 2 ] ],
		[ [ 'end/3:end/2:2', 0, false ], [ 0, 0, 2 ] ],
		[ [ 'end/3:end/2:2', 5, false ], [ 1, 2, 2 ] ],

		/* ::<-increment> */

		[ [ '::-2', 10, false ], [ 9, null, -2 ] ],
		[ [ '::-2', 0, false ], [ 0, 0, -2 ] ],
		[ [ '::-2', 5, false ], [ 4, null, -2 ] ],

		/* <start>::<-increment> */

		[ [ '1::-2', 10, false ], [ 1, null, -2 ] ],
		[ [ '1::-2', 0, false ], [ 0, 0, -2 ] ],
		[ [ '1::-2', 5, false ], [ 1, null, -2 ] ],

		[ [ '-1::-2', 10, false ], [ 9, null, -2 ] ],
		[ [ '-1::-2', 0, false ], [ 0, 0, -2 ] ],
		[ [ '-1::-2', 5, false ], [ 4, null, -2 ] ],

		[ [ '2::-2', 10, false ], [ 2, null, -2 ] ],
		[ [ '2::-2', 0, false ], [ 0, 0, -2 ] ],
		[ [ '2::-2', 5, false ], [ 2, null, -2 ] ],

		[ [ '-2::-2', 10, false ], [ 8, null, -2 ] ],
		[ [ '-2::-2', 0, false ], [ 0, 0, -2 ] ],
		[ [ '-2::-2', 5, false ], [ 3, null, -2 ] ],

		[ [ 'end::-2', 10, false ], [ 9, null, -2 ] ],
		[ [ 'end::-2', 0, false ], [ 0, 0, -2 ] ],
		[ [ 'end::-2', 5, false ], [ 4, null, -2 ] ],

		[ [ 'end-0::-2', 10, false ], [ 9, null, -2 ] ],
		[ [ 'end-0::-2', 0, false ], [ 0, 0, -2 ] ],
		[ [ 'end-0::-2', 5, false ], [ 4, null, -2 ] ],

		[ [ 'end/1::-2', 10, false ], [ 9, null, -2 ] ],
		[ [ 'end/1::-2', 0, false ], [ 0, 0, -2 ] ],
		[ [ 'end/1::-2', 5, false ], [ 4, null, -2 ] ],

		[ [ 'end-1::-2', 10, false ], [ 9, null, -2 ] ],
		[ [ 'end-1::-2', 0, false ], [ 0, 0, -2 ] ],
		[ [ 'end-1::-2', 5, false ], [ 4, null, -2 ] ],

		[ [ 'end-2::-2', 10, false ], [ 8, null, -2 ] ],
		[ [ 'end-2::-2', 0, false ], [ 0, 0, -2 ] ],
		[ [ 'end-2::-2', 5, false ], [ 3, null, -2 ] ],

		[ [ 'end/2::-2', 10, false ], [ 4, null, -2 ] ],
		[ [ 'end/2::-2', 0, false ], [ 0, 0, -2 ] ],
		[ [ 'end/2::-2', 5, false ], [ 2, null, -2 ] ],

		[ [ 'end/3::-2', 10, false ], [ 3, null, -2 ] ],
		[ [ 'end/3::-2', 0, false ], [ 0, 0, -2 ] ],
		[ [ 'end/3::-2', 5, false ], [ 1, null, -2 ] ],

		/* :<stop>:<-increment> */

		[ [ ':1:-2', 10, false ], [ 9, 1, -2 ] ],
		[ [ ':1:-2', 0, false ], [ 0, 0, -2 ] ],
		[ [ ':1:-2', 5, false ], [ 4, 1, -2 ] ],

		[ [ ':-1:-2', 10, false ], [ 9, 9, -2 ] ],
		[ [ ':-1:-2', 0, false ], [ 0, 0, -2 ] ],
		[ [ ':-1:-2', 5, false ], [ 4, 4, -2 ] ],

		[ [ ':4:-2', 10, false ], [ 9, 4, -2 ] ],
		[ [ ':4:-2', 0, false ], [ 0, 0, -2 ] ],
		[ [ ':4:-2', 5, false ], [ 4, 4, -2 ] ],

		[ [ ':-2:-2', 10, false ], [ 9, 8, -2 ] ],
		[ [ ':-2:-2', 0, false ], [ 0, 0, -2 ] ],
		[ [ ':-2:-2', 5, false ], [ 4, 3, -2 ] ],

		[ [ ':end:-2', 10, false ], [ 9, 10, -2 ] ],
		[ [ ':end:-2', 0, false ], [ 0, 0, -2 ] ],
		[ [ ':end:-2', 5, false ], [ 4, 5, -2 ] ],

		[ [ ':end-0:-2', 10, false ], [ 9, 10, -2 ] ],
		[ [ ':end-0:-2', 0, false ], [ 0, 0, -2 ] ],
		[ [ ':end-0:-2', 5, false ], [ 4, 5, -2 ] ],

		[ [ ':end/1:-2', 10, false ], [ 9, 10, -2 ] ],
		[ [ ':end/1:-2', 0, false ], [ 0, 0, -2 ] ],
		[ [ ':end/1:-2', 5, false ], [ 4, 5, -2 ] ],

		[ [ ':end-1:-2', 10, false ], [ 9, 9, -2 ] ],
		[ [ ':end-1:-2', 0, false ], [ 0, 0, -2 ] ],
		[ [ ':end-1:-2', 5, false ], [ 4, 4, -2 ] ],

		[ [ ':end-2:-2', 10, false ], [ 9, 8, -2 ] ],
		[ [ ':end-2:-2', 0, false ], [ 0, 0, -2 ] ],
		[ [ ':end-2:-2', 5, false ], [ 4, 3, -2 ] ],

		[ [ ':end/2:-2', 10, false ], [ 9, 4, -2 ] ],
		[ [ ':end/2:-2', 0, false ], [ 0, 0, -2 ] ],
		[ [ ':end/2:-2', 5, false ], [ 4, 2, -2 ] ],

		[ [ ':end/3:-2', 10, false ], [ 9, 3, -2 ] ],
		[ [ ':end/3:-2', 0, false ], [ 0, 0, -2 ] ],
		[ [ ':end/3:-2', 5, false ], [ 4, 1, -2 ] ],

		/* <start>:<+stop>:<-increment> */

		[ [ '1:4:-2', 10, false ], [ 1, 4, -2 ] ],
		[ [ '1:4:-2', 0, false ], [ 0, 0, -2 ] ],
		[ [ '1:4:-2', 5, false ], [ 1, 4, -2 ] ],

		[ [ '-1:4:-2', 10, false ], [ 9, 4, -2 ] ],
		[ [ '-1:4:-2', 0, false ], [ 0, 0, -2 ] ],
		[ [ '-1:4:-2', 5, false ], [ 4, 4, -2 ] ],

		[ [ '2:4:-2', 10, false ], [ 2, 4, -2 ] ],
		[ [ '2:4:-2', 0, false ], [ 0, 0, -2 ] ],
		[ [ '2:4:-2', 5, false ], [ 2, 4, -2 ] ],

		[ [ '-2:4:-2', 10, false ], [ 8, 4, -2 ] ],
		[ [ '-2:4:-2', 0, false ], [ 0, 0, -2 ] ],
		[ [ '-2:4:-2', 5, false ], [ 3, 4, -2 ] ],

		[ [ 'end:4:-2', 10, false ], [ 9, 4, -2 ] ],
		[ [ 'end:4:-2', 0, false ], [ 0, 0, -2 ] ],
		[ [ 'end:4:-2', 5, false ], [ 4, 4, -2 ] ],

		[ [ 'end-0:4:-2', 10, false ], [ 9, 4, -2 ] ],
		[ [ 'end-0:4:-2', 0, false ], [ 0, 0, -2 ] ],
		[ [ 'end-0:4:-2', 5, false ], [ 4, 4, -2 ] ],

		[ [ 'end/1:4:-2', 10, false ], [ 9, 4, -2 ] ],
		[ [ 'end/1:4:-2', 0, false ], [ 0, 0, -2 ] ],
		[ [ 'end/1:4:-2', 5, false ], [ 4, 4, -2 ] ],

		[ [ 'end-1:4:-2', 10, false ], [ 9, 4, -2 ] ],
		[ [ 'end-1:4:-2', 0, false ], [ 0, 0, -2 ] ],
		[ [ 'end-1:4:-2', 5, false ], [ 4, 4, -2 ] ],

		[ [ 'end-2:4:-2', 10, false ], [ 8, 4, -2 ] ],
		[ [ 'end-2:4:-2', 0, false ], [ 0, 0, -2 ] ],
		[ [ 'end-2:4:-2', 5, false ], [ 3, 4, -2 ] ],

		[ [ 'end/2:4:-2', 10, false ], [ 4, 4, -2 ] ],
		[ [ 'end/2:4:-2', 0, false ], [ 0, 0, -2 ] ],
		[ [ 'end/2:4:-2', 5, false ], [ 2, 4, -2 ] ],

		[ [ 'end/3:4:-2', 10, false ], [ 3, 4, -2 ] ],
		[ [ 'end/3:4:-2', 0, false ], [ 0, 0, -2 ] ],
		[ [ 'end/3:4:-2', 5, false ], [ 1, 4, -2 ] ],

		/* <start>:<-stop>:<-increment> */

		[ [ '1:-4:-2', 10, false ], [ 1, 6, -2 ] ],
		[ [ '1:-4:-2', 0, false ], [ 0, 0, -2 ] ],
		[ [ '1:-4:-2', 5, false ], [ 1, 1, -2 ] ],

		[ [ '-1:-4:-2', 10, false ], [ 9, 6, -2 ] ],
		[ [ '-1:-4:-2', 0, false ], [ 0, 0, -2 ] ],
		[ [ '-1:-4:-2', 5, false ], [ 4, 1, -2 ] ],

		[ [ '2:-4:-2', 10, false ], [ 2, 6, -2 ] ],
		[ [ '2:-4:-2', 0, false ], [ 0, 0, -2 ] ],
		[ [ '2:-4:-2', 5, false ], [ 2, 1, -2 ] ],

		[ [ '-2:-4:-2', 10, false ], [ 8, 6, -2 ] ],
		[ [ '-2:-4:-2', 0, false ], [ 0, 0, -2 ] ],
		[ [ '-2:-4:-2', 5, false ], [ 3, 1, -2 ] ],

		[ [ 'end:-4:-2', 10, false ], [ 9, 6, -2 ] ],
		[ [ 'end:-4:-2', 0, false ], [ 0, 0, -2 ] ],
		[ [ 'end:-4:-2', 5, false ], [ 4, 1, -2 ] ],

		[ [ 'end-0:-4:-2', 10, false ], [ 9, 6, -2 ] ],
		[ [ 'end-0:-4:-2', 0, false ], [ 0, 0, -2 ] ],
		[ [ 'end-0:-4:-2', 5, false ], [ 4, 1, -2 ] ],

		[ [ 'end/1:-4:-2', 10, false ], [ 9, 6, -2 ] ],
		[ [ 'end/1:-4:-2', 0, false ], [ 0, 0, -2 ] ],
		[ [ 'end/1:-4:-2', 5, false ], [ 4, 1, -2 ] ],

		[ [ 'end-1:-4:-2', 10, false ], [ 9, 6, -2 ] ],
		[ [ 'end-1:-4:-2', 0, false ], [ 0, 0, -2 ] ],
		[ [ 'end-1:-4:-2', 5, false ], [ 4, 1, -2 ] ],

		[ [ 'end-2:-4:-2', 10, false ], [ 8, 6, -2 ] ],
		[ [ 'end-2:-4:-2', 0, false ], [ 0, 0, -2 ] ],
		[ [ 'end-2:-4:-2', 5, false ], [ 3, 1, -2 ] ],

		[ [ 'end/2:-4:-2', 10, false ], [ 4, 6, -2 ] ],
		[ [ 'end/2:-4:-2', 0, false ], [ 0, 0, -2 ] ],
		[ [ 'end/2:-4:-2', 5, false ], [ 2, 1, -2 ] ],

		[ [ 'end/3:-4:-2', 10, false ], [ 3, 6, -2 ] ],
		[ [ 'end/3:-4:-2', 0, false ], [ 0, 0, -2 ] ],
		[ [ 'end/3:-4:-2', 5, false ], [ 1, 1, -2 ] ],

		/* <start>:<end-x>:<-increment> */

		[ [ '1:end-4:-2', 10, false ], [ 1, 6, -2 ] ],
		[ [ '1:end-4:-2', 0, false ], [ 0, 0, -2 ] ],
		[ [ '1:end-4:-2', 5, false ], [ 1, 1, -2 ] ],

		[ [ '-1:end-4:-2', 10, false ], [ 9, 6, -2 ] ],
		[ [ '-1:end-4:-2', 0, false ], [ 0, 0, -2 ] ],
		[ [ '-1:end-4:-2', 5, false ], [ 4, 1, -2 ] ],

		[ [ '2:end-4:-2', 10, false ], [ 2, 6, -2 ] ],
		[ [ '2:end-4:-2', 0, false ], [ 0, 0, -2 ] ],
		[ [ '2:end-4:-2', 5, false ], [ 2, 1, -2 ] ],

		[ [ '-2:end-4:-2', 10, false ], [ 8, 6, -2 ] ],
		[ [ '-2:end-4:-2', 0, false ], [ 0, 0, -2 ] ],
		[ [ '-2:end-4:-2', 5, false ], [ 3, 1, -2 ] ],

		[ [ 'end:end-4:-2', 10, false ], [ 9, 6, -2 ] ],
		[ [ 'end:end-4:-2', 0, false ], [ 0, 0, -2 ] ],
		[ [ 'end:end-4:-2', 5, false ], [ 4, 1, -2 ] ],

		[ [ 'end-1:end-4:-2', 10, false ], [ 9, 6, -2 ] ],
		[ [ 'end-1:end-4:-2', 0, false ], [ 0, 0, -2 ] ],
		[ [ 'end-1:end-4:-2', 5, false ], [ 4, 1, -2 ] ],

		[ [ 'end-2:end-4:-2', 10, false ], [ 8, 6, -2 ] ],
		[ [ 'end-2:end-4:-2', 0, false ], [ 0, 0, -2 ] ],
		[ [ 'end-2:end-4:-2', 5, false ], [ 3, 1, -2 ] ],

		[ [ 'end/2:end-4:-2', 10, false ], [ 4, 6, -2 ] ],
		[ [ 'end/2:end-4:-2', 0, false ], [ 0, 0, -2 ] ],
		[ [ 'end/2:end-4:-2', 5, false ], [ 2, 1, -2 ] ],

		[ [ 'end/3:end-4:-2', 10, false ], [ 3, 6, -2 ] ],
		[ [ 'end/3:end-4:-2', 0, false ], [ 0, 0, -2 ] ],
		[ [ 'end/3:end-4:-2', 5, false ], [ 1, 1, -2 ] ],

		/* <start>:<end/x>:<-increment> */

		[ [ '1:end/2:-2', 10, false ], [ 1, 4, -2 ] ],
		[ [ '1:end/2:-2', 0, false ], [ 0, 0, -2 ] ],
		[ [ '1:end/2:-2', 5, false ], [ 1, 2, -2 ] ],

		[ [ '1:end/1.5:-2', 10, false ], [ 1, 6, -2 ] ],
		[ [ '1:end/1.5:-2', 0, false ], [ 0, 0, -2 ] ],
		[ [ '1:end/1.5:-2', 5, false ], [ 1, 2, -2 ] ],

		[ [ '-1:end/2:-2', 10, false ], [ 9, 4, -2 ] ],
		[ [ '-1:end/2:-2', 0, false ], [ 0, 0, -2 ] ],
		[ [ '-1:end/2:-2', 5, false ], [ 4, 2, -2 ] ],

		[ [ '2:end/2:-2', 10, false ], [ 2, 4, -2 ] ],
		[ [ '2:end/2:-2', 0, false ], [ 0, 0, -2 ] ],
		[ [ '2:end/2:-2', 5, false ], [ 2, 2, -2 ] ],

		[ [ '-2:end/2:-2', 10, false ], [ 8, 4, -2 ] ],
		[ [ '-2:end/2:-2', 0, false ], [ 0, 0, -2 ] ],
		[ [ '-2:end/2:-2', 5, false ], [ 3, 2, -2 ] ],

		[ [ 'end:end/2:-2', 10, false ], [ 9, 4, -2 ] ],
		[ [ 'end:end/2:-2', 0, false ], [ 0, 0, -2 ] ],
		[ [ 'end:end/2:-2', 5, false ], [ 4, 2, -2 ] ],

		[ [ 'end-1:end/2:-2', 10, false ], [ 9, 4, -2 ] ],
		[ [ 'end-1:end/2:-2', 0, false ], [ 0, 0, -2 ] ],
		[ [ 'end-1:end/2:-2', 5, false ], [ 4, 2, -2 ] ],

		[ [ 'end-2:end/2:-2', 10, false ], [ 8, 4, -2 ] ],
		[ [ 'end-2:end/2:-2', 0, false ], [ 0, 0, -2 ] ],
		[ [ 'end-2:end/2:-2', 5, false ], [ 3, 2, -2 ] ],

		[ [ 'end/2:end/2:-2', 10, false ], [ 4, 4, -2 ] ],
		[ [ 'end/2:end/2:-2', 0, false ], [ 0, 0, -2 ] ],
		[ [ 'end/2:end/2:-2', 5, false ], [ 2, 2, -2 ] ],

		[ [ 'end/3:end/2:-2', 10, false ], [ 3, 4, -2 ] ],
		[ [ 'end/3:end/2:-2', 0, false ], [ 0, 0, -2 ] ],
		[ [ 'end/3:end/2:-2', 5, false ], [ 1, 2, -2 ] ],

		[ [ 'end/1.5:end/1.5:-2', 10, false ], [ 6, 6, -2 ] ],
		[ [ 'end/1.5:end/1.5:-2', 0, false ], [ 0, 0, -2 ] ],
		[ [ 'end/1.5:end/1.5:-2', 5, false ], [ 2, 2, -2 ] ]
	];

	for ( i = 0; i < values.length; i++ ) {
		args = values[ i ][ 0 ];
		o = seq2slice.apply( null, args );
		expected = values[ i ][ 1 ];
		v = JSON.stringify( values[ i ] );
		t.strictEqual( isSlice( o ), true, 'returns expected value. i: ' + i + '. Values: ' + v );
		t.strictEqual( o.start, expected[ 0 ], 'returns expected value. i: ' + i + '. Values: ' + v );
		t.strictEqual( o.stop, expected[ 1 ], 'returns expected value. i: ' + i + '. Values: ' + v );
		t.strictEqual( o.step, expected[ 2 ], 'returns expected value. i: ' + i + '. Values: ' + v );
	}
	t.end();
});

tape( 'the function returns results satisfying the `:n + n: = :` convention', function test( t ) {
	var expected;
	var values;
	var args;
	var o;
	var v;
	var i;

	values = [
		// [ <input_arguments>, <expected_values> ]

		/* <start>:<stop> */

		[ [ ':5', 10, false ], [ 0, 5, 1 ] ],
		[ [ '5:', 10, false ], [ 5, 10, 1 ] ],

		[ [ ':5', 5, false ], [ 0, 5, 1 ] ],
		[ [ '5:', 5, false ], [ 5, 5, 1 ] ],

		[ [ ':5', 0, false ], [ 0, 0, 1 ] ],
		[ [ '5:', 0, false ], [ 0, 0, 1 ] ],

		[ [ ':-1', 10, false ], [ 0, 9, 1 ] ],
		[ [ '-1:', 10, false ], [ 9, 10, 1 ] ],

		[ [ ':-1', 5, false ], [ 0, 4, 1 ] ],
		[ [ '-1:', 5, false ], [ 4, 5, 1 ] ],

		[ [ ':-1', 0, false ], [ 0, 0, 1 ] ],
		[ [ '-1:', 0, false ], [ 0, 0, 1 ] ],

		[ [ ':-3', 10, false ], [ 0, 7, 1 ] ],
		[ [ '-3:', 10, false ], [ 7, 10, 1 ] ],

		[ [ ':-3', 5, false ], [ 0, 2, 1 ] ],
		[ [ '-3:', 5, false ], [ 2, 5, 1 ] ],

		[ [ ':-3', 0, false ], [ 0, 0, 1 ] ],
		[ [ '-3:', 0, false ], [ 0, 0, 1 ] ],

		[ [ ':end', 10, false ], [ 0, 10, 1 ] ],
		[ [ 'end:', 10, false ], [ 10, 10, 1 ] ],

		[ [ ':end', 5, false ], [ 0, 5, 1 ] ],
		[ [ 'end:', 5, false ], [ 5, 5, 1 ] ],

		[ [ ':end', 0, false ], [ 0, 0, 1 ] ],
		[ [ 'end:', 0, false ], [ 0, 0, 1 ] ],

		[ [ ':end-1', 10, false ], [ 0, 9, 1 ] ],
		[ [ 'end-1:', 10, false ], [ 9, 10, 1 ] ],

		[ [ ':end-1', 5, false ], [ 0, 4, 1 ] ],
		[ [ 'end-1:', 5, false ], [ 4, 5, 1 ] ],

		[ [ ':end-1', 0, false ], [ 0, 0, 1 ] ],
		[ [ 'end-1:', 0, false ], [ 0, 0, 1 ] ],

		[ [ ':end-2', 10, false ], [ 0, 8, 1 ] ],
		[ [ 'end-2:', 10, false ], [ 8, 10, 1 ] ],

		[ [ ':end-2', 5, false ], [ 0, 3, 1 ] ],
		[ [ 'end-2:', 5, false ], [ 3, 5, 1 ] ],

		[ [ ':end-2', 0, false ], [ 0, 0, 1 ] ],
		[ [ 'end-2:', 0, false ], [ 0, 0, 1 ] ],

		[ [ ':end/2', 10, false ], [ 0, 5, 1 ] ],
		[ [ 'end/2:', 10, false ], [ 5, 10, 1 ] ],

		[ [ ':end/2', 5, false ], [ 0, 2, 1 ] ],
		[ [ 'end/2:', 5, false ], [ 2, 5, 1 ] ],

		[ [ ':end/2', 0, false ], [ 0, 0, 1 ] ],
		[ [ 'end/2:', 0, false ], [ 0, 0, 1 ] ],

		[ [ ':end/3', 10, false ], [ 0, 3, 1 ] ],
		[ [ 'end/3:', 10, false ], [ 3, 10, 1 ] ],

		[ [ ':end/3', 5, false ], [ 0, 1, 1 ] ],
		[ [ 'end/3:', 5, false ], [ 1, 5, 1 ] ],

		[ [ ':end/3', 0, false ], [ 0, 0, 1 ] ],
		[ [ 'end/3:', 0, false ], [ 0, 0, 1 ] ],

		[ [ ':end/1.5', 10, false ], [ 0, 6, 1 ] ],
		[ [ 'end/1.5:', 10, false ], [ 6, 10, 1 ] ],

		[ [ ':end/1.5', 5, false ], [ 0, 3, 1 ] ],
		[ [ 'end/1.5:', 5, false ], [ 3, 5, 1 ] ],

		[ [ ':end/1.5', 0, false ], [ 0, 0, 1 ] ],
		[ [ 'end/1.5:', 0, false ], [ 0, 0, 1 ] ],

		/* <start>:<stop>:<+increment> */

		[ [ ':5:2', 10, false ], [ 0, 5, 2 ] ],
		[ [ '5::2', 10, false ], [ 5, 10, 2 ] ],

		[ [ ':5:2', 5, false ], [ 0, 5, 2 ] ],
		[ [ '5::2', 5, false ], [ 5, 5, 2 ] ],

		[ [ ':5:2', 0, false ], [ 0, 0, 2 ] ],
		[ [ '5::2', 0, false ], [ 0, 0, 2 ] ],

		[ [ ':-1:2', 10, false ], [ 0, 9, 2 ] ],
		[ [ '-1::2', 10, false ], [ 9, 10, 2 ] ],

		[ [ ':-1:2', 5, false ], [ 0, 4, 2 ] ],
		[ [ '-1::2', 5, false ], [ 4, 5, 2 ] ],

		[ [ ':-1:2', 0, false ], [ 0, 0, 2 ] ],
		[ [ '-1::2', 0, false ], [ 0, 0, 2 ] ],

		[ [ ':-3:2', 10, false ], [ 0, 7, 2 ] ],
		[ [ '-3::2', 10, false ], [ 7, 10, 2 ] ],

		[ [ ':-3:2', 5, false ], [ 0, 2, 2 ] ],
		[ [ '-3::2', 5, false ], [ 2, 5, 2 ] ],

		[ [ ':-3:2', 0, false ], [ 0, 0, 2 ] ],
		[ [ '-3::2', 0, false ], [ 0, 0, 2 ] ],

		[ [ ':end:2', 10, false ], [ 0, 10, 2 ] ],
		[ [ 'end::2', 10, false ], [ 10, 10, 2 ] ],

		[ [ ':end:2', 5, false ], [ 0, 5, 2 ] ],
		[ [ 'end::2', 5, false ], [ 5, 5, 2 ] ],

		[ [ ':end:2', 0, false ], [ 0, 0, 2 ] ],
		[ [ 'end::2', 0, false ], [ 0, 0, 2 ] ],

		[ [ ':end-1:2', 10, false ], [ 0, 9, 2 ] ],
		[ [ 'end-1::2', 10, false ], [ 9, 10, 2 ] ],

		[ [ ':end-1:2', 5, false ], [ 0, 4, 2 ] ],
		[ [ 'end-1::2', 5, false ], [ 4, 5, 2 ] ],

		[ [ ':end-1:2', 0, false ], [ 0, 0, 2 ] ],
		[ [ 'end-1::2', 0, false ], [ 0, 0, 2 ] ],

		[ [ ':end-2:2', 10, false ], [ 0, 8, 2 ] ],
		[ [ 'end-2::2', 10, false ], [ 8, 10, 2 ] ],

		[ [ ':end-2:2', 5, false ], [ 0, 3, 2 ] ],
		[ [ 'end-2::2', 5, false ], [ 3, 5, 2 ] ],

		[ [ ':end-2:2', 0, false ], [ 0, 0, 2 ] ],
		[ [ 'end-2::2', 0, false ], [ 0, 0, 2 ] ],

		[ [ ':end/2:2', 10, false ], [ 0, 5, 2 ] ],
		[ [ 'end/2::2', 10, false ], [ 5, 10, 2 ] ],

		[ [ ':end/2:2', 5, false ], [ 0, 2, 2 ] ],
		[ [ 'end/2::2', 5, false ], [ 2, 5, 2 ] ],

		[ [ ':end/2:2', 0, false ], [ 0, 0, 2 ] ],
		[ [ 'end/2::2', 0, false ], [ 0, 0, 2 ] ],

		[ [ ':end/3:2', 10, false ], [ 0, 3, 2 ] ],
		[ [ 'end/3::2', 10, false ], [ 3, 10, 2 ] ],

		[ [ ':end/3:2', 5, false ], [ 0, 1, 2 ] ],
		[ [ 'end/3::2', 5, false ], [ 1, 5, 2 ] ],

		[ [ ':end/3:2', 0, false ], [ 0, 0, 2 ] ],
		[ [ 'end/3::2', 0, false ], [ 0, 0, 2 ] ],

		[ [ ':end/1.5:2', 10, false ], [ 0, 6, 2 ] ],
		[ [ 'end/1.5::2', 10, false ], [ 6, 10, 2 ] ],

		[ [ ':end/1.5:2', 5, false ], [ 0, 3, 2 ] ],
		[ [ 'end/1.5::2', 5, false ], [ 3, 5, 2 ] ],

		[ [ ':end/1.5:2', 0, false ], [ 0, 0, 2 ] ],
		[ [ 'end/1.5::2', 0, false ], [ 0, 0, 2 ] ],

		/* <start>:<stop>:<-increment> */

		[ [ ':5:-2', 10, false ], [ 9, 5, -2 ] ],
		[ [ '5::-2', 10, false ], [ 5, null, -2 ] ],

		[ [ ':5:-2', 5, false ], [ 4, 5, -2 ] ],
		[ [ '5::-2', 5, false ], [ 4, null, -2 ] ],

		[ [ ':5:-2', 0, false ], [ 0, 0, -2 ] ],
		[ [ '5::-2', 0, false ], [ 0, 0, -2 ] ],

		[ [ ':-1:-2', 10, false ], [ 9, 9, -2 ] ],
		[ [ '-1::-2', 10, false ], [ 9, null, -2 ] ],

		[ [ ':-1:-2', 5, false ], [ 4, 4, -2 ] ],
		[ [ '-1::-2', 5, false ], [ 4, null, -2 ] ],

		[ [ ':-1:-2', 0, false ], [ 0, 0, -2 ] ],
		[ [ '-1::-2', 0, false ], [ 0, 0, -2 ] ],

		[ [ ':-3:-2', 10, false ], [ 9, 7, -2 ] ],
		[ [ '-3::-2', 10, false ], [ 7, null, -2 ] ],

		[ [ ':-3:-2', 5, false ], [ 4, 2, -2 ] ],
		[ [ '-3::-2', 5, false ], [ 2, null, -2 ] ],

		[ [ ':-3:-2', 0, false ], [ 0, 0, -2 ] ],
		[ [ '-3::-2', 0, false ], [ 0, 0, -2 ] ],

		[ [ ':end:-2', 10, false ], [ 9, 10, -2 ] ],
		[ [ 'end::-2', 10, false ], [ 9, null, -2 ] ],

		[ [ ':end:-2', 5, false ], [ 4, 5, -2 ] ],
		[ [ 'end::-2', 5, false ], [ 4, null, -2 ] ],

		[ [ ':end:-2', 0, false ], [ 0, 0, -2 ] ],
		[ [ 'end::-2', 0, false ], [ 0, 0, -2 ] ],

		[ [ ':end-1:-2', 10, false ], [ 9, 9, -2 ] ],
		[ [ 'end-1::-2', 10, false ], [ 9, null, -2 ] ],

		[ [ ':end-1:-2', 5, false ], [ 4, 4, -2 ] ],
		[ [ 'end-1::-2', 5, false ], [ 4, null, -2 ] ],

		[ [ ':end-1:-2', 0, false ], [ 0, 0, -2 ] ],
		[ [ 'end-1::-2', 0, false ], [ 0, 0, -2 ] ],

		[ [ ':end-2:-2', 10, false ], [ 9, 8, -2 ] ],
		[ [ 'end-2::-2', 10, false ], [ 8, null, -2 ] ],

		[ [ ':end-2:-2', 5, false ], [ 4, 3, -2 ] ],
		[ [ 'end-2::-2', 5, false ], [ 3, null, -2 ] ],

		[ [ ':end-2:-2', 0, false ], [ 0, 0, -2 ] ],
		[ [ 'end-2::-2', 0, false ], [ 0, 0, -2 ] ],

		[ [ ':end/2:-2', 10, false ], [ 9, 4, -2 ] ],
		[ [ 'end/2::-2', 10, false ], [ 4, null, -2 ] ],

		[ [ ':end/2:-2', 5, false ], [ 4, 2, -2 ] ],
		[ [ 'end/2::-2', 5, false ], [ 2, null, -2 ] ],

		[ [ ':end/2:-2', 0, false ], [ 0, 0, -2 ] ],
		[ [ 'end/2::-2', 0, false ], [ 0, 0, -2 ] ],

		[ [ ':end/3:-2', 10, false ], [ 9, 3, -2 ] ],
		[ [ 'end/3::-2', 10, false ], [ 3, null, -2 ] ],

		[ [ ':end/3:-2', 5, false ], [ 4, 1, -2 ] ],
		[ [ 'end/3::-2', 5, false ], [ 1, null, -2 ] ],

		[ [ ':end/3:-2', 0, false ], [ 0, 0, -2 ] ],
		[ [ 'end/3::-2', 0, false ], [ 0, 0, -2 ] ],

		[ [ ':end/1.5:-2', 10, false ], [ 9, 6, -2 ] ],
		[ [ 'end/1.5::-2', 10, false ], [ 6, null, -2 ] ],

		[ [ ':end/1.5:-2', 5, false ], [ 4, 2, -2 ] ],
		[ [ 'end/1.5::-2', 5, false ], [ 2, null, -2 ] ],

		[ [ ':end/1.5:-2', 0, false ], [ 0, 0, -2 ] ],
		[ [ 'end/1.5::-2', 0, false ], [ 0, 0, -2 ] ]
	];

	for ( i = 0; i < values.length; i++ ) {
		args = values[ i ][ 0 ];
		o = seq2slice.apply( null, args );
		expected = values[ i ][ 1 ];
		v = JSON.stringify( values[ i ] );
		t.strictEqual( isSlice( o ), true, 'returns expected value. i: ' + i + '. Values: ' + v );
		t.strictEqual( o.start, expected[ 0 ], 'returns expected value. i: ' + i + '. Values: ' + v );
		t.strictEqual( o.stop, expected[ 1 ], 'returns expected value. i: ' + i + '. Values: ' + v );
		t.strictEqual( o.step, expected[ 2 ], 'returns expected value. i: ' + i + '. Values: ' + v );
	}
	t.end();
});
