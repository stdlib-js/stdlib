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
var noop = require( '@stdlib/utils/noop' );
var groupOwn = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof groupOwn, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if not provided an object', function test( t ) {
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
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			groupOwn( value, noop );
		};
	}
});

tape( 'the function throws an error if not provided an indicator function (no options)', function test( t ) {
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
		[],
		/.*/,
		new Date()
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var obj = {
				'a': 1,
				'b': 2,
				'c': 3
			};
			groupOwn( obj, value );
		};
	}
});

tape( 'the function throws an error if not provided an indicator function (options)', function test( t ) {
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
		[],
		/.*/,
		new Date()
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var obj = {
				'a': 1,
				'b': 2,
				'c': 3
			};
			groupOwn( obj, {}, value );
		};
	}
});

tape( 'the function throws an error if provided an invalid options argument', function test( t ) {
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
		function noop() {},
		/.*/,
		new Date()
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var obj = {
				'a': 1,
				'b': 2,
				'c': 3
			};
			groupOwn( obj, value, noop );
		};
	}
});

tape( 'the function throws an error if provided an invalid option', function test( t ) {
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
		function noop() {},
		/.*/,
		new Date()
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var opts;
			var obj;

			obj = {
				'a': 1,
				'b': 2,
				'c': 3
			};
			opts = {
				'returns': value
			};
			groupOwn( obj, opts, noop );
		};
	}
});

tape( 'the function groups object values according to an indicator function', function test( t ) {
	var expected;
	var out;
	var obj;

	function indicator( v ) {
		return v[ 0 ];
	}

	obj = {
		'a': 'beep',
		'b': 'boop',
		'c': 'foo',
		'd': 'bar'
	};

	expected = {
		'b': [ 'beep', 'boop', 'bar' ],
		'f': [ 'foo' ]
	};
	out = groupOwn( obj, indicator );

	// To ensure stable comparison due to iteration order instability, we only want to test that the sets are the same, not the order...
	out.b.sort();
	out.f.sort();
	expected.b.sort();
	expected.f.sort();

	t.deepEqual( out, expected, 'returns expected groups' );
	t.end();
});

tape( 'the function groups object values according to an indicator function (own)', function test( t ) {
	var expected;
	var out;
	var obj;

	function indicator( v ) {
		return v[ 0 ];
	}

	function Foo() {
		this.a = 'beep';
		this.b = 'boop';
		this.c = 'foo';
		this.d = 'bar';
		return this;
	}

	Foo.prototype.e = 'beep';
	Foo.prototype.f = 'boop';

	obj = new Foo();

	expected = {
		'b': [ 'beep', 'boop', 'bar' ],
		'f': [ 'foo' ]
	};
	out = groupOwn( obj, indicator );

	// To ensure stable comparison due to iteration order instability, we only want to test that the sets are the same, not the order...
	out.b.sort();
	out.f.sort();
	expected.b.sort();
	expected.f.sort();

	t.deepEqual( out, expected, 'returns expected groups' );
	t.end();
});

tape( 'the function groups object values according to an indicator function (values)', function test( t ) {
	var expected;
	var opts;
	var out;
	var obj;

	function indicator( v ) {
		return v[ 0 ];
	}

	obj = {
		'a': 'beep',
		'b': 'boop',
		'c': 'foo',
		'd': 'bar'
	};

	opts = {
		'returns': 'values'
	};

	expected = {
		'b': [ 'beep', 'boop', 'bar' ],
		'f': [ 'foo' ]
	};
	out = groupOwn( obj, opts, indicator );

	// To ensure stable comparison due to iteration order instability, we only want to test that the sets are the same, not the order...
	out.b.sort();
	out.f.sort();
	expected.b.sort();
	expected.f.sort();

	t.deepEqual( out, expected, 'returns expected groups' );
	t.end();
});

tape( 'the function groups values according to an indicator function (values; own)', function test( t ) {
	var expected;
	var opts;
	var out;
	var obj;

	function indicator( v ) {
		return v[ 0 ];
	}

	function Foo() {
		this.a = 'beep';
		this.b = 'boop';
		this.c = 'foo';
		this.d = 'bar';
		return this;
	}

	Foo.prototype.e = 'beep';
	Foo.prototype.f = 'boop';

	obj = new Foo();

	opts = {
		'returns': 'values'
	};

	expected = {
		'b': [ 'beep', 'boop', 'bar' ],
		'f': [ 'foo' ]
	};
	out = groupOwn( obj, opts, indicator );

	// To ensure stable comparison due to iteration order instability, we only want to test that the sets are the same, not the order...
	out.b.sort();
	out.f.sort();
	expected.b.sort();
	expected.f.sort();

	t.deepEqual( out, expected, 'returns expected groups' );
	t.end();
});

