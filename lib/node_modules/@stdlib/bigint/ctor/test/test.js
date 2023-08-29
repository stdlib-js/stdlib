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

/* global BigInt */

/* eslint-disable new-cap, stdlib/require-globals */

'use strict';

// MODULES //

var tape = require( 'tape' );
var hasBigIntSupport = require( '@stdlib/assert/has-bigint-support' );
var isBigInt = require( '@stdlib/assert/is-bigint' );
var BigInteger = require( './../lib' );


// VARIABLES //

var opts = {
	'skip': !hasBigIntSupport()
};


// TESTS //

tape( 'main export is a function in supporting environments or otherwise undefined', function test( t ) {
	t.ok( true, __filename );
	if ( opts.skip ) {
		t.strictEqual( BigInteger, void 0, 'main export is undefined' );
	} else {
		t.strictEqual( typeof BigInteger, 'function', 'main export is a function' );
	}
	t.end();
});

tape( 'the main export is an alias for `BigInt`', opts, function test( t ) {
	t.strictEqual( BigInteger, BigInt, 'is an alias' ); // eslint-disable-line node/no-unsupported-features/es-builtins
	t.end();
});

tape( 'the function returns BigInts', opts, function test( t ) {
	var v = BigInteger( '1' );
	t.strictEqual( typeof v, 'bigint', 'returns a BigInt' );
	t.strictEqual( isBigInt.isPrimitive( v ), true, 'returns a BigInt' );
	t.end();
});

tape( 'to generate a BigInt object, must wrap in `Object` call', opts, function test( t ) {
	var v = Object( BigInteger( '1' ) );
	t.strictEqual( isBigInt.isPrimitive( v ), false, 'does not return a primitive' );
	t.strictEqual( isBigInt.isObject( v ), true, 'returns an object' );
	t.end();
});

tape( 'the function coerces input string values', opts, function test( t ) {
	var v = BigInteger( '' );
	t.strictEqual( v.toString(), '0', 'returns expected value' );

	v = BigInteger( '5' );
	t.strictEqual( v.toString(), '5', 'returns expected value' );

	t.end();
});
