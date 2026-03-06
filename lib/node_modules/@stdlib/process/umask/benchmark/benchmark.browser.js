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
var isNonNegativeInteger = require( '@stdlib/assert/is-nonnegative-integer' ).isPrimitive;
var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var pkg = require( './../package.json' ).name;
var umask = require( './../lib/browser.js' );


// VARIABLES //

var MASK = umask();


// FUNCTIONS //

/**
* Restores the process mask.
*
* @private
*/
function restore() {
	umask( MASK );
}


// MAIN //

bench( pkg+'::browser,get', function benchmark( b ) {
	var v;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		// Note: the following *could* be optimized away via loop-invariant code motion. If so, the entire loop will disappear.
		v = umask();
		if ( v !== v ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( !isNonNegativeInteger( v ) ) {
		b.fail( 'should return a nonnegative integer' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::browser,get,options', function benchmark( b ) {
	var v;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		// Note: the following *could* be optimized away via loop-invariant code motion. If so, the entire loop will disappear.
		v = umask( {} );
		if ( v !== v ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( !isNonNegativeInteger( v ) ) {
		b.fail( 'should return a nonnegative integer' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::browser,get:symbolic=true', function benchmark( b ) {
	var opts;
	var v;
	var i;

	opts = {
		'symbolic': true
	};

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		// Note: the following *could* be optimized away via loop-invariant code motion. If so, the entire loop will disappear.
		v = umask( opts );
		if ( typeof v !== 'string' ) {
			b.fail( 'should return a string' );
		}
	}
	b.toc();
	if ( !isString( v ) ) {
		b.fail( 'should return a string' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::browser,get:symbolic=false', function benchmark( b ) {
	var opts;
	var v;
	var i;

	opts = {
		'symbolic': false
	};

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		// Note: the following *could* be optimized away via loop-invariant code motion. If so, the entire loop will disappear.
		v = umask( opts );
		if ( v !== v ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( !isNonNegativeInteger( v ) ) {
		b.fail( 'should return a nonnegative integer' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::browser,set', function benchmark( b ) {
	var m;
	var v;
	var i;

	m = umask();

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		// Note: the following *could* be optimized away via loop-invariant code motion. If so, the entire loop will disappear.
		v = umask( m );
		if ( v !== v ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( !isNonNegativeInteger( v ) ) {
		b.fail( 'should return a nonnegative integer' );
	}
	b.pass( 'benchmark finished' );

	restore();
	b.end();
});

bench( pkg+'::browser,set,symbolic,=', function benchmark( b ) {
	var v;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		// Note: the following *could* be optimized away via loop-invariant code motion. If so, the entire loop will disappear.
		v = umask( 'u=rwx,g=rwx,o=rwx' );
		if ( v !== v ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( !isNonNegativeInteger( v ) ) {
		b.fail( 'should return a nonnegative integer' );
	}
	b.pass( 'benchmark finished' );

	restore();
	b.end();
});

bench( pkg+'::browser,set,symbolic,+', function benchmark( b ) {
	var v;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		// Note: the following *could* be optimized away via loop-invariant code motion. If so, the entire loop will disappear.
		v = umask( 'u+rwx,g+rwx,o+rwx' );
		if ( v !== v ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( !isNonNegativeInteger( v ) ) {
		b.fail( 'should return a nonnegative integer' );
	}
	b.pass( 'benchmark finished' );

	restore();
	b.end();
});

bench( pkg+'::browser,set,symbolic,-', function benchmark( b ) {
	var v;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		// Note: the following *could* be optimized away via loop-invariant code motion. If so, the entire loop will disappear.
		v = umask( 'u-rwx,g-rwx,o-rwx' );
		if ( v !== v ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( !isNonNegativeInteger( v ) ) {
		b.fail( 'should return a nonnegative integer' );
	}
	b.pass( 'benchmark finished' );

	restore();
	b.end();
});

bench( pkg+'::browser,set:symbolic=false', function benchmark( b ) {
	var opts;
	var m;
	var v;
	var i;

	opts = {
		'symbolic': false
	};
	m = umask();

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		// Note: the following *could* be optimized away via loop-invariant code motion. If so, the entire loop will disappear.
		v = umask( m, opts );
		if ( v !== v ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( !isNonNegativeInteger( v ) ) {
		b.fail( 'should return a nonnegative integer' );
	}
	b.pass( 'benchmark finished' );

	restore();
	b.end();
});

bench( pkg+'::browser,set,symbolic,=:symbolic=false', function benchmark( b ) {
	var opts;
	var v;
	var i;

	opts = {
		'symbolic': false
	};

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		// Note: the following *could* be optimized away via loop-invariant code motion. If so, the entire loop will disappear.
		v = umask( 'u=rwx,g=rwx,o=rwx', opts );
		if ( v !== v ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( !isNonNegativeInteger( v ) ) {
		b.fail( 'should return a nonnegative integer' );
	}
	b.pass( 'benchmark finished' );

	restore();
	b.end();
});

bench( pkg+'::browser,set,symbolic,+:symbolic=false', function benchmark( b ) {
	var opts;
	var v;
	var i;

	opts = {
		'symbolic': false
	};

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		// Note: the following *could* be optimized away via loop-invariant code motion. If so, the entire loop will disappear.
		v = umask( 'u+rwx,g+rwx,o+rwx', opts );
		if ( v !== v ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( !isNonNegativeInteger( v ) ) {
		b.fail( 'should return a nonnegative integer' );
	}
	b.pass( 'benchmark finished' );

	restore();
	b.end();
});

bench( pkg+'::browser,set,symbolic,-:symbolic=false', function benchmark( b ) {
	var opts;
	var v;
	var i;

	opts = {
		'symbolic': false
	};

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		// Note: the following *could* be optimized away via loop-invariant code motion. If so, the entire loop will disappear.
		v = umask( 'u-rwx,g-rwx,o-rwx', opts );
		if ( v !== v ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( !isNonNegativeInteger( v ) ) {
		b.fail( 'should return a nonnegative integer' );
	}
	b.pass( 'benchmark finished' );

	restore();
	b.end();
});

bench( pkg+'::browser,set:symbolic=true', function benchmark( b ) {
	var opts;
	var m;
	var v;
	var i;

	opts = {
		'symbolic': true
	};
	m = umask();

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		// Note: the following *could* be optimized away via loop-invariant code motion. If so, the entire loop will disappear.
		v = umask( m, opts );
		if ( typeof v !== 'string' ) {
			b.fail( 'should return a string' );
		}
	}
	b.toc();
	if ( !isString( v ) ) {
		b.fail( 'should return a string' );
	}
	b.pass( 'benchmark finished' );

	restore();
	b.end();
});

bench( pkg+'::browser,set,symbolic,=:symbolic=true', function benchmark( b ) {
	var opts;
	var v;
	var i;

	opts = {
		'symbolic': true
	};

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		// Note: the following *could* be optimized away via loop-invariant code motion. If so, the entire loop will disappear.
		v = umask( 'u=rwx,g=rwx,o=rwx', opts );
		if ( typeof v !== 'string' ) {
			b.fail( 'should return a string' );
		}
	}
	b.toc();
	if ( !isString( v ) ) {
		b.fail( 'should return a string' );
	}
	b.pass( 'benchmark finished' );

	restore();
	b.end();
});

bench( pkg+'::browser,set,symbolic,+:symbolic=true', function benchmark( b ) {
	var opts;
	var v;
	var i;

	opts = {
		'symbolic': true
	};

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		// Note: the following *could* be optimized away via loop-invariant code motion. If so, the entire loop will disappear.
		v = umask( 'u+rwx,g+rwx,o+rwx', opts );
		if ( typeof v !== 'string' ) {
			b.fail( 'should return a string' );
		}
	}
	b.toc();
	if ( !isString( v ) ) {
		b.fail( 'should return a string' );
	}
	b.pass( 'benchmark finished' );

	restore();
	b.end();
});

bench( pkg+'::browser,set,symbolic,-:symbolic=true', function benchmark( b ) {
	var opts;
	var v;
	var i;

	opts = {
		'symbolic': true
	};

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		// Note: the following *could* be optimized away via loop-invariant code motion. If so, the entire loop will disappear.
		v = umask( 'u-rwx,g-rwx,o-rwx', opts );
		if ( typeof v !== 'string' ) {
			b.fail( 'should return a string' );
		}
	}
	b.toc();
	if ( !isString( v ) ) {
		b.fail( 'should return a string' );
	}
	b.pass( 'benchmark finished' );

	restore();
	b.end();
});
