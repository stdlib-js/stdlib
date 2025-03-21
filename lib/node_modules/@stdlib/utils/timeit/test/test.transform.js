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
var transform = require( './../lib/transform.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof transform, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function transforms raw results', function test( t ) {
	var expected;
	var actual;
	var times;
	var iter;
	var rate;
	var secs;

	times = [
		[ 1, 200 ],
		[ 0, 999999 ],
		[ 0, 1000000 ]
	];
	iter = 1e6;

	secs = times[ 1 ];
	secs = secs[ 0 ] + ( secs[ 1 ]/1e9 );
	rate = iter / secs;

	expected = {
		'iterations': iter,
		'repeats': times.length,
		'min': times[ 1 ],
		'elapsed': secs,
		'rate': rate,
		'times': times
	};
	actual = transform( times, iter );

	t.deepEqual( actual, expected, 'transforms raw results' );
	t.end();
});
