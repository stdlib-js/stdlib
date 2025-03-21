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
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var EPS = require( '@stdlib/constants/float64/eps' );
var pkg = require( './../package.json' ).name;
var epsdiff = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var x;
	var y;
	var z;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x = ( randu()*1.0e7 ) - 5.0e6;
		y = ( randu()*1.0e7 ) - 5.0e6;
		if ( x === 0.0 ) {
			x += EPS;
		}
		if ( y === 0.0 ) {
			y += EPS;
		}
		z = epsdiff( x, y );
		if ( isnan( z ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( z ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':scale="max-abs"', function benchmark( b ) {
	var x;
	var y;
	var z;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x = ( randu()*1.0e7 ) - 5.0e6;
		y = ( randu()*1.0e7 ) - 5.0e6;
		if ( x === 0.0 ) {
			x += EPS;
		}
		if ( y === 0.0 ) {
			y += EPS;
		}
		z = epsdiff( x, y, 'max-abs' );
		if ( isnan( z ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( z ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':scale="max"', function benchmark( b ) {
	var x;
	var y;
	var z;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x = ( randu()*1.0e7 ) - 5.0e6;
		y = ( randu()*1.0e7 ) - 5.0e6;
		if ( x === 0.0 ) {
			x += EPS;
		}
		if ( y === 0.0 ) {
			y += EPS;
		}
		z = epsdiff( x, y, 'max' );
		if ( isnan( z ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( z ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':scale="min-abs"', function benchmark( b ) {
	var x;
	var y;
	var z;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x = ( randu()*1.0e7 ) - 5.0e6;
		y = ( randu()*1.0e7 ) - 5.0e6;
		if ( x === 0.0 ) {
			x += EPS;
		}
		if ( y === 0.0 ) {
			y += EPS;
		}
		z = epsdiff( x, y, 'min-abs' );
		if ( isnan( z ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( z ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':scale="min"', function benchmark( b ) {
	var x;
	var y;
	var z;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x = ( randu()*1.0e7 ) - 5.0e6;
		y = ( randu()*1.0e7 ) - 5.0e6;
		if ( x === 0.0 ) {
			x += EPS;
		}
		if ( y === 0.0 ) {
			y += EPS;
		}
		z = epsdiff( x, y, 'min' );
		if ( isnan( z ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( z ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':scale="mean-abs"', function benchmark( b ) {
	var x;
	var y;
	var z;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x = ( randu()*1.0e7 ) - 5.0e6;
		y = ( randu()*1.0e7 ) - 5.0e6;
		if ( x === 0.0 ) {
			x += EPS;
		}
		if ( y === 0.0 ) {
			y += EPS;
		}
		z = epsdiff( x, y, 'mean-abs' );
		if ( isnan( z ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( z ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':scale="mean"', function benchmark( b ) {
	var x;
	var y;
	var z;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x = ( randu()*1.0e7 ) - 5.0e6;
		y = ( randu()*1.0e7 ) - 5.0e6;
		if ( x === 0.0 ) {
			x += EPS;
		}
		if ( y === 0.0 ) {
			y += EPS;
		}
		z = epsdiff( x, y, 'mean' );
		if ( isnan( z ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( z ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':scale="x"', function benchmark( b ) {
	var x;
	var y;
	var z;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x = ( randu()*1.0e7 ) - 5.0e6;
		y = ( randu()*1.0e7 ) - 5.0e6;
		if ( x === 0.0 ) {
			x += EPS;
		}
		if ( y === 0.0 ) {
			y += EPS;
		}
		z = epsdiff( x, y, 'x' );
		if ( isnan( z ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( z ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':scale="y"', function benchmark( b ) {
	var x;
	var y;
	var z;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x = ( randu()*1.0e7 ) - 5.0e6;
		y = ( randu()*1.0e7 ) - 5.0e6;
		if ( x === 0.0 ) {
			x += EPS;
		}
		if ( y === 0.0 ) {
			y += EPS;
		}
		z = epsdiff( x, y, 'y' );
		if ( isnan( z ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( z ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
