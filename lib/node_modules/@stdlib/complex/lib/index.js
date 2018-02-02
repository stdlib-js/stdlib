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
* @name complex
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/complex/cmplx}
*/
setReadOnly( ns, 'complex', require( '@stdlib/complex/cmplx' ) );

/**
* @name conj
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/complex/conj}
*/
setReadOnly( ns, 'conj', require( '@stdlib/complex/conj' ) );

/**
* @name Complex64
* @memberof ns
* @readonly
* @constructor
* @see {@link module:@stdlib/complex/float32}
*/
setReadOnly( ns, 'Complex64', require( '@stdlib/complex/float32' ) );

/**
* @name Complex128
* @memberof ns
* @readonly
* @constructor
* @see {@link module:@stdlib/complex/float64}
*/
setReadOnly( ns, 'Complex128', require( '@stdlib/complex/float64' ) );

/**
* @name imag
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/complex/imag}
*/
setReadOnly( ns, 'imag', require( '@stdlib/complex/imag' ) );

/**
* @name real
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/complex/real}
*/
setReadOnly( ns, 'real', require( '@stdlib/complex/real' ) );

/**
* @name reim
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/complex/reim}
*/
setReadOnly( ns, 'reim', require( '@stdlib/complex/reim' ) );

/**
* @name reviveComplex
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/complex/reviver}
*/
setReadOnly( ns, 'reviveComplex', require( '@stdlib/complex/reviver' ) );

/**
* @name reviveComplex64
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/complex/reviver-float32}
*/
setReadOnly( ns, 'reviveComplex64', require( '@stdlib/complex/reviver-float32' ) );

/**
* @name reviveComplex128
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/complex/reviver-float64}
*/
setReadOnly( ns, 'reviveComplex128', require( '@stdlib/complex/reviver-float64' ) );


// EXPORTS //

module.exports = ns;
