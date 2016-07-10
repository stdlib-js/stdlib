'use strict';

var randu = require( '@stdlib/math/base/random/randu' );
var erf = require( '@stdlib/math/base/special/erf' );

var x;
var y;
var i;

for ( i = 0; i < 100; i++ ) {
	x = randu()*2.0 - 1.0;
	y = erf( x );
	console.log( 'erf(%d) = %d', x, y );
}
