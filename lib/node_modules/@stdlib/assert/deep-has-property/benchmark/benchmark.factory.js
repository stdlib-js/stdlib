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
var isBoolean = require( '@stdlib/assert/is-boolean' ).isPrimitive;
var isFunction = require( '@stdlib/assert/is-function' );
var randu = require( '@stdlib/random/base/randu' );
var pkg = require( './../package.json' ).name;
var factory = require( './../lib' ).factory;


// MAIN //

bench( pkg+':factory', function benchmark( b ) {
	var path;
	var has;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		path = 'a.b.' + i.toString();
		has = factory( path );
		if ( typeof has !== 'function' ) {
			b.fail( 'should return a function' );
		}
	}
	b.toc();
	if ( !isFunction( has ) ) {
		b.fail( 'should return a function' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::options:factory', function benchmark( b ) {
	var opts;
	var has;
	var i;

	opts = {
		'sep': '|'
	};

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		opts.sep = i.toString();
		has = factory( 'a.b.c', opts );
		if ( typeof has !== 'function' ) {
			b.fail( 'should return a function' );
		}
	}
	b.toc();
	if ( !isFunction( has ) ) {
		b.fail( 'should return a function' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::delimited-string:factory', function benchmark( b ) {
	var bool;
	var obj;
	var has;
	var i;

	function Foo() {
		return this;
	}
	Foo.prototype.b = {
		'c': randu()
	};

	obj = {
		'a': new Foo()
	};
	has = factory( 'a.b.c' );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		obj.a.b.c = randu();
		bool = has( obj );
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

bench( pkg+'::key-array:factory', function benchmark( b ) {
	var bool;
	var path;
	var obj;
	var has;
	var i;

	function Foo() {
		return this;
	}
	Foo.prototype.b = {
		'c': randu()
	};

	obj = {
		'a': new Foo()
	};
	path = [ 'a', 'b', 'c' ];
	has = factory( path );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		obj.a.b.c = randu();
		bool = has( obj );
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

bench( pkg+'::custom-delimiter:factory', function benchmark( b ) {
	var bool;
	var opts;
	var obj;
	var has;
	var i;

	function Foo() {
		return this;
	}
	Foo.prototype.b = {
		'c': randu()
	};

	obj = {
		'a': new Foo()
	};
	opts = {
		'sep': '-|-'
	};
	has = factory( 'a-|-b-|-c', opts );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		obj.a.b.c = randu();
		bool = has( obj );
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
