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
var isNumber = require( '@stdlib/assert/is-number' );
var instanceOf = require( '@stdlib/assert/instance-of' );
var isnan = require( '@stdlib/assert/is-nan' ).isPrimitive;
var Ctor = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof Ctor, 'function', 'main export is a function' );
	t.end();
});

tape( 'the main export is an alias for `Number`', function test( t ) {
	t.strictEqual( Ctor, Number, 'is an alias' ); // eslint-disable-line stdlib/require-globals
	t.end();
});

tape( 'the main export is a constructor', function test( t ) {
	var v = new Ctor( 10.0 );
	t.strictEqual( instanceOf( v, Ctor ), true, 'returns an instance' );
	t.end();
});

tape( 'the constructor length is equal to `1`', function test( t ) {
	t.strictEqual( Ctor.length, 1, 'returns expected value' );
	t.end();
});

tape( 'the constructor returns an object', function test( t ) {
	var v = new Ctor( 10.0 );
	t.strictEqual( isNumber.isPrimitive( v ), false, 'does not return a primitive' );
	t.strictEqual( isNumber.isObject( v ), true, 'returns an object' );
	t.end();
});

tape( 'the constructor coerces input values', function test( t ) {
	var v;

	v = new Ctor( false );
	t.strictEqual( v.valueOf(), 0, 'returns expected value' );

	v = new Ctor( true );
	t.strictEqual( v.valueOf(), 1, 'returns expected value' );

	v = new Ctor( [] );
	t.strictEqual( v.valueOf(), 0, 'returns expected value' );

	v = new Ctor( '' );
	t.strictEqual( v.valueOf(), 0, 'returns expected value' );

	v = new Ctor( '5' );
	t.strictEqual( v.valueOf(), 5, 'returns expected value' );

	v = new Ctor( 'beep' );
	t.strictEqual( isnan( v.valueOf() ), true, 'returns expected value' );

	v = new Ctor( {} );
	t.strictEqual( isnan( v.valueOf() ), true, 'returns expected value' );

	v = new Ctor( [ 2 ] );
	t.strictEqual( v.valueOf(), 2, 'returns expected value' );

	v = new Ctor( [ 2, 3 ] );
	t.strictEqual( isnan( v.valueOf() ), true, 'returns expected value' );

	v = new Ctor( new Date() ); // TODO: explicitly require
	t.strictEqual( isNumber.isPrimitive( v.valueOf() ), true, 'returns expected value' );

	v = new Ctor( null );
	t.strictEqual( v.valueOf(), 0, 'returns expected value' );

	v = new Ctor( void 0 );
	t.strictEqual( isnan( v.valueOf() ), true, 'returns expected value' );

	v = new Ctor();
	t.strictEqual( v.valueOf(), 0, 'returns expected value' );

	t.end();
});
