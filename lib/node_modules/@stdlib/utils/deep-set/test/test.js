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
var deepSet = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof deepSet, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function exports a factory function', function test( t ) {
	t.equal( typeof deepSet.factory, 'function', 'exports a factory function' );
	t.end();
});

tape( 'the function returns `false` if provided a non-object or null', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		null,
		void 0,
		NaN,
		true,
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.equal( deepSet( values[ i ], 'a.b.c', 5 ), false, 'returns false' );
	}
	t.end();
});

tape( 'the function throws an error if provided a key path argument which is neither a string primitive or a key array', function test( t ) {
	var values;
	var i;

	values = [
		5,
		null,
		void 0,
		NaN,
		true,
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws when provided a ' + ( typeof values[i] ) );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var obj = {
				'a': 5
			};
			deepSet( obj, value, 5 );
		};
	}
});

tape( 'the function throws an error if provided an options argument which is not an object', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		null,
		NaN,
		true,
		void 0,
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws when provided a ' + ( typeof values[i] ) );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var obj = {
				'a': 5
			};
			deepSet( obj, 'a', 4, value );
		};
	}
});

tape( 'the function throws an error if provided an invalid option', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		null,
		NaN,
		{},
		void 0,
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws when provided a ' + ( typeof values[i] ) );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var obj = {
				'a': 5
			};
			deepSet( obj, 'a', 4, {
				'create': value
			});
		};
	}
});

tape( 'the function returns a boolean', function test( t ) {
	var bool;
	var obj;

	obj = {
		'a': 5
	};
	bool = deepSet( obj, 'a', 4 );
	t.equal( bool, true, 'returns true' );

	bool = deepSet( obj, 'b', 4, {
		'create': false
	});
	t.equal( bool, false, 'returns false' );

	t.end();
});

tape( 'the function deep sets', function test( t ) {
	var expected;
	var bool;
	var obj;

	obj = {
		'a': {
			'b': 0
		}
	};

	bool = deepSet( obj, 'a.b', 4 );
	expected = {
		'a': {
			'b': 4
		}
	};

	t.equal( bool, true, 'returns true' );
	t.deepEqual( obj, expected, 'deep sets object' );

	bool = deepSet( obj, ['a', 'b'], 40 );
	expected = {
		'a': {
			'b': 40
		}
	};

	t.equal( bool, true, 'returns true' );
	t.deepEqual( obj, expected, 'deep sets object' );

	t.end();
});
