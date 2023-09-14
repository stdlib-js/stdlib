/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

/* eslint-disable max-statements, max-lines, max-lines-per-function */

'use strict';

// MODULES //

var tape = require( 'tape' );
var instanceOf = require( '@stdlib/assert/instance-of' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var hasProp = require( '@stdlib/assert/has-property' );
var isInteger = require( '@stdlib/assert/is-integer' ).isPrimitive;
var isNull = require( '@stdlib/assert/is-null' );
var isFunction = require( '@stdlib/assert/is-function' );
var Slice = require( './../lib' );


// FUNCTIONS //

/**
* Tests whether a provided value is an integer or null.
*
* @private
* @param {*} value - value to test
* @returns {boolean} boolean indicating whether a value is an integer or null
*
* @example
* var bool = isIntegerOrNull( 3 );
* // returns true
*
* bool = isIntegerOrNull( null );
* // returns true
*
* bool = isIntegerOrNull( '3' );
* // returns false
*/
function isIntegerOrNull( value ) {
	return ( isInteger( value ) || isNull( value ) );
}


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof Slice, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function is a Slice constructor', function test( t ) {
	var s;

	s = new Slice();
	t.strictEqual( instanceOf( s, Slice ), true, 'returns an instance' );

	s = new Slice( 10 );
	t.strictEqual( instanceOf( s, Slice ), true, 'returns an instance' );

	s = new Slice( null );
	t.strictEqual( instanceOf( s, Slice ), true, 'returns an instance' );

	s = new Slice( 0, 10 );
	t.strictEqual( instanceOf( s, Slice ), true, 'returns an instance' );

	s = new Slice( null, 10 );
	t.strictEqual( instanceOf( s, Slice ), true, 'returns an instance' );

	s = new Slice( void 0, 10 );
	t.strictEqual( instanceOf( s, Slice ), true, 'returns an instance' );

	s = new Slice( 0, null );
	t.strictEqual( instanceOf( s, Slice ), true, 'returns an instance' );

	s = new Slice( 0, void 0 );
	t.strictEqual( instanceOf( s, Slice ), true, 'returns an instance' );

	s = new Slice( null, null );
	t.strictEqual( instanceOf( s, Slice ), true, 'returns an instance' );

	s = new Slice( void 0, void 0 );
	t.strictEqual( instanceOf( s, Slice ), true, 'returns an instance' );

	s = new Slice( 0, 10, 1 );
	t.strictEqual( instanceOf( s, Slice ), true, 'returns an instance' );

	s = new Slice( null, 10, 1 );
	t.strictEqual( instanceOf( s, Slice ), true, 'returns an instance' );

	s = new Slice( void 0, 10, 1 );
	t.strictEqual( instanceOf( s, Slice ), true, 'returns an instance' );

	s = new Slice( 0, null, 1 );
	t.strictEqual( instanceOf( s, Slice ), true, 'returns an instance' );

	s = new Slice( 0, void 0, 1 );
	t.strictEqual( instanceOf( s, Slice ), true, 'returns an instance' );

	s = new Slice( 0, 10, null );
	t.strictEqual( instanceOf( s, Slice ), true, 'returns an instance' );

	s = new Slice( 0, 10, void 0 );
	t.strictEqual( instanceOf( s, Slice ), true, 'returns an instance' );

	s = new Slice( null, null, 1 );
	t.strictEqual( instanceOf( s, Slice ), true, 'returns an instance' );

	s = new Slice( void 0, void 0, 1 );
	t.strictEqual( instanceOf( s, Slice ), true, 'returns an instance' );

	s = new Slice( null, 10, null );
	t.strictEqual( instanceOf( s, Slice ), true, 'returns an instance' );

	s = new Slice( void 0, 10, void 0 );
	t.strictEqual( instanceOf( s, Slice ), true, 'returns an instance' );

	s = new Slice( 0, null, null );
	t.strictEqual( instanceOf( s, Slice ), true, 'returns an instance' );

	s = new Slice( 0, void 0, void 0 );
	t.strictEqual( instanceOf( s, Slice ), true, 'returns an instance' );

	s = new Slice( null, null, null );
	t.strictEqual( instanceOf( s, Slice ), true, 'returns an instance' );

	s = new Slice( void 0, void 0, void 0 );
	t.strictEqual( instanceOf( s, Slice ), true, 'returns an instance' );

	t.end();
});

tape( 'the function does not require the `new` keyword', function test( t ) {
	var slice;
	var s;

	slice = Slice;

	s = slice();
	t.strictEqual( instanceOf( s, Slice ), true, 'returns an instance' );

	s = slice( 10 );
	t.strictEqual( instanceOf( s, Slice ), true, 'returns an instance' );

	s = slice( null );
	t.strictEqual( instanceOf( s, Slice ), true, 'returns an instance' );

	s = slice( 0, 10 );
	t.strictEqual( instanceOf( s, Slice ), true, 'returns an instance' );

	s = slice( null, 10 );
	t.strictEqual( instanceOf( s, Slice ), true, 'returns an instance' );

	s = slice( void 0, 10 );
	t.strictEqual( instanceOf( s, Slice ), true, 'returns an instance' );

	s = slice( 0, null );
	t.strictEqual( instanceOf( s, Slice ), true, 'returns an instance' );

	s = slice( 0, void 0 );
	t.strictEqual( instanceOf( s, Slice ), true, 'returns an instance' );

	s = slice( null, null );
	t.strictEqual( instanceOf( s, Slice ), true, 'returns an instance' );

	s = slice( void 0, void 0 );
	t.strictEqual( instanceOf( s, Slice ), true, 'returns an instance' );

	s = slice( 0, 10, 1 );
	t.strictEqual( instanceOf( s, Slice ), true, 'returns an instance' );

	s = slice( null, 10, 1 );
	t.strictEqual( instanceOf( s, Slice ), true, 'returns an instance' );

	s = slice( void 0, 10, 1 );
	t.strictEqual( instanceOf( s, Slice ), true, 'returns an instance' );

	s = slice( 0, null, 1 );
	t.strictEqual( instanceOf( s, Slice ), true, 'returns an instance' );

	s = slice( 0, void 0, 1 );
	t.strictEqual( instanceOf( s, Slice ), true, 'returns an instance' );

	s = slice( 0, 10, null );
	t.strictEqual( instanceOf( s, Slice ), true, 'returns an instance' );

	s = slice( 0, 10, void 0 );
	t.strictEqual( instanceOf( s, Slice ), true, 'returns an instance' );

	s = slice( null, null, 1 );
	t.strictEqual( instanceOf( s, Slice ), true, 'returns an instance' );

	s = slice( void 0, void 0, 1 );
	t.strictEqual( instanceOf( s, Slice ), true, 'returns an instance' );

	s = slice( null, 10, null );
	t.strictEqual( instanceOf( s, Slice ), true, 'returns an instance' );

	s = slice( void 0, 10, void 0 );
	t.strictEqual( instanceOf( s, Slice ), true, 'returns an instance' );

	s = slice( 0, null, null );
	t.strictEqual( instanceOf( s, Slice ), true, 'returns an instance' );

	s = slice( 0, void 0, void 0 );
	t.strictEqual( instanceOf( s, Slice ), true, 'returns an instance' );

	s = slice( null, null, null );
	t.strictEqual( instanceOf( s, Slice ), true, 'returns an instance' );

	s = slice( void 0, void 0, void 0 );
	t.strictEqual( instanceOf( s, Slice ), true, 'returns an instance' );

	t.end();
});

