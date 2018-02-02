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

var randu = require( '@stdlib/random/base/randu' );
var reldiff = require( './../lib' );

var scales = [ 'max-abs', 'max', 'min-abs', 'min', 'mean-abs', 'mean', 'x', 'y' ];
var x;
var y;
var d;
var i;
var j;

for ( i = 0; i < 100; i++ ) {
	x = ( randu()*1.0e4 ) - 5.0e3;
	y = ( randu()*1.0e4 ) - 5.0e3;
	for ( j = 0; j < scales.length; j++ ) {
		d = reldiff( x, y, scales[j] );
		console.log( 'x = %d. y = %d. d = %d. scale: %s.', x, y, d, scales[j] );
	}
}
