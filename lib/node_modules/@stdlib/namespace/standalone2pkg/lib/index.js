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

/**
* Return the internal package name associated with a provided standalone package name.
*
* @module @stdlib/namespace/standalone2pkg
*
* @example
* var standalone2pkg = require( '@stdlib/namespace/standalone2pkg' );
*
* var v = standalone2pkg( '@stdlib/math-base-special-sin' );
* // returns '@stdlib/math/base/special/sin'
*/

// MODULES //

var standalone2pkg = require( './main.js' );


// EXPORTS //

module.exports = standalone2pkg;
