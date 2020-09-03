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

# Define the path to the [pydocstyle][1] executable.
#
# To install pydocstyle:
#
# ```bash
# $ pip install pydocstyle
# ```
#
# [1]: https://github.com/PyCQA/pydocstyle
PYDOCSTYLE ?= pydocstyle

# Define the path to the pydocstyle configuration file:
PYDOCSTYLE_CONF ?= $(CONFIG_DIR)/pydocstyle/.pydocstyle

# Define the command-line options to use when invoking the pydocstyle executable:
PYDOCSTYLE_FLAGS ?= \
	--config $(PYDOCSTYLE_CONF)


# RULES #

#/
# Checks whether [pydocstyle][1] is installed.
#
# [1]: https://github.com/PyCQA/pydocstyle
#
# @private
#
# @example
# make check-pydocstyle
#/
check-pydocstyle:
ifeq (, $(shell command -v $(PYDOCSTYLE) 2>/dev/null))
	$(QUIET) echo ''
	$(QUIET) echo 'pydocstyle is not installed. Please install pydocstyle and try again.'
	$(QUIET) echo 'For install instructions, see https://github.com/PyCQA/pydocstyle.'
	$(QUIET) echo ''
	$(QUIET) exit 1
else
	$(QUIET) echo 'pydocstyle is installed.'
	$(QUIET) exit 0
endif

.PHONY: check-pydocstyle

#/
# Lints Python source docstring style.
#
# ## Notes
#
# -   This rule is useful when wanting to glob for Python source files (e.g., lint all Python source files for a particular package).
#
# @private
# @param {string} [PYTHON_SOURCES_FILTER] - file path pattern (e.g., `.*/math/base/special/abs/.*`)
# @param {*} [FAST_FAIL] - flag indicating whether to stop linting upon encountering a lint error
#
# @example
# make pydocstyle-src
#
# @example
# make pydocstyle-src PYTHON_SOURCES_FILTER=".*/math/base/special/abs/.*"
#/
pydocstyle-src:
ifeq ($(FAIL_FAST), true)
	$(QUIET) $(FIND_PYTHON_SOURCES_CMD) | grep '^[\/]\|^[a-zA-Z]:[/\]' | while read -r file; do \
		echo ''; \
		echo "Linting docstrings: $$file"; \
		$(PYDOCSTYLE) $(PYDOCSTYLE_FLAGS) $$file || exit 1; \
	done
else
	$(QUIET) $(FIND_PYTHON_SOURCES_CMD) | grep '^[\/]\|^[a-zA-Z]:[/\]' | while read -r file; do \
		echo ''; \
		echo "Linting docstrings: $$file"; \
		$(PYDOCSTYLE) $(PYDOCSTYLE_FLAGS) $$file || echo 'Linting failed.'; \
	done
endif

.PHONY: pydocstyle-src

#/
# Lints Python test fixture docstring style.
#
# ## Notes
#
# -   This rule is useful when wanting to glob for Python test fixture files (e.g., lint all Python test fixture files for a particular package).
#
# @private
# @param {string} [TESTS_FIXTURES_FILTER] - file path pattern (e.g., `.*/math/base/special/abs/.*`)
# @param {*} [FAST_FAIL] - flag indicating whether to stop linting upon encountering a lint error
#
# @example
# make pydocstyle-tests-fixtures
#
# @example
# make pydocstyle-tests-fixtures PYTHON_TESTS_FIXTURES_FILTER=".*/math/base/special/abs/.*"
#/
pydocstyle-tests-fixtures:
ifeq ($(FAIL_FAST), true)
	$(QUIET) $(FIND_PYTHON_TESTS_FIXTURES_CMD) | grep '^[\/]\|^[a-zA-Z]:[/\]' | while read -r file; do \
		echo ''; \
		echo "Linting docstrings: $$file"; \
		$(PYDOCSTYLE) $(PYDOCSTYLE_FLAGS) $$file || exit 1; \
	done
else
	$(QUIET) $(FIND_PYTHON_TESTS_FIXTURES_CMD) | grep '^[\/]\|^[a-zA-Z]:[/\]' | while read -r file; do \
		echo ''; \
		echo "Linting docstrings: $$file"; \
		$(PYDOCSTYLE) $(PYDOCSTYLE_FLAGS) $$file || echo 'Linting failed.'; \
	done
