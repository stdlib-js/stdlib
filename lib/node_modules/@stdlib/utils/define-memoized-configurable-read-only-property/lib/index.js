/**
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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
* Define a configurable memoized read-only object property.
*
* @module @stdlib/utils/define-memoized-configurable-read-only-property
*
* @example
* var setMemoizedConfigurableReadOnly = require( '@stdlib/utils/define-memoized-configurable-read-only-property' );
*
* var obj = {};
*
* function foo() {
*     return 'bar';
* }
*
* setMemoizedConfigurableReadOnly( obj, 'foo', foo );
*
* var v = obj.foo;
* // returns 'bar'
*/

// MODULES //

var setMemoizedConfigurableReadOnly = require( './main.js' ); // eslint-disable-line id-length


// EXPORTS //

module.exports = setMemoizedConfigurableReadOnly;
