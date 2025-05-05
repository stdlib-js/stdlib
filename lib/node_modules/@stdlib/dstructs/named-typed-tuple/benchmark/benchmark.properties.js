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
var isArrayBuffer = require( '@stdlib/assert/is-arraybuffer' );
var isNonNegativeInteger = require( '@stdlib/assert/is-nonnegative-integer' ).isPrimitive;
var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var isArray = require( '@stdlib/assert/is-array' );
var pkg = require( './../package.json' ).name;
var namedtypedtuple = require( './../lib' );


// MAIN //

bench( pkg+'::tuple,get:buffer', function benchmark( b ) {
	var Point;
	var p;
	var v;
	var i;

	Point = namedtypedtuple( [ 'x', 'y' ] );
	p = new Point();

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		// Note: the following may be optimized away due to loop invariant code motion and/or other compiler optimizations, rendering this benchmark meaningless...
		v = p.buffer;
		if ( typeof v !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isArrayBuffer( v ) ) {
		b.fail( 'should return an ArrayBuffer' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::tuple,get:byteLength', function benchmark( b ) {
	var Point;
	var p;
	var v;
	var i;

	Point = namedtypedtuple( [ 'x', 'y' ] );
	p = new Point();

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		// Note: the following may be optimized away due to loop invariant code motion and/or other compiler optimizations, rendering this benchmark meaningless...
		v = p.byteLength;
		if ( v !== v ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( !isNonNegativeInteger( v ) ) {
		b.fail( 'should return a nonnegative integer' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::tuple,get:byteOffset', function benchmark( b ) {
	var Point;
	var p;
	var v;
	var i;

	Point = namedtypedtuple( [ 'x', 'y' ] );
	p = new Point();

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		// Note: the following may be optimized away due to loop invariant code motion and/or other compiler optimizations, rendering this benchmark meaningless...
		v = p.byteOffset;
		if ( v !== v ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( !isNonNegativeInteger( v ) ) {
		b.fail( 'should return a nonnegative integer' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::tuple,get:length', function benchmark( b ) {
	var Point;
	var p;
	var v;
	var i;

	Point = namedtypedtuple( [ 'x', 'y' ] );
	p = new Point();

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		// Note: the following may be optimized away due to loop invariant code motion and/or other compiler optimizations, rendering this benchmark meaningless...
		v = p.length;
		if ( v !== v ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( !isNonNegativeInteger( v ) ) {
		b.fail( 'should return a nonnegative integer' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::tuple,get:name', function benchmark( b ) {
	var Point;
	var p;
	var v;
	var i;

	Point = namedtypedtuple( [ 'x', 'y' ] );
	p = new Point();

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		// Note: the following may be optimized away due to loop invariant code motion and/or other compiler optimizations, rendering this benchmark meaningless...
		v = p.name;
		if ( typeof v !== 'string' ) {
			b.fail( 'should return a string' );
		}
	}
	b.toc();
	if ( !isString( v ) ) {
		b.fail( 'should return a string' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::tuple,get:fields', function benchmark( b ) {
	var Point;
	var p;
	var v;
	var i;

	Point = namedtypedtuple( [ 'x', 'y' ] );
	p = new Point();

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = p.fields;
		if ( typeof v !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isArray( v ) ) {
		b.fail( 'should return an array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::tuple,get:orderedFields', function benchmark( b ) {
	var Point;
	var p;
	var v;
	var i;

	Point = namedtypedtuple( [ 'x', 'y' ] );
	p = new Point();

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = p.orderedFields;
		if ( typeof v !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isArray( v ) ) {
		b.fail( 'should return an array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
