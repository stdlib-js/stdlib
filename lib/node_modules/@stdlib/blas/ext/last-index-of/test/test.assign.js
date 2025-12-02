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
var isndarrayLike = require( '@stdlib/assert/is-ndarray-like' );
var ndarray = require( '@stdlib/ndarray/ctor' );
var zeros = require( '@stdlib/ndarray/zeros' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
var Int32Array = require( '@stdlib/array/int32' );
var getDType = require( '@stdlib/ndarray/dtype' );
var getShape = require( '@stdlib/ndarray/shape' );
var getOrder = require( '@stdlib/ndarray/order' );
var lastIndexOf = require( './../lib' ).assign;


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof lastIndexOf, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided a first argument which is not an ndarray-like object (searchElement=scalar)', function test( t ) {
	var values;
	var i;
	var y;

	y = zeros( [], {
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
			lastIndexOf( value, 2.0, y );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not an ndarray-like object (searchElement=ndarray)', function test( t ) {
	var values;
	var i;
	var y;

	y = zeros( [], {
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
			lastIndexOf( value, scalar2ndarray( 2.0 ), y );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not an ndarray-like object (searchElement=scalar, fromIndex=scalar)', function test( t ) {
	var values;
	var i;
	var y;

	y = zeros( [], {
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
			lastIndexOf( value, 2.0, 0, y );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not an ndarray-like object (searchElement=ndarray, fromIndex=scalar)', function test( t ) {
	var values;
	var i;
	var y;

	y = zeros( [], {
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
			lastIndexOf( value, scalar2ndarray( 2.0 ), 0, y );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not an ndarray-like object (searchElement=scalar, fromIndex=ndarray)', function test( t ) {
	var values;
	var opts;
	var i;
	var y;

	opts = {
		'dtype': 'generic'
	};

	y = zeros( [], opts );

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
			lastIndexOf( value, 2.0, scalar2ndarray( 0, opts ), y );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not an ndarray-like object (searchElement=ndarray, fromIndex=ndarray)', function test( t ) {
	var values;
	var opts;
	var i;
	var y;

	opts = {
		'dtype': 'generic'
	};

	y = zeros( [], opts );

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
			lastIndexOf( value, scalar2ndarray( 2.0 ), scalar2ndarray( 0, opts ), y ); // eslint-disable-line max-len
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not an ndarray-like object (searchElement=scalar, options)', function test( t ) {
	var values;
	var opts;
	var i;
	var y;

	opts = {
		'dtype': 'generic'
	};

	y = zeros( [], opts );

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
			lastIndexOf( value, 2.0, y, {} );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not an ndarray-like object (searchElement=ndarray, options)', function test( t ) {
	var values;
	var opts;
	var i;
	var y;

	opts = {
		'dtype': 'generic'
	};

	y = zeros( [], opts );

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
			lastIndexOf( value, scalar2ndarray( 2.0 ), y, {} );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not an ndarray-like object (searchElement=scalar, fromIndex=scalar, options)', function test( t ) {
	var values;
	var opts;
	var i;
	var y;

	opts = {
		'dtype': 'generic'
	};

	y = zeros( [], opts );

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
			lastIndexOf( value, 2.0, 0, y, {} );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not an ndarray-like object (searchElement=ndarray, fromIndex=scalar, options)', function test( t ) {
	var values;
	var opts;
	var i;
	var y;

	opts = {
		'dtype': 'generic'
	};

	y = zeros( [], opts );

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
			lastIndexOf( value, scalar2ndarray( 2.0 ), 0, y, {} );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not an ndarray-like object (searchElement=scalar, fromIndex=ndarray, options)', function test( t ) {
	var values;
	var opts;
	var i;
	var y;

	opts = {
		'dtype': 'generic'
	};

	y = zeros( [], opts );

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
			lastIndexOf( value, 2.0, scalar2ndarray( 0, opts ), y, {} );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not an ndarray-like object (searchElement=ndarray, fromIndex=ndarray, options)', function test( t ) {
	var values;
	var opts;
	var i;
	var y;

	opts = {
		'dtype': 'generic'
	};

	y = zeros( [], opts );

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
			lastIndexOf( value, scalar2ndarray( 2.0 ), scalar2ndarray( 0, opts ), y, {} ); // eslint-disable-line max-len
		};
	}
});

tape( 'the function throws an error if provided a first argument which is a zero-dimensional ndarray', function test( t ) {
	var values;
	var opts;
	var i;
	var y;

	opts = {
		'dtype': 'generic'
	};

	y = zeros( [], opts );

	values = [
		scalar2ndarray( 10.0 ),
		scalar2ndarray( -3.0 ),
		scalar2ndarray( 0.0 )
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			lastIndexOf( value, scalar2ndarray( 2.0 ), scalar2ndarray( 0, opts ), y, {} ); // eslint-disable-line max-len
		};
	}
});

tape( 'the function throws an error if provided a fromIndex argument which is not an ndarray-like object, an integer, or an object', function test( t ) {
	var values;
	var i;
	var x;
	var y;

	x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});
	y = zeros( [], {
		'dtype': 'generic'
	});
	values = [
		'5',
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
			lastIndexOf( x, scalar2ndarray( 2.0 ), value, y );
		};
	}
});

tape( 'the function throws an error if provided a fromIndex argument which is not an ndarray-like object, an integer, or an object (options)', function test( t ) {
	var values;
	var i;
	var x;
	var y;

	x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});
	y = zeros( [], {
		'dtype': 'generic'
	});
	values = [
		'5',
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
			lastIndexOf( x, scalar2ndarray( 2.0 ), value, y, {} );
		};
	}
});

