#/
# @license Apache-2.0
#
# Copyright (c) 2026 The Stdlib Authors.
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

# Define the path of the manifest.json linter executable:
MANIFEST_JSON_LINTER ?= $(TOOLS_PKGS_DIR)/lint/manifest-json/bin/cli

# Define the command-line options to be used when invoking the executable:
MANIFEST_JSON_LINTER_FLAGS ?=

# Define the path of the manifest.json dependency linter executable:
MANIFEST_JSON_DEPS_LINTER ?= $(TOOLS_PKGS_DIR)/lint/manifest-json-deps/bin/cli

# Define the command-line options to be used when invoking the executable:
MANIFEST_JSON_DEPS_LINTER_FLAGS ?=


# RULES #

#/
# Lints `manifest.json` files.
#
# @example
# make lint-manifest-json
#/
lint-manifest-json: $(NODE_MODULES)
	$(QUIET) echo 'Linting manifest.json files...'
	$(QUIET) NODE_PATH="$(NODE_PATH)" $(NODE) "$(MANIFEST_JSON_LINTER)" $(MANIFEST_JSON_LINTER_FLAGS) "$(ROOT_DIR)"

.PHONY: lint-manifest-json

#/
# Lints `manifest.json` dependencies.
#
# @example
# make lint-manifest-json-deps
#/
lint-manifest-json-deps: $(NODE_MODULES)
	$(QUIET) echo 'Linting manifest.json dependencies...'
	$(QUIET) NODE_PATH="$(NODE_PATH)" $(NODE) "$(MANIFEST_JSON_DEPS_LINTER)" $(MANIFEST_JSON_DEPS_LINTER_FLAGS) "$(ROOT_DIR)"

.PHONY: lint-manifest-json-deps
