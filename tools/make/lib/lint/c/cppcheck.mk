#/
# @license Apache-2.0
#
# Copyright (c) 2021 The Stdlib Authors.
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

# Define the file path for storing a list of package `include` paths:
cppcheck_include_paths := $(TMP_DIR)/__tmp_cppcheck_include_paths__.txt

# Define the path to a list of warnings to suppress:
CPPCHECK_SUPPRESSIONS_LIST ?= $(CONFIG_DIR)/cppcheck/suppressions.txt

# Define the path to a list of warnings to suppress for examples:
CPPCHECK_SUPPRESSIONS_LIST_EXAMPLES ?= $(CONFIG_DIR)/cppcheck/suppressions.examples.txt

# Define the path to a list of warnings to suppress for benchmarks:
CPPCHECK_SUPPRESSIONS_LIST_BENCHMARKS ?= $(CONFIG_DIR)/cppcheck/suppressions.benchmarks.txt

# Define the path to a list of warnings to suppress for test fixtures:
CPPCHECK_SUPPRESSIONS_LIST_TESTS_FIXTURES ?= $(CONFIG_DIR)/cppcheck/suppressions.tests_fixtures.txt

# Define the command-line options to use when invoking the cppcheck executable:
CPPCHECK_FLAGS ?= \
	--std=c99 \
	--enable=warning,style,performance,portability,information,missingInclude \
	--inconclusive \
	--includes-file=$(cppcheck_include_paths) \
	--language=c \
	--error-exitcode=1 \
	--inline-suppr \
	--check-level=exhaustive \
	--quiet


# RULES #

#/
# Checks whether [cppcheck][1] is installed.
#
# [1]: http://cppcheck.sourceforge.net/
#
# @private
#
# @example
# make check-cppcheck
#/
check-cppcheck:
ifeq (, $(shell command -v $(CPPCHECK) 2>/dev/null))
	$(QUIET) echo ''
	$(QUIET) echo 'cppcheck is not installed. Please install cppcheck and try again.'
	$(QUIET) echo 'For install instructions, see http://cppcheck.sourceforge.net/'
	$(QUIET) echo 'and the project development guide.'
	$(QUIET) echo ''
	$(QUIET) exit 1
else
	$(QUIET) echo 'cppcheck is installed.'
	$(QUIET) exit 0
endif

.PHONY: check-cppcheck

#/
# Generates a temporary file containing a list of package include paths.
#
# @private
#/
$(cppcheck_include_paths):
	$(QUIET) $(MKDIR_RECURSIVE) $(TMP_DIR)
	$(QUIET) $(MAKE) -f $(this_file) list-pkgs-includes > $(cppcheck_include_paths)

#/
# Lints C source files using [cppcheck][1].
#
# ## Notes
#
# -   This rule is useful when wanting to glob for C source files (e.g., lint all C source files for a particular package).
#
# [1]: http://cppcheck.sourceforge.net/
#
# @private
# @param {string} [SOURCES_FILTER] - file path pattern (e.g., `.*/math/base/special/.*`)
# @param {*} [FAST_FAIL] - flag indicating whether to stop linting upon encountering a lint error
#
# @example
# make cppcheck-src
#
# @example
# make cppcheck-src SOURCES_FILTER=".*/math/base/special/.*"
#/
cppcheck-src: cppcheck-clean $(cppcheck_include_paths)
ifeq ($(FAIL_FAST), true)
	$(QUIET) $(FIND_C_SOURCES_CMD) | grep '^[\/]\|^[a-zA-Z]:[/\]' | while read -r file; do \
		echo ''; \
		echo "Linting file: $$file"; \
		$(CPPCHECK) $(CPPCHECK_FLAGS) --suppressions-list=$(CPPCHECK_SUPPRESSIONS_LIST) $$file || exit 1; \
	done
else
	$(QUIET) $(FIND_C_SOURCES_CMD) | grep '^[\/]\|^[a-zA-Z]:[/\]' | while read -r file; do \
		echo ''; \
		echo "Linting file: $$file"; \
		$(CPPCHECK) $(CPPCHECK_FLAGS) --suppressions-list=$(CPPCHECK_SUPPRESSIONS_LIST) $$file || echo 'Linting failed.'; \
	done
endif

.PHONY: cppcheck-src

#/
# Lints C examples files using [cppcheck][1].
#
# ## Notes
#
# -   This rule is useful when wanting to glob for C examples files (e.g., lint all C examples files for a particular package).
#
# [1]: http://cppcheck.sourceforge.net/
#
# @private
# @param {string} [EXAMPLES_FILTER] - file path pattern (e.g., `.*/math/base/special/.*`)
# @param {*} [FAST_FAIL] - flag indicating whether to stop linting upon encountering a lint error
#
# @example
# make cppcheck-examples
#
# @example
# make cppcheck-examples EXAMPLES_FILTER=".*/math/base/special/.*"
#/
cppcheck-examples: cppcheck-clean $(cppcheck_include_paths)
ifeq ($(FAIL_FAST), true)
	$(QUIET) $(FIND_C_EXAMPLES_CMD) | grep '^[\/]\|^[a-zA-Z]:[/\]' | while read -r file; do \
		echo ''; \
		echo "Linting file: $$file"; \
		$(CPPCHECK) $(CPPCHECK_FLAGS) --enable=unusedFunction --suppressions-list=$(CPPCHECK_SUPPRESSIONS_LIST_EXAMPLES) $$file || exit 1; \
	done
