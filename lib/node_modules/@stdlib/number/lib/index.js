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
* @name Number
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/number/ctor}
*/
setReadOnly( ns, 'Number', require( '@stdlib/number/ctor' ) );

/**
* @name float32
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/number/float32}
*/
setReadOnly( ns, 'float32', require( '@stdlib/number/float32' ) );

/**
* @name float64
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/number/float64}
*/
setReadOnly( ns, 'float64', require( '@stdlib/number/float64' ) );

/**
* @name int32
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/number/int32}
*/
setReadOnly( ns, 'int32', require( '@stdlib/number/int32' ) );

/**
* @name uint8
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/number/uint8}
*/
setReadOnly( ns, 'uint8', require( '@stdlib/number/uint8' ) );

/**
* @name uint16
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/number/uint16}
*/
setReadOnly( ns, 'uint16', require( '@stdlib/number/uint16' ) );

/**
* @name uint32
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/number/uint32}
*/
setReadOnly( ns, 'uint32', require( '@stdlib/number/uint32' ) );


// EXPORTS //

module.exports = ns;