tape( 'attached to the constructor is a `name` property', function test( t ) {
	t.strictEqual( Slice.name, 'Slice', 'returns expected value' );
	t.end();
});

tape( 'the constructor throws an error if provided a first argument which is neither an integer, null, nor undefined (nargs=1,new)', function test( t ) {
	var values;
	var i;

	values = [
		'3',
		3.14,
		NaN,
		true,
		false,
		[],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badvalue() {
			new Slice( value ); // eslint-disable-line no-new
		};
	}
});

tape( 'the constructor throws an error if provided a first argument which is neither an integer, null, nor undefined (nargs=2,new)', function test( t ) {
	var values;
	var i;

	values = [
		'3',
		3.14,
		NaN,
		true,
		false,
		[],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badvalue() {
			new Slice( value, 10 ); // eslint-disable-line no-new
		};
	}
});

tape( 'the constructor throws an error if provided a first argument which is neither an integer, null, nor undefined (nargs=3,new)', function test( t ) {
	var values;
	var i;

	values = [
		'3',
		3.14,
		NaN,
		true,
		false,
		[],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badvalue() {
			new Slice( value, 10, 2 ); // eslint-disable-line no-new
		};
	}
});

tape( 'the constructor throws an error if provided a first argument which is neither an integer, null, nor undefined (nargs=1,no new)', function test( t ) {
	var values;
	var slice;
	var i;

	slice = Slice;

	values = [
		'3',
		3.14,
		NaN,
		true,
		false,
		[],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badvalue() {
			slice( value );
		};
	}
});

tape( 'the constructor throws an error if provided a first argument which is neither an integer, null, nor undefined (nargs=2,no new)', function test( t ) {
	var values;
	var slice;
	var i;

	slice = Slice;

	values = [
		'3',
		3.14,
		NaN,
		true,
		false,
		[],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badvalue() {
			slice( value, 10 );
		};
	}
});

tape( 'the constructor throws an error if provided a first argument which is neither an integer, null, nor undefined (nargs=3,no new)', function test( t ) {
	var values;
	var slice;
	var i;

	slice = Slice;

	values = [
		'3',
		3.14,
		NaN,
		true,
		false,
		[],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badvalue() {
			slice( value, 10, 2 );
		};
	}
});

tape( 'the constructor throws an error if provided a second argument which is neither an integer, null, nor undefined (nargs=2,new)', function test( t ) {
	var values;
	var i;

	values = [
		'3',
		3.14,
		NaN,
		true,
		false,
		[],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badvalue() {
			new Slice( 0, value ); // eslint-disable-line no-new
		};
	}
});

tape( 'the constructor throws an error if provided a second argument which is neither an integer, null, nor undefined (nargs=3,new)', function test( t ) {
	var values;
	var i;

	values = [
		'3',
		3.14,
		NaN,
		true,
		false,
		[],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badvalue() {
			new Slice( 0, value, 2 ); // eslint-disable-line no-new
		};
	}
});

tape( 'the constructor throws an error if provided a second argument which is neither an integer, null, nor undefined (nargs=2,no new)', function test( t ) {
	var values;
	var slice;
	var i;

	slice = Slice;

	values = [
		'3',
		3.14,
		NaN,
		true,
		false,
		[],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badvalue() {
			slice( 0, value );
		};
	}
});

tape( 'the constructor throws an error if provided a second argument which is neither an integer, null, nor undefined (nargs=3,no new)', function test( t ) {
	var values;
	var slice;
	var i;

	slice = Slice;

	values = [
		'3',
		3.14,
		NaN,
		true,
		false,
		[],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badvalue() {
			slice( 0, value, 2 );
		};
	}
});

tape( 'the constructor throws an error if provided a third argument which is neither an integer, null, nor undefined (nargs=3,new)', function test( t ) {
	var values;
	var i;

	values = [
		'3',
		3.14,
		NaN,
		true,
		false,
		[],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badvalue() {
			new Slice( 0, 10, value ); // eslint-disable-line no-new
		};
	}
});

tape( 'the constructor throws an error if provided a third argument which is neither an integer, null, nor undefined (nargs=3,no new)', function test( t ) {
	var values;
	var slice;
	var i;

	slice = Slice;

	values = [
		'3',
		3.14,
		NaN,
		true,
		false,
		[],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badvalue() {
			slice( 0, 10, value );
		};
	}
});

tape( 'the constructor throws an error if provided a third argument equal to zero', function test( t ) {
	var slice = Slice;
	t.throws( foo, RangeError, 'throws an error' );
	t.throws( bar, RangeError, 'throws an error' );
	t.end();

	function foo() {
		new Slice( 2, 10, 0 ); // eslint-disable-line no-new
	}

	function bar() {
		slice( 2, 10, 0 );
	}
});

