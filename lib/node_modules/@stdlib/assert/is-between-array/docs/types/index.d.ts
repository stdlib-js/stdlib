/*
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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
* Comparison type.
*/
type Comparison = 'open' | 'closed';

/**
* Tests if a value is an array-like object where every element is between two values.
*
* @param value - value to test
* @param a - left comparison value
* @param b - right comparison value
* @param left - indicates whether the left comparison value is inclusive (default: 'closed')
* @param right - indicates whether the right comparison value is inclusive (default: 'closed')
* @returns boolean indicating whether a value is an array-like object where every element is between two values
*
* @example
* var arr = [ 3.0, 3.14, 4.0 ];
* var bool = isBetweenArray( arr, 3.0, 4.0 );
* // returns true
*
* @example
* var arr = [ 3.0, 3.14, 4.0 ];
* var bool = isBetweenArray( arr, 3.14, 4.0 );
* // returns false
*
* @example
* var arr = [ 3.0, 3.14, 4.0 ];
* var bool = isBetweenArray( arr, 3.0, 3.14 );
* // returns false
*
* @example
* var arr = [ 3.0, 3.14, 4.0 ];
* var bool = isBetweenArray( arr, 3.0, 4.0, 'open', 'closed' );
* // returns false
*
* @example
* var arr = [ 3.0, 3.14, 4.0 ];
* var bool = isBetweenArray( arr, 3.0, 4.0, 'closed', 'open' );
* // returns false
*/
declare function isBetweenArray( value: any, a: any, b: any, left?: Comparison, right?: Comparison ): boolean; // tslint-disable-line max-line-length


// EXPORTS //

export = isBetweenArray;
