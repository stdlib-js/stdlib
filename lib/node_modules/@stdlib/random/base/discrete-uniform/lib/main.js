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

// MODULES //

var factory = require( './factory.js' );


// MAIN //

/**
* Returns a pseudorandom number drawn from a discrete uniform distribution with minimum support `a` and maximum support `b`.
*
* ## Method
*
* -   Let \\( R \\) be a pseudorandom generator (PRNG) which yields integers on the interval \\( \[ A, B ] \\).
*
* -   If \\( a = b \\), then \\( rv = a \\).
*
* -   Let \\( r1 = b - a \\) and \\( r2 = B - A \\). If \\( r2 = r1 \\) (likely a rare occurrence), then
*
*     ```tex
*     rv = ( R() - B ) + a
*     ```
*
*     where, for real integer types, operation order is important in order to avoid overflow.
*
* -   If \\( r2 < r1 \\), use rejection sampling to map random variates from \\( R \\) to a larger domain (e.g., \\( {0,1,2,3} \rightarrow {0,1,2,3,4} \\)). For real integer types (and floating-point integer values), we must take extra care to avoid overflow. During sampling, the following conditions will hold:
*
*     -   First, consider the post-condition: \\( \textrm{result} \leq r2 \\), thus avoiding overflow.
*
*     -   Begin with definition of \\( \textrm{limit} \\)
*
*         ```tex
*         \textrm{limit} = \lfloor{\frac{r2+1}{r1+1}\rfloor
*         ```
*
*         thus,
*
*         ```tex
*         \textrm{limit}\ \cdot (r1+1) \leq r2+1
*         ```
*
*     -   Let \\( m \\) be a random factor where the loop condition is defined as
*
*         ```tex
*         m \leq \textrm{limit}
*         ```
*
*     -   Let \\( \textrm{result} \\) be the generator output, which is expressed base \\( r2+1 \\) and obeys the loop invariant \\( \textrm{result} < m \\).
*
*     -   Let \\( rv \\) be a realization of the PRNG. Then,
*
*         ```tex
*         rv-A \leq r1
*         ```
*
*         and, by the loop condition, \\( m \leq \textrm{limit} \\).
*
*     -   Therefore,
*
*         ```tex
*         m \cdot (rv - A + 1) \leq r2+1
*         ```
*
*     -   Rearranging terms,
*
*         ```tex
*         m + m \cdot (rv - A) \leq r2+1
*         ```
*
*     -   Since \\( \textrm{result} < m \\),
*
*         ```tex
*         \textrm{result} + m \cdot (rv - A) < r2+1
*         ```
*
*     -   Next, consider the post-condition: \\( \textrm{result} < m \cdot (r2+1) \\).
*
*     -   Since \\( \textrm{result} < m \\) and \\( rv - A \leq r1 \\),
*
*         ```tex
*         \textrm{result} + m \cdot (rv - A) < m + m \cdot (rv - A)
*         ```
*
*     -   Therefore,
*
*         ```tex
*         \textrm{result} + m \cdot (rv - A) < m + m \cdot r1
*         ```
*
*     -   Therefore,
*
*         ```tex
*         \textrm{result} + m \cdot (rv - A) < m \cdot (r1+1)
*         ```
*
*     -   Next, consider the post-condition: \\( m \leq r2 \\).
*
*     -   According to the definition of \\( \textrm{limit} \\) and the loop condition \\( m \leq \textrm{limit} \\),
*
*         ```tex
*         m \cdot (r1+1) \leq r2+1
*         ```
*
*     -   If \\( r2 \\) is **not** an integer power of the generator range \\( r1 \\), i.e.,
*
*         ```tex
*         m \cdot (r1+1) \neq r2+1
*         ```
*
*         then
*
*         ```tex
*         m \cdot (r1+1) < r2+1
*         ```
*
*     -   Thus, \\( \textrm{result} < m \\).
*
*     -   Next, consider the post-condition: \\( r2/m < r1+1 \\).
*
*     -   To show this is true, let us try to prove its opposite. Given the loop condition \\( m > \textrm{limit} \\), assume
*
*         ```tex
*         r2/m > r1+1
*         ```
*
*     -   Accordingly,
*
*         ```tex
*         r2 \geq m \cdot (r1+1)
*         ```
*
*     -   Hence,
*
*         ```tex
*         r2+1 > m \cdot (r1+1)
*         ```
*
*     -   Using the loop condition,
*
*         ```tex
*         r2+1 > (\textrm{limit}+1) \cdot (r1+1)
*         ```
*
*     -   Rearranging terms,
*
*         ```tex
*         \frac{r2+1}{r1+1} > \textrm{limit} + 1
*         ```
*
*     -   Hence,
*
*         ```tex
*         \textrm{limit} < \lfloor{\frac{r2+1}{r1+1}} \rfloor
*         ```
*
*     -   But the definition of \\( \textrm{limit} \\) is
*
*         ```tex
*         \textrm{limit} = \lfloor{\frac{r2+1}{r1+1}}
*         ```
*
*     -   Thus, our assumption cannot be true, providing the post-condition by reductio ad absurdum.
*
*     -   Next, consider the post-condition
*
*         ```tex
*         r2 \leq \frac{r2}{m} \cdot m + (m - 1)
*         ```
*
*     -   Recall the identity
*
*         ```tex
*         r2 = \frac{r2}{m} \cdot m + r2 \mod m
*         ```
*
*     -   By the definition of the modulus
*
*         ```tex
*         r2 \mod m < m
*         ```
*
*     -   Therefore,
*
*         ```tex
*         r2 < \frac{r2}{m} \cdot m + m
*         ```
*
*     -   Hence,
*
*         ```tex
*         r2 \leq \frac{r2}{m} \cdot m + (m - 1)
*         ```
*
*     At this point, the maximum value \\( \textrm{result} \\) is \\( m-1 \\). Hence, we can generate numbers that can be at least as large as \\( r2 \\), but we must be careful to avoid overflow during addition and in the sampling rejection. Anything which overflows is larger than \\( r2 \\) and can thus be rejected.
*
* -   If \\( r1 > r2 \\), use rejection sampling to map random variates from \\( R \\) to a smaller domain (e.g., \\( {0,1,2,3,4} \rightarrow {0,1,2,3} \\)) by defining "buckets" in which multiple random variates in \\( R \\) map to a single random variate in the smaller domain. We are safe in adding 1 to \\( r2 \\); however, we need to be careful to not cause overflow when adding 1 to \\( r1 \\).
*
* @name discreteUniform
* @type {PRNG}
* @param {integer} a - minimum support
* @param {integer} b - maximum support
* @returns {integer} pseudorandom number
*
* @example
* var v = discreteUniform( 1, 10 );
* // returns <number>
*/
var discreteUniform = factory();


// EXPORTS //

module.exports = discreteUniform;
