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
var isObject = require( '@stdlib/assert/is-plain-object' );
var randu = require( '@stdlib/random/base/randu' );
var pkg = require( './../package.json' ).name;
var merge = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var target;
	var source;
	var out;
	var i;

	source = {
		'b': 3.141592653589793,
		'c': {
			'c1': 'bap',
			'c3': {
				'c3b': 5,
				'c3c': 'bop'
			},
			'c4': 1337,
			'c5': new Date()
		},
		'd': [ 4, 5, 6 ],
		'e': true
	};
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		target = {
			'a': 'beep',
			'b': randu(),
			'c': 'boop'
		};
		out = merge( target, source );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isObject( out ) ) {
		b.fail( 'should return an object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::multiple', function benchmark( b ) {
	var source1;
	var source2;
	var target;
	var out;
	var i;

	source1 = {
		'b': 3.141592653589793,
		'c': {
			'c1': 'bap',
			'c3': {
				'c3b': 5,
				'c3c': 'bop'
			},
			'c4': 1337,
			'c5': new Date()
		}
	};
	source2 = {
		'd': [ 4, 5, 6 ],
		'e': true
	};
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		target = {
			'a': 'beep',
			'b': randu(),
			'c': 'boop'
		};
		out = merge( target, source1, source2 );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isObject( out ) ) {
		b.fail( 'should return an object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':factory', function benchmark( b ) {
	var target;
	var source;
	var out;
	var m;
	var i;

	source = {
		'b': 3.141592653589793,
		'c': {
			'c1': 'bap',
			'c3': {
				'c3b': 5,
				'c3c': 'bop'
			},
			'c4': 1337,
			'c5': new Date()
		},
		'd': [ 4, 5, 6 ],
		'e': true
	};
	m = merge.factory({
		'copy': true,
		'override': true,
		'extend': true
	});
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		target = {
			'a': 'beep',
			'b': randu(),
			'c': 'boop'
		};
		out = m( target, source );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isObject( out ) ) {
		b.fail( 'should return an object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::multiple:factory', function benchmark( b ) {
	var source1;
	var source2;
	var target;
	var out;
	var i;
	var m;

	source1 = {
		'b': 3.141592653589793,
		'c': {
			'c1': 'bap',
			'c3': {
				'c3b': 5,
				'c3c': 'bop'
			},
			'c4': 1337,
			'c5': new Date()
		}
	};
	source2 = {
		'd': [ 4, 5, 6 ],
		'e': true
	};
	m = merge.factory({
		'copy': true,
		'override': true,
		'extend': true
	});
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		target = {
			'a': 'beep',
			'b': randu(),
			'c': 'boop'
		};
		out = m( target, source1, source2 );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isObject( out ) ) {
		b.fail( 'should return an object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':factory:copy=false', function benchmark( b ) {
	var target;
	var source;
	var out;
	var m;
	var i;

	source = {
		'b': 3.141592653589793,
		'c': {
			'c1': 'bap',
			'c3': {
				'c3b': 5,
				'c3c': 'bop'
			},
			'c4': 1337,
			'c5': new Date()
		},
		'd': [ 4, 5, 6 ],
		'e': true
	};
	m = merge.factory({
		'copy': false,
		'override': true,
		'extend': true
	});
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		target = {
			'a': 'beep',
			'b': randu(),
			'c': 'boop'
		};
		out = m( target, source );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isObject( out ) ) {
		b.fail( 'should return an object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':factory:override=false', function benchmark( b ) {
	var target;
	var source;
	var out;
	var m;
	var i;

	source = {
		'b': 3.141592653589793,
		'c': {
			'c1': 'bap',
			'c3': {
				'c3b': 5,
				'c3c': 'bop'
			},
			'c4': 1337,
			'c5': new Date()
		},
		'd': [ 4, 5, 6 ],
		'e': true
	};
	m = merge.factory({
		'copy': true,
		'override': false,
		'extend': true
	});
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		target = {
			'a': 'beep',
			'b': randu(),
			'c': 'boop'
		};
		out = m( target, source );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isObject( out ) ) {
		b.fail( 'should return an object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':factory:extend=false', function benchmark( b ) {
	var target;
	var source;
	var out;
	var m;
	var i;

	source = {
		'b': 3.141592653589793,
		'c': {
			'c1': 'bap',
			'c3': {
				'c3b': 5,
				'c3c': 'bop'
			},
			'c4': 1337,
			'c5': new Date()
		},
		'd': [ 4, 5, 6 ],
		'e': true
	};
	m = merge.factory({
		'copy': true,
		'override': true,
		'extend': false
	});
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		target = {
			'a': 'beep',
			'b': randu(),
			'c': 'boop'
		};
		out = m( target, source );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isObject( out ) ) {
		b.fail( 'should return an object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
