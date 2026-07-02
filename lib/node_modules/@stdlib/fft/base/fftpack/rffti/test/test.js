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
var Float64Array = require( '@stdlib/array/float64' );
var isAlmostSameValue = require( '@stdlib/number/float64/base/assert/is-almost-same-value' );
var rffti = require( './../lib' );


// FIXTURES //

var small = require( './fixtures/c/fftpack/small.json' );
var medium = require( './fixtures/c/fftpack/medium.json' );
var large = require( './fixtures/c/fftpack/large.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof rffti, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 4', function test( t ) {
	t.strictEqual( rffti.length, 4, 'returns expected value' );
	t.end();
});

tape( 'the function returns a reference to the workspace array', function test( t ) {
	var workspace;
	var out;
	var N;

	N = 8;
	workspace = new Float64Array( ( 2*N ) + 34 );
	out = rffti( N, workspace, 1, 0 );

	t.strictEqual( out, workspace, 'same reference' );
	t.end();
});

tape( 'the function correctly initializes twiddle factors (small sequence lengths)', function test( t ) {
	var workspace;
	var expected;
	var lengths;
	var offsets;
	var ulps;
	var off;
	var y;
	var e;
	var N;
	var i;
	var k;

	lengths = small.lengths;
	offsets = small.offsets;
	expected = small.twiddles;

	ulps = 1;
	for ( k = 0; k < lengths.length; k++ ) {
		N = lengths[ k ];
		off = offsets[ k ];
		workspace = new Float64Array( ( 2*N ) + 34 );
		rffti( N, workspace, 1, 0 );

		t.strictEqual( workspace[ N ], 0.0, 'returns expected value' );
		for ( i = 0; i < N-1; i++ ) {
			y = workspace[ N+i+1 ];
			e = expected[ off+i ];
			t.strictEqual( isAlmostSameValue( y, e, ulps ), true, 'within '+ulps+' ULPs. N: '+N+'. y: '+y+'. E: '+e );
		}
	}
	t.end();
});

tape( 'the function correctly initializes twiddle factors (medium sequence lengths)', function test( t ) {
	var workspace;
	var expected;
	var lengths;
	var offsets;
	var ulps;
	var off;
	var y;
	var e;
	var N;
	var i;
	var k;

	lengths = medium.lengths;
	offsets = medium.offsets;
	expected = medium.twiddles;

	ulps = 1;
	for ( k = 0; k < lengths.length; k++ ) {
		N = lengths[ k ];
		off = offsets[ k ];
		workspace = new Float64Array( ( 2*N ) + 34 );
		rffti( N, workspace, 1, 0 );

		t.strictEqual( workspace[ N ], 0.0, 'returns expected value' );
		for ( i = 0; i < N-1; i++ ) {
			y = workspace[ N+i+1 ];
			e = expected[ off+i ];
			t.strictEqual( isAlmostSameValue( y, e, ulps ), true, 'within '+ulps+' ULPs. N: '+N+'. y: '+y+'. E: '+e );
		}
	}
	t.end();
});

tape( 'the function correctly initializes twiddle factors (large sequence lengths)', function test( t ) {
	var workspace;
	var expected;
	var lengths;
	var offsets;
	var ulps;
	var off;
	var y;
	var e;
	var N;
	var i;
	var k;

	lengths = large.lengths;
	offsets = large.offsets;
	expected = large.twiddles;

	ulps = 1;
	for ( k = 0; k < lengths.length; k++ ) {
		N = lengths[ k ];
		off = offsets[ k ];
		workspace = new Float64Array( ( 2*N ) + 34 );
		rffti( N, workspace, 1, 0 );

		t.strictEqual( workspace[ N ], 0.0, 'returns expected value' );
		for ( i = 0; i < N-1; i++ ) {
			y = workspace[ N+i+1 ];
			e = expected[ off+i ];
			t.strictEqual( isAlmostSameValue( y, e, ulps ), true, 'within '+ulps+' ULPs. N: '+N+'. y: '+y+'. E: '+e );
		}
	}
	t.end();
});

tape( 'the function does not modify the scratch region of the workspace', function test( t ) {
	var workspace;
	var N;
	var i;

	N = 8;
	workspace = new Float64Array( ( 2*N ) + 34 );

	for ( i = 0; i < workspace.length; i++ ) {
		workspace[ i ] = i + 1.0;
	}
	rffti( N, workspace, 1, 0 );
	for ( i = 0; i < N; i++ ) {
		t.strictEqual( workspace[ i ], i + 1.0, 'returns expected value' );
	}
	t.end();
});

tape( 'the function does not modify the workspace when N is 1', function test( t ) {
	var workspace;
	var expected;
	var N;
	var i;

	N = 1;
	workspace = new Float64Array( ( 2*N ) + 34 );
	for ( i = 0; i < workspace.length; i++ ) {
		workspace[ i ] = i + 1.0;
	}
	expected = new Float64Array( workspace );

	rffti( N, workspace, 1, 0 );

	t.deepEqual( workspace, expected, 'returns expected value' );
	t.end();
});

tape( 'the function correctly handles stride and offset parameters', function test( t ) {
	var workspace;
	var expected;
	var stride;
	var offset;
	var nf;
	var N;
	var i;

	N = 8;
	stride = 2;
	offset = 3;
	workspace = new Float64Array( offset + ( ( ( 2*N ) + 34 ) * stride ) );

	rffti( N, workspace, stride, offset );

	t.strictEqual( workspace[ offset + ( 2*N * stride ) ], N, 'returns expected value' );

	nf = workspace[ offset + ( ( ( 2*N ) + 1 ) * stride ) ];
	t.strictEqual( nf, 2, 'returns expected value' );
	t.strictEqual( workspace[ offset + ( ( ( 2*N ) + 2 ) * stride ) ], 2, 'returns expected value' );
	t.strictEqual( workspace[ offset + ( ( ( 2*N ) + 3 ) * stride ) ], 4, 'returns expected value' );

	expected = new Float64Array( ( 2*N ) + 34 );
	rffti( N, expected, 1, 0 );

	for ( i = 0; i < N-1; i++ ) {
		t.strictEqual( workspace[ offset + ( ( N+i+1 ) * stride ) ], expected[ N+i+1 ], 'returns expected value' );
	}
	t.end();
});
