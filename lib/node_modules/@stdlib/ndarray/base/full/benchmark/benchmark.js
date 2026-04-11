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
var format = require( '@stdlib/string/format' );
var pkg = require( './../package.json' ).name;
var full = require( './../lib' );


// MAIN //

bench( format( '%s:dtype=float64', pkg ), function benchmark( b ) {
	var arr;
	var i;
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = full( 10.0, 'float64', [ 0 ], 'row-major' );
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
});

bench( format( '%s:dtype=float32', pkg ), function benchmark( b ) {
	var arr;
	var i;
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = full( 10.0, 'float32', [ 0 ], 'row-major' );
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
});

bench( format( '%s:dtype=complex128', pkg ), function benchmark( b ) {
	var arr;
	var i;
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = full( 10.0, 'complex128', [ 0 ], 'row-major' );
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
});

bench( format( '%s:dtype=complex64', pkg ), function benchmark( b ) {
	var arr;
	var i;
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = full( 10.0, 'complex64', [ 0 ], 'row-major' );
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
});

bench( format( '%s:dtype=int32', pkg ), function benchmark( b ) {
	var arr;
	var i;
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = full( -10, 'int32', [ 0 ], 'row-major' );
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
});

bench( format( '%s:dtype=uint32', pkg ), function benchmark( b ) {
	var arr;
	var i;
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = full( 10, 'uint32', [ 0 ], 'row-major' );
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
});

bench( format( '%s:dtype=int16', pkg ), function benchmark( b ) {
	var arr;
	var i;
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = full( -10, 'int16', [ 0 ], 'row-major' );
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
});

bench( format( '%s:dtype=uint16', pkg ), function benchmark( b ) {
	var arr;
	var i;
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = full( 10, 'uint16', [ 0 ], 'row-major' );
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
});

bench( format( '%s:dtype=int8', pkg ), function benchmark( b ) {
	var arr;
	var i;
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = full( -10, 'int8', [ 0 ], 'row-major' );
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
});

bench( format( '%s:dtype=uint8', pkg ), function benchmark( b ) {
	var arr;
	var i;
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = full( 10, 'uint8', [ 0 ], 'row-major' );
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
});

bench( format( '%s:dtype=uint8c', pkg ), function benchmark( b ) {
	var arr;
	var i;
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = full( 10, 'uint8c', [ 0 ], 'row-major' );
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
});

bench( format( '%s:dtype=bool', pkg ), function benchmark( b ) {
	var arr;
	var i;
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = full( true, 'bool', [ 0 ], 'row-major' );
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
});

bench( format( '%s:dtype=generic', pkg ), function benchmark( b ) {
	var arr;
	var i;
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = full( 10.0, 'generic', [ 0 ], 'row-major' );
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
});
