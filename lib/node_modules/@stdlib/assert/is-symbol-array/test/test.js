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
var Symbol = require( '@stdlib/symbol/ctor' );
var hasSymbols = require( '@stdlib/assert/has-symbol-support' );
var isSymbolArray = require( './../lib' );


// VARIABLES //

var opts = {
	'skip': !hasSymbols()
};


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isSymbolArray, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function tests for an array-like object containing only symbols (ES2015+ environments)', opts, function test( t ) {
	var arr;

	arr = [ Symbol( 'a' ), Symbol( 'b' ) ];
	t.strictEqual( isSymbolArray( arr ), true, 'returns true' );

	arr = [ Object( Symbol( 'a' ) ), Object( Symbol( 'b' ) ) ];
	t.strictEqual( isSymbolArray( arr ), true, 'returns true' );

	arr = {
		'length': 2,
		'0': Symbol( 'a' ),
		'1': Symbol( 'b' )
	};
	t.strictEqual( isSymbolArray( arr ), true, 'returns true' );

	arr = [ 'a', 5, null ];
	t.strictEqual( isSymbolArray( arr ), false, 'returns false' );

	t.end();
});

tape( 'the function returns `false` if not provided an array-like object containing only symbols (all environments)', function test( t ) {
	var arr = [ 'a', 5, null ];
	t.strictEqual( isSymbolArray( arr ), false, 'returns false' );
	t.end();
});

tape( 'the function provides a method to test for an array-like object containing only `symbol` primitives (ES2015+ environments)', opts, function test( t ) {
	var arr;

	arr = [ Symbol( 'a' ), Symbol( 'b' ) ];
	t.strictEqual( isSymbolArray.primitives( arr ), true, 'returns true' );

	arr = {
		'length': 2,
		'0': Symbol( 'a' ),
		'1': Symbol( 'b' )
	};
	t.strictEqual( isSymbolArray.primitives( arr ), true, 'returns true' );

	arr = [ Object( Symbol( 'a' ) ), Object( Symbol( 'b' ) ) ];
	t.strictEqual( isSymbolArray.primitives( arr ), false, 'returns false' );

	t.end();
});

tape( 'the function returns `false` if not provided an array-like object containing only `symbol` primitives (all environments; primitives)', function test( t ) {
	var arr = [ 'a', 5, null ];
	t.strictEqual( isSymbolArray.primitives( arr ), false, 'returns false' );
	t.end();
});

tape( 'the function provides a method to test for an array-like object containing only `Symbol` objects (ES2015+ environments)', opts, function test( t ) {
	var arr;

	arr = [ Symbol( 'a' ), Symbol( 'b' ) ];
	t.strictEqual( isSymbolArray.objects( arr ), false, 'returns false' );

	arr = {
		'length': 2,
		'0': Object( Symbol( 'a' ) ),
		'1': Object( Symbol( 'b' ) )
	};
	t.strictEqual( isSymbolArray.objects( arr ), true, 'returns true' );

	arr = [ Object( Symbol( 'a' ) ), Object( Symbol( 'b' ) ) ];
	t.strictEqual( isSymbolArray.objects( arr ), true, 'returns true' );

	t.end();
});

tape( 'the function returns `false` if not provided an array-like object containing only `Symbol` objects (all environments; objects)', function test( t ) {
	var arr = [ {}, {}, null ];
	t.strictEqual( isSymbolArray.objects( arr ), false, 'returns false' );
	t.end();
});
