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
var pkg = require( './../package.json' ).name;
var deepSet = require( './../lib' );


// FUNCTIONS //

function set1() {
	return randu();
}

function set2( val ) {
	return val * 1.5;
}


// MAIN //

bench( pkg, function benchmark( b ) {
	var bool;
	var obj;
	var val;
	var i;

	obj = {
		'a': {
			'b': {
				'c': {
					'd': 0.5
				}
			}
		}
	};
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		val = randu();
		bool = deepSet( obj, 'a.b.c.d', val );
		if ( bool !== true ) {
			b.fail( 'should return true' );
		}
	}
	b.toc();
	if ( bool !== true ) {
		b.fail( 'should return true' );
	}
	if ( val !== obj.a.b.c.d ) {
		b.fail( 'should successfully set property value' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::setter', function benchmark( b ) {
	var bool;
	var obj;
	var i;

	obj = {
		'a': {
			'b': {
				'c': {
					'd': 0.5
				}
			}
		}
	};
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		bool = deepSet( obj, 'a.b.c.d', set1 );
		if ( bool !== true ) {
			b.fail( 'should return true' );
		}
	}
	b.toc();
	if ( bool !== true ) {
		b.fail( 'should return true' );
	}
	if ( obj.a.b.c.d !== obj.a.b.c.d ) {
		b.fail( 'should successfully set property value' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':factory', function benchmark( b ) {
	var bool;
	var dset;
	var obj;
	var i;

	obj = {
		'a': {
			'b': {
				'c': {
					'd': 0.5
				}
			}
		}
	};
	dset = deepSet.factory( 'a.b.c.d' );
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		bool = dset( obj, set2 );
		if ( bool !== true ) {
			b.fail( 'should return true' );
		}
	}
	b.toc();
	if ( bool !== true ) {
		b.fail( 'should return true' );
	}
	if ( obj.a.b.c.d !== obj.a.b.c.d ) {
		b.fail( 'should successfully set property value' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
