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
* Consume an iterator and return the last iterated value.
*
* @module @stdlib/iter/last
*
* @example
* var array2iterator = require( '@stdlib/array/to-iterator' );
* var iterLast = require( '@stdlib/iter/last' );
*
* var it = array2iterator( [ 0, 0, 0, 0, 1 ] );
*
* var v = iterLast( it );
* // returns 1
*/

// MODULES //

var iterLast = require( './main.js' );


// EXPORTS //

module.exports = iterLast;