tape( 'a slice has a `start` property specifying the starting index', function test( t ) {
	var s;

	s = new Slice();
	t.strictEqual( hasOwnProp( s, 'start' ), false, 'does not have own property' );
	t.strictEqual( hasProp( s, 'start' ), true, 'has property' );
	t.strictEqual( isIntegerOrNull( s.start ), true, 'is either an integer or null' );
	t.strictEqual( s.start, null, 'returns expected value' );

	s = new Slice( 10 );
	t.strictEqual( hasOwnProp( s, 'start' ), false, 'does not have own property' );
	t.strictEqual( hasProp( s, 'start' ), true, 'has property' );
	t.strictEqual( isIntegerOrNull( s.start ), true, 'is either an integer or null' );
	t.strictEqual( s.start, null, 'returns expected value' );

	s = new Slice( null );
	t.strictEqual( hasOwnProp( s, 'start' ), false, 'does not have own property' );
	t.strictEqual( hasProp( s, 'start' ), true, 'has property' );
	t.strictEqual( isIntegerOrNull( s.start ), true, 'is either an integer or null' );
	t.strictEqual( s.start, null, 'returns expected value' );

	s = new Slice( void 0 );
	t.strictEqual( hasOwnProp( s, 'start' ), false, 'does not have own property' );
	t.strictEqual( hasProp( s, 'start' ), true, 'has property' );
	t.strictEqual( isIntegerOrNull( s.start ), true, 'is either an integer or null' );
	t.strictEqual( s.start, null, 'returns expected value' );

	s = new Slice( 0, 10 );
	t.strictEqual( hasOwnProp( s, 'start' ), false, 'does not have own property' );
	t.strictEqual( hasProp( s, 'start' ), true, 'has property' );
	t.strictEqual( isIntegerOrNull( s.start ), true, 'is either an integer or null' );
	t.strictEqual( s.start, 0, 'returns expected value' );

	s = new Slice( null, 10 );
	t.strictEqual( hasOwnProp( s, 'start' ), false, 'does not have own property' );
	t.strictEqual( hasProp( s, 'start' ), true, 'has property' );
	t.strictEqual( isIntegerOrNull( s.start ), true, 'is either an integer or null' );
	t.strictEqual( s.start, null, 'returns expected value' );

	s = new Slice( void 0, 10 );
	t.strictEqual( hasOwnProp( s, 'start' ), false, 'does not have own property' );
	t.strictEqual( hasProp( s, 'start' ), true, 'has property' );
	t.strictEqual( isIntegerOrNull( s.start ), true, 'is either an integer or null' );
	t.strictEqual( s.start, null, 'returns expected value' );

	s = new Slice( null, null );
	t.strictEqual( hasOwnProp( s, 'start' ), false, 'does not have own property' );
	t.strictEqual( hasProp( s, 'start' ), true, 'has property' );
	t.strictEqual( isIntegerOrNull( s.start ), true, 'is either an integer or null' );
	t.strictEqual( s.start, null, 'returns expected value' );

	s = new Slice( void 0, void 0 );
	t.strictEqual( hasOwnProp( s, 'start' ), false, 'does not have own property' );
	t.strictEqual( hasProp( s, 'start' ), true, 'has property' );
	t.strictEqual( isIntegerOrNull( s.start ), true, 'is either an integer or null' );
	t.strictEqual( s.start, null, 'returns expected value' );

	s = new Slice( 0, 10, 1 );
	t.strictEqual( hasOwnProp( s, 'start' ), false, 'does not have own property' );
	t.strictEqual( hasProp( s, 'start' ), true, 'has property' );
	t.strictEqual( isIntegerOrNull( s.start ), true, 'is either an integer or null' );
	t.strictEqual( s.start, 0, 'returns expected value' );

	s = new Slice( null, 10, 1 );
	t.strictEqual( hasOwnProp( s, 'start' ), false, 'does not have own property' );
	t.strictEqual( hasProp( s, 'start' ), true, 'has property' );
	t.strictEqual( isIntegerOrNull( s.start ), true, 'is either an integer or null' );
	t.strictEqual( s.start, null, 'returns expected value' );

	s = new Slice( void 0, 10, 1 );
	t.strictEqual( hasOwnProp( s, 'start' ), false, 'does not have own property' );
	t.strictEqual( hasProp( s, 'start' ), true, 'has property' );
	t.strictEqual( isIntegerOrNull( s.start ), true, 'is either an integer or null' );
	t.strictEqual( s.start, null, 'returns expected value' );

	s = new Slice( 0, null, 1 );
	t.strictEqual( hasOwnProp( s, 'start' ), false, 'does not have own property' );
	t.strictEqual( hasProp( s, 'start' ), true, 'has property' );
	t.strictEqual( isIntegerOrNull( s.start ), true, 'is either an integer or null' );
	t.strictEqual( s.start, 0, 'returns expected value' );

	s = new Slice( 0, void 0, 1 );
	t.strictEqual( hasOwnProp( s, 'start' ), false, 'does not have own property' );
	t.strictEqual( hasProp( s, 'start' ), true, 'has property' );
	t.strictEqual( isIntegerOrNull( s.start ), true, 'is either an integer or null' );
	t.strictEqual( s.start, 0, 'returns expected value' );

	s = new Slice( 0, 10, null );
	t.strictEqual( hasOwnProp( s, 'start' ), false, 'does not have own property' );
	t.strictEqual( hasProp( s, 'start' ), true, 'has property' );
	t.strictEqual( isIntegerOrNull( s.start ), true, 'is either an integer or null' );
	t.strictEqual( s.start, 0, 'returns expected value' );

	s = new Slice( 0, 10, void 0 );
	t.strictEqual( hasOwnProp( s, 'start' ), false, 'does not have own property' );
	t.strictEqual( hasProp( s, 'start' ), true, 'has property' );
	t.strictEqual( isIntegerOrNull( s.start ), true, 'is either an integer or null' );
	t.strictEqual( s.start, 0, 'returns expected value' );

	s = new Slice( null, null, 1 );
	t.strictEqual( hasOwnProp( s, 'start' ), false, 'does not have own property' );
	t.strictEqual( hasProp( s, 'start' ), true, 'has property' );
	t.strictEqual( isIntegerOrNull( s.start ), true, 'is either an integer or null' );
	t.strictEqual( s.start, null, 'returns expected value' );

	s = new Slice( void 0, void 0, 1 );
	t.strictEqual( hasOwnProp( s, 'start' ), false, 'does not have own property' );
	t.strictEqual( hasProp( s, 'start' ), true, 'has property' );
	t.strictEqual( isIntegerOrNull( s.start ), true, 'is either an integer or null' );
	t.strictEqual( s.start, null, 'returns expected value' );

	s = new Slice( null, 10, null );
	t.strictEqual( hasOwnProp( s, 'start' ), false, 'does not have own property' );
	t.strictEqual( hasProp( s, 'start' ), true, 'has property' );
	t.strictEqual( isIntegerOrNull( s.start ), true, 'is either an integer or null' );
	t.strictEqual( s.start, null, 'returns expected value' );

	s = new Slice( void 0, 10, void 0 );
	t.strictEqual( hasOwnProp( s, 'start' ), false, 'does not have own property' );
	t.strictEqual( hasProp( s, 'start' ), true, 'has property' );
	t.strictEqual( isIntegerOrNull( s.start ), true, 'is either an integer or null' );
	t.strictEqual( s.start, null, 'returns expected value' );

	s = new Slice( 0, null, null );
	t.strictEqual( hasOwnProp( s, 'start' ), false, 'does not have own property' );
	t.strictEqual( hasProp( s, 'start' ), true, 'has property' );
	t.strictEqual( isIntegerOrNull( s.start ), true, 'is either an integer or null' );
	t.strictEqual( s.start, 0, 'returns expected value' );

	s = new Slice( 0, void 0, void 0 );
	t.strictEqual( hasOwnProp( s, 'start' ), false, 'does not have own property' );
	t.strictEqual( hasProp( s, 'start' ), true, 'has property' );
	t.strictEqual( isIntegerOrNull( s.start ), true, 'is either an integer or null' );
	t.strictEqual( s.start, 0, 'returns expected value' );

	s = new Slice( null, null, null );
	t.strictEqual( hasOwnProp( s, 'start' ), false, 'does not have own property' );
	t.strictEqual( hasProp( s, 'start' ), true, 'has property' );
	t.strictEqual( isIntegerOrNull( s.start ), true, 'is either an integer or null' );
	t.strictEqual( s.start, null, 'returns expected value' );

	s = new Slice( void 0, void 0, void 0 );
	t.strictEqual( hasOwnProp( s, 'start' ), false, 'does not have own property' );
	t.strictEqual( hasProp( s, 'start' ), true, 'has property' );
	t.strictEqual( isIntegerOrNull( s.start ), true, 'is either an integer or null' );
	t.strictEqual( s.start, null, 'returns expected value' );

	t.end();
});

