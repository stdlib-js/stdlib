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
var isObject = require( '@stdlib/assert/is-object' );
var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var Float64Array = require( '@stdlib/array/float64' );
var pkg = require( './../package.json' ).name;
var ttest = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var result;
	var len;
	var x;
	var i;

	len = 100;
	x = new Float64Array( len );
	for ( i = 0; i < len; i++ ) {
		x[ i ] = randu() * 50.0;
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x[ i%len ] = randu() * 50.0;
		result = ttest( x );
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

bench( pkg+':alternative=less', function benchmark( b ) {
	var result;
	var opts;
	var len;
	var x;
	var i;

	len = 100;
	x = new Float64Array( len );
	for ( i = 0; i < len; i++ ) {
		x[ i ] = randu() * 50.0;
	}
	opts = {
		'alternative': 'less'
	};

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x[ i%len ] = randu() * 50.0;
		result = ttest( x, opts );
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

bench( pkg+':alternative=greater', function benchmark( b ) {
	var result;
	var opts;
	var len;
	var x;
	var i;

	len = 100;
	x = new Float64Array( len );
	for ( i = 0; i < len; i++ ) {
		x[ i ] = randu() * 50.0;
	}
	opts = {
		'alternative': 'greater'
	};

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x[ i%len ] = randu()*50.0;
		result = ttest( x, opts );
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

bench( pkg+':alternative=two-sided', function benchmark( b ) {
	var result;
	var opts;
	var len;
	var x;
	var i;

	len = 100;
	x = new Float64Array( len );
	for ( i = 0; i < len; i++ ) {
		x[ i ] = randu() * 50.0;
	}
	opts = {
		'alternative': 'two-sided'
	};

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x[ i%len ] = randu() * 50.0;
		result = ttest( x, opts );
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

bench( pkg+'::paired', function benchmark( b ) {
	var result;
	var len;
	var y;
	var x;
	var i;

	len = 100;
	x = new Float64Array( len );
	y = new Float64Array( len );
	for ( i = 0; i < len; i++ ) {
		x[ i ] = ( randu()*50.0 ) + 1.0;
		y[ i ] = randu() * 50.0;
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x[ i%len ] = randu() * 50.0;
		result = ttest( x, y );
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

bench( pkg+'::paired:mu=1', function benchmark( b ) {
	var result;
	var opts;
	var len;
	var y;
	var x;
	var i;

	len = 100;
	x = new Float64Array( len );
	y = new Float64Array( len );
	for ( i = 0; i < len; i++ ) {
		x[ i ] = ( randu()*50.0 ) + 1.0;
		y[ i ] = randu() * 50.0;
	}
	opts = {
		'mu': 1.0
	};

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x[ i%len ] = randu() * 50.0;
		result = ttest( x, y, opts );
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

bench( pkg+':print', function benchmark( b ) {
	var digits;
	var result;
	var output;
	var len;
	var x;
	var i;

	len = 100;
	x = new Float64Array( len );
	for ( i = 0; i < len; i++ ) {
		x[ i ] = randu() * 50.0;
	}
	result = ttest( x );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		digits = ( i%8 ) + 1;
		output = result.print({
			'digits': digits
		});
		if ( typeof output !== 'string' ) {
			b.fail( 'should return a string' );
		}
	}
	b.toc();
	if ( !isString( output ) ) {
		b.fail( 'should return a string' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
