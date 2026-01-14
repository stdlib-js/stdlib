/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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
var Fcn = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof Fcn, 'function', 'main export is a function' );
	t.end();
});

tape( 'the main export is the `Function` global', function test( t ) {
	t.strictEqual( Fcn, Function, 'returns expected value' ); // eslint-disable-line stdlib/require-globals
	t.end();
});

tape( 'the function returns a Function object', function test( t ) {
	var add = new Fcn( 'x', 'y', 'return x + y' );
	var v = add( 1, 2 );
	t.strictEqual( v, 3, 'returns expected value' );
	t.end();
});
