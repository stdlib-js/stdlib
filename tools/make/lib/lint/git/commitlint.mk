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

# Define the path to the [commitlint][1] executable.
#
# To install commitlint:
#
# ```bash
# $ npm install commitlint
# ```
#
# [1]: https://github.com/conventional-changelog/commitlint
COMMITLINT ?= $(BIN_DIR)/commitlint

# Define the command-line options to be used when invoking the executable:
COMMITLINT_FLAGS ?= \
	--cwd "$(ROOT_DIR)" \
	--config "$(CONFIG_DIR)/commitlint/.commitlintrc.js" \
	--verbose


# RULES #

#/
# Lints a commit.
#
# ## Notes
#
# -   We have to temporarily move the `tsconfig` file, as `commitlint` (erroneously) attempts to use the file for compiling TypeScript.
#
# @private
#
# @example
# make commitlint
#/
commitlint: $(NODE_MODULES)
	$(QUIET) mv $(ROOT_DIR)/tsconfig.json $(ROOT_DIR)/tsconfig.json.tmp
	$(QUIET) NODE_PATH="$(NODE_PATH)" $(NODE) "$(COMMITLINT)" $(COMMITLINT_FLAGS) --edit || ( mv $(ROOT_DIR)/tsconfig.json.tmp $(ROOT_DIR)/tsconfig.json && exit 1 )
	$(QUIET) mv $(ROOT_DIR)/tsconfig.json.tmp $(ROOT_DIR)/tsconfig.json

.PHONY: commitlint

#/
# Lints a commit message.
#
# ## Notes
#
# -   We have to temporarily move the `tsconfig` file, as `commitlint` (erroneously) attempts to use the file for compiling TypeScript.
#
# @private
#
# @example
# make commitlint-message
#/
commitlint-message: $(NODE_MODULES)
	$(QUIET) mv $(ROOT_DIR)/tsconfig.json $(ROOT_DIR)/tsconfig.json.tmp
	$(QUIET) ( printf "$(GIT_COMMIT_MESSAGE)" | NODE_PATH="$(NODE_PATH)" $(NODE) "$(COMMITLINT)" $(COMMITLINT_FLAGS) ) || ( mv $(ROOT_DIR)/tsconfig.json.tmp $(ROOT_DIR)/tsconfig.json && exit 1 )
	$(QUIET) mv $(ROOT_DIR)/tsconfig.json.tmp $(ROOT_DIR)/tsconfig.json

.PHONY: commitlint-message

#/
# Lints a list of files, each containing a commit message.
#
# ## Notes
#
# -   We have to temporarily move the `tsconfig` file, as `commitlint` (erroneously) attempts to use the file for compiling TypeScript.
#
# @private
#
# @param {string} FILES - list of file paths
# @param {*} [FAST_FAIL] - flag indicating whether to stop linting upon encountering a lint error
#
# @example
# make commitlint-files FILES='/foo/commit.txt'
#/
commitlint-files: $(NODE_MODULES)
	$(QUIET) mv $(ROOT_DIR)/tsconfig.json $(ROOT_DIR)/tsconfig.json.tmp
ifeq ($(FAIL_FAST), true)
	$(QUIET) for file in $(FILES); do \
		echo ''; \
		echo "Linting commit message:"; \
		( cat $$file | grep -v '^#' | $(NODE) "$(COMMITLINT)" $(COMMITLINT_FLAGS) ) || ( mv $(ROOT_DIR)/tsconfig.json.tmp $(ROOT_DIR)/tsconfig.json && exit 1 ); \
	done
else
	$(QUIET) for file in $(FILES); do \
		echo ''; \
		echo "Linting commit message"; \
		( cat $$file | grep -v '^#' | $(NODE) "$(COMMITLINT)" $(COMMITLINT_FLAGS) ) || echo 'Linting failed.'; \
	done
endif
	$(QUIET) mv $(ROOT_DIR)/tsconfig.json.tmp $(ROOT_DIR)/tsconfig.json

.PHONY: commitlint-files
