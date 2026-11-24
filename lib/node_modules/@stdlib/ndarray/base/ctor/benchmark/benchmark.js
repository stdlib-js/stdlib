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

bench( format( '%s::instantiation', pkg ), function benchmark( b ) {
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

bench( format( '%s::instantiation,new', pkg ), function benchmark( b ) {
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
		if ( v === null ) {
			b.fail( 'should return expected data type' );
		}
	}
	b.toc();
	if ( String( v ) !== 'generic' ) {
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

bench( format( '%s:get', pkg ), function benchmark( b ) {
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
		buffer[ 1 ] = i;
		v = out.get( i%3, 1 );
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

bench( format( '%s::all_positive_strides:iget:order=row-major', pkg ), function benchmark( b ) {
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
		buffer[ 1 ] = i;
		v = out.iget( i%4 );
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

bench( format( '%s::all_positive_strides:iget:order=column-major', pkg ), function benchmark( b ) {
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
		buffer[ 1 ] = i;
		v = out.iget( i%4 );
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

bench( format( '%s::all_negative_strides:iget:order=row-major', pkg ), function benchmark( b ) {
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
	offset = 3;
	order = 'row-major';

	out = ndarray( 'generic', buffer, shape, strides, offset, order );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		buffer[ 1 ] = i;
		v = out.iget( i%4 );
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

bench( format( '%s::all_negative_strides:iget:order=column-major', pkg ), function benchmark( b ) {
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
	offset = 3;
	order = 'column-major';

	out = ndarray( 'generic', buffer, shape, strides, offset, order );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		buffer[ 1 ] = i;
		v = out.iget( i%4 );
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

bench( format( '%s::mixed_sign_strides:iget:order=row-major', pkg ), function benchmark( b ) {
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
	offset = 2;
	order = 'row-major';

	out = ndarray( 'generic', buffer, shape, strides, offset, order );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		buffer[ 1 ] = i;
		v = out.iget( i%4 );
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

bench( format( '%s::mixed_sign_strides:iget:order=column-major', pkg ), function benchmark( b ) {
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
	offset = 2;
	order = 'column-major';

	out = ndarray( 'generic', buffer, shape, strides, offset, order );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		buffer[ 1 ] = i;
		v = out.iget( i%4 );
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

bench( format( '%s:set', pkg ), function benchmark( b ) {
	var strides;
	var buffer;
	var offset;
	var shape;
	var order;
	var out;
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
		j = i%3;
		out.set( j, 1, i );
		if ( buffer[ (2*j) + (1*1) ] !== i ) {
			b.fail( 'should set value' );
		}
	}
	b.toc();
	if ( buffer[ (2*j) + 1 ] !== i-1 ) {
		b.fail( 'should set value' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( format( '%s::all_positive_strides:iset:order=row-major', pkg ), function benchmark( b ) {
	var strides;
	var buffer;
	var offset;
	var shape;
	var order;
	var out;
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
		j = i%4;
		out.iset( j, i );
		if ( buffer[ j ] !== i ) {
			b.fail( 'should set value' );
		}
	}
	b.toc();
	if ( buffer[ j ] !== i-1 ) {
		b.fail( 'should set value' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( format( '%s::all_positive_strides:iset:order=column-major', pkg ), function benchmark( b ) {
	var strides;
	var buffer;
	var offset;
	var shape;
	var order;
	var out;
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
		j = i%4;
		out.iset( j, i );
		if ( buffer[ j ] !== i ) {
			b.fail( 'should set value' );
		}
	}
	b.toc();
	if ( buffer[ j ] !== i-1 ) {
		b.fail( 'should set value' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( format( '%s::all_negative_strides:iset:order=row-major', pkg ), function benchmark( b ) {
	var strides;
	var buffer;
	var offset;
	var shape;
	var order;
	var out;
	var i;
	var j;

	buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	shape = [ 3, 2 ];
	strides = [ -2, -1 ];
	offset = 3;
	order = 'row-major';

	out = ndarray( 'generic', buffer, shape, strides, offset, order );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		j = i%4;
		out.iset( j, i );
		if ( buffer[ 3-j ] !== i ) {
			b.fail( 'should set value' );
		}
	}
	b.toc();
	if ( buffer[ 3-j ] !== i-1 ) {
		b.fail( 'should set value' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( format( '%s::all_negative_strides:iset:order=column-major', pkg ), function benchmark( b ) {
	var strides;
	var buffer;
	var offset;
	var shape;
	var order;
	var out;
	var i;
	var j;

	buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	shape = [ 3, 2 ];
	strides = [ -2, -1 ];
	offset = 3;
	order = 'column-major';

	out = ndarray( 'generic', buffer, shape, strides, offset, order );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		j = i%4;
		out.iset( j, i );
		if ( buffer[ 3-j ] !== i ) {
			b.fail( 'should set value' );
		}
	}
	b.toc();
	if ( buffer[ 3-j ] !== i-1 ) {
		b.fail( 'should set value' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( format( '%s::mixed_sign_strides:iset:order=row-major', pkg ), function benchmark( b ) {
	var strides;
	var buffer;
	var offset;
	var shape;
	var order;
	var out;
	var i;

	buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	shape = [ 3, 2 ];
	strides = [ -2, 1 ];
	offset = 2;
	order = 'row-major';

	out = ndarray( 'generic', buffer, shape, strides, offset, order );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out.iset( i%4, i );
		if ( buffer[ 0 ] !== buffer[ 0 ] ) {
			b.fail( 'should not be NaN' );
		}
	}
	b.toc();
	if ( out.iget( (i-1)%4 ) !== i-1 ) {
		b.fail( 'should set value' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( format( '%s::mixed_sign_strides:iset:order=column-major', pkg ), function benchmark( b ) {
	var strides;
	var buffer;
	var offset;
	var shape;
	var order;
	var out;
	var i;

	buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	shape = [ 3, 2 ];
	strides = [ -2, 1 ];
	offset = 2;
	order = 'column-major';

	out = ndarray( 'generic', buffer, shape, strides, offset, order );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out.iset( i%4, i );
		if ( buffer[ 0 ] !== buffer[ 0 ] ) {
			b.fail( 'should not be NaN' );
		}
	}
	b.toc();
	if ( out.iget( (i-1)%4 ) !== i-1 ) {
		b.fail( 'should set value' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( format( '%s:toJSON', pkg ), function benchmark( b ) {
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
		buffer[ 1 ] = i;
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

bench( format( '%s:toLocaleString', pkg ), function benchmark( b ) {
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
		buffer[ 1 ] = i;
		v = out.toLocaleString();
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

bench( format( '%s:toString', pkg ), function benchmark( b ) {
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
		buffer[ 1 ] = i;
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

bench( format( '%s:valueOf:ndims=0', pkg ), function benchmark( b ) {
	var strides;
	var buffer;
	var offset;
	var shape;
	var order;
	var out;
	var v;
	var i;

	buffer = [ 1.0 ];
	shape = [];
	strides = [ 0 ];
	offset = 0;
	order = 'row-major';

	out = ndarray( 'generic', buffer, shape, strides, offset, order );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		buffer[ 0 ] = i;
		v = out.valueOf();
		if ( typeof v !== 'number' ) {
			b.fail( 'should return a number' );
		}
	}
	b.toc();
	if ( typeof v !== 'number' ) {
		b.fail( 'should return a number' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( format( '%s:valueOf:ndims>=1', pkg ), function benchmark( b ) {
	var strides;
	var buffer;
	var offset;
	var shape;
	var order;
	var out;
	var v;
	var i;

	buffer = [ 1.0, 2.0 ];
	shape = [ 2 ];
	strides = [ 1 ];
	offset = 0;
	order = 'row-major';

	out = ndarray( 'generic', buffer, shape, strides, offset, order );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		buffer[ i%buffer.length ] = i;
		v = out.valueOf();
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
