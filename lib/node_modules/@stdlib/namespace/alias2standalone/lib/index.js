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
* Return the standalone package name associated with a specified alias.
*
* @module @stdlib/namespace/alias2standalone
*
* @example
* var alias2standalone = require( '@stdlib/namespace/alias2standalone' );
*
* var v = alias2standalone( 'base.sin' );
* // returns '@stdlib/math-base-special-sin'
*/

// MODULES //

var alias2standalone = require( './main.js' );


// EXPORTS //

module.exports = alias2standalone;
