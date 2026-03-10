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
		null,
		NaN,
		true,
		void 0,
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		err = validate( {}, values[ i ] );
		t.strictEqual( err instanceof TypeError, true, 'returns a TypeError when provided '+values[ i ] );
	}
	t.end();
});

tape( 'the function returns an error if provided a separator option which is not a string primitive', function test( t ) {
	var values;
	var err;
	var i;

	values = [
		new String( '5' ), // eslint-disable-line no-new-wrappers
		5,
		null,
		NaN,
		true,
		void 0,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		err = validate( {}, {
			'sep': values[ i ]
		});
		t.strictEqual( err instanceof TypeError, true, 'returns a TypeError when provided '+values[ i ] );
	}
	t.end();
});

tape( 'the function returns `null` if all options are valid', function test( t ) {
	var opts;
	var obj;

	opts = {
		'sep': '_'
	};
	obj = {};
	t.strictEqual( validate( obj, opts ), null, 'returns expected value' );
	t.strictEqual( obj.sep, '_', 'sets sep option' );

	opts = {
		'beep': true,
		'boop': false
	};
	obj = {};
	t.strictEqual( validate( obj, opts ), null, 'returns expected value' );
	t.deepEqual( obj, {}, 'does not set any properties' );
	t.end();
});
