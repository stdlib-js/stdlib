/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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

/*
* When adding modules to the namespace, ensure that they are added in alphabetical order according to module name.
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-read-only-property' );


// MAIN //

/**
* Top-level namespace.
*
* @namespace ns
*/
var ns = {};

/**
* @name iterCompositesSeq
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/iter/sequences/composites}
*/
setReadOnly( ns, 'iterCompositesSeq', require( '@stdlib/math/iter/sequences/composites' ) );

/**
* @name iterCubesSeq
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/iter/sequences/cubes}
*/
setReadOnly( ns, 'iterCubesSeq', require( '@stdlib/math/iter/sequences/cubes' ) );

/**
* @name iterEvenIntegersSeq
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/iter/sequences/even-integers}
*/
setReadOnly( ns, 'iterEvenIntegersSeq', require( '@stdlib/math/iter/sequences/even-integers' ) );

/**
* @name iterFactorialsSeq
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/iter/sequences/factorials}
*/
setReadOnly( ns, 'iterFactorialsSeq', require( '@stdlib/math/iter/sequences/factorials' ) );

/**
* @name iterFibonacciSeq
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/iter/sequences/fibonacci}
*/
setReadOnly( ns, 'iterFibonacciSeq', require( '@stdlib/math/iter/sequences/fibonacci' ) );

/**
* @name iterFifthPowersSeq
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/iter/sequences/fifth-powers}
*/
setReadOnly( ns, 'iterFifthPowersSeq', require( '@stdlib/math/iter/sequences/fifth-powers' ) );

/**
* @name iterFourthPowersSeq
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/iter/sequences/fourth-powers}
*/
setReadOnly( ns, 'iterFourthPowersSeq', require( '@stdlib/math/iter/sequences/fourth-powers' ) );

/**
* @name iterIntegersSeq
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/iter/sequences/integers}
*/
setReadOnly( ns, 'iterIntegersSeq', require( '@stdlib/math/iter/sequences/integers' ) );

/**
* @name iterLucasSeq
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/iter/sequences/lucas}
*/
setReadOnly( ns, 'iterLucasSeq', require( '@stdlib/math/iter/sequences/lucas' ) );

/**
* @name iterNegaFibonacciSeq
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/iter/sequences/negafibonacci}
*/
setReadOnly( ns, 'iterNegaFibonacciSeq', require( '@stdlib/math/iter/sequences/negafibonacci' ) );

/**
* @name iterNegaLucasSeq
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/iter/sequences/negalucas}
*/
setReadOnly( ns, 'iterNegaLucasSeq', require( '@stdlib/math/iter/sequences/negalucas' ) );

/**
* @name iterNegativeEvenIntegersSeq
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/iter/sequences/negative-even-integers}
*/
setReadOnly( ns, 'iterNegativeEvenIntegersSeq', require( '@stdlib/math/iter/sequences/negative-even-integers' ) );

/**
* @name iterNegativeIntegersSeq
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/iter/sequences/negative-integers}
*/
setReadOnly( ns, 'iterNegativeIntegersSeq', require( '@stdlib/math/iter/sequences/negative-integers' ) );

/**
* @name iterNegativeOddIntegersSeq
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/iter/sequences/negative-odd-integers}
*/
setReadOnly( ns, 'iterNegativeOddIntegersSeq', require( '@stdlib/math/iter/sequences/negative-odd-integers' ) );

/**
* @name iterNonFibonacciSeq
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/iter/sequences/nonfibonacci}
*/
setReadOnly( ns, 'iterNonFibonacciSeq', require( '@stdlib/math/iter/sequences/nonfibonacci' ) );

/**
* @name iterNonNegativeEvenIntegersSeq
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/iter/sequences/nonnegative-even-integers}
*/
setReadOnly( ns, 'iterNonNegativeEvenIntegersSeq', require( '@stdlib/math/iter/sequences/nonnegative-even-integers' ) );

/**
* @name iterNonNegativeIntegersSeq
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/iter/sequences/nonnegative-integers}
*/
setReadOnly( ns, 'iterNonNegativeIntegersSeq', require( '@stdlib/math/iter/sequences/nonnegative-integers' ) );

/**
* @name iterNonPositiveEvenIntegersSeq
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/iter/sequences/nonpositive-even-integers}
*/
setReadOnly( ns, 'iterNonPositiveEvenIntegersSeq', require( '@stdlib/math/iter/sequences/nonpositive-even-integers' ) );

/**
* @name iterNonPositiveIntegersSeq
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/iter/sequences/nonpositive-integers}
*/
setReadOnly( ns, 'iterNonPositiveIntegersSeq', require( '@stdlib/math/iter/sequences/nonpositive-integers' ) );

/**
* @name iterNonSquaresSeq
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/iter/sequences/nonsquares}
*/
setReadOnly( ns, 'iterNonSquaresSeq', require( '@stdlib/math/iter/sequences/nonsquares' ) );

/**
* @name iterOddIntegersSeq
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/iter/sequences/odd-integers}
*/
setReadOnly( ns, 'iterOddIntegersSeq', require( '@stdlib/math/iter/sequences/odd-integers' ) );

/**
* @name iterPositiveEvenIntegersSeq
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/iter/sequences/positive-even-integers}
*/
setReadOnly( ns, 'iterPositiveEvenIntegersSeq', require( '@stdlib/math/iter/sequences/positive-even-integers' ) );

/**
* @name iterPositiveIntegersSeq
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/iter/sequences/positive-integers}
*/
setReadOnly( ns, 'iterPositiveIntegersSeq', require( '@stdlib/math/iter/sequences/positive-integers' ) );

/**
* @name iterPositiveOddIntegersSeq
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/iter/sequences/positive-odd-integers}
*/
setReadOnly( ns, 'iterPositiveOddIntegersSeq', require( '@stdlib/math/iter/sequences/positive-odd-integers' ) );

/**
* @name iterPrimesSeq
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/iter/sequences/primes}
*/
setReadOnly( ns, 'iterPrimesSeq', require( '@stdlib/math/iter/sequences/primes' ) );

/**
* @name iterSquaredTriangularSeq
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/iter/sequences/squared-triangular}
*/
setReadOnly( ns, 'iterSquaredTriangularSeq', require( '@stdlib/math/iter/sequences/squared-triangular' ) );

/**
* @name iterSquaresSeq
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/iter/sequences/squares}
*/
setReadOnly( ns, 'iterSquaresSeq', require( '@stdlib/math/iter/sequences/squares' ) );

/**
* @name iterTriangularSeq
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/iter/sequences/triangular}
*/
setReadOnly( ns, 'iterTriangularSeq', require( '@stdlib/math/iter/sequences/triangular' ) );


// EXPORTS //

module.exports = ns;
