module.exports = {
  nets: {
    f_from: undefined,
    f_to: undefined,
    b_from: undefined,
    b_to: undefined,
  },
  params: {
    class: "J",
  },
  body: (p) => `
    (module lib:JumperReverse (layer "F.Cu") (tedit 0)
      ${p.at /* parametric position */}
      (fp_poly (pts
          (xy 1.016 1.016)
          (xy 0 1.016)
          (xy 0 0)
          (xy 1.016 0)
        ) (layer "B.Mask") (width 0.1) (fill solid))
      (fp_poly (pts
          (xy 1.016 1.016)
          (xy 0 1.016)
          (xy 0 0)
          (xy 1.016 0)
        ) (layer "F.Mask") (width 0.1) (fill solid))
      (pad "" smd custom (at 0.508 0.254) (size 0.1 0.1) (layers "B.Cu" "B.Mask")
        (clearance 0.1) ${p.net.b_from.str}
        (options (clearance outline) (anchor rect))
        (primitives
          (gr_poly (pts
              (xy 0.6 -0.4)
              (xy -0.6 -0.4)
              (xy -0.6 -0.2)
              (xy 0 0.4)
              (xy 0.6 -0.2)
            ) (width 0) (fill yes))
        ))
      (pad "" smd custom (at 0.508 0.254) (size 0.1 0.1) (layers "F.Cu" "F.Mask")
        (clearance 0.1) ${p.net.f_from.str}
        (options (clearance outline) (anchor rect))
        (primitives
          (gr_poly (pts
              (xy 0.6 -0.4)
              (xy -0.6 -0.4)
              (xy -0.6 -0.2)
              (xy 0 0.4)
              (xy 0.6 -0.2)
            ) (width 0) (fill yes))
        ))
      (pad "" smd custom (at 0.508 1.27) (size 1.2 0.5) (layers "F.Cu" "F.Mask")
        (clearance 0.1) ${p.net.f_to.str}
        (options (clearance outline) (anchor rect))
        (primitives
          (gr_poly (pts
              (xy 0.6 0)
              (xy -0.6 0)
              (xy -0.6 -1)
              (xy 0 -0.4)
              (xy 0.6 -1)
            ) (width 0) (fill yes))
        ))
      (pad "" smd custom (at 0.508 1.27) (size 1.2 0.5) (layers "B.Cu" "B.Mask")
        (clearance 0.1) ${p.net.b_to.str}
        (options (clearance outline) (anchor rect))
        (primitives
          (gr_poly (pts
              (xy 0.6 0)
              (xy -0.6 0)
              (xy -0.6 -1)
              (xy 0 -0.4)
              (xy 0.6 -1)
            ) (width 0) (fill yes))
        ))
    )
    `,
};
