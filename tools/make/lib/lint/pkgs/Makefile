#/
# @license Apache-2.0
#
# Copyright (c) 2025 The Stdlib Authors.
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

# RULES #

# TODO: support linting filenames, package.json, REPL help, JavaScript CLI files (see pre-commit hook), license headers

# TODO: ensure support for `FAST_FAIL`

#/
# Lints packages.
#
# @param {string} [PACKAGES_FILTER] - file path pattern (e.g., `.*/blas/base/dasum/.*`)
# @param {*} [FAST_FAIL] - flag indicating whether to stop linting upon encountering a lint error
#
# @example
# make lint-pkgs
#
# @example
# make lint-pkgs PACKAGES_FILTER='.*/blas/base/dasum/.*'
#/
lint-pkgs: lint-editorconfig
	$(QUIET) $(MAKE) -f $(this_file) lint-markdown MARKDOWN_FILTER=$(PACKAGES_FILTER)
	$(QUIET) $(MAKE) -f $(this_file) lint-javascript SOURCES_FILTER=$(PACKAGES_FILTER) TESTS_FILTER=$(PACKAGES_FILTER) EXAMPLES_FILTER=$(PACKAGES_FILTER) BENCHMARKS_FILTER=$(PACKAGES_FILTER) FIX=1
	$(QUIET) $(MAKE) -f $(this_file) lint-python SOURCES_FILTER=$(PACKAGES_FILTER) TESTS_FIXTURES_FILTER=$(PACKAGES_FILTER) EXAMPLES_FILTER=$(PACKAGES_FILTER) BENCHMARKS_FILTER=$(PACKAGES_FILTER)
	$(QUIET) $(MAKE) -f $(this_file) lint-r SOURCES_FILTER=$(PACKAGES_FILTER) TESTS_FIXTURES_FILTER=$(PACKAGES_FILTER) EXAMPLES_FILTER=$(PACKAGES_FILTER) BENCHMARKS_FILTER=$(PACKAGES_FILTER)
	$(QUIET) $(MAKE) -f $(this_file) lint-c SOURCES_FILTER=$(PACKAGES_FILTER) TESTS_FIXTURES_FILTER=$(PACKAGES_FILTER) EXAMPLES_FILTER=$(PACKAGES_FILTER) BENCHMARKS_FILTER=$(PACKAGES_FILTER)
	$(QUIET) $(MAKE) -f $(this_file) lint-shell SHELL_FILTER=$(PACKAGES_FILTER)
	$(QUIET) $(MAKE) -f $(this_file) lint-typescript TYPESCRIPT_DECLARATIONS_FILTER=$(PACKAGES_FILTER) TYPESCRIPT_DECLARATIONS_TESTS_FILTER=$(PACKAGES_FILTER)

.PHONY: lint-pkgs
