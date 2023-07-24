/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

tape( 'if provided an `options` argument which is not an `object`, the function returns a type error', function test( t ) {
	var values;
	var opts;
	var err;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		null,
		void 0,
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		opts = {};
		err = validate( opts, values[i] );
		t.equal( err instanceof TypeError, true, 'returns a type error when provided '+values[i] );
	}
	t.end();
});

tape( 'if provided a `dir` option which is not a `string`, the function returns a type error', function test( t ) {
	var values;
	var opts;
	var err;
	var i;

	values = [
		5,
		NaN,
		true,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		opts = {};
		err = validate( opts, {
			'dir': values[i]
		});
		t.equal( err instanceof TypeError, true, 'returns a type error when provided '+values[i] );
	}
	t.end();
});

tape( 'the function returns `null` if all options are valid', function test( t ) {
	var opts;
	var obj;
	var err;

	opts = {
		'dir': './beep/boop'
	};
	obj = {};
	err = validate( obj, opts );

	t.equal( err, null, 'returns null' );
	t.equal( obj.dir, opts.dir, 'sets dir option' );

	t.end();
});

tape( 'the function ignores unsupported/unrecognized options', function test( t ) {
	var opts;
	var obj;
	var err;

	opts = {
		'beep': 'boop',
		'a': 'b',
		'c': [ 1, 2, 3 ]
	};
	obj = {};
	err = validate( obj, opts );

	t.equal( err, null, 'returns null' );
	t.deepEqual( obj, {}, 'does not set any options' );

	t.end();
});
