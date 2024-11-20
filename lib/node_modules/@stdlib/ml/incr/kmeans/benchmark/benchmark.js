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
var randu = require( '@stdlib/random/base/randu' );
var ndarray = require( '@stdlib/ndarray/ctor' );
var Float64Array = require( '@stdlib/array/float64' );
var isMatrixLike = require( '@stdlib/assert/is-matrix-like' );
var isVectorLike = require( '@stdlib/assert/is-vector-like' );
var pkg = require( './../package.json' ).name;
var incrkmeans = require( './../lib' );


// MAIN //

bench( pkg+'::k,ndims', function benchmark( b ) {
	var f;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		f = incrkmeans( 2, 2 );
		if ( typeof f !== 'function' ) {
			b.fail( 'should return a function' );
		}
	}
	b.toc();
	if ( typeof f !== 'function' ) {
		b.fail( 'should return a function' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::initial_centroids', function benchmark( b ) {
	var centroids;
	var strides;
	var buffer;
	var shape;
	var f;
	var i;

	buffer = new Float64Array( [ 0.0, 0.0, 1.0, 1.0 ] );
	shape = [ 2, 2 ];
	strides = [ 2, 1 ];
	centroids = ndarray( 'float64', buffer, shape, strides, 0, 'row-major' );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		f = incrkmeans( centroids );
		if ( typeof f !== 'function' ) {
			b.fail( 'should return a function' );
		}
	}
	b.toc();
	if ( typeof f !== 'function' ) {
		b.fail( 'should return a function' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::accumulator:init=[forgy,10]', function benchmark( b ) {
	var strides;
	var buffer;
	var shape;
	var vec;
	var acc;
	var out;
	var i;

	buffer = new Float64Array( 2 );
	shape = [ 2 ];
	strides = [ 1 ];
	vec = ndarray( 'float64', buffer, shape, strides, 0, 'row-major' );

	acc = incrkmeans( 2, 2, {
		'init': [ 'forgy', 10 ]
	});

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		vec.set( 0, randu() );
		vec.set( 1, randu() );
		out = acc( vec );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( out !== null ) {
		if ( !isMatrixLike( out.centroids ) ) {
			b.fail( 'should be a matrix' );
		}
		if ( !isMatrixLike( out.stats ) ) {
			b.fail( 'should be a matrix' );
		}
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::accumulator:init=[forgy,100]', function benchmark( b ) {
	var strides;
	var buffer;
	var shape;
	var vec;
	var acc;
	var out;
	var i;

	buffer = new Float64Array( 2 );
	shape = [ 2 ];
	strides = [ 1 ];
	vec = ndarray( 'float64', buffer, shape, strides, 0, 'row-major' );

	acc = incrkmeans( 2, 2, {
		'init': [ 'forgy', 100 ]
	});

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		vec.set( 0, randu() );
		vec.set( 1, randu() );
		out = acc( vec );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( out !== null ) {
		if ( !isMatrixLike( out.centroids ) ) {
			b.fail( 'should be a matrix' );
		}
		if ( !isMatrixLike( out.stats ) ) {
			b.fail( 'should be a matrix' );
		}
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::accumulator:init=[forgy,1000]', function benchmark( b ) {
	var strides;
	var buffer;
	var shape;
	var vec;
	var acc;
	var out;
	var i;

	buffer = new Float64Array( 2 );
	shape = [ 2 ];
	strides = [ 1 ];
	vec = ndarray( 'float64', buffer, shape, strides, 0, 'row-major' );

	acc = incrkmeans( 2, 2, {
		'init': [ 'forgy', 1000 ]
	});

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		vec.set( 0, randu() );
		vec.set( 1, randu() );
		out = acc( vec );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( out !== null ) {
		if ( !isMatrixLike( out.centroids ) ) {
			b.fail( 'should be a matrix' );
		}
		if ( !isMatrixLike( out.stats ) ) {
			b.fail( 'should be a matrix' );
		}
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::accumulator:init=[sample,10]', function benchmark( b ) {
	var strides;
	var buffer;
	var shape;
	var vec;
	var acc;
	var out;
	var i;

	buffer = new Float64Array( 2 );
	shape = [ 2 ];
	strides = [ 1 ];
	vec = ndarray( 'float64', buffer, shape, strides, 0, 'row-major' );

	acc = incrkmeans( 2, 2, {
		'init': [ 'sample', 10 ]
	});

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		vec.set( 0, randu() );
		vec.set( 1, randu() );
		out = acc( vec );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( out !== null ) {
		if ( !isMatrixLike( out.centroids ) ) {
			b.fail( 'should be a matrix' );
		}
		if ( !isMatrixLike( out.stats ) ) {
			b.fail( 'should be a matrix' );
		}
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::accumulator:init=[sample,100]', function benchmark( b ) {
	var strides;
	var buffer;
	var shape;
	var vec;
	var acc;
	var out;
	var i;

	buffer = new Float64Array( 2 );
	shape = [ 2 ];
	strides = [ 1 ];
	vec = ndarray( 'float64', buffer, shape, strides, 0, 'row-major' );

	acc = incrkmeans( 2, 2, {
		'init': [ 'sample', 100 ]
	});

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		vec.set( 0, randu() );
		vec.set( 1, randu() );
		out = acc( vec );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( out !== null ) {
		if ( !isMatrixLike( out.centroids ) ) {
			b.fail( 'should be a matrix' );
		}
		if ( !isMatrixLike( out.stats ) ) {
			b.fail( 'should be a matrix' );
		}
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::accumulator:init=[sample,1000]', function benchmark( b ) {
	var strides;
	var buffer;
	var shape;
	var vec;
	var acc;
	var out;
	var i;

	buffer = new Float64Array( 2 );
	shape = [ 2 ];
	strides = [ 1 ];
	vec = ndarray( 'float64', buffer, shape, strides, 0, 'row-major' );

	acc = incrkmeans( 2, 2, {
		'init': [ 'sample', 1000 ]
	});

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		vec.set( 0, randu() );
		vec.set( 1, randu() );
		out = acc( vec );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( out !== null ) {
		if ( !isMatrixLike( out.centroids ) ) {
			b.fail( 'should be a matrix' );
		}
		if ( !isMatrixLike( out.stats ) ) {
			b.fail( 'should be a matrix' );
		}
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::accumulator:init=[kmeans++,10]', function benchmark( b ) {
	var strides;
	var buffer;
	var shape;
	var vec;
	var acc;
	var out;
	var i;

	buffer = new Float64Array( 2 );
	shape = [ 2 ];
	strides = [ 1 ];
	vec = ndarray( 'float64', buffer, shape, strides, 0, 'row-major' );

	acc = incrkmeans( 2, 2, {
		'init': [ 'kmeans++', 10 ]
	});

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		vec.set( 0, randu() );
		vec.set( 1, randu() );
		out = acc( vec );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( out !== null ) {
		if ( !isMatrixLike( out.centroids ) ) {
			b.fail( 'should be a matrix' );
		}
		if ( !isMatrixLike( out.stats ) ) {
			b.fail( 'should be a matrix' );
		}
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::accumulator:init=[kmeans++,100]', function benchmark( b ) {
	var strides;
	var buffer;
	var shape;
	var vec;
	var acc;
	var out;
	var i;

	buffer = new Float64Array( 2 );
	shape = [ 2 ];
	strides = [ 1 ];
	vec = ndarray( 'float64', buffer, shape, strides, 0, 'row-major' );

	acc = incrkmeans( 2, 2, {
		'init': [ 'kmeans++', 100 ]
	});

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		vec.set( 0, randu() );
		vec.set( 1, randu() );
		out = acc( vec );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( out !== null ) {
		if ( !isMatrixLike( out.centroids ) ) {
			b.fail( 'should be a matrix' );
		}
		if ( !isMatrixLike( out.stats ) ) {
			b.fail( 'should be a matrix' );
		}
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::accumulator:init=[kmeans++,1000]', function benchmark( b ) {
	var strides;
	var buffer;
	var shape;
	var vec;
	var acc;
	var out;
	var i;

	buffer = new Float64Array( 2 );
	shape = [ 2 ];
	strides = [ 1 ];
	vec = ndarray( 'float64', buffer, shape, strides, 0, 'row-major' );

	acc = incrkmeans( 2, 2, {
		'init': [ 'kmeans++', 1000 ]
	});

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		vec.set( 0, randu() );
		vec.set( 1, randu() );
		out = acc( vec );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( out !== null ) {
		if ( !isMatrixLike( out.centroids ) ) {
			b.fail( 'should be a matrix' );
		}
		if ( !isMatrixLike( out.stats ) ) {
			b.fail( 'should be a matrix' );
		}
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::accumulator:init=[kmeans++,1000,1]', function benchmark( b ) {
	var strides;
	var buffer;
	var shape;
	var vec;
	var acc;
	var out;
	var i;

	buffer = new Float64Array( 2 );
	shape = [ 2 ];
	strides = [ 1 ];
	vec = ndarray( 'float64', buffer, shape, strides, 0, 'row-major' );

	acc = incrkmeans( 2, 2, {
		'init': [ 'kmeans++', 1000, 1 ]
	});

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		vec.set( 0, randu() );
		vec.set( 1, randu() );
		out = acc( vec );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( out !== null ) {
		if ( !isMatrixLike( out.centroids ) ) {
			b.fail( 'should be a matrix' );
		}
		if ( !isMatrixLike( out.stats ) ) {
			b.fail( 'should be a matrix' );
		}
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::accumulator:init=[kmeans++,1000,10]', function benchmark( b ) {
	var strides;
	var buffer;
	var shape;
	var vec;
	var acc;
	var out;
	var i;

	buffer = new Float64Array( 2 );
	shape = [ 2 ];
	strides = [ 1 ];
	vec = ndarray( 'float64', buffer, shape, strides, 0, 'row-major' );

	acc = incrkmeans( 2, 2, {
		'init': [ 'kmeans++', 1000, 10 ]
	});

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		vec.set( 0, randu() );
		vec.set( 1, randu() );
		out = acc( vec );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( out !== null ) {
		if ( !isMatrixLike( out.centroids ) ) {
			b.fail( 'should be a matrix' );
		}
		if ( !isMatrixLike( out.stats ) ) {
			b.fail( 'should be a matrix' );
		}
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::accumulator:init=[kmeans++,1000,100]', function benchmark( b ) {
	var strides;
	var buffer;
	var shape;
	var vec;
	var acc;
	var out;
	var i;

	buffer = new Float64Array( 2 );
	shape = [ 2 ];
	strides = [ 1 ];
	vec = ndarray( 'float64', buffer, shape, strides, 0, 'row-major' );

	acc = incrkmeans( 2, 2, {
		'init': [ 'kmeans++', 1000, 100 ]
	});

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		vec.set( 0, randu() );
		vec.set( 1, randu() );
		out = acc( vec );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( out !== null ) {
		if ( !isMatrixLike( out.centroids ) ) {
			b.fail( 'should be a matrix' );
		}
		if ( !isMatrixLike( out.stats ) ) {
			b.fail( 'should be a matrix' );
		}
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::accumulator:init=[kmeans++,100],metric=euclidean,normalize=false', function benchmark( b ) {
	var strides;
	var buffer;
	var shape;
	var vec;
	var acc;
	var out;
	var i;

	buffer = new Float64Array( 2 );
	shape = [ 2 ];
	strides = [ 1 ];
	vec = ndarray( 'float64', buffer, shape, strides, 0, 'row-major' );

	acc = incrkmeans( 2, 2, {
		'init': [ 'kmeans++', 100 ],
		'metric': 'euclidean',
		'normalize': false
	});

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		vec.set( 0, randu() );
		vec.set( 1, randu() );
		out = acc( vec );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( out !== null ) {
		if ( !isMatrixLike( out.centroids ) ) {
			b.fail( 'should be a matrix' );
		}
		if ( !isMatrixLike( out.stats ) ) {
			b.fail( 'should be a matrix' );
		}
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::accumulator:init=[kmeans++,100],metric=cosine,normalize=true,copy=false', function benchmark( b ) {
	var strides;
	var buffer;
	var shape;
	var vec;
	var acc;
	var out;
	var i;

	buffer = new Float64Array( 2 );
	shape = [ 2 ];
	strides = [ 1 ];
	vec = ndarray( 'float64', buffer, shape, strides, 0, 'row-major' );

	acc = incrkmeans( 2, 2, {
		'init': [ 'kmeans++', 100 ],
		'metric': 'cosine',
		'normalize': true,
		'copy': false
	});

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		vec.set( 0, randu() );
		vec.set( 1, randu() );
		out = acc( vec );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( out !== null ) {
		if ( !isMatrixLike( out.centroids ) ) {
			b.fail( 'should be a matrix' );
		}
		if ( !isMatrixLike( out.stats ) ) {
			b.fail( 'should be a matrix' );
		}
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::accumulator:init=[kmeans++,100],metric=cosine,normalize=true,copy=true', function benchmark( b ) {
	var strides;
	var buffer;
	var shape;
	var vec;
	var acc;
	var out;
	var i;

	buffer = new Float64Array( 2 );
	shape = [ 2 ];
	strides = [ 1 ];
	vec = ndarray( 'float64', buffer, shape, strides, 0, 'row-major' );

	acc = incrkmeans( 2, 2, {
		'init': [ 'kmeans++', 100 ],
		'metric': 'cosine',
		'normalize': true,
		'copy': true
	});

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		vec.set( 0, randu() );
		vec.set( 1, randu() );
		out = acc( vec );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( out !== null ) {
		if ( !isMatrixLike( out.centroids ) ) {
			b.fail( 'should be a matrix' );
		}
		if ( !isMatrixLike( out.stats ) ) {
			b.fail( 'should be a matrix' );
		}
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::accumulator:init=[kmeans++,100],metric=correlation,normalize=true,copy=false', function benchmark( b ) {
	var strides;
	var buffer;
	var shape;
	var vec;
	var acc;
	var out;
	var i;

	buffer = new Float64Array( 2 );
	shape = [ 2 ];
	strides = [ 1 ];
	vec = ndarray( 'float64', buffer, shape, strides, 0, 'row-major' );

	acc = incrkmeans( 2, 2, {
		'init': [ 'kmeans++', 100 ],
		'metric': 'correlation',
		'normalize': true,
		'copy': false
	});

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		vec.set( 0, randu() );
		vec.set( 1, randu() );
		out = acc( vec );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( out !== null ) {
		if ( !isMatrixLike( out.centroids ) ) {
			b.fail( 'should be a matrix' );
		}
		if ( !isMatrixLike( out.stats ) ) {
			b.fail( 'should be a matrix' );
		}
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::accumulator:init=[kmeans++,100],metric=correlation,normalize=true,copy=true', function benchmark( b ) {
	var strides;
	var buffer;
	var shape;
	var vec;
	var acc;
	var out;
	var i;

	buffer = new Float64Array( 2 );
	shape = [ 2 ];
	strides = [ 1 ];
	vec = ndarray( 'float64', buffer, shape, strides, 0, 'row-major' );

	acc = incrkmeans( 2, 2, {
		'init': [ 'kmeans++', 100 ],
		'metric': 'correlation',
		'normalize': true,
		'copy': true
	});

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		vec.set( 0, randu() );
		vec.set( 1, randu() );
		out = acc( vec );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( out !== null ) {
		if ( !isMatrixLike( out.centroids ) ) {
			b.fail( 'should be a matrix' );
		}
		if ( !isMatrixLike( out.stats ) ) {
			b.fail( 'should be a matrix' );
		}
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::accumulator:predict', function benchmark( b ) {
	var strides;
	var buffer;
	var shape;
	var vec;
	var mat;
	var acc;
	var out;
	var i;

	buffer = new Float64Array( 2 );
	shape = [ 2 ];
	strides = [ 1 ];
	vec = ndarray( 'float64', buffer, shape, strides, 0, 'row-major' );

	buffer = new Float64Array( 2 );
	shape = [ 1, 2 ];
	strides = [ 2, 1 ];
	mat = ndarray( 'float64', buffer, shape, strides, 0, 'row-major' );

	acc = incrkmeans( 2, 2, {
		'init': [ 'kmeans++', 100 ]
	});

	// Update the accumulator, providing enough data for the accumulator to compute centroids...
	for ( i = 0; i < 1000; i++ ) {
		vec.set( 0, randu() );
		vec.set( 1, randu() );
		acc( vec );
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		mat.set( 0, 0, randu() );
		mat.set( 0, 1, randu() );
		out = acc.predict( mat );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isVectorLike( out ) ) {
		b.fail( 'should be a vector' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::accumulator,reuse:predict', function benchmark( b ) {
	var strides;
	var buffer;
	var shape;
	var vec;
	var mat;
	var acc;
	var out;
	var o;
	var i;

	buffer = new Float64Array( 2 );
	shape = [ 2 ];
	strides = [ 1 ];
	vec = ndarray( 'float64', buffer, shape, strides, 0, 'row-major' );

	buffer = new Float64Array( 2 );
	shape = [ 1, 2 ];
	strides = [ 2, 1 ];
	mat = ndarray( 'float64', buffer, shape, strides, 0, 'row-major' );

	buffer = new Float64Array( 1 );
	shape = [ 1 ];
	strides = [ 1 ];
	out = ndarray( 'float64', buffer, shape, strides, 0, 'row-major' );

	acc = incrkmeans( 2, 2, {
		'init': [ 'kmeans++', 100 ]
	});

	// Update the accumulator, providing enough data for the accumulator to compute centroids...
	for ( i = 0; i < 1000; i++ ) {
		vec.set( 0, randu() );
		vec.set( 1, randu() );
		acc( vec );
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		mat.set( 0, 0, randu() );
		mat.set( 0, 1, randu() );
		o = acc.predict( out, mat );
		if ( typeof o !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isVectorLike( o ) ) {
		b.fail( 'should be a vector' );
	}
	if ( o !== out ) {
		b.fail( 'should return output vector' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::accumulator,reuse:predict:metric=euclidean,normalize=false,copy=false', function benchmark( b ) {
	var strides;
	var buffer;
	var shape;
	var vec;
	var mat;
	var acc;
	var out;
	var o;
	var i;

	buffer = new Float64Array( 2 );
	shape = [ 2 ];
	strides = [ 1 ];
	vec = ndarray( 'float64', buffer, shape, strides, 0, 'row-major' );

	buffer = new Float64Array( 2 );
	shape = [ 1, 2 ];
	strides = [ 2, 1 ];
	mat = ndarray( 'float64', buffer, shape, strides, 0, 'row-major' );

	buffer = new Float64Array( 1 );
	shape = [ 1 ];
	strides = [ 1 ];
	out = ndarray( 'float64', buffer, shape, strides, 0, 'row-major' );

	acc = incrkmeans( 2, 2, {
		'init': [ 'kmeans++', 100 ],
		'metric': 'euclidean',
		'normalize': false,
		'copy': false
	});

	// Update the accumulator, providing enough data for the accumulator to compute centroids...
	for ( i = 0; i < 1000; i++ ) {
		vec.set( 0, randu() );
		vec.set( 1, randu() );
		acc( vec );
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		mat.set( 0, 0, randu() );
		mat.set( 0, 1, randu() );
		o = acc.predict( out, mat );
		if ( typeof o !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isVectorLike( o ) ) {
		b.fail( 'should be a vector' );
	}
	if ( o !== out ) {
		b.fail( 'should return output vector' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::accumulator,reuse:predict:metric=cosine,normalize=true,copy=false', function benchmark( b ) {
	var strides;
	var buffer;
	var shape;
	var vec;
	var mat;
	var acc;
	var out;
	var o;
	var i;

	buffer = new Float64Array( 2 );
	shape = [ 2 ];
	strides = [ 1 ];
	vec = ndarray( 'float64', buffer, shape, strides, 0, 'row-major' );

	buffer = new Float64Array( 2 );
	shape = [ 1, 2 ];
	strides = [ 2, 1 ];
	mat = ndarray( 'float64', buffer, shape, strides, 0, 'row-major' );

	buffer = new Float64Array( 1 );
	shape = [ 1 ];
	strides = [ 1 ];
	out = ndarray( 'float64', buffer, shape, strides, 0, 'row-major' );

	acc = incrkmeans( 2, 2, {
		'init': [ 'kmeans++', 100 ],
		'metric': 'cosine',
		'normalize': true,
		'copy': false
	});

	// Update the accumulator, providing enough data for the accumulator to compute centroids...
	for ( i = 0; i < 1000; i++ ) {
		vec.set( 0, randu() );
		vec.set( 1, randu() );
		acc( vec );
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		mat.set( 0, 0, randu() );
		mat.set( 0, 1, randu() );
		o = acc.predict( out, mat );
		if ( typeof o !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isVectorLike( o ) ) {
		b.fail( 'should be a vector' );
	}
	if ( o !== out ) {
		b.fail( 'should return output vector' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::accumulator,reuse:predict:metric=cosine,normalize=true,copy=true', function benchmark( b ) {
	var strides;
	var buffer;
	var shape;
	var vec;
	var mat;
	var acc;
	var out;
	var o;
	var i;

	buffer = new Float64Array( 2 );
	shape = [ 2 ];
	strides = [ 1 ];
	vec = ndarray( 'float64', buffer, shape, strides, 0, 'row-major' );

	buffer = new Float64Array( 2 );
	shape = [ 1, 2 ];
	strides = [ 2, 1 ];
	mat = ndarray( 'float64', buffer, shape, strides, 0, 'row-major' );

	buffer = new Float64Array( 1 );
	shape = [ 1 ];
	strides = [ 1 ];
	out = ndarray( 'float64', buffer, shape, strides, 0, 'row-major' );

	acc = incrkmeans( 2, 2, {
		'init': [ 'kmeans++', 100 ],
		'metric': 'cosine',
		'normalize': true,
		'copy': true
	});

	// Update the accumulator, providing enough data for the accumulator to compute centroids...
	for ( i = 0; i < 1000; i++ ) {
		vec.set( 0, randu() );
		vec.set( 1, randu() );
		acc( vec );
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		mat.set( 0, 0, randu() );
		mat.set( 0, 1, randu() );
		o = acc.predict( out, mat );
		if ( typeof o !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isVectorLike( o ) ) {
		b.fail( 'should be a vector' );
	}
	if ( o !== out ) {
		b.fail( 'should return output vector' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::accumulator,reuse:predict:metric=correlation,normalize=true,copy=false', function benchmark( b ) {
	var strides;
	var buffer;
	var shape;
	var vec;
	var mat;
	var acc;
	var out;
	var o;
	var i;

	buffer = new Float64Array( 2 );
	shape = [ 2 ];
	strides = [ 1 ];
	vec = ndarray( 'float64', buffer, shape, strides, 0, 'row-major' );

	buffer = new Float64Array( 2 );
	shape = [ 1, 2 ];
	strides = [ 2, 1 ];
	mat = ndarray( 'float64', buffer, shape, strides, 0, 'row-major' );

	buffer = new Float64Array( 1 );
	shape = [ 1 ];
	strides = [ 1 ];
	out = ndarray( 'float64', buffer, shape, strides, 0, 'row-major' );

	acc = incrkmeans( 2, 2, {
		'init': [ 'kmeans++', 100 ],
		'metric': 'correlation',
		'normalize': true,
		'copy': false
	});

	// Update the accumulator, providing enough data for the accumulator to compute centroids...
	for ( i = 0; i < 1000; i++ ) {
		vec.set( 0, randu() );
		vec.set( 1, randu() );
		acc( vec );
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		mat.set( 0, 0, randu() );
		mat.set( 0, 1, randu() );
		o = acc.predict( out, mat );
		if ( typeof o !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isVectorLike( o ) ) {
		b.fail( 'should be a vector' );
	}
	if ( o !== out ) {
		b.fail( 'should return output vector' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::accumulator,reuse:predict:metric=correlation,normalize=true,copy=true', function benchmark( b ) {
	var strides;
	var buffer;
	var shape;
	var vec;
	var mat;
	var acc;
	var out;
	var o;
	var i;

	buffer = new Float64Array( 2 );
	shape = [ 2 ];
	strides = [ 1 ];
	vec = ndarray( 'float64', buffer, shape, strides, 0, 'row-major' );

	buffer = new Float64Array( 2 );
	shape = [ 1, 2 ];
	strides = [ 2, 1 ];
	mat = ndarray( 'float64', buffer, shape, strides, 0, 'row-major' );

	buffer = new Float64Array( 1 );
	shape = [ 1 ];
	strides = [ 1 ];
	out = ndarray( 'float64', buffer, shape, strides, 0, 'row-major' );

	acc = incrkmeans( 2, 2, {
		'init': [ 'kmeans++', 100 ],
		'metric': 'correlation',
		'normalize': true,
		'copy': true
	});

	// Update the accumulator, providing enough data for the accumulator to compute centroids...
	for ( i = 0; i < 1000; i++ ) {
		vec.set( 0, randu() );
		vec.set( 1, randu() );
		acc( vec );
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		mat.set( 0, 0, randu() );
		mat.set( 0, 1, randu() );
		o = acc.predict( out, mat );
		if ( typeof o !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isVectorLike( o ) ) {
		b.fail( 'should be a vector' );
	}
	if ( o !== out ) {
		b.fail( 'should return output vector' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
