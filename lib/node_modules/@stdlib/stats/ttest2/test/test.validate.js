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
	t.equal( typeof validate, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns a type error if not provided an options object', function test( t ) {
	var values;
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
		err = validate( {}, values[i] );
		t.equal( err instanceof TypeError, true, 'returns a TypeError when provided '+values[i] );
	}
	t.end();
});

tape( 'the function returns a type error if provided a `alpha` option which is not a `number` primitive', function test( t ) {
	var values;
	var err;
	var i;

	values = [
		'5',
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
			'alpha': values[i]
		});
		t.equal( err instanceof TypeError, true, 'returns a TypeError when provided '+values[i] );
	}
	t.end();
});

tape( 'the function returns a type error if provided an `alternative` option which is not a `string` primitive', function test( t ) {
	var values;
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
		err = validate( {}, {
			'alternative': values[i]
		});
		t.equal( err instanceof TypeError, true, 'returns a TypeError when provided '+values[i] );
	}
	t.end();
});

tape( 'the function returns a type error if provided a `difference` option which is not a `number` primitive', function test( t ) {
	var values;
	var err;
	var i;

	values = [
		'5',
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
			'difference': values[i]
		});
		t.equal( err instanceof TypeError, true, 'returns a TypeError when provided '+values[i] );
	}
	t.end();
});

tape( 'the function returns a type error if provided a `variance` option which is not a `string` primitive', function test( t ) {
	var values;
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
		err = validate( {}, {
			'variance': values[i]
		});
		t.equal( err instanceof TypeError, true, 'returns a TypeError when provided '+values[i] );
	}
	t.end();
});

tape( 'the function returns `null` if all options are valid', function test( t ) {
	var expected;
	var options;
	var opts;
	var err;

	options = {
		'alternative': 'greater',
		'alpha': 0.05,
		'difference': 1.0,
		'variance': 'equal'
	};
	opts = {};

	expected = {
		'alternative': options.alternative,
		'difference': options.difference,
		'alpha': options.alpha,
		'variance': options.variance
	};

	err = validate( opts, options );

	t.equal( err, null, 'returns null' );
	t.deepEqual( opts, expected, 'extracts options' );

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

	t.equal( err, null, 'returns null' );
	t.deepEqual( opts, {}, 'ignores unrecognized options' );

	t.end();
});
