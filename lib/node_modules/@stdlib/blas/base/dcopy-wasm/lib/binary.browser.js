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

var base64ToUint8Array = require( '@stdlib/string/base/base64-to-uint8array' );


// MAIN //

var wasm = base64ToUint8Array( 'AGFzbQEAAAAADwhkeWxpbmsuMAEEAAAAAAEWA2AAAGAFf39/f38AYAd/f39/f39/AAIPAQNlbnYGbWVtb3J5AgAAAwQDAAECB0wEEV9fd2FzbV9jYWxsX2N0b3JzAAAYX193YXNtX2FwcGx5X2RhdGFfcmVsb2NzAAAHY19kY29weQABD2NfZGNvcHlfbmRhcnJheQACCsYFAwMAAQs7AQJ+IAAgASACIAKsIgVCASAArCIGfX5CACAFQgBXG6cgAyAEIASsIgVCASAGfX5CACAFQgBXG6cQAguDBQEJfwJAIABBAEwNACACQQFGIAVBAUZxRQRAIABBBE8EQCAAQfz///8HcSEIIAUgBWoiCSAFaiIKIAVqIQsgAiACaiIMIAJqIg0gAmohDgNAIAQgBkEDdGogASADQQN0aisDADkDACAEIAUgBmpBA3RqIAEgAiADakEDdGorAwA5AwAgBCAGIAlqQQN0aiABIAMgDGpBA3RqKwMAOQMAIAQgBiAKakEDdGogASADIA1qQQN0aisDADkDACAGIAtqIQYgAyAOaiEDIAdBBGoiByAIRw0ACwsgAEEDcSIARQ0BQQAhBwNAIAQgBkEDdGogASADQQN0aisDADkDACAFIAZqIQYgAiADaiEDIAdBAWoiByAARw0ACwwBCyAAQQdwIgIiBwRAIAJBAWtBA08EQCAEQRhqIQkgAUEYaiEKIARBEGohCyABQRBqIQwgBEEIaiENIAFBCGohDiAHQQRxIQ8DQCAEIAZBA3QiAmogASADQQN0IgVqKwMAOQMAIAIgDWogBSAOaisDADkDACACIAtqIAUgDGorAwA5AwAgAiAJaiAFIApqKwMAOQMAIAZBBGohBiADQQRqIQMgCEEEaiIIIA9HDQALCyAHQQNxIgUEQEEAIQIDQCAEIAZBA3RqIAEgA0EDdGorAwA5AwAgBkEBaiEGIANBAWohAyACQQFqIgIgBUcNAAsLIABBB0gNAQsgACAHTA0AIAQgBkEDdGohAiABIANBA3RqIQEDQCACIAErAwA5AwAgAiABKwMIOQMIIAIgASsDEDkDECACIAErAxg5AxggAiABKwMgOQMgIAIgASsDKDkDKCACIAErAzA5AzAgB0EHaiIHIABIDQALCws=' );


// EXPORTS //

module.exports = wasm;