tape( 'a slice has a `stop` property specifying the ending index', function test( t ) {
	var s;

	s = new Slice();
	t.strictEqual( hasOwnProp( s, 'stop' ), false, 'does not have own property' );
	t.strictEqual( hasProp( s, 'stop' ), true, 'has property' );
	t.strictEqual( isIntegerOrNull( s.stop ), true, 'is either an integer or null' );
	t.strictEqual( s.stop, null, 'returns expected value' );

	s = new Slice( 10 );
	t.strictEqual( hasOwnProp( s, 'stop' ), false, 'does not have own property' );
	t.strictEqual( hasProp( s, 'stop' ), true, 'has property' );
	t.strictEqual( isIntegerOrNull( s.stop ), true, 'is either an integer or null' );
	t.strictEqual( s.stop, 10, 'returns expected value' );

	s = new Slice( null );
	t.strictEqual( hasOwnProp( s, 'stop' ), false, 'does not have own property' );
	t.strictEqual( hasProp( s, 'stop' ), true, 'has property' );
	t.strictEqual( isIntegerOrNull( s.stop ), true, 'is either an integer or null' );
	t.strictEqual( s.stop, null, 'returns expected value' );

	s = new Slice( void 0 );
	t.strictEqual( hasOwnProp( s, 'stop' ), false, 'does not have own property' );
	t.strictEqual( hasProp( s, 'stop' ), true, 'has property' );
	t.strictEqual( isIntegerOrNull( s.stop ), true, 'is either an integer or null' );
	t.strictEqual( s.stop, null, 'returns expected value' );

	s = new Slice( 0, 10 );
	t.strictEqual( hasOwnProp( s, 'stop' ), false, 'does not have own property' );
	t.strictEqual( hasProp( s, 'stop' ), true, 'has property' );
	t.strictEqual( isIntegerOrNull( s.stop ), true, 'is either an integer or null' );
	t.strictEqual( s.stop, 10, 'returns expected value' );

	s = new Slice( null, 10 );
	t.strictEqual( hasOwnProp( s, 'stop' ), false, 'does not have own property' );
	t.strictEqual( hasProp( s, 'stop' ), true, 'has property' );
	t.strictEqual( isIntegerOrNull( s.stop ), true, 'is either an integer or null' );
	t.strictEqual( s.stop, 10, 'returns expected value' );

	s = new Slice( void 0, 10 );
	t.strictEqual( hasOwnProp( s, 'stop' ), false, 'does not have own property' );
	t.strictEqual( hasProp( s, 'stop' ), true, 'has property' );
	t.strictEqual( isIntegerOrNull( s.stop ), true, 'is either an integer or null' );
	t.strictEqual( s.stop, 10, 'returns expected value' );

	s = new Slice( null, null );
	t.strictEqual( hasOwnProp( s, 'stop' ), false, 'does not have own property' );
	t.strictEqual( hasProp( s, 'stop' ), true, 'has property' );
	t.strictEqual( isIntegerOrNull( s.stop ), true, 'is either an integer or null' );
	t.strictEqual( s.stop, null, 'returns expected value' );

	s = new Slice( void 0, void 0 );
	t.strictEqual( hasOwnProp( s, 'stop' ), false, 'does not have own property' );
	t.strictEqual( hasProp( s, 'stop' ), true, 'has property' );
	t.strictEqual( isIntegerOrNull( s.stop ), true, 'is either an integer or null' );
	t.strictEqual( s.stop, null, 'returns expected value' );

	s = new Slice( 0, 10, 1 );
	t.strictEqual( hasOwnProp( s, 'stop' ), false, 'does not have own property' );
	t.strictEqual( hasProp( s, 'stop' ), true, 'has property' );
	t.strictEqual( isIntegerOrNull( s.stop ), true, 'is either an integer or null' );
	t.strictEqual( s.stop, 10, 'returns expected value' );

	s = new Slice( null, 10, 1 );
	t.strictEqual( hasOwnProp( s, 'stop' ), false, 'does not have own property' );
	t.strictEqual( hasProp( s, 'stop' ), true, 'has property' );
	t.strictEqual( isIntegerOrNull( s.stop ), true, 'is either an integer or null' );
	t.strictEqual( s.stop, 10, 'returns expected value' );

	s = new Slice( void 0, 10, 1 );
	t.strictEqual( hasOwnProp( s, 'stop' ), false, 'does not have own property' );
	t.strictEqual( hasProp( s, 'stop' ), true, 'has property' );
	t.strictEqual( isIntegerOrNull( s.stop ), true, 'is either an integer or null' );
	t.strictEqual( s.stop, 10, 'returns expected value' );

	s = new Slice( 0, null, 1 );
	t.strictEqual( hasOwnProp( s, 'stop' ), false, 'does not have own property' );
	t.strictEqual( hasProp( s, 'stop' ), true, 'has property' );
	t.strictEqual( isIntegerOrNull( s.stop ), true, 'is either an integer or null' );
	t.strictEqual( s.stop, null, 'returns expected value' );

	s = new Slice( 0, void 0, 1 );
	t.strictEqual( hasOwnProp( s, 'stop' ), false, 'does not have own property' );
	t.strictEqual( hasProp( s, 'stop' ), true, 'has property' );
	t.strictEqual( isIntegerOrNull( s.stop ), true, 'is either an integer or null' );
	t.strictEqual( s.stop, null, 'returns expected value' );

	s = new Slice( 0, 10, null );
	t.strictEqual( hasOwnProp( s, 'stop' ), false, 'does not have own property' );
	t.strictEqual( hasProp( s, 'stop' ), true, 'has property' );
	t.strictEqual( isIntegerOrNull( s.stop ), true, 'is either an integer or null' );
	t.strictEqual( s.stop, 10, 'returns expected value' );

	s = new Slice( 0, 10, void 0 );
	t.strictEqual( hasOwnProp( s, 'stop' ), false, 'does not have own property' );
	t.strictEqual( hasProp( s, 'stop' ), true, 'has property' );
	t.strictEqual( isIntegerOrNull( s.stop ), true, 'is either an integer or null' );
	t.strictEqual( s.stop, 10, 'returns expected value' );

	s = new Slice( null, null, 1 );
	t.strictEqual( hasOwnProp( s, 'stop' ), false, 'does not have own property' );
	t.strictEqual( hasProp( s, 'stop' ), true, 'has property' );
	t.strictEqual( isIntegerOrNull( s.stop ), true, 'is either an integer or null' );
	t.strictEqual( s.stop, null, 'returns expected value' );

	s = new Slice( void 0, void 0, 1 );
	t.strictEqual( hasOwnProp( s, 'stop' ), false, 'does not have own property' );
	t.strictEqual( hasProp( s, 'stop' ), true, 'has property' );
	t.strictEqual( isIntegerOrNull( s.stop ), true, 'is either an integer or null' );
	t.strictEqual( s.stop, null, 'returns expected value' );

	s = new Slice( null, 10, null );
	t.strictEqual( hasOwnProp( s, 'stop' ), false, 'does not have own property' );
	t.strictEqual( hasProp( s, 'stop' ), true, 'has property' );
	t.strictEqual( isIntegerOrNull( s.stop ), true, 'is either an integer or null' );
	t.strictEqual( s.stop, 10, 'returns expected value' );

	s = new Slice( void 0, 10, void 0 );
	t.strictEqual( hasOwnProp( s, 'stop' ), false, 'does not have own property' );
	t.strictEqual( hasProp( s, 'stop' ), true, 'has property' );
	t.strictEqual( isIntegerOrNull( s.stop ), true, 'is either an integer or null' );
	t.strictEqual( s.stop, 10, 'returns expected value' );

	s = new Slice( 0, null, null );
	t.strictEqual( hasOwnProp( s, 'stop' ), false, 'does not have own property' );
	t.strictEqual( hasProp( s, 'stop' ), true, 'has property' );
	t.strictEqual( isIntegerOrNull( s.stop ), true, 'is either an integer or null' );
	t.strictEqual( s.stop, null, 'returns expected value' );

	s = new Slice( 0, void 0, void 0 );
	t.strictEqual( hasOwnProp( s, 'stop' ), false, 'does not have own property' );
	t.strictEqual( hasProp( s, 'stop' ), true, 'has property' );
	t.strictEqual( isIntegerOrNull( s.stop ), true, 'is either an integer or null' );
	t.strictEqual( s.stop, null, 'returns expected value' );

	s = new Slice( null, null, null );
	t.strictEqual( hasOwnProp( s, 'stop' ), false, 'does not have own property' );
	t.strictEqual( hasProp( s, 'stop' ), true, 'has property' );
	t.strictEqual( isIntegerOrNull( s.stop ), true, 'is either an integer or null' );
	t.strictEqual( s.stop, null, 'returns expected value' );

	s = new Slice( void 0, void 0, void 0 );
	t.strictEqual( hasOwnProp( s, 'stop' ), false, 'does not have own property' );
	t.strictEqual( hasProp( s, 'stop' ), true, 'has property' );
	t.strictEqual( isIntegerOrNull( s.stop ), true, 'is either an integer or null' );
	t.strictEqual( s.stop, null, 'returns expected value' );

	t.end();
});

