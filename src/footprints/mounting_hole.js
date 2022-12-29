module.exports = {
  nets: {
    net: undefined,
  },
  body: (p) => `
  (module "MountingHole_2.2mm_M2"
    (layer "F.Cu")
    (tedit 56DDB9C7)
    ${p.at /* parametric position */}
    (descr "Mounting Hole 2.2mm, M2, ISO7380")
    (tags "mounting hole 2.2mm m2 iso7380")
    (attr exclude_from_pos_files exclude_from_bom)
    (fp_circle (center 0 0) (end 2 0) (layer "F.CrtYd") (width 0.05) (fill none))
    (pad "" connect circle (at 0 0) (size 3.5 3.5) (layers "F.Cu" "F.Mask"))
    (pad "" thru_hole circle (at 0 0) (size 2.6 2.6) (drill 2.2) (layers *.Cu *.Mask))
    (pad "" connect circle (at 0 0) (size 3.5 3.5) (layers "B.Cu" "B.Mask"))
  )
  `,
};
