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

/**
* Find elements in an array-like object that satisfy a test condition.
*
* @module @stdlib/utils/find
*
* @example
* var find = require( '@stdlib/utils/find' );
*
* var data = [ 30, 20, 50, 60, 10 ];
*
* function condition( val ) {
*     return val > 20;
* }
*
* var vals = find( data, condition );
* // returns [ 0, 2, 3 ]
*
* data = [ 30, 20, 50, 60, 10 ];
* var opts = {
*     'k': 2,
*     'returns': 'values'
* };
* vals = find( data, opts, condition );
* // returns [ 30, 50 ]
*/

// MODULES //

var find = require( './find.js' ); // eslint-disable-line stdlib/no-redeclare


// EXPORTS //

module.exports = find;
