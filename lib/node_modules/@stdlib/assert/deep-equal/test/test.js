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
var Int8Array = require( '@stdlib/array/int8' );
var string2buffer = require( '@stdlib/buffer/from-string' );
var array2buffer = require( '@stdlib/buffer/from-array' );
var Number = require( '@stdlib/number/ctor' );
var Boolean = require( '@stdlib/boolean/ctor' );
var inherit = require( '@stdlib/utils/inherit' );
var deepEqual = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof deepEqual, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function compares boolean, string, and number primitives using strict equality', function test( t ) {
	var values;
	var a;
	var b;
	var i;

	values = [
		'beep',
		'boop',
		'baz',
		1,
		'1',
		2.3,
		'2.3',
		0,
		-2.0,
		true,
		false,
		'true',
		'false'
	];
	for ( i = 1; i < values.length; i++ ) {
		a = values[ i-1 ];
		b = values[ i ];
		t.strictEqual( deepEqual( a, a ), true, 'returns true' );
		t.strictEqual( deepEqual( b, b ), true, 'returns true' );
		t.strictEqual( deepEqual( a, b ), false, 'returns false' );
	}
	t.end();
});

tape( 'the function returns `false` for two `NaN`s', function test( t ) {
	t.strictEqual( deepEqual( NaN, NaN ), false, 'returns false' );
	t.end();
});

tape( 'the function returns `true` for two `null`s', function test( t ) {
	t.strictEqual( deepEqual( null, null ), true, 'returns true' );
	t.end();
});

tape( 'the function returns `true` for two `undefined`s', function test( t ) {
	t.strictEqual( deepEqual( void 0, void 0 ), true, 'returns true' );
	t.end();
});

tape( 'the function compares `arguments` objects', function test( t ) {
	var a = returnArgs( 1, 2, 3 );
	var b = returnArgs( 1, 2, 3 );
	var c = returnArgs( 3, 2, 1 );

	t.strictEqual( deepEqual( a, b ), true, 'returns true' );
	t.strictEqual( deepEqual( a, c ), false, 'returns false' );
	t.strictEqual( deepEqual( b, c ), false, 'returns false' );
	t.strictEqual( deepEqual( a, [ 1, 2, 3 ] ), false, 'returns false' );
	t.end();

	function returnArgs() {
		return arguments;
	}
});

tape( 'the function distinguishes between `null`, `NaN`, and `undefined`', function test( t ) {
	t.strictEqual( deepEqual( NaN, null ), false, 'returns false' );
	t.strictEqual( deepEqual( NaN, void 0 ), false, 'returns false' );
	t.strictEqual( deepEqual( null, void 0 ), false, 'returns false' );
	t.end();
});

tape( 'the function returns `false` if provided a primitive and an object type', function test( t ) {
	var a;
	var b;

	a = 'abc';
	b = new String( 'abc' ); // eslint-disable-line no-new-wrappers
	t.strictEqual( deepEqual( a, b ), false, 'returns false' );

	a = 'abc';
	b = string2buffer( 'abc' );
	t.strictEqual( deepEqual( a, b ), false, 'returns false' );
	t.strictEqual( deepEqual( b, a ), false, 'returns false' );

	a = null;
	b = [];
	t.strictEqual( deepEqual( a, b ), false, 'returns false' );

	a = true;
	b = new Boolean( true ); // eslint-disable-line no-new-wrappers
	t.strictEqual( deepEqual( a, b ), false, 'returns false' );

	a = 3.12;
	b = new Number( 3.12 ); // eslint-disable-line no-new-wrappers
	t.strictEqual( deepEqual( a, b ), false, 'returns false' );

	t.end();
});

tape( 'the function returns `false` for objects of different types', function test( t ) {
	t.strictEqual( deepEqual( [], {} ), false, 'returns false' );
	t.strictEqual( deepEqual( [], new RegExp( '[0-9]' ) ), false, 'returns false' ); // eslint-disable-line prefer-regex-literals
	t.strictEqual( deepEqual( new Date(), new RegExp( '[0-9]' ) ), false, 'returns false' ); // eslint-disable-line prefer-regex-literals
	t.strictEqual( deepEqual( new Int8Array(), [] ), false, 'returns false' );
	t.strictEqual( deepEqual( string2buffer( 'xyz' ), new String( 'xyz' ) ), false, 'returns false' ); // eslint-disable-line no-new-wrappers
	t.strictEqual( deepEqual( array2buffer( [ 1, 2, 3 ] ), [ 1, 2, 3 ] ), false, 'returns false' );

	t.end();
});

tape( 'the function checks deep equality of `Date` objects', function test( t ) {
	var a = new Date( '2018-09-20T01:23:28.936Z' );
	var b = new Date( 1537406608936 );
	var c = new Date();

	t.strictEqual( deepEqual( a, b ), true, 'returns true' );
	t.strictEqual( deepEqual( c, c ), true, 'returns true' );
	t.strictEqual( deepEqual( a, c ), false, 'returns false' );
	t.strictEqual( deepEqual( b, c ), false, 'returns false' );
	t.end();
});

tape( 'the function checks equality of `RegExp` objects', function test( t ) {
	var a = new RegExp( '[0-9]+', 'gi' ); // eslint-disable-line prefer-regex-literals
	var b = /[0-9]+/gi;
	var c = /[0-9]+/;

	t.strictEqual( deepEqual( a, b ), true, 'returns true' );
	t.strictEqual( deepEqual( c, c ), true, 'returns true' );
	t.strictEqual( deepEqual( a, c ), false, 'returns false' );
	t.strictEqual( deepEqual( b, c ), false, 'returns false' );
	t.end();
});

