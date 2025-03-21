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

// MODULES //

var ENV = require( '@stdlib/process/env' );


// MAIN //

var debug;

// Setting the local storage variable must be done BEFORE loading `debug`:
localStorage.debug = ENV.DEBUG;

// Load `debug`:
debug = require( 'debug/browser' ); // eslint-disable-line stdlib/require-order


// EXPORTS //

module.exports = debug;
