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

var bench = require( '@stdlib/bench' );
var Float32Array = require( '@stdlib/array/float32' );
var isndarrayLike = require( '@stdlib/assert/is-ndarray-like' );
var pkg = require( './../package.json' ).name;
var array = require( './../lib' );


// MAIN //

bench( pkg+'::1d,instantiation,linear_buffer', function benchmark( b ) {
	var out;
	var arr;
	var i;

	arr = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = array( arr );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isndarrayLike( out ) ) {
		b.fail( 'should return an ndarray' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::1d,instantiation,shape', function benchmark( b ) {
	var opts;
	var out;
	var i;

	opts = {
		'shape': [ 6 ]
	};

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = array( opts );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isndarrayLike( out ) ) {
		b.fail( 'should return an ndarray' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::1d,instantiation,ndarray', function benchmark( b ) {
	var out;
	var arr;
	var i;

	arr = array( new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] ) );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = array( arr );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isndarrayLike( out ) ) {
		b.fail( 'should return an ndarray' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::1d,instantiation,no_cast', function benchmark( b ) {
	var opts;
	var out;
	var arr;
	var i;

	arr = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	opts = {
		'dtype': 'float32'
	};

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = array( arr, opts );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isndarrayLike( out ) ) {
		b.fail( 'should return an ndarray' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::1d,instantiation,default_cast', function benchmark( b ) {
	var out;
	var arr;
	var i;

	arr = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = array( arr );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isndarrayLike( out ) ) {
		b.fail( 'should return an ndarray' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::1d,instantiation,dtype_cast', function benchmark( b ) {
	var opts;
	var out;
	var arr;
	var i;

	arr = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	opts = {
		'dtype': 'float64'
	};

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = array( arr, opts );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isndarrayLike( out ) ) {
		b.fail( 'should return an ndarray' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::1d,instantiation:copy=false', function benchmark( b ) {
	var opts;
	var out;
	var arr;
	var i;

	arr = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	opts = {
		'copy': false
	};

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = array( arr, opts );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isndarrayLike( out ) ) {
		b.fail( 'should return an ndarray' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::1d,instantiation:copy=true', function benchmark( b ) {
	var opts;
	var out;
	var arr;
	var i;

	arr = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	opts = {
		'copy': true
	};

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = array( arr, opts );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isndarrayLike( out ) ) {
		b.fail( 'should return an ndarray' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::1d,instantiation:dtype=generic', function benchmark( b ) {
	var opts;
	var out;
	var arr;
	var i;

	arr = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	opts = {
		'dtype': 'generic'
	};

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = array( arr, opts );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isndarrayLike( out ) ) {
		b.fail( 'should return an ndarray' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::1d,instantiation:dtype=generic,flatten=true', function benchmark( b ) {
	var opts;
	var out;
	var arr;
	var i;

	arr = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	opts = {
		'dtype': 'generic',
		'flatten': true
	};

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = array( arr, opts );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isndarrayLike( out ) ) {
		b.fail( 'should return an ndarray' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::1d,instantiation:dtype=generic,flatten=false', function benchmark( b ) {
	var opts;
	var out;
	var arr;
	var i;

	arr = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	opts = {
		'dtype': 'generic',
		'flatten': false
	};

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = array( arr, opts );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isndarrayLike( out ) ) {
		b.fail( 'should return an ndarray' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::2d,instantiation,linear_buffer', function benchmark( b ) {
	var opts;
	var out;
	var arr;
	var i;

	arr = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	opts = {
		'shape': [ 3, 2 ]
	};

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = array( arr, opts );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isndarrayLike( out ) ) {
		b.fail( 'should return an ndarray' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::2d,instantiation,shape', function benchmark( b ) {
	var opts;
	var out;
	var i;

	opts = {
		'shape': [ 3, 2 ]
	};

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = array( opts );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isndarrayLike( out ) ) {
		b.fail( 'should return an ndarray' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::2d,instantiation,ndarray', function benchmark( b ) {
	var opts;
	var out;
	var arr;
	var i;

	arr = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	opts = {
		'shape': [ 3, 2 ]
	};
	arr = array( arr, opts );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = array( arr );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isndarrayLike( out ) ) {
		b.fail( 'should return an ndarray' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::2d,instantiation,no_cast', function benchmark( b ) {
	var opts;
	var out;
	var arr;
	var i;

	arr = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	opts = {
		'dtype': 'float32',
		'shape': [ 3, 2 ]
	};

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = array( arr, opts );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isndarrayLike( out ) ) {
		b.fail( 'should return an ndarray' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::2d,instantiation,default_cast', function benchmark( b ) {
	var opts;
	var out;
	var arr;
	var i;

	arr = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	opts = {
		'shape': [ 3, 2 ]
	};

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = array( arr, opts );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isndarrayLike( out ) ) {
		b.fail( 'should return an ndarray' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::2d,instantiation,dtype_cast', function benchmark( b ) {
	var opts;
	var out;
	var arr;
	var i;

	arr = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	opts = {
		'dtype': 'float64',
		'shape': [ 3, 2 ]
	};

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = array( arr, opts );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isndarrayLike( out ) ) {
		b.fail( 'should return an ndarray' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::2d,instantiation:copy=false', function benchmark( b ) {
	var opts;
	var out;
	var arr;
	var i;

	arr = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	opts = {
		'copy': false,
		'shape': [ 3, 2 ]
	};

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = array( arr, opts );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isndarrayLike( out ) ) {
		b.fail( 'should return an ndarray' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::2d,instantiation:copy=true', function benchmark( b ) {
	var opts;
	var out;
	var arr;
	var i;

	arr = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	opts = {
		'copy': true,
		'shape': [ 3, 2 ]
	};

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = array( arr, opts );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isndarrayLike( out ) ) {
		b.fail( 'should return an ndarray' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::2d,instantiation:dtype=generic', function benchmark( b ) {
	var opts;
	var out;
	var arr;
	var i;

	arr = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	opts = {
		'dtype': 'generic',
		'shape': [ 3, 2 ]
	};

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = array( arr, opts );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isndarrayLike( out ) ) {
		b.fail( 'should return an ndarray' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::2d,instantiation:dtype=generic,flatten=true', function benchmark( b ) {
	var opts;
	var out;
	var arr;
	var i;

	arr = [ [ 1.0, 2.0 ], [ 3.0, 4.0 ], [ 5.0, 6.0 ] ];
	opts = {
		'dtype': 'generic',
		'flatten': true
	};

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = array( arr, opts );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isndarrayLike( out ) ) {
		b.fail( 'should return an ndarray' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::2d,instantiation:dtype=generic,flatten=false', function benchmark( b ) {
	var opts;
	var out;
	var arr;
	var i;

	arr = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	opts = {
		'dtype': 'generic',
		'flatten': false,
		'shape': [ 3, 2 ]
	};

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = array( arr, opts );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isndarrayLike( out ) ) {
		b.fail( 'should return an ndarray' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::3d,instantiation,linear_buffer', function benchmark( b ) {
	var opts;
	var out;
	var arr;
	var i;

	arr = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	opts = {
		'shape': [ 1, 3, 2 ]
	};

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = array( arr, opts );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isndarrayLike( out ) ) {
		b.fail( 'should return an ndarray' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::3d,instantiation,shape', function benchmark( b ) {
	var opts;
	var out;
	var i;

	opts = {
		'shape': [ 1, 3, 2 ]
	};

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = array( opts );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isndarrayLike( out ) ) {
		b.fail( 'should return an ndarray' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::3d,instantiation,ndarray', function benchmark( b ) {
	var opts;
	var out;
	var arr;
	var i;

	arr = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	opts = {
		'shape': [ 1, 3, 2 ]
	};
	arr = array( arr, opts );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = array( arr );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isndarrayLike( out ) ) {
		b.fail( 'should return an ndarray' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::3d,instantiation,no_cast', function benchmark( b ) {
	var opts;
	var out;
	var arr;
	var i;

	arr = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	opts = {
		'dtype': 'float32',
		'shape': [ 1, 3, 2 ]
	};

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = array( arr, opts );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isndarrayLike( out ) ) {
		b.fail( 'should return an ndarray' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::3d,instantiation,default_cast', function benchmark( b ) {
	var opts;
	var out;
	var arr;
	var i;

	arr = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	opts = {
		'shape': [ 1, 3, 2 ]
	};

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = array( arr, opts );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isndarrayLike( out ) ) {
		b.fail( 'should return an ndarray' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::3d,instantiation,dtype_cast', function benchmark( b ) {
	var opts;
	var out;
	var arr;
	var i;

	arr = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	opts = {
		'dtype': 'float64',
		'shape': [ 1, 3, 2 ]
	};

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = array( arr, opts );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isndarrayLike( out ) ) {
		b.fail( 'should return an ndarray' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::3d,instantiation:copy=false', function benchmark( b ) {
	var opts;
	var out;
	var arr;
	var i;

	arr = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	opts = {
		'copy': false,
		'shape': [ 1, 3, 2 ]
	};

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = array( arr, opts );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isndarrayLike( out ) ) {
		b.fail( 'should return an ndarray' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::3d,instantiation:copy=true', function benchmark( b ) {
	var opts;
	var out;
	var arr;
	var i;

	arr = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	opts = {
		'copy': true,
		'shape': [ 1, 3, 2 ]
	};

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = array( arr, opts );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isndarrayLike( out ) ) {
		b.fail( 'should return an ndarray' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::3d,instantiation:dtype=generic', function benchmark( b ) {
	var opts;
	var out;
	var arr;
	var i;

	arr = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	opts = {
		'dtype': 'generic',
		'shape': [ 1, 3, 2 ]
	};

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = array( arr, opts );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isndarrayLike( out ) ) {
		b.fail( 'should return an ndarray' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::3d,instantiation:dtype=generic,flatten=true', function benchmark( b ) {
	var opts;
	var out;
	var arr;
	var i;

	arr = [ [ [ 1.0, 2.0 ], [ 3.0, 4.0 ], [ 5.0, 6.0 ] ] ];
	opts = {
		'dtype': 'generic',
		'flatten': true
	};

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = array( arr, opts );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isndarrayLike( out ) ) {
		b.fail( 'should return an ndarray' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::3d,instantiation:dtype=generic,flatten=false', function benchmark( b ) {
	var opts;
	var out;
	var arr;
	var i;

	arr = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	opts = {
		'dtype': 'generic',
		'flatten': false,
		'shape': [ 1, 3, 2 ]
	};

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = array( arr, opts );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isndarrayLike( out ) ) {
		b.fail( 'should return an ndarray' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::4d,instantiation,linear_buffer', function benchmark( b ) {
	var opts;
	var out;
	var arr;
	var i;

	arr = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	opts = {
		'shape': [ 1, 1, 3, 2 ]
	};

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = array( arr, opts );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isndarrayLike( out ) ) {
		b.fail( 'should return an ndarray' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::4d,instantiation,shape', function benchmark( b ) {
	var opts;
	var out;
	var i;

	opts = {
		'shape': [ 1, 1, 3, 2 ]
	};

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = array( opts );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isndarrayLike( out ) ) {
		b.fail( 'should return an ndarray' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::4d,instantiation,ndarray', function benchmark( b ) {
	var opts;
	var out;
	var arr;
	var i;

	arr = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	opts = {
		'shape': [ 1, 1, 3, 2 ]
	};
	arr = array( arr, opts );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = array( arr );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isndarrayLike( out ) ) {
		b.fail( 'should return an ndarray' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::4d,instantiation,no_cast', function benchmark( b ) {
	var opts;
	var out;
	var arr;
	var i;

	arr = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	opts = {
		'dtype': 'float32',
		'shape': [ 1, 1, 3, 2 ]
	};

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = array( arr, opts );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isndarrayLike( out ) ) {
		b.fail( 'should return an ndarray' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::4d,instantiation,default_cast', function benchmark( b ) {
	var opts;
	var out;
	var arr;
	var i;

	arr = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	opts = {
		'shape': [ 1, 1, 3, 2 ]
	};

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = array( arr, opts );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isndarrayLike( out ) ) {
		b.fail( 'should return an ndarray' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::4d,instantiation,dtype_cast', function benchmark( b ) {
	var opts;
	var out;
	var arr;
	var i;

	arr = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	opts = {
		'dtype': 'float64',
		'shape': [ 1, 1, 3, 2 ]
	};

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = array( arr, opts );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isndarrayLike( out ) ) {
		b.fail( 'should return an ndarray' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::4d,instantiation:copy=false', function benchmark( b ) {
	var opts;
	var out;
	var arr;
	var i;

	arr = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	opts = {
		'copy': false,
		'shape': [ 1, 1, 3, 2 ]
	};

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = array( arr, opts );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isndarrayLike( out ) ) {
		b.fail( 'should return an ndarray' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::4d,instantiation:copy=true', function benchmark( b ) {
	var opts;
	var out;
	var arr;
	var i;

	arr = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	opts = {
		'copy': true,
		'shape': [ 1, 1, 3, 2 ]
	};

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = array( arr, opts );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isndarrayLike( out ) ) {
		b.fail( 'should return an ndarray' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::4d,instantiation:dtype=generic', function benchmark( b ) {
	var opts;
	var out;
	var arr;
	var i;

	arr = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	opts = {
		'dtype': 'generic',
		'shape': [ 1, 1, 3, 2 ]
	};

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = array( arr, opts );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isndarrayLike( out ) ) {
		b.fail( 'should return an ndarray' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::4d,instantiation:dtype=generic,flatten=true', function benchmark( b ) {
	var opts;
	var out;
	var arr;
	var i;

	arr = [ [ [ [ 1.0, 2.0 ], [ 3.0, 4.0 ], [ 5.0, 6.0 ] ] ] ];
	opts = {
		'dtype': 'generic',
		'flatten': true
	};

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = array( arr, opts );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isndarrayLike( out ) ) {
		b.fail( 'should return an ndarray' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::4d,instantiation:dtype=generic,flatten=false', function benchmark( b ) {
	var opts;
	var out;
	var arr;
	var i;

	arr = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	opts = {
		'dtype': 'generic',
		'flatten': false,
		'shape': [ 1, 1, 3, 2 ]
	};

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = array( arr, opts );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isndarrayLike( out ) ) {
		b.fail( 'should return an ndarray' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::5d,instantiation:ndmin=5', function benchmark( b ) {
	var opts;
	var out;
	var arr;
	var i;

	arr = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	opts = {
		'ndmin': 5
	};

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = array( arr, opts );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isndarrayLike( out ) ) {
		b.fail( 'should return an ndarray' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
