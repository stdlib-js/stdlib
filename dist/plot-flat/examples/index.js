/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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

var randn = require( '@stdlib/random/base/randn' );
var Float64Array = require( '@stdlib/array/float64' );
var plot = require( './../' ).plot;

var now;
var x;
var y;
var i;

// Create some data...
now = ( new Date() ).getTime();
x = new Float64Array( 100 );
y = new Float64Array( x.length );
for ( i = 0; i < x.length; i++ ) {
	x[ i ] = now + (i*360000);
	y[ i ] = 50.0 + (10.0*randn());
}

// Create a new plot:
var h = plot( [x], [y], {
	'width': 600,
	'height': 480,
	'xScale': 'time',
	'xTickFormat': '%H:%M'
});

// Render as HTML:
var html = h.render( 'html' );
console.log( html );
