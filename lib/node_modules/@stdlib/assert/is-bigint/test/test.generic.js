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
var isBigInt = require( './../lib/generic.js' );


// VARIABLES //

var opts = {
	'skip': !hasBigInts()
};


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isBigInt, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `true` if provided a BigInt', opts, function test( t ) {
	t.strictEqual( isBigInt( BigInt( '1' ) ), true, 'returns true' );
	t.strictEqual( isBigInt( Object( BigInt( '1' ) ) ), true, 'returns true' );
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
		t.strictEqual( isBigInt( values[i] ), false, 'returns false when provided '+values[i] );
	}
	t.end();
});
