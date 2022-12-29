module.exports = {
  nets: {
    from: 'from',
    to: 'to'
  },
  params: {
    class: 'T',
    reverse: false
  },
  body: p => {
    const standard = `
(module Button_Switch_SMD:SW_SPDT_PCM12 (layer F.Cu) (tedit 5A02FC95)
        ${p.at /* parametric position */}
  (descr "Ultraminiature Surface Mount Slide Switch, right-angle, https://www.ckswitches.com/media/1424/pcm.pdf")
  (attr smd)
  (fp_line (start -4.4 2.1) (end -4.4 -2.45) (layer F.CrtYd) (width 0.05))
  (fp_line (start -1.65 2.1) (end -4.4 2.1) (layer F.CrtYd) (width 0.05))
  (fp_line (start -1.65 3.4) (end -1.65 2.1) (layer F.CrtYd) (width 0.05))
  (fp_line (start 1.65 3.4) (end -1.65 3.4) (layer F.CrtYd) (width 0.05))
  (fp_line (start 1.65 2.1) (end 1.65 3.4) (layer F.CrtYd) (width 0.05))
  (fp_line (start 4.4 2.1) (end 1.65 2.1) (layer F.CrtYd) (width 0.05))
  (fp_line (start 4.4 -2.45) (end 4.4 2.1) (layer F.CrtYd) (width 0.05))
  (fp_line (start -4.4 -2.45) (end 4.4 -2.45) (layer F.CrtYd) (width 0.05))

      `
    function pins(def_neg, def_pos, def_side) {
          return `
            ${''/* pins */}
  (pad "" np_thru_hole circle (at -1.5 0.33) (size 0.9 0.9) (drill 0.9) (layers *.Cu *.Mask))
  (pad "" np_thru_hole circle (at 1.5 0.33) (size 0.9 0.9) (drill 0.9) (layers *.Cu *.Mask))
  (pad 1 smd rect (at ${def_neg}2.25 -1.43) (size 0.7 1.5) (layers ${def_side}.Cu ${def_side}.Paste ${def_side}.Mask) ${p.net.from.str})

  (pad 2 smd rect (at ${def_pos}0.75 -1.43) (size 0.7 1.5) (layers ${def_side}.Cu ${def_side}.Paste ${def_side}.Mask) ${p.net.to.str})
  (pad 3 smd rect (at ${def_pos}2.25 -1.43) (size 0.7 1.5) (layers ${def_side}.Cu ${def_side}.Paste ${def_side}.Mask))
  (pad "" smd rect (at ${def_neg}3.65 1.43) (size 1 0.8) (layers ${def_side}.Cu ${def_side}.Paste ${def_side}.Mask))
  (pad "" smd rect (at ${def_pos}3.65 1.43) (size 1 0.8) (layers ${def_side}.Cu ${def_side}.Paste ${def_side}.Mask))
  (pad "" smd rect (at ${def_pos}3.65 -0.78) (size 1 0.8) (layers ${def_side}.Cu ${def_side}.Paste ${def_side}.Mask))
  (pad "" smd rect (at ${def_neg}3.65 -0.78) (size 1 0.8) (layers ${def_side}.Cu ${def_side}.Paste ${def_side}.Mask))
          `
    }
    if(p.param.reverse) {
      return `
        ${standard}
        ${pins('-', '', 'F')}
        ${pins('', '-', 'B')})
        `
    } else {
      return `
        ${standard}
        ${pins('-', '', 'B')})
        `
    }
  }
}
