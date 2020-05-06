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

var resolve = require( 'path' ).resolve;
var bench = require( '@stdlib/bench' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var randu = require( '@stdlib/random/base/randu' );
var floor = require( '@stdlib/math/base/special/floor' );
var isBoolean = require( '@stdlib/assert/is-boolean' ).isPrimitive;
var tryRequire = require( '@stdlib/utils/try-require' );
var pkg = require( './../package.json' ).name;


// VARIABLES //

var _ = tryRequire( resolve( __dirname, '..', 'node_modules', 'lodash' ) );
var opts = {
	'skip': ( _ instanceof Error )
};


// MAIN //

bench( pkg+'::lodash:countBy', opts, function benchmark( b ) {
	var vals;
	var arr;
	var len;
	var o;
	var i;
	var j;

	function indicator( v ) {
		return v[ 0 ];
	}

	vals = [ 'beep', 'boop', 'foo', 'bar', 'woot' ];

	arr = new Array( 100 );
	len = arr.length;
	for ( i = 0; i < len; i++ ) {
		j = floor( randu()*vals.length );
		arr[ i ] = vals[ j ];
	}
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		j = floor( randu()*vals.length );
		arr[ 0 ] = vals[ j ];
		o = _.countBy( arr, indicator );
		if ( typeof o !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( typeof o !== 'object' ) {
		b.fail( 'should return an object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::lodash:every', opts, function benchmark( b ) {
	var bool;
	var arr;
	var i;

	function predicate( v ) {
		return !isnan( v );
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = [ i, i+1, i+2, i+3, i+4 ];
		bool = _.every( arr, predicate );
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

bench( pkg+'::lodash:forEach', opts, function benchmark( b ) {
	var arr;
	var i;

	function onItem( v ) {
		if ( isnan( v ) ) {
			b.fail( 'should not be NaN' );
		}
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = [ i, i+1, i+2, i+3, i+4 ];
		_.forEach( arr, onItem );
		if ( arr.length !== 5 ) {
			b.fail( 'should not change the array length' );
		}
	}
	b.toc();
	if ( arr.length !== 5 ) {
		b.fail( 'should not change the array length' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::lodash:forEachRight', opts, function benchmark( b ) {
	var arr;
	var i;

	function onItem( v ) {
		if ( isnan( v ) ) {
			b.fail( 'should not be NaN' );
		}
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = [ i, i+1, i+2, i+3, i+4 ];
		_.forEachRight( arr, onItem );
		if ( arr.length !== 5 ) {
			b.fail( 'should not change the array length' );
		}
	}
	b.toc();
	if ( arr.length !== 5 ) {
		b.fail( 'should not change the array length' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::lodash:groupBy', opts, function benchmark( b ) {
	var vals;
	var arr;
	var len;
	var o;
	var i;
	var j;

	function indicator( v ) {
		return v[ 0 ];
	}

	vals = [ 'beep', 'boop', 'foo', 'bar', 'woot' ];

	arr = new Array( 100 );
	len = arr.length;
	for ( i = 0; i < len; i++ ) {
		j = floor( randu()*vals.length );
		arr[ i ] = vals[ j ];
	}
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		j = floor( randu()*vals.length );
		arr[ 0 ] = vals[ j ];
		o = _.groupBy( arr, indicator );
		if ( typeof o !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( typeof o !== 'object' ) {
		b.fail( 'should return an object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::lodash:keyBy', opts, function benchmark( b ) {
	var arr;
	var out;
	var i;

	function toKey( value ) {
		return value.name;
	}

	arr = new Array( 100 );
	for ( i = 0; i < arr.length; i++ ) {
		arr[ i ] = {
			'name': 'v'+i,
			'value': i
		};
	}
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr[ 0 ].value = randu();
		out = _.keyBy( arr, toKey );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( typeof out !== 'object' ) {
		b.fail( 'should return an object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
