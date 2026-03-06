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
var ceil = require( '@stdlib/math/base/special/ceil' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var pkg = require( './../package.json' ).name;
var ampbm = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var x;
	var y;
	var h;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x = ( randu()*100.0 ) - 50.0;
		y = ( randu()*100.0 ) - 50.0;
		h = ampbm( x, y );
		if ( isnan( h ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( h ) ) {
		b.fail( 'should not return NaN' );
	} else {
		b.pass( 'benchmark finished' );
	}
	b.end();
});

bench( pkg+':factory:alpha=1.0,beta=0.5,nonnegative=true,ints=false', function benchmark( b ) {
	var hypot;
	var x;
	var y;
	var h;
	var i;

	hypot = ampbm.factory( 1.0, 0.5, true, false );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x = ( randu()*100.0 ) - 0.0;
		y = ( randu()*100.0 ) - 0.0;
		h = hypot( x, y );
		if ( isnan( h ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( h ) ) {
		b.fail( 'should not return NaN' );
	} else {
		b.pass( 'benchmark finished' );
	}
	b.end();
});

bench( pkg+':factory:alpha=1.0,beta=0.5,nonnegative=true,ints=true', function benchmark( b ) {
	var hypot;
	var x;
	var y;
	var h;
	var i;

	hypot = ampbm.factory( 1.0, 0.5, true, true );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x = ceil( randu()*100.0 ) - 0;
		y = ceil( randu()*100.0 ) - 0;
		h = hypot( x, y );
		if ( isnan( h ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( h ) ) {
		b.fail( 'should not return NaN' );
	} else {
		b.pass( 'benchmark finished' );
	}
	b.end();
});

bench( pkg+':factory:alpha=1.0,beta=0.5,nonnegative=false,ints=false', function benchmark( b ) {
	var hypot;
	var x;
	var y;
	var h;
	var i;

	hypot = ampbm.factory( 1.0, 0.5, false, false );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x = ( randu()*100.0 ) - 50.0;
		y = ( randu()*100.0 ) - 50.0;
		h = hypot( x, y );
		if ( isnan( h ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( h ) ) {
		b.fail( 'should not return NaN' );
	} else {
		b.pass( 'benchmark finished' );
	}
	b.end();
});

bench( pkg+':factory:alpha=1.0,beta=0.5,nonnegative=false,ints=true', function benchmark( b ) {
	var hypot;
	var x;
	var y;
	var h;
	var i;

	hypot = ampbm.factory( 1.0, 0.5, false, true );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x = ceil( randu()*100.0 ) - 50;
		y = ceil( randu()*100.0 ) - 50;
		h = hypot( x, y );
		if ( isnan( h ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( h ) ) {
		b.fail( 'should not return NaN' );
	} else {
		b.pass( 'benchmark finished' );
	}
	b.end();
});

bench( pkg+':factory:alpha=1.0,beta=0.25,nonnegative=true,ints=false', function benchmark( b ) {
	var hypot;
	var x;
	var y;
	var h;
	var i;

	hypot = ampbm.factory( 1.0, 0.25, true, false );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x = ( randu()*100.0 ) - 0.0;
		y = ( randu()*100.0 ) - 0.0;
		h = hypot( x, y );
		if ( isnan( h ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( h ) ) {
		b.fail( 'should not return NaN' );
	} else {
		b.pass( 'benchmark finished' );
	}
	b.end();
});

bench( pkg+':factory:alpha=1.0,beta=0.25,nonnegative=true,ints=true', function benchmark( b ) {
	var hypot;
	var x;
	var y;
	var h;
	var i;

	hypot = ampbm.factory( 1.0, 0.25, true, true );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x = ceil( randu()*100.0 ) - 0;
		y = ceil( randu()*100.0 ) - 0;
		h = hypot( x, y );
		if ( isnan( h ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( h ) ) {
		b.fail( 'should not return NaN' );
	} else {
		b.pass( 'benchmark finished' );
	}
	b.end();
});

bench( pkg+':factory:alpha=1.0,beta=0.25,nonnegative=false,ints=false', function benchmark( b ) {
	var hypot;
	var x;
	var y;
	var h;
	var i;

	hypot = ampbm.factory( 1.0, 0.25, false, false );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x = ( randu()*100.0 ) - 50.0;
		y = ( randu()*100.0 ) - 50.0;
		h = hypot( x, y );
		if ( isnan( h ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( h ) ) {
		b.fail( 'should not return NaN' );
	} else {
		b.pass( 'benchmark finished' );
	}
	b.end();
});

bench( pkg+':factory:alpha=1.0,beta=0.25,nonnegative=false,ints=true', function benchmark( b ) {
	var hypot;
	var x;
	var y;
	var h;
	var i;

	hypot = ampbm.factory( 1.0, 0.25, false, true );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x = ceil( randu()*100.0 ) - 50;
		y = ceil( randu()*100.0 ) - 50;
		h = hypot( x, y );
		if ( isnan( h ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( h ) ) {
		b.fail( 'should not return NaN' );
	} else {
		b.pass( 'benchmark finished' );
	}
	b.end();
});

bench( pkg+':factory:alpha=1.0,beta=3/8,nonnegative=true,ints=false', function benchmark( b ) {
	var hypot;
	var x;
	var y;
	var h;
	var i;

	hypot = ampbm.factory( 1.0, 3.0/8.0, true, false );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x = ( randu()*100.0 ) - 0.0;
		y = ( randu()*100.0 ) - 0.0;
		h = hypot( x, y );
		if ( isnan( h ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( h ) ) {
		b.fail( 'should not return NaN' );
	} else {
		b.pass( 'benchmark finished' );
	}
	b.end();
});

bench( pkg+':factory:alpha=1.0,beta=3/8,nonnegative=true,ints=true', function benchmark( b ) {
	var hypot;
	var x;
	var y;
	var h;
	var i;

	hypot = ampbm.factory( 1.0, 3.0/8.0, true, true );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x = ceil( randu()*100.0 ) - 0;
		y = ceil( randu()*100.0 ) - 0;
		h = hypot( x, y );
		if ( isnan( h ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( h ) ) {
		b.fail( 'should not return NaN' );
	} else {
		b.pass( 'benchmark finished' );
	}
	b.end();
});

bench( pkg+':factory:alpha=1.0,beta=3/8,nonnegative=false,ints=false', function benchmark( b ) {
	var hypot;
	var x;
	var y;
	var h;
	var i;

	hypot = ampbm.factory( 1.0, 3.0/8.0, false, false );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x = ( randu()*100.0 ) - 50.0;
		y = ( randu()*100.0 ) - 50.0;
		h = hypot( x, y );
		if ( isnan( h ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( h ) ) {
		b.fail( 'should not return NaN' );
	} else {
		b.pass( 'benchmark finished' );
	}
	b.end();
});

bench( pkg+':factory:alpha=1.0,beta=3/8,nonnegative=false,ints=true', function benchmark( b ) {
	var hypot;
	var x;
	var y;
	var h;
	var i;

	hypot = ampbm.factory( 1.0, 3.0/8.0, false, true );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x = ceil( randu()*100.0 ) - 50;
		y = ceil( randu()*100.0 ) - 50;
		h = hypot( x, y );
		if ( isnan( h ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( h ) ) {
		b.fail( 'should not return NaN' );
	} else {
		b.pass( 'benchmark finished' );
	}
	b.end();
});

bench( pkg+':factory:alpha=0.96043387010342,beta=0.397824734759316,nonnegative=true,ints=false', function benchmark( b ) {
	var hypot;
	var x;
	var y;
	var h;
	var i;

	hypot = ampbm.factory( 0.96043387010342, 0.397824734759316, true, false );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x = ( randu()*100.0 ) - 0.0;
		y = ( randu()*100.0 ) - 0.0;
		h = hypot( x, y );
		if ( isnan( h ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( h ) ) {
		b.fail( 'should not return NaN' );
	} else {
		b.pass( 'benchmark finished' );
	}
	b.end();
});

bench( pkg+':factory:alpha=0.96043387010342,beta=0.397824734759316,nonnegative=true,ints=true', function benchmark( b ) {
	var hypot;
	var x;
	var y;
	var h;
	var i;

	hypot = ampbm.factory( 0.96043387010342, 0.397824734759316, true, true );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x = ceil( randu()*100.0 ) - 0;
		y = ceil( randu()*100.0 ) - 0;
		h = hypot( x, y );
		if ( isnan( h ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( h ) ) {
		b.fail( 'should not return NaN' );
	} else {
		b.pass( 'benchmark finished' );
	}
	b.end();
});

bench( pkg+':factory:alpha=0.96043387010342,beta=0.397824734759316,nonnegative=false,ints=false', function benchmark( b ) {
	var hypot;
	var x;
	var y;
	var h;
	var i;

	hypot = ampbm.factory( 0.96043387010342, 0.397824734759316, false, false );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x = ( randu()*100.0 ) - 50.0;
		y = ( randu()*100.0 ) - 50.0;
		h = hypot( x, y );
		if ( isnan( h ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( h ) ) {
		b.fail( 'should not return NaN' );
	} else {
		b.pass( 'benchmark finished' );
	}
	b.end();
});

bench( pkg+':factory:alpha=0.96043387010342,beta=0.397824734759316,nonnegative=false,ints=true', function benchmark( b ) {
	var hypot;
	var x;
	var y;
	var h;
	var i;

	hypot = ampbm.factory( 0.96043387010342, 0.397824734759316, false, true );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x = ceil( randu()*100.0 ) - 50;
		y = ceil( randu()*100.0 ) - 50;
		h = hypot( x, y );
		if ( isnan( h ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( h ) ) {
		b.fail( 'should not return NaN' );
	} else {
		b.pass( 'benchmark finished' );
	}
	b.end();
});
