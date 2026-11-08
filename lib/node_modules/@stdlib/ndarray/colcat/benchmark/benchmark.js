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

var bench = require( '@stdlib/bench' );
var isndarrayLike = require( '@stdlib/assert/is-ndarray-like' );
var discreteUniform = require( '@stdlib/random/discrete-uniform' );
var format = require( '@stdlib/string/format' );
var pkg = require( './../package.json' ).name;
var colcat = require( './../lib' );


// MAIN //

bench( format( '%s::1d', pkg ), function benchmark( b ) {
	var values;
	var opts;
	var v;
	var i;

	opts = {
		'dtype': 'float64'
	};

	values = [
		discreteUniform( [ 32 ], -100, 100, opts ),
		discreteUniform( [ 32 ], -100, 100, opts ),
		discreteUniform( [ 32 ], -100, 100, opts ),
		discreteUniform( [ 32 ], -100, 100, opts )
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = colcat( values );
		if ( typeof v !== 'object' ) {
			b.fail( 'should return an ndarray' );
		}
	}
	b.toc();
	if ( !isndarrayLike( v ) ) {
		b.fail( 'should return an ndarray' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( format( '%s::1d,casting', pkg ), function benchmark( b ) {
	var values;
	var v;
	var i;

	/* eslint-disable object-curly-newline, stdlib/line-closing-bracket-spacing */

	values = [
		discreteUniform( [ 32 ], -100, 100, { 'dtype': 'float64' } ),
		discreteUniform( [ 32 ], -100, 100, { 'dtype': 'float32' } ),
		discreteUniform( [ 32 ], -100, 100, { 'dtype': 'int32' } ),
		discreteUniform( [ 32 ], -100, 100, { 'dtype': 'generic' } )
	];

	/* eslint-enable object-curly-newline, stdlib/line-closing-bracket-spacing */

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = colcat( values );
		if ( typeof v !== 'object' ) {
			b.fail( 'should return an ndarray' );
		}
	}
	b.toc();
	if ( !isndarrayLike( v ) ) {
		b.fail( 'should return an ndarray' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( format( '%s::2d', pkg ), function benchmark( b ) {
	var values;
	var opts;
	var v;
	var i;

	opts = {
		'dtype': 'float64'
	};

	values = [
		discreteUniform( [ 32, 16 ], -100, 100, opts ),
		discreteUniform( [ 32, 16 ], -100, 100, opts ),
		discreteUniform( [ 32, 16 ], -100, 100, opts ),
		discreteUniform( [ 32, 16 ], -100, 100, opts )
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = colcat( values );
		if ( typeof v !== 'object' ) {
			b.fail( 'should return an ndarray' );
		}
	}
	b.toc();
	if ( !isndarrayLike( v ) ) {
		b.fail( 'should return an ndarray' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( format( '%s::2d,casting', pkg ), function benchmark( b ) {
	var values;
	var v;
	var i;

	/* eslint-disable object-curly-newline, stdlib/line-closing-bracket-spacing */

	values = [
		discreteUniform( [ 32, 16 ], -100, 100, { 'dtype': 'float64' } ),
		discreteUniform( [ 32, 16 ], -100, 100, { 'dtype': 'float32' } ),
		discreteUniform( [ 32, 16 ], -100, 100, { 'dtype': 'int32' } ),
		discreteUniform( [ 32, 16 ], -100, 100, { 'dtype': 'generic' } )
	];

	/* eslint-enable object-curly-newline, stdlib/line-closing-bracket-spacing */

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = colcat( values );
		if ( typeof v !== 'object' ) {
			b.fail( 'should return an ndarray' );
		}
	}
	b.toc();
	if ( !isndarrayLike( v ) ) {
		b.fail( 'should return an ndarray' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( format( '%s::mixed_1d_2d', pkg ), function benchmark( b ) {
	var values;
	var opts;
	var v;
	var i;

	opts = {
		'dtype': 'float64'
	};

	values = [
		discreteUniform( [ 32 ], -100, 100, opts ),
		discreteUniform( [ 32, 16 ], -100, 100, opts ),
		discreteUniform( [ 32 ], -100, 100, opts ),
		discreteUniform( [ 32, 16 ], -100, 100, opts )
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = colcat( values );
		if ( typeof v !== 'object' ) {
			b.fail( 'should return an ndarray' );
		}
	}
	b.toc();
	if ( !isndarrayLike( v ) ) {
		b.fail( 'should return an ndarray' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