tape( 'the function groups values according to an indicator function (keys)', function test( t ) {
	var expected;
	var opts;
	var out;
	var obj;

	function indicator( v ) {
		return v[ 0 ];
	}

	obj = {
		'a': 'beep',
		'b': 'boop',
		'c': 'foo',
		'd': 'bar'
	};

	opts = {
		'returns': 'keys'
	};

	expected = {
		'b': [ 'a', 'b', 'd' ],
		'f': [ 'c' ]
	};
	out = groupOwn( obj, opts, indicator );

	// To ensure stable comparison due to iteration order instability, we only want to test that the sets are the same, not the order...
	out.b.sort();
	out.f.sort();
	expected.b.sort();
	expected.f.sort();

	t.deepEqual( out, expected, 'returns expected groups' );
	t.end();
});

tape( 'the function groups values according to an indicator function (keys; own)', function test( t ) {
	var expected;
	var opts;
	var out;
	var obj;

	function indicator( v ) {
		return v[ 0 ];
	}

	function Foo() {
		this.a = 'beep';
		this.b = 'boop';
		this.c = 'foo';
		this.d = 'bar';
		return this;
	}

	Foo.prototype.e = 'beep';
	Foo.prototype.f = 'boop';

	obj = new Foo();

	opts = {
		'returns': 'keys'
	};

	expected = {
		'b': [ 'a', 'b', 'd' ],
		'f': [ 'c' ]
	};
	out = groupOwn( obj, opts, indicator );

	// To ensure stable comparison due to iteration order instability, we only want to test that the sets are the same, not the order...
	out.b.sort();
	out.f.sort();
	expected.b.sort();
	expected.f.sort();

	t.deepEqual( out, expected, 'returns expected groups' );
	t.end();
});

tape( 'the function groups values according to an indicator function (pairs)', function test( t ) {
	var expected;
	var opts;
	var out;
	var obj;

	function indicator( v ) {
		return v[ 0 ];
	}

	obj = {
		'a': 'beep',
		'b': 'boop',
		'c': 'foo',
		'd': 'bar'
	};

	opts = {
		'returns': '*'
	};

	expected = {
		'b': [ [ 'a', 'beep' ], [ 'b', 'boop' ], [ 'd', 'bar' ] ],
		'f': [ [ 'c', 'foo' ] ]
	};
	out = groupOwn( obj, opts, indicator );

	// To ensure stable comparison due to iteration order instability, we only want to test that the sets are the same, not the order...
	out.b.sort( sort );
	out.f.sort( sort );
	expected.b.sort( sort );
	expected.f.sort( sort );

	t.deepEqual( out, expected, 'returns expected groups' );
	t.end();

	function sort( a, b ) {
		return a[ 0 ] < b[ 0 ];
	}
});

tape( 'the function groups values according to an indicator function (pairs; own)', function test( t ) {
	var expected;
	var opts;
	var out;
	var obj;

	function indicator( v ) {
		return v[ 0 ];
	}

	function Foo() {
		this.a = 'beep';
		this.b = 'boop';
		this.c = 'foo';
		this.d = 'bar';
		return this;
	}

	Foo.prototype.e = 'beep';
	Foo.prototype.f = 'boop';

	obj = new Foo();

	opts = {
		'returns': '*'
	};

	expected = {
		'b': [ [ 'a', 'beep' ], [ 'b', 'boop' ], [ 'd', 'bar' ] ],
		'f': [ [ 'c', 'foo' ] ]
	};
	out = groupOwn( obj, opts, indicator );

	// To ensure stable comparison due to iteration order instability, we only want to test that the sets are the same, not the order...
	out.b.sort( sort );
	out.f.sort( sort );
	expected.b.sort( sort );
	expected.f.sort( sort );

	t.deepEqual( out, expected, 'returns expected groups' );
	t.end();

	function sort( a, b ) {
		return a[ 0 ] < b[ 0 ];
	}
});

tape( 'the function groups values according to an indicator function (array-like object)', function test( t ) {
	var expected;
	var opts;
	var out;
	var arr;

	function indicator( v ) {
		if ( typeof v === 'string' ) {
			return v[ 0 ];
		}
		return 'other';
	}

	arr = {
		'length': 4,
		'0': 'beep',
		'1': 'boop',
		'2': 'foo',
		'3': 'bar'
	};
	opts = {
		'returns': 'values'
	};

	// Note: `length` is an own property and thus is included in key iteration.
	expected = {
		'b': [ 'beep', 'boop', 'bar' ],
		'f': [ 'foo' ],
		'other': [ 4 ]
	};
	out = groupOwn( arr, opts, indicator );

	// To ensure stable comparison due to iteration order instability, we only want to test that the sets are the same, not the order...
	out.b.sort();
	out.f.sort();
	out.other.sort();
	expected.b.sort();
	expected.f.sort();
	expected.other.sort();

	t.deepEqual( out, expected, 'returns expected groups' );
	t.end();
});