endif

.PHONY: pydocstyle-tests-fixtures

#/
# Lints Python examples docstring style.
#
# ## Notes
#
# -   This rule is useful when wanting to glob for Python examples files (e.g., lint all Python examples files for a particular package).
#
# @private
# @param {string} [PYTHON_EXAMPLES_FILTER] - file path pattern (e.g., `.*/math/base/special/abs/.*`)
# @param {*} [FAST_FAIL] - flag indicating whether to stop linting upon encountering a lint error
#
# @example
# make pydocstyle-examples
#
# @example
# make pydocstyle-examples PYTHON_EXAMPLES_FILTER=".*/math/base/special/abs/.*"
#/
pydocstyle-examples:
ifeq ($(FAIL_FAST), true)
	$(QUIET) $(FIND_PYTHON_EXAMPLES_CMD) | grep '^[\/]\|^[a-zA-Z]:[/\]' | while read -r file; do \
		echo ''; \
		echo "Linting docstrings: $$file"; \
		$(PYDOCSTYLE) $(PYDOCSTYLE_FLAGS) $$file || exit 1; \
	done
else
	$(QUIET) $(FIND_PYTHON_EXAMPLES_CMD) | grep '^[\/]\|^[a-zA-Z]:[/\]' | while read -r file; do \
		echo ''; \
		echo "Linting docstrings: $$file"; \
		$(PYDOCSTYLE) $(PYDOCSTYLE_FLAGS) $$file || echo 'Linting failed.'; \
	done
endif

.PHONY: pydocstyle-examples

#/
# Lints Python benchmark docstring style.
#
# ## Notes
#
# -   This rule is useful when wanting to glob for Python benchmark files (e.g., lint all Python benchmark files for a particular package).
#
# @private
# @param {string} [PYTHON_BENCHMARKS_FILTER] - file path pattern (e.g., `.*/math/base/special/abs/.*`)
# @param {*} [FAST_FAIL] - flag indicating whether to stop linting upon encountering a lint error
#
# @example
# make pydocstyle-benchmarks
#
# @example
# make pydocstyle-benchmarks PYTHON_BENCHMARKS_FILTER=".*/math/base/special/abs/.*"
#/
pydocstyle-benchmarks:
ifeq ($(FAIL_FAST), true)
	$(QUIET) $(FIND_PYTHON_BENCHMARKS_CMD) | grep '^[\/]\|^[a-zA-Z]:[/\]' | while read -r file; do \
		echo ''; \
		echo "Linting docstrings: $$file"; \
		$(PYDOCSTYLE) $(PYDOCSTYLE_FLAGS) $$file || exit 1; \
	done
else
	$(QUIET) $(FIND_PYTHON_BENCHMARKS_CMD) | grep '^[\/]\|^[a-zA-Z]:[/\]' | while read -r file; do \
		echo ''; \
		echo "Linting docstrings: $$file"; \
		$(PYDOCSTYLE) $(PYDOCSTYLE_FLAGS) $$file || echo 'Linting failed.'; \
	done
endif

.PHONY: pydocstyle-benchmarks

#/
# Lints docstring style for a specified list of Python files.
#
# ## Notes
#
# -   This rule is useful when wanting to lint a list of Python files generated by some other command (e.g., a list of changed Python files obtained via `git diff`).
#
# @private
# @param {string} FILES - list of Python file paths
# @param {*} [FAST_FAIL] - flag indicating whether to stop linting upon encountering a lint error
#
# @example
# make pydocstyle-files FILES='/foo/file.py /bar/file.py'
#/
pydocstyle-files:
ifeq ($(FAIL_FAST), true)
	$(QUIET) for file in $(FILES); do \
		echo ''; \
		echo "Linting docstrings: $$file"; \
		$(PYDOCSTYLE) $(PYDOCSTYLE_FLAGS) $$file || exit 1; \
	done
else
	$(QUIET) for file in $(FILES); do \
		echo ''; \
		echo "Linting docstrings: $$file"; \
		$(PYDOCSTYLE) $(PYDOCSTYLE_FLAGS) $$file || echo 'Linting failed.'; \
	done
endif

.PHONY: pydocstyle-files
