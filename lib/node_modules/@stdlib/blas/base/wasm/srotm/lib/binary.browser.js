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

// MODULES //

var base64ToUint8Array = require( '@stdlib/string/base/base64-to-uint8array' );


// MAIN //

var wasm = base64ToUint8Array( 'AGFzbQEAAAAADwhkeWxpbmsuMAEEAAAAAAEYA2AAAGAGf39/f39/AGAIf39/f39/f38AAg8BA2VudgZtZW1vcnkCAAADBAMAAQIHMQMRX193YXNtX2NhbGxfY3RvcnMAAAdjX3Nyb3RtAAEPY19zcm90bV9uZGFycmF5AAIKkQYDAwABCy8AIAAgASACQQEgAGsiACACbEEAIAJBAEwbIAMgBCAAIARsQQAgBEEATBsgBRACC9oFAgZ9An8CQCAAQQBMDQAgByoCACIIQwAAAMBbDQAgAiAFRyACQQBMckUEQCAIQwAAAABdBEAgByoCECEIIAcqAgghCSAHKgIMIQogByoCBCELQQAhBgNAIAAgBkYNAyABIANBAnQiBWoiByAHKgIAIgwgC5QgCiAEIAVqIgUqAgAiDZSSOAIAIAUgDCAJlCAIIA2UkjgCACAGQQFqIQYgAiADaiEDDAALAAsgCEMAAAAAWwRAIAcqAgghCCAHKgIMIQlBACEGA0AgACAGRg0DIAEgA0ECdCIFaiIHIAQgBWoiBSoCACIKIAmUIAcqAgAiC5I4AgAgBSAKIAsgCJSSOAIAIAZBAWohBiACIANqIQMMAAsACyAHKgIQIQggByoCBCEJQQAhBgNAIAAgBkYNAiABIANBAnQiBWoiByAHKgIAIgogCZQgBCAFaiIFKgIAIguSOAIAIAUgCyAIlCAKkzgCACAGQQFqIQYgAiADaiEDDAALAAsgCEMAAAAAXQRAIAcqAhAhCCAHKgIIIQkgByoCDCEKIAcqAgQhC0EAIQcDQCAAIAdGDQIgASADQQJ0aiIOIA4qAgAiDCALlCAKIAQgBkECdGoiDioCACINlJI4AgAgDiAMIAmUIAggDZSSOAIAIAdBAWohByAFIAZqIQYgAiADaiEDDAALAAsgCEMAAAAAWwRAIAcqAgghCCAHKgIMIQlBACEHA0AgACAHRg0CIAEgA0ECdGoiDiAEIAZBAnRqIg8qAgAiCiAJlCAOKgIAIguSOAIAIA8gCiALIAiUkjgCACAHQQFqIQcgBSAGaiEGIAIgA2ohAwwACwALIAcqAhAhCCAHKgIEIQlBACEHA0AgACAHRg0BIAEgA0ECdGoiDiAOKgIAIgogCZQgBCAGQQJ0aiIOKgIAIguSOAIAIA4gCyAIlCAKkzgCACAHQQFqIQcgBSAGaiEGIAIgA2ohAwwACwALCw==' );


// EXPORTS //

module.exports = wasm;
