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
* @namespace fast.special
*/
var ns = {};

/**
* @name abs
* @memberof fast.special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/fast/abs}
*/
setReadOnly( ns, 'abs', require( '@stdlib/math/base/special/fast/abs' ) );

/**
* @name acosh
* @memberof fast.special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/fast/acosh}
*/
setReadOnly( ns, 'acosh', require( '@stdlib/math/base/special/fast/acosh' ) );

/**
* @name ampbm
* @memberof fast.special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/fast/alpha-max-plus-beta-min}
*/
setReadOnly( ns, 'ampbm', require( '@stdlib/math/base/special/fast/alpha-max-plus-beta-min' ) );

/**
* @name asinh
* @memberof fast.special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/fast/asinh}
*/
setReadOnly( ns, 'asinh', require( '@stdlib/math/base/special/fast/asinh' ) );

/**
* @name atanh
* @memberof fast.special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/fast/atanh}
*/
setReadOnly( ns, 'atanh', require( '@stdlib/math/base/special/fast/atanh' ) );

/**
* @name hypot
* @memberof fast.special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/fast/hypot}
*/
setReadOnly( ns, 'hypot', require( '@stdlib/math/base/special/fast/hypot' ) );

/**
* @name max
* @memberof fast.special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/fast/max}
*/
setReadOnly( ns, 'max', require( '@stdlib/math/base/special/fast/max' ) );

/**
* @name min
* @memberof fast.special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/fast/min}
*/
setReadOnly( ns, 'min', require( '@stdlib/math/base/special/fast/min' ) );

/**
* @name powint
* @memberof fast.special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/fast/pow-int}
*/
setReadOnly( ns, 'powint', require( '@stdlib/math/base/special/fast/pow-int' ) );

/**
* @name log2Uint32
* @memberof fast.special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/fast/uint32-log2}
*/
setReadOnly( ns, 'log2Uint32', require( '@stdlib/math/base/special/fast/uint32-log2' ) );

/**
* @name sqrtUint32
* @memberof fast.special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/fast/uint32-sqrt}
*/
setReadOnly( ns, 'sqrtUint32', require( '@stdlib/math/base/special/fast/uint32-sqrt' ) );


// EXPORTS //

module.exports = ns;
