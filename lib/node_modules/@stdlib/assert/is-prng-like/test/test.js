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
var randu = require( '@stdlib/random/base/randu' );
var noop = require( '@stdlib/utils/noop' );
var isPRNGLike = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isPRNGLike, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `true` if provided a PRNG', function test( t ) {
	t.equal( isPRNGLike( randu ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `true` if provided a PRNG-like function', function test( t ) {
	var rand;

	rand = noop;
	rand.NAME = 'super-random';
	rand.state = null;
	rand.seed = null;

	t.equal( isPRNGLike( rand ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `false` if not provided a PRNG-like value', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		null,
		void 0,
		true,
		false,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.equal( isPRNGLike( values[i] ), false, 'returns false when provided '+values[i] );
	}
	t.end();
});
