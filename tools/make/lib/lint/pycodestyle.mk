
# VARIABLES #

# Define the path to the [pycodestyle][1] executable.
#
# To install pycodestyle:
#     $ pip install pycodestyle
#
# [1]: https://github.com/PyCQA/pycodestyle

PYCODESTYLE ?= pycodestyle

# Define the path to the pycodestyle configuration file:
PYCODESTYLE_CONF ?= $(CONFIG_DIR)/pycodestyle/.pycodestyle

# Define the command-line options to use when invoking the pycodestyle executable:
PYCODESTYLE_FLAGS ?= \
	--config $(PYCODESTYLE_CONF)


# TARGETS #

# Check for pycodestyle.
#
# This target checks if pycodestyle is installed.

check-pycodestyle:
ifeq (, $(shell command -v $(PYCODESTYLE) 2>/dev/null))
	$(QUIET) echo ''
	$(QUIET) echo 'pycodestyle is not installed. Please install pycodestyle and try again.'
	$(QUIET) echo 'For install instructions, see https://github.com/PyCQA/pycodestyle.'
	$(QUIET) echo ''
	$(QUIET) exit 1
else
	$(QUIET) echo 'pycodestyle is installed.'
	$(QUIET) exit 0
endif

.PHONY: check-pycodestyle

# Check source code style.
#
# This target lints only Python source files.

pycodestyle-src:
	$(QUIET) $(FIND_PYTHON_SOURCES_CMD) | grep '^\/' | while read -r file; do \
		echo ''; \
		echo "Linting file: $$file"; \
		$(PYCODESTYLE) $(PYCODESTYLE_FLAGS) $$file || exit 1; \
	done

.PHONY: pycodestyle-src


# Check test fixture code style.
#
# This target lints only Python test fixture files.

pycodestyle-tests-fixtures:
	$(QUIET) $(FIND_PYTHON_TESTS_FIXTURES_CMD) | grep '^\/' | while read -r file; do \
		echo ''; \
		echo "Linting file: $$file"; \
		$(PYCODESTYLE) $(PYCODESTYLE_FLAGS) $$file || exit 1; \
	done

.PHONY: pycodestyle-tests-fixtures


# Check example code style.
#
# This target lints only Python example files.

pycodestyle-examples:
	$(QUIET) $(FIND_PYTHON_EXAMPLES_CMD) | grep '^\/' | while read -r file; do \
		echo ''; \
		echo "Linting file: $$file"; \
		$(PYCODESTYLE) $(PYCODESTYLE_FLAGS) $$file || exit 1; \
	done

.PHONY: pycodestyle-examples


# Check benchmark code style.
#
# This target lints only Python benchmark files.

pycodestyle-benchmarks:
	$(QUIET) $(FIND_PYTHON_BENCHMARKS_CMD) | grep '^\/' | while read -r file; do \
		echo ''; \
		echo "Linting file: $$file"; \
		$(PYCODESTYLE) $(PYCODESTYLE_FLAGS) $$file || exit 1; \
	done

.PHONY: pycodestyle-benchmarks


# Check Python code style.
#
# This target lints Python files. Note that we expect `$PYTHON_FILES` to be a Python file list.

pycodestyle-files:
	$(QUIET) for file in $(PYTHON_FILES); do \
		echo ''; \
		echo "Linting file: $$file"; \
		$(PYCODESTYLE) $(PYCODESTYLE_FLAGS) $$file || exit 1; \
	done

.PHONY: pycodestyle-files
