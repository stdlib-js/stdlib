#/
# @license Apache-2.0
#
# Copyright (c) 2017 The Stdlib Authors.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#    http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#/

# VARIABLES #

# Define the command to create a disposable HTTP server:
repl_tmp_http_server := $(NODE) $(SRC_DIR)/@stdlib/net/disposable-http-server/bin/cli

# Define the source file to bundle:
# FIXME: this has gone away. We need to regenerate the bundle if it does not exist. See make/lib/dist/bundles.mk.
REPL_BROWSER_BUNDLE ?= $(DIST_DIR)/stdlib-repl.min.js


# TARGETS #

# Start a browser REPL environment.
#
# This target starts a browser REPL environment.

repl-browser: $(NODE_MODULES) $(REPL_BROWSER_BUNDLE)
	$(QUIET) $(CAT) $(REPL_BROWSER_BUNDLE) | NODE_PATH="$(NODE_PATH)" DEBUG=* $(repl_tmp_http_server) \
		--stdin javascript \
		--open

.PHONY: repl-browser
