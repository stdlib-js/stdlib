
# VARIABLES #

# On Mac OSX, in order to use `|` and other regular expression operators, we need to use enhanced regular expression syntax (-E); see https://developer.apple.com/library/mac/documentation/Darwin/Reference/ManPages/man7/re_format.7.html#//apple_ref/doc/man/7/re_format.

ifeq ($(OS), Darwin)
	find_kernel_prefix := -E
else
	find_kernel_prefix :=
endif

# Define a suffix for pretty printing results as a list:
find_print_python_benchmarks_list := -exec printf '%s\n' {} \;

# Define the command flags:
FIND_PYTHON_BENCHMARKS_FLAGS ?= \
	-type f \
	-name "$(PYTHON_BENCHMARKS_PATTERN)" \
	-path "$(ROOT_DIR)/**/$(BENCHMARKS_FOLDER)/**" \
	-regex "$(BENCHMARKS_FILTER)" \
	-not -path "$(ROOT_DIR)/.*" \
	-not -path "$(NODE_MODULES)/*" \
	-not -path "$(TOOLS_DIR)/*" \
	-not -path "$(BUILD_DIR)/*" \
	-not -path "$(DEPS_DIR)/*" \
	-not -path "$(REPORTS_DIR)/*"


ifneq ($(OS), Darwin)
	FIND_PYTHON_BENCHMARKS_FLAGS := -regextype posix-extended $(FIND_PYTHON_BENCHMARKS_FLAGS)
endif

# Define a command to list benchmark files:
FIND_PYTHON_BENCHMARKS_CMD ?= find $(find_kernel_prefix) $(ROOT_DIR) $(FIND_PYTHON_BENCHMARKS_FLAGS)

# Define the list of benchmark files:
PYTHON_BENCHMARKS ?= $(shell $(FIND_PYTHON_BENCHMARKS_CMD))


# TARGETS #

# List Python benchmark files.
#
# This target prints a newline-delimited list of Python benchmark files.

list-benchmarks-python:
	$(QUIET) find $(find_kernel_prefix) $(ROOT_DIR) $(FIND_PYTHON_BENCHMARKS_FLAGS) $(find_print_python_benchmarks_list)

.PHONY: list-benchmarks-python
