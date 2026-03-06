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
var bifurcateIn = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof bifurcateIn, 'function', 'main export is a function' );
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
			bifurcateIn( value, noop );
		};
	}
});

tape( 'the function throws an error if not provided a predicate function (no options)', function test( t ) {
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
			bifurcateIn( obj, value );
		};
	}
});

tape( 'the function throws an error if not provided a predicate function (options)', function test( t ) {
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
			bifurcateIn( obj, {}, value );
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
			bifurcateIn( obj, value, noop );
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
			bifurcateIn( obj, opts, noop );
		};
	}
});

tape( 'the function splits object values into two groups according to a predicate function', function test( t ) {
	var expected;
	var out;
	var obj;

	function predicate( v ) {
		return v[ 0 ] === 'b';
	}

	obj = Object.create( null );
	obj.a = 'beep';
	obj.b = 'boop';
	obj.c = 'foo';
	obj.d = 'bar';

	expected = [
		[ 'beep', 'boop', 'bar' ],
		[ 'foo' ]
	];
	out = bifurcateIn( obj, predicate );

	// To ensure stable comparison due to iteration order instability, we only want to test that the sets are the same, not the order...
	out[ 0 ].sort();
	out[ 1 ].sort();
	expected[ 0 ].sort();
	expected[ 1 ].sort();

	t.deepEqual( out, expected, 'returns expected groups' );
	t.end();
});

tape( 'the function splits object values into two groups according to a predicate function (inherited)', function test( t ) {
	var expected;
	var out;
	var obj;

	function predicate( v ) {
		return v[ 0 ] === 'b';
	}

	function Foo() {
		this.a = 'beep';
		this.b = 'boop';
		this.c = 'foo';
		this.d = 'bar';
		return this;
	}

	Foo.prototype = Object.create( null );
	Foo.prototype.e = 'bip';
	Foo.prototype.f = 'fu';

	obj = new Foo();

	expected = [
		[ 'beep', 'boop', 'bar', 'bip' ],
		[ 'foo', 'fu' ]
	];
	out = bifurcateIn( obj, predicate );

	// To ensure stable comparison due to iteration order instability, we only want to test that the sets are the same, not the order...
	out[ 0 ].sort();
	out[ 1 ].sort();
	expected[ 0 ].sort();
	expected[ 1 ].sort();

	t.deepEqual( out, expected, 'returns expected groups' );
	t.end();
});

tape( 'the function splits object values into two groups according to a predicate function (values)', function test( t ) {
	var expected;
	var opts;
	var out;
	var obj;

	function predicate( v ) {
		return v[ 0 ] === 'b';
	}

	obj = Object.create( null );
	obj.a = 'beep';
	obj.b = 'boop';
	obj.c = 'foo';
	obj.d = 'bar';

	opts = {
		'returns': 'values'
	};

	expected = [
		[ 'beep', 'boop', 'bar' ],
		[ 'foo' ]
	];
	out = bifurcateIn( obj, opts, predicate );

	// To ensure stable comparison due to iteration order instability, we only want to test that the sets are the same, not the order...
	out[ 0 ].sort();
	out[ 1 ].sort();
	expected[ 0 ].sort();
	expected[ 1 ].sort();

	t.deepEqual( out, expected, 'returns expected groups' );
	t.end();
});

tape( 'the function splits object values into two groups according to a predicate function (values; inherited)', function test( t ) {
	var expected;
	var opts;
	var out;
	var obj;

	function predicate( v ) {
		return v[ 0 ] === 'b';
	}

	function Foo() {
		this.a = 'beep';
		this.b = 'boop';
		this.c = 'foo';
		this.d = 'bar';
		return this;
	}

	Foo.prototype = Object.create( null );
	Foo.prototype.e = 'bip';
	Foo.prototype.f = 'fu';

	obj = new Foo();

	opts = {
		'returns': 'values'
	};

	expected = [
		[ 'beep', 'boop', 'bar', 'bip' ],
		[ 'foo', 'fu' ]
	];
	out = bifurcateIn( obj, opts, predicate );

	// To ensure stable comparison due to iteration order instability, we only want to test that the sets are the same, not the order...
	out[ 0 ].sort();
	out[ 1 ].sort();
	expected[ 0 ].sort();
	expected[ 1 ].sort();

	t.deepEqual( out, expected, 'returns expected groups' );
	t.end();
});

