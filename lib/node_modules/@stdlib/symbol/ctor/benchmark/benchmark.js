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
var hasSymbolSupport = require( '@stdlib/assert/has-symbol-support' );
var isSymbol = require( '@stdlib/assert/is-symbol' ).isPrimitive;
var pkg = require( './../package.json' ).name;
var Sym = require( './../lib' );


// VARIABLES //

var opts = {
	'skip': !hasSymbolSupport()
};


// MAIN //

bench( pkg+'::no_description', opts, function benchmark( b ) {
	var v;
	var i;
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = Sym(); // eslint-disable-line new-cap
		if ( typeof v !== 'symbol' ) {
			b.fail( 'should return a Symbol' );
		}
	}
	b.toc();
	if ( !isSymbol( v ) ) {
		b.fail( 'should return a Symbol' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::description', opts, function benchmark( b ) {
	var v;
	var i;
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = Sym( i.toString() ); // eslint-disable-line new-cap
		if ( typeof v !== 'symbol' ) {
			b.fail( 'should return a Symbol' );
		}
	}
	b.toc();
	if ( !isSymbol( v ) ) {
		b.fail( 'should return a Symbol' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
