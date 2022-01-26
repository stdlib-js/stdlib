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
		false,
		void 0,
		null,
		NaN,
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		err = validate( {}, values[ i ] );
		t.strictEqual( err instanceof TypeError, true, 'returns a type error when provided '+values[i] );
	}
	t.end();
});

tape( 'the function returns an error if provided an unrecognized/unsupported `mode` option', function test( t ) {
	var values;
	var opts;
	var err;
	var i;

	values = [
		'5',
		'beep',
		'boop',
		'foo',
		'bar',
		'throws',
		'wraps',
		'clamps',
		'clip',
		'clamped',
		'error',
		'err',
		5,
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
		opts = {
			'mode': values[ i ]
		};
		err = validate( {}, opts );
		t.strictEqual( err instanceof TypeError, true, 'returns a type error when provided '+values[i] );
	}
	t.end();
});

tape( 'the function returns an error if provided a `submode` option which is not an array containing recognized/supported modes', function test( t ) {
	var values;
	var opts;
	var err;
	var i;

	values = [
		'5',
		'beep',
		'boop',
		'foo',
		'bar',
		'throws',
		'wraps',
		'clamps',
		'clip',
		'clamped',
		'error',
		'err',
		5,
		true,
		false,
		void 0,
		null,
		NaN,
		[],
		[ 'throw', 'wrap', 'clamp', 'foo' ],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		opts = {
			'submode': values[ i ]
		};
		err = validate( {}, opts );
		t.strictEqual( err instanceof TypeError, true, 'returns a type error when provided '+values[i] );
	}
	t.end();
});

tape( 'the function returns an error if provided a `readonly` option which is not a boolean', function test( t ) {
	var values;
	var opts;
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
		opts = {
			'readonly': values[ i ]
		};
		err = validate( {}, opts );
		t.strictEqual( err instanceof TypeError, true, 'returns a type error when provided '+values[i] );
	}
	t.end();
});

tape( 'the function returns `null` if all options are valid', function test( t ) {
	var options;
	var opts;
	var err;

	opts = {};
	options = {
		'mode': 'wrap',
		'submode': [ 'throw', 'wrap', 'clamp' ],
		'readonly': true
	};

	err = validate( opts, options );
	t.strictEqual( err, null, 'returns null' );
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
	t.strictEqual( err, null, 'returns null' );
	t.deepEqual( opts, {}, 'ignores unrecognized options' );

	t.end();
});
