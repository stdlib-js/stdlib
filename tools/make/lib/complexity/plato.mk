
# VARIABLES #

# Define the path to the [plato][1] executable.
#
# To install plato:
#     $ npm install plato
#
# [1]: https://github.com/es-analysis/plato

JAVASCRIPT_COMPLEXITY ?= $(BIN_DIR)/plato

# Define the title of the report:
PLATO_REPORT_TITLE ?= 'JavaScript Complexity'

# Define the output file path for the HTML report generated by plato:
PLATO_HTML_REPORT ?= $(JAVASCRIPT_COMPLEXITY_DIR)/index.html

# Define the command-line options to use when invoking the plato executable:
JAVASCRIPT_COMPLEXITY_FLAGS ?= \
	--dir $(JAVASCRIPT_COMPLEXITY_DIR) \
	--title $(PLATO_REPORT_TITLE)


# TARGETS #

# View a complexity report.
#
# This target opens an HTML complexity report in a local web browser.

view-plato-report:
	$(QUIET) $(OPEN) $(PLATO_HTML_REPORT)

.PHONY: view-plato-report