tape( 'the function supports providing an execution context', function test( t ) {
	var expected;
	var opts;
	var ctx;
	var out;
	var arr;

	function indicator( v ) {
		this.count += 1; // eslint-disable-line no-invalid-this
		return v;
	}

	ctx = {
		'count': 0
	};

	arr = [ 0.0, 1.0, 1.0, 0.0 ];

	opts = {
		'thisArg': ctx
	};
	expected = {
		'0': [ 0.0, 0.0 ],
		'1': [ 1.0, 1.0 ]
	};
	out = groupOwn( arr, opts, indicator );

	t.deepEqual( out, expected, 'returns expected groups' );
	t.strictEqual( ctx.count, 4, 'updates context' );

	t.end();
});

tape( 'the function invokes the indicator function with both the object value and the object key', function test( t ) {
	var expected;
	var out;
	var arr;

	function indicator( v, k ) {
		k = parseInt( k, 10 );
		if ( k < 2 ) {
			return 'low';
		}
		return 'high';
	}

	arr = [ 5, 5, 1, 1 ];

	expected = {
		'low': [ 5, 5 ],
		'high': [ 1, 1 ]
	};
	out = groupOwn( arr, indicator );

	t.deepEqual( out, expected, 'returns expected groups' );
	t.end();
});

tape( 'if provided an empty object, the function returns an empty object', function test( t ) {
	var expected;
	var out;
	var obj;

	function indicator( v ) {
		return v[ 0 ];
	}

	obj = {};
	expected = {};

	out = groupOwn( obj, indicator );

	t.deepEqual( out, expected, 'returns expected results' );
	t.end();
});

tape( 'if provided an empty object, the function returns an empty object (values)', function test( t ) {
	var expected;
	var opts;
	var out;
	var obj;

	function indicator( v ) {
		return v[ 0 ];
	}

	obj = {};
	expected = {};

	opts = {
		'returns': 'values'
	};

	out = groupOwn( obj, opts, indicator );

	t.deepEqual( out, expected, 'returns expected results' );
	t.end();
});

tape( 'if provided an empty object, the function returns an empty object (keys)', function test( t ) {
	var expected;
	var opts;
	var out;
	var obj;

	function indicator( v ) {
		return v[ 0 ];
	}

	obj = {};
	expected = {};

	opts = {
		'returns': 'keys'
	};

	out = groupOwn( obj, opts, indicator );

	t.deepEqual( out, expected, 'returns expected results' );
	t.end();
});

tape( 'if provided an empty object, the function returns an empty object (pairs)', function test( t ) {
	var expected;
	var opts;
	var out;
	var obj;

	function indicator( v ) {
		return v[ 0 ];
	}

	obj = {};
	expected = {};

	opts = {
		'returns': '*'
	};

	out = groupOwn( obj, opts, indicator );

	t.deepEqual( out, expected, 'returns expected results' );
	t.end();
});

tape( 'the function does not account for dynamic addition and removal of object properties', function test( t ) {
	var expected;
	var out;
	var arr;

	function indicator( v, i ) {
		arr.push( 'beep' );
		arr[ 'a'+i ] = 'boop';
		return v[ 0 ];
	}

	arr = [ 'beep', 'boop', 'foo', 'bar' ];

	expected = {
		'b': [ 'beep', 'boop', 'bar' ],
		'f': [ 'foo' ]
	};
	out = groupOwn( arr, indicator );

	// To ensure stable comparison due to iteration order instability, we only want to test that the sets are the same, not the order...
	out.b.sort();
	out.f.sort();
	expected.b.sort();
	expected.f.sort();

	t.deepEqual( out, expected, 'returns expected groups' );
	t.end();
});

tape( 'the function groups values according to an indicator function (string serialization)', function test( t ) {
	var expected;
	var out;
	var obj;

	function indicator() {
		return {};
	}

	obj = {
		'a': 'beep',
		'b': 'boop',
		'c': 'foo',
		'd': 'bar'
	};

	expected = {
		'[object Object]': [ 'beep', 'boop', 'foo', 'bar' ]
	};
	out = groupOwn( obj, indicator );

	// To ensure stable comparison due to iteration order instability, we only want to test that the sets are the same, not the order...
	out[ '[object Object]' ].sort();
	expected[ '[object Object]' ].sort();

	t.deepEqual( out, expected, 'returns expected groups' );
	t.end();
});

tape( 'the function groups values according to an indicator function (string serialization)', function test( t ) {
	var expected;
	var out;
	var obj;

	function indicator() {}

	obj = {
		'a': 'beep',
		'b': 'boop',
		'c': 'foo',
		'd': 'bar'
	};

	expected = {
		'undefined': [ 'beep', 'boop', 'foo', 'bar' ]
	};
	out = groupOwn( obj, indicator );

	// To ensure stable comparison due to iteration order instability, we only want to test that the sets are the same, not the order...
	out.undefined.sort();
	expected.undefined.sort();

	t.deepEqual( out, expected, 'returns expected groups' );
	t.end();
});
