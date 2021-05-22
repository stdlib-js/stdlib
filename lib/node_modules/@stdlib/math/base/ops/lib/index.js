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
* @namespace ns
*/
var ns = {};

/**
* @name cadd
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/ops/cadd}
*/
setReadOnly( ns, 'cadd', require( '@stdlib/math/base/ops/cadd' ) );

/**
* @name cdiv
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/ops/cdiv}
*/
setReadOnly( ns, 'cdiv', require( '@stdlib/math/base/ops/cdiv' ) );

/**
* @name cmul
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/ops/cmul}
*/
setReadOnly( ns, 'cmul', require( '@stdlib/math/base/ops/cmul' ) );

/**
* @name cneg
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/ops/cneg}
*/
setReadOnly( ns, 'cneg', require( '@stdlib/math/base/ops/cneg' ) );

/**
* @name csub
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/ops/csub}
*/
setReadOnly( ns, 'csub', require( '@stdlib/math/base/ops/csub' ) );


// EXPORTS //

module.exports = ns;
