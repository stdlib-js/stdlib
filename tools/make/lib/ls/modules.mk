
# VARIABLES #

# Determine the host kernel:
KERNEL ?= $(shell uname -s)

# On Mac OSX, in order to use `|` and other regular expression operators, we need to use enhanced regular expression syntax (-E); see https://developer.apple.com/library/mac/documentation/Darwin/Reference/ManPages/man7/re_format.7.html#//apple_ref/doc/man/7/re_format.

ifeq ($(KERNEL), Darwin)
	find_kernel_prefix := -E
else
	find_kernel_prefix :=
endif

# Define a module filename identifier:
MODULES_FILE ?= package.json

# Define the command flags:
FIND_MODULES_FLAGS ?= \
	-name "$(MODULES_FILE)" \
	-regex "$(MODULES_FILTER)" \
	-not -path "$(NODE_MODULES)/*" \
	-not -path "$(BUILD_DIR)/*" \
	-not -path "$(REPORTS_DIR)/*" \
	-exec dirname {} \;

ifneq ($(KERNEL), Darwin)
	FIND_MODULES_FLAGS := -regextype posix-extended $(FIND_MODULES_FLAGS)
endif

# Define the list of modules:
MODULES ?= $(shell find $(find_kernel_prefix) $(ROOT_DIR) $(FIND_MODULES_FLAGS))


# TARGETS #

# List all modules.
#
# This target prints a list of all modules, excluding the `node_modules`, `build`, and `reports` directories.

list-modules:
	@find $(find_kernel_prefix) $(ROOT_DIR) $(FIND_MODULES_FLAGS) | xargs printf '%s\n'

.PHONY: list-modules
