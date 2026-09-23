/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var getDType = require( '@stdlib/ndarray/dtype' );
var getShape = require( '@stdlib/ndarray/shape' );
var getOrder = require( '@stdlib/ndarray/order' );
var zeroTo = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof zeroTo, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided a first argument which is not a nonnegative integer or an array of nonnegative integers', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-1,
		3.14,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			zeroTo( value );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not a nonnegative integer or an array of nonnegative integers (options)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-1,
		3.14,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			zeroTo( value, {} );
		};
	}
});

tape( 'the function throws an error if provided a second argument which is not an object', function test( t ) {
	var values;
	var i;

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
			zeroTo( [ 2, 2 ], value );
		};
	}
});

tape( 'the function throws an error if provided an invalid `dtype` option', function test( t ) {
	var values;
	var i;

	values = [
		'foo',
		'bool',
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
			zeroTo( [ 2, 2 ], {
				'dtype': value
			});
		};
	}
});

tape( 'the function throws an error if provided an invalid `order` option', function test( t ) {
	var values;
	var i;

	values = [
		'foo',
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
			zeroTo( [ 2, 2 ], {
				'order': value
			});
		};
	}
});

tape( 'the function throws an error if provided a `dims` option which is not an array-like object of integers', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			zeroTo( [ 2, 2 ], {
				'dims': value
			});
		};
	}
});

tape( 'the function throws an error if provided a `dims` option which contains out-of-bounds indices', function test( t ) {
	var values;
	var i;

	values = [
		[ 5 ],
		[ -5 ],
		[ 2 ]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			zeroTo( [ 2, 2 ], {
				'dims': value
			});
		};
	}
});

tape( 'the function throws an error if provided a `dims` option which contains too many indices', function test( t ) {
	var values;
	var i;

	values = [
		[ 0, 1, 0 ]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), Error, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			zeroTo( [ 2, 2 ], {
				'dims': value
			});
		};
	}
});

tape( 'the function throws an error if provided a `dims` option which contains duplicate indices', function test( t ) {
	var values;
	var i;

	values = [
		[ 0, 0 ]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), Error, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			zeroTo( [ 2, 2 ], {
				'dims': value
			});
		};
	}
});

tape( 'the function returns an ndarray containing linearly spaced values incrementing by 1 from zero', function test( t ) {
	var expected;
	var actual;

	expected = [ 0.0, 1.0, 2.0 ];
	actual = zeroTo( 3 );

	t.strictEqual( String( getDType( actual ) ), 'float64', 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 3 ], 'returns expected value' );
	t.strictEqual( getOrder( actual ), 'row-major', 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	expected = [ 0.0, 1.0, 2.0 ];
	actual = zeroTo( [ 3 ] );

	t.strictEqual( String( getDType( actual ) ), 'float64', 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 3 ], 'returns expected value' );
	t.strictEqual( getOrder( actual ), 'row-major', 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	expected = [ [ 0.0, 1.0 ], [ 0.0, 1.0 ] ];
	actual = zeroTo( [ 2, 2 ] );

	t.strictEqual( String( getDType( actual ) ), 'float64', 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 2, 2 ], 'returns expected value' );
	t.strictEqual( getOrder( actual ), 'row-major', 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying an output data type', function test( t ) {
	var expected;
	var actual;

	expected = [ 0.0, 1.0, 2.0 ];
	actual = zeroTo( [ 3 ], {
		'dtype': 'float32'
	});

	t.strictEqual( String( getDType( actual ) ), 'float32', 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 3 ], 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying an output array order', function test( t ) {
	var expected;
	var actual;

	expected = [ [ 0.0, 1.0 ], [ 0.0, 1.0 ] ];
	actual = zeroTo( [ 2, 2 ], {
		'order': 'row-major'
	});

	t.strictEqual( String( getDType( actual ) ), 'float64', 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 2, 2 ], 'returns expected value' );
	t.strictEqual( getOrder( actual ), 'row-major', 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	expected = [ [ 0.0, 1.0 ], [ 0.0, 1.0 ] ];
	actual = zeroTo( [ 2, 2 ], {
		'order': 'column-major'
	});

	t.strictEqual( String( getDType( actual ) ), 'float64', 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 2, 2 ], 'returns expected value' );
	t.strictEqual( getOrder( actual ), 'column-major', 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying operation dimensions', function test( t ) {
	var expected;
	var actual;

	expected = [ [ 0.0, 1.0 ], [ 0.0, 1.0 ] ];
	actual = zeroTo( [ 2, 2 ], {
		'dims': [ -1 ]
	});

	t.strictEqual( String( getDType( actual ) ), 'float64', 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 2, 2 ], 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	expected = [ [ 0.0, 0.0 ], [ 1.0, 1.0 ] ];
	actual = zeroTo( [ 2, 2 ], {
		'dims': [ 0 ]
	});

	t.strictEqual( String( getDType( actual ) ), 'float64', 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 2, 2 ], 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	expected = [ [ 0.0, 1.0 ], [ 2.0, 3.0 ] ];
	actual = zeroTo( [ 2, 2 ], {
		'dims': [ 0, 1 ]
	});

	t.strictEqual( String( getDType( actual ) ), 'float64', 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 2, 2 ], 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	expected = [ [ 0.0, 0.0 ], [ 0.0, 0.0 ] ];
	actual = zeroTo( [ 2, 2 ], {
		'dims': []
	});

	t.strictEqual( String( getDType( actual ) ), 'float64', 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 2, 2 ], 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying array index modes and submodes', function test( t ) {
	var expected;
	var actual;
	var opts;

	opts = {
		'mode': 'clamp',
		'submode': [ 'wrap' ]
	};
	actual = zeroTo( [ 2, 2, 3 ], opts );
	expected = [
		[
			// 0    1    2
			[ 0.0, 1.0, 2.0 ],

			// 3    4    5
			[ 0.0, 1.0, 2.0 ]
		],
		[
			// 6    7    8
			[ 0.0, 1.0, 2.0 ],

			// 9   10   11
			[ 0.0, 1.0, 2.0 ]
		]
	];
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	// Clamped:
	t.strictEqual( actual.iget( actual.length+10 ), 2.0, 'returns expected value' );
	actual.iset( actual.length+10, 10.0 );
	t.strictEqual( actual.iget( actual.length+10 ), 10.0, 'returns expected value' );

	// Wrapped:
	t.strictEqual( actual.get( 2, 2, 3 ), 0.0, 'returns expected value' );
	actual.set( 2, 2, 3, 30.0 );
	t.strictEqual( actual.get( 0, 0, 0 ), 30.0, 'returns expected value' );
	t.strictEqual( actual.get( 2, 2, 3 ), 30.0, 'returns expected value' );

	t.end();
});
