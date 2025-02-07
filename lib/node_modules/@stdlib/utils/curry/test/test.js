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
var curry = require( './../lib' );


// FUNCTIONS //

function add( x, y, z ) {
	return x + y + z;
}


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof curry, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if not provided a function', function test( t ) {
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
		{}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			curry( value );
		};
	}
});

tape( 'the function throws an error if not provided a function having at least one parameter (1 arg)', function test( t ) {
	var values;
	var i;

	values = [
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			curry( value );
		};
	}
});

tape( 'the function throws an error if not provided a function having at least one parameter (2 args; context)', function test( t ) {
	var values;
	var i;

	values = [
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			curry( value, {} );
		};
	}
});

tape( 'the function throws an error if provided an arity argument which is not a positive integer (3 args)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		3.14,
		0,
		-1,
		NaN,
		null,
		void 0,
		true,
		[],
		{}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			curry( add, value, {} );
		};
	}
});

tape( 'the function returns a function', function test( t ) {
	var fcn = curry( add );
	t.strictEqual( typeof fcn, 'function', 'returns a function' );
	t.end();
});

tape( 'the function curries a function', function test( t ) {
	var fcn;
	var f;

	fcn = curry( add );
	t.strictEqual( typeof fcn, 'function', 'returns a function' );

	f = fcn( 5 );
	t.strictEqual( typeof f, 'function', 'returns a function' );

	f = f( 4 );
	t.strictEqual( typeof f, 'function', 'returns a function' );

	f = f( 3 );
	t.strictEqual( f, 12, 'returns curried function result' );

	t.end();
});

tape( 'for each invocation where the invocation number is less than the arity, the curried function returns a new partially applied curry function', function test( t ) {
	var sum;
	var f0;
	var f1;
	var f2;

	// Initial curried function has no partially applied arguments...
	f0 = curry( add );

	sum = f0( 1 )( 2 )( 3 );
	t.strictEqual( sum, 6, 'returns 6' );

	sum = f0( 1 )( 3 )( 5 );
	t.strictEqual( sum, 9, 'returns 9' );

	sum = f0( 10 )( 20 )( 40 );
	t.strictEqual( sum, 70, 'returns 70' );

	// If arity greater than 1, first invocation returns a curried function with one partially applied argument...
	f1 = f0( 2 );

	sum = f1( 3 )( 4 );
	t.strictEqual( sum, 9, 'returns 9' );

	sum = f1( 10 )( 20 );
	t.strictEqual( sum, 32, 'returns 32' );

	sum = f1( -1 )( -2 );
	t.strictEqual( sum, -1, 'returns -1' );

	// If arity greater than 2, second invocation returns a curried function with two partially applied arguments...
	f2 = f1( 3 );

	sum = f2( 5 );
	t.strictEqual( sum, 10, 'returns 10' );

	sum = f2( 6 );
	t.strictEqual( sum, 11, 'returns 11' );

	sum = f2( 10 );
	t.strictEqual( sum, 15, 'returns 15' );

	// And so on and so forth...

	t.end();
});

tape( 'the function supports specifying a function arity', function test( t ) {
	var fcn;
	var f;

	function add() {
		return arguments[ 0 ] + arguments[ 1 ] + arguments[ 2 ];
	}

	fcn = curry( add, 3 );
	t.strictEqual( typeof fcn, 'function', 'returns a function' );

	f = fcn( 5 );
	t.strictEqual( typeof f, 'function', 'returns a function' );

	f = f( 4 );
	t.strictEqual( typeof f, 'function', 'returns a function' );

	f = f( 3 );
	t.strictEqual( f, 12, 'returns curried function result' );

	t.end();
});

tape( 'the function supports specifying a function context', function test( t ) {
	var context;
	var fcn;
	var f;

	context = {
		'style': 'border',
		'generate': function generate( length, units, type, color ) {
			return this.style+': '+length+units+' '+type+' '+color;
		}
	};

	fcn = curry( context.generate, context );
	t.strictEqual( typeof fcn, 'function', 'returns a function' );

	f = fcn( 2 );
	t.strictEqual( typeof f, 'function', 'returns a function' );

	f = f( 'px' );
	t.strictEqual( typeof f, 'function', 'returns a function' );

	f = f( 'dashed' );
	t.strictEqual( typeof f, 'function', 'returns a function' );

	f = f( 'steelblue' );
	t.strictEqual( f, 'border: 2px dashed steelblue' );

	t.end();
});

tape( 'the function supports specifying a function arity and context', function test( t ) {
	var context;
	var fcn;
	var f;

	context = {
		'style': 'border',
		'generate': function generate() {
			return this.style+': '+arguments[0]+arguments[1]+' '+arguments[2]+' '+arguments[3];
		}
	};

	fcn = curry( context.generate, 4, context );
	t.strictEqual( typeof fcn, 'function', 'returns a function' );

	f = fcn( 2 );
	t.strictEqual( typeof f, 'function', 'returns a function' );

	f = f( 'px' );
	t.strictEqual( typeof f, 'function', 'returns a function' );

	f = f( 'dashed' );
	t.strictEqual( typeof f, 'function', 'returns a function' );

	f = f( 'steelblue' );
	t.strictEqual( f, 'border: 2px dashed steelblue' );

	t.end();
});
