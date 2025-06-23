/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

/**
* Insert array element values and the result of a callback function into a format string and print the result.
*
* @module @stdlib/console/log-each-map
*
* @example
* var logEachMap = require( '@stdlib/console/log-each-map' );
*
* function add( x, y ) {
*     return x + y;
* }
*
* var x = [ 1, 2, 3 ];
* var y = [ 4, 5, 6 ];
*
* logEachMap( '%d + %d = %d', x, y, add );
* // e.g., => '1 + 4 = 5\n2 + 5 = 7\n3 + 6 = 9\n'
*
* function multiply( x, y ) {
*     return x * y;
* }
*
* var x = [ 0.5, 1.0, 1.5 ];
* var y = [ 0.5, 0.75, 1.0 ];
*
* logEachMap( '%0.2f * %0.2f = %0.2f', x, y, multiply );
* // e.g., => '0.50 * 0.50 = 0.25\n1.00 * 0.75 = 0.75\n1.50 * 1.00 = 1.50\n'
*
* function append( x, y ) {
*     return x + y;
* }
*
* var x = [ 'foo', 'bar' ];
* var y = [ 'baz', 'beep' ];
*
* logEachMap( '%s+%s = %s', x, y, append );
* // e.g., => 'foo+baz = foobaz\nbar+beep = barbeep\n'
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
