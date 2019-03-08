/*
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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

// TypeScript Version: 2.0

/**
* Tests if a value is an array of probabilities that sum to one.
*
* @param v - value to test
* @returns boolean indicating if a value is a probability array
*
* @example
* var bool = isUnityProbabilityArray( [ 0.25, 0.5, 0.25 ] );
* // returns true
*
* @example
* var bool = isUnityProbabilityArray( new Uint8Array( [ 0, 1 ] ) );
* // returns true
*
* @example
* var bool = isUnityProbabilityArray( [ 0.4, 0.4, 0.4 ] );
* // returns false
*
* @example
* var bool = isUnityProbabilityArray( [ 3.14, 0.0 ] );
* // returns false
*/
declare function isUnityProbabilityArray( v: any ): boolean;


// EXPORTS //

export = isUnityProbabilityArray;