tape( 'the function splits object values into two groups according to a predicate function (keys)', function test( t ) {
	var expected;
	var opts;
	var out;
	var obj;

	function predicate( v ) {
		return v[ 0 ] === 'b';
	}

	obj = Object.create( null );
	obj.a = 'beep';
	obj.b = 'boop';
	obj.c = 'foo';
	obj.d = 'bar';

	opts = {
		'returns': 'keys'
	};

	expected = [
		[ 'a', 'b', 'd' ],
		[ 'c' ]
	];
	out = bifurcateIn( obj, opts, predicate );

	// To ensure stable comparison due to iteration order instability, we only want to test that the sets are the same, not the order...
	out[ 0 ].sort();
	out[ 1 ].sort();
	expected[ 0 ].sort();
	expected[ 1 ].sort();

	t.deepEqual( out, expected, 'returns expected groups' );
	t.end();
});

tape( 'the function splits object values into two groups according to a predicate function (keys; inherited)', function test( t ) {
	var expected;
	var opts;
	var out;
	var obj;

	function predicate( v ) {
		return v[ 0 ] === 'b';
	}

	function Foo() {
		this.a = 'beep';
		this.b = 'boop';
		this.c = 'foo';
		this.d = 'bar';
		return this;
	}

	Foo.prototype = Object.create( null );
	Foo.prototype.e = 'bip';
	Foo.prototype.f = 'fu';

	obj = new Foo();

	opts = {
		'returns': 'keys'
	};

	expected = [
		[ 'a', 'b', 'd', 'e' ],
		[ 'c', 'f' ]
	];
	out = bifurcateIn( obj, opts, predicate );

	// To ensure stable comparison due to iteration order instability, we only want to test that the sets are the same, not the order...
	out[ 0 ].sort();
	out[ 1 ].sort();
	expected[ 0 ].sort();
	expected[ 1 ].sort();

	t.deepEqual( out, expected, 'returns expected groups' );
	t.end();
});

tape( 'the function splits object values into two groups according to a predicate function (pairs)', function test( t ) {
	var expected;
	var opts;
	var out;
	var obj;

	function predicate( v ) {
		return v[ 0 ] === 'b';
	}

	obj = Object.create( null );
	obj.a = 'beep';
	obj.b = 'boop';
	obj.c = 'foo';
	obj.d = 'bar';

	opts = {
		'returns': '*'
	};

	expected = [
		[ [ 'a', 'beep' ], [ 'b', 'boop' ], [ 'd', 'bar' ] ],
		[ [ 'c', 'foo' ] ]
	];
	out = bifurcateIn( obj, opts, predicate );

	// To ensure stable comparison due to iteration order instability, we only want to test that the sets are the same, not the order...
	out[ 0 ].sort( sort );
	out[ 1 ].sort( sort );
	expected[ 0 ].sort( sort );
	expected[ 1 ].sort( sort );

	t.deepEqual( out, expected, 'returns expected groups' );
	t.end();

	function sort( a, b ) {
		return a[ 0 ] < b[ 0 ];
	}
});

tape( 'the function splits object values into two groups according to a predicate function (pairs; inherited)', function test( t ) {
	var expected;
	var opts;
	var out;
	var obj;

	function predicate( v ) {
		return v[ 0 ] === 'b';
	}

	function Foo() {
		this.a = 'beep';
		this.b = 'boop';
		this.c = 'foo';
		this.d = 'bar';
		return this;
	}

	Foo.prototype = Object.create( null );
	Foo.prototype.e = 'bip';
	Foo.prototype.f = 'fu';

	obj = new Foo();

	opts = {
		'returns': '*'
	};

	expected = [
		[ [ 'a', 'beep' ], [ 'b', 'boop' ], [ 'd', 'bar' ], [ 'e', 'bip' ] ],
		[ [ 'c', 'foo' ], [ 'f', 'fu' ] ]
	];
	out = bifurcateIn( obj, opts, predicate );

	// To ensure stable comparison due to iteration order instability, we only want to test that the sets are the same, not the order...
	out[ 0 ].sort( sort );
	out[ 1 ].sort( sort );
	expected[ 0 ].sort( sort );
	expected[ 1 ].sort( sort );

	t.deepEqual( out, expected, 'returns expected groups' );
	t.end();

	function sort( a, b ) {
		return a[ 0 ] < b[ 0 ];
	}
});

tape( 'the function splits object values into two groups according to a predicate function (array-like object)', function test( t ) {
	var expected;
	var opts;
	var out;
	var arr;

	function predicate( v ) {
		return v[ 0 ] === 'b';
	}

	arr = Object.create( null );
	arr.length = 4;
	arr[ 0 ] = 'beep';
	arr[ 1 ] = 'boop';
	arr[ 2 ] = 'foo';
	arr[ 3 ] = 'bar';

	opts = {
		'returns': 'values'
	};

	expected = [
		[ 'beep', 'boop', 'bar' ],
		[ 'foo', 4 ]
	];
	out = bifurcateIn( arr, opts, predicate );

	// To ensure stable comparison due to iteration order instability, we only want to test that the sets are the same, not the order...
	out[ 0 ].sort();
	out[ 1 ].sort();
	expected[ 0 ].sort();
	expected[ 1 ].sort();

	t.deepEqual( out, expected, 'returns expected groups' );
	t.end();
});

