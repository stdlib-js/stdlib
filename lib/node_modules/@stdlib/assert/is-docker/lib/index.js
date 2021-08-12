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
* Boolean indicating if the process is running in a Docker container.
*
* @module @stdlib/assert/is-docker
*
* @example
* var IS_DOCKER = require( '@stdlib/assert/is-docker' );
*
* var bool = IS_DOCKER;
* // returns <boolean>
*/

// MODULES //

var isDocker = require( './main.js' );


// MAIN //

var bool = isDocker();


// EXPORTS //

module.exports = bool;
