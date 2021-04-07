/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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
var BigInt = require( '@stdlib/bigint/ctor' );
var hasBigInts = require( '@stdlib/assert/has-bigint-support' );
var tryValueOf = require( './../lib/try2valueof.js' );


// VARIABLES //

var opts = {
	'skip': !hasBigInts()
};


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof tryValueOf, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `false` if not provided a BigInt', function test( t ) {
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
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( tryValueOf( values[i] ), false, 'returns false when provided '+values[i] );
	}
	t.end();
});

tape( 'the function returns `false` if provided an empty object without a prototype', function test( t ) {
	var o = Object.create( null );
	t.strictEqual( tryValueOf( o ), false, 'returns false' );
	t.end();
});

tape( 'the function returns `true` if able to successfully call a BigInt method', opts, function test( t ) {
	var o = Object.create( null );
	o.valueOf = valueOf;

	t.strictEqual( tryValueOf( o ), true, 'returns true' );
	t.end();

	function valueOf() {
		return BigInt( '1' );
	}
});

tape( 'if an environment supports BigInts, the function returns `true`', opts, function test( t ) {
	t.strictEqual( tryValueOf( BigInt( '1' ) ), true, 'returns true' );
	t.strictEqual( tryValueOf( Object( BigInt( '1' ) ) ), true, 'returns true' );
	t.end();
});
