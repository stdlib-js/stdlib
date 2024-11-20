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
var pkg = require( './../package.json' ).name;
var ndarray = require( './../lib' );


// MAIN //

bench( pkg+'::1d,instantiation', function benchmark( b ) {
	var strides;
	var buffer;
	var offset;
	var shape;
	var order;
	var out;
	var i;

	buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	shape = [ 6 ];
	strides = [ 1 ];
	offset = 0;
	order = 'row-major';

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		buffer[ 0 ] = i;
		out = ndarray( 'generic', buffer, shape, strides, offset, order );
		if ( out.length === 0 ) {
			b.fail( 'should have a length greater than 0' );
		}
	}
	b.toc();
	if ( out.length === 0 ) {
		b.fail( 'should have a length greater than 0' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::1d,instantiation,new', function benchmark( b ) {
	var strides;
	var buffer;
	var offset;
	var shape;
	var order;
	var out;
	var i;

	buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	shape = [ 6 ];
	strides = [ 1 ];
	offset = 0;
	order = 'row-major';

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		buffer[ 0 ] = i;
		out = new ndarray( 'generic', buffer, shape, strides, offset, order );
		if ( out.length === 0 ) {
			b.fail( 'should have a length greater than 0' );
		}
	}
	b.toc();
	if ( out.length === 0 ) {
		b.fail( 'should have a length greater than 0' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::2d,instantiation', function benchmark( b ) {
	var strides;
	var buffer;
	var offset;
	var shape;
	var order;
	var out;
	var i;

	buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	shape = [ 3, 2 ];
	strides = [ 2, 1 ];
	offset = 0;
	order = 'row-major';

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		buffer[ 0 ] = i;
		out = ndarray( 'generic', buffer, shape, strides, offset, order );
		if ( out.length === 0 ) {
			b.fail( 'should have a length greater than 0' );
		}
	}
	b.toc();
	if ( out.length === 0 ) {
		b.fail( 'should have a length greater than 0' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::2d,instantiation,new', function benchmark( b ) {
	var strides;
	var buffer;
	var offset;
	var shape;
	var order;
	var out;
	var i;

	buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	shape = [ 3, 2 ];
	strides = [ 2, 1 ];
	offset = 0;
	order = 'row-major';

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		buffer[ 0 ] = i;
		out = new ndarray( 'generic', buffer, shape, strides, offset, order );
		if ( out.length === 0 ) {
			b.fail( 'should have a length greater than 0' );
		}
	}
	b.toc();
	if ( out.length === 0 ) {
		b.fail( 'should have a length greater than 0' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::3d,instantiation', function benchmark( b ) {
	var strides;
	var buffer;
	var offset;
	var shape;
	var order;
	var out;
	var i;

	buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	shape = [ 1, 3, 2 ];
	strides = [ 6, 2, 1 ];
	offset = 0;
	order = 'row-major';

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		buffer[ 0 ] = i;
		out = ndarray( 'generic', buffer, shape, strides, offset, order );
		if ( out.length === 0 ) {
			b.fail( 'should have a length greater than 0' );
		}
	}
	b.toc();
	if ( out.length === 0 ) {
		b.fail( 'should have a length greater than 0' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::3d,instantiation,new', function benchmark( b ) {
	var strides;
	var buffer;
	var offset;
	var shape;
	var order;
	var out;
	var i;

	buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	shape = [ 1, 3, 2 ];
	strides = [ 6, 2, 1 ];
	offset = 0;
	order = 'row-major';

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		buffer[ 0 ] = i;
		out = new ndarray( 'generic', buffer, shape, strides, offset, order );
		if ( out.length === 0 ) {
			b.fail( 'should have a length greater than 0' );
		}
	}
	b.toc();
	if ( out.length === 0 ) {
		b.fail( 'should have a length greater than 0' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::4d,instantiation', function benchmark( b ) {
	var strides;
	var buffer;
	var offset;
	var shape;
	var order;
	var out;
	var i;

	buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	shape = [ 1, 1, 3, 2 ];
	strides = [ 6, 6, 2, 1 ];
	offset = 0;
	order = 'row-major';

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		buffer[ 0 ] = i;
		out = ndarray( 'generic', buffer, shape, strides, offset, order );
		if ( out.length === 0 ) {
			b.fail( 'should have a length greater than 0' );
		}
	}
	b.toc();
	if ( out.length === 0 ) {
		b.fail( 'should have a length greater than 0' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::4d,instantiation,new', function benchmark( b ) {
	var strides;
	var buffer;
	var offset;
	var shape;
	var order;
	var out;
	var i;

	buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	shape = [ 1, 1, 3, 2 ];
	strides = [ 6, 6, 2, 1 ];
	offset = 0;
	order = 'row-major';

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		buffer[ 0 ] = i;
		out = new ndarray( 'generic', buffer, shape, strides, offset, order );
		if ( out.length === 0 ) {
			b.fail( 'should have a length greater than 0' );
		}
	}
	b.toc();
	if ( out.length === 0 ) {
		b.fail( 'should have a length greater than 0' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::5d,instantiation', function benchmark( b ) {
	var strides;
	var buffer;
	var offset;
	var shape;
	var order;
	var out;
	var i;

	buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	shape = [ 1, 1, 1, 3, 2 ];
	strides = [ 6, 6, 6, 2, 1 ];
	offset = 0;
	order = 'row-major';

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		buffer[ 0 ] = i;
		out = ndarray( 'generic', buffer, shape, strides, offset, order );
		if ( out.length === 0 ) {
			b.fail( 'should have a length greater than 0' );
		}
	}
	b.toc();
	if ( out.length === 0 ) {
		b.fail( 'should have a length greater than 0' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::5d,instantiation,new', function benchmark( b ) {
	var strides;
	var buffer;
	var offset;
	var shape;
	var order;
	var out;
	var i;

	buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	shape = [ 1, 1, 1, 3, 2 ];
	strides = [ 6, 6, 6, 2, 1 ];
	offset = 0;
	order = 'row-major';

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		buffer[ 0 ] = i;
		out = new ndarray( 'generic', buffer, shape, strides, offset, order );
		if ( out.length === 0 ) {
			b.fail( 'should have a length greater than 0' );
		}
	}
	b.toc();
	if ( out.length === 0 ) {
		b.fail( 'should have a length greater than 0' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
