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
var broadcastScalar = require( './../lib' );


// MAIN //

bench( format( '%s:dtype=float64', pkg ), function benchmark( b ) {
	var x;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x = broadcastScalar( i, [ 2, 2 ], {
			'dtype': 'float64'
		});
		if ( x.length !== 4 ) {
			b.fail( 'should have length 4' );
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
	var x;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x = broadcastScalar( i, [ 2, 2 ], {
			'dtype': 'float32'
		});
		if ( x.length !== 4 ) {
			b.fail( 'should have length 4' );
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
	var x;
	var v;
	var i;

	v = new Complex128( 1.0, 2.0 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x = broadcastScalar( v, [ 2, 2 ], {
			'dtype': 'complex128'
		});
		if ( x.length !== 4 ) {
			b.fail( 'should have length 4' );
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
	var x;
	var v;
	var i;

	v = new Complex64( 1.0, 2.0 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x = broadcastScalar( v, [ 2, 2 ], {
			'dtype': 'complex64'
		});
		if ( x.length !== 4 ) {
			b.fail( 'should have length 4' );
		}
	}
	b.toc();
	if ( !isndarrayLike( x ) ) {
		b.fail( 'should return an ndarray' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( format( '%s:dtype=bool', pkg ), function benchmark( b ) {
	var x;
	var v;
	var i;

	v = [ true, false ];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x = broadcastScalar( v[ i%2 ], [ 2, 2 ], {
			'dtype': 'bool'
		});
		if ( x.length !== 4 ) {
			b.fail( 'should have length 4' );
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
	var x;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x = broadcastScalar( i, [ 2, 2 ], {
			'dtype': 'int32'
		});
		if ( x.length !== 4 ) {
			b.fail( 'should have length 4' );
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
	var x;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x = broadcastScalar( i, [ 2, 2 ], {
			'dtype': 'uint32'
		});
		if ( x.length !== 4 ) {
			b.fail( 'should have length 4' );
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
	var x;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x = broadcastScalar( i, [ 2, 2 ], {
			'dtype': 'int16'
		});
		if ( x.length !== 4 ) {
			b.fail( 'should have length 4' );
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
	var x;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x = broadcastScalar( i, [ 2, 2 ], {
			'dtype': 'uint16'
		});
		if ( x.length !== 4 ) {
			b.fail( 'should have length 4' );
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
	var x;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x = broadcastScalar( i, [ 2, 2 ], {
			'dtype': 'int8'
		});
		if ( x.length !== 4 ) {
			b.fail( 'should have length 4' );
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
	var x;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x = broadcastScalar( i, [ 2, 2 ], {
			'dtype': 'uint8'
		});
		if ( x.length !== 4 ) {
			b.fail( 'should have length 4' );
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
	var x;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x = broadcastScalar( i, [ 2, 2 ], {
			'dtype': 'uint8c'
		});
		if ( x.length !== 4 ) {
			b.fail( 'should have length 4' );
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
	var x;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x = broadcastScalar( i, [ 2, 2 ], {
			'dtype': 'generic'
		});
		if ( x.length !== 4 ) {
			b.fail( 'should have length 4' );
		}
	}
	b.toc();
	if ( !isndarrayLike( x ) ) {
		b.fail( 'should return an ndarray' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
