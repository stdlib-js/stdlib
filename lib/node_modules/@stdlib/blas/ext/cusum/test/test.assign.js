/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
var isSameArray = require( '@stdlib/assert/is-same-array' );
var ndarray = require( '@stdlib/ndarray/ctor' );
var zeros = require( '@stdlib/ndarray/zeros' );
var empty = require( '@stdlib/ndarray/empty' );
var emptyLike = require( '@stdlib/ndarray/empty-like' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
var getData = require( '@stdlib/ndarray/data-buffer' );
var cusum = require( './../lib' ).assign;


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof cusum, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided a first argument which is not an ndarray-like object', function test( t ) {
	var values;
	var out;
	var i;

	out = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			cusum( value, out );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not an ndarray-like object (initial scalar)', function test( t ) {
	var values;
	var out;
	var i;

	out = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			cusum( value, 10.0, out );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not an ndarray-like object (initial ndarray)', function test( t ) {
	var values;
	var opts;
	var out;
	var i;

	opts = {
		'dtype': 'generic'
	};
	out = zeros( [ 2, 2 ], opts );

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			cusum( value, scalar2ndarray( 10.0, opts ), out );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not an ndarray-like object (options)', function test( t ) {
	var values;
	var out;
	var i;

	out = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			cusum( value, out, {} );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not an ndarray-like object (initial scalar, options)', function test( t ) {
	var values;
	var out;
	var i;

	out = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			cusum( value, 10.0, out, {} );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not an ndarray-like object (initial ndarray, options)', function test( t ) {
	var values;
	var opts;
	var out;
	var i;

	opts = {
		'dtype': 'generic'
	};
	out = zeros( [ 2, 2 ], opts );

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			cusum( value, scalar2ndarray( 10.0, opts ), out, {} );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not an ndarray-like object having a supported data type', function test( t ) {
	var values;
	var out;
	var i;

	out = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});

	values = [
		empty( [ 2, 2 ], {
			'dtype': 'bool'
		})
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			cusum( value, out );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not an ndarray-like object having a supported data type (initial scalar)', function test( t ) {
	var values;
	var out;
	var i;

	out = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});

	values = [
		empty( [ 2, 2 ], {
			'dtype': 'bool'
		})
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			cusum( value, 10.0, out );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not an ndarray-like object having a supported data type (initial ndarray)', function test( t ) {
	var values;
	var opts;
	var out;
	var i;

	opts = {
		'dtype': 'generic'
	};
	out = zeros( [ 2, 2 ], opts );

	values = [
		empty( [ 2, 2 ], {
			'dtype': 'bool'
		})
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			cusum( value, scalar2ndarray( 10.0, opts ), out );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not an ndarray-like object having a supported data type (options)', function test( t ) {
	var values;
	var out;
	var i;

	out = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});

	values = [
		empty( [ 2, 2 ], {
			'dtype': 'bool'
		})
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			cusum( value, out, {} );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not an ndarray-like object having a supported data type (initial scalar, options)', function test( t ) {
	var values;
	var out;
	var i;

	out = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});

	values = [
		empty( [ 2, 2 ], {
			'dtype': 'bool'
		})
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			cusum( value, 10.0, out, {} );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not an ndarray-like object having a supported data type (initial ndarray, options)', function test( t ) {
	var values;
	var opts;
	var out;
	var i;

	opts = {
		'dtype': 'generic'
	};
	out = zeros( [ 2, 2 ], opts );

	values = [
		empty( [ 2, 2 ], {
			'dtype': 'bool'
		})
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			cusum( value, scalar2ndarray( 10.0, opts ), out, {} );
		};
	}
});

tape( 'the function throws an error if provided an initial value which is not an ndarray-like object or a valid scalar', function test( t ) {
	var values;
	var opts;
	var out;
	var x;
	var i;

	opts = {
		'dtype': 'generic'
	};
	x = zeros( [ 2, 2 ], opts );
	out = zeros( [ 2, 2 ], opts );

	values = [
		'5',
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			cusum( x, value, out );
		};
	}
});

