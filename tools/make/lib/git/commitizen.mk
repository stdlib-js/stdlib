#/
# @license Apache-2.0
#
# Copyright (c) 2023 The Stdlib Authors.
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

# Define the path to the [`commitzen`][1] executable.
#
# To install `commitzen`:
#
# ```bash
# $ npm install commitzen
# ```
#
# [1]: https://github.com/commitizen/cz-cli
COMMITIZEN ?= $(BIN_DIR)/cz


# RULES #

#/
# Provides an interactive prompt for entering commit message information in accordance with project Git commit conventions.
#
# ## Notes
#
# -   We have to temporarily move the `tsconfig` file, as `commitlint` (erroneously) attempts to use the file for compiling TypeScript.
#
# @private
#
# @example
# make commitizen-commit
#/
commitizen-commit: $(NODE_MODULES) $(COMMITIZEN)
	$(QUIET) mv $(ROOT_DIR)/tsconfig.json $(ROOT_DIR)/tsconfig.json.tmp
	$(QUIET) NODE_PATH="$(NODE_PATH)" $(NODE) "$(COMMITIZEN)" || (mv $(ROOT_DIR)/tsconfig.json.tmp $(ROOT_DIR)/tsconfig.json && exit 1)
	$(QUIET) mv $(ROOT_DIR)/tsconfig.json.tmp $(ROOT_DIR)/tsconfig.json

.PHONY: commitizen-commit

#/
# Retries a previous commit entered using Commitizen.
#
# ## Notes
#
# -   We have to temporarily move the `tsconfig` file, as `commitlint` (erroneously) attempts to use the file for compiling TypeScript.
#
# @private
#
# @example
# make commitizen-retry-commit
#/
commitizen-retry-commit: $(NODE_MODULES) $(COMMITIZEN)
	$(QUIET) mv $(ROOT_DIR)/tsconfig.json $(ROOT_DIR)/tsconfig.json.tmp
	$(QUIET) NODE_PATH="$(NODE_PATH)" $(NODE) "$(COMMITIZEN)" --retry || (mv $(ROOT_DIR)/tsconfig.json.tmp $(ROOT_DIR)/tsconfig.json && exit 1)
	$(QUIET) mv $(ROOT_DIR)/tsconfig.json.tmp $(ROOT_DIR)/tsconfig.json

.PHONY: commitizen-retry-commit
