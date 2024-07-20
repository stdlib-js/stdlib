/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
var pkg = require( './../package.json' ).name;
var scalar2ndarray = require( './../lib' );


// MAIN //

bench( pkg+':dtype=float64', function benchmark( b ) {
	var x;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x = scalar2ndarray( i, {
			'dtype': 'float64'
		});
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

bench( pkg+':dtype=float32', function benchmark( b ) {
	var x;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x = scalar2ndarray( i, {
			'dtype': 'float32'
		});
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

bench( pkg+':dtype=complex128', function benchmark( b ) {
	var x;
	var v;
	var i;

	v = new Complex128( 1.0, 2.0 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x = scalar2ndarray( v, {
			'dtype': 'complex128'
		});
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

bench( pkg+':dtype=complex64', function benchmark( b ) {
	var x;
	var v;
	var i;

	v = new Complex64( 1.0, 2.0 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x = scalar2ndarray( v, {
			'dtype': 'complex64'
		});
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

bench( pkg+':dtype=bool', function benchmark( b ) {
	var x;
	var v;
	var i;

	v = [ true, false ];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x = scalar2ndarray( v[ i%2 ], {
			'dtype': 'bool'
		});
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

bench( pkg+':dtype=int32', function benchmark( b ) {
	var x;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x = scalar2ndarray( i, {
			'dtype': 'int32'
		});
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

bench( pkg+':dtype=uint32', function benchmark( b ) {
	var x;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x = scalar2ndarray( i, {
			'dtype': 'uint32'
		});
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

bench( pkg+':dtype=int16', function benchmark( b ) {
	var x;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x = scalar2ndarray( i, {
			'dtype': 'int16'
		});
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

bench( pkg+':dtype=uint16', function benchmark( b ) {
	var x;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x = scalar2ndarray( i, {
			'dtype': 'uint16'
		});
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

bench( pkg+':dtype=int8', function benchmark( b ) {
	var x;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x = scalar2ndarray( i, {
			'dtype': 'int8'
		});
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

bench( pkg+':dtype=uint8', function benchmark( b ) {
	var x;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x = scalar2ndarray( i, {
			'dtype': 'uint8'
		});
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

bench( pkg+':dtype=uint8c', function benchmark( b ) {
	var x;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x = scalar2ndarray( i, {
			'dtype': 'uint8c'
		});
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

bench( pkg+':dtype=generic', function benchmark( b ) {
	var x;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x = scalar2ndarray( i, {
			'dtype': 'generic'
		});
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
