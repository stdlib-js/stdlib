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
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var Complex64 = require( '@stdlib/complex/float32/ctor' );
var format = require( '@stdlib/string/format' );
var pkg = require( './../package.json' ).name;
var fullBy = require( './../lib' );


// MAIN //

bench( format( '%s:dtype=float64', pkg ), function benchmark( b ) {
	var arr;
	var i;
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = fullBy( 'float64', [ 0 ], 'row-major', clbk );
		if ( arr.length !== 0 ) {
			b.fail( 'should have length 0' );
		}
	}
	b.toc();
	if ( !isndarrayLike( arr ) ) {
		b.fail( 'should return an ndarray' );
	}
	b.pass( 'benchmark finished' );
	b.end();

	function clbk() {
		return 10.0;
	}
});

bench( format( '%s:dtype=float32', pkg ), function benchmark( b ) {
	var arr;
	var i;
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = fullBy( 'float32', [ 0 ], 'row-major', clbk );
		if ( arr.length !== 0 ) {
			b.fail( 'should have length 0' );
		}
	}
	b.toc();
	if ( !isndarrayLike( arr ) ) {
		b.fail( 'should return an ndarray' );
	}
	b.pass( 'benchmark finished' );
	b.end();

	function clbk() {
		return 10.0;
	}
});

bench( format( '%s:dtype=complex128', pkg ), function benchmark( b ) {
	var arr;
	var i;
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = fullBy( 'complex128', [ 0 ], 'row-major', clbk );
		if ( arr.length !== 0 ) {
			b.fail( 'should have length 0' );
		}
	}
	b.toc();
	if ( !isndarrayLike( arr ) ) {
		b.fail( 'should return an ndarray' );
	}
	b.pass( 'benchmark finished' );
	b.end();

	function clbk() {
		return new Complex128( 10.0, 0.0 );
	}
});

bench( format( '%s:dtype=complex64', pkg ), function benchmark( b ) {
	var arr;
	var i;
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = fullBy( 'complex64', [ 0 ], 'row-major', clbk );
		if ( arr.length !== 0 ) {
			b.fail( 'should have length 0' );
		}
	}
	b.toc();
	if ( !isndarrayLike( arr ) ) {
		b.fail( 'should return an ndarray' );
	}
	b.pass( 'benchmark finished' );
	b.end();

	function clbk() {
		return new Complex64( 10.0, 0.0 );
	}
});

bench( format( '%s:dtype=int32', pkg ), function benchmark( b ) {
	var arr;
	var i;
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = fullBy( 'int32', [ 0 ], 'row-major', clbk );
		if ( arr.length !== 0 ) {
			b.fail( 'should have length 0' );
		}
	}
	b.toc();
	if ( !isndarrayLike( arr ) ) {
		b.fail( 'should return an ndarray' );
	}
	b.pass( 'benchmark finished' );
	b.end();

	function clbk() {
		return -10;
	}
});

bench( format( '%s:dtype=uint32', pkg ), function benchmark( b ) {
	var arr;
	var i;
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = fullBy( 'uint32', [ 0 ], 'row-major', clbk );
		if ( arr.length !== 0 ) {
			b.fail( 'should have length 0' );
		}
	}
	b.toc();
	if ( !isndarrayLike( arr ) ) {
		b.fail( 'should return an ndarray' );
	}
	b.pass( 'benchmark finished' );
	b.end();

	function clbk() {
		return 10;
	}
});

bench( format( '%s:dtype=int16', pkg ), function benchmark( b ) {
	var arr;
	var i;
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = fullBy( 'int16', [ 0 ], 'row-major', clbk );
		if ( arr.length !== 0 ) {
			b.fail( 'should have length 0' );
		}
	}
	b.toc();
	if ( !isndarrayLike( arr ) ) {
		b.fail( 'should return an ndarray' );
	}
	b.pass( 'benchmark finished' );
	b.end();

	function clbk() {
		return -10;
	}
});

bench( format( '%s:dtype=uint16', pkg ), function benchmark( b ) {
	var arr;
	var i;
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = fullBy( 'uint16', [ 0 ], 'row-major', clbk );
		if ( arr.length !== 0 ) {
			b.fail( 'should have length 0' );
		}
	}
	b.toc();
	if ( !isndarrayLike( arr ) ) {
		b.fail( 'should return an ndarray' );
	}
	b.pass( 'benchmark finished' );
	b.end();

	function clbk() {
		return 10;
	}
});

bench( format( '%s:dtype=int8', pkg ), function benchmark( b ) {
	var arr;
	var i;
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = fullBy( 'int8', [ 0 ], 'row-major', clbk );
		if ( arr.length !== 0 ) {
			b.fail( 'should have length 0' );
		}
	}
	b.toc();
	if ( !isndarrayLike( arr ) ) {
		b.fail( 'should return an ndarray' );
	}
	b.pass( 'benchmark finished' );
	b.end();

	function clbk() {
		return -10;
	}
});

bench( format( '%s:dtype=uint8', pkg ), function benchmark( b ) {
	var arr;
	var i;
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = fullBy( 'uint8', [ 0 ], 'row-major', clbk );
		if ( arr.length !== 0 ) {
			b.fail( 'should have length 0' );
		}
	}
	b.toc();
	if ( !isndarrayLike( arr ) ) {
		b.fail( 'should return an ndarray' );
	}
	b.pass( 'benchmark finished' );
	b.end();

	function clbk() {
		return 10;
	}
});

bench( format( '%s:dtype=uint8c', pkg ), function benchmark( b ) {
	var arr;
	var i;
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = fullBy( 'uint8c', [ 0 ], 'row-major', clbk );
		if ( arr.length !== 0 ) {
			b.fail( 'should have length 0' );
		}
	}
	b.toc();
	if ( !isndarrayLike( arr ) ) {
		b.fail( 'should return an ndarray' );
	}
	b.pass( 'benchmark finished' );
	b.end();

	function clbk() {
		return 10;
	}
});

bench( format( '%s:dtype=bool', pkg ), function benchmark( b ) {
	var arr;
	var i;
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = fullBy( 'bool', [ 0 ], 'row-major', clbk );
		if ( arr.length !== 0 ) {
			b.fail( 'should have length 0' );
		}
	}
	b.toc();
	if ( !isndarrayLike( arr ) ) {
		b.fail( 'should return an ndarray' );
	}
	b.pass( 'benchmark finished' );
	b.end();

	function clbk() {
		return true;
	}
});

bench( format( '%s:dtype=generic', pkg ), function benchmark( b ) {
	var arr;
	var i;
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = fullBy( 'generic', [ 0 ], 'row-major', clbk );
		if ( arr.length !== 0 ) {
			b.fail( 'should have length 0' );
		}
	}
	b.toc();
	if ( !isndarrayLike( arr ) ) {
		b.fail( 'should return an ndarray' );
	}
	b.pass( 'benchmark finished' );
	b.end();

	function clbk() {
		return 10.0;
	}
});
