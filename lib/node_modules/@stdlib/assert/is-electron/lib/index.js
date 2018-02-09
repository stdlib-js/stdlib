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

/**
* Boolean indicating if the runtime is Electron.
*
* @module @stdlib/assert/is-electron
*
* @example
* var IS_ELECTRON = require( '@stdlib/assert/is-electron' );
*
* var bool = IS_ELECTRON;
* // returns <boolean>
*/

// MODULES //

var isElectron = require( './main.js' );


// MAIN //

var bool = isElectron();


// EXPORTS //

module.exports = bool;
