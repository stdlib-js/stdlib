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
var Float64Array = require( '@stdlib/array/float64' );
var randu = require( '@stdlib/random/base/randu' );
var isObject = require( '@stdlib/assert/is-object' );
var pkg = require( './../package.json' ).name;
var lowess = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var result;
	var x;
	var y;
	var i;

	x = new Float64Array( 100 );
	y = new Float64Array( x.length );
	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = i;
		y[ i ] = ( 0.5*i ) + ( 10.0*randu() );
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x[ 0 ] = ( randu()*100.0 ) - 50.0;
		y[ 99 ] = ( randu()*100.0 ) - 50.0;
		result = lowess( x, y );
		if ( typeof result !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isObject( result ) ) {
		b.fail( 'should return an object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':sorted=true', function benchmark( b ) {
	var result;
	var opts;
	var x;
	var y;
	var i;

	x = new Float64Array( 100 );
	y = new Float64Array( x.length );
	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = i;
		y[ i ] = ( 0.5*i ) + ( 10.0*randu() );
	}
	opts = {
		'sorted': true
	};

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x[ 0 ] = ( randu()*100.0 ) - 50.0;
		y[ 99 ] = ( randu()*100.0 ) - 50.0;
		result = lowess( x, y, opts );
		if ( typeof result !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isObject( result ) ) {
		b.fail( 'should return an object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':f=0.5', function benchmark( b ) {
	var result;
	var opts;
	var x;
	var y;
	var i;

	x = new Float64Array( 100 );
	y = new Float64Array( x.length );
	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = i;
		y[ i ] = ( 0.5*i ) + ( 10.0*randu() );
	}
	opts = {
		'f': 0.5
	};

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x[ 0 ] = ( randu()*100.0 ) - 50.0;
		y[ 99 ] = ( randu()*100.0 ) - 50.0;
		result = lowess( x, y, opts );
		if ( typeof result !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isObject( result ) ) {
		b.fail( 'should return an object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':delta=3', function benchmark( b ) {
	var result;
	var opts;
	var x;
	var y;
	var i;

	x = new Float64Array( 100 );
	y = new Float64Array( x.length );
	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = ( randu()*100.0 ) - 50.0;
		y[ i ] = ( 0.2*x[ i ] ) + ( 10.0*randu() );
	}
	opts = {
		'delta': 3.0
	};

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x[ 0 ] = ( randu()*100.0 ) - 50.0;
		y[ 99 ] = ( 0.2*x[ 99 ] ) + ( 10.0*randu() );
		result = lowess( x, y, opts );
		if ( typeof result !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isObject( result ) ) {
		b.fail( 'should return an object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':delta=0', function benchmark( b ) {
	var result;
	var opts;
	var x;
	var y;
	var i;

	x = new Float64Array( 100 );
	y = new Float64Array( x.length );
	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = ( randu()*100.0 ) - 50.0;
		y[ i ] = ( 0.2*x[ i ] ) + ( 10.0*randu() );
	}
	opts = {
		'delta': 0.0
	};

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x[ 0 ] = ( randu()*100.0 ) - 50.0;
		y[ 99 ] = ( 0.2*x[ 99 ] ) + ( 10.0*randu() );
		result = lowess( x, y, opts );
		if ( typeof result !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isObject( result ) ) {
		b.fail( 'should return an object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':nsteps=1', function benchmark( b ) {
	var result;
	var opts;
	var x;
	var y;
	var i;

	x = new Float64Array( 100 );
	y = new Float64Array( x.length );
	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = ( randu()*100.0 ) - 50.0;
		y[ i ] = ( 0.2*x[ i ] ) + ( 10.0*randu() );
	}
	opts = {
		'nsteps': 1
	};

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x[ 0 ] = ( randu()*100.0 ) - 50.0;
		y[ 99 ] = ( 0.2*x[ 99 ] ) + ( 10.0*randu() );
		result = lowess( x, y, opts );
		if ( typeof result !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isObject( result ) ) {
		b.fail( 'should return an object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':nsteps=2', function benchmark( b ) {
	var result;
	var opts;
	var x;
	var y;
	var i;

	x = new Float64Array( 100 );
	y = new Float64Array( x.length );
	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = ( randu()*100.0 ) - 50.0;
		y[ i ] = ( 0.2*x[ i ] ) + ( 10.0*randu() );
	}
	opts = {
		'nsteps': 2
	};

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x[ 0 ] = ( randu()*100.0 ) - 50.0;
		y[ 99 ] = ( 0.2*x[ 99 ] ) + ( 10.0*randu() );
		result = lowess( x, y, opts );
		if ( typeof result !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isObject( result ) ) {
		b.fail( 'should return an object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