tape( 'the function throws an error if provided an initial value which is not an ndarray-like object or a valid scalar (options)', function test( t ) {
	var values;
	var opts;
	var out;
	var x;
	var i;

	opts = {
		'dtype': 'generic'
	};
	x = zeros( [ 2, 2 ], opts );
	out = zeros( [ 2, 2 ], opts );

	values = [
		'5',
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			cusum( x, value, out, {} );
		};
	}
});

tape( 'the function throws an error if provided an initial value which is not broadcast-compatible', function test( t ) {
	var values;
	var opts;
	var out;
	var x;
	var i;

	opts = {
		'dtype': 'generic'
	};
	x = zeros( [ 2, 2 ], opts );
	out = zeros( [ 2, 2 ], opts );

	values = [
		zeros( [ 4 ], opts ),
		zeros( [ 2, 2, 2 ], opts ),
		zeros( [ 0 ], opts )
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), Error, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			cusum( x, value, out );
		};
	}
});

tape( 'the function throws an error if provided an initial value which is not broadcast-compatible (options)', function test( t ) {
	var values;
	var opts;
	var out;
	var x;
	var i;

	opts = {
		'dtype': 'generic'
	};
	x = zeros( [ 2, 2 ], opts );
	out = zeros( [ 2, 2 ], opts );

	values = [
		zeros( [ 4 ], opts ),
		zeros( [ 2, 2, 2 ], opts ),
		zeros( [ 0 ], opts )
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), Error, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			cusum( x, value, out, {} );
		};
	}
});

tape( 'the function throws an error if provided an output argument which is not an ndarray-like object', function test( t ) {
	var values;
	var x;
	var i;

	x = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			cusum( x, value );
		};
	}
});

tape( 'the function throws an error if provided an output argument which is not an ndarray-like object (initial scalar)', function test( t ) {
	var values;
	var x;
	var i;

	x = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			cusum( x, 10.0, value );
		};
	}
});

tape( 'the function throws an error if provided an output argument which is not an ndarray-like object (initial ndarray)', function test( t ) {
	var values;
	var opts;
	var x;
	var i;

	opts = {
		'dtype': 'generic'
	};
	x = zeros( [ 2, 2 ], opts );

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			cusum( x, scalar2ndarray( 10.0, opts ), value );
		};
	}
});

tape( 'the function throws an error if provided an output argument which is not an ndarray-like object (options)', function test( t ) {
	var values;
	var x;
	var i;

	x = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			cusum( x, value, {} );
		};
	}
});

tape( 'the function throws an error if provided an output argument which is not an ndarray-like object (initial scalar, options)', function test( t ) {
	var values;
	var opts;
	var x;
	var i;

	opts = {
		'dtype': 'generic'
	};
	x = zeros( [ 2, 2 ], opts );

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			cusum( x, 10.0, value, {} );
		};
	}
});

tape( 'the function throws an error if provided an output argument which is not an ndarray-like object (initial ndarray, options)', function test( t ) {
	var values;
	var opts;
	var x;
	var i;

	opts = {
		'dtype': 'generic'
	};
	x = zeros( [ 2, 2 ], opts );

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			cusum( x, scalar2ndarray( 10.0, opts ), value, {} );
		};
	}
});

tape( 'the function throws an error if provided an options argument which is not an object', function test( t ) {
	var values;
	var opts;
	var out;
	var x;
	var i;

	opts = {
		'dtype': 'generic'
	};
	x = zeros( [ 2, 2 ], opts );
	out = zeros( [ 2, 2 ], opts );

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			cusum( x, out, value );
		};
	}
});

tape( 'the function throws an error if provided an options argument which is not an object (initial scalar)', function test( t ) {
	var values;
	var opts;
	var out;
	var x;
	var i;

	opts = {
		'dtype': 'generic'
	};
	x = zeros( [ 2, 2 ], opts );
	out = zeros( [ 2, 2 ], opts );

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			cusum( x, 10.0, out, value );
		};
	}
});

tape( 'the function throws an error if provided an options argument which is not an object (initial ndarray)', function test( t ) {
	var values;
	var opts;
	var out;
	var x;
	var i;

	opts = {
		'dtype': 'generic'
	};
	x = zeros( [ 2, 2 ], opts );
	out = zeros( [ 2, 2 ], opts );

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			cusum( x, scalar2ndarray( 10.0, opts ), out, value );
		};
	}
});

