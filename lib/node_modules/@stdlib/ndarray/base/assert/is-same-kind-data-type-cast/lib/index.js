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
* Determine if an ndarray data type can be safely cast to, or is of the same "kind" as, another ndarray data type.
*
* @module @stdlib/ndarray/base/assert/is-same-kind-data-type-cast
*
* @example
* var isSameKindCast = require( '@stdlib/ndarray/base/assert/is-same-kind-data-type-cast' );
*
* var bool = isSameKindCast( 'float32', 'float64' );
* // returns true
*
* bool = isSameKindCast( 'uint16', 'int16' );
* // returns false
*/

// MODULES //

var isSameKindCast = require( './main.js' );


// EXPORTS //

module.exports = isSameKindCast;
