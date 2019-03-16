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
* Define a configurable read-only accessor.
*
* @module @stdlib/utils/define-configurable-read-only-accessor
*
* @example
* var setConfigurableReadOnlyAccessor = require( '@stdlib/utils/define-configurable-read-only-accessor' );
*
* function getter() {
*     return 'bar';
* }
*
* var obj = {};
*
* setConfigurableReadOnlyAccessor( obj, 'foo', getter );
*
* try {
*     obj.foo = 'boop';
* } catch ( err ) {
*     console.error( err.message );
* }
*/

// MODULES //

var setConfigurableReadOnlyAccessor = require( './main.js' ); // eslint-disable-line id-length


// EXPORTS //

module.exports = setConfigurableReadOnlyAccessor;
