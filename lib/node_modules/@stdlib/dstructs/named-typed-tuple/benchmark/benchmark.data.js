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
var namedtypedtuple = require( './../lib' );


// MAIN //

bench( pkg+'::tuple,get,index', function benchmark( b ) {
	var Point;
	var N;
	var p;
	var v;
	var i;

	Point = namedtypedtuple( [ 'x', 'y' ] );

	p = new Point( [ 1.0, -1.0 ] );
	N = p.length;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = p[ i%N ];
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

bench( pkg+'::tuple,get,property_name', function benchmark( b ) {
	var fields;
	var Point;
	var N;
	var p;
	var v;
	var i;

	fields = [ 'x', 'y' ];
	Point = namedtypedtuple( fields );

	p = new Point( [ 1.0, -1.0 ] );
	N = p.length;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = p[ fields[ i%N ] ];
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

bench( pkg+'::tuple,set,index', function benchmark( b ) {
	var Point;
	var N;
	var p;
	var i;

	Point = namedtypedtuple( [ 'x', 'y' ] );

	p = new Point( [ 1.0, -1.0 ] );
	N = p.length;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		p[ i%N ] = i;
		if ( p[ 0 ] !== p[ 0 ] ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( p[ 0 ] !== p[ 0 ] || p[ 1 ] !== p[ 1 ] ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::tuple,set,property_name', function benchmark( b ) {
	var fields;
	var Point;
	var N;
	var p;
	var i;

	fields = [ 'x', 'y' ];
	Point = namedtypedtuple( fields );

	p = new Point( [ 1.0, -1.0 ] );
	N = p.length;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		p[ fields[ i%N ] ] = i;
		if ( p[ 0 ] !== p[ 0 ] ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( p[ 0 ] !== p[ 0 ] || p[ 1 ] !== p[ 1 ] ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