tape( 'the function throws an error if provided a `dims` option which is not an array-like object of integers', function test( t ) {
	var values;
	var opts;
	var out;
	var x;
	var i;

	opts = {
		'dtype': 'generic'
	};
	x = zeros( [ 2, 2 ], opts );
	out = zeros( [ 2, 2 ], opts );

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		[ 'a' ],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			cusum( x, out, {
				'dims': value
			});
		};
	}
});

tape( 'the function throws an error if provided a `dims` option which is not an array-like object of integers (initial scalar)', function test( t ) {
	var values;
	var opts;
	var out;
	var x;
	var i;

	opts = {
		'dtype': 'generic'
	};
	x = zeros( [ 2, 2 ], opts );
	out = zeros( [ 2, 2 ], opts );

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		[ 'a' ],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			cusum( x, 10.0, out, {
				'dims': value
			});
		};
	}
});

tape( 'the function throws an error if provided a `dims` option which is not an array-like object of integers (initial ndarray)', function test( t ) {
	var values;
	var opts;
	var out;
	var x;
	var i;

	opts = {
		'dtype': 'generic'
	};
	x = zeros( [ 2, 2 ], opts );
	out = zeros( [ 2, 2 ], opts );

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		[ 'a' ],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			cusum( x, scalar2ndarray( 10.0, opts ), out, {
				'dims': value
			});
		};
	}
});

tape( 'the function throws an error if provided a `dims` option which contains out-of-bounds indices', function test( t ) {
	var values;
	var opts;
	var out;
	var x;
	var i;

	opts = {
		'dtype': 'generic'
	};
	x = zeros( [ 2, 2 ], opts );
	out = zeros( [ 2, 2 ], opts );

	values = [
		[ -10 ],
		[ 20 ]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			cusum( x, out, {
				'dims': value
			});
		};
	}
});

tape( 'the function throws an error if provided a `dims` option which contains out-of-bounds indices (initial scalar)', function test( t ) {
	var values;
	var opts;
	var out;
	var x;
	var i;

	opts = {
		'dtype': 'generic'
	};
	x = zeros( [ 2, 2 ], opts );
	out = zeros( [ 2, 2 ], opts );

	values = [
		[ -10 ],
		[ 20 ]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			cusum( x, 10.0, out, {
				'dims': value
			});
		};
	}
});

tape( 'the function throws an error if provided a `dims` option which contains out-of-bounds indices (initial ndarray)', function test( t ) {
	var values;
	var opts;
	var out;
	var x;
	var i;

	opts = {
		'dtype': 'generic'
	};
	x = zeros( [ 2, 2 ], opts );
	out = zeros( [ 2, 2 ], opts );

	values = [
		[ -10 ],
		[ 20 ]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			cusum( x, scalar2ndarray( 10.0, opts ), out, {
				'dims': value
			});
		};
	}
});

tape( 'the function throws an error if provided a `dims` option which contains too many indices', function test( t ) {
	var values;
	var opts;
	var out;
	var x;
	var i;

	opts = {
		'dtype': 'generic'
	};
	x = zeros( [ 2, 2 ], opts );
	out = zeros( [ 2, 2 ], opts );

	values = [
		[ 0, 1, 2 ],
		[ 0, 1, 2, 3 ]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			cusum( x, out, {
				'dims': value
			});
		};
	}
});

tape( 'the function throws an error if provided a `dims` option which contains too many indices (initial scalar)', function test( t ) {
	var values;
	var opts;
	var out;
	var x;
	var i;

	opts = {
		'dtype': 'generic'
	};
	x = zeros( [ 2, 2 ], opts );
	out = zeros( [ 2, 2 ], opts );

	values = [
		[ 0, 1, 2 ],
		[ 0, 1, 2, 3 ]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			cusum( x, 10.0, out, {
				'dims': value
			});
		};
	}
});

tape( 'the function throws an error if provided a `dims` option which contains too many indices (initial ndarray)', function test( t ) {
	var values;
	var opts;
	var out;
	var x;
	var i;

	opts = {
		'dtype': 'generic'
	};
	x = zeros( [ 2, 2 ], opts );
	out = zeros( [ 2, 2 ], opts );

	values = [
		[ 0, 1, 2 ],
		[ 0, 1, 2, 3 ]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			cusum( x, scalar2ndarray( 10.0, opts ), out, {
				'dims': value
			});
		};
	}
});

