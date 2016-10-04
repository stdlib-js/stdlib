
# VARIABLES #

# Define the command for `node`:
NODE ?= node

# Define the root directory from which to search for packages:
PACKAGES_DIR ?= $(ROOT_DIR)/lib/node_modules

# Define the path of the executable:
LIST_PACKAGE_NAMESPACES ?= $(TOOLS_DIR)/pkgs/namespaces/bin/cli

# Define the command flags:
LIST_PACKAGE_NAMESPACES_FLAGS ?= \
	--dir $(PACKAGES_DIR)


# TARGETS #

# List all package namespaces.
#
# This target prints a list of all package namespaces.

list-pkgs-namespaces: $(LIST_PACKAGE_NAMESPACES) $(NODE_MODULES)
	$(QUIET) $(NODE) $(LIST_PACKAGE_NAMESPACES) $(LIST_PACKAGE_NAMESPACES_FLAGS)

.PHONY: list-pkgs-namespaces
