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

tape( 'the function returns an error if provided a `metric` option which is not a recognized value', function test( t ) {
	var values;
	var opts;
	var err;
	var i;

	values = [
		'5',
		'beep',
		'boop',
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
			'metric': values[ i ]
		};
		err = validate( {}, opts );
		t.strictEqual( err instanceof TypeError, true, 'returns a type error when provided '+values[i] );
	}
	t.end();
});

tape( 'the function returns an error if provided an `init` option which is not an array-like object', function test( t ) {
	var options;
	var values;
	var opts;
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
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		opts = {
			'init': [ 'kmeans++' ]
		};
		options = {
			'init': values[ i ]
		};
		err = validate( opts, options );
		t.strictEqual( err instanceof TypeError, true, 'returns a type error when provided '+values[i] );
	}
	t.end();
});

tape( 'the function returns an error if provided an initialization method which is not a recognized value', function test( t ) {
	var options;
	var values;
	var opts;
	var err;
	var i;

	values = [
		'5',
		'beep',
		'boop',
		5,
		true,
		false,
		void 0,
		null,
		NaN,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		opts = {
			'init': [ 'kmeans++' ]
		};
		options = {
			'init': [ values[ i ] ]
		};
		err = validate( opts, options );
		t.strictEqual( err instanceof TypeError, true, 'returns a type error when provided '+values[i] );
	}
	t.end();
});

tape( 'the function returns an error if provided an initialization buffer size which is not a positive integer', function test( t ) {
	var options;
	var values;
	var opts;
	var err;
	var i;

	values = [
		'5',
		-5,
		3.14,
		0,
		true,
		false,
		void 0,
		null,
		NaN,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		opts = {
			'init': [ 'kmeans++' ]
		};
		options = {
			'init': [ 'kmeans++', values[ i ] ]
		};
		err = validate( opts, options );
		t.strictEqual( err instanceof TypeError, true, 'returns a type error when provided '+values[i] );
	}
	t.end();
});

tape( 'the function returns an error if provided a k-means++ trial option which is not a positive integer', function test( t ) {
	var options;
	var values;
	var opts;
	var err;
	var i;

	values = [
		'5',
		-5,
		3.14,
		0,
		true,
		false,
		void 0,
		null,
		NaN,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		opts = {
			'init': [ 'kmeans++' ]
		};
		options = {
			'init': [ 'kmeans++', 100, values[ i ] ]
		};
		err = validate( opts, options );
		t.strictEqual( err instanceof TypeError, true, 'returns a type error when provided '+values[i] );
	}
	t.end();
});

tape( 'the function returns an error if provided a `normalize` option which is not a boolean', function test( t ) {
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
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		opts = {
			'normalize': values[ i ]
		};
		err = validate( {}, opts );
		t.strictEqual( err instanceof TypeError, true, 'returns a type error when provided '+values[i] );
	}
	t.end();
});

tape( 'the function returns an error if provided a `copy` option which is not a boolean', function test( t ) {
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
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		opts = {
			'copy': values[ i ]
		};
		err = validate( {}, opts );
		t.strictEqual( err instanceof TypeError, true, 'returns a type error when provided '+values[i] );
	}
	t.end();
});

tape( 'the function allows any value for the PRNG seed', function test( t ) {
	var values;
	var opts;
	var err;
	var i;

	values = [
		'5',
		5,
		false,
		true,
		void 0,
		null,
		NaN,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		opts = {
			'seed': values[ i ]
		};
		err = validate( {}, opts );
		t.strictEqual( err, null, 'returns `null` when provided '+values[i] );
	}
	t.end();
});

tape( 'the function returns `null` if all options are valid', function test( t ) {
	var options;
	var opts;
	var err;

	opts = {
		'init': [ 'kmeans++' ]
	};
	options = {
		'metric': 'euclidean',
		'init': [ 'kmeans++', 10, 1 ],
		'normalize': false,
		'copy': false,
		'seed': 1234
	};

	err = validate( opts, options );
	t.strictEqual( err, null, 'returns expected value' );
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
	t.strictEqual( err, null, 'returns expected value' );
	t.deepEqual( opts, {}, 'ignores unrecognized options' );

	t.end();
});
