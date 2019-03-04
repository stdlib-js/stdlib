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
* Split values into two groups according to a predicate function.
*
* @module @stdlib/utils/bifurcate-by
*
* @example
* var bifurcateBy = require( '@stdlib/utils/bifurcate-by' );
*
* function predicate( v ) {
*     return v[ 0 ] === 'b';
* }
* var arr = [ 'beep', 'boop', 'foo', 'bar' ];
*
* var out = bifurcateBy( arr, predicate );
* // returns [ [ 'beep', 'boop', 'bar' ], [ 'foo' ] ]
*
* @example
* var bifurcateBy = require( '@stdlib/utils/bifurcate-by' );
*
* function predicate( v ) {
*     return v[ 0 ] === 'b';
* }
* var arr = [ 'beep', 'boop', 'foo', 'bar' ];
*
* var opts = {
*     'returns': 'indices'
* };
* var out = bifurcateBy( arr, opts, predicate );
* // returns [ [ 0, 1, 3 ], [ 2 ] ]
*
* @example
* var bifurcateBy = require( '@stdlib/utils/bifurcate-by' );
*
* function predicate( v ) {
*     return v[ 0 ] === 'b';
* }
* var arr = [ 'beep', 'boop', 'foo', 'bar' ];
*
* var opts = {
*     'returns': '*'
* };
* var out = bifurcateBy( arr, opts, predicate );
* // returns [ [ [ 0, 'beep' ], [ 1, 'boop' ], [ 3, 'bar' ] ], [ [ 2, 'foo' ] ] ]
*/

// MODULES //

var bifurcateBy = require( './bifurcate_by.js' );


// EXPORTS //

module.exports = bifurcateBy;
