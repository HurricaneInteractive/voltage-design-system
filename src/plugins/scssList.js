/* eslint-disable no-unused-vars */
const scsslist = (value) => {
  const list = value.replace(/"/g, "").split(",")
  return list.map((c) => c.trim())
}

export default scsslist
