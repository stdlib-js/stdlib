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
var validate = require( './../lib/validate.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof validate, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns an error if provided an options argument which is not an object', function test( t ) {
	var values;
	var err;
	var i;

	values = [
		'5',
		5,
		true,
		void 0,
		null,
		NaN,
		function noop() {},
		[]
	];

	for ( i = 0; i < values.length; i++ ) {
		err = validate( {}, values[ i ] );
		t.equals( err instanceof TypeError, true, 'returns a type error when provided '+values[i] );
	}
	t.end();
});

tape( 'the function returns an error if provided a `name` option which is not a string primitive', function test( t ) {
	var values;
	var err;
	var i;

	values = [
		5,
		true,
		void 0,
		null,
		NaN,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		err = validate( {}, {
			'name': values[ i ]
		});
		t.equal( err instanceof TypeError, true, 'returns a type error when provided '+values[i] );
	}
	t.end();
});

tape( 'the function returns an error if provided an `objectMode` option which is not a boolean primitive', function test( t ) {
	var values;
	var err;
	var i;

	values = [
		5,
		'5',
		void 0,
		null,
		NaN,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		err = validate( {}, {
			'objectMode': values[ i ]
		});
		t.equal( err instanceof TypeError, true, 'returns a type error when provided '+values[i] );
	}
	t.end();
});

tape( 'the function returns an error if provided a `readableObjectMode` option which is not a boolean primitive', function test( t ) {
	var values;
	var err;
	var i;

	values = [
		5,
		'5',
		void 0,
		null,
		NaN,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		err = validate( {}, {
			'readableObjectMode': values[ i ]
		});
		t.equal( err instanceof TypeError, true, 'returns a type error when provided '+values[i] );
	}
	t.end();
});

tape( 'the function returns an error if provided an `allowHalfOpen` option which is not a boolean primitive', function test( t ) {
	var values;
	var err;
	var i;

	values = [
		5,
		'5',
		void 0,
		null,
		NaN,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		err = validate( {}, {
			'allowHalfOpen': values[ i ]
		});
		t.equal( err instanceof TypeError, true, 'returns a type error when provided '+values[i] );
	}
	t.end();
});

tape( 'the function returns an error if provided a `highWaterMark` option which is not a nonnegative number', function test( t ) {
	var values;
	var err;
	var i;

	values = [
		-5,
		'5',
		void 0,
		null,
		NaN,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		err = validate( {}, {
			'highWaterMark': values[ i ]
		});
		t.equal( err instanceof TypeError, true, 'returns a type error when provided '+values[i] );
	}
	t.end();
});

tape( 'the function returns null if all options are valid', function test( t ) {
	var options;
	var opts;
	var err;

	options = {
		'name': 'beep',
		'objectMode': true,
		'readableObjectMode': true,
		'allowHalfOpen': true,
		'highWaterMark': 64
	};
	opts = {};
	err = validate( opts, options );

	t.equal( err, null, 'returns null' );
	t.deepEqual( opts, options, 'sets option values' );

	t.end();
});

tape( 'the function ignores unrecognized/unsupported options', function test( t ) {
	var options;
	var opts;
	var err;

	options = {
		'beep': true,
		'boop': 'bop'
	};
	opts = {};
	err = validate( opts, options );

	t.equal( err, null, 'returns null' );
	t.deepEqual( opts, {}, 'does not set any option values' );
	t.end();
});
