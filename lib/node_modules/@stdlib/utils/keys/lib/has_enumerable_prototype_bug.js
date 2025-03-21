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

var isEnumerableProperty = require( '@stdlib/assert/is-enumerable-property' );
var noop = require( '@stdlib/utils/noop' );


// MAIN //

// Note: certain environments treat an object's prototype as enumerable, which, as a matter of convention, it shouldn't be...
var bool = isEnumerableProperty( noop, 'prototype' );


// EXPORTS //

module.exports = bool;
