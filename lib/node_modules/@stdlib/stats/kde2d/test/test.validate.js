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
var gaussian = require( './../lib/gaussian.js' );
var validate = require( './../lib/validate.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof validate, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns a type error if not provided an options object', function test( t ) {
	var values;
	var err;
	var i;

	values = [
		'101',
		5,
		true,
		false,
		NaN,
		null,
		void 0,
		[],
		[{}, {}],
		[2, 3, 4],
		false,
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		err = validate( {}, values[i] );
		t.equal( err instanceof TypeError, true, 'returns a TypeError when provided '+values[i] );
	}
	t.end();
});

tape( 'the function returns a type error if provided an `h` option which is not a positive number array', function test( t ) {
	var values;
	var err;
	var i;

	values = [
		[],
		{},
		{
			'5': [],
			'6': 'frank'
		},
		6,
		[0],
		[-1, 0],
		[1, [1, 2]],
		null,
		NaN,
		[null, 5],
		[5, 6, 7, -1],
		'5',
		void 0,
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		err = validate( {}, {
			'h': values[i]
		});
		t.equal( err instanceof TypeError, true, 'returns a TypeError when provided '+values[i] );
	}
	t.end();
});

tape( 'the function returns a type error if provided an `h` option that is a positive number array not of length two', function test( t ) {
	var values;
	var err;
	var i;

	values = [
		[1],
		[1, 2, 3],
		[4, 5, 6, 7],
		[1, 1, 1, 1],
		[1, 2, 3]
	];

	for ( i = 0; i < values.length; i++ ) {
		err = validate( {}, {
			'h': values[i]
		});
		t.equal( err instanceof TypeError, true, 'returns a TypeError when provided '+values[i] );
	}
	t.end();
});

tape( 'the function returns a type error if provided an `n` option which is not a positive integer', function test( t ) {
	var values;
	var err;
	var i;

	values = [
		[],
		[1, 2],
		[1],
		-1,
		NaN,
		null,
		{},
		{
			'5': [],
			'6': 'frank'
		},
		-6.5,
		[0],
		[-1, 0],
		[1, [1, 2]],
		null,
		NaN,
		[null, 5],
		[5, 6, 7, -1],
		'5',
		void 0,
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		err = validate( {}, {
			'n': values[i]
		});
		t.equal( err instanceof TypeError, true, 'returns a TypeError when provided '+values[i] );
	}
	t.end();
});

tape( 'the function returns a type error if provided an `xMax` option that is not a number', function test( t ) {
	var values;
	var err;
	var i;

	values = [
		[],
		['1', 2],
		{
			'x': []
		},
		NaN,
		null,
		{},
		{
			'5': [],
			'6': 'frank'
		},
		[1, [1, 2]],
		null,
		NaN,
		[null, 5],
		'5',
		void 0,
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		err = validate( {}, {
			'xMax': values[i]
		});
		t.equal( err instanceof TypeError, true, 'returns a TypeError when provided '+values[i] );
	}
	t.end();
});

tape( 'the function returns a type error if provided an `xMin` option that is not a number', function test( t ) {
	var values;
	var err;
	var i;

	values = [
		[],
		['1', 2],
		{
			'x': []
		},
		NaN,
		null,
		{},
		{
			'5': [],
			'6': 'frank'
		},
		[1, [1, 2]],
		null,
		NaN,
		[null, 5],
		'5',
		void 0,
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		err = validate( {}, {
			'xMin': values[i]
		});
		t.equal( err instanceof TypeError, true, 'returns a TypeError when provided '+values[i] );
	}
	t.end();
});

tape( 'the function returns a type error if provided a `yMax` option that is not a number', function test( t ) {
	var values;
	var err;
	var i;

	values = [
		[],
		['1', 2],
		{
			'x': []
		},
		NaN,
		null,
		{},
		{
			'5': [],
			'6': 'frank'
		},
		[1, [1, 2]],
		null,
		NaN,
		[null, 5],
		'5',
		void 0,
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		err = validate( {}, {
			'yMax': values[i]
		});
		t.equal( err instanceof TypeError, true, 'returns a TypeError when provided '+values[i] );
	}
	t.end();
});

tape( 'the function returns a type error if provided a `yMin` option that is not a number', function test( t ) {
	var values;
	var err;
	var i;

	values = [
		[],
		['1', 2],
		{
			'x': []
		},
		NaN,
		null,
		{},
		{
			'5': [],
			'6': 'frank'
		},
		[1, [1, 2]],
		null,
		NaN,
		[null, 5],
		'5',
		void 0,
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		err = validate( {}, {
			'yMin': values[i]
		});
		t.equal( err instanceof TypeError, true, 'returns a TypeError when provided '+values[i] );
	}
	t.end();
});

tape( 'the function returns a type error if provided a `kernel` option that does not match a kernel function', function test( t ) {
	var values;
	var err;
	var i;

	values = [
		'norm',
		'frank',
		'rosie',
		'jordan',
		'mudge',
		'alex'
	];

	for ( i = 0; i < values.length; i++ ) {
		err = validate( {}, {
			'kernel': values[i]
		});
		t.equal( err instanceof Error, true, 'returns a Error when provided '+values[i] );
	}
	t.end();
});

tape( 'the function returns a type error if provided a `kernel` option that is not a string or function', function test( t ) {
	var values;
	var err;
	var i;

	values = [
		0,
		{},
		[1, 2],
		[function frank( x ) { return x; }, 1]
	];

	for ( i = 0; i < values.length; i++ ) {
		err = validate( {}, {
			'kernel': values[i]
		});
		t.equal( err instanceof Error, true, 'returns a Error when provided '+values[i] );
	}
	t.end();
});

tape( 'the function returns `null` if all options are valid', function test( t ) {
	var expected;
	var options;
	var opts;
	var err;

	options = {
		'h': [ 0.1, 0.1 ],
		'n': 35,
		'xMin': 35,
		'xMax': 40,
		'yMin': 1,
		'yMax': 2,
		'kernel': 'gaussian'
	};
	opts = {};

	expected = {
		'h': [ 0.1, 0.1 ],
		'n': options.n,
		'xMin': options.xMin,
		'xMax': options.xMax,
		'yMin': options.yMin,
		'yMax': options.yMax,
		'kernel': gaussian
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
		'bar': {},
		'student': 'stressed',
		'commits': 6666
	};

	opts = {};

	err = validate( opts, options );

	t.equal( err, null, 'returns null' );
	t.deepEqual( opts, {}, 'ignores unrecognized options' );

	t.end();
});
