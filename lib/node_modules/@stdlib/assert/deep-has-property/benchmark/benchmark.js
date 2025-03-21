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
var randu = require( '@stdlib/random/base/randu' );
var pkg = require( './../package.json' ).name;
var deepHasProp = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var bool;
	var obj;
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
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		obj.a.b.c = randu();
		bool = deepHasProp( obj, 'a.b.c' );
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

bench( pkg+'::delimited-string', function benchmark( b ) {
	var bool;
	var obj;
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
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		obj.a.b.c = randu();
		bool = deepHasProp( obj, 'a.b.c' );
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

bench( pkg+'::key-array', function benchmark( b ) {
	var bool;
	var path;
	var obj;
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

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		obj.a.b.c = randu();
		bool = deepHasProp( obj, path );
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

bench( pkg+'::custom-delimiter', function benchmark( b ) {
	var bool;
	var opts;
	var obj;
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
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		obj.a.b.c = randu();
		bool = deepHasProp( obj, 'a-|-b-|-c', opts );
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
