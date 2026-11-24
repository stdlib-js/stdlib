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

var wasm = base64ToUint8Array( 'AGFzbQEAAAAADwhkeWxpbmsuMAEEAAAAAAETA2AEf39/fwF8YAAAYAN/f38BfAIPAQNlbnYGbWVtb3J5AgAAAwUEAQIAAAdPAxFfX3dhc21fY2FsbF9jdG9ycwAAFnN0ZGxpYl9zdHJpZGVkX2RtZWFucHcAAR5zdGRsaWJfc3RyaWRlZF9kbWVhbnB3X25kYXJyYXkAAgrCBAQDAAELGgAgACABIAJBASAAayACbEEAIAJBAEwbEAILPAAgAEEATARARAAAAAAAAPh/DwsgAEEBR0EAIAIbRQRAIAEgA0EDdGorAwAPCyAAIAEgAiADEAMgALijC+MDAgp/CHwgAEEATARARAAAAAAAAAAADwsCQCAAQQdNBEADQCAAIARGDQIgBEEBaiEEIA4gASADQQN0aisDAKAhDiACIANqIQMMAAsACyAAQYABTQRAIAEgA0EDdGoiBCACQThsIghqKwMAIQ4gBCACQTBsIglqKwMAIQ8gBCACQShsIgpqKwMAIRAgBCACQQV0IgtqKwMAIREgBCACQRhsIgxqKwMAIRIgBCACQQR0Ig1qKwMAIRMgBCACQQN0IgZqKwMAIRQgAEH4AXEhByAEKwMAIRVBCCEFA0AgAyAGaiEDIAUgB09FBEAgDiABIANBA3RqIgQgCGorAwCgIQ4gDyAEIAlqKwMAoCEPIBAgBCAKaisDAKAhECARIAQgC2orAwCgIREgEiAEIAxqKwMAoCESIBMgBCANaisDAKAhEyAUIAQgBmorAwCgIRQgBUEIaiEFIBUgBCsDAKAhFQwBCwsgFSAUoCATIBKgoCARIBCgIA8gDqCgoCEOIAdBAWtBeHFBCGohBANAIAAgBEwNAiAEQQFqIQQgDiABIANBA3RqKwMAoCEOIAIgA2ohAwwACwALIABBAXZB+P///wNxIgQgASACIAMQAyAAIARrIAEgAiADIAIgBGxqEAOgIQ4LIA4L' );


// EXPORTS //

module.exports = wasm;
