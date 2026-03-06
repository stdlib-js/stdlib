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
var randu = require( '@stdlib/random/base/randu' );
var isArray = require( '@stdlib/assert/is-array' );
var pkg = require( './../package.json' ).name;
var bifurcateOwn = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var key;
	var obj;
	var o;
	var i;

	function predicate( v ) {
		return v < 0.5;
	}

	key = '';
	obj = {};
	for ( i = 0; i < 100; i++ ) {
		key += 'a';
		obj[ key ] = randu();
	}
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		obj.a = randu();
		o = bifurcateOwn( obj, predicate );
		if ( typeof o !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isArray( o ) ) {
		b.fail( 'should return an array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::values', function benchmark( b ) {
	var opts;
	var key;
	var obj;
	var o;
	var i;

	function predicate( v ) {
		return v < 0.5;
	}

	opts = {
		'returns': 'values'
	};
	key = '';
	obj = {};
	for ( i = 0; i < 100; i++ ) {
		key += 'a';
		obj[ key ] = randu();
	}
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		obj.a = randu();
		o = bifurcateOwn( obj, opts, predicate );
		if ( typeof o !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isArray( o ) ) {
		b.fail( 'should return an array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::keys', function benchmark( b ) {
	var opts;
	var key;
	var obj;
	var o;
	var i;

	function predicate( v ) {
		return v < 0.5;
	}

	opts = {
		'returns': 'keys'
	};
	key = '';
	obj = {};
	for ( i = 0; i < 100; i++ ) {
		key += 'a';
		obj[ key ] = randu();
	}
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		obj.a = randu();
		o = bifurcateOwn( obj, opts, predicate );
		if ( typeof o !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isArray( o ) ) {
		b.fail( 'should return an array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::pairs', function benchmark( b ) {
	var opts;
	var key;
	var obj;
	var o;
	var i;

	function predicate( v ) {
		return v < 0.5;
	}

	opts = {
		'returns': '*'
	};
	key = '';
	obj = {};
	for ( i = 0; i < 100; i++ ) {
		key += 'a';
		obj[ key ] = randu();
	}
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		obj.a = randu();
		o = bifurcateOwn( obj, opts, predicate );
		if ( typeof o !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isArray( o ) ) {
		b.fail( 'should return an array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::this_context', function benchmark( b ) {
	var opts;
	var key;
	var obj;
	var o;
	var i;

	function predicate( v ) {
		return v < 0.5;
	}

	opts = {
		'thisArg': {}
	};
	key = '';
	obj = {};
	for ( i = 0; i < 100; i++ ) {
		key += 'a';
		obj[ key ] = randu();
	}
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		obj.a = randu();
		o = bifurcateOwn( obj, opts, predicate );
		if ( typeof o !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isArray( o ) ) {
		b.fail( 'should return an array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
