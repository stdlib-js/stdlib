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
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' );
var isInteger = require( '@stdlib/assert/is-integer' ).isPrimitive;
var pkg = require( './../package.json' ).name;
var sub2ind = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var shape;
	var out;
	var s0;
	var s1;
	var s2;
	var i;

	shape = [ 10, 10, 10 ];

	s0 = discreteUniform( 0, shape[ 0 ]-1 );
	s1 = discreteUniform( 0, shape[ 1 ]-1 );
	s2 = discreteUniform( 0, shape[ 2 ]-1 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		s2 = floor( randu()*10.0 );
		out = sub2ind( shape, s0, s1, s2 );
		if ( out !== out ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( !isInteger( out ) ) {
		b.fail( 'should return an integer' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':mode=throw', function benchmark( b ) {
	var shape;
	var opts;
	var out;
	var s0;
	var s1;
	var s2;
	var i;

	shape = [ 10, 10, 10 ];

	s0 = discreteUniform( 0, shape[ 0 ]-1 );
	s1 = discreteUniform( 0, shape[ 1 ]-1 );
	s2 = discreteUniform( 0, shape[ 2 ]-1 );

	opts = {
		'mode': 'throw'
	};

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		s2 = floor( randu()*10.0 );
		out = sub2ind( shape, s0, s1, s2, opts );
		if ( out !== out ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( !isInteger( out ) ) {
		b.fail( 'should return an integer' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':mode=[throw]', function benchmark( b ) {
	var shape;
	var opts;
	var out;
	var s0;
	var s1;
	var s2;
	var i;

	shape = [ 10, 10, 10 ];

	s0 = discreteUniform( 0, shape[ 0 ]-1 );
	s1 = discreteUniform( 0, shape[ 1 ]-1 );
	s2 = discreteUniform( 0, shape[ 2 ]-1 );

	opts = {
		'mode': [ 'throw' ]
	};

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		s2 = floor( randu()*10.0 );
		out = sub2ind( shape, s0, s1, s2, opts );
		if ( out !== out ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( !isInteger( out ) ) {
		b.fail( 'should return an integer' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':mode=wrap', function benchmark( b ) {
	var shape;
	var opts;
	var out;
	var s0;
	var s1;
	var s2;
	var i;

	shape = [ 10, 10, 10 ];

	s0 = discreteUniform( 0, shape[ 0 ]-1 );
	s1 = discreteUniform( 0, shape[ 1 ]-1 );
	s2 = discreteUniform( 0, shape[ 2 ]-1 );

	opts = {
		'mode': 'wrap'
	};

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		s2 = floor( randu()*100.0 ) - 50.0;
		out = sub2ind( shape, s0, s1, s2, opts );
		if ( out !== out ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( !isInteger( out ) ) {
		b.fail( 'should return an integer' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':mode=[wrap]', function benchmark( b ) {
	var shape;
	var opts;
	var out;
	var s0;
	var s1;
	var s2;
	var i;

	shape = [ 10, 10, 10 ];

	s0 = discreteUniform( 0, shape[ 0 ]-1 );
	s1 = discreteUniform( 0, shape[ 1 ]-1 );
	s2 = discreteUniform( 0, shape[ 2 ]-1 );

	opts = {
		'mode': [ 'wrap' ]
	};

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		s2 = floor( randu()*100.0 ) - 50.0;
		out = sub2ind( shape, s0, s1, s2, opts );
		if ( out !== out ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( !isInteger( out ) ) {
		b.fail( 'should return an integer' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':mode=clamp', function benchmark( b ) {
	var shape;
	var opts;
	var out;
	var s0;
	var s1;
	var s2;
	var i;

	shape = [ 10, 10, 10 ];

	s0 = discreteUniform( 0, shape[ 0 ]-1 );
	s1 = discreteUniform( 0, shape[ 1 ]-1 );
	s2 = discreteUniform( 0, shape[ 2 ]-1 );

	opts = {
		'mode': 'clamp'
	};

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		s2 = floor( randu()*20.0 ) - 5.0;
		out = sub2ind( shape, s0, s1, s2, opts );
		if ( out !== out ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( !isInteger( out ) ) {
		b.fail( 'should return an integer' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':mode=[clamp]', function benchmark( b ) {
	var shape;
	var opts;
	var out;
	var s0;
	var s1;
	var s2;
	var i;

	shape = [ 10, 10, 10 ];

	s0 = discreteUniform( 0, shape[ 0 ]-1 );
	s1 = discreteUniform( 0, shape[ 1 ]-1 );
	s2 = discreteUniform( 0, shape[ 2 ]-1 );

	opts = {
		'mode': [ 'clamp' ]
	};

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		s2 = floor( randu()*20.0 ) - 5.0;
		out = sub2ind( shape, s0, s1, s2, opts );
		if ( out !== out ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( !isInteger( out ) ) {
		b.fail( 'should return an integer' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':mode=normalize', function benchmark( b ) {
	var shape;
	var opts;
	var out;
	var s0;
	var s1;
	var s2;
	var i;

	shape = [ 10, 10, 10 ];

	s0 = discreteUniform( 0, shape[ 0 ]-1 );
	s1 = discreteUniform( 0, shape[ 1 ]-1 );
	s2 = discreteUniform( 0, shape[ 2 ]-1 );

	opts = {
		'mode': 'normalize'
	};

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		s2 = floor( randu()*20.0 ) - 10.0;
		out = sub2ind( shape, s0, s1, s2, opts );
		if ( out !== out ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( !isInteger( out ) ) {
		b.fail( 'should return an integer' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':mode=[normalize]', function benchmark( b ) {
	var shape;
	var opts;
	var out;
	var s0;
	var s1;
	var s2;
	var i;

	shape = [ 10, 10, 10 ];

	s0 = discreteUniform( 0, shape[ 0 ]-1 );
	s1 = discreteUniform( 0, shape[ 1 ]-1 );
	s2 = discreteUniform( 0, shape[ 2 ]-1 );

	opts = {
		'mode': [ 'normalize' ]
	};

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		s2 = floor( randu()*20.0 ) - 10.0;
		out = sub2ind( shape, s0, s1, s2, opts );
		if ( out !== out ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( !isInteger( out ) ) {
		b.fail( 'should return an integer' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':order=row-major', function benchmark( b ) {
	var shape;
	var opts;
	var out;
	var s0;
	var s1;
	var s2;
	var i;

	shape = [ 10, 10, 10 ];

	s0 = discreteUniform( 0, shape[ 0 ]-1 );
	s1 = discreteUniform( 0, shape[ 1 ]-1 );
	s2 = discreteUniform( 0, shape[ 2 ]-1 );

	opts = {
		'order': 'row-major'
	};

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		s2 = floor( randu()*10.0 );
		out = sub2ind( shape, s0, s1, s2, opts );
		if ( out !== out ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( !isInteger( out ) ) {
		b.fail( 'should return an integer' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':order=column-major', function benchmark( b ) {
	var shape;
	var opts;
	var out;
	var s0;
	var s1;
	var s2;
	var i;

	shape = [ 10, 10, 10 ];

	s0 = discreteUniform( 0, shape[ 0 ]-1 );
	s1 = discreteUniform( 0, shape[ 1 ]-1 );
	s2 = discreteUniform( 0, shape[ 2 ]-1 );

	opts = {
		'order': 'column-major'
	};

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		s2 = floor( randu()*10.0 );
		out = sub2ind( shape, s0, s1, s2, opts );
		if ( out !== out ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( !isInteger( out ) ) {
		b.fail( 'should return an integer' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':mode=[wrap,clamp]', function benchmark( b ) {
	var shape;
	var opts;
	var out;
	var s0;
	var s1;
	var s2;
	var i;

	shape = [ 10, 10, 10 ];

	s0 = discreteUniform( 0, shape[ 0 ]-1 );
	s1 = discreteUniform( 0, shape[ 1 ]-1 );
	s2 = discreteUniform( 0, shape[ 2 ]-1 );

	opts = {
		'mode': [ 'wrap', 'clamp' ]
	};

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		s2 = floor( randu()*20.0 ) - 5.0;
		out = sub2ind( shape, s0, s1, s2, opts );
		if ( out !== out ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( !isInteger( out ) ) {
		b.fail( 'should return an integer' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':mode=[clamp,wrap]', function benchmark( b ) {
	var shape;
	var opts;
	var out;
	var s0;
	var s1;
	var s2;
	var i;

	shape = [ 10, 10, 10 ];

	s0 = discreteUniform( 0, shape[ 0 ]-1 );
	s1 = discreteUniform( 0, shape[ 1 ]-1 );
	s2 = discreteUniform( 0, shape[ 2 ]-1 );

	opts = {
		'mode': [ 'clamp', 'wrap' ]
	};

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		s2 = floor( randu()*20.0 ) - 5.0;
		out = sub2ind( shape, s0, s1, s2, opts );
		if ( out !== out ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( !isInteger( out ) ) {
		b.fail( 'should return an integer' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':mode=[wrap,clamp,clamp]', function benchmark( b ) {
	var shape;
	var opts;
	var out;
	var s0;
	var s1;
	var s2;
	var i;

	shape = [ 10, 10, 10 ];

	s0 = discreteUniform( 0, shape[ 0 ]-1 );
	s1 = discreteUniform( 0, shape[ 1 ]-1 );
	s2 = discreteUniform( 0, shape[ 2 ]-1 );

	opts = {
		'mode': [ 'wrap', 'clamp', 'clamp' ]
	};

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		s2 = floor( randu()*20.0 ) - 5.0;
		out = sub2ind( shape, s0, s1, s2, opts );
		if ( out !== out ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( !isInteger( out ) ) {
		b.fail( 'should return an integer' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':mode=[wrap,wrap,clamp]', function benchmark( b ) {
	var shape;
	var opts;
	var out;
	var s0;
	var s1;
	var s2;
	var i;

	shape = [ 10, 10, 10 ];

	s0 = discreteUniform( 0, shape[ 0 ]-1 );
	s1 = discreteUniform( 0, shape[ 1 ]-1 );
	s2 = discreteUniform( 0, shape[ 2 ]-1 );

	opts = {
		'mode': [ 'wrap', 'wrap', 'clamp' ]
	};

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		s2 = floor( randu()*20.0 ) - 5.0;
		out = sub2ind( shape, s0, s1, s2, opts );
		if ( out !== out ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( !isInteger( out ) ) {
		b.fail( 'should return an integer' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