tape( 'the function throws an error if provided a `dims` option which contains duplicate indices', function test( t ) {
	var values;
	var opts;
	var out;
	var x;
	var i;

	opts = {
		'dtype': 'generic'
	};
	x = zeros( [ 2, 2 ], opts );
	out = zeros( [ 2, 2 ], opts );

	values = [
		[ 0, 0 ],
		[ 1, 1 ],
		[ 0, 1, 0 ],
		[ 1, 0, 1 ]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), Error, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			cusum( x, out, {
				'dims': value
			});
		};
	}
});

tape( 'the function throws an error if provided a `dims` option which contains duplicate indices (initial scalar)', function test( t ) {
	var values;
	var opts;
	var out;
	var x;
	var i;

	opts = {
		'dtype': 'generic'
	};
	x = zeros( [ 2, 2 ], opts );
	out = zeros( [ 2, 2 ], opts );

	values = [
		[ 0, 0 ],
		[ 1, 1 ],
		[ 0, 1, 0 ],
		[ 1, 0, 1 ]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), Error, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			cusum( x, 10.0, out, {
				'dims': value
			});
		};
	}
});

tape( 'the function throws an error if provided a `dims` option which contains duplicate indices (initial ndarray)', function test( t ) {
	var values;
	var opts;
	var out;
	var x;
	var i;

	opts = {
		'dtype': 'generic'
	};
	x = zeros( [ 2, 2 ], opts );
	out = zeros( [ 2, 2 ], opts );

	values = [
		[ 0, 0 ],
		[ 1, 1 ],
		[ 0, 1, 0 ],
		[ 1, 0, 1 ]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), Error, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			cusum( x, scalar2ndarray( 10.0, opts ), out, {
				'dims': value
			});
		};
	}
});

tape( 'the function throws an error if provided an output array which has an invalid shape (default)', function test( t ) {
	var values;
	var opts;
	var x;
	var i;

	opts = {
		'dtype': 'generic'
	};
	x = zeros( [ 2, 2 ], opts );

	values = [
		[],
		[ 2, 2, 2 ],
		[ 2 ],
		[ 4, 4 ],
		[ 4 ],
		[ 1 ],
		[ 1, 1 ]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), Error, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var out = zeros( value, opts );
			cusum( x, out );
		};
	}
});

tape( 'the function throws an error if provided an output array which has an invalid shape (default, initial scalar)', function test( t ) {
	var values;
	var opts;
	var x;
	var i;

	opts = {
		'dtype': 'generic'
	};
	x = zeros( [ 2, 2 ], opts );

	values = [
		[],
		[ 2, 2, 2 ],
		[ 2 ],
		[ 4, 4 ],
		[ 4 ],
		[ 1 ],
		[ 1, 1 ]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), Error, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var out = zeros( value, opts );
			cusum( x, 10.0, out );
		};
	}
});

tape( 'the function throws an error if provided an output array which has an invalid shape (default, initial ndarray)', function test( t ) {
	var values;
	var opts;
	var x;
	var i;

	opts = {
		'dtype': 'generic'
	};
	x = zeros( [ 2, 2 ], opts );

	values = [
		[],
		[ 2, 2, 2 ],
		[ 2 ],
		[ 4, 4 ],
		[ 4 ],
		[ 1 ],
		[ 1, 1 ]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), Error, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var out = zeros( value, opts );
			cusum( x, scalar2ndarray( 10.0, opts ), out );
		};
	}
});

tape( 'the function throws an error if provided an output array which has an invalid shape (all dimensions)', function test( t ) {
	var values;
	var opts;
	var x;
	var i;

	opts = {
		'dtype': 'generic'
	};
	x = zeros( [ 2, 2 ], opts );

	values = [
		[],
		[ 2, 2, 2 ],
		[ 2 ],
		[ 4, 4 ],
		[ 4 ],
		[ 1 ],
		[ 1, 1 ]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), Error, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var out = zeros( value, opts );
			cusum( x, out, {
				'dims': [ 0, 1 ]
			});
		};
	}
});