tape( 'the function checks equality of `Error` objects', function test( t ) {
	var values;
	var a;
	var b;
	var i;

	values = [
		new Error( 'beep' ),
		new Error( 'boop' ),
		new TypeError( 'baz' ),
		new RangeError( 'baz' ),
		new SyntaxError()
	];
	for ( i = 1; i < values.length; i++ ) {
		a = values[ i-1 ];
		b = values[ i ];
		t.strictEqual( deepEqual( a, a ), true, 'returns true' );
		t.strictEqual( deepEqual( b, b ), true, 'returns true' );
		t.strictEqual( deepEqual( a, b ), false, 'returns false' );
	}
	t.end();
});

tape( 'the function checks deep equality of `Buffers`', function test( t ) {
	var a = string2buffer( 'xyz' );
	var b = string2buffer( 'xyz' );
	var c = string2buffer( 'abcdef' );
	var d = string2buffer( 'abc' );

	t.strictEqual( deepEqual( a, b ), true, 'returns true' );
	t.strictEqual( deepEqual( a, c ), false, 'returns false' );
	t.strictEqual( deepEqual( b, c ), false, 'returns false' );
	t.strictEqual( deepEqual( c, d ), false, 'returns false' );
	t.strictEqual( deepEqual( a, d ), false, 'returns false' );
	t.end();
});

tape( 'the function compares arrays for deep equality', function test( t ) {
	var a;
	var b;

	a = [ 'beep', 'boop', 'baz' ];
	b = [ 'beep', 'boop', 'baz' ];
	t.strictEqual( deepEqual( a, b ), true, 'returns true' );
	b[ 1 ] = 'bap';
	t.strictEqual( deepEqual( a, b ), false, 'returns false' );
	b = [];
	t.strictEqual( deepEqual( a, b ), false, 'returns false' );

	a = [ true, false, true ];
	b = [ true, false, true ];
	t.strictEqual( deepEqual( a, b ), true, 'returns true' );
	b[ 1 ] = true;
	t.strictEqual( deepEqual( a, b ), false, 'returns false' );

	a = [ 0, 1, 0 ];
	b = [ 0, 1, 0 ];
	t.strictEqual( deepEqual( a, b ), true, 'returns true' );
	b = [ 1, 1, 1 ];
	t.strictEqual( deepEqual( a, b ), false, 'returns false' );

	a = [ null, null, null ];
	b = [ null, null, null ];
	t.strictEqual( deepEqual( a, b ), true, 'returns true' );
	b = [ NaN, NaN, NaN ];
	t.strictEqual( deepEqual( a, b ), false, 'returns false' );
	b = [ void 0, void 0, void 0 ];
	t.strictEqual( deepEqual( a, b ), false, 'returns false' );

	a = [ void 0, void 0, void 0 ];
	b = [ void 0, void 0, void 0 ];
	t.strictEqual( deepEqual( a, b ), true, 'returns true' );

	t.end();
});

tape( 'the function compares nested arrays for deep equality', function test( t ) {
	var a;
	var b;

	a = [ [ 1, 2 ], [ true, false ] ];
	b = [ [ 1, 2 ], [ true, false ] ];
	t.strictEqual( deepEqual( a, b ), true, 'returns true' );

	b = [ [ true, false ], [ 1, 2 ] ];
	t.strictEqual( deepEqual( a, b ), false, 'returns false' );

	t.end();
});

tape( 'the function compares plain objects for deep equality', function test( t ) {
	var a;
	var b;

	a = {
		'beep': 'boop'
	};
	b = {
		'beep': 'boop'
	};
	t.strictEqual( deepEqual( a, b ), true, 'returns true' );
	b.beep = 'baz';
	t.strictEqual( deepEqual( a, b ), false, 'returns false' );

	a = {
		'beep': [ 0 ]
	};
	b = {
		'beep': 0
	};
	t.strictEqual( deepEqual( a, b ), false, 'returns false' );

	a = {
		'beep': 'boop',
		'boz': 23
	};
	b = {
		'beep': 'boop',
		'baz': 23
	};
	t.strictEqual( deepEqual( a, b ), false, 'returns false' );
	t.strictEqual( deepEqual( b, a ), false, 'returns false' );

	t.end();
});

tape( 'the function distinguishes between array-like objects and arrays', function test( t ) {
	var a = [ 0, 1 ];
	var b = {
		'0': 0,
		'1': 1,
		'length': 2
	};
	t.strictEqual( deepEqual( a, b ), false, 'returns false' );
	t.end();
});

tape( 'the function compares constructor instances for deep equality', function test( t ) {
	var a;
	var b;

	a = new Person( 'Methuselah', 969 );
	b = new Person( 'Methuselah', 969 );
	t.strictEqual( deepEqual( a, b ), true, 'returns true' );
	b.beep = 'boop';
	t.strictEqual( deepEqual( a, b ), false, 'returns false' );

	t.end();

	function Person( name, age ) {
		this.name = name;
		this.age = age;
		return this;
	}
});

tape( 'the function returns `false` for instances of constructors with different prototypes', function test( t ) {
	var a;
	var b;

	a = new Person( 'Methuselah', 969 );
	b = new Person( 'Methuselah', 969 );
	t.strictEqual( deepEqual( a, b ), true, 'returns true' );

	inherit( Person, Foo );
	b = new Person( 'Methuselah', 969 );
	t.strictEqual( deepEqual( a, b ), false, 'returns false' );

	t.end();

	function Person( name, age ) {
		this.name = name;
		this.age = age;
		return this;
	}
	function Foo() {
		return this;
	}
});
