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
var IS_BROWSER = require( '@stdlib/assert/is-browser' );
var isArray = require( '@stdlib/assert/is-array' );
var isObject = require( '@stdlib/assert/is-plain-object' );
var pkg = require( './../package.json' ).name;
var cmudict = require( './../lib' );


// VARIABLES //

var opts = {
	'skip': IS_BROWSER
};


// MAIN //

bench( pkg, opts, function benchmark( b ) {
	var data;
	var i;
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		data = cmudict();
		if ( typeof data !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isObject( data ) ) {
		b.fail( 'should return an object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::subset', opts, function benchmark( b ) {
	var options;
	var data;
	var i;

	options = [
		'dict',
		'phones',
		'symbols'
	];
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		data = cmudict({
			'data': options[ i % options.length ]
		});
		if ( typeof data !== 'object' ) {
			b.fail( 'should return an object or array' );
		}
	}
	b.toc();
	if ( !isObject( data ) && !isArray( data ) ) {
		b.fail( 'should return an object or array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
