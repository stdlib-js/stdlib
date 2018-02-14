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
* Test if a value is an array of probabilities that sum to one.
*
* @module @stdlib/assert/is-unity-probability-array
*
* @example
* var isUnityProbabilityArray = require( '@stdlib/assert/is-unity-probability-array' );
*
* var bool = isUnityProbabilityArray( [ 0.25, 0.5, 0.25 ] );
* // returns true
*
* bool = isUnityProbabilityArray( new Uint8Array( [ 0, 1 ] ) );
* // returns true
*
* bool = isUnityProbabilityArray( [ 0.4, 0.4, 0.4 ] );
* // returns false
*
* bool = isUnityProbabilityArray( [ 3.14, 0.0 ] );
* // returns false
*/

// MODULES //

var isUnityProbabilityArray = require( './main.js' );


// EXPORTS //

module.exports = isUnityProbabilityArray;
