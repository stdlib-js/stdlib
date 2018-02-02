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

var rateval = require( './rational_pq.js' );


// VARIABLES //

var root1 = 1569415565.0 / 1073741824.0;
var root2 = ( 381566830.0 / 1073741824.0 ) / 1073741824.0;
var root3 = 0.9016312093258695918615325266959189453125e-19;
var Y = 0.99558162689208984;


// MAIN //

/**
* Evaluates the digamma function over interval `[1,2]`.
*
* @private
* @param {number} x - input value
* @returns {number} function value
*/
function digamma( x ) {
	var g;
	var r;
	g = x - root1;
	g -= root2;
	g -= root3;
	r = rateval( x-1.0 );
	return (g*Y) + (g*r);
}


// EXPORTS //

module.exports = digamma;
