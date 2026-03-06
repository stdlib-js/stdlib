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

var randn = require( '@stdlib/random/base/box-muller' );
var Float64Array = require( '@stdlib/array/float64' );
var now = require( '@stdlib/time/now' );
var plot = require( './../lib' );

var t;
var x;
var y;
var i;

// Create some data...
t = now() * 1000;
x = new Float64Array( 100 );
y = new Float64Array( x.length );
for ( i = 0; i < x.length; i++ ) {
	x[ i ] = t + (i*360000);
	y[ i ] = 50.0 + (10.0*randn());
}

// Create a new plot:
var plt = plot( [x], [y], {
	'width': 600,
	'height': 480,
	'xScale': 'time',
	'xTickFormat': '%H:%M',
	'renderFormat': 'html'
});

// Render as a virtual DOM tree:
var vtree = plt.render( 'vdom' );
console.log( JSON.stringify( vtree ) );

// Render as HTML:
var html = plt.render();
console.log( html );

// Listen for 'render' events (e.g., when triggered due to changes in state):
plt.on( 'render', onRender );

setTimeout( update, 1000 );

function update() {
	plt.width = 720;
}

function onRender( html ) {
	console.log( html );
}
