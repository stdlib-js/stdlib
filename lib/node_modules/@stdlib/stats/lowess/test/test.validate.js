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

tape( 'the function returns an error if not provided an object', function test( t ) {
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
		t.equal( err instanceof TypeError, true, 'returns a type error when provided '+values[i] );
	}
	t.end();
});

tape( 'the function returns an error if provided an `f` option which is not a positive number', function test( t ) {
	var values;
	var err;
	var i;

	values = [
		'5',
		-1,
		true,
		false,
		void 0,
		null,
		NaN,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		err = validate( {}, {
			'f': values[i]
		});
		t.equal( err instanceof TypeError, true, 'returns a type error when provided '+values[i] );
	}
	t.end();
});

tape( 'the function returns an error if provided an `nsteps` option which is not a nonnegative integer', function test( t ) {
	var values;
	var err;
	var i;

	values = [
		'5',
		true,
		false,
		void 0,
		null,
		NaN,
		[],
		{},
		function noop() {},
		3.14,
		-2
	];

	for ( i = 0; i < values.length; i++ ) {
		err = validate( {}, {
			'nsteps': values[i]
		});
		t.equal( err instanceof TypeError, true, 'returns a type error when provided '+values[i] );
	}
	t.end();
});

tape( 'the function returns an error if provided a `delta` option which is not a nonnegative number', function test( t ) {
	var values;
	var err;
	var i;

	values = [
		'5',
		true,
		false,
		void 0,
		null,
		NaN,
		[],
		{},
		function noop() {},
		-2
	];

	for ( i = 0; i < values.length; i++ ) {
		err = validate( {}, {
			'delta': values[i]
		});
		t.equal( err instanceof TypeError, true, 'returns a type error when provided '+values[i] );
	}
	t.end();
});

tape( 'the function returns an error if provided a `sorted` option which is not a boolean primitive', function test( t ) {
	var values;
	var err;
	var i;

	values = [
		'5',
		5,
		void 0,
		null,
		NaN,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		err = validate( {}, {
			'sorted': values[i]
		});
		t.equal( err instanceof TypeError, true, 'returns a type error when provided '+values[i] );
	}
	t.end();
});

tape( 'the function returns `null` if all options are valid', function test( t ) {
	var options;
	var opts;
	var err;

	options = {};
	opts = {
		'f': 0.75,
		'nsteps': 0,
		'sorted': true
	};

	err = validate( options, opts );
	t.equal( err, null, 'returns null' );

	t.deepEqual( options, opts, 'sets options' );
	t.end();
});

tape( 'the function ignores unrecognized/unsupported options', function test( t ) {
	var options;
	var opts;
	var err;

	options = {};
	opts = {
		'beep': true,
		'boop': 3.14,
		'foo': 'bar'
	};

	err = validate( options, opts );
	t.equal( err, null, 'returns null' );

	t.deepEqual( options, {}, 'does not set unrecognized options' );
	t.end();
});
