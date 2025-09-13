/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
var gdot = require( '@stdlib/blas/base/ndarray/gdot' );
var pkg = require( './../package.json' ).name;
var BinaryStrided1dDispatch = require( './../lib' );


// MAIN //

bench( pkg+'::new', function benchmark( b ) {
	var policies;
	var dtypes;
	var table;
	var v;
	var i;

	table = {
		'default': gdot
	};
	dtypes = [
		'float64',
		'float32'
	];
	policies = {
		'output': 'promoted',
		'casting': 'promoted'
	};

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = new BinaryStrided1dDispatch( table, [ dtypes, dtypes ], dtypes, policies ); // eslint-disable-line max-len
		if ( typeof v !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !( v instanceof BinaryStrided1dDispatch ) ) {
		b.fail( 'should return an instance' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::no_new', function benchmark( b ) {
	var policies;
	var dtypes;
	var table;
	var fcn;
	var v;
	var i;

	table = {
		'default': gdot
	};
	dtypes = [
		'float64',
		'float32'
	];
	policies = {
		'output': 'promoted',
		'casting': 'promoted'
	};

	fcn = BinaryStrided1dDispatch;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = fcn( table, [ dtypes, dtypes ], dtypes, policies );
		if ( typeof v !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !( v instanceof BinaryStrided1dDispatch ) ) {
		b.fail( 'should return an instance' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
