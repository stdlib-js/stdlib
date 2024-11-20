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
var constantFunction = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof constantFunction, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns a function', function test( t ) {
	t.equal( typeof constantFunction(), 'function', 'returns a function' );
	t.end();
});

tape( 'the returned function always returns the same value', function test( t ) {
	var fcn;
	var i;

	fcn = constantFunction( 3.14 );
	for ( i = 0; i < 100; i++ ) {
		t.equal( fcn(), 3.14, 'returns 3.14' );
	}
	t.end();
});

tape( 'if the value is an object reference, the returned function always returns the same reference', function test( t ) {
	var fcn;
	var arr;
	var i;

	arr = [ 1, 2, 3 ];
	fcn = constantFunction( arr );
	for ( i = 0; i < 100; i++ ) {
		t.equal( fcn(), arr, 'returns same reference' );
	}
	t.end();
});
