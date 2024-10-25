(module
  (type (;0;) (func))
  (type (;1;) (func (param i32 i32 i32) (result f32)))
  (type (;2;) (func (param i32 i32 i32 i32) (result f32)))
  (import "env" "memory" (memory (;0;) 0))
  (func (;0;) (type 0)
    nop)
  (func (;1;) (type 1) (param i32 i32 i32) (result f32)
    local.get 0
    local.get 1
    local.get 2
    i32.const 1
    local.get 0
    i32.sub
    local.get 2
    i32.mul
    i32.const 0
    local.get 2
    i32.const 0
    i32.le_s
    select
    call 2)
  (func (;2;) (type 2) (param i32 i32 i32 i32) (result f32)
    (local i32 f32)
    block  ;; label = @1
      local.get 0
      i32.const 0
      i32.le_s
      if  ;; label = @2
        br 1 (;@1;)
      end
      local.get 2
      i32.const 1
      i32.ne
      if  ;; label = @2
        loop  ;; label = @3
          local.get 0
          local.get 4
          i32.eq
          br_if 2 (;@1;)
          local.get 4
          i32.const 1
          i32.add
          local.set 4
          local.get 5
          local.get 1
          local.get 3
          i32.const 2
          i32.shl
          i32.add
          f32.load
          f32.abs
          f32.add
          local.set 5
          local.get 2
          local.get 3
          i32.add
          local.set 3
          br 0 (;@3;)
        end
        unreachable
      end
      block  ;; label = @2
        local.get 0
        i32.const 6
        i32.rem_u
        local.tee 2
        i32.eqz
        br_if 0 (;@2;)
        loop  ;; label = @3
          local.get 2
          local.get 4
          i32.eq
          br_if 1 (;@2;)
          local.get 4
          i32.const 1
          i32.add
          local.set 4
          local.get 5
          local.get 1
          local.get 3
          i32.const 2
          i32.shl
          i32.add
          f32.load
          f32.abs
          f32.add
          local.set 5
          local.get 3
          i32.const 1
          i32.add
          local.set 3
          br 0 (;@3;)
        end
        unreachable
      end
      local.get 0
      i32.const 6
      i32.lt_s
      br_if 0 (;@1;)
      loop  ;; label = @2
        local.get 0
        local.get 2
        i32.le_s
        br_if 1 (;@1;)
        local.get 5
        local.get 1
        local.get 3
        i32.const 2
        i32.shl
        i32.add
        local.tee 4
        f32.load
        f32.abs
        local.get 4
        f32.load offset=4
        f32.abs
        f32.add
        local.get 4
        f32.load offset=8
        f32.abs
        f32.add
        local.get 4
        f32.load offset=12
        f32.abs
        f32.add
        local.get 4
        f32.load offset=16
        f32.abs
        f32.add
        local.get 4
        f32.load offset=20
        f32.abs
        f32.add
        f32.add
        local.set 5
        local.get 2
        i32.const 6
        i32.add
        local.set 2
        local.get 3
        i32.const 6
        i32.add
        local.set 3
        br 0 (;@2;)
      end
      unreachable
    end
    local.get 5)
  (export "__wasm_call_ctors" (func 0))
  (export "__wasm_apply_data_relocs" (func 0))
  (export "c_sasum" (func 1))
  (export "c_sasum_ndarray" (func 2)))
