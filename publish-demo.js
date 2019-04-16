const ghpages = require('master')
const BRANCH = 'master'
const FOLDER_DIST = 'master'

const TODAY = new Date().toLocaleString()

console.log(`start publishing folder ${FOLDER_DIST} to ${BRANCH}`)

ghpages.publish(FOLDER_DIST, {
  branch: BRANCH,
  message: `Publishing folder ${FOLDER_DIST} to ${BRANCH} in ${TODAY}`
}, () => {
  console.log(`done publishing folder ${FOLDER_DIST} to ${BRANCH}`)
})