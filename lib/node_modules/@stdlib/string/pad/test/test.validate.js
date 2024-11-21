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

tape( 'if provided an `options` argument which is not an object, the function returns an error', function test( t ) {
	var values;
	var err;
	var i;

	values = [
		'5',
		5,
		null,
		NaN,
		void 0,
		true,
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		err = validate( {}, values[ i ] );
		t.ok( err instanceof TypeError, 'returns TypeError' );
	}
	t.end();
});

tape( 'if provided an invalid `lpad` option, the function returns an error', function test( t ) {
	var values;
	var err;
	var i;

	values = [
		5,
		null,
		NaN,
		void 0,
		true,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		err = validate( {}, {
			'lpad': values[ i ]
		});
		t.ok( err instanceof TypeError, 'returns TypeError' );
	}
	t.end();
});

tape( 'if provided an invalid `rpad` option, the function returns an error', function test( t ) {
	var values;
	var err;
	var i;

	values = [
		5,
		null,
		NaN,
		void 0,
		true,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		err = validate( {}, {
			'rpad': values[ i ]
		});
		t.ok( err instanceof TypeError, 'returns TypeError' );
	}
	t.end();
});

tape( 'if provided an invalid `centerRight` option, the function returns an error', function test( t ) {
	var values;
	var err;
	var i;

	values = [
		'5',
		5,
		null,
		NaN,
		void 0,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		err = validate( {}, {
			'centerRight': values[ i ]
		});
		t.ok( err instanceof TypeError, 'returns TypeError' );
	}
	t.end();
});

tape( 'if all options are valid, the function returns null', function test( t ) {
	var options;
	var opts;
	var err;

	opts = {};
	options = {
		'lpad': 'a',
		'rpad': 'b',
		'centerRight': true
	};
	err = validate( opts, options );

	t.equal( err, null, 'returns null' );
	t.equal( opts.lpad, options.lpad, 'sets the `lpad` option' );
	t.equal( opts.rpad, options.rpad, 'sets the `rpad` option' );
	t.equal( opts.centerRight, options.centerRight, 'sets the `centerRight` option' );

	t.end();
});

tape( 'the function ignores unrecognized options', function test( t ) {
	var err = validate( {}, {
		'beep': 'boop',
		'a': null,
		'b': 5
	});
	t.equal( err, null, 'returns null' );
	t.end();
});
