(module
  (type (;0;) (func))
  (type (;1;) (func (param i32 f64 i32 i32 i32 i32)))
  (type (;2;) (func (param i32 f64 i32 i32 i32 i32 i32 i32)))
  (import "env" "memory" (memory (;0;) 0))
  (func (;0;) (type 0)
    nop)
  (func (;1;) (type 1) (param i32 f64 i32 i32 i32 i32)
    local.get 0
    local.get 1
    local.get 2
    local.get 3
    i32.const 1
    local.get 0
    i32.sub
    local.tee 0
    local.get 3
    i32.mul
    i32.const 0
    local.get 3
    i32.const 0
    i32.le_s
    select
    local.get 4
    local.get 5
    local.get 0
    local.get 5
    i32.mul
    i32.const 0
    local.get 5
    i32.const 0
    i32.le_s
    select
    call 2)
  (func (;2;) (type 2) (param i32 f64 i32 i32 i32 i32 i32 i32)
    (local i32 i32)
    block  ;; label = @1
      local.get 0
      i32.const 0
      i32.le_s
      local.get 1
      f64.const 0x0p+0 (;=0;)
      f64.eq
      i32.or
      br_if 0 (;@1;)
      loop  ;; label = @2
        local.get 0
        local.get 8
        i32.eq
        br_if 1 (;@1;)
        local.get 5
        local.get 7
        i32.const 3
        i32.shl
        i32.add
        local.tee 9
        local.get 1
        local.get 2
        local.get 4
        i32.const 3
        i32.shl
        i32.add
        f64.load
        f64.mul
        local.get 9
        f64.load
        f64.add
        f64.store
        local.get 8
        i32.const 1
        i32.add
        local.set 8
        local.get 6
        local.get 7
        i32.add
        local.set 7
        local.get 3
        local.get 4
        i32.add
        local.set 4
        br 0 (;@2;)
      end
      unreachable
    end)
  (export "__wasm_call_ctors" (func 0))
  (export "__wasm_apply_data_relocs" (func 0))
  (export "c_daxpy" (func 1))
  (export "c_daxpy_ndarray" (func 2)))
