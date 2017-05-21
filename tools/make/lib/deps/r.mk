
# VARIABLES #

# Define the command for installing R packages:
R_INSTALL_PKGS_CMD ?= $(RSCRIPT) $(TOOLS_DIR)/scripts/install_r_pkgs.R

# Define the path to the R requirements file:
R_REQUIREMENTS ?= $(CONFIG_DIR)/r/requirements.txt


# TARGETS #

# Install R dependencies.
#
# This target installs R dependencies.

install-deps-r:
	$(QUIET) cat $(R_REQUIREMENTS) | xargs $(R_INSTALL_PKGS_CMD)

.PHONY: install-deps-r


# Update R dependencies.
#
# This target updates R dependencies.

update-deps-r: clean-deps-r install-deps-r

.PHONY: update-deps-r


# Uninstall R dependencies.
#
# This target removes installed R dependencies.

clean-deps-r:
	$(QUIET) cat $(R_REQUIREMENTS) | xargs $(R) CMD REMOVE

.PHONY: clean-deps-r
