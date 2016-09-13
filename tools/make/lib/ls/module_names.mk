
# VARIABLES #

# Define the command for `node`:
NODE ?= node

# Define the root directory from which to search for modules:
MODULE_NAMES_DIR ?= $(ROOT_DIR)/lib/node_modules

# Define the path of the executable:
LIST_MODULE_NAMES ?= $(TOOLS_DIR)/ls/module-names/bin/cli

# Define the command flags:
LIST_MODULE_NAMES_FLAGS ?= \
	--dir $(MODULE_NAMES_DIR)


# TARGETS #

# List all module names.
#
# This target prints a list of all module names.

list-module-names: $(LIST_MODULE_NAMES) $(NODE_MODULES)
	$(QUIET) $(NODE) $(LIST_MODULE_NAMES) $(LIST_MODULE_NAMES_FLAGS)

.PHONY: list-module-names
