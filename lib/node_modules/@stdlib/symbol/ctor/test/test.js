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

/* eslint-disable new-cap */

// MODULES //

var tape = require( 'tape' );
var hasSymbolSupport = require( '@stdlib/assert/has-symbol-support' );
var isSymbol = require( '@stdlib/assert/is-symbol' );
var Sym = require( './../lib' );


// VARIABLES //

var opts = {
	'skip': !hasSymbolSupport()
};


// TESTS //

tape( 'main export is a function in supporting environments (ES6/2015+) or otherwise undefined', function test( t ) {
	t.ok( true, __filename );
	if ( opts.skip ) {
		t.strictEqual( Sym, void 0, 'main export is undefined' );
	} else {
		t.strictEqual( typeof Sym, 'function', 'main export is a function' );
	}
	t.end();
});

tape( 'the main export is an alias for `Symbol`', opts, function test( t ) {
	t.strictEqual( Sym, Symbol, 'is an alias' );
	t.end();
});

tape( 'the function returns symbols', opts, function test( t ) {
	var s = Sym( 'beep' );
	t.strictEqual( typeof s, 'symbol', 'returns a symbol' );
	t.strictEqual( isSymbol.isPrimitive( s ), true, 'returns a symbol' );
	t.end();
});

tape( 'the function returns symbols which are unique', opts, function test( t ) {
	var s = Sym( 'beep' );
	t.strictEqual( s !== Sym( 'beep' ), true, 'returns unique values' );
	t.end();
});

tape( 'to generate a symbol object, must wrap in `Object` call', opts, function test( t ) {
	var s = Object( Sym( 'beep' ) );
	t.strictEqual( isSymbol.isPrimitive( s ), false, 'does not return a primitive' );
	t.strictEqual( isSymbol.isObject( s ), true, 'returns an object' );
	t.end();
});

tape( 'the function coerces input values', opts, function test( t ) {
	var s;

	s = Sym( false );
	t.strictEqual( s.toString(), 'Symbol(false)', 'returns expected value' );

	s = Sym( true );
	t.strictEqual( s.toString(), 'Symbol(true)', 'returns expected value' );

	s = Sym( [] );
	t.strictEqual( s.toString(), 'Symbol()', 'returns expected value' );

	s = Sym( '' );
	t.strictEqual( s.toString(), 'Symbol()', 'returns expected value' );

	s = Sym( '5' );
	t.strictEqual( s.toString(), 'Symbol(5)', 'returns expected value' );

	s = Sym( 'beep' );
	t.strictEqual( s.toString(), 'Symbol(beep)', 'returns expected value' );

	s = Sym( {} );
	t.strictEqual( s.toString(), 'Symbol([object Object])', 'returns expected value' );

	s = Sym( [ 2 ] );
	t.strictEqual( s.toString(), 'Symbol(2)', 'returns expected value' );

	s = Sym( [ 2, 3 ] );
	t.strictEqual( s.toString(), 'Symbol(2,3)', 'returns expected value' );

	s = Sym( null );
	t.strictEqual( s.toString(), 'Symbol(null)', 'returns expected value' );

	s = Sym( void 0 );
	t.strictEqual( s.toString(), 'Symbol()', 'returns expected value' );

	s = Sym();
	t.strictEqual( s.toString(), 'Symbol()', 'returns expected value' );

	t.end();
});
