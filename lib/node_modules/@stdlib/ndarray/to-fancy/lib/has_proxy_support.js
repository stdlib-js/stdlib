/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

var Proxy = require( '@stdlib/proxy/ctor' );


// MAIN //

/**
* Boolean indicating if an environment has Proxy support.
*
* @private
* @name hasSupport
* @type {boolean}
*/
var hasSupport = ( typeof Proxy === 'function' ); // NOTE: cannot use `@stdlib/assert/has-proxy-support` here, as that API uses code evaluation and might violate CSPs; consequently, this is a relatively weak check for proxy support


// EXPORTS //

module.exports = hasSupport;