tape( 'the function throws an error if provided an output array which has an invalid shape (all dimensions, initial scalar)', function test( t ) {
	var values;
	var opts;
	var x;
	var i;

	opts = {
		'dtype': 'generic'
	};
	x = zeros( [ 2, 2 ], opts );

	values = [
		[],
		[ 2, 2, 2 ],
		[ 2 ],
		[ 4, 4 ],
		[ 4 ],
		[ 1 ],
		[ 1, 1 ]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), Error, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var out = zeros( value, opts );
			cusum( x, 10.0, out, {
				'dims': [ 0, 1 ]
			});
		};
	}
});

tape( 'the function throws an error if provided an output array which has an invalid shape (all dimensions, initial ndarray)', function test( t ) {
	var values;
	var opts;
	var x;
	var i;

	opts = {
		'dtype': 'generic'
	};
	x = zeros( [ 2, 2 ], opts );

	values = [
		[],
		[ 2, 2, 2 ],
		[ 2 ],
		[ 4, 4 ],
		[ 4 ],
		[ 1 ],
		[ 1, 1 ]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), Error, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var out = zeros( value, opts );
			cusum( x, scalar2ndarray( 10.0, opts ), out, {
				'dims': [ 0, 1 ]
			});
		};
	}
});

tape( 'the function throws an error if provided an output array which has an invalid shape (some dimensions)', function test( t ) {
	var values;
	var opts;
	var x;
	var i;

	opts = {
		'dtype': 'generic'
	};
	x = zeros( [ 2, 2 ], opts );

	values = [
		[],
		[ 2, 2, 2 ],
		[ 4, 4 ],
		[ 4 ],
		[ 1 ],
		[ 1, 1 ]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), Error, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var out = zeros( value, opts );
			cusum( x, out, {
				'dims': [ 0 ]
			});
		};
	}
});

tape( 'the function throws an error if provided an output array which has an invalid shape (some dimensions, initial scalar)', function test( t ) {
	var values;
	var opts;
	var x;
	var i;

	opts = {
		'dtype': 'generic'
	};
	x = zeros( [ 2, 2 ], opts );

	values = [
		[],
		[ 2, 2, 2 ],
		[ 4, 4 ],
		[ 4 ],
		[ 1 ],
		[ 1, 1 ]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), Error, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var out = zeros( value, opts );
			cusum( x, 10.0, out, {
				'dims': [ 0 ]
			});
		};
	}
});

tape( 'the function throws an error if provided an output array which has an invalid shape (some dimensions, initial ndarray)', function test( t ) {
	var values;
	var opts;
	var x;
	var i;

	opts = {
		'dtype': 'generic'
	};
	x = zeros( [ 2, 2 ], opts );

	values = [
		[],
		[ 2, 2, 2 ],
		[ 4, 4 ],
		[ 4 ],
		[ 1 ],
		[ 1, 1 ]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), Error, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var out = zeros( value, opts );
			cusum( x, scalar2ndarray( 10.0, opts ), out, {
				'dims': [ 0 ]
			});
		};
	}
});

