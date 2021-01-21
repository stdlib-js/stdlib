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
var abs = require( '@stdlib/math/base/special/abs' );
var dabs = require( '@stdlib/math/strided/special/dabs' );
var sabs = require( '@stdlib/math/strided/special/sabs' );
var gabs = require( '@stdlib/math/strided/special/abs' );
var validate = require( './../lib/validate.js' );


// FUNCTIONS //

/**
* Returns a destination object.
*
* @private
* @returns {Object} destination object
*/
function output() {
	return {
		'scalar': [],
		'array': [],
		'ndarray': []
	};
}


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof validate, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns an error if provided a `table` argument which is not an object', function test( t ) {
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
		err = validate( output(), values[ i ] );
		t.strictEqual( err instanceof TypeError, true, 'returns a type error when provided '+values[i] );
	}
	t.end();
});

tape( 'the function returns an error if provided a "scalar" field value which is not an array-like object', function test( t ) {
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
			'scalar': values[ i ]
		};
		err = validate( output(), opts );
		t.strictEqual( err instanceof TypeError, true, 'returns a type error when provided '+values[i] );
	}
	t.end();
});

tape( 'the function returns an error if provided an "array" field value which is not an array-like object', function test( t ) {
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
			'array': values[ i ]
		};
		err = validate( output(), opts );
		t.strictEqual( err instanceof TypeError, true, 'returns a type error when provided '+values[i] );
	}
	t.end();
});

tape( 'the function returns an error if provided an "ndarray" field value which is not an array-like object', function test( t ) {
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
			'ndarray': values[ i ]
		};
		err = validate( output(), opts );
		t.strictEqual( err instanceof TypeError, true, 'returns a type error when provided '+values[i] );
	}
	t.end();
});

tape( 'the function returns an error if provided a "scalar" field value having an odd number of elements', function test( t ) {
	var values;
	var opts;
	var err;
	var i;

	values = [
		[ 'number' ],
		[ 'number', abs, 'complex' ],
		[ 'number', abs, 'complex', abs, 'generic' ]
	];

	for ( i = 0; i < values.length; i++ ) {
		opts = {
			'scalar': values[ i ]
		};
		err = validate( output(), opts );
		t.strictEqual( err instanceof Error, true, 'returns an error when provided '+values[i] );
	}
	t.end();
});

tape( 'the function returns an error if provided an "array" field value having an odd number of elements', function test( t ) {
	var values;
	var opts;
	var err;
	var i;

	values = [
		[ 'float64' ],
		[ 'float64', dabs, 'float32' ],
		[ 'float64', dabs, 'float32', sabs, 'generic' ]
	];

	for ( i = 0; i < values.length; i++ ) {
		opts = {
			'array': values[ i ]
		};
		err = validate( output(), opts );
		t.strictEqual( err instanceof Error, true, 'returns an error when provided '+values[i] );
	}
	t.end();
});

tape( 'the function returns an error if provided an "ndarray" field value having an odd number of elements', function test( t ) {
	var values;
	var opts;
	var err;
	var i;

	values = [
		[ 'float64' ],
		[ 'float64', dabs.ndarray, 'float32' ],
		[ 'float64', dabs.ndarray, 'float32', sabs.ndarray, 'generic' ]
	];

	for ( i = 0; i < values.length; i++ ) {
		opts = {
			'ndarray': values[ i ]
		};
		err = validate( output(), opts );
		t.strictEqual( err instanceof Error, true, 'returns an error when provided '+values[i] );
	}
	t.end();
});

tape( 'the function returns an error if provided a "scalar" field value which does not have interleaved dtype-function pairs', function test( t ) {
	var values;
	var opts;
	var err;
	var i;

	values = [
		[ abs, 'number' ],
		[ 'number', 'complex' ],
		[ 'number', 'complex', abs, abs ],
		[ 'number', abs, abs, 'complex' ],
		[ 'number', 'complex', 'generic', 'number' ]
	];

	for ( i = 0; i < values.length; i++ ) {
		opts = {
			'scalar': values[ i ]
		};
		err = validate( output(), opts );
		t.strictEqual( err instanceof TypeError, true, 'returns a type error when provided '+values[i] );
	}
	t.end();
});

tape( 'the function returns an error if provided an "array" field value which does not have interleaved dtype-function pairs', function test( t ) {
	var values;
	var opts;
	var err;
	var i;

	values = [
		[ dabs, 'float64' ],
		[ 'float64', 'float32' ],
		[ 'float64', 'float32', dabs, sabs ],
		[ 'float64', dabs, sabs, 'float32' ],
		[ 'float64', 'float32', 'generic', 'float16' ]
	];

	for ( i = 0; i < values.length; i++ ) {
		opts = {
			'array': values[ i ]
		};
		err = validate( output(), opts );
		t.strictEqual( err instanceof TypeError, true, 'returns a type error when provided '+values[i] );
	}
	t.end();
});

tape( 'the function returns an error if provided an "ndarray" field value which does not have interleaved dtype-function pairs', function test( t ) {
	var values;
	var opts;
	var err;
	var i;

	values = [
		[ dabs.ndarray, 'float64' ],
		[ 'float64', 'float32' ],
		[ 'float64', 'float32', dabs.ndarray, sabs.ndarray ],
		[ 'float64', dabs.ndarray, sabs.ndarray, 'float32' ],
		[ 'float64', 'float32', 'generic', 'float16' ]
	];

	for ( i = 0; i < values.length; i++ ) {
		opts = {
			'array': values[ i ]
		};
		err = validate( output(), opts );
		t.strictEqual( err instanceof TypeError, true, 'returns a type error when provided '+values[i] );
	}
	t.end();
});

tape( 'the function returns `null` if provided a valid table object', function test( t ) {
	var table;
	var out;
	var err;

	out = output();
	table = {
		'scalar': [
			'number',
			abs
		],
		'array': [
			'float64',
			dabs,
			'float32',
			sabs,
			'generic',
			gabs
		],
		'ndarray': [
			'float64',
			dabs.ndarray,
			'float32',
			sabs.ndarray,
			'generic',
			gabs.ndarray
		]
	};

	err = validate( out, table );
	t.strictEqual( err, null, 'returns null' );
	t.deepEqual( out, table, 'sets fields' );

	t.end();
});

tape( 'the function will ignore unrecognized table fields', function test( t ) {
	var table;
	var out;
	var err;

	out = output();
	table = {
		'beep': [],
		'boop': []
	};

	err = validate( out, table );
	t.strictEqual( err, null, 'returns null' );
	t.deepEqual( out, output(), 'ignores unrecognized fields' );

	t.end();
});
