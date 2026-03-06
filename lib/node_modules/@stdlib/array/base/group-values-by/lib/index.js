/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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
* Group element values according to an indicator function.
*
* @module @stdlib/array/base/group-values-by
*
* @example
* var groupValuesBy = require( '@stdlib/array/base/group-values-by' );
*
* function indicator( v ) {
*     return v[ 0 ];
* }
*
* var x = [ 'beep', 'boop', 'foo', 'bar' ];
*
* var out = groupValuesBy( x, indicator );
* // returns { 'b': [ 'beep', 'boop', 'bar' ], 'f': [ 'foo' ] }
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