tape( 'the function throws an error if provided an output argument which is not an ndarray-like object', function test( t ) {
	var values;
	var opts;
	var i;
	var x;

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
			lastIndexOf( x, 2.0, value );
		};
	}
});

tape( 'the function throws an error if provided an output argument which is not an ndarray-like object (options)', function test( t ) {
	var values;
	var opts;
	var i;
	var x;

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
			lastIndexOf( x, 2.0, value, {} );
		};
	}
});

tape( 'the function throws an error if provided an output argument which is not an ndarray-like object (fromIndex)', function test( t ) {
	var values;
	var opts;
	var i;
	var x;

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
			lastIndexOf( x, 2.0, 2, value );
		};
	}
});

tape( 'the function throws an error if provided an output argument which is not an ndarray-like object (fromIndex, options)', function test( t ) {
	var values;
	var opts;
	var i;
	var x;

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
			lastIndexOf( x, 2.0, 2, value, {} );
		};
	}
});

tape( 'the function throws an error if provided insufficient number of arguments', function test( t ) {
	var x;

	x = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});

	t.throws( badValue1, TypeError, 'throws an error when provided insufficient arguments' );
	t.throws( badValue2, TypeError, 'throws an error when provided insufficient arguments' );
	t.throws( badValue3, TypeError, 'throws an error when provided insufficient arguments' );
	t.end();

	function badValue1() {
		lastIndexOf( x );
	}

	function badValue2() {
		lastIndexOf( x, 10.0 );
	}

	function badValue3() {
		lastIndexOf();
	}
});

tape( 'the function throws an error if provided a search element which is not broadcast-compatible with the first argument', function test( t ) {
	var values;
	var opts;
	var x;
	var y;
	var i;

	opts = {
		'dtype': 'generic'
	};
	x = zeros( [ 2, 2 ], opts );
	y = zeros( [], opts );

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
			lastIndexOf( x, value, y );
		};
	}
});

tape( 'the function throws an error if provided an search element which is not broadcast-compatible with the first argument (options)', function test( t ) {
	var values;
	var opts;
	var x;
	var y;
	var i;

	opts = {
		'dtype': 'generic'
	};
	x = zeros( [ 2, 2 ], opts );
	y = zeros( [], opts );

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
			lastIndexOf( x, value, y, {} );
		};
	}
});

