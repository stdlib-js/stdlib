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
var format = require( '@stdlib/string/format' );
var pkg = require( './../package.json' ).name;
var ndarray = require( './../lib' );


// MAIN //

bench( format( '%s::get:byteLength', pkg ), function benchmark( b ) {
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

bench( format( '%s::get:_byteLength', pkg ), function benchmark( b ) {
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

bench( format( '%s::get:BYTES_PER_ELEMENT', pkg ), function benchmark( b ) {
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

bench( format( '%s::get:data', pkg ), function benchmark( b ) {
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

bench( format( '%s::get:_buffer', pkg ), function benchmark( b ) {
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

bench( format( '%s::get:dtype', pkg ), function benchmark( b ) {
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

bench( format( '%s::get:flags', pkg ), function benchmark( b ) {
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

bench( format( '%s::get:_flags', pkg ), function benchmark( b ) {
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

bench( format( '%s::get:length', pkg ), function benchmark( b ) {
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

bench( format( '%s::get:_length', pkg ), function benchmark( b ) {
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

bench( format( '%s::get:ndims', pkg ), function benchmark( b ) {
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

bench( format( '%s::get:offset', pkg ), function benchmark( b ) {
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

bench( format( '%s::get:_offset', pkg ), function benchmark( b ) {
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

bench( format( '%s::get:order', pkg ), function benchmark( b ) {
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

bench( format( '%s::get:_order', pkg ), function benchmark( b ) {
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

bench( format( '%s::get:shape', pkg ), function benchmark( b ) {
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

bench( format( '%s::get:_shape', pkg ), function benchmark( b ) {
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

bench( format( '%s::get:strides', pkg ), function benchmark( b ) {
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

bench( format( '%s::get:_strides', pkg ), function benchmark( b ) {
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
