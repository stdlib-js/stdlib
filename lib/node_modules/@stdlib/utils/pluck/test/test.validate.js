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
	t.equal( typeof validate, 'function', 'main export is a function' );
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
		null,
		undefined,
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		err = validate( {}, values[ i ] );
		t.ok( err instanceof TypeError, 'returns a type error when provided ' + values[ i ] );
	}
	t.end();
});

tape( 'the function returns an error if provided a `copy` option which is not a boolean primitive', function test( t ) {
	var values;
	var err;
	var i;

	values = [
		'5',
		5,
		NaN,
		null,
		undefined,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		err = validate( {}, {
			'copy': values[ i ]
		});
		t.ok( err instanceof TypeError, 'returns a type error when provided ' + values[ i ] );
	}
	t.end();
});

tape( 'the function returns `null` if all options are valid', function test( t ) {
	var opts;
	var err;
	var obj;

	opts = {
		'copy': true
	};
	obj = {};
	err = validate( obj, opts );
	t.equal( err, null, 'returns null' );
	t.equal( obj.copy, opts.copy, 'sets copy option' );
	t.end();
});

tape( 'the function ignores unrecognized options', function test( t ) {
	var opts;
	var err;
	var obj;

	opts = {
		'beep': 'boop',
		'a': 'b'
	};
	obj = {};
	err = validate( obj, opts );
	t.equal( err, null, 'returns null' );
	t.deepEqual( obj, {}, 'does not set any properties' );
	t.end();
});