tape( 'a slice has a `step` property specifying the index increment', function test( t ) {
	var s;

	s = new Slice();
	t.strictEqual( hasOwnProp( s, 'step' ), false, 'does not have own property' );
	t.strictEqual( hasProp( s, 'step' ), true, 'has property' );
	t.strictEqual( isIntegerOrNull( s.step ), true, 'is either an integer or null' );
	t.strictEqual( s.step, null, 'returns expected value' );

	s = new Slice( 10 );
	t.strictEqual( hasOwnProp( s, 'step' ), false, 'does not have own property' );
	t.strictEqual( hasProp( s, 'step' ), true, 'has property' );
	t.strictEqual( isIntegerOrNull( s.step ), true, 'is either an integer or null' );
	t.strictEqual( s.step, null, 'returns expected value' );

	s = new Slice( null );
	t.strictEqual( hasOwnProp( s, 'step' ), false, 'does not have own property' );
	t.strictEqual( hasProp( s, 'step' ), true, 'has property' );
	t.strictEqual( isIntegerOrNull( s.step ), true, 'is either an integer or null' );
	t.strictEqual( s.step, null, 'returns expected value' );

	s = new Slice( void 0 );
	t.strictEqual( hasOwnProp( s, 'step' ), false, 'does not have own property' );
	t.strictEqual( hasProp( s, 'step' ), true, 'has property' );
	t.strictEqual( isIntegerOrNull( s.step ), true, 'is either an integer or null' );
	t.strictEqual( s.step, null, 'returns expected value' );

	s = new Slice( 0, 10 );
	t.strictEqual( hasOwnProp( s, 'step' ), false, 'does not have own property' );
	t.strictEqual( hasProp( s, 'step' ), true, 'has property' );
	t.strictEqual( isIntegerOrNull( s.step ), true, 'is either an integer or null' );
	t.strictEqual( s.step, null, 'returns expected value' );

	s = new Slice( null, 10 );
	t.strictEqual( hasOwnProp( s, 'step' ), false, 'does not have own property' );
	t.strictEqual( hasProp( s, 'step' ), true, 'has property' );
	t.strictEqual( isIntegerOrNull( s.step ), true, 'is either an integer or null' );
	t.strictEqual( s.step, null, 'returns expected value' );

	s = new Slice( void 0, 10 );
	t.strictEqual( hasOwnProp( s, 'step' ), false, 'does not have own property' );
	t.strictEqual( hasProp( s, 'step' ), true, 'has property' );
	t.strictEqual( isIntegerOrNull( s.step ), true, 'is either an integer or null' );
	t.strictEqual( s.step, null, 'returns expected value' );

	s = new Slice( null, null );
	t.strictEqual( hasOwnProp( s, 'step' ), false, 'does not have own property' );
	t.strictEqual( hasProp( s, 'step' ), true, 'has property' );
	t.strictEqual( isIntegerOrNull( s.step ), true, 'is either an integer or null' );
	t.strictEqual( s.step, null, 'returns expected value' );

	s = new Slice( void 0, void 0 );
	t.strictEqual( hasOwnProp( s, 'step' ), false, 'does not have own property' );
	t.strictEqual( hasProp( s, 'step' ), true, 'has property' );
	t.strictEqual( isIntegerOrNull( s.step ), true, 'is either an integer or null' );
	t.strictEqual( s.step, null, 'returns expected value' );

	s = new Slice( 0, 10, 1 );
	t.strictEqual( hasOwnProp( s, 'step' ), false, 'does not have own property' );
	t.strictEqual( hasProp( s, 'step' ), true, 'has property' );
	t.strictEqual( isIntegerOrNull( s.step ), true, 'is either an integer or null' );
	t.strictEqual( s.step, 1, 'returns expected value' );

	s = new Slice( null, 10, 1 );
	t.strictEqual( hasOwnProp( s, 'step' ), false, 'does not have own property' );
	t.strictEqual( hasProp( s, 'step' ), true, 'has property' );
	t.strictEqual( isIntegerOrNull( s.step ), true, 'is either an integer or null' );
	t.strictEqual( s.step, 1, 'returns expected value' );

	s = new Slice( void 0, 10, 1 );
	t.strictEqual( hasOwnProp( s, 'step' ), false, 'does not have own property' );
	t.strictEqual( hasProp( s, 'step' ), true, 'has property' );
	t.strictEqual( isIntegerOrNull( s.step ), true, 'is either an integer or null' );
	t.strictEqual( s.step, 1, 'returns expected value' );

	s = new Slice( 0, null, 1 );
	t.strictEqual( hasOwnProp( s, 'step' ), false, 'does not have own property' );
	t.strictEqual( hasProp( s, 'step' ), true, 'has property' );
	t.strictEqual( isIntegerOrNull( s.step ), true, 'is either an integer or null' );
	t.strictEqual( s.step, 1, 'returns expected value' );

	s = new Slice( 0, void 0, 1 );
	t.strictEqual( hasOwnProp( s, 'step' ), false, 'does not have own property' );
	t.strictEqual( hasProp( s, 'step' ), true, 'has property' );
	t.strictEqual( isIntegerOrNull( s.step ), true, 'is either an integer or null' );
	t.strictEqual( s.step, 1, 'returns expected value' );

	s = new Slice( 0, 10, null );
	t.strictEqual( hasOwnProp( s, 'step' ), false, 'does not have own property' );
	t.strictEqual( hasProp( s, 'step' ), true, 'has property' );
	t.strictEqual( isIntegerOrNull( s.step ), true, 'is either an integer or null' );
	t.strictEqual( s.step, null, 'returns expected value' );

	s = new Slice( 0, 10, void 0 );
	t.strictEqual( hasOwnProp( s, 'step' ), false, 'does not have own property' );
	t.strictEqual( hasProp( s, 'step' ), true, 'has property' );
	t.strictEqual( isIntegerOrNull( s.step ), true, 'is either an integer or null' );
	t.strictEqual( s.step, null, 'returns expected value' );

	s = new Slice( null, null, 1 );
	t.strictEqual( hasOwnProp( s, 'step' ), false, 'does not have own property' );
	t.strictEqual( hasProp( s, 'step' ), true, 'has property' );
	t.strictEqual( isIntegerOrNull( s.step ), true, 'is either an integer or null' );
	t.strictEqual( s.step, 1, 'returns expected value' );

	s = new Slice( void 0, void 0, 1 );
	t.strictEqual( hasOwnProp( s, 'step' ), false, 'does not have own property' );
	t.strictEqual( hasProp( s, 'step' ), true, 'has property' );
	t.strictEqual( isIntegerOrNull( s.step ), true, 'is either an integer or null' );
	t.strictEqual( s.step, 1, 'returns expected value' );

	s = new Slice( null, 10, null );
	t.strictEqual( hasOwnProp( s, 'step' ), false, 'does not have own property' );
	t.strictEqual( hasProp( s, 'step' ), true, 'has property' );
	t.strictEqual( isIntegerOrNull( s.step ), true, 'is either an integer or null' );
	t.strictEqual( s.step, null, 'returns expected value' );

	s = new Slice( void 0, 10, void 0 );
	t.strictEqual( hasOwnProp( s, 'step' ), false, 'does not have own property' );
	t.strictEqual( hasProp( s, 'step' ), true, 'has property' );
	t.strictEqual( isIntegerOrNull( s.step ), true, 'is either an integer or null' );
	t.strictEqual( s.step, null, 'returns expected value' );

	s = new Slice( 0, null, null );
	t.strictEqual( hasOwnProp( s, 'step' ), false, 'does not have own property' );
	t.strictEqual( hasProp( s, 'step' ), true, 'has property' );
	t.strictEqual( isIntegerOrNull( s.step ), true, 'is either an integer or null' );
	t.strictEqual( s.step, null, 'returns expected value' );

	s = new Slice( 0, void 0, void 0 );
	t.strictEqual( hasOwnProp( s, 'step' ), false, 'does not have own property' );
	t.strictEqual( hasProp( s, 'step' ), true, 'has property' );
	t.strictEqual( isIntegerOrNull( s.step ), true, 'is either an integer or null' );
	t.strictEqual( s.step, null, 'returns expected value' );

	s = new Slice( null, null, null );
	t.strictEqual( hasOwnProp( s, 'step' ), false, 'does not have own property' );
	t.strictEqual( hasProp( s, 'step' ), true, 'has property' );
	t.strictEqual( isIntegerOrNull( s.step ), true, 'is either an integer or null' );
	t.strictEqual( s.step, null, 'returns expected value' );

	s = new Slice( void 0, void 0, void 0 );
	t.strictEqual( hasOwnProp( s, 'step' ), false, 'does not have own property' );
	t.strictEqual( hasProp( s, 'step' ), true, 'has property' );
	t.strictEqual( isIntegerOrNull( s.step ), true, 'is either an integer or null' );
	t.strictEqual( s.step, null, 'returns expected value' );

	t.end();
});

