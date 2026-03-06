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
var Annotations = require( './../lib' );


// MAIN //

bench( pkg+'::instantiation', function benchmark( b ) {
	var node;
	var i;
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		node = new Annotations();
		if ( !( node instanceof Annotations ) ) {
			b.fail( 'should return an instance' );
		}
	}
	b.toc();
	if ( !( node instanceof Annotations ) ) {
		b.fail( 'should return an instance' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::instantiation,no_new', function benchmark( b ) {
	var ctor;
	var node;
	var i;

	ctor = Annotations;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		node = ctor();
		if ( !( node instanceof Annotations ) ) {
			b.fail( 'should return an instance' );
		}
	}
	b.toc();
	if ( !( node instanceof Annotations ) ) {
		b.fail( 'should return an instance' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':render', function benchmark( b ) {
	var vtree;
	var node;
	var i;

	node = new Annotations();

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		vtree = node.render();
		if ( typeof vtree !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( typeof vtree !== 'object' ) {
		b.fail( 'should return an object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
