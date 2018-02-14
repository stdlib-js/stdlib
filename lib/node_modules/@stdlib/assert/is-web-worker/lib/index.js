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
* Boolean indicating if the runtime is a web worker.
*
* @module @stdlib/assert/is-web-worker
*
* @example
* var IS_WEB_WORKER = require( '@stdlib/assert/is-web-worker' );
*
* var bool = IS_WEB_WORKER;
* // returns <boolean>
*/

// MODULES //

var isWebWorker = require( './main.js' );


// MAIN //

var bool = isWebWorker();


// EXPORTS //

module.exports = bool;
