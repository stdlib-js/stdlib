/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
var validate = require( './../lib/validate.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof validate, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns an error if not provided an options object', function test( t ) {
	var values;
	var err;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		err = validate( {}, values[i] );
		t.strictEqual( err instanceof TypeError, true, 'returns an error when provided '+values[i] );
	}
	t.end();
});

tape( 'the function returns an error if provided a `persist` option which is not a boolean', function test( t ) {
	var values;
	var err;
	var i;

	values = [
		'5',
		5,
		NaN,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		err = validate( {}, {
			'persist': values[i]
		});
		t.strictEqual( err instanceof TypeError, true, 'returns an error when provided '+values[i] );
	}
	t.end();
});

tape( 'the function returns an error if provided an invalid `kind` option', function test( t ) {
	var values;
	var err;
	var i;

	values = [
		'foo',
		'bar',
		'5',
		5,
		true,
		false,
		NaN,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		err = validate( {}, {
			'kind': values[i]
		});
		t.strictEqual( err instanceof TypeError, true, 'returns an error when provided '+values[i] );
	}
	t.end();
});

tape( 'the function returns `null` if all options are valid', function test( t ) {
	var expected;
	var options;
	var opts;
	var err;

	options = {
		'persist': true,
		'kind': 'linear'
	};
	opts = {};

	expected = {
		'persist': true,
		'kind': 'linear'
	};

	err = validate( opts, options );

	t.strictEqual( err, null, 'returns expected value' );
	t.deepEqual( opts, expected, 'returns expected value' );

	t.end();
});

tape( 'the function ignores unrecognized options', function test( t ) {
	var options;
	var opts;
	var err;

	options = {
		'beep': 'boop',
		'foo': 5,
		'bar': {}
	};

	opts = {};

	err = validate( opts, options );

	t.strictEqual( err, null, 'returns expected value' );
	t.deepEqual( opts, {}, 'returns expected value' );

	t.end();
});
