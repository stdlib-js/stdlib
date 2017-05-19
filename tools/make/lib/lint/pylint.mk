
# VARIABLES #

# Define the path to the [Pylint][1] executable.
#
# To install Pylint:
#     $ pip install pylint
#
# [1]: https://github.com/PyCQA/pylint

PYLINT ?= pylint

# Define the path to the Pylint configuration file:
PYLINT_CONF ?= $(CONFIG_DIR)/pylint/.pylintrc

# Define the command-line options to use when invoking the Pylint executable:
PYLINT_FLAGS ?= \
	--rcfile $(PYLINT_CONF) \
	--reports n \
	--output-format text


# TARGETS #

# Check for Pylint.
#
# This target checks if Pylint is installed.

pylint-check:
ifeq (, $(shell command -v $(PYLINT) 2>/dev/null))
	$(QUIET) echo ''
	$(QUIET) echo 'Pylint is not installed. Please install Pylint and try again.'
	$(QUIET) echo 'For install instructions, see https://github.com/PyCQA/pylint.'
	$(QUIET) echo ''
	$(QUIET) exit 1
else
	$(QUIET) echo 'Pylint is installed.'
	$(QUIET) exit 0
endif

.PHONY: pylint-check

# Check source code quality.
#
# This target lints only Python source files.

pylint-src: pylint-check
	$(QUIET) $(FIND_PYTHON_SOURCES_CMD) | grep '^\/' | while read -r file; do \
		echo ''; \
		echo "Linting file: $$file"; \
		$(PYLINT) $(PYLINT_FLAGS) $$file || exit 1; \
	done

.PHONY: pylint-src


# Check test fixture code quality.
#
# This target lints only Python test fixture files.

pylint-tests-fixtures: pylint-check
	$(QUIET) $(FIND_PYTHON_TESTS_FIXTURES_CMD) | grep '^\/' | while read -r file; do \
		echo ''; \
		echo "Linting file: $$file"; \
		$(PYLINT) $(PYLINT_FLAGS) $$file || exit 1; \
	done

.PHONY: pylint-tests-fixtures


# Check example code quality.
#
# This target lints only Python example files.

pylint-examples: pylint-check
	$(QUIET) $(FIND_PYTHON_EXAMPLES_CMD) | grep '^\/' | while read -r file; do \
		echo ''; \
		echo "Linting file: $$file"; \
		$(PYLINT) $(PYLINT_FLAGS) $$file || exit 1; \
	done

.PHONY: pylint-examples


# Check benchmark code quality.
#
# This target lints only Python benchmark files.

pylint-benchmarks: pylint-check
	$(QUIET) $(FIND_PYTHON_BENCHMARKS_CMD) | grep '^\/' | while read -r file; do \
		echo ''; \
		echo "Linting file: $$file"; \
		$(PYLINT) $(PYLINT_FLAGS) $$file || exit 1; \
	done

.PHONY: pylint-benchmarks


# Check Python code quality.
#
# This target lints Python files. Note that we expect `$PYTHON_FILES` to be a Python file list.

pylint-files: pylint-check
	$(QUIET) for file in $(PYTHON_FILES); do \
		echo ''; \
		echo "Linting file: $$file"; \
		$(PYLINT) $(PYLINT_FLAGS) $$file || exit 1; \
	done

.PHONY: pylint-files
