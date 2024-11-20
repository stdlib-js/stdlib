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

# Define the path to the [ESLint][1] executable.
#
# To install ESLint:
#
# ```bash
# $ npm install eslint
# ```
#
# [1]: https://eslint.org/
ESLINT ?= $(BIN_DIR)/eslint

# Define the path to the ESLint configuration file:
ESLINT_CONF ?= $(CONFIG_DIR)/eslint/.eslintrc.js

# Define the path to the ESLint configuration file for examples:
ESLINT_CONF_EXAMPLES ?= $(CONFIG_DIR)/eslint/.eslintrc.examples.js

# Define the path to the ESLint configuration file for tests:
ESLINT_CONF_TESTS ?= $(CONFIG_DIR)/eslint/.eslintrc.tests.js

# Define the path to the ESLint configuration file for benchmarks:
ESLINT_CONF_BENCHMARKS ?= $(CONFIG_DIR)/eslint/.eslintrc.benchmarks.js

# Define the path to the ESLint ignore file:
ESLINT_IGNORE ?= $(ROOT_DIR)/.eslintignore

# Define the command-line options to use when invoking the ESLint executable:
ESLINT_FLAGS ?= \
	--ignore-path $(ESLINT_IGNORE) \
	--report-unused-disable-directives

ifeq ($(AUTOFIX),true)
	ESLINT_FLAGS += --fix
endif

FIX_TYPE ?=
ifneq ($(FIX_TYPE),)
	ESLINT_FLAGS += --fix-type $(FIX_TYPE)
else
ifeq ($(AUTOFIX),true)
	ESLINT_FLAGS += --fix-type problem,layout,directive
endif
endif

# RULES #

#/
# Lints JavaScript source files using [ESLint][1].
#
# ## Notes
#
# -   This rule is useful when wanting to glob for JavaScript source files (e.g., lint all JavaScript source files for a particular package).
#
# [1]: https://eslint.org/
#
# @private
# @param {string} [SOURCES_FILTER] - file path pattern (e.g., `.*/math/base/special/abs/.*`)
# @param {*} [FAST_FAIL] - flag indicating whether to stop linting upon encountering a lint error
#
# @example
# make eslint-src
#
# @example
# make eslint-src SOURCES_FILTER=".*/math/base/special/abs/.*"
#/
eslint-src: $(NODE_MODULES)
ifeq ($(FAIL_FAST), true)
	$(QUIET) $(FIND_SOURCES_CMD) | grep '^[\/]\|^[a-zA-Z]:[/\]' | while read -r file; do \
		echo ''; \
		echo "Linting file: $$file"; \
		$(ESLINT) $(ESLINT_FLAGS) --config $(ESLINT_CONF) $$file || exit 1; \
	done
else
	$(QUIET) $(FIND_SOURCES_CMD) | grep '^[\/]\|^[a-zA-Z]:[/\]' | while read -r file; do \
		echo ''; \
		echo "Linting file: $$file"; \
		$(ESLINT) $(ESLINT_FLAGS) --config $(ESLINT_CONF) $$file || echo 'Linting failed.'; \
	done
endif

.PHONY: eslint-src

#/
# Lints JavaScript test files using [ESLint][1].
#
# ## Notes
#
# -   This rule is useful when wanting to glob for JavaScript test files (e.g., lint all JavaScript test files for a particular package).
#
# [1]: https://eslint.org/
#
# @private
# @param {string} [TESTS_FILTER] - file path pattern (e.g., `.*/math/base/special/abs/.*`)
# @param {*} [FAST_FAIL] - flag indicating whether to stop linting upon encountering a lint error
#
# @example
# make eslint-tests
#
# @example
# make eslint-tests TESTS_FILTER=".*/math/base/special/abs/.*"
#/
eslint-tests: $(NODE_MODULES)
ifeq ($(FAIL_FAST), true)
	$(QUIET) $(FIND_TESTS_CMD) | grep '^[\/]\|^[a-zA-Z]:[/\]' | while read -r file; do \
		echo ''; \
		echo "Linting file: $$file"; \
		$(ESLINT) $(ESLINT_FLAGS) --config $(ESLINT_CONF_TESTS) $$file || exit 1; \
	done
else
	$(QUIET) $(FIND_TESTS_CMD) | grep '^[\/]\|^[a-zA-Z]:[/\]' | while read -r file; do \
		echo ''; \
		echo "Linting file: $$file"; \
		$(ESLINT) $(ESLINT_FLAGS) --config $(ESLINT_CONF_TESTS) $$file || echo 'Linting failed.'; \
	done
