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
* @name ARCH
* @memberof ns
* @readonly
* @type {string}
* @see {@link module:@stdlib/os/arch}
*/
setReadOnly( ns, 'ARCH', require( '@stdlib/os/arch' ) );

/**
* @name BYTE_ORDER
* @memberof ns
* @readonly
* @type {string}
* @see {@link module:@stdlib/os/byte-order}
*/
setReadOnly( ns, 'BYTE_ORDER', require( '@stdlib/os/byte-order' ) );

/**
* @name configdir
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/os/configdir}
*/
setReadOnly( ns, 'configdir', require( '@stdlib/os/configdir' ) );

/**
* @name FLOAT_WORD_ORDER
* @memberof ns
* @readonly
* @type {string}
* @see {@link module:@stdlib/os/float-word-order}
*/
setReadOnly( ns, 'FLOAT_WORD_ORDER', require( '@stdlib/os/float-word-order' ) );

/**
* @name homedir
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/os/homedir}
*/
setReadOnly( ns, 'homedir', require( '@stdlib/os/homedir' ) );

/**
* @name NUM_CPUS
* @memberof ns
* @readonly
* @type {PositiveInteger}
* @see {@link module:@stdlib/os/num-cpus}
*/
setReadOnly( ns, 'NUM_CPUS', require( '@stdlib/os/num-cpus' ) );

/**
* @name PLATFORM
* @memberof ns
* @readonly
* @type {string}
* @see {@link module:@stdlib/os/platform}
*/
setReadOnly( ns, 'PLATFORM', require( '@stdlib/os/platform' ) );

/**
* @name tmpdir
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/os/tmpdir}
*/
setReadOnly( ns, 'tmpdir', require( '@stdlib/os/tmpdir' ) );


// EXPORTS //

module.exports = ns;
