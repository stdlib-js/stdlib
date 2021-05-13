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
* @name array
* @memberof ns
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/constants/array}
*/
setReadOnly( ns, 'array', require( '@stdlib/constants/array' ) );

/**
* @name complex64
* @memberof ns
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/constants/complex64}
*/
setReadOnly( ns, 'complex64', require( '@stdlib/constants/complex64' ) );

/**
* @name complex128
* @memberof ns
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/constants/complex128}
*/
setReadOnly( ns, 'complex128', require( '@stdlib/constants/complex128' ) );

/**
* @name float16
* @memberof ns
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/constants/float16}
*/
setReadOnly( ns, 'float16', require( '@stdlib/constants/float16' ) );

/**
* @name float32
* @memberof ns
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/constants/float32}
*/
setReadOnly( ns, 'float32', require( '@stdlib/constants/float32' ) );

/**
* @name float64
* @memberof ns
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/constants/float64}
*/
setReadOnly( ns, 'float64', require( '@stdlib/constants/float64' ) );

/**
* @name int8
* @memberof ns
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/constants/int8}
*/
setReadOnly( ns, 'int8', require( '@stdlib/constants/int8' ) );

/**
* @name int16
* @memberof ns
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/constants/int16}
*/
setReadOnly( ns, 'int16', require( '@stdlib/constants/int16' ) );

/**
* @name int32
* @memberof ns
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/constants/int32}
*/
setReadOnly( ns, 'int32', require( '@stdlib/constants/int32' ) );

/**
* @name path
* @memberof ns
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/constants/path}
*/
setReadOnly( ns, 'path', require( '@stdlib/constants/path' ) );

/**
* @name time
* @memberof ns
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/constants/time}
*/
setReadOnly( ns, 'time', require( '@stdlib/constants/time' ) );

/**
* @name uint8
* @memberof ns
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/constants/uint8}
*/
setReadOnly( ns, 'uint8', require( '@stdlib/constants/uint8' ) );

/**
* @name uint16
* @memberof ns
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/constants/uint16}
*/
setReadOnly( ns, 'uint16', require( '@stdlib/constants/uint16' ) );

/**
* @name uint32
* @memberof ns
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/constants/uint32}
*/
setReadOnly( ns, 'uint32', require( '@stdlib/constants/uint32' ) );

/**
* @name unicode
* @memberof ns
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/constants/unicode}
*/
setReadOnly( ns, 'unicode', require( '@stdlib/constants/unicode' ) );


// EXPORTS //

module.exports = ns;
