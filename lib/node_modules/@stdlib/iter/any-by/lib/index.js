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
* Test whether at least one iterated value passes a test implemented by a predicate function.
*
* @module @stdlib/iter/any-by
*
* @example
* var array2iterator = require( '@stdlib/array/to-iterator' );
* var iterAnyBy = require( '@stdlib/iter/any-by' );
*
* function predicate( v ) {
*     return ( v === 1 );
* }
*
* var it = array2iterator( [ 0, 0, 0, 0, 1 ] );
*
* var bool = iterAnyBy( it );
* // returns true
*/

// MODULES //

var iterAnyBy = require( './main.js' );


// EXPORTS //

module.exports = iterAnyBy;
