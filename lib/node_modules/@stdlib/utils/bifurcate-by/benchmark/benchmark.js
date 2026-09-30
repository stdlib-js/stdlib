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
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var isArray = require( '@stdlib/assert/is-array' );
var format = require( '@stdlib/string/format' );
var pkg = require( './../package.json' ).name;
var bifurcateBy = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var vals;
	var arr;
	var o;
	var i;

	function predicate( v ) {
		return v[ 0 ] === 'b';
	}

	vals = [ 'beep', 'boop', 'foo', 'bar', 'woot' ];

	arr = discreteUniform( 100, 0, vals.length-1, {
		'dtype': 'generic'
	});
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr[ 0 ] = vals[ i%vals.length ];
		o = bifurcateBy( arr, predicate );
		if ( typeof o !== 'object' ) {
			b.fail( 'should return an array' );
		}
	}
	b.toc();
	if ( !isArray( o ) ) {
		b.fail( 'should return an array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( format( '%s::values', pkg ), function benchmark( b ) {
	var opts;
	var vals;
	var arr;
	var o;
	var i;

	function predicate( v ) {
		return v[ 0 ] === 'b';
	}

	vals = [ 'beep', 'boop', 'foo', 'bar', 'woot' ];

	opts = {
		'returns': 'values'
	};
	arr = discreteUniform( 100, 0, vals.length-1, {
		'dtype': 'generic'
	});
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr[ 0 ] = vals[ i%vals.length ];
		o = bifurcateBy( arr, opts, predicate );
		if ( typeof o !== 'object' ) {
			b.fail( 'should return an array' );
		}
	}
	b.toc();
	if ( !isArray( o ) ) {
		b.fail( 'should return an array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( format( '%s::indices', pkg ), function benchmark( b ) {
	var opts;
	var vals;
	var arr;
	var o;
	var i;

	function predicate( v ) {
		return v[ 0 ] === 'b';
	}

	vals = [ 'beep', 'boop', 'foo', 'bar', 'woot' ];

	opts = {
		'returns': 'indices'
	};
	arr = discreteUniform( 100, 0, vals.length-1, {
		'dtype': 'generic'
	});
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr[ 0 ] = vals[ i%vals.length ];
		o = bifurcateBy( arr, opts, predicate );
		if ( typeof o !== 'object' ) {
			b.fail( 'should return an array' );
		}
	}
	b.toc();
	if ( !isArray( o ) ) {
		b.fail( 'should return an array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( format( '%s::pairs', pkg ), function benchmark( b ) {
	var opts;
	var vals;
	var arr;
	var o;
	var i;

	function predicate( v ) {
		return v[ 0 ] === 'b';
	}

	vals = [ 'beep', 'boop', 'foo', 'bar', 'woot' ];

	opts = {
		'returns': '*'
	};
	arr = discreteUniform( 100, 0, vals.length-1, {
		'dtype': 'generic'
	});
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr[ 0 ] = vals[ i%vals.length ];
		o = bifurcateBy( arr, opts, predicate );
		if ( typeof o !== 'object' ) {
			b.fail( 'should return an array' );
		}
	}
	b.toc();
	if ( !isArray( o ) ) {
		b.fail( 'should return an array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( format( '%s::this_context', pkg ), function benchmark( b ) {
	var opts;
	var vals;
	var arr;
	var o;
	var i;

	function predicate( v ) {
		return v[ 0 ] === 'b';
	}

	vals = [ 'beep', 'boop', 'foo', 'bar', 'woot' ];

	opts = {
		'thisArg': {}
	};
	arr = discreteUniform( 100, 0, vals.length-1, {
		'dtype': 'generic'
	});
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr[ 0 ] = vals[ i%vals.length ];
		o = bifurcateBy( arr, opts, predicate );
		if ( typeof o !== 'object' ) {
			b.fail( 'should return an array' );
		}
	}
	b.toc();
	if ( !isArray( o ) ) {
		b.fail( 'should return an array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
