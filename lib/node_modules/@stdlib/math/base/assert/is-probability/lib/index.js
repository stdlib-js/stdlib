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
* Test if a numeric value is a probability.
*
* @module @stdlib/math/base/assert/is-probability
*
* @example
* var isProbability = require( '@stdlib/math/base/assert/is-probability' );
*
* var bool = isProbability( 0.5 );
* // returns true
*
* bool = isProbability( 3.14 );
* // returns false
*
* bool = isProbability( NaN );
* // returns false
*/

// MODULES //

var isProbability = require( './is_probability.js' );


// EXPORTS //

module.exports = isProbability;
