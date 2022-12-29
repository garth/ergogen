module.exports = {
    nets: {
      SDA: undefined,
      SCL: undefined,
      VCC: 'VCC',
      GND: 'GND',
      CS: undefined
    },
    params: {
      class: 'OLED',
	    side: 'F'
    },
    body: p => `
        (module lib:OLED_headers (layer F.Cu) (tedit 5E1ADAC2)
        ${p.at /* parametric position */} 

        ${'' /* pins */}
        (pad 5 thru_hole oval (at 1.6 -5.08 ${p.rot+270}) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask)
        ${p.net.SDA.str})
        (pad 4 thru_hole oval (at 1.6 -2.54 ${p.rot+270}) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask)
        ${p.net.SCL.str})
        (pad 3 thru_hole oval (at 1.6 0 ${p.rot+270}) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask)
        ${p.net.VCC.str})
        (pad 2 thru_hole oval (at 1.6 2.54 ${p.rot+270}) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask)
        ${p.net.GND.str})
        (pad 1 thru_hole oval (at 1.6 5.08 ${p.rot+270}) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask)
        ${p.net.CS.str})
        )
        `
}