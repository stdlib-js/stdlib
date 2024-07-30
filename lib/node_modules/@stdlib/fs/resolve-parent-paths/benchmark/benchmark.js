/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

var basename = require( 'path' ).basename;
var bench = require( '@stdlib/bench' );
var pkg = require( './../package.json' ).name;
var resolveParentPaths = require( './../lib' );


// MAIN //

bench( pkg+':mode=first', function benchmark( b ) {
	var PATHS;
	var opts;
	var i;

	PATHS = [
		[ 'package.json' ],
		[ 'beep-boop!!!hello world!?!', 'package.json' ],
		[ 'package.json', 'README.md' ]
	];
	opts = {
		'dir': __dirname,
		'mode': 'first'
	};

	i = 0;
	b.tic();

	return next();

	function next() {
		i += 1;
		if ( i <= b.iterations ) {
			return resolveParentPaths( PATHS[ i % 3 ], opts, done );
		}
		b.toc();
		b.pass( 'benchmark finished' );
		b.end();
	}

	function done( error, paths ) {
		if ( error ) {
			b.fail( error.message );
		}
		if ( paths.length === 0 ) {
			b.fail( 'should return a path' );
		}
		next();
	}
});

bench( pkg+':mode=some', function benchmark( b ) {
	var PATHS;
	var opts;
	var i;

	PATHS = [
		[ 'package.json' ],
		[ 'beep-boop!!!hello world!?!', 'package.json' ],
		[ 'package.json', 'README.md' ]
	];
	opts = {
		'dir': __dirname,
		'mode': 'some'
	};

	i = 0;
	b.tic();

	return next();

	function next() {
		i += 1;
		if ( i <= b.iterations ) {
			return resolveParentPaths( PATHS[ i % 3 ], opts, done );
		}
		b.toc();
		b.pass( 'benchmark finished' );
		b.end();
	}

	function done( error, paths ) {
		if ( error ) {
			b.fail( error.message );
		}
		if ( paths.length === 0 ) {
			b.fail( 'should return a path' );
		}
		next();
	}
});

bench( pkg+':mode=all', function benchmark( b ) {
	var PATHS;
	var opts;
	var i;

	PATHS = [
		[ 'package.json' ],
		[ 'package.json', 'README.md' ]
	];
	opts = {
		'dir': __dirname,
		'mode': 'all'
	};

	i = 0;
	b.tic();

	return next();

	function next() {
		i += 1;
		if ( i <= b.iterations ) {
			return resolveParentPaths( PATHS[ i % 2 ], opts, done );
		}
		b.toc();
		b.pass( 'benchmark finished' );
		b.end();
	}

	function done( error, paths ) {
		if ( error ) {
			b.fail( error.message );
		}
		if ( paths.length === 0 ) {
			b.fail( 'should return a path' );
		}
		next();
	}
});

bench( pkg+':mode=each', function benchmark( b ) {
	var PATHS;
	var opts;
	var i;

	PATHS = [
		[ 'package.json' ],
		[ 'beep-boop!!!hello world!?!', 'package.json' ],
		[ basename( __dirname ), 'README.md' ],
		[ 'README.md', 'package.json' ]
	];
	opts = {
		'dir': __dirname,
		'mode': 'each'
	};

	i = 0;
	b.tic();

	return next();

	function next() {
		i += 1;
		if ( i <= b.iterations ) {
			return resolveParentPaths( PATHS[ i % 4 ], opts, done );
		}
		b.toc();
		b.pass( 'benchmark finished' );
		b.end();
	}

	function done( error, paths ) {
		if ( error ) {
			b.fail( error.message );
		}
		if ( paths.length === 0 ) {
			b.fail( 'should return a path' );
		}
		next();
	}
});

bench( pkg+':sync:mode=first', function benchmark( b ) {
	var PATHS;
	var paths;
	var opts;
	var i;

	PATHS = [
		[ 'package.json' ],
		[ 'beep-boop!!!hello world!?!', 'package.json' ],
		[ 'package.json', 'README.md' ]
	];
	opts = {
		'dir': __dirname,
		'mode': 'first'
	};

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		paths = resolveParentPaths.sync( PATHS[ i % 3 ], opts );
		if ( paths.length === 0 ) {
			b.fail( 'should return a path' );
		}
	}
	b.toc();
	if ( paths.length === 0 ) {
		b.fail( 'should return a path' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':sync:mode=some', function benchmark( b ) {
	var PATHS;
	var paths;
	var opts;
	var i;

	PATHS = [
		[ 'package.json' ],
		[ 'beep-boop!!!hello world!?!', 'package.json' ],
		[ 'package.json', 'README.md' ]
	];
	opts = {
		'dir': __dirname,
		'mode': 'some'
	};

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		paths = resolveParentPaths.sync( PATHS[ i % 3 ], opts );
		if ( paths.length === 0 ) {
			b.fail( 'should return a path' );
		}
	}
	b.toc();
	if ( paths.length === 0 ) {
		b.fail( 'should return a path' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':sync:mode=all', function benchmark( b ) {
	var PATHS;
	var paths;
	var opts;
	var i;

	PATHS = [
		[ 'package.json' ],
		[ 'package.json', 'README.md' ]
	];
	opts = {
		'dir': __dirname,
		'mode': 'all'
	};

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		paths = resolveParentPaths.sync( PATHS[ i % 2 ], opts );
		if ( paths.length === 0 ) {
			b.fail( 'should return a path' );
		}
	}
	b.toc();
	if ( paths.length === 0 ) {
		b.fail( 'should return a path' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':sync:mode=each', function benchmark( b ) {
	var PATHS;
	var paths;
	var opts;
	var i;

	PATHS = [
		[ 'package.json' ],
		[ 'beep-boop!!!hello world!?!', 'package.json' ],
		[ basename( __dirname ), 'README.md' ],
		[ 'README.md', 'package.json' ]
	];
	opts = {
		'dir': __dirname,
		'mode': 'each'
	};

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		paths = resolveParentPaths.sync( PATHS[ i % 4 ], opts );
		if ( paths.length === 0 ) {
			b.fail( 'should return a path' );
		}
	}
	b.toc();
	if ( paths.length === 0 ) {
		b.fail( 'should return a path' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
