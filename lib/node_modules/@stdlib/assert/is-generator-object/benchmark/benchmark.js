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

/* eslint-disable no-empty-function */

'use strict';

// MODULES //

var bench = require( '@stdlib/bench' );
var evil = require( '@stdlib/utils/eval' );
var isBoolean = require( '@stdlib/assert/is-boolean' ).isPrimitive;
var hasGeneratorsSupport = require( '@stdlib/assert/has-generator-support' );
var pkg = require( './../package.json' ).name;
var isGeneratorObject = require( './../lib' );


// FUNCTIONS //

function createGenerator() {
	var str = '(function () {';
	str += 'function* generator() {';
	str += '  while ( true ) {';
	str += '    yield 1.0;';
	str += '  }';
	str += '}';
	str += 'return generator;';
	str += '})()';
	return evil( str );
}


// MAIN //

bench( pkg, function benchmark( b ) {
	var generator;
	var values;
	var bool;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];

	if ( hasGeneratorsSupport() ) {
		generator = createGenerator();
		values.push( generator() );
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		bool = isGeneratorObject( values[ i%values.length ] );
		if ( !isBoolean( bool ) ) {
			b.fail( 'should return a boolean' );
		}
	}
	b.toc();
	if ( !isBoolean( bool ) ) {
		b.fail( 'should return a boolean' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
