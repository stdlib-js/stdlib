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
var invertBy = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof invertBy, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if not provided an object-like value', function test( t ) {
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
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			invertBy( value, noop );
		};
	}
});

tape( 'the function throws an error if provided a last argument which is not a function (no options)', function test( t ) {
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
		{}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			invertBy( {}, value );
		};
	}
});

tape( 'the function throws an error if provided a last argument which is not a function (options)', function test( t ) {
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
		{}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			invertBy( {}, {}, value );
		};
	}
});

tape( 'the function throws an error if provided an options argument which is not an object', function test( t ) {
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
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			invertBy( {}, value, noop );
		};
	}
});

tape( 'the function throws an error if provided a duplicates option which is not a boolean primitive', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var opts = {
				'duplicates': value
			};
			invertBy( {}, opts, noop );
		};
	}
});

tape( 'the function returns an empty object if provided an empty object', function test( t ) {
	var out;

	function transform( key, value ) {
		return value;
	}
	out = invertBy( {}, transform );
	t.deepEqual( out, {}, 'returns empty object' );
	t.end();
});

tape( 'the function inverts an object according to a transform function', function test( t ) {
	var expected;
	var actual;
	var obj;

	function transform( key, value ) {
		return value;
	}

	obj = {
		'a': 'beep',
		'b': 'boop',
		'c': true,
		'd': null,
		'e': [ 1, 2, 3 ],
		'f': {
			'a': 'b'
		},
		'g': 1
	};
	expected = {
		'beep': 'a',
		'boop': 'b',
		'true': 'c',
		'null': 'd',
		'1,2,3': 'e',
		'[object Object]': 'f',
		'1': 'g'
	};

	actual = invertBy( obj, transform );
	t.deepEqual( actual, expected, 'returns inverted object' );
	t.end();
});

tape( 'the function handles duplicate values', function test( t ) {
	var expected;
	var actual;
	var obj;

	function transform( key, value ) {
		return value;
	}

	obj = {
		'a': 'beep',
		'b': 'beep',
		'c': 'boop',
		'd': 'boop',
		'e': 'boop'
	};
	expected = {
		'beep': [ 'a', 'b' ],
		'boop': [ 'c', 'd', 'e' ]
	};
	actual = invertBy( obj, transform );

	t.deepEqual( actual, expected, 'returns inverted object' );
	t.end();
});

tape( 'the function supports overriding duplicate values', function test( t ) {
	var expected;
	var actual;
	var opts;
	var obj;

	function transform( key, value ) {
		return value;
	}

	obj = {
		'a': 'beep',
		'b': 'beep'
	};
	opts = {
		'duplicates': false
	};
	expected = {
		'beep': 'b'
	};
	actual = invertBy( obj, opts, transform );

	t.deepEqual( actual, expected, 'returns inverted object' );
	t.end();
});

tape( 'the function ignores unknown options', function test( t ) {
	var expected;
	var actual;
	var opts;
	var obj;

	function transform( key, value ) {
		return value;
	}

	obj = {
		'a': 'beep',
		'b': 'beep'
	};
	opts = {
		'bee': 'bop'
	};
	expected = {
		'beep': [ 'a', 'b' ]
	};
	actual = invertBy( obj, opts, transform );

	t.deepEqual( actual, expected, 'ignores unknown options' );
	t.end();
});

tape( 'the function supports custom transformations', function test( t ) {
	var expected;
	var actual;
	var obj;

	function transform( key, value ) {
		return key + value;
	}

	obj = {
		'a': 'beep',
		'b': 'beep',
		'c': 'boop',
		'd': 'boop',
		'e': 'boop'
	};
	expected = {
		'abeep': 'a',
		'bbeep': 'b',
		'cboop': 'c',
		'dboop': 'd',
		'eboop': 'e'
	};
	actual = invertBy( obj, transform );

	t.deepEqual( actual, expected, 'returns inverted object' );
	t.end();
});

tape( 'the function supports custom transformations (object)', function test( t ) {
	var expected;
	var actual;
	var obj;

	function transform( key, value, obj ) {
		if ( key === 'name' ) {
			return value;
		}
		return obj.name + ':' + value;
	}

	obj = {
		'name': 'foo',
		'a': 'beep',
		'b': 'beep',
		'c': 'boop',
		'd': 'boop',
		'e': 'boop'
	};
	expected = {
		'foo': 'name',
		'foo:beep': [ 'a', 'b' ],
		'foo:boop': [ 'c', 'd', 'e' ]
	};
	actual = invertBy( obj, transform );

	t.deepEqual( actual, expected, 'returns inverted object' );
	t.end();
});
