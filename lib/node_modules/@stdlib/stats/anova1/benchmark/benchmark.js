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
var uniform = require( '@stdlib/random/array/uniform' );
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var randu = require( '@stdlib/random/base/randu' );
var isObject = require( '@stdlib/assert/is-object' );
var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var format = require( '@stdlib/string/format' );
var pkg = require( './../package.json' ).name;
var anova1 = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var result;
	var group;
	var vals;
	var i;

	group = discreteUniform( 100, 0, 3, {
		'dtype': 'generic'
	});
	vals = uniform( 100, 0.0, 100.0, {
		'dtype': 'generic'
	});

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		vals[ i % vals.length ] = ( randu()*50.0 ) + ( 10.0*group[ i % group.length ] );
		result = anova1( vals, group );
		if ( typeof result !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isObject( result ) ) {
		b.fail( 'should return an object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( format( '%s:print', pkg ), function benchmark( b ) {
	var digits;
	var result;
	var output;
	var group;
	var vals;
	var i;

	group = discreteUniform( 100, 0, 3, {
		'dtype': 'generic'
	});
	vals = uniform( 100, 0.0, 100.0, {
		'dtype': 'generic'
	});
	result = anova1( vals, group );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		digits = ( i % 8 ) + 1;
		output = result.print({
			'digits': digits
		});
		if ( typeof output !== 'string' ) {
			b.fail( 'should return a string' );
		}
	}
	b.toc();
	if ( !isString( output ) ) {
		b.fail( 'should return a string' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
