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
* Split values into two groups.
*
* @module @stdlib/utils/bifurcate
*
* @example
* var bifurcate = require( '@stdlib/utils/bifurcate' );
*
* var arr = [ 'beep', 'boop', 'foo', 'bar' ];
* var filter = [ true, true, false, true ];
*
* var out = bifurcate( arr, filter );
* // returns [ [ 'beep', 'boop', 'bar' ], [ 'foo' ] ]
*
* @example
* var bifurcate = require( '@stdlib/utils/bifurcate' );
*
* var arr = [ 'beep', 'boop', 'foo', 'bar' ];
* var filter = [ true, true, false, true ];
*
* var opts = {
*     'returns': 'indices'
* };
*
* var out = bifurcate( arr, opts, filter );
* // returns [ [ 0, 1, 3 ], [ 2 ] ]
*
* @example
* var bifurcate = require( '@stdlib/utils/bifurcate' );
*
* var arr = [ 'beep', 'boop', 'foo', 'bar' ];
* var filter = [ true, true, false, true ];
*
* var opts = {
*     'returns': '*'
* };
*
* var out = bifurcate( arr, opts, filter );
* // returns [ [ [ 0, 'beep' ], [ 1, 'boop' ], [ 3, 'bar' ] ], [ [ 2, 'foo' ] ] ]
*/

// MODULES //

var bifurcate = require( './bifurcate.js' );


// EXPORTS //

module.exports = bifurcate;
