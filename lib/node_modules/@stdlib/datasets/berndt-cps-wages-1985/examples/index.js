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

var Plot = require( '@stdlib/plot' );
var dataset = require( './../lib' );

var data;
var plot;
var opts;
var x;
var y;
var i;

data = dataset();

// Extract wage data...
x = [];
y = [];
for ( i = 0; i < data.length; i++ ) {
	x.push( data[ i ].age );
	y.push( data[ i ].wage );
}

// Create a plot instance:
opts = {
	'lineStyle': 'none',
	'symbols': 'closed-circle',
	'xLabel': 'Age',
	'yLabel': 'Wage',
	'title': 'Age vs Wage'
};
plot = new Plot( [ x ], [ y ], opts );

// Render the plot:
console.log( plot.render( 'html' ) ); // TODO: render as ASCII