tape( 'the function computes the cumulative sum over elements in an ndarray (default, row-major)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var out;
	var x;

	xbuf = [ -1.0, 2.0, -3.0, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );

	out = emptyLike( x );

	actual = cusum( x, out );
	expected = [ -1.0, 1.0, -2.0, 2.0 ];

	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( isSameArray( getData( actual ), expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function computes the cumulative sum over elements in an ndarray (default, column-major)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var out;
	var x;

	xbuf = [ -1.0, 2.0, -3.0, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 1, 2 ], 0, 'column-major' );

	out = emptyLike( x );

	actual = cusum( x, out );
	expected = [ -1.0, 1.0, -2.0, 2.0 ];

	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( isSameArray( getData( actual ), expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function computes the cumulative sum over elements in an ndarray (all dimensions, row-major)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var out;
	var x;

	xbuf = [ -1.0, 2.0, -3.0, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );

	out = emptyLike( x );

	actual = cusum( x, out, {
		'dims': [ 0, 1 ]
	});
	expected = [ -1.0, 1.0, -2.0, 2.0 ];

	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( isSameArray( getData( actual ), expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function computes the cumulative sum over elements in an ndarray (all dimensions, column-major)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var out;
	var x;

	xbuf = [ -1.0, 2.0, -3.0, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 1, 2 ], 0, 'column-major' );

	out = emptyLike( x );

	actual = cusum( x, out, {
		'dims': [ 0, 1 ]
	});
	expected = [ -1.0, 1.0, -2.0, 2.0 ];

	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( isSameArray( getData( actual ), expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function computes the cumulative sum over elements in an ndarray (no dimensions, row-major)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var out;
	var x;

	xbuf = [ -1.0, 2.0, -3.0, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );

	out = emptyLike( x );

	actual = cusum( x, out, {
		'dims': []
	});
	expected = [ [ -1.0, 2.0 ], [ -3.0, 4.0 ] ];

	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function computes the cumulative sum over elements in an ndarray (no dimensions, column-major)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var out;
	var x;

	xbuf = [ -1.0, 2.0, -3.0, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 1, 2 ], 0, 'column-major' );

	out = emptyLike( x );

	actual = cusum( x, out, {
		'dims': []
	});
	expected = [ [ -1.0, -3.0 ], [ 2.0, 4.0 ] ];

	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying operation dimensions (row-major)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var out;
	var x;

	xbuf = [ -1.0, 2.0, -3.0, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );

	out = emptyLike( x );

	actual = cusum( x, out, {
		'dims': [ 0 ]
	});
	expected = [ [ -1.0, 2.0 ], [ -4.0, 6.0 ] ];

	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	xbuf = [ -1.0, 2.0, -3.0, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );

	out = emptyLike( x );

	actual = cusum( x, out, {
		'dims': [ 1 ]
	});
	expected = [ [ -1.0, 1.0 ], [ -3.0, 1.0 ] ];

	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying operation dimensions (column-major)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var out;
	var x;

	xbuf = [ -1.0, 2.0, -3.0, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 1, 2 ], 0, 'column-major' );

	out = emptyLike( x );

	actual = cusum( x, out, {
		'dims': [ 0 ]
	});
	expected = [ [ -1.0, -3.0 ], [ 1.0, 1.0 ] ];

	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	xbuf = [ -1.0, 2.0, -3.0, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 1, 2 ], 0, 'column-major' );

	out = emptyLike( x );

	actual = cusum( x, out, {
		'dims': [ 1 ]
	});
	expected = [ [ -1.0, -4.0 ], [ 2.0, 6.0 ] ];

	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports providing an initial value (scalar)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var out;
	var x;

	xbuf = [ -1.0, 2.0, -3.0, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );

	out = emptyLike( x );

	actual = cusum( x, 10.0, out );
	expected = [ [ 9.0, 11.0 ], [ 8.0, 12.0 ] ];

	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	xbuf = [ -1.0, 2.0, -3.0, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'column-major' );

	out = emptyLike( x );

	actual = cusum( x, 10.0, out );
	expected = [ [ 9.0, 8.0 ], [ 11.0, 12.0 ] ];

	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports providing an initial value (scalar, options)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var out;
	var x;

	xbuf = [ -1.0, 2.0, -3.0, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );

	out = emptyLike( x );

	actual = cusum( x, 10.0, out, {} );
	expected = [ [ 9.0, 11.0 ], [ 8.0, 12.0 ] ];

	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	xbuf = [ -1.0, 2.0, -3.0, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'column-major' );

	out = emptyLike( x );

	actual = cusum( x, 10.0, out, {} );
	expected = [ [ 9.0, 8.0 ], [ 11.0, 12.0 ] ];

	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports providing an initial value (0d ndarray)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var opts;
	var out;
	var x;

	opts = {
		'dtype': 'generic'
	};
	xbuf = [ -1.0, 2.0, -3.0, 4.0 ];
	x = new ndarray( opts.dtype, xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );

	out = emptyLike( x );

	actual = cusum( x, scalar2ndarray( 10.0, opts ), out );
	expected = [ [ 9.0, 11.0 ], [ 8.0, 12.0 ] ];

	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	xbuf = [ -1.0, 2.0, -3.0, 4.0 ];
	x = new ndarray( opts.dtype, xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'column-major' );

	out = emptyLike( x );

	actual = cusum( x, scalar2ndarray( 10.0, opts ), out );
	expected = [ [ 9.0, 8.0 ], [ 11.0, 12.0 ] ];

	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports providing an initial value (0d ndarray, options)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var opts;
	var out;
	var x;

	opts = {
		'dtype': 'generic'
	};
	xbuf = [ -1.0, 2.0, -3.0, 4.0 ];
	x = new ndarray( opts.dtype, xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );

	out = emptyLike( x );

	actual = cusum( x, scalar2ndarray( 10.0, opts ), out, {} );
	expected = [ [ 9.0, 11.0 ], [ 8.0, 12.0 ] ];

	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	xbuf = [ -1.0, 2.0, -3.0, 4.0 ];
	x = new ndarray( opts.dtype, xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'column-major' );

	out = emptyLike( x );

	actual = cusum( x, scalar2ndarray( 10.0, opts ), out, {} );
	expected = [ [ 9.0, 8.0 ], [ 11.0, 12.0 ] ];

	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports providing an initial value (scalar, broadcasted)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var out;
	var x;

	xbuf = [ -1.0, 2.0, -3.0, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );

	out = emptyLike( x );

	actual = cusum( x, 10.0, out, {
		'dims': [ 0 ]
	});
	expected = [ [ 9.0, 12.0 ], [ 6.0, 16.0 ] ];

	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	xbuf = [ -1.0, 2.0, -3.0, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 1, 2 ], 0, 'column-major' );

	out = emptyLike( x );

	actual = cusum( x, 10.0, out, {
		'dims': [ 0 ]
	});
	expected = [ [ 9.0, 7.0 ], [ 11.0, 11.0 ] ];

	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports providing an initial value (0d ndarray, broadcasted)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var opts;
	var out;
	var x;

	opts = {
		'dtype': 'generic'
	};
	xbuf = [ -1.0, 2.0, -3.0, 4.0 ];
	x = new ndarray( opts.dtype, xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );

	out = emptyLike( x );

	actual = cusum( x, scalar2ndarray( 10.0, opts ), out, {
		'dims': [ 0 ]
	});
	expected = [ [ 9.0, 12.0 ], [ 6.0, 16.0 ] ];

	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	xbuf = [ -1.0, 2.0, -3.0, 4.0 ];
	x = new ndarray( opts.dtype, xbuf, [ 2, 2 ], [ 1, 2 ], 0, 'column-major' );

	out = emptyLike( x );

	actual = cusum( x, scalar2ndarray( 10.0, opts ), out, {
		'dims': [ 0 ]
	});
	expected = [ [ 9.0, 7.0 ], [ 11.0, 11.0 ] ];

	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports providing an initial value (ndarray)', function test( t ) {
	var expected;
	var initial;
	var actual;
	var xbuf;
	var ibuf;
	var opts;
	var out;
	var x;

	opts = {
		'dtype': 'generic'
	};
	xbuf = [ -1.0, 2.0, -3.0, 4.0 ];
	x = new ndarray( opts.dtype, xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );

	ibuf = [ 10.0, 20.0 ];
	initial = new ndarray( opts.dtype, ibuf, [ 2 ], [ 1 ], 0, 'row-major' );

	out = emptyLike( x );

	actual = cusum( x, initial, out, {
		'dims': [ 0 ]
	});
	expected = [ [ 9.0, 22.0 ], [ 6.0, 26.0 ] ];

	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	xbuf = [ -1.0, 2.0, -3.0, 4.0 ];
	x = new ndarray( opts.dtype, xbuf, [ 2, 2 ], [ 1, 2 ], 0, 'column-major' );

	ibuf = [ 10.0, 20.0 ];
	initial = new ndarray( opts.dtype, ibuf, [ 2 ], [ 1 ], 0, 'row-major' );

	out = emptyLike( x );

	actual = cusum( x, initial, out, {
		'dims': [ 0 ]
	});
	expected = [ [ 9.0, 17.0 ], [ 11.0, 21.0 ] ];

	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	t.end();
});
