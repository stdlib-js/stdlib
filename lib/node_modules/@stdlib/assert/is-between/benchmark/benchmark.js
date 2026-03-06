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
var isBoolean = require( '@stdlib/assert/is-boolean' ).isPrimitive;
var pkg = require( './../package.json' ).name;
var isBetween = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( assert ) {
	var bool;
	var a;
	var b;
	var v;
	var i;

	assert.tic();
	for ( i = 0; i < assert.iterations; i++ ) {
		a = (randu()*10.0) + 5.0;
		b = (randu()*10.0) + 15.0;
		v = ( randu()*25.0 );
		bool = isBetween( v, a, b );
		if ( !isBoolean( bool ) ) {
			assert.fail( 'should return a boolean' );
		}
	}
	assert.toc();
	if ( !isBoolean( bool ) ) {
		assert.fail( 'should return a boolean' );
	}
	assert.pass( 'benchmark finished' );
	assert.end();
});

bench( pkg+':left=open,right=closed', function benchmark( assert ) {
	var bool;
	var a;
	var b;
	var v;
	var i;

	assert.tic();
	for ( i = 0; i < assert.iterations; i++ ) {
		a = (randu()*10.0) + 5.0;
		b = (randu()*10.0) + 15.0;
		v = ( randu()*25.0 );
		bool = isBetween( v, a, b, 'open', 'closed' );
		if ( !isBoolean( bool ) ) {
			assert.fail( 'should return a boolean' );
		}
	}
	assert.toc();
	if ( !isBoolean( bool ) ) {
		assert.fail( 'should return a boolean' );
	}
	assert.pass( 'benchmark finished' );
	assert.end();
});

bench( pkg+':left=open,right=open', function benchmark( assert ) {
	var bool;
	var a;
	var b;
	var v;
	var i;

	assert.tic();
	for ( i = 0; i < assert.iterations; i++ ) {
		a = (randu()*10.0) + 5.0;
		b = (randu()*10.0) + 15.0;
		v = ( randu()*25.0 );
		bool = isBetween( v, a, b, 'open', 'open' );
		if ( !isBoolean( bool ) ) {
			assert.fail( 'should return a boolean' );
		}
	}
	assert.toc();
	if ( !isBoolean( bool ) ) {
		assert.fail( 'should return a boolean' );
	}
	assert.pass( 'benchmark finished' );
	assert.end();
});

bench( pkg+':left=closed,right=closed', function benchmark( assert ) {
	var bool;
	var a;
	var b;
	var v;
	var i;

	assert.tic();
	for ( i = 0; i < assert.iterations; i++ ) {
		a = (randu()*10.0) + 5.0;
		b = (randu()*10.0) + 15.0;
		v = ( randu()*25.0 );
		bool = isBetween( v, a, b, 'closed', 'closed' );
		if ( !isBoolean( bool ) ) {
			assert.fail( 'should return a boolean' );
		}
	}
	assert.toc();
	if ( !isBoolean( bool ) ) {
		assert.fail( 'should return a boolean' );
	}
	assert.pass( 'benchmark finished' );
	assert.end();
});

bench( pkg+':left=closed,right=open', function benchmark( assert ) {
	var bool;
	var a;
	var b;
	var v;
	var i;

	assert.tic();
	for ( i = 0; i < assert.iterations; i++ ) {
		a = (randu()*10.0) + 5.0;
		b = (randu()*10.0) + 15.0;
		v = ( randu()*25.0 );
		bool = isBetween( v, a, b, 'closed', 'open' );
		if ( !isBoolean( bool ) ) {
			assert.fail( 'should return a boolean' );
		}
	}
	assert.toc();
	if ( !isBoolean( bool ) ) {
		assert.fail( 'should return a boolean' );
	}
	assert.pass( 'benchmark finished' );
	assert.end();
});
