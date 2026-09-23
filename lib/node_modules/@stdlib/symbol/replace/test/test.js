/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
var hasReplaceSymbolSupport = require( '@stdlib/assert/has-replace-symbol-support' );
var isSymbol = require( '@stdlib/assert/is-symbol' );
var Sym = require( './../lib' );


// VARIABLES //

var opts = {
	'skip': !hasReplaceSymbolSupport()
};


// TESTS //

tape( 'main export is a symbol in supporting environments (ES6/2015+) or otherwise null', function test( t ) {
	t.ok( true, __filename );
	if ( opts.skip ) {
		t.strictEqual( Sym, null, 'main export is null' );
	} else {
		t.strictEqual( typeof Sym, 'symbol', 'main export is a symbol' );
		t.strictEqual( isSymbol( Sym ), true, 'main export is a symbol' );
	}
	t.end();
});

tape( 'the main export is an alias for `Symbol.replace`', opts, function test( t ) {
	t.strictEqual( Sym, Symbol.replace, 'returns expected value' );
	t.end();
});
