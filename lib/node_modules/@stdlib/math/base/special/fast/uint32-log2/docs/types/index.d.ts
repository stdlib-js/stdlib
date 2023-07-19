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
* Computes an integer binary logarithm (base two).
*
* ## Method
*
* 1.  Note that the largest unsigned 32-bit integer is `4294967295`, which is `2^{32}-1`. Hence, the integer binary logarithm cannot exceed `31` (i.e., `16 + 8 + 4 + 2 + 1`), which corresponds to the bit sequence
*
*     ```binarystring
*     00000000000000000000000000011111
*     ```
*
* 2.  Initialize a return variable with the value zero.
*
* 3.  If at least one of the first sixteen most significant bits of the input 32-bit integer `x` is turned on, we know that the power to which the number `2` must be raised to obtain `x` is at least `16` (i.e., `x > 65536`). Hence, activate the corresponding bit of the return variable. Mutate `x` by shifting sixteen bits to the right, discarding the bits shifted off.
*
* 4.  Carry out the following steps with `B` in `[ 8, 4, 2, 1 ]`:
*
*     -   If at least one of the next `B` most significant bits of the current `x` is turned on, we know that the power to which the number `2` must be raised to obtain `x` has to be increased by `B`.
*     -   Activate the bit of the return variable that corresponds to `B`.
*     -   Mutate `x` by shifting `B` bits to the right, discarding the bits shifted off.
*
* 5.  The final value of the return variable is the integer binary logarithm of `x`.
*
*
* @param x - unsigned 32-bit integer
* @returns integer binary logarithm
*
* @example
* var v = log2( 4 >>> 0 );
* // returns 2
*
* @example
* var v = log2( 8 >>> 0 );
* // returns 3
*
* @example
* var v = log2( 9 >>> 0 );
* // returns 3
*/
declare function log2( x: number ): number;


// EXPORTS //

export = log2;
