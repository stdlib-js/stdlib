
# VARIABLES #

# Determine the host kernel:
KERNEL ?= $(shell uname -s)

# On Mac OSX, in order to use `|` and other regular expression operators, we need to use enhanced regular expression syntax (-E); see https://developer.apple.com/library/mac/documentation/Darwin/Reference/ManPages/man7/re_format.7.html#//apple_ref/doc/man/7/re_format.

ifeq ($(KERNEL), Darwin)
	find_kernel_prefix := -E
else
	find_kernel_prefix :=
endif

# Define a suffix for pretty printing results as a list:
find_print_sources_list := -exec printf '%s\n' {} \;

# Define the command flags:
FIND_SOURCES_FLAGS ?= \
	-name "$(SOURCES_PATTERN)" \
	-regex "$(SOURCES_FILTER)" \
	-not -path "$(ROOT_DIR)/.*" \
	-not -path "$(NODE_MODULES)/*" \
	-not -path "$(TOOLS_DIR)/*" \
	-not -path "$(BUILD_DIR)/*" \
	-not -path "$(REPORTS_DIR)/*" \
	-not -path "**/$(EXAMPLES_FOLDER)/*" \
	-not -path "**/$(TESTS_FOLDER)/*"

ifneq ($(KERNEL), Darwin)
	FIND_SOURCES_FLAGS := -regextype posix-extended $(FIND_SOURCES_FLAGS)
endif

# Define the list of source files:
SOURCES ?= $(shell find $(find_kernel_prefix) $(ROOT_DIR) $(FIND_SOURCES_FLAGS))


# TARGETS #

# List source files.
#
# This target prints a newline-delimited list of source files.

list-sources:
	$(QUIET) find $(find_kernel_prefix) $(ROOT_DIR) $(FIND_SOURCES_FLAGS) $(find_print_sources_list)

.PHONY: list-sources
