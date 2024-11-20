/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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
var hasDataViewSupport = require( '@stdlib/assert/has-dataview-support' );
var isDataView = require( '@stdlib/assert/is-dataview' );
var ArrayBuffer = require( '@stdlib/array/buffer' );
var pkg = require( './../package.json' ).name;
var ctor = require( './../lib' );


// VARIABLES //

var opts = {
	'skip': !hasDataViewSupport() // TODO: remove once DataView polyfill is written
};


// MAIN //

bench( pkg, opts, function benchmark( b ) {
	var buf;
	var dv;
	var i;

	buf = new ArrayBuffer( 0 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dv = new ctor( buf );
		if ( dv.byteLength !== 0 ) {
			b.fail( 'should have length 0' );
		}
	}
	b.toc();
	if ( !isDataView( dv ) ) {
		b.fail( 'should return a DataView' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
