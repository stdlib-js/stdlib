/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
var typedarray = require( '@stdlib/array/typed' );
var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
var format = require( '@stdlib/string/format' );
var pkg = require( './../package.json' ).name;
var array2ndarray = require( './../lib' );


// MAIN //

bench( format( '%s:dtype=float64', pkg ), function benchmark( b ) {
	var buf;
	var x;
	var i;

	buf = typedarray( 1, 'float64' );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x = array2ndarray( buf, 'row-major' );
		if ( x.length !== 1 ) {
			b.fail( 'should have length 1' );
		}
	}
	b.toc();
	if ( !isndarrayLike( x ) ) {
		b.fail( 'should return an ndarray' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( format( '%s:dtype=float32', pkg ), function benchmark( b ) {
	var buf;
	var x;
	var i;

	buf = typedarray( 1, 'float32' );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x = array2ndarray( buf, 'row-major' );
		if ( x.length !== 1 ) {
			b.fail( 'should have length 1' );
		}
	}
	b.toc();
	if ( !isndarrayLike( x ) ) {
		b.fail( 'should return an ndarray' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( format( '%s:dtype=complex128', pkg ), function benchmark( b ) {
	var buf;
	var x;
	var i;

	buf = typedarray( 1, 'complex128' );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x = array2ndarray( buf, 'row-major' );
		if ( x.length !== 1 ) {
			b.fail( 'should have length 1' );
		}
	}
	b.toc();
	if ( !isndarrayLike( x ) ) {
		b.fail( 'should return an ndarray' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( format( '%s:dtype=complex64', pkg ), function benchmark( b ) {
	var buf;
	var x;
	var i;

	buf = typedarray( 1, 'complex64' );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x = array2ndarray( buf, 'row-major' );
		if ( x.length !== 1 ) {
			b.fail( 'should have length 1' );
		}
	}
	b.toc();
	if ( !isndarrayLike( x ) ) {
		b.fail( 'should return an ndarray' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( format( '%s:dtype=int32', pkg ), function benchmark( b ) {
	var buf;
	var x;
	var i;

	buf = typedarray( 1, 'int32' );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x = array2ndarray( buf, 'row-major' );
		if ( x.length !== 1 ) {
			b.fail( 'should have length 1' );
		}
	}
	b.toc();
	if ( !isndarrayLike( x ) ) {
		b.fail( 'should return an ndarray' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( format( '%s:dtype=uint32', pkg ), function benchmark( b ) {
	var buf;
	var x;
	var i;

	buf = typedarray( 1, 'uint32' );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x = array2ndarray( buf, 'row-major' );
		if ( x.length !== 1 ) {
			b.fail( 'should have length 1' );
		}
	}
	b.toc();
	if ( !isndarrayLike( x ) ) {
		b.fail( 'should return an ndarray' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( format( '%s:dtype=int16', pkg ), function benchmark( b ) {
	var buf;
	var x;
	var i;

	buf = typedarray( 1, 'int16' );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x = array2ndarray( buf, 'row-major' );
		if ( x.length !== 1 ) {
			b.fail( 'should have length 1' );
		}
	}
	b.toc();
	if ( !isndarrayLike( x ) ) {
		b.fail( 'should return an ndarray' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( format( '%s:dtype=uint16', pkg ), function benchmark( b ) {
	var buf;
	var x;
	var i;

	buf = typedarray( 1, 'uint16' );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x = array2ndarray( buf, 'row-major' );
		if ( x.length !== 1 ) {
			b.fail( 'should have length 1' );
		}
	}
	b.toc();
	if ( !isndarrayLike( x ) ) {
		b.fail( 'should return an ndarray' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( format( '%s:dtype=int8', pkg ), function benchmark( b ) {
	var buf;
	var x;
	var i;

	buf = typedarray( 1, 'int8' );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x = array2ndarray( buf, 'row-major' );
		if ( x.length !== 1 ) {
			b.fail( 'should have length 1' );
		}
	}
	b.toc();
	if ( !isndarrayLike( x ) ) {
		b.fail( 'should return an ndarray' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( format( '%s:dtype=uint8', pkg ), function benchmark( b ) {
	var buf;
	var x;
	var i;

	buf = typedarray( 1, 'uint8' );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x = array2ndarray( buf, 'row-major' );
		if ( x.length !== 1 ) {
			b.fail( 'should have length 1' );
		}
	}
	b.toc();
	if ( !isndarrayLike( x ) ) {
		b.fail( 'should return an ndarray' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( format( '%s:dtype=uint8c', pkg ), function benchmark( b ) {
	var buf;
	var x;
	var i;

	buf = typedarray( 1, 'uint8c' );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x = array2ndarray( buf, 'row-major' );
		if ( x.length !== 1 ) {
			b.fail( 'should have length 1' );
		}
	}
	b.toc();
	if ( !isndarrayLike( x ) ) {
		b.fail( 'should return an ndarray' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( format( '%s:dtype=generic', pkg ), function benchmark( b ) {
	var buf;
	var x;
	var i;

	buf = [ 100 ];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x = array2ndarray( buf, 'row-major' );
		if ( x.length !== 1 ) {
			b.fail( 'should have length 1' );
		}
	}
	b.toc();
	if ( !isndarrayLike( x ) ) {
		b.fail( 'should return an ndarray' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( format( '%s:dtype=generic', pkg ), function benchmark( b ) {
	var buf;
	var x;
	var i;

	buf = toAccessorArray( [ 100 ] );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x = array2ndarray( buf, 'row-major' );
		if ( x.length !== 1 ) {
			b.fail( 'should have length 1' );
		}
	}
	b.toc();
	if ( !isndarrayLike( x ) ) {
		b.fail( 'should return an ndarray' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
