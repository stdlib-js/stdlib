/*
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

// TypeScript Version: 4.1

/**
* Tests if a value is a ragged nested array.
*
* @param value - value to test
* @returns boolean indicating if a value is a ragged nested array
*
* @example
* var bool = isRaggedNestedArray( [ [ 1, 2, 3 ], [ 4, 5 ] ] );
* // returns true
*
* @example
* var bool = isRaggedNestedArray( [ [ 1, 2, 3 ], [ 4, 5, 6 ] ] );
* // returns false
*
* @example
* var bool = isRaggedNestedArray( 'beep' );
* // returns false
*/
declare function isRaggedNestedArray( value: any ): boolean;


// EXPORTS //

export = isRaggedNestedArray;
