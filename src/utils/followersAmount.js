export default function ({day = 0, balance = 5000}) { //TODO previues result must be < then next
  return Math.round((Math.random() + 1) * balance / 300 * (day === 1 ? 0 : day))
}
