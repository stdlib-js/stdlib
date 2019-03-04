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
* Group values according to an indicator function.
*
* @module @stdlib/utils/group-by
*
* @example
* var groupBy = require( '@stdlib/utils/group-by' );
*
* function indicator( v ) {
*     return v[ 0 ];
* }
* var arr = [ 'beep', 'boop', 'foo', 'bar' ];
*
* var out = groupBy( arr, indicator );
* // returns { 'b': [ 'beep', 'boop', 'bar' ], 'f': [ 'foo' ] }
*
* @example
* var groupBy = require( '@stdlib/utils/group-by' );
*
* function indicator( v ) {
*     return v[ 0 ];
* }
* var arr = [ 'beep', 'boop', 'foo', 'bar' ];
*
* var opts = {
*     'returns': 'indices'
* };
* var out = groupBy( arr, opts, indicator );
* // returns { 'b': [ 0, 1, 3 ], 'f': [ 2 ] }
*
* @example
* var groupBy = require( '@stdlib/utils/group-by' );
*
* function indicator( v ) {
*     return v[ 0 ];
* }
* var arr = [ 'beep', 'boop', 'foo', 'bar' ];
*
* var opts = {
*     'returns': '*'
* };
* var out = groupBy( arr, opts, indicator );
* // returns { 'b': [ [ 0, 'beep' ], [ 1, 'boop' ], [ 3, 'bar' ] ], 'f': [ [ 2, 'foo' ] ] }
*/

// MODULES //

var groupBy = require( './group_by.js' );


// EXPORTS //

module.exports = groupBy;
