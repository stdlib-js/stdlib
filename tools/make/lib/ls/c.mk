
# VARIABLES #

# On Mac OSX, in order to use `|` and other regular expression operators, we need to use enhanced regular expression syntax (-E); see https://developer.apple.com/library/mac/documentation/Darwin/Reference/ManPages/man7/re_format.7.html#//apple_ref/doc/man/7/re_format.

ifeq ($(OS), Darwin)
	find_kernel_prefix := -E
else
	find_kernel_prefix :=
endif

# Define a suffix for pretty printing results as a list:
find_print_c_list := -exec printf '%s\n' {} \;

# Define the command flags:
FIND_C_FLAGS ?= \
	-type f \
	-name "$(C_PATTERN)" \
	-regex "$(C_FILTER)" \
	-not -path "$(NODE_MODULES)/*" \
	-not -path "$(BUILD_DIR)/*" \
	-not -path "$(DEPS_DIR)/*" \
	-not -path "$(REPORTS_DIR)/*" \
	-not -path "$(ROOT_DIR)/**/$(BUILD_FOLDER)/*"

ifneq ($(OS), Darwin)
	FIND_C_FLAGS := -regextype posix-extended $(FIND_C_FLAGS)
endif

# Define a command for listing C files:
FIND_C_CMD ?= find $(find_kernel_prefix) $(ROOT_DIR) $(FIND_C_FLAGS)

# Define the list of files:
C_FILES ?= $(shell $(FIND_C_CMD))


# TARGETS #

# List all C files.
#
# This target prints a list of all C files.

list-c-files:
	$(QUIET) find $(find_kernel_prefix) $(ROOT_DIR) $(FIND_C_FLAGS) $(find_print_c_list)

.PHONY: list-c-files
