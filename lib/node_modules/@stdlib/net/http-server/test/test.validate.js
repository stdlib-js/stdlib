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

tape( 'the function returns an error if provided an `options` argument which is not an object', function test( t ) {
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
		t.equal( err instanceof TypeError, true, 'returns a TypeError when provided '+values[i] );
	}
	t.end();
});

tape( 'the function returns an error if provided a `port` option which is not a nonnegative integer', function test( t ) {
	var values;
	var err;
	var i;

	values = [
		-5,
		3.14,
		'5',
		void 0,
		null,
		NaN,
		true,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		err = validate( {}, {
			'port': values[ i ]
		});
		t.equal( err instanceof TypeError, true, 'returns a TypeError when provided '+values[i] );
	}
	t.end();
});

tape( 'the function returns an error if provided a `maxport` option which is not a nonnegative integer', function test( t ) {
	var values;
	var err;
	var i;

	values = [
		-5,
		3.14,
		'5',
		void 0,
		null,
		NaN,
		true,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		err = validate( {}, {
			'maxport': values[ i ]
		});
		t.equal( err instanceof TypeError, true, 'returns a TypeError when provided '+values[i] );
	}
	t.end();
});

tape( 'the function returns an error if provided a `hostname` option which is not string primitive', function test( t ) {
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
			'hostname': values[ i ]
		});
		t.equal( err instanceof TypeError, true, 'returns a TypeError when provided '+values[i] );
	}
	t.end();
});

tape( 'the function returns an error if provided an `address` option which is not string primitive', function test( t ) {
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
			'address': values[ i ]
		});
		t.equal( err instanceof TypeError, true, 'returns a TypeError when provided '+values[i] );
	}
	t.end();
});

tape( 'the function returns `null` if all options are valid', function test( t ) {
	var options;
	var opts;
	var err;

	opts = {};
	options = {
		'port': 7331,
		'maxport': 9999,
		'hostname': 'localhost',
		'address': '0.0.0.0'
	};

	err = validate( opts, options );
	t.equal( err, null, 'returns null' );
	t.deepEqual( opts, options, 'sets options' );

	t.end();
});

tape( 'the function will ignore unrecognized options', function test( t ) {
	var options;
	var opts;
	var err;

	opts = {};
	options = {
		'beep': true,
		'boop': 'bop'
	};

	err = validate( opts, options );
	t.equal( err, null, 'returns null' );
	t.deepEqual( opts, {}, 'ignores unrecognized options' );

	t.end();
});
