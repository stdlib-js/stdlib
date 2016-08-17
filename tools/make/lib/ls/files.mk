
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
find_print_files_list := -exec printf '%s\n' {} \;

# Define the command flags:
FIND_FILES_FLAGS ?= \
	-name "$(FILES_PATTERN)" \
	-regex "$(FILES_FILTER)" \
	-not -path "$(ROOT_DIR)/.*" \
	-not -path "$(NODE_MODULES)/*" \
	-not -path "$(BUILD_DIR)/*" \
	-not -path "$(REPORTS_DIR)/*"

ifneq ($(KERNEL), Darwin)
	FIND_FILES_FLAGS := -regextype posix-extended $(FIND_FILES_FLAGS)
endif

# Define the list of files:
FILES ?= $(shell find $(find_kernel_prefix) $(ROOT_DIR) $(FIND_FILES_FLAGS))


# TARGETS #

# List all files.
#
# This target prints a list of all files, excluding the `node_modules`, `build`, `reports`, and hidden directories.

list-files:
	@find $(find_kernel_prefix) $(ROOT_DIR) $(FIND_FILES_FLAGS) $(find_print_files_list)

.PHONY: list-files
