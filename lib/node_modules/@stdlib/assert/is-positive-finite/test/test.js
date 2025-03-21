/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
var isPositiveFinite = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isPositiveFinite, 'function', 'main export is a function' );
	t.end();
});

tape( 'attached to the main export is a method to test for a primitive number having a finite positive value', function test( t ) {
	t.equal( typeof isPositiveFinite.isPrimitive, 'function', 'export is a function' );
	t.end();
});

tape( 'attached to the main export is a method to test for a number object having a finite positive value', function test( t ) {
	t.equal( typeof isPositiveFinite.isObject, 'function', 'export is a function' );
	t.end();
});
