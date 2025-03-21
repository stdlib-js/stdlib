(module
  (type $FUNCSIG$dd (func (param f64) (result f64)))
  (table 0 anyfunc)
  (memory $0 1)
  (export "memory" (memory $0))
  (export "stdlib_hypot" (func $stdlib_hypot))
  (func $stdlib_hypot (param $0 f64) (param $1 f64) (result f64)
    (local $2 i64)
    (local $3 i64)
    (local $4 f64)
    (local $5 i32)
    (local $6 f64)
    (set_local $6
      (f64.const nan:0x8000000000000)
    )
    (block $label$0
      (block $label$1
        (br_if $label$1
          (i64.gt_u
            (tee_local $2
              (i64.and
                (i64.reinterpret/f64
                  (get_local $0)
                )
                (i64.const 9223372036854775807)
              )
            )
            (i64.const 9218868437227405312)
          )
        )
        (br_if $label$1
          (i64.gt_u
            (tee_local $3
              (i64.and
                (i64.reinterpret/f64
                  (get_local $1)
                )
                (i64.const 9223372036854775807)
              )
            )
            (i64.const 9218868437227405312)
          )
        )
        (set_local $6
          (f64.const 0x7ff0000000000000)
        )
        (br_if $label$1
          (i64.eq
            (get_local $2)
            (i64.const 9218868437227405312)
          )
        )
        (br_if $label$1
          (i64.eq
            (get_local $3)
            (i64.const 9218868437227405312)
          )
        )
        (set_local $6
          (f64.const 0)
        )
        (br_if $label$0
          (f64.ne
            (tee_local $4
              (select
                (tee_local $1
                  (select
                    (f64.neg
                      (get_local $1)
                    )
                    (get_local $1)
                    (f64.lt
                      (get_local $1)
                      (f64.const 0)
                    )
                  )
                )
                (tee_local $0
                  (select
                    (f64.neg
                      (get_local $0)
                    )
                    (get_local $0)
                    (f64.lt
                      (get_local $0)
                      (f64.const 0)
                    )
                  )
                )
                (tee_local $5
                  (f64.lt
                    (get_local $0)
                    (get_local $1)
                  )
                )
              )
            )
            (f64.const 0)
          )
        )
      )
      (return
        (get_local $6)
      )
    )
    (f64.mul
      (get_local $4)
      (f64.sqrt
        (f64.add
          (f64.mul
            (tee_local $0
              (f64.div
                (select
                  (get_local $0)
                  (get_local $1)
                  (get_local $5)
                )
                (get_local $4)
              )
            )
            (get_local $0)
          )
          (f64.const 1)
        )
      )
    )
  )
)