tape( 'the function throws an error if provided a from index which is not broadcast-compatible with the first argument', function test( t ) {
	var values;
	var opts;
	var x;
	var y;
	var i;

	opts = {
		'dtype': 'generic'
	};
	x = zeros( [ 2, 2 ], opts );
	y = zeros( [], opts );

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
			lastIndexOf( x, scalar2ndarray( 0 ), value, y );
		};
	}
});

tape( 'the function throws an error if provided a from index which is not broadcast-compatible with the first argument (options)', function test( t ) {
	var values;
	var opts;
	var x;
	var y;
	var i;

	opts = {
		'dtype': 'generic'
	};
	x = zeros( [ 2, 2 ], opts );
	y = zeros( [], opts );

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
			lastIndexOf( x, scalar2ndarray( 0 ), value, y, {} );
		};
	}
});

tape( 'the function throws an error if provided an options argument which is not an object (searchElement=scalar)', function test( t ) {
	var values;
	var opts;
	var x;
	var y;
	var i;

	opts = {
		'dtype': 'generic'
	};

	x = zeros( [ 2, 2 ], opts );
	y = zeros( [], opts );

	values = [
		'5',
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
			lastIndexOf( x, 10.0, y, value );
		};
	}
});

tape( 'the function throws an error if provided an options argument which is not an object (searchElement=ndarray)', function test( t ) {
	var values;
	var opts;
	var x;
	var y;
	var i;

	opts = {
		'dtype': 'generic'
	};

	x = zeros( [ 2, 2 ], opts );
	y = zeros( [], opts );

	values = [
		'5',
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
			lastIndexOf( x, scalar2ndarray( 10.0, opts ), y, value );
		};
	}
});

tape( 'the function throws an error if provided an options argument which is not an object (searchElement=scalar, fromIndex=scalar)', function test( t ) {
	var values;
	var opts;
	var x;
	var y;
	var i;

	opts = {
		'dtype': 'generic'
	};

	x = zeros( [ 2, 2 ], opts );
	y = zeros( [], opts );

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
			lastIndexOf( x, 10.0, 0, y, value );
		};
	}
});

tape( 'the function throws an error if provided an options argument which is not an object (searchElement=ndarray, fromIndex=ndarray)', function test( t ) {
	var values;
	var opts;
	var x;
	var y;
	var i;

	opts = {
		'dtype': 'generic'
	};

	x = zeros( [ 2, 2 ], opts );
	y = zeros( [], opts );

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
			lastIndexOf( x, scalar2ndarray( 10.0, opts ), scalar2ndarray( 0, opts ), y, value ); // eslint-disable-line max-len
		};
	}
});

tape( 'the function throws an error if provided an options argument which is not an object (searchElement=scalar, fromIndex=ndarray)', function test( t ) {
	var values;
	var opts;
	var x;
	var y;
	var i;

	opts = {
		'dtype': 'generic'
	};

	x = zeros( [ 2, 2 ], opts );
	y = zeros( [], opts );

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
			lastIndexOf( x, 10.0, scalar2ndarray( 0, opts ), y, value );
		};
	}
});

tape( 'the function throws an error if provided an options argument which is not an object (searchElement=ndarray, fromIndex=scalar)', function test( t ) {
	var values;
	var opts;
	var x;
	var y;
	var i;

	opts = {
		'dtype': 'generic'
	};

	x = zeros( [ 2, 2 ], opts );
	y = zeros( [], opts );

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
			lastIndexOf( x, scalar2ndarray( 10.0, opts ), 0, y, value );
		};
	}
});

tape( 'the function throws an error if provided a `dim` option which is not an integer', function test( t ) {
	var values;
	var opts;
	var x;
	var y;
	var i;

	opts = {
		'dtype': 'generic'
	};

	x = zeros( [ 2, 2 ], opts );
	y = zeros( [], opts );

	values = [
		'5',
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
			lastIndexOf( x, 10.0, y, {
				'dim': value
			});
		};
	}
});

