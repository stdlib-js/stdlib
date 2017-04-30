
# TARGETS #

# Run Julia benchmarks.
#
# This target runs a list of Julia benchmarks in sequential order. Note that we assume the benchmarks can be run using Julia.

benchmark-julia:
	$(QUIET) for file in $(BENCHMARKS); do \
		echo ""; \
		echo "Running benchmark: $$file"; \
		$$file || exit 1; \
	done

.PHONY: benchmark-julia
