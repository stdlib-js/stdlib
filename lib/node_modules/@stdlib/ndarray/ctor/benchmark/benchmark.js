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
var floor = require( '@stdlib/math/base/special/floor' );
var pkg = require( './../package.json' ).name;
var ndarray = require( './../lib' );


// MAIN //

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
		buffer[ 0 ] = randu();
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
		buffer[ 0 ] = randu();
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
		buffer[ 0 ] = randu();
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
		buffer[ 0 ] = randu();
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
		buffer[ 0 ] = randu();
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
		buffer[ 0 ] = randu();
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
		buffer[ 0 ] = randu();
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
		buffer[ 0 ] = randu();
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

bench( pkg+'::get:byteLength', function benchmark( b ) {
	var strides;
	var buffer;
	var offset;
	var shape;
	var order;
	var out;
	var v;
	var i;

	buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	shape = [ 3, 2 ];
	strides = [ 2, 1 ];
	offset = 0;
	order = 'row-major';

	out = ndarray( 'generic', buffer, shape, strides, offset, order );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = out.byteLength;
		if ( v !== null ) {
			b.fail( 'should return null' );
		}
	}
	b.toc();
	if ( v !== null ) {
		b.fail( 'should return null' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::get:_byteLength', function benchmark( b ) {
	var strides;
	var buffer;
	var offset;
	var shape;
	var order;
	var out;
	var v;
	var i;

	buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	shape = [ 3, 2 ];
	strides = [ 2, 1 ];
	offset = 0;
	order = 'row-major';

	out = ndarray( 'generic', buffer, shape, strides, offset, order );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = out._byteLength; // eslint-disable-line no-underscore-dangle
		if ( v !== null ) {
			b.fail( 'should return null' );
		}
	}
	b.toc();
	if ( v !== null ) {
		b.fail( 'should return null' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::get:BYTES_PER_ELEMENT', function benchmark( b ) {
	var strides;
	var buffer;
	var offset;
	var shape;
	var order;
	var out;
	var v;
	var i;

	buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	shape = [ 3, 2 ];
	strides = [ 2, 1 ];
	offset = 0;
	order = 'row-major';

	out = ndarray( 'generic', buffer, shape, strides, offset, order );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = out.BYTES_PER_ELEMENT;
		if ( v !== null ) {
			b.fail( 'should return null' );
		}
	}
	b.toc();
	if ( v !== null ) {
		b.fail( 'should return null' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::get:data', function benchmark( b ) {
	var strides;
	var buffer;
	var offset;
	var shape;
	var order;
	var out;
	var v;
	var i;

	buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	shape = [ 3, 2 ];
	strides = [ 2, 1 ];
	offset = 0;
	order = 'row-major';

	out = ndarray( 'generic', buffer, shape, strides, offset, order );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = out.data;
		if ( v.length !== 6 ) {
			b.fail( 'should return expected length' );
		}
	}
	b.toc();
	if ( v.length !== 6 ) {
		b.fail( 'should return expected length' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::get:_buffer', function benchmark( b ) {
	var strides;
	var buffer;
	var offset;
	var shape;
	var order;
	var out;
	var v;
	var i;

	buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	shape = [ 3, 2 ];
	strides = [ 2, 1 ];
	offset = 0;
	order = 'row-major';

	out = ndarray( 'generic', buffer, shape, strides, offset, order );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = out._buffer; // eslint-disable-line no-underscore-dangle
		if ( v.length !== 6 ) {
			b.fail( 'should return expected length' );
		}
	}
	b.toc();
	if ( v.length !== 6 ) {
		b.fail( 'should return expected length' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::get:dtype', function benchmark( b ) {
	var strides;
	var buffer;
	var offset;
	var shape;
	var order;
	var out;
	var v;
	var i;

	buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	shape = [ 3, 2 ];
	strides = [ 2, 1 ];
	offset = 0;
	order = 'row-major';

	out = ndarray( 'generic', buffer, shape, strides, offset, order );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = out.dtype;
		if ( v !== 'generic' ) {
			b.fail( 'should return expected data type' );
		}
	}
	b.toc();
	if ( v !== 'generic' ) {
		b.fail( 'should return expected data type' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::get:flags', function benchmark( b ) {
	var strides;
	var buffer;
	var offset;
	var shape;
	var order;
	var out;
	var v;
	var i;

	buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	shape = [ 3, 2 ];
	strides = [ 2, 1 ];
	offset = 0;
	order = 'row-major';

	out = ndarray( 'generic', buffer, shape, strides, offset, order );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = out.flags;
		if ( typeof v !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( typeof v !== 'object' ) {
		b.fail( 'should return an object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::get:_flags', function benchmark( b ) {
	var strides;
	var buffer;
	var offset;
	var shape;
	var order;
	var out;
	var v;
	var i;

	buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	shape = [ 3, 2 ];
	strides = [ 2, 1 ];
	offset = 0;
	order = 'row-major';

	out = ndarray( 'generic', buffer, shape, strides, offset, order );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = out._flags; // eslint-disable-line no-underscore-dangle
		if ( typeof v !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( typeof v !== 'object' ) {
		b.fail( 'should return an object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::get:length', function benchmark( b ) {
	var strides;
	var buffer;
	var offset;
	var shape;
	var order;
	var out;
	var v;
	var i;

	buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	shape = [ 3, 2 ];
	strides = [ 2, 1 ];
	offset = 0;
	order = 'row-major';

	out = ndarray( 'generic', buffer, shape, strides, offset, order );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = out.length;
		if ( v !== buffer.length ) {
			b.fail( 'should return expected length' );
		}
	}
	b.toc();
	if ( v !== buffer.length ) {
		b.fail( 'should return expected length' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::get:_length', function benchmark( b ) {
	var strides;
	var buffer;
	var offset;
	var shape;
	var order;
	var out;
	var v;
	var i;

	buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	shape = [ 3, 2 ];
	strides = [ 2, 1 ];
	offset = 0;
	order = 'row-major';

	out = ndarray( 'generic', buffer, shape, strides, offset, order );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = out._length; // eslint-disable-line no-underscore-dangle
		if ( v !== buffer.length ) {
			b.fail( 'should return expected length' );
		}
	}
	b.toc();
	if ( v !== buffer.length ) {
		b.fail( 'should return expected length' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::get:ndims', function benchmark( b ) {
	var strides;
	var buffer;
	var offset;
	var shape;
	var order;
	var out;
	var v;
	var i;

	buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	shape = [ 3, 2 ];
	strides = [ 2, 1 ];
	offset = 0;
	order = 'row-major';

	out = ndarray( 'generic', buffer, shape, strides, offset, order );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = out.ndims;
		if ( v !== shape.length ) {
			b.fail( 'should return expected number of dimensions' );
		}
	}
	b.toc();
	if ( v !== shape.length ) {
		b.fail( 'should return expected number of dimensions' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::get:offset', function benchmark( b ) {
	var strides;
	var buffer;
	var offset;
	var shape;
	var order;
	var out;
	var v;
	var i;

	buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	shape = [ 3, 2 ];
	strides = [ 2, 1 ];
	offset = 0;
	order = 'row-major';

	out = ndarray( 'generic', buffer, shape, strides, offset, order );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = out.offset;
		if ( v !== offset ) {
			b.fail( 'should return expected offset' );
		}
	}
	b.toc();
	if ( v !== offset ) {
		b.fail( 'should return expected offset' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::get:_offset', function benchmark( b ) {
	var strides;
	var buffer;
	var offset;
	var shape;
	var order;
	var out;
	var v;
	var i;

	buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	shape = [ 3, 2 ];
	strides = [ 2, 1 ];
	offset = 0;
	order = 'row-major';

	out = ndarray( 'generic', buffer, shape, strides, offset, order );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = out._offset; // eslint-disable-line no-underscore-dangle
		if ( v !== offset ) {
			b.fail( 'should return expected offset' );
		}
	}
	b.toc();
	if ( v !== offset ) {
		b.fail( 'should return expected offset' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::get:order', function benchmark( b ) {
	var strides;
	var buffer;
	var offset;
	var shape;
	var order;
	var out;
	var v;
	var i;

	buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	shape = [ 3, 2 ];
	strides = [ 2, 1 ];
	offset = 0;
	order = 'row-major';

	out = ndarray( 'generic', buffer, shape, strides, offset, order );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = out.order;
		if ( v !== order ) {
			b.fail( 'should return expected order' );
		}
	}
	b.toc();
	if ( v !== order ) {
		b.fail( 'should return expected order' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::get:_order', function benchmark( b ) {
	var strides;
	var buffer;
	var offset;
	var shape;
	var order;
	var out;
	var v;
	var i;

	buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	shape = [ 3, 2 ];
	strides = [ 2, 1 ];
	offset = 0;
	order = 'row-major';

	out = ndarray( 'generic', buffer, shape, strides, offset, order );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = out._order; // eslint-disable-line no-underscore-dangle
		if ( v !== order ) {
			b.fail( 'should return expected order' );
		}
	}
	b.toc();
	if ( v !== order ) {
		b.fail( 'should return expected order' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::get:shape', function benchmark( b ) {
	var strides;
	var buffer;
	var offset;
	var shape;
	var order;
	var out;
	var v;
	var i;

	buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	shape = [ 3, 2 ];
	strides = [ 2, 1 ];
	offset = 0;
	order = 'row-major';

	out = ndarray( 'generic', buffer, shape, strides, offset, order );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = out.shape;
		if ( v.length !== shape.length ) {
			b.fail( 'should return expected length' );
		}
	}
	b.toc();
	if ( v.length !== shape.length ) {
		b.fail( 'should return expected length' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::get:_shape', function benchmark( b ) {
	var strides;
	var buffer;
	var offset;
	var shape;
	var order;
	var out;
	var v;
	var i;

	buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	shape = [ 3, 2 ];
	strides = [ 2, 1 ];
	offset = 0;
	order = 'row-major';

	out = ndarray( 'generic', buffer, shape, strides, offset, order );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = out._shape; // eslint-disable-line no-underscore-dangle
		if ( v.length !== shape.length ) {
			b.fail( 'should return expected length' );
		}
	}
	b.toc();
	if ( v.length !== shape.length ) {
		b.fail( 'should return expected length' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::get:strides', function benchmark( b ) {
	var strides;
	var buffer;
	var offset;
	var shape;
	var order;
	var out;
	var v;
	var i;

	buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	shape = [ 3, 2 ];
	strides = [ 2, 1 ];
	offset = 0;
	order = 'row-major';

	out = ndarray( 'generic', buffer, shape, strides, offset, order );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = out.strides;
		if ( v.length !== strides.length ) {
			b.fail( 'should return expected length' );
		}
	}
	b.toc();
	if ( v.length !== strides.length ) {
		b.fail( 'should return expected length' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::get:_strides', function benchmark( b ) {
	var strides;
	var buffer;
	var offset;
	var shape;
	var order;
	var out;
	var v;
	var i;

	buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	shape = [ 3, 2 ];
	strides = [ 2, 1 ];
	offset = 0;
	order = 'row-major';

	out = ndarray( 'generic', buffer, shape, strides, offset, order );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = out._strides; // eslint-disable-line no-underscore-dangle
		if ( v.length !== strides.length ) {
			b.fail( 'should return expected length' );
		}
	}
	b.toc();
	if ( v.length !== strides.length ) {
		b.fail( 'should return expected length' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::1d:get', function benchmark( b ) {
	var strides;
	var buffer;
	var offset;
	var shape;
	var order;
	var out;
	var v;
	var i;

	buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	shape = [ 6 ];
	strides = [ 1 ];
	offset = 0;
	order = 'row-major';

	out = ndarray( 'generic', buffer, shape, strides, offset, order );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		buffer[ 1 ] = randu();
		v = out.get( floor( randu()*6.0 ) );
		if ( v !== v ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( v !== v ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::1d:get:mode=wrap', function benchmark( b ) {
	var strides;
	var buffer;
	var offset;
	var shape;
	var order;
	var opts;
	var out;
	var v;
	var i;

	opts = {
		'mode': 'wrap'
	};

	buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	shape = [ 6 ];
	strides = [ 1 ];
	offset = 0;
	order = 'row-major';

	out = ndarray( 'generic', buffer, shape, strides, offset, order, opts );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		buffer[ 1 ] = randu();
		v = out.get( floor( randu()*20.0 ) - 10.0 );
		if ( v !== v ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( v !== v ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::1d:get:mode=clamp', function benchmark( b ) {
	var strides;
	var buffer;
	var offset;
	var shape;
	var order;
	var opts;
	var out;
	var v;
	var i;

	opts = {
		'mode': 'clamp'
	};

	buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	shape = [ 6 ];
	strides = [ 1 ];
	offset = 0;
	order = 'row-major';

	out = ndarray( 'generic', buffer, shape, strides, offset, order, opts );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		buffer[ 1 ] = randu();
		v = out.get( floor( randu()*20.0 ) - 10.0 );
		if ( v !== v ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( v !== v ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::2d:get', function benchmark( b ) {
	var strides;
	var buffer;
	var offset;
	var shape;
	var order;
	var out;
	var v;
	var i;

	buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	shape = [ 3, 2 ];
	strides = [ 2, 1 ];
	offset = 0;
	order = 'row-major';

	out = ndarray( 'generic', buffer, shape, strides, offset, order );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		buffer[ 1 ] = randu();
		v = out.get( floor( randu()*3.0 ), 1 );
		if ( v !== v ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( v !== v ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::2d:get:mode=wrap', function benchmark( b ) {
	var strides;
	var buffer;
	var offset;
	var shape;
	var order;
	var opts;
	var out;
	var v;
	var i;

	opts = {
		'mode': 'wrap'
	};

	buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	shape = [ 3, 2 ];
	strides = [ 2, 1 ];
	offset = 0;
	order = 'row-major';

	out = ndarray( 'generic', buffer, shape, strides, offset, order, opts );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		buffer[ 1 ] = randu();
		v = out.get( floor( randu()*30.0 ) - 15.0, 1 );
		if ( v !== v ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( v !== v ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::2d:get:mode=clamp', function benchmark( b ) {
	var strides;
	var buffer;
	var offset;
	var shape;
	var order;
	var opts;
	var out;
	var v;
	var i;

	opts = {
		'mode': 'clamp'
	};

	buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	shape = [ 3, 2 ];
	strides = [ 2, 1 ];
	offset = 0;
	order = 'row-major';

	out = ndarray( 'generic', buffer, shape, strides, offset, order, opts );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		buffer[ 1 ] = randu();
		v = out.get( floor( randu()*30.0 ) - 15.0, 1 );
		if ( v !== v ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( v !== v ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::3d:get', function benchmark( b ) {
	var strides;
	var buffer;
	var offset;
	var shape;
	var order;
	var out;
	var v;
	var i;

	buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	shape = [ 1, 3, 2 ];
	strides = [ 6, 2, 1 ];
	offset = 0;
	order = 'row-major';

	out = ndarray( 'generic', buffer, shape, strides, offset, order );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		buffer[ 1 ] = randu();
		v = out.get( 0, floor( randu()*3.0 ), 1 );
		if ( v !== v ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( v !== v ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::3d:get:mode=wrap', function benchmark( b ) {
	var strides;
	var buffer;
	var offset;
	var shape;
	var order;
	var opts;
	var out;
	var v;
	var i;

	opts = {
		'mode': 'wrap'
	};

	buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	shape = [ 1, 3, 2 ];
	strides = [ 6, 2, 1 ];
	offset = 0;
	order = 'row-major';

	out = ndarray( 'generic', buffer, shape, strides, offset, order, opts );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		buffer[ 1 ] = randu();
		v = out.get( 0, floor( randu()*30.0 ) - 15.0, 1 );
		if ( v !== v ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( v !== v ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::3d:get:mode=clamp', function benchmark( b ) {
	var strides;
	var buffer;
	var offset;
	var shape;
	var order;
	var opts;
	var out;
	var v;
	var i;

	opts = {
		'mode': 'clamp'
	};

	buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	shape = [ 1, 3, 2 ];
	strides = [ 6, 2, 1 ];
	offset = 0;
	order = 'row-major';

	out = ndarray( 'generic', buffer, shape, strides, offset, order, opts );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		buffer[ 1 ] = randu();
		v = out.get( 0, floor( randu()*30.0 ) - 15.0, 1 );
		if ( v !== v ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( v !== v ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::4d:get', function benchmark( b ) {
	var strides;
	var buffer;
	var offset;
	var shape;
	var order;
	var out;
	var v;
	var i;

	buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	shape = [ 1, 1, 3, 2 ];
	strides = [ 6, 6, 2, 1 ];
	offset = 0;
	order = 'row-major';

	out = ndarray( 'generic', buffer, shape, strides, offset, order );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		buffer[ 1 ] = randu();
		v = out.get( 0, 0, floor( randu()*3.0 ), 1 );
		if ( v !== v ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( v !== v ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::4d:get:mode=wrap', function benchmark( b ) {
	var strides;
	var buffer;
	var offset;
	var shape;
	var order;
	var opts;
	var out;
	var v;
	var i;

	opts = {
		'mode': 'wrap'
	};

	buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	shape = [ 1, 1, 3, 2 ];
	strides = [ 6, 6, 2, 1 ];
	offset = 0;
	order = 'row-major';

	out = ndarray( 'generic', buffer, shape, strides, offset, order, opts );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		buffer[ 1 ] = randu();
		v = out.get( 0, 0, floor( randu()*30.0 ) - 15.0, 1 );
		if ( v !== v ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( v !== v ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::4d:get:mode=clamp', function benchmark( b ) {
	var strides;
	var buffer;
	var offset;
	var shape;
	var order;
	var opts;
	var out;
	var v;
	var i;

	opts = {
		'mode': 'clamp'
	};

	buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	shape = [ 1, 1, 3, 2 ];
	strides = [ 6, 6, 2, 1 ];
	offset = 0;
	order = 'row-major';

	out = ndarray( 'generic', buffer, shape, strides, offset, order, opts );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		buffer[ 1 ] = randu();
		v = out.get( 0, 0, floor( randu()*30.0 ) - 15.0, 1 );
		if ( v !== v ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( v !== v ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::5d:get', function benchmark( b ) {
	var strides;
	var buffer;
	var offset;
	var shape;
	var order;
	var out;
	var v;
	var i;

	buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	shape = [ 1, 1, 1, 3, 2 ];
	strides = [ 6, 6, 6, 2, 1 ];
	offset = 0;
	order = 'row-major';

	out = ndarray( 'generic', buffer, shape, strides, offset, order );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		buffer[ 1 ] = randu();
		v = out.get( 0, 0, 0, floor( randu()*3.0 ), 1 );
		if ( v !== v ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( v !== v ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::5d:get:mode=wrap', function benchmark( b ) {
	var strides;
	var buffer;
	var offset;
	var shape;
	var order;
	var opts;
	var out;
	var v;
	var i;

	opts = {
		'mode': 'wrap'
	};

	buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	shape = [ 1, 1, 1, 3, 2 ];
	strides = [ 6, 6, 6, 2, 1 ];
	offset = 0;
	order = 'row-major';

	out = ndarray( 'generic', buffer, shape, strides, offset, order, opts );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		buffer[ 1 ] = randu();
		v = out.get( 0, 0, 0, floor( randu()*30.0 ) - 15.0, 1 );
		if ( v !== v ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( v !== v ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::5d:get:mode=clamp', function benchmark( b ) {
	var strides;
	var buffer;
	var offset;
	var shape;
	var order;
	var opts;
	var out;
	var v;
	var i;

	opts = {
		'mode': 'clamp'
	};

	buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	shape = [ 1, 1, 1, 3, 2 ];
	strides = [ 6, 6, 6, 2, 1 ];
	offset = 0;
	order = 'row-major';

	out = ndarray( 'generic', buffer, shape, strides, offset, order, opts );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		buffer[ 1 ] = randu();
		v = out.get( 0, 0, 0, floor( randu()*30.0 ) - 15.0, 1 );
		if ( v !== v ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( v !== v ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::1d:iget', function benchmark( b ) {
	var strides;
	var buffer;
	var offset;
	var shape;
	var order;
	var out;
	var v;
	var i;

	buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	shape = [ 6 ];
	strides = [ 1 ];
	offset = 0;
	order = 'row-major';

	out = ndarray( 'generic', buffer, shape, strides, offset, order );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		buffer[ 1 ] = randu();
		v = out.iget( floor( randu()*6.0 ) );
		if ( v !== v ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( v !== v ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::1d:iget:mode=wrap', function benchmark( b ) {
	var strides;
	var buffer;
	var offset;
	var shape;
	var order;
	var opts;
	var out;
	var v;
	var i;

	opts = {
		'mode': 'wrap'
	};

	buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	shape = [ 6 ];
	strides = [ 1 ];
	offset = 0;
	order = 'row-major';

	out = ndarray( 'generic', buffer, shape, strides, offset, order, opts );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		buffer[ 1 ] = randu();
		v = out.iget( floor( randu()*6.0 ) );
		if ( v !== v ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( v !== v ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::1d:iget:mode=clamp', function benchmark( b ) {
	var strides;
	var buffer;
	var offset;
	var shape;
	var order;
	var opts;
	var out;
	var v;
	var i;

	opts = {
		'mode': 'clamp'
	};

	buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	shape = [ 6 ];
	strides = [ 1 ];
	offset = 0;
	order = 'row-major';

	out = ndarray( 'generic', buffer, shape, strides, offset, order, opts );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		buffer[ 1 ] = randu();
		v = out.iget( floor( randu()*6.0 ) );
		if ( v !== v ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( v !== v ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::2d,all_positive_strides:iget:order=row-major', function benchmark( b ) {
	var strides;
	var buffer;
	var offset;
	var shape;
	var order;
	var out;
	var v;
	var i;

	buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	shape = [ 3, 2 ];
	strides = [ 2, 1 ];
	offset = 0;
	order = 'row-major';

	out = ndarray( 'generic', buffer, shape, strides, offset, order );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		buffer[ 1 ] = randu();
		v = out.iget( floor( randu()*6.0 ) );
		if ( v !== v ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( v !== v ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::2d,all_positive_strides:iget:order=column-major', function benchmark( b ) {
	var strides;
	var buffer;
	var offset;
	var shape;
	var order;
	var out;
	var v;
	var i;

	buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	shape = [ 3, 2 ];
	strides = [ 2, 1 ];
	offset = 0;
	order = 'column-major';

	out = ndarray( 'generic', buffer, shape, strides, offset, order );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		buffer[ 1 ] = randu();
		v = out.iget( floor( randu()*6.0 ) );
		if ( v !== v ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( v !== v ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::2d,all_negative_strides:iget:order=row-major', function benchmark( b ) {
	var strides;
	var buffer;
	var offset;
	var shape;
	var order;
	var out;
	var v;
	var i;

	buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	shape = [ 3, 2 ];
	strides = [ -2, -1 ];
	offset = 5;
	order = 'row-major';

	out = ndarray( 'generic', buffer, shape, strides, offset, order );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		buffer[ 1 ] = randu();
		v = out.iget( floor( randu()*6.0 ) );
		if ( v !== v ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( v !== v ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::2d,all_negative_strides:iget:order=column-major', function benchmark( b ) {
	var strides;
	var buffer;
	var offset;
	var shape;
	var order;
	var out;
	var v;
	var i;

	buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	shape = [ 3, 2 ];
	strides = [ -2, -1 ];
	offset = 5;
	order = 'column-major';

	out = ndarray( 'generic', buffer, shape, strides, offset, order );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		buffer[ 1 ] = randu();
		v = out.iget( floor( randu()*6.0 ) );
		if ( v !== v ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( v !== v ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::2d,mixed_sign_strides:iget:order=row-major', function benchmark( b ) {
	var strides;
	var buffer;
	var offset;
	var shape;
	var order;
	var out;
	var v;
	var i;

	buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	shape = [ 3, 2 ];
	strides = [ -2, 1 ];
	offset = 4;
	order = 'row-major';

	out = ndarray( 'generic', buffer, shape, strides, offset, order );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		buffer[ 1 ] = randu();
		v = out.iget( floor( randu()*6.0 ) );
		if ( v !== v ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( v !== v ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::2d,mixed_sign_strides:iget:order=column-major', function benchmark( b ) {
	var strides;
	var buffer;
	var offset;
	var shape;
	var order;
	var out;
	var v;
	var i;

	buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	shape = [ 3, 2 ];
	strides = [ -2, 1 ];
	offset = 4;
	order = 'column-major';

	out = ndarray( 'generic', buffer, shape, strides, offset, order );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		buffer[ 1 ] = randu();
		v = out.iget( floor( randu()*6.0 ) );
		if ( v !== v ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( v !== v ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::1d:set', function benchmark( b ) {
	var strides;
	var buffer;
	var offset;
	var shape;
	var order;
	var out;
	var v;
	var i;
	var j;

	buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	shape = [ 6 ];
	strides = [ 1 ];
	offset = 0;
	order = 'row-major';

	out = ndarray( 'generic', buffer, shape, strides, offset, order );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = randu();
		j = floor( randu()*6.0 );
		out.set( j, v );
		if ( buffer[ j ] !== v ) {
			b.fail( 'should set value' );
		}
	}
	b.toc();
	if ( buffer[ j ] !== v ) {
		b.fail( 'should set value' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::1d:set:mode=wrap', function benchmark( b ) {
	var strides;
	var buffer;
	var offset;
	var shape;
	var order;
	var opts;
	var out;
	var tmp;
	var v;
	var i;
	var j;

	opts = {
		'mode': 'wrap'
	};

	buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	shape = [ 6 ];
	strides = [ 1 ];
	offset = 0;
	order = 'row-major';

	out = ndarray( 'generic', buffer, shape, strides, offset, order, opts );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = randu();
		j = floor( randu()*20.0 ) - 10.0;
		tmp = out.set( j, v );
		if ( typeof tmp !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( out.get( j ) !== v ) {
		b.fail( 'should set value' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::1d:set:mode=clamp', function benchmark( b ) {
	var strides;
	var buffer;
	var offset;
	var shape;
	var order;
	var opts;
	var out;
	var tmp;
	var v;
	var i;
	var j;

	opts = {
		'mode': 'clamp'
	};

	buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	shape = [ 6 ];
	strides = [ 1 ];
	offset = 0;
	order = 'row-major';

	out = ndarray( 'generic', buffer, shape, strides, offset, order, opts );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = randu();
		j = floor( randu()*20.0 ) - 10.0;
		tmp = out.set( j, v );
		if ( typeof tmp !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( out.get( j ) !== v ) {
		b.fail( 'should set value' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::2d:set', function benchmark( b ) {
	var strides;
	var buffer;
	var offset;
	var shape;
	var order;
	var out;
	var v;
	var i;
	var j;

	buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	shape = [ 3, 2 ];
	strides = [ 2, 1 ];
	offset = 0;
	order = 'row-major';

	out = ndarray( 'generic', buffer, shape, strides, offset, order );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = randu();
		j = floor( randu()*3.0 );
		out.set( j, 1, v );
		if ( buffer[ (2*j) + (1*1) ] !== v ) {
			b.fail( 'should set value' );
		}
	}
	b.toc();
	if ( buffer[ (2*j) + 1 ] !== v ) {
		b.fail( 'should set value' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::2d:set:mode=wrap', function benchmark( b ) {
	var strides;
	var buffer;
	var offset;
	var shape;
	var order;
	var opts;
	var out;
	var tmp;
	var v;
	var i;
	var j;

	opts = {
		'mode': 'wrap'
	};

	buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	shape = [ 3, 2 ];
	strides = [ 2, 1 ];
	offset = 0;
	order = 'row-major';

	out = ndarray( 'generic', buffer, shape, strides, offset, order, opts );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = randu();
		j = floor( randu()*30.0 ) - 15.0;
		tmp = out.set( j, 1, v );
		if ( typeof tmp !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( out.get( j, 1 ) !== v ) {
		b.fail( 'should set value' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::2d:set:mode=clamp', function benchmark( b ) {
	var strides;
	var buffer;
	var offset;
	var shape;
	var order;
	var opts;
	var out;
	var tmp;
	var v;
	var i;
	var j;

	opts = {
		'mode': 'clamp'
	};

	buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	shape = [ 3, 2 ];
	strides = [ 2, 1 ];
	offset = 0;
	order = 'row-major';

	out = ndarray( 'generic', buffer, shape, strides, offset, order, opts );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = randu();
		j = floor( randu()*30.0 ) - 15.0;
		tmp = out.set( j, 1, v );
		if ( typeof tmp !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( out.get( j, 1 ) !== v ) {
		b.fail( 'should set value' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::3d:set', function benchmark( b ) {
	var strides;
	var buffer;
	var offset;
	var shape;
	var order;
	var out;
	var v;
	var i;
	var j;

	buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	shape = [ 1, 3, 2 ];
	strides = [ 6, 2, 1 ];
	offset = 0;
	order = 'row-major';

	out = ndarray( 'generic', buffer, shape, strides, offset, order );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = randu();
		j = floor( randu()*3.0 );
		out.set( 0, j, 1, v );
		if ( buffer[ (2*j) + (1*1) ] !== v ) {
			b.fail( 'should set value' );
		}
	}
	b.toc();
	if ( buffer[ (2*j) + 1 ] !== v ) {
		b.fail( 'should set value' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::3d:set:mode=wrap', function benchmark( b ) {
	var strides;
	var buffer;
	var offset;
	var shape;
	var order;
	var opts;
	var out;
	var tmp;
	var v;
	var i;
	var j;

	opts = {
		'mode': 'wrap'
	};

	buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	shape = [ 1, 3, 2 ];
	strides = [ 6, 2, 1 ];
	offset = 0;
	order = 'row-major';

	out = ndarray( 'generic', buffer, shape, strides, offset, order, opts );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = randu();
		j = floor( randu()*30.0 ) - 15.0;
		tmp = out.set( 0, j, 1, v );
		if ( typeof tmp !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( out.get( 0, j, 1 ) !== v ) {
		b.fail( 'should set value' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::3d:set:mode=clamp', function benchmark( b ) {
	var strides;
	var buffer;
	var offset;
	var shape;
	var order;
	var opts;
	var out;
	var tmp;
	var v;
	var i;
	var j;

	opts = {
		'mode': 'clamp'
	};

	buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	shape = [ 1, 3, 2 ];
	strides = [ 6, 2, 1 ];
	offset = 0;
	order = 'row-major';

	out = ndarray( 'generic', buffer, shape, strides, offset, order, opts );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = randu();
		j = floor( randu()*30.0 ) - 15.0;
		tmp = out.set( 0, j, 1, v );
		if ( typeof tmp !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( out.get( 0, j, 1 ) !== v ) {
		b.fail( 'should set value' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::4d:set', function benchmark( b ) {
	var strides;
	var buffer;
	var offset;
	var shape;
	var order;
	var out;
	var v;
	var i;
	var j;

	buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	shape = [ 1, 1, 3, 2 ];
	strides = [ 6, 6, 2, 1 ];
	offset = 0;
	order = 'row-major';

	out = ndarray( 'generic', buffer, shape, strides, offset, order );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = randu();
		j = floor( randu()*3.0 );
		out.set( 0, 0, j, 1, v );
		if ( buffer[ (2*j) + (1*1) ] !== v ) {
			b.fail( 'should set value' );
		}
	}
	b.toc();
	if ( buffer[ (2*j) + 1 ] !== v ) {
		b.fail( 'should set value' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::4d:set:mode=wrap', function benchmark( b ) {
	var strides;
	var buffer;
	var offset;
	var shape;
	var order;
	var opts;
	var out;
	var tmp;
	var v;
	var i;
	var j;

	opts = {
		'mode': 'wrap'
	};

	buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	shape = [ 1, 1, 3, 2 ];
	strides = [ 6, 6, 2, 1 ];
	offset = 0;
	order = 'row-major';

	out = ndarray( 'generic', buffer, shape, strides, offset, order, opts );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = randu();
		j = floor( randu()*30.0 ) - 15.0;
		tmp = out.set( 0, 0, j, 1, v );
		if ( typeof tmp !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( out.get( 0, 0, j, 1 ) !== v ) {
		b.fail( 'should set value' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::4d:set:mode=clamp', function benchmark( b ) {
	var strides;
	var buffer;
	var offset;
	var shape;
	var order;
	var opts;
	var out;
	var tmp;
	var v;
	var i;
	var j;

	opts = {
		'mode': 'clamp'
	};

	buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	shape = [ 1, 1, 3, 2 ];
	strides = [ 6, 6, 2, 1 ];
	offset = 0;
	order = 'row-major';

	out = ndarray( 'generic', buffer, shape, strides, offset, order, opts );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = randu();
		j = floor( randu()*30.0 ) - 15.0;
		tmp = out.set( 0, 0, j, 1, v );
		if ( typeof tmp !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( out.get( 0, 0, j, 1 ) !== v ) {
		b.fail( 'should set value' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::5d:set', function benchmark( b ) {
	var strides;
	var buffer;
	var offset;
	var shape;
	var order;
	var out;
	var v;
	var i;
	var j;

	buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	shape = [ 1, 1, 1, 3, 2 ];
	strides = [ 6, 6, 6, 2, 1 ];
	offset = 0;
	order = 'row-major';

	out = ndarray( 'generic', buffer, shape, strides, offset, order );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = randu();
		j = floor( randu()*3.0 );
		out.set( 0, 0, 0, j, 1, v );
		if ( buffer[ (2*j) + (1*1) ] !== v ) {
			b.fail( 'should set value' );
		}
	}
	b.toc();
	if ( buffer[ (2*j) + 1 ] !== v ) {
		b.fail( 'should set value' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::5d:set:mode=wrap', function benchmark( b ) {
	var strides;
	var buffer;
	var offset;
	var shape;
	var order;
	var opts;
	var out;
	var tmp;
	var v;
	var i;
	var j;

	opts = {
		'mode': 'wrap'
	};

	buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	shape = [ 1, 1, 1, 3, 2 ];
	strides = [ 6, 6, 6, 2, 1 ];
	offset = 0;
	order = 'row-major';

	out = ndarray( 'generic', buffer, shape, strides, offset, order, opts );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = randu();
		j = floor( randu()*30.0 ) - 15.0;
		tmp = out.set( 0, 0, 0, j, 1, v );
		if ( typeof tmp !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( out.get( 0, 0, 0, j, 1 ) !== v ) {
		b.fail( 'should set value' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::5d:set:mode=clamp', function benchmark( b ) {
	var strides;
	var buffer;
	var offset;
	var shape;
	var order;
	var opts;
	var out;
	var tmp;
	var v;
	var i;
	var j;

	opts = {
		'mode': 'clamp'
	};

	buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	shape = [ 1, 1, 1, 3, 2 ];
	strides = [ 6, 6, 6, 2, 1 ];
	offset = 0;
	order = 'row-major';

	out = ndarray( 'generic', buffer, shape, strides, offset, order, opts );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = randu();
		j = floor( randu()*30.0 ) - 15.0;
		tmp = out.set( 0, 0, 0, j, 1, v );
		if ( typeof tmp !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( out.get( 0, 0, 0, j, 1 ) !== v ) {
		b.fail( 'should set value' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::1d:iset', function benchmark( b ) {
	var strides;
	var buffer;
	var offset;
	var shape;
	var order;
	var out;
	var v;
	var i;
	var j;

	buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	shape = [ 6 ];
	strides = [ 1 ];
	offset = 0;
	order = 'row-major';

	out = ndarray( 'generic', buffer, shape, strides, offset, order );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = randu();
		j = floor( randu()*6.0 );
		out.iset( j, v );
		if ( buffer[ j ] !== v ) {
			b.fail( 'should set value' );
		}
	}
	b.toc();
	if ( buffer[ j ] !== v ) {
		b.fail( 'should set value' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::1d:iset:mode=wrap', function benchmark( b ) {
	var strides;
	var buffer;
	var offset;
	var shape;
	var order;
	var opts;
	var out;
	var tmp;
	var v;
	var i;
	var j;

	opts = {
		'mode': 'wrap'
	};

	buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	shape = [ 6 ];
	strides = [ 1 ];
	offset = 0;
	order = 'row-major';

	out = ndarray( 'generic', buffer, shape, strides, offset, order, opts );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = randu();
		j = floor( randu()*30.0 ) - 15.0;
		tmp = out.iset( j, v );
		if ( typeof tmp !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( out.iget( j ) !== v ) {
		b.fail( 'should set value' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::1d:iset:mode=clamp', function benchmark( b ) {
	var strides;
	var buffer;
	var offset;
	var shape;
	var order;
	var opts;
	var out;
	var tmp;
	var v;
	var i;
	var j;

	opts = {
		'mode': 'clamp'
	};

	buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	shape = [ 6 ];
	strides = [ 1 ];
	offset = 0;
	order = 'row-major';

	out = ndarray( 'generic', buffer, shape, strides, offset, order, opts );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = randu();
		j = floor( randu()*30.0 ) - 15.0;
		tmp = out.iset( j, v );
		if ( typeof tmp !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( out.iget( j ) !== v ) {
		b.fail( 'should set value' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::2d,all_positive_strides:iset:order=row-major', function benchmark( b ) {
	var strides;
	var buffer;
	var offset;
	var shape;
	var order;
	var out;
	var v;
	var i;
	var j;

	buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	shape = [ 3, 2 ];
	strides = [ 2, 1 ];
	offset = 0;
	order = 'row-major';

	out = ndarray( 'generic', buffer, shape, strides, offset, order );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = randu();
		j = floor( randu()*6.0 );
		out.iset( j, v );
		if ( buffer[ j ] !== v ) {
			b.fail( 'should set value' );
		}
	}
	b.toc();
	if ( buffer[ j ] !== v ) {
		b.fail( 'should set value' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::2d,all_positive_strides:iset:order=column-major', function benchmark( b ) {
	var strides;
	var buffer;
	var offset;
	var shape;
	var order;
	var out;
	var v;
	var i;
	var j;

	buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	shape = [ 3, 2 ];
	strides = [ 2, 1 ];
	offset = 0;
	order = 'column-major';

	out = ndarray( 'generic', buffer, shape, strides, offset, order );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = randu();
		j = floor( randu()*6.0 );
		out.iset( j, v );
		if ( buffer[ j ] !== v ) {
			b.fail( 'should set value' );
		}
	}
	b.toc();
	if ( buffer[ j ] !== v ) {
		b.fail( 'should set value' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::2d,all_negative_strides:iset:order=row-major', function benchmark( b ) {
	var strides;
	var buffer;
	var offset;
	var shape;
	var order;
	var out;
	var v;
	var i;
	var j;

	buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	shape = [ 3, 2 ];
	strides = [ -2, -1 ];
	offset = 5;
	order = 'row-major';

	out = ndarray( 'generic', buffer, shape, strides, offset, order );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = randu();
		j = floor( randu()*6.0 );
		out.iset( j, v );
		if ( buffer[ 5-j ] !== v ) {
			b.fail( 'should set value' );
		}
	}
	b.toc();
	if ( buffer[ 5-j ] !== v ) {
		b.fail( 'should set value' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::2d,all_negative_strides:iset:order=column-major', function benchmark( b ) {
	var strides;
	var buffer;
	var offset;
	var shape;
	var order;
	var out;
	var v;
	var i;
	var j;

	buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	shape = [ 3, 2 ];
	strides = [ -2, -1 ];
	offset = 5;
	order = 'column-major';

	out = ndarray( 'generic', buffer, shape, strides, offset, order );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = randu();
		j = floor( randu()*6.0 );
		out.iset( j, v );
		if ( buffer[ 5-j ] !== v ) {
			b.fail( 'should set value' );
		}
	}
	b.toc();
	if ( buffer[ 5-j ] !== v ) {
		b.fail( 'should set value' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::2d,mixed_sign_strides:iset:order=row-major', function benchmark( b ) {
	var strides;
	var buffer;
	var offset;
	var shape;
	var order;
	var out;
	var v;
	var i;
	var j;

	buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	shape = [ 3, 2 ];
	strides = [ -2, 1 ];
	offset = 4;
	order = 'row-major';

	out = ndarray( 'generic', buffer, shape, strides, offset, order );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = randu();
		j = floor( randu()*6.0 );
		out.iset( j, v );
		if ( buffer[ 0 ] !== buffer[ 0 ] ) {
			b.fail( 'should not be NaN' );
		}
	}
	b.toc();
	if ( out.iget( j ) !== v ) {
		b.fail( 'should set value' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::2d,mixed_sign_strides:iset:order=column-major', function benchmark( b ) {
	var strides;
	var buffer;
	var offset;
	var shape;
	var order;
	var out;
	var v;
	var i;
	var j;

	buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	shape = [ 3, 2 ];
	strides = [ -2, 1 ];
	offset = 4;
	order = 'column-major';

	out = ndarray( 'generic', buffer, shape, strides, offset, order );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = randu();
		j = floor( randu()*6.0 );
		out.iset( j, v );
		if ( buffer[ 0 ] !== buffer[ 0 ] ) {
			b.fail( 'should not be NaN' );
		}
	}
	b.toc();
	if ( out.iget( j ) !== v ) {
		b.fail( 'should set value' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':toJSON', function benchmark( b ) {
	var strides;
	var buffer;
	var offset;
	var shape;
	var order;
	var out;
	var v;
	var i;

	buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	shape = [ 3, 2 ];
	strides = [ 2, 1 ];
	offset = 0;
	order = 'row-major';

	out = ndarray( 'generic', buffer, shape, strides, offset, order );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		buffer[ 1 ] = randu();
		v = out.toJSON();
		if ( typeof v !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( typeof v !== 'object' ) {
		b.fail( 'should return an object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':toString', function benchmark( b ) {
	var strides;
	var buffer;
	var offset;
	var shape;
	var order;
	var out;
	var v;
	var i;

	buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	shape = [ 3, 2 ];
	strides = [ 2, 1 ];
	offset = 0;
	order = 'row-major';

	out = ndarray( 'generic', buffer, shape, strides, offset, order );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		buffer[ 1 ] = randu();
		v = out.toString();
		if ( typeof v !== 'string' ) {
			b.fail( 'should return a string' );
		}
	}
	b.toc();
	if ( typeof v !== 'string' ) {
		b.fail( 'should return a string' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