tape( 'a slice has a custom `toString()` method', function test( t ) {
	var s;

	s = new Slice();
	t.strictEqual( hasOwnProp( s, 'toString' ), false, 'does not have own property' );
	t.strictEqual( hasProp( s, 'toString' ), true, 'has property' );
	t.strictEqual( isFunction( s.toString ), true, 'has method' );
	t.strictEqual( s.toString(), 'Slice(null,null,null)', 'returns expected value' );

	s = new Slice( 10 );
	t.strictEqual( hasOwnProp( s, 'toString' ), false, 'does not have own property' );
	t.strictEqual( hasProp( s, 'toString' ), true, 'has property' );
	t.strictEqual( isFunction( s.toString ), true, 'has method' );
	t.strictEqual( s.toString(), 'Slice(null,10,null)', 'returns expected value' );

	s = new Slice( null );
	t.strictEqual( hasOwnProp( s, 'toString' ), false, 'does not have own property' );
	t.strictEqual( hasProp( s, 'toString' ), true, 'has property' );
	t.strictEqual( isFunction( s.toString ), true, 'has method' );
	t.strictEqual( s.toString(), 'Slice(null,null,null)', 'returns expected value' );

	s = new Slice( void 0 );
	t.strictEqual( hasOwnProp( s, 'toString' ), false, 'does not have own property' );
	t.strictEqual( hasProp( s, 'toString' ), true, 'has property' );
	t.strictEqual( isFunction( s.toString ), true, 'has method' );
	t.strictEqual( s.toString(), 'Slice(null,null,null)', 'returns expected value' );

	s = new Slice( 0, 10 );
	t.strictEqual( hasOwnProp( s, 'toString' ), false, 'does not have own property' );
	t.strictEqual( hasProp( s, 'toString' ), true, 'has property' );
	t.strictEqual( isFunction( s.toString ), true, 'has method' );
	t.strictEqual( s.toString(), 'Slice(0,10,null)', 'returns expected value' );

	s = new Slice( null, 10 );
	t.strictEqual( hasOwnProp( s, 'toString' ), false, 'does not have own property' );
	t.strictEqual( hasProp( s, 'toString' ), true, 'has property' );
	t.strictEqual( isFunction( s.toString ), true, 'has method' );
	t.strictEqual( s.toString(), 'Slice(null,10,null)', 'returns expected value' );

	s = new Slice( void 0, 10 );
	t.strictEqual( hasOwnProp( s, 'toString' ), false, 'does not have own property' );
	t.strictEqual( hasProp( s, 'toString' ), true, 'has property' );
	t.strictEqual( isFunction( s.toString ), true, 'has method' );
	t.strictEqual( s.toString(), 'Slice(null,10,null)', 'returns expected value' );

	s = new Slice( null, null );
	t.strictEqual( hasOwnProp( s, 'toString' ), false, 'does not have own property' );
	t.strictEqual( hasProp( s, 'toString' ), true, 'has property' );
	t.strictEqual( isFunction( s.toString ), true, 'has method' );
	t.strictEqual( s.toString(), 'Slice(null,null,null)', 'returns expected value' );

	s = new Slice( void 0, void 0 );
	t.strictEqual( hasOwnProp( s, 'toString' ), false, 'does not have own property' );
	t.strictEqual( hasProp( s, 'toString' ), true, 'has property' );
	t.strictEqual( isFunction( s.toString ), true, 'has method' );
	t.strictEqual( s.toString(), 'Slice(null,null,null)', 'returns expected value' );

	s = new Slice( 0, 10, 1 );
	t.strictEqual( hasOwnProp( s, 'toString' ), false, 'does not have own property' );
	t.strictEqual( hasProp( s, 'toString' ), true, 'has property' );
	t.strictEqual( isFunction( s.toString ), true, 'has method' );
	t.strictEqual( s.toString(), 'Slice(0,10,1)', 'returns expected value' );

	s = new Slice( null, 10, 1 );
	t.strictEqual( hasOwnProp( s, 'toString' ), false, 'does not have own property' );
	t.strictEqual( hasProp( s, 'toString' ), true, 'has property' );
	t.strictEqual( isFunction( s.toString ), true, 'has method' );
	t.strictEqual( s.toString(), 'Slice(null,10,1)', 'returns expected value' );

	s = new Slice( void 0, 10, 1 );
	t.strictEqual( hasOwnProp( s, 'toString' ), false, 'does not have own property' );
	t.strictEqual( hasProp( s, 'toString' ), true, 'has property' );
	t.strictEqual( isFunction( s.toString ), true, 'has method' );
	t.strictEqual( s.toString(), 'Slice(null,10,1)', 'returns expected value' );

	s = new Slice( 0, null, 1 );
	t.strictEqual( hasOwnProp( s, 'toString' ), false, 'does not have own property' );
	t.strictEqual( hasProp( s, 'toString' ), true, 'has property' );
	t.strictEqual( isFunction( s.toString ), true, 'has method' );
	t.strictEqual( s.toString(), 'Slice(0,null,1)', 'returns expected value' );

	s = new Slice( 0, void 0, 1 );
	t.strictEqual( hasOwnProp( s, 'toString' ), false, 'does not have own property' );
	t.strictEqual( hasProp( s, 'toString' ), true, 'has property' );
	t.strictEqual( isFunction( s.toString ), true, 'has method' );
	t.strictEqual( s.toString(), 'Slice(0,null,1)', 'returns expected value' );

	s = new Slice( 0, 10, null );
	t.strictEqual( hasOwnProp( s, 'toString' ), false, 'does not have own property' );
	t.strictEqual( hasProp( s, 'toString' ), true, 'has property' );
	t.strictEqual( isFunction( s.toString ), true, 'has method' );
	t.strictEqual( s.toString(), 'Slice(0,10,null)', 'returns expected value' );

	s = new Slice( 0, 10, void 0 );
	t.strictEqual( hasOwnProp( s, 'toString' ), false, 'does not have own property' );
	t.strictEqual( hasProp( s, 'toString' ), true, 'has property' );
	t.strictEqual( isFunction( s.toString ), true, 'has method' );
	t.strictEqual( s.toString(), 'Slice(0,10,null)', 'returns expected value' );

	s = new Slice( null, null, 1 );
	t.strictEqual( hasOwnProp( s, 'toString' ), false, 'does not have own property' );
	t.strictEqual( hasProp( s, 'toString' ), true, 'has property' );
	t.strictEqual( isFunction( s.toString ), true, 'has method' );
	t.strictEqual( s.toString(), 'Slice(null,null,1)', 'returns expected value' );

	s = new Slice( void 0, void 0, 1 );
	t.strictEqual( hasOwnProp( s, 'toString' ), false, 'does not have own property' );
	t.strictEqual( hasProp( s, 'toString' ), true, 'has property' );
	t.strictEqual( isFunction( s.toString ), true, 'has method' );
	t.strictEqual( s.toString(), 'Slice(null,null,1)', 'returns expected value' );

	s = new Slice( null, 10, null );
	t.strictEqual( hasOwnProp( s, 'toString' ), false, 'does not have own property' );
	t.strictEqual( hasProp( s, 'toString' ), true, 'has property' );
	t.strictEqual( isFunction( s.toString ), true, 'has method' );
	t.strictEqual( s.toString(), 'Slice(null,10,null)', 'returns expected value' );

	s = new Slice( void 0, 10, void 0 );
	t.strictEqual( hasOwnProp( s, 'toString' ), false, 'does not have own property' );
	t.strictEqual( hasProp( s, 'toString' ), true, 'has property' );
	t.strictEqual( isFunction( s.toString ), true, 'has method' );
	t.strictEqual( s.toString(), 'Slice(null,10,null)', 'returns expected value' );

	s = new Slice( 0, null, null );
	t.strictEqual( hasOwnProp( s, 'toString' ), false, 'does not have own property' );
	t.strictEqual( hasProp( s, 'toString' ), true, 'has property' );
	t.strictEqual( isFunction( s.toString ), true, 'has method' );
	t.strictEqual( s.toString(), 'Slice(0,null,null)', 'returns expected value' );

	s = new Slice( 0, void 0, void 0 );
	t.strictEqual( hasOwnProp( s, 'toString' ), false, 'does not have own property' );
	t.strictEqual( hasProp( s, 'toString' ), true, 'has property' );
	t.strictEqual( isFunction( s.toString ), true, 'has method' );
	t.strictEqual( s.toString(), 'Slice(0,null,null)', 'returns expected value' );

	s = new Slice( null, null, null );
	t.strictEqual( hasOwnProp( s, 'toString' ), false, 'does not have own property' );
	t.strictEqual( hasProp( s, 'toString' ), true, 'has property' );
	t.strictEqual( isFunction( s.toString ), true, 'has method' );
	t.strictEqual( s.toString(), 'Slice(null,null,null)', 'returns expected value' );

	s = new Slice( void 0, void 0, void 0 );
	t.strictEqual( hasOwnProp( s, 'toString' ), false, 'does not have own property' );
	t.strictEqual( hasProp( s, 'toString' ), true, 'has property' );
	t.strictEqual( isFunction( s.toString ), true, 'has method' );
	t.strictEqual( s.toString(), 'Slice(null,null,null)', 'returns expected value' );

	t.end();
});

