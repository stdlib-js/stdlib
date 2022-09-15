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
var reSemVer = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var values;
	var out;
	var i;

	values = [
		'1.2.3',
		'1.0.0-alpha',
		'1.0.0-alpha.1',
		'1.0.0-0.3.7',
		'1.0.0-x.7.z.92',
		'1.0.0-alpha+001',
		'1.0.0+20130313144700',
		'1.0.0-beta+exp.sha.5',
		'1.0.0+21AF26D3--117B344092BD',
		'1.0.0+exp.sha.5114f85',
		'1.0.0+21AF26D3--117B344092BD',
		'1.0.0+exp.sha.5114f85'
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = reSemVer.REGEXP.exec( values[ i%values.length ] );
		if ( !out || !out.length ) {
			b.fail( 'should match a semantic version string' );
		}
	}
	b.toc();
	if ( !out || !out.length ) {
		b.fail( 'should match a semantic version string' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
