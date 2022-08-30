/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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
var Parser = require( './../lib' );


// FIXTURES //

var fixture = require( './../test/fixtures/earthquakes.json' );


// MAIN //

bench( pkg+'::incremental,line-by-line,real-world:dataset=earthquakes,nlines=7269,ncols=15,nfields=109035', function benchmark( b ) {
	var parse;
	var data;
	var out;
	var i;
	var j;

	parse = new Parser({
		'newline': '\n',
		'onRow': onRow
	});

	data = fixture.dsv.split( '\n' );
	for ( i = 0; i < data.length; i++ ) {
		data[ i ] += '\n';
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		for ( j = 0; j < data.length; j++ ) {
			out = parse.next( data[ j ] );
			if ( typeof out !== 'object' ) {
				b.fail( 'should return an object' );
			}
		}
	}
	b.toc();
	if ( typeof out !== 'object' ) {
		b.fail( 'should return an object' );
	}
	b.pass( 'benchmark finished' );
	b.end();

	function onRow( record ) {
		if ( typeof record !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
});