tape( 'the function supports providing an execution context', function test( t ) {
	var expected;
	var opts;
	var ctx;
	var out;
	var obj;

	function predicate( v ) {
		this.count += 1; // eslint-disable-line no-invalid-this
		return ( v[ 0 ] === 'b' );
	}

	ctx = {
		'count': 0
	};

	obj = Object.create( null );
	obj.a = 'beep';
	obj.b = 'boop';
	obj.c = 'foo';
	obj.d = 'bar';

	opts = {
		'thisArg': ctx
	};
	expected = [
		[ 'beep', 'boop', 'bar' ],
		[ 'foo' ]
	];
	out = bifurcateIn( obj, opts, predicate );

	// To ensure stable comparison due to iteration order instability, we only want to test that the sets are the same, not the order...
	out[ 0 ].sort();
	out[ 1 ].sort();
	expected[ 0 ].sort();
	expected[ 1 ].sort();

	t.deepEqual( out, expected, 'returns expected groups' );
	t.strictEqual( ctx.count, 4, 'updates context' );

	t.end();
});

tape( 'the function invokes the predicate function with both the object value and the object key', function test( t ) {
	var expected;
	var out;
	var obj;

	function predicate( v, k ) {
		return ( parseInt( k, 10 ) < 2 );
	}

	obj = Object.create( null );
	obj[ 0 ] = 'beep';
	obj[ 1 ] = 'boop';
	obj[ 2 ] = 'foo';
	obj[ 3 ] = 'bar';

	expected = [
		[ 'beep', 'boop' ],
		[ 'foo', 'bar' ]
	];
	out = bifurcateIn( obj, predicate );

	// To ensure stable comparison due to iteration order instability, we only want to test that the sets are the same, not the order...
	out[ 0 ].sort();
	out[ 1 ].sort();
	expected[ 0 ].sort();
	expected[ 1 ].sort();

	t.deepEqual( out, expected, 'returns expected groups' );
	t.end();
});

tape( 'if provided an empty object with no prototype, the function returns an empty array', function test( t ) {
	var expected;
	var out;
	var obj;

	function predicate( v ) {
		return v[ 0 ] === 'b';
	}

	obj = Object.create( null );
	expected = [];

	out = bifurcateIn( obj, predicate );

	t.deepEqual( out, expected, 'returns expected results' );
	t.end();
});

tape( 'if provided an empty object with no prototype, the function returns an empty array (values)', function test( t ) {
	var expected;
	var opts;
	var out;
	var obj;

	function predicate( v ) {
		return v[ 0 ] === 'b';
	}

	obj = Object.create( null );
	expected = [];

	opts = {
		'returns': 'values'
	};

	out = bifurcateIn( obj, opts, predicate );

	t.deepEqual( out, expected, 'returns expected results' );
	t.end();
});

tape( 'if provided an empty object with no prototype, the function returns an empty array (keys)', function test( t ) {
	var expected;
	var opts;
	var out;
	var obj;

	function predicate( v ) {
		return v[ 0 ] === 'b';
	}

	obj = Object.create( null );
	expected = [];

	opts = {
		'returns': 'keys'
	};

	out = bifurcateIn( obj, opts, predicate );

	t.deepEqual( out, expected, 'returns expected results' );
	t.end();
});

tape( 'if provided an empty object with no prototype, the function returns an empty array (pairs)', function test( t ) {
	var expected;
	var opts;
	var out;
	var obj;

	function predicate( v ) {
		return v[ 0 ] === 'b';
	}

	obj = Object.create( null );
	expected = [];

	opts = {
		'returns': '*'
	};

	out = bifurcateIn( obj, opts, predicate );

	t.deepEqual( out, expected, 'returns expected results' );
	t.end();
});

tape( 'the function does not account for dynamic addition and removal of object properties', function test( t ) {
	var expected;
	var out;
	var obj;

	function predicate( v, k ) {
		obj[ 'a'+k ] = 'bap';
		return v[ 0 ] === 'b';
	}

	obj = Object.create( null );
	obj.a = 'beep';
	obj.b = 'boop';
	obj.c = 'foo';
	obj.d = 'bar';

	expected = [
		[ 'beep', 'boop', 'bar' ],
		[ 'foo' ]
	];
	out = bifurcateIn( obj, predicate );

	// To ensure stable comparison due to iteration order instability, we only want to test that the sets are the same, not the order...
	out[ 0 ].sort();
	out[ 1 ].sort();
	expected[ 0 ].sort();
	expected[ 1 ].sort();

	t.deepEqual( out, expected, 'returns expected groups' );
	t.end();
});
