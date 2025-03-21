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
var isBoolean = require( '@stdlib/assert/is-boolean' ).isPrimitive;
var pkg = require( './../package.json' ).name;
var startsWith = require( './../lib' );


// VARIABLES //

var opts = {
	'skip': typeof String.prototype.startsWith !== 'function'
};


// MAIN //

bench( pkg, function benchmark( b ) {
	var values;
	var bool;
	var str;
	var i;

	str = 'To be, or not to be, that is the question.';
	values = [
		'To be',
		'To ba',
		'To bi'
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		bool = startsWith( str, values[ i%values.length ], 0 );
		if ( typeof bool !== 'boolean' ) {
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

bench( pkg+'::substring', function benchmark( b ) {
	var values;
	var bool;
	var str;
	var i;

	str = 'To be, or not to be, that is the question.';
	values = [
		'to be',
		'to ba',
		'to bi'
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		bool = startsWith( str, values[ i%values.length ], 14 );
		if ( typeof bool !== 'boolean' ) {
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

bench( pkg+'::builtin', opts, function benchmark( b ) {
	var values;
	var bool;
	var str;
	var i;

	str = 'To be, or not to be, that is the question.';
	values = [
		'To be',
		'To ba',
		'To bi'
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		bool = str.startsWith( values[ i%values.length ], 0 );
		if ( typeof bool !== 'boolean' ) {
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

bench( pkg+'::builtin,substring', opts, function benchmark( b ) {
	var values;
	var bool;
	var str;
	var i;

	str = 'To be, or not to be, that is the question.';
	values = [
		'to be',
		'to ba',
		'to bi'
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		bool = str.startsWith( values[ i%values.length ], 14 );
		if ( typeof bool !== 'boolean' ) {
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
