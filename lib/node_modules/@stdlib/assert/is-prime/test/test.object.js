/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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
var Number = require( '@stdlib/number/ctor' );
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' );
var PRIMES = require( './fixtures/primes.js' );
var isPrime = require( './../lib/object.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isPrime, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `true` if provided a number object having a prime number', function test( t ) {
	var N;
	var p;
	var i;
	var j;

	t.equal( isPrime( new Number( 2 ) ), true, 'returns expected value' ); // eslint-disable-line no-new-wrappers
	t.equal( isPrime( new Number( 3 ) ), true, 'returns expected value' ); // eslint-disable-line no-new-wrappers
	t.equal( isPrime( new Number( 5 ) ), true, 'returns expected value' ); // eslint-disable-line no-new-wrappers
	t.equal( isPrime( new Number( 7 ) ), true, 'returns expected value' ); // eslint-disable-line no-new-wrappers

	N = PRIMES.length - 1;
	for ( i = 0; i < 1e3; i++ ) {
		j = discreteUniform( 0, N );
		p = PRIMES[ j ];
		t.equal( isPrime( new Number( p ) ), true, 'returns expected value for Number('+p+')' ); // eslint-disable-line no-new-wrappers
	}
	t.end();
});

tape( 'the function returns `false` if provided a primitive prime number', function test( t ) {
	t.equal( isPrime( 5.0 ), false, 'returns false' );
	t.equal( isPrime( 7.0 ), false, 'returns false' );
	t.equal( isPrime( 11.0 ), false, 'returns false' );
	t.end();
});

tape( 'the function returns `false` if not provided a prime number', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		new Number( 4.0 ), // eslint-disable-line no-new-wrappers
		new Number( 8.0 ), // eslint-disable-line no-new-wrappers
		new Number( 21.0 ), // eslint-disable-line no-new-wrappers
		null,
		true,
		NaN,
		void 0,
		[],
		{},
		new Date(),
		/./,
		new RegExp( '.' ), // eslint-disable-line prefer-regex-literals
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.equal( isPrime( values[i] ), false, 'returns false when provided '+values[i] );
	}
	t.end();
});
