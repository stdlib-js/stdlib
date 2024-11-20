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
var pow = require( '@stdlib/math/base/special/pow' );
var correction = require( './../lib/correction.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof correction, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns the Stirling correction term for nonnegative integers <= 9', function test( t ) {
	var expected;
	var val;
	var k;

	expected = [
		0.08106146679532726,
		0.04134069595540929,
		0.02767792568499834,
		0.02079067210376509,
		0.01664469118982119,
		0.01387612882307075,
		0.01189670994589177,
		0.01041126526197209,
		0.009255462182712733,
		0.008330563433362871
	];
	for ( k = 0; k < expected.length; k++ ) {
		val = correction( k );
		t.equal( val, expected[ k ], 'returns correction term for k='+k );
	}
	t.end();
});

tape( 'the function computes the Stirling correction term for nonnegative integers > 9', function test( t ) {
	var expected;
	var val;
	var k2;
	var k;

	for ( k = 10; k < 100; k++ ) {
		val = correction( k );
		k += 1;
		k2 = pow( k, 2 );
		expected = 1.0/12.0;
		expected -= ( (1.0/360.0) - (1.0/1260.0/k2) ) / k2;
		expected /= k;
		t.equal( val, expected, 'k: '+k+'. actual: '+val+'. expected: '+expected+'.' );
	}
	t.end();
});