endif

.PHONY: eslint-tests

#/
# Lints JavaScript examples files using [ESLint][1].
#
# ## Notes
#
# -   This rule is useful when wanting to glob for JavaScript examples files (e.g., lint all JavaScript examples files for a particular package).
#
# [1]: https://eslint.org/
#
# @private
# @param {string} [EXAMPLES_FILTER] - file path pattern (e.g., `.*/math/base/special/abs/.*`)
# @param {*} [FAST_FAIL] - flag indicating whether to stop linting upon encountering a lint error
#
# @example
# make eslint-examples
#
# @example
# make eslint-examples EXAMPLES_FILTER=".*/math/base/special/abs/.*"
#/
eslint-examples: $(NODE_MODULES)
ifeq ($(FAIL_FAST), true)
	$(QUIET) $(FIND_EXAMPLES_CMD) | grep '^[\/]\|^[a-zA-Z]:[/\]' | while read -r file; do \
		echo ''; \
		echo "Linting file: $$file"; \
		$(ESLINT) $(ESLINT_FLAGS) --config $(ESLINT_CONF_EXAMPLES) $$file || exit 1; \
	done
else
	$(QUIET) $(FIND_EXAMPLES_CMD) | grep '^[\/]\|^[a-zA-Z]:[/\]' | while read -r file; do \
		echo ''; \
		echo "Linting file: $$file"; \
		$(ESLINT) $(ESLINT_FLAGS) --config $(ESLINT_CONF_EXAMPLES) $$file || echo 'Linting failed.'; \
	done
endif

.PHONY: eslint-examples

#/
# Lints JavaScript benchmark files using [ESLint][1].
#
# ## Notes
#
# -   This rule is useful when wanting to glob for JavaScript benchmark files (e.g., lint all JavaScript benchmark files for a particular package).
#
# [1]: https://eslint.org/
#
# @private
# @param {string} [BENCHMARKS_FILTER] - file path pattern (e.g., `.*/math/base/special/abs/.*`)
# @param {*} [FAST_FAIL] - flag indicating whether to stop linting upon encountering a lint error
#
# @example
# make eslint-benchmarks
#
# @example
# make eslint-benchmarks BENCHMARKS_FILTER=".*/math/base/special/abs/.*"
#/
eslint-benchmarks: $(NODE_MODULES)
ifeq ($(FAIL_FAST), true)
	$(QUIET) $(FIND_BENCHMARKS_CMD) | grep '^[\/]\|^[a-zA-Z]:[/\]' | while read -r file; do \
		echo ''; \
		echo "Linting file: $$file"; \
		$(ESLINT) $(ESLINT_FLAGS) --config $(ESLINT_CONF_BENCHMARKS) $$file || exit 1; \
	done
else
	$(QUIET) $(FIND_BENCHMARKS_CMD) | grep '^[\/]\|^[a-zA-Z]:[/\]' | while read -r file; do \
		echo ''; \
		echo "Linting file: $$file"; \
		$(ESLINT) $(ESLINT_FLAGS) --config $(ESLINT_CONF_BENCHMARKS) $$file || echo 'Linting failed.'; \
	done
endif

.PHONY: eslint-benchmarks

#/
# Lints a specified list of JavaScript files using [ESLint][1].
#
# ## Notes
#
# -   This rule is useful when wanting to lint a list of JavaScript files generated by some other command (e.g., a list of changed JavaScript files obtained via `git diff`).
#
# [1]: https://eslint.org/
#
# @private
# @param {string} FILES - list of JavaScript file paths
# @param {*} [FAST_FAIL] - flag indicating whether to stop linting upon encountering a lint error
#
# @example
# make eslint-files FILES='/foo/index.js /bar/index.js'
#/
eslint-files: $(NODE_MODULES)
ifeq ($(FAIL_FAST), true)
	$(QUIET) for file in $(FILES); do \
		echo ''; \
		echo "Linting file: $$file"; \
		$(ESLINT) $(ESLINT_FLAGS) --config $(ESLINT_CONF) $$file || exit 1; \
	done
else
	$(QUIET) for file in $(FILES); do \
		echo ''; \
		echo "Linting file: $$file"; \
		$(ESLINT) $(ESLINT_FLAGS) --config $(ESLINT_CONF) $$file || echo 'Linting failed.'; \
	done
endif

.PHONY: eslint-files
