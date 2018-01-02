
# VARIABLES #

# Define the path of the executable:
LIST_PACKAGE_READMES ?= $(TOOLS_PKGS_DIR)/pkgs/readmes/bin/cli

# Define the command flags:
LIST_PACKAGE_READMES_FLAGS ?=


# TARGETS #

# List all package READMEs.
#
# This target prints a list of all package READMEs.

list-pkgs-readmes: $(LIST_PACKAGE_READMES) $(NODE_MODULES)
	$(QUIET) $(NODE) $(LIST_PACKAGE_READMES) $(LIST_PACKAGE_READMES_FLAGS) $(SRC_DIR)

.PHONY: list-pkgs-readmes
