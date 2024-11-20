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
var string2buffer = require( '@stdlib/buffer/from-string' );
var Float64Array = require( '@stdlib/array/float64' );
var flattenObject = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof flattenObject, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if not provided an object-like value', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		null,
		void 0,
		true,
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			flattenObject( value );
		};
	}
});

tape( 'the function throws an error if not provided an object-like value (options)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		null,
		void 0,
		true,
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			flattenObject( value, {} );
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
		null,
		void 0,
		true,
		[],
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			flattenObject( {}, value );
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
		null,
		void 0,
		[],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			flattenObject( {}, {
				'copy': value
			});
		};
	}
});

tape( 'if the `depth` option is `0`, the function returns the input value', function test( t ) {
	var expected;
	var actual;
	var obj;

	expected = {
		'a': {
			'b': {
				'c': 'd'
			}
		}
	};
	obj = {
		'a': {
			'b': {
				'c': 'd'
			}
		}
	};
	actual = flattenObject( obj, {
		'depth': 0
	});

	t.equal( obj, actual, 'same reference' );
	t.deepEqual( actual, expected, 'deep equal' );

	t.end();
});

tape( 'if the `depth` option is `0` and the `copy` option is `true`, the function returns a deep copy of the input value', function test( t ) {
	var expected;
	var actual;
	var obj;

	expected = {
		'a': {
			'b': {
				'c': 'd'
			}
		}
	};
	obj = {
		'a': {
			'b': {
				'c': 'd'
			}
		}
	};
	actual = flattenObject( obj, {
		'depth': 0,
		'copy': true
	});

	t.notEqual( obj, actual, 'different reference' );
	t.deepEqual( actual, expected, 'deep equal' );

	t.end();
});

tape( 'the function flattens an object (1 level)', function test( t ) {
	var expected;
	var actual;
	var obj;

	obj = {
		'a': true
	};
	expected = {
		'a': true
	};
	actual = flattenObject( obj );

	t.deepEqual( actual, expected, 'deep equal' );
	t.end();
});

tape( 'the function flattens an object (2 levels)', function test( t ) {
	var expected;
	var actual;
	var obj;

	obj = {
		'a': {
			'b': true
		}
	};
	expected = {
		'a.b': true
	};
	actual = flattenObject( obj );

	t.deepEqual( actual, expected, 'deep equal' );
	t.end();
});

tape( 'the function flattens an object (3 levels)', function test( t ) {
	var expected;
	var actual;
	var obj;

	obj = {
		'a': {
			'b': {
				'c': 'd'
			}
		}
	};
	expected = {
		'a.b.c': 'd'
	};
	actual = flattenObject( obj );

	t.deepEqual( actual, expected, 'deep equal' );
	t.end();
});

tape( 'the function flattens an object (multiple keys)', function test( t ) {
	var expected;
	var actual;
	var obj;

	obj = {
		'a': {
			'b': {
				'c': 'd',
				'e': 'f'
			}
		}
	};
	expected = {
		'a.b.c': 'd',
		'a.b.e': 'f'
	};
	actual = flattenObject( obj );

	t.deepEqual( actual, expected, 'deep equal' );
	t.end();
});

tape( 'the function ignores empty objects', function test( t ) {
	var expected;
	var actual;
	var obj;

	obj = {
		'a': {
			'b': {
				'c': {}
			}
		}
	};
	expected = {
		'a.b.c': {}
	};
	actual = flattenObject( obj );

	t.deepEqual( actual, expected, 'deep equal' );
	t.end();
});

tape( 'by default, the function does not flatten arrays', function test( t ) {
	var expected;
	var actual;
	var obj;

	obj = {
		'a': {
			'b': {
				'c': [ 1, 2, 3 ]
			}
		}
	};
	expected = {
		'a.b.c': obj.a.b.c
	};
	actual = flattenObject( obj );

	t.deepEqual( actual, expected, 'deep equal' );
	t.equal( actual[ 'a.b.c' ], obj.a.b.c, 'same reference' );
	t.end();
});

tape( 'the function supports flattening an array', function test( t ) {
	var expected;
	var actual;
	var arr;

	arr = [ 1, 2, 3 ];
	expected = {
		'0': 1,
		'1': 2,
		'2': 3
	};
	actual = flattenObject( arr, {
		'flattenArrays': true
	});

	t.deepEqual( actual, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports flattening an array (nested)', function test( t ) {
	var expected;
	var actual;
	var obj;

	obj = {
		'a': [ 1, 2, 3 ]
	};
	expected = {
		'a.0': 1,
		'a.1': 2,
		'a.2': 3
	};
	actual = flattenObject( obj, {
		'flattenArrays': true
	});

	t.deepEqual( actual, expected, 'deep equal' );
	t.end();
});

tape( 'the function ignores primitives and "exotic" objects', function test( t ) {
	var expected;
	var actual;
	var obj;

	obj = {
		'a': {
			'a': 'beep',
			'b': 5,
			'c': true,
			'd': null,
			'e': void 0,
			'f': /.*/,
			'g': new Date(),
			'h': function noop() {},
			'i': string2buffer( 'beep' ),
			'j': new Float64Array( 10 )
		}
	};
	expected = {
		'a.a': obj.a.a,
		'a.b': obj.a.b,
		'a.c': obj.a.c,
		'a.d': obj.a.d,
		'a.e': obj.a.e,
		'a.f': obj.a.f,
		'a.g': obj.a.g,
		'a.h': obj.a.h,
		'a.i': obj.a.i,
		'a.j': obj.a.j
	};
	actual = flattenObject( obj );

	t.deepEqual( actual, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports providing a custom delimiter', function test( t ) {
	var expected;
	var actual;
	var obj;

	obj = {
		'a': {
			'b': {
				'c': 'd'
			}
		}
	};
	expected = {
		'a|b|c': 'd'
	};
	actual = flattenObject( obj, {
		'delimiter': '|'
	});

	t.deepEqual( actual, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports specifying a maximum flatten depth', function test( t ) {
	var expected;
	var actual;
	var obj;

	obj = {
		'a': {
			'b': {
				'c': 'd'
			}
		}
	};
	expected = {
		'a.b': {
			'c': 'd'
		}
	};
	actual = flattenObject( obj, {
		'depth': 1
	});

	t.deepEqual( actual, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports deep copying', function test( t ) {
	var expected;
	var actual;
	var obj;

	obj = {
		'a': {
			'b': [ 1, 2, 3 ],
			'c': {
				'd': 'e'
			}
		}
	};
	expected = {
		'a.b': [ 1, 2, 3 ],
		'a.c': {
			'd': 'e'
		}
	};
	actual = flattenObject( obj, {
		'depth': 1,
		'copy': true
	});

	t.deepEqual( actual, expected, 'deep equal' );
	t.notEqual( actual[ 'a.b' ], obj.a.b, 'different references' );
	t.notEqual( actual[ 'a.c' ], obj.a.c, 'different references' );

	t.end();
});
