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
* Boolean indicating if the runtime is the Electron renderer process.
*
* @module @stdlib/assert/is-electron-renderer
*
* @example
* var IS_ELECTRON_RENDERER = require( '@stdlib/assert/is-electron-renderer' );
*
* var bool = IS_ELECTRON_RENDERER;
* // returns <boolean>
*/

// MODULES //

var isElectronRenderer = require( './main.js' );


// MAIN //

var bool = isElectronRenderer();


// EXPORTS //

module.exports = bool;
