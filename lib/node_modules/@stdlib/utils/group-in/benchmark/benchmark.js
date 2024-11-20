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
var floor = require( '@stdlib/math/base/special/floor' );
var isPlainObject = require( '@stdlib/assert/is-plain-object' );
var pkg = require( './../package.json' ).name;
var groupIn = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var key;
	var obj;
	var o;
	var i;

	function indicator( v ) {
		return v;
	}

	key = '';
	obj = {};
	for ( i = 0; i < 100; i++ ) {
		key += 'a';
		obj[ key ] = floor( randu()*10.0 );
	}
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		obj.a = randu();
		o = groupIn( obj, indicator );
		if ( typeof o !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isPlainObject( o ) ) {
		b.fail( 'should return an object' );
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

	function indicator( v ) {
		return v;
	}

	opts = {
		'returns': 'values'
	};
	key = '';
	obj = {};
	for ( i = 0; i < 100; i++ ) {
		key += 'a';
		obj[ key ] = floor( randu()*10.0 );
	}
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		obj.a = randu();
		o = groupIn( obj, opts, indicator );
		if ( typeof o !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isPlainObject( o ) ) {
		b.fail( 'should return an object' );
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

	function indicator( v ) {
		return v;
	}

	opts = {
		'returns': 'keys'
	};
	key = '';
	obj = {};
	for ( i = 0; i < 100; i++ ) {
		key += 'a';
		obj[ key ] = floor( randu()*10.0 );
	}
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		obj.a = randu();
		o = groupIn( obj, opts, indicator );
		if ( typeof o !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isPlainObject( o ) ) {
		b.fail( 'should return an object' );
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

	function indicator( v ) {
		return v;
	}

	opts = {
		'returns': '*'
	};
	key = '';
	obj = {};
	for ( i = 0; i < 100; i++ ) {
		key += 'a';
		obj[ key ] = floor( randu()*10.0 );
	}
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		obj.a = randu();
		o = groupIn( obj, opts, indicator );
		if ( typeof o !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isPlainObject( o ) ) {
		b.fail( 'should return an object' );
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

	function indicator( v ) {
		return v;
	}

	opts = {
		'thisArg': {}
	};
	key = '';
	obj = {};
	for ( i = 0; i < 100; i++ ) {
		key += 'a';
		obj[ key ] = floor( randu()*10.0 );
	}
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		obj.a = randu();
		o = groupIn( obj, opts, indicator );
		if ( typeof o !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isPlainObject( o ) ) {
		b.fail( 'should return an object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
