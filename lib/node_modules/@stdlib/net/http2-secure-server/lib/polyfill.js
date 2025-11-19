/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

// MAIN //

/**
* Polyfill for environments which do not support HTTP/2.
*
* @private
* @throws {Error} environment lacks support for HTTP/2
*/
function polyfill() {
	throw new Error( 'invalid operation. Environment lacks support for HTTP/2. Ensure that you are running on a Node.js version which supports HTTP/2 and has been built to include support for the Node.js `crypto` module.' );
}


// EXPORTS //

module.exports = polyfill;