tape( 'the function returns the last index of a specified search element in an ndarray (row-major)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var x;
	var y;

	xbuf = [ -1.0, 2.0, -3.0, 2.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );
	y = zeros( [ 2 ], {
		'dtype': 'generic',
		'order': 'row-major'
	});

	actual = lastIndexOf( x, 2.0, y );
	expected = [ 1, 1 ];

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( getDType( actual ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 2 ], 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );
	t.strictEqual( ( y === actual ), true, 'returns expected value' );

	y = zeros( [ 2 ], {
		'dtype': 'generic',
		'order': 'row-major'
	});

	actual = lastIndexOf( x, 2.0, 0, y );
	expected = [ -1, -1 ];

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( getDType( actual ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 2 ], 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );
	t.strictEqual( ( y === actual ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns the last index of a specified search element in an ndarray (column-major)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var x;
	var y;

	xbuf = [ -1.0, 2.0, -3.0, 2.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 1, 2 ], 0, 'column-major' );
	y = zeros( [ 2 ], {
		'dtype': 'generic',
		'order': 'column-major'
	});

	actual = lastIndexOf( x, 2.0, y );
	expected = [ -1, 1 ];

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( getDType( actual ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 2 ], 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );
	t.strictEqual( ( y === actual ), true, 'returns expected value' );

	y = zeros( [ 2 ], {
		'dtype': 'generic',
		'order': 'column-major'
	});

	actual = lastIndexOf( x, 2.0, 0, y );
	expected = [ -1, 0 ];

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( getDType( actual ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 2 ], 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );
	t.strictEqual( ( y === actual ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying an operation dimension (row-major)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var x;
	var y;

	xbuf = [ -1.0, 2.0, -3.0, 2.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );
	y = zeros( [ 2 ], {
		'dtype': 'generic',
		'order': 'row-major'
	});

	actual = lastIndexOf( x, 2.0, y, {
		'dim': 0
	});
	expected = [ -1, 1 ];

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( getDType( actual ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 2 ], 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );
	t.strictEqual( ( y === actual ), true, 'returns expected value' );

	y = zeros( [ 2 ], {
		'dtype': 'generic',
		'order': 'row-major'
	});

	actual = lastIndexOf( x, 2.0, 0, y, {
		'dim': 0
	});
	expected = [ -1, 0 ];

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( getDType( actual ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 2 ], 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );
	t.strictEqual( ( y === actual ), true, 'returns expected value' );

	xbuf = [ -1.0, 2.0, -3.0, 2.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );
	y = zeros( [ 2 ], {
		'dtype': 'generic',
		'order': 'row-major'
	});

	actual = lastIndexOf( x, 2.0, y, {
		'dim': 1
	});
	expected = [ 1, 1 ];

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( getDType( actual ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 2 ], 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );
	t.strictEqual( ( y === actual ), true, 'returns expected value' );

	y = zeros( [ 2 ], {
		'dtype': 'generic',
		'order': 'row-major'
	});

	actual = lastIndexOf( x, 2.0, 0, y, {
		'dim': 1
	});
	expected = [ -1, -1 ];

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( getDType( actual ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 2 ], 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );
	t.strictEqual( ( y === actual ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying an operation dimension (column-major)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var x;
	var y;

	xbuf = [ -1.0, 2.0, -3.0, 2.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 1, 2 ], 0, 'column-major' );
	y = zeros( [ 2 ], {
		'dtype': 'generic',
		'order': 'column-major'
	});

	actual = lastIndexOf( x, 2.0, y, {
		'dim': 0
	});
	expected = [ 1, 1 ];

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( getDType( actual ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 2 ], 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );
	t.strictEqual( ( y === actual ), true, 'returns expected value' );

	y = zeros( [ 2 ], {
		'dtype': 'generic',
		'order': 'column-major'
	});

	actual = lastIndexOf( x, 2.0, 0, y, {
		'dim': 0
	});
	expected = [ -1, -1 ];

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( getDType( actual ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 2 ], 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );
	t.strictEqual( ( y === actual ), true, 'returns expected value' );

	xbuf = [ -1.0, 2.0, -3.0, 2.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 1, 2 ], 0, 'column-major' );
	y = zeros( [ 2 ], {
		'dtype': 'generic',
		'order': 'column-major'
	});

	actual = lastIndexOf( x, 2.0, y, {
		'dim': 1
	});
	expected = [ -1, 1 ];

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( getDType( actual ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 2 ], 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );
	t.strictEqual( ( y === actual ), true, 'returns expected value' );

	y = zeros( [ 2 ], {
		'dtype': 'generic',
		'order': 'column-major'
	});

	actual = lastIndexOf( x, 2.0, 0, y, {
		'dim': 1
	});
	expected = [ -1, 0 ];

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( getDType( actual ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 2 ], 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );
	t.strictEqual( ( y === actual ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports providing a from index (scalar)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var x;
	var y;

	/*
	* [
	*    -1.0,  2.0, -3.0,  2.0, -5.0,
	*     6.0, -7.0,  2.0, -8.0,  2.0
	* ]
	*/
	xbuf = [ -1.0, 2.0, -3.0, 2.0, -5.0, 6.0, -7.0, 2.0, -8.0, 2.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 5 ], [ 5, 1 ], 0, 'row-major' );
	y = zeros( [ 2 ], {
		'dtype': 'generic'
	});

	actual = lastIndexOf( x, 2.0, 2, y );
	expected = [ 1, 2 ];

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( getDType( actual ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 2 ], 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );
	t.strictEqual( ( y === actual ), true, 'returns expected value' );

	/*
	* [
	*     -1.0, -3.0, -5.0, -7.0, -8.0,
	*      2.0,  2.0,  6.0,  2.0,  2.0
	* ]
	*/
	xbuf = [ -1.0, 2.0, -3.0, 2.0, -5.0, 6.0, -7.0, 2.0, -8.0, 2.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 5 ], [ 1, 2 ], 0, 'column-major' );
	y = zeros( [ 2 ], {
		'dtype': 'generic',
		'order': 'column-major'
	});

	actual = lastIndexOf( x, 2.0, 2, y );
	expected = [ -1, 1 ];

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( getDType( actual ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 2 ], 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );
	t.strictEqual( ( y === actual ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports providing a from index (scalar, options)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var x;
	var y;

	/*
	* [
	*    -1.0,  2.0, -3.0,  2.0, -5.0,
	*     6.0, -7.0,  2.0, -8.0,  2.0
	* ]
	*/
	xbuf = [ -1.0, 2.0, -3.0, 2.0, -5.0, 6.0, -7.0, 2.0, -8.0, 2.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 5 ], [ 5, 1 ], 0, 'row-major' );
	y = zeros( [ 2 ], {
		'dtype': 'generic'
	});

	actual = lastIndexOf( x, 2.0, 2, y, {} );
	expected = [ 1, 2 ];

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( getDType( actual ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 2 ], 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );
	t.strictEqual( ( y === actual ), true, 'returns expected value' );

	/*
	* [
	*     -1.0, -3.0, -5.0, -7.0, -8.0,
	*      2.0,  2.0,  6.0,  2.0,  2.0
	* ]
	*/
	xbuf = [ -1.0, 2.0, -3.0, 2.0, -5.0, 6.0, -7.0, 2.0, -8.0, 2.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 5 ], [ 1, 2 ], 0, 'column-major' );
	y = zeros( [ 2 ], {
		'dtype': 'generic',
		'order': 'column-major'
	});

	actual = lastIndexOf( x, 2.0, 2, y, {} );
	expected = [ -1, 1 ];

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( getDType( actual ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 2 ], 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );
	t.strictEqual( ( y === actual ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports providing a from index (0d ndarray)', function test( t ) {
	var expected;
	var fromIdx;
	var actual;
	var xbuf;
	var x;
	var y;

	/*
	* [
	*    -1.0,  2.0, -3.0,  2.0, -5.0,
	*     6.0, -7.0,  2.0, -8.0,  2.0
	* ]
	*/
	xbuf = [ -1.0, 2.0, -3.0, 2.0, -5.0, 6.0, -7.0, 2.0, -8.0, 2.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 5 ], [ 5, 1 ], 0, 'row-major' );
	y = zeros( [ 2 ], {
		'dtype': 'generic'
	});

	fromIdx = scalar2ndarray( 2, {
		'dtype': 'generic'
	});
	actual = lastIndexOf( x, 2.0, fromIdx, y );
	expected = [ 1, 2 ];

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( getDType( actual ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 2 ], 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );
	t.strictEqual( ( y === actual ), true, 'returns expected value' );

	/*
	* [
	*     -1.0, -3.0, -5.0, -7.0, -8.0,
	*      2.0,  2.0,  6.0,  2.0,  2.0
	* ]
	*/
	xbuf = [ -1.0, 2.0, -3.0, 2.0, -5.0, 6.0, -7.0, 2.0, -8.0, 2.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 5 ], [ 1, 2 ], 0, 'column-major' );
	y = zeros( [ 2 ], {
		'dtype': 'generic',
		'order': 'column-major'
	});

	actual = lastIndexOf( x, 2.0, fromIdx, y );
	expected = [ -1, 1 ];

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( getDType( actual ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 2 ], 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );
	t.strictEqual( ( y === actual ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports providing a from index (0d ndarray, options)', function test( t ) {
	var expected;
	var fromIdx;
	var actual;
	var xbuf;
	var x;
	var y;

	/*
	* [
	*    -1.0,  2.0, -3.0,  2.0, -5.0,
	*     6.0, -7.0,  2.0, -8.0,  2.0
	* ]
	*/
	xbuf = [ -1.0, 2.0, -3.0, 2.0, -5.0, 6.0, -7.0, 2.0, -8.0, 2.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 5 ], [ 5, 1 ], 0, 'row-major' );
	y = zeros( [ 2 ], {
		'dtype': 'generic'
	});

	fromIdx = scalar2ndarray( 2, {
		'dtype': 'generic'
	});
	actual = lastIndexOf( x, 2.0, fromIdx, y, {} );
	expected = [ 1, 2 ];

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( getDType( actual ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 2 ], 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );
	t.strictEqual( ( y === actual ), true, 'returns expected value' );

	/*
	* [
	*     -1.0, -3.0, -5.0, -7.0, -8.0,
	*      2.0,  2.0,  6.0,  2.0,  2.0
	* ]
	*/
	xbuf = [ -1.0, 2.0, -3.0, 2.0, -5.0, 6.0, -7.0, 2.0, -8.0, 2.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 5 ], [ 1, 2 ], 0, 'column-major' );
	y = zeros( [ 2 ], {
		'dtype': 'generic',
		'order': 'column-major'
	});

	actual = lastIndexOf( x, 2.0, fromIdx, y, {} );
	expected = [ -1, 1 ];

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( getDType( actual ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 2 ], 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );
	t.strictEqual( ( y === actual ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports providing a from index (scalar, broadcasted)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var x;
	var y;

	/*
	* [
	*     -1.0, 2.0,
	*     -3.0, 2.0,
	*     -5.0, 6.0,
	*     -7.0, 2.0,
	*     -8.0, 2.0
	* ]
	*/
	xbuf = [ -1.0, 2.0, -3.0, 2.0, -5.0, 6.0, -7.0, 2.0, -8.0, 2.0 ];
	x = new ndarray( 'generic', xbuf, [ 5, 2 ], [ 2, 1 ], 0, 'row-major' );
	y = zeros( [ 2 ], {
		'dtype': 'generic'
	});

	actual = lastIndexOf( x, 2.0, 2, y, {
		'dim': 0
	});
	expected = [ -1, 1 ];

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( getDType( actual ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 2 ], 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );
	t.strictEqual( ( y === actual ), true, 'returns expected value' );

	/*
	* [
	*     -1.0,  6.0,
	*      2.0, -7.0,
	*     -3.0,  2.0,
	*      2.0, -8.0,
	*     -5.0,  2.0
	* ]
	*/
	xbuf = [ -1.0, 2.0, -3.0, 2.0, -5.0, 6.0, -7.0, 2.0, -8.0, 2.0 ];
	x = new ndarray( 'generic', xbuf, [ 5, 2 ], [ 1, 5 ], 0, 'column-major' );
	y = zeros( [ 2 ], {
		'dtype': 'generic',
		'order': 'column-major'
	});

	actual = lastIndexOf( x, 2.0, 2, y, {
		'dim': 0
	});
	expected = [ 1, 2 ];

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( getDType( actual ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 2 ], 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );
	t.strictEqual( ( y === actual ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports providing a from index (0d ndarray, broadcasted)', function test( t ) {
	var expected;
	var fromIdx;
	var actual;
	var xbuf;
	var x;
	var y;

	/*
	* [
	*     -1.0, 2.0,
	*     -3.0, 2.0,
	*     -5.0, 6.0,
	*     -7.0, 2.0,
	*     -8.0, 2.0
	* ]
	*/
	xbuf = [ -1.0, 2.0, -3.0, 2.0, -5.0, 6.0, -7.0, 2.0, -8.0, 2.0 ];
	x = new ndarray( 'generic', xbuf, [ 5, 2 ], [ 2, 1 ], 0, 'row-major' );
	y = zeros( [ 2 ], {
		'dtype': 'generic'
	});

	fromIdx = scalar2ndarray( 2, {
		'dtype': 'int32'
	});
	actual = lastIndexOf( x, 2.0, fromIdx, y, {
		'dim': 0
	});
	expected = [ -1, 1 ];

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( getDType( actual ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 2 ], 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );
	t.strictEqual( ( y === actual ), true, 'returns expected value' );

	/*
	* [
	*     -1.0,  6.0,
	*      2.0, -7.0,
	*     -3.0,  2.0,
	*      2.0, -8.0,
	*     -5.0,  2.0
	* ]
	*/
	xbuf = [ -1.0, 2.0, -3.0, 2.0, -5.0, 6.0, -7.0, 2.0, -8.0, 2.0 ];
	x = new ndarray( 'generic', xbuf, [ 5, 2 ], [ 1, 5 ], 0, 'column-major' );
	y = zeros( [ 2 ], {
		'dtype': 'generic',
		'order': 'column-major'
	});

	actual = lastIndexOf( x, 2.0, fromIdx, y, {
		'dim': 0
	});
	expected = [ 1, 2 ];

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( getDType( actual ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 2 ], 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );
	t.strictEqual( ( y === actual ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports providing a from index (ndarray)', function test( t ) {
	var searchElement;
	var expected;
	var fromIdx;
	var actual;
	var xbuf;
	var x;
	var y;

	/*
	* [
	*     1.0, -2.0,
	*     2.0, -3.0,
	*     3.0, -4.0,
	*     2.0, -3.0,
	*     5.0, -6.0
	* ]
	*/
	xbuf = [ 1.0, -2.0, 2.0, -3.0, 3.0, -4.0, 2.0, -3.0, 5.0, -6.0 ];
	x = new ndarray( 'generic', xbuf, [ 5, 2 ], [ 2, 1 ], 0, 'row-major' );
	y = zeros( [ 2 ], {
		'dtype': 'generic'
	});

	fromIdx = new ndarray( 'int32', new Int32Array( [ 4, 4 ] ), [ 2 ], [ 1 ], 0, 'row-major' );
	searchElement = new ndarray( 'generic', [ 2.0, -3.0 ], [ 2 ], [ 1 ], 0, 'row-major' );
	actual = lastIndexOf( x, searchElement, fromIdx, y, {
		'dim': 0
	});
	expected = [ 3, 3 ];

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( getDType( actual ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 2 ], 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );
	t.strictEqual( ( y === actual ), true, 'returns expected value' );

	t.end();
});
