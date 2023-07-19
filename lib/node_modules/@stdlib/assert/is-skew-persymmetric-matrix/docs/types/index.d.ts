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
* Tests if a value is a skew-persymmetric matrix.
*
* ## Notes
*
* -   The implementation must rely on manually checking that \\(M_{ij} = -M_{N-j-1,N-i-1}\\), and, while element access is deterministic, no way exists to prevent cache misses outside of reordering the underlying matrix elements, thus incurring a larger performance penalty than just "jumping around" in a single pass.
* -   Worst case scenario: O(N^2).
*
* @param v - value to test
* @returns boolean indicating if a value is a skew-persymmetric matrix
*
* @example
* var ndarray = require( `@stdlib/ndarray/ctor` );
*
* var arr = ndarray( 'generic', [ 1, 0, 0, -1 ], [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );
* var bool = isSkewPersymmetricMatrix( arr );
* // returns true
*
* bool = isSkewPersymmetricMatrix( [] );
* // returns false
*/
declare function isSkewPersymmetricMatrix( v: any ): boolean;


// EXPORTS //

export = isSkewPersymmetricMatrix;
