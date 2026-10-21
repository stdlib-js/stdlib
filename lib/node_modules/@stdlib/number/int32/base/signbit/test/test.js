/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var MAX_INT32 = require( '@stdlib/constants/int32/max' );
var signbit = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof signbit, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns a boolean', function test( t ) {
	t.strictEqual( typeof signbit( 5 ), 'boolean', 'returns expected value' );
	t.end();
});

tape( 'the function returns a boolean indicating if a sign bit is on (true) or off (false)', function test( t ) {
	var x;
	var i;

	x = discreteUniform( 1e3, -MAX_INT32, MAX_INT32, {
		'dtype': 'generic'
	});
	for ( i = 0; i < x.length; i++ ) {
		t.strictEqual( signbit( x[ i ] ), x[ i ] < 0, 'returns expected value for '+x[ i ] );
	}
	t.end();
});