else
	$(QUIET) $(FIND_C_EXAMPLES_CMD) | grep '^[\/]\|^[a-zA-Z]:[/\]' | while read -r file; do \
		echo ''; \
		echo "Linting file: $$file"; \
		$(CPPCHECK) $(CPPCHECK_FLAGS) --enable=unusedFunction --suppressions-list=$(CPPCHECK_SUPPRESSIONS_LIST_EXAMPLES) $$file || echo 'Linting failed.'; \
	done
endif

.PHONY: cppcheck-examples

#/
# Lints C benchmark files using [cppcheck][1].
#
# ## Notes
#
# -   This rule is useful when wanting to glob for C benchmark files (e.g., lint all C benchmark files for a particular package).
#
# [1]: http://cppcheck.sourceforge.net/
#
# @private
# @param {string} [BENCHMARKS_FILTER] - file path pattern (e.g., `.*/math/base/special/.*`)
# @param {*} [FAST_FAIL] - flag indicating whether to stop linting upon encountering a lint error
#
# @example
# make cppcheck-benchmarks
#
# @example
# make cppcheck-benchmarks BENCHMARKS_FILTER=".*/math/base/special/.*"
#/
cppcheck-benchmarks: cppcheck-clean $(cppcheck_include_paths)
ifeq ($(FAIL_FAST), true)
	$(QUIET) $(FIND_C_BENCHMARKS_CMD) | grep '^[\/]\|^[a-zA-Z]:[/\]' | while read -r file; do \
		echo ''; \
		echo "Linting file: $$file"; \
		$(CPPCHECK) $(CPPCHECK_FLAGS) --suppressions-list=$(CPPCHECK_SUPPRESSIONS_LIST_BENCHMARKS) $$file || exit 1; \
	done
else
	$(QUIET) $(FIND_C_BENCHMARKS_CMD) | grep '^[\/]\|^[a-zA-Z]:[/\]' | while read -r file; do \
		echo ''; \
		echo "Linting file: $$file"; \
		$(CPPCHECK) $(CPPCHECK_FLAGS) --suppressions-list=$(CPPCHECK_SUPPRESSIONS_LIST_BENCHMARKS) $$file || echo 'Linting failed.'; \
	done
endif

.PHONY: cppcheck-benchmarks

#/
# Lints C test fixture files using [cppcheck][1].
#
# ## Notes
#
# -   This rule is useful when wanting to glob for C test fixture files (e.g., lint all C test fixture files for a particular package).
#
# [1]: http://cppcheck.sourceforge.net/
#
# @private
# @param {string} [TESTS_FIXTURES_FILTER] - file path pattern (e.g., `.*/math/base/special/.*`)
# @param {*} [FAST_FAIL] - flag indicating whether to stop linting upon encountering a lint error
#
# @example
# make cppcheck-tests-fixtures
#
# @example
# make cppcheck-tests-fixtures TESTS_FIXTURES_FILTER=".*/math/base/special/.*"
#/
cppcheck-tests-fixtures: cppcheck-clean $(cppcheck_include_paths)
ifeq ($(FAIL_FAST), true)
	$(QUIET) $(FIND_C_TESTS_FIXTURES_CMD) | grep '^[\/]\|^[a-zA-Z]:[/\]' | while read -r file; do \
		echo ''; \
		echo "Linting file: $$file"; \
		$(CPPCHECK) $(CPPCHECK_FLAGS) --suppressions-list=$(CPPCHECK_SUPPRESSIONS_LIST_TESTS_FIXTURES) $$file || exit 1; \
	done
else
	$(QUIET) $(FIND_C_TESTS_FIXTURES_CMD) | grep '^[\/]\|^[a-zA-Z]:[/\]' | while read -r file; do \
		echo ''; \
		echo "Linting file: $$file"; \
		$(CPPCHECK) $(CPPCHECK_FLAGS) --suppressions-list=$(CPPCHECK_SUPPRESSIONS_LIST_TESTS_FIXTURES) $$file || echo 'Linting failed.'; \
	done
endif

.PHONY: cppcheck-tests-fixtures

#/
# Lints a specified list of C files using [cppcheck][1].
#
# ## Notes
#
# -   This rule is useful when wanting to lint a list of C files generated by some other command (e.g., a list of changed C files obtained via `git diff`).
#
# [1]: http://cppcheck.sourceforge.net/
#
# @private
# @param {string} FILES - list of C file paths
# @param {*} [FAST_FAIL] - flag indicating whether to stop linting upon encountering a lint error
#
# @example
# make cppcheck-files FILES='/foo/file.c /bar/file.c'
#/
cppcheck-files: cppcheck-clean $(cppcheck_include_paths)
ifeq ($(FAIL_FAST), true)
	$(QUIET) for file in $(FILES); do \
		echo ''; \
		echo "Linting file: $$file"; \
		$(CPPCHECK) $(CPPCHECK_FLAGS) --suppressions-list=$(CPPCHECK_SUPPRESSIONS_LIST) $$file || exit 1; \
	done
else
	$(QUIET) for file in $(FILES); do \
		echo ''; \
		echo "Linting file: $$file"; \
		$(CPPCHECK) $(CPPCHECK_FLAGS) --suppressions-list=$(CPPCHECK_SUPPRESSIONS_LIST) $$file || echo 'Linting failed.'; \
	done
endif

.PHONY: cppcheck-files

#/
# Removes cppcheck temporary files.
#
# @example
# make cppcheck-clean
#/
cppcheck-clean:
	$(QUIET) $(DELETE) $(DELETE_FLAGS) $(cppcheck_include_paths)

.PHONY: cppcheck-clean
