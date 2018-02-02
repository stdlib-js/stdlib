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
* Evaluate Binet's formula extended to real numbers.
*
* @module @stdlib/math/base/special/binet
*
* @example
* var binet = require( '@stdlib/math/base/special/binet' );
*
* var y = binet( 0.0 );
* // returns 0.0
*
* y = binet( 1.0 );
* // returns 1.0
*
* y = binet( 2.0 );
* // returns 1.0
*
* y = binet( 3.0 );
* // returns 2.0
*
* y = binet( 4.0 );
* // returns 3.0
*
* y = binet( 5.0 );
* // returns ~5.0
*
* y = binet( 6.0 );
* // returns ~8.0
*/

// MODULES //

var binet = require( './main.js' );


// EXPORTS //

module.exports = binet;
