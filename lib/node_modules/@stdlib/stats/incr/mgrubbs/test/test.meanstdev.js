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
var randu = require( '@stdlib/random/base/randu' );
var sqrt = require( '@stdlib/math/base/special/sqrt' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var incrmmeanstdev = require( './../lib/meanstdev.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof incrmmeanstdev, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns an accumulator function', function test( t ) {
	t.equal( typeof incrmmeanstdev( [ 0.0, 0.0 ], 3, [ 0.0, 0.0, 0.0 ] ), 'function', 'returns a function' );
	t.end();
});

tape( 'the accumulator function computes a moving arithmetic mean and corrected sample standard deviation incrementally', function test( t ) {
	var expected;
	var actual;
	var data;
	var acc;
	var out;
	var buf;
	var W;
	var N;
	var i;
	var j;

	data = [ 2.0, 3.0, 4.0, -1.0, 3.0, 1.0 ];
	N = data.length;

	out = [ 0.0, 0.0 ];
	W = 3;
	buf = [ 0.0, 0.0, 0.0 ];
	acc = incrmmeanstdev( out, W, buf );

	expected = [
		[ 2.0, 0.0 ],
		[ 2.5, sqrt( 0.5 ) ],
		[ 3.0, sqrt( 1.0 ) ],
		[ 2.0, sqrt( 7.0 ) ],
		[ 2.0, sqrt( 7.0 ) ],
		[ 1.0, sqrt( 4.0 ) ]
	];
	for ( i = 0; i < N; i++ ) {
		j = i % W;
		actual = acc( data[ i ], j );
		buf[ j ] = data[ i ];
		t.strictEqual( actual, out, 'returns expected value' );
		t.deepEqual( actual, expected[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'if only one datum has been provided, the accumulator function returns `0` for the sample standard deviation', function test( t ) {
	var acc = incrmmeanstdev( [ 0.0, 0.0 ], 3, [ 0.0, 0.0, 0.0 ] );
	var v = acc( 2.0, 0 );
	t.equal( v[ 0 ], 2.0, 'returns expected value' );
	t.equal( v[ 1 ], 0.0, 'returns expected value' );
	t.end();
});

tape( 'if the window size is `1`, the accumulator functions always returns `0` for the sample standard deviation', function test( t ) {
	var acc;
	var out;
	var buf;
	var v;
	var i;

	buf = [ 0.0 ];
	acc = incrmmeanstdev( [ 0.0, 0.0 ], 1, buf );
	for ( i = 0; i < 100; i++ ) {
		v = randu() * 100.0;
		out = acc( v, 0 );
		buf[ 0 ] = v;
		t.equal( out[ 0 ], v, 'returns expected value' );
		t.equal( out[ 1 ], 0.0, 'returns expected value' );
	}
	t.end();
});

tape( 'if provided `NaN`, the accumulated values are both `NaN` for at least `W` invocations', function test( t ) {
	var expected;
	var data;
	var acc;
	var buf;
	var W;
	var v;
	var i;
	var j;

	W = 3;
	buf = [ 0.0, 0.0, 0.0 ];
	acc = incrmmeanstdev( [ 0.0, 0.0 ], W, buf );

	data = [
		NaN,  // NaN
		3.14, // NaN, 3.14
		3.14, // NaN, 3.14, 3.14
		NaN,  // 3.14, 3.14, NaN
		3.14, // 3.14, NaN, 3.14
		3.14, // NaN, 3.14, 3.14
		3.14, // 3.14, 3.14, 3.14
		NaN,  // 3.14, 3.14, NaN
		3.14, // 3.14, NaN, 3.14
		3.14, // NaN, 3.14, 3.14
		3.14, // 3.14, 3.14, 3.14
		NaN,  // 3.14, 3.14, NaN
		3.14, // 3.14, NaN, 3.14
		3.14, // NaN, 3.14, 3.14
		NaN,  // 3.14, 3.14, NaN
		NaN,  // 3.14, NaN, NaN
		NaN,  // NaN, NaN, NaN
		NaN,  // NaN, NaN, NaN
		3.14  // NaN, NaN, 3.14
	];
	expected = [
		[ NaN, NaN ],
		[ NaN, NaN ],
		[ NaN, NaN ],
		[ NaN, NaN ],
		[ NaN, NaN ],
		[ NaN, NaN ],
		[ 3.14, 0.0 ],
		[ NaN, NaN ],
		[ NaN, NaN ],
		[ NaN, NaN ],
		[ 3.14, 0.0 ],
		[ NaN, NaN ],
		[ NaN, NaN ],
		[ NaN, NaN ],
		[ NaN, NaN ],
		[ NaN, NaN ],
		[ NaN, NaN ],
		[ NaN, NaN ],
		[ NaN, NaN ]
	];
	for ( i = 0; i < data.length; i++ ) {
		j = i % W;
		v = acc( data[ i ], j );
		buf[ j ] = data[ i ];
		if ( isnan( expected[ i ][ 0 ] ) ) {
			t.equal( isnan( v[ 0 ] ), true, 'returns expected value for window '+i );
			t.equal( isnan( v[ 1 ] ), true, 'returns expected value for window '+i );
		} else {
			t.equal( v[ 0 ], expected[ i ][ 0 ], 'returns expected value for window '+i );
			t.equal( v[ 1 ], expected[ i ][ 1 ], 'returns expected value for window '+i );
		}
	}
	t.end();
});

tape( 'if provided `NaN`, the accumulated values are both `NaN` for at least `W` invocations (W=1)', function test( t ) {
	var expected;
	var data;
	var acc;
	var buf;
	var v;
	var i;

	buf = [ 0.0 ];
	acc = incrmmeanstdev( [ 0.0, 0.0 ], 1, buf );

	data = [
		NaN,
		3.14,
		3.14,
		NaN,
		3.14,
		3.14,
		3.14,
		NaN,
		3.14,
		3.14,
		3.14,
		NaN,
		3.14,
		3.14,
		NaN,
		NaN,
		NaN,
		NaN,
		3.14
	];
	expected = [
		[ NaN, NaN ],
		[ 3.14, 0.0 ],
		[ 3.14, 0.0 ],
		[ NaN, NaN ],
		[ 3.14, 0.0 ],
		[ 3.14, 0.0 ],
		[ 3.14, 0.0 ],
		[ NaN, NaN ],
		[ 3.14, 0.0 ],
		[ 3.14, 0.0 ],
		[ 3.14, 0.0 ],
		[ NaN, NaN ],
		[ 3.14, 0.0 ],
		[ 3.14, 0.0 ],
		[ NaN, NaN ],
		[ NaN, NaN ],
		[ NaN, NaN ],
		[ NaN, NaN ],
		[ 3.14, 0.0 ]
	];
	for ( i = 0; i < data.length; i++ ) {
		v = acc( data[ i ], 0 );
		buf[ 0 ] = data[ i ];
		if ( isnan( expected[ i ][ 0 ] ) ) {
			t.equal( isnan( v[ 0 ] ), true, 'returns expected value for window '+i );
			t.equal( isnan( v[ 1 ] ), true, 'returns expected value for window '+i );
		} else {
			t.equal( v[ 0 ], expected[ i ][ 0 ], 'returns expected value for window '+i );
			t.equal( v[ 1 ], expected[ i ][ 1 ], 'returns expected value for window '+i );
		}
	}
	t.end();
});
