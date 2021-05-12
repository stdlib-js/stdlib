/**
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
* @namespace constants
*/
var constants = {};

/**
* @name CBRT_EPS
* @memberof constants
* @readonly
* @constant
* @type {number}
* @see {@link module:@stdlib/constants/float16/cbrt-eps}
*/
setReadOnly( constants, 'CBRT_EPS', require( '@stdlib/constants/float16/cbrt-eps' ) );

/**
* @name EPS
* @memberof constants
* @readonly
* @constant
* @type {number}
* @see {@link module:@stdlib/constants/float16/eps}
*/
setReadOnly( constants, 'EPS', require( '@stdlib/constants/float16/eps' ) );

/**
* @name EXPONENT_BIAS
* @memberof constants
* @readonly
* @constant
* @type {number}
* @see {@link module:@stdlib/constants/float16/exponent-bias}
*/
setReadOnly( constants, 'EXPONENT_BIAS', require( '@stdlib/constants/float16/exponent-bias' ) );

/**
* @name MAX
* @memberof constants
* @readonly
* @constant
* @type {number}
* @see {@link module:@stdlib/constants/float16/max}
*/
setReadOnly( constants, 'MAX', require( '@stdlib/constants/float16/max' ) );

/**
* @name MAX_SAFE_INTEGER
* @memberof constants
* @readonly
* @constant
* @type {number}
* @see {@link module:@stdlib/constants/float16/max-safe-integer}
*/
setReadOnly( constants, 'MAX_SAFE_INTEGER', require( '@stdlib/constants/float16/max-safe-integer' ) );

/**
* @name MIN_SAFE_INTEGER
* @memberof constants
* @readonly
* @constant
* @type {number}
* @see {@link module:@stdlib/constants/float16/min-safe-integer}
*/
setReadOnly( constants, 'MIN_SAFE_INTEGER', require( '@stdlib/constants/float16/min-safe-integer' ) );

/**
* @name NINF
* @memberof constants
* @readonly
* @constant
* @type {number}
* @see {@link module:@stdlib/constants/float16/ninf}
*/
setReadOnly( constants, 'NINF', require( '@stdlib/constants/float16/ninf' ) );

/**
* @name NUM_BYTES
* @memberof constants
* @readonly
* @constant
* @type {number}
* @see {@link module:@stdlib/constants/float16/num-bytes}
*/
setReadOnly( constants, 'NUM_BYTES', require( '@stdlib/constants/float16/num-bytes' ) );

/**
* @name PINF
* @memberof constants
* @readonly
* @constant
* @type {number}
* @see {@link module:@stdlib/constants/float16/pinf}
*/
setReadOnly( constants, 'PINF', require( '@stdlib/constants/float16/pinf' ) );

/**
* @name PRECISION
* @memberof constants
* @readonly
* @constant
* @type {number}
* @see {@link module:@stdlib/constants/float16/precision}
*/
setReadOnly( constants, 'PRECISION', require( '@stdlib/constants/float16/precision' ) );

/**
* @name SMALLEST_NORMAL
* @memberof constants
* @readonly
* @constant
* @type {number}
* @see {@link module:@stdlib/constants/float16/smallest-normal}
*/
setReadOnly( constants, 'SMALLEST_NORMAL', require( '@stdlib/constants/float16/smallest-normal' ) );

/**
* @name SMALLEST_SUBNORMAL
* @memberof constants
* @readonly
* @constant
* @type {number}
* @see {@link module:@stdlib/constants/float16/smallest-subnormal}
*/
setReadOnly( constants, 'SMALLEST_SUBNORMAL', require( '@stdlib/constants/float16/smallest-subnormal' ) );

/**
* @name SQRT_EPS
* @memberof constants
* @readonly
* @constant
* @type {number}
* @see {@link module:@stdlib/constants/float16/sqrt-eps}
*/
setReadOnly( constants, 'SQRT_EPS', require( '@stdlib/constants/float16/sqrt-eps' ) );


// EXPORTS //

module.exports = constants;
