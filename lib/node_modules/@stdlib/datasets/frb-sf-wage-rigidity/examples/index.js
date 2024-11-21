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

// TODO: replace with full ASCII chart

var Chart = require( '@stdlib/plot/sparklines/unicode/tristate' );
var wages = require( './../lib' );

var chart;
var opts;
var data;
var v1;
var v2;
var d;
var i;

data = wages();
d = new Array( data.length );
v1 = data[ 0 ].all_workers;
for ( i = 1; i < data.length; i++ ) {
	v2 = data[ i ].all_workers;
	if ( v2 === null ) {
		d[ i ] = NaN;
	} else if ( v2 < v1 ) {
		d[ i ] = -1;
	} else if ( v2 > v1 ) {
		d[ i ] = 1;
	} else {
		d[ i ] = 0;
	}
	v1 = v2;
}

opts = {
	'data': d
};
chart = new Chart( opts );

console.log( chart.render() );