tape( 'a slice has a custom `toJSON()` method', function test( t ) {
	var expected;
	var s;

	s = new Slice();
	t.strictEqual( hasOwnProp( s, 'toJSON' ), false, 'does not have own property' );
	t.strictEqual( hasProp( s, 'toJSON' ), true, 'has property' );
	t.strictEqual( isFunction( s.toJSON ), true, 'has method' );

	expected = {
		'type': 'Slice',
		'data': [ null, null, null ]
	};
	t.deepEqual( s.toJSON(), expected, 'returns expected value' );

	s = new Slice( 10 );
	t.strictEqual( hasOwnProp( s, 'toJSON' ), false, 'does not have own property' );
	t.strictEqual( hasProp( s, 'toJSON' ), true, 'has property' );
	t.strictEqual( isFunction( s.toJSON ), true, 'has method' );

	expected = {
		'type': 'Slice',
		'data': [ null, 10, null ]
	};
	t.deepEqual( s.toJSON(), expected, 'returns expected value' );

	s = new Slice( null );
	t.strictEqual( hasOwnProp( s, 'toJSON' ), false, 'does not have own property' );
	t.strictEqual( hasProp( s, 'toJSON' ), true, 'has property' );
	t.strictEqual( isFunction( s.toJSON ), true, 'has method' );

	expected = {
		'type': 'Slice',
		'data': [ null, null, null ]
	};
	t.deepEqual( s.toJSON(), expected, 'returns expected value' );

	s = new Slice( void 0 );
	t.strictEqual( hasOwnProp( s, 'toJSON' ), false, 'does not have own property' );
	t.strictEqual( hasProp( s, 'toJSON' ), true, 'has property' );
	t.strictEqual( isFunction( s.toJSON ), true, 'has method' );

	expected = {
		'type': 'Slice',
		'data': [ null, null, null ]
	};
	t.deepEqual( s.toJSON(), expected, 'returns expected value' );

	s = new Slice( 0, 10 );
	t.strictEqual( hasOwnProp( s, 'toJSON' ), false, 'does not have own property' );
	t.strictEqual( hasProp( s, 'toJSON' ), true, 'has property' );
	t.strictEqual( isFunction( s.toJSON ), true, 'has method' );

	expected = {
		'type': 'Slice',
		'data': [ 0, 10, null ]
	};
	t.deepEqual( s.toJSON(), expected, 'returns expected value' );

	s = new Slice( null, 10 );
	t.strictEqual( hasOwnProp( s, 'toJSON' ), false, 'does not have own property' );
	t.strictEqual( hasProp( s, 'toJSON' ), true, 'has property' );
	t.strictEqual( isFunction( s.toJSON ), true, 'has method' );

	expected = {
		'type': 'Slice',
		'data': [ null, 10, null ]
	};
	t.deepEqual( s.toJSON(), expected, 'returns expected value' );

	s = new Slice( void 0, 10 );
	t.strictEqual( hasOwnProp( s, 'toJSON' ), false, 'does not have own property' );
	t.strictEqual( hasProp( s, 'toJSON' ), true, 'has property' );
	t.strictEqual( isFunction( s.toJSON ), true, 'has method' );

	expected = {
		'type': 'Slice',
		'data': [ null, 10, null ]
	};
	t.deepEqual( s.toJSON(), expected, 'returns expected value' );

	s = new Slice( null, null );
	t.strictEqual( hasOwnProp( s, 'toJSON' ), false, 'does not have own property' );
	t.strictEqual( hasProp( s, 'toJSON' ), true, 'has property' );
	t.strictEqual( isFunction( s.toJSON ), true, 'has method' );

	expected = {
		'type': 'Slice',
		'data': [ null, null, null ]
	};
	t.deepEqual( s.toJSON(), expected, 'returns expected value' );

	s = new Slice( void 0, void 0 );
	t.strictEqual( hasOwnProp( s, 'toJSON' ), false, 'does not have own property' );
	t.strictEqual( hasProp( s, 'toJSON' ), true, 'has property' );
	t.strictEqual( isFunction( s.toJSON ), true, 'has method' );

	expected = {
		'type': 'Slice',
		'data': [ null, null, null ]
	};
	t.deepEqual( s.toJSON(), expected, 'returns expected value' );

	s = new Slice( 0, 10, 1 );
	t.strictEqual( hasOwnProp( s, 'toJSON' ), false, 'does not have own property' );
	t.strictEqual( hasProp( s, 'toJSON' ), true, 'has property' );
	t.strictEqual( isFunction( s.toJSON ), true, 'has method' );

	expected = {
		'type': 'Slice',
		'data': [ 0, 10, 1 ]
	};
	t.deepEqual( s.toJSON(), expected, 'returns expected value' );

	s = new Slice( null, 10, 1 );
	t.strictEqual( hasOwnProp( s, 'toJSON' ), false, 'does not have own property' );
	t.strictEqual( hasProp( s, 'toJSON' ), true, 'has property' );
	t.strictEqual( isFunction( s.toJSON ), true, 'has method' );

	expected = {
		'type': 'Slice',
		'data': [ null, 10, 1 ]
	};
	t.deepEqual( s.toJSON(), expected, 'returns expected value' );

	s = new Slice( void 0, 10, 1 );
	t.strictEqual( hasOwnProp( s, 'toJSON' ), false, 'does not have own property' );
	t.strictEqual( hasProp( s, 'toJSON' ), true, 'has property' );
	t.strictEqual( isFunction( s.toJSON ), true, 'has method' );

	expected = {
		'type': 'Slice',
		'data': [ null, 10, 1 ]
	};
	t.deepEqual( s.toJSON(), expected, 'returns expected value' );

	s = new Slice( 0, null, 1 );
	t.strictEqual( hasOwnProp( s, 'toJSON' ), false, 'does not have own property' );
	t.strictEqual( hasProp( s, 'toJSON' ), true, 'has property' );
	t.strictEqual( isFunction( s.toJSON ), true, 'has method' );

	expected = {
		'type': 'Slice',
		'data': [ 0, null, 1 ]
	};
	t.deepEqual( s.toJSON(), expected, 'returns expected value' );

	s = new Slice( 0, void 0, 1 );
	t.strictEqual( hasOwnProp( s, 'toJSON' ), false, 'does not have own property' );
	t.strictEqual( hasProp( s, 'toJSON' ), true, 'has property' );
	t.strictEqual( isFunction( s.toJSON ), true, 'has method' );

	expected = {
		'type': 'Slice',
		'data': [ 0, null, 1 ]
	};
	t.deepEqual( s.toJSON(), expected, 'returns expected value' );

	s = new Slice( 0, 10, null );
	t.strictEqual( hasOwnProp( s, 'toJSON' ), false, 'does not have own property' );
	t.strictEqual( hasProp( s, 'toJSON' ), true, 'has property' );
	t.strictEqual( isFunction( s.toJSON ), true, 'has method' );

	expected = {
		'type': 'Slice',
		'data': [ 0, 10, null ]
	};
	t.deepEqual( s.toJSON(), expected, 'returns expected value' );

	s = new Slice( 0, 10, void 0 );
	t.strictEqual( hasOwnProp( s, 'toJSON' ), false, 'does not have own property' );
	t.strictEqual( hasProp( s, 'toJSON' ), true, 'has property' );
	t.strictEqual( isFunction( s.toJSON ), true, 'has method' );

	expected = {
		'type': 'Slice',
		'data': [ 0, 10, null ]
	};
	t.deepEqual( s.toJSON(), expected, 'returns expected value' );

	s = new Slice( null, null, 1 );
	t.strictEqual( hasOwnProp( s, 'toJSON' ), false, 'does not have own property' );
	t.strictEqual( hasProp( s, 'toJSON' ), true, 'has property' );
	t.strictEqual( isFunction( s.toJSON ), true, 'has method' );

	expected = {
		'type': 'Slice',
		'data': [ null, null, 1 ]
	};
	t.deepEqual( s.toJSON(), expected, 'returns expected value' );

	s = new Slice( void 0, void 0, 1 );
	t.strictEqual( hasOwnProp( s, 'toJSON' ), false, 'does not have own property' );
	t.strictEqual( hasProp( s, 'toJSON' ), true, 'has property' );
	t.strictEqual( isFunction( s.toJSON ), true, 'has method' );

	expected = {
		'type': 'Slice',
		'data': [ null, null, 1 ]
	};
	t.deepEqual( s.toJSON(), expected, 'returns expected value' );

	s = new Slice( null, 10, null );
	t.strictEqual( hasOwnProp( s, 'toJSON' ), false, 'does not have own property' );
	t.strictEqual( hasProp( s, 'toJSON' ), true, 'has property' );
	t.strictEqual( isFunction( s.toJSON ), true, 'has method' );

	expected = {
		'type': 'Slice',
		'data': [ null, 10, null ]
	};
	t.deepEqual( s.toJSON(), expected, 'returns expected value' );

	s = new Slice( void 0, 10, void 0 );
	t.strictEqual( hasOwnProp( s, 'toJSON' ), false, 'does not have own property' );
	t.strictEqual( hasProp( s, 'toJSON' ), true, 'has property' );
	t.strictEqual( isFunction( s.toJSON ), true, 'has method' );

	expected = {
		'type': 'Slice',
		'data': [ null, 10, null ]
	};
	t.deepEqual( s.toJSON(), expected, 'returns expected value' );

	s = new Slice( 0, null, null );
	t.strictEqual( hasOwnProp( s, 'toJSON' ), false, 'does not have own property' );
	t.strictEqual( hasProp( s, 'toJSON' ), true, 'has property' );
	t.strictEqual( isFunction( s.toJSON ), true, 'has method' );

	expected = {
		'type': 'Slice',
		'data': [ 0, null, null ]
	};
	t.deepEqual( s.toJSON(), expected, 'returns expected value' );

	s = new Slice( 0, void 0, void 0 );
	t.strictEqual( hasOwnProp( s, 'toJSON' ), false, 'does not have own property' );
	t.strictEqual( hasProp( s, 'toJSON' ), true, 'has property' );
	t.strictEqual( isFunction( s.toJSON ), true, 'has method' );

	expected = {
		'type': 'Slice',
		'data': [ 0, null, null ]
	};
	t.deepEqual( s.toJSON(), expected, 'returns expected value' );

	s = new Slice( null, null, null );
	t.strictEqual( hasOwnProp( s, 'toJSON' ), false, 'does not have own property' );
	t.strictEqual( hasProp( s, 'toJSON' ), true, 'has property' );
	t.strictEqual( isFunction( s.toJSON ), true, 'has method' );

	expected = {
		'type': 'Slice',
		'data': [ null, null, null ]
	};
	t.deepEqual( s.toJSON(), expected, 'returns expected value' );

	s = new Slice( void 0, void 0, void 0 );
	t.strictEqual( hasOwnProp( s, 'toJSON' ), false, 'does not have own property' );
	t.strictEqual( hasProp( s, 'toJSON' ), true, 'has property' );
	t.strictEqual( isFunction( s.toJSON ), true, 'has method' );

	expected = {
		'type': 'Slice',
		'data': [ null, null, null ]
	};
	t.deepEqual( s.toJSON(), expected, 'returns expected value' );

	t.end();
});
