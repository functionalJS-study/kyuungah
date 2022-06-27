// store
var users = [
  { id: 1, name: 'aa' },
  { id: 2, name: 'bb' },
  { id: 3, name: 'cc' },
]

const getUserById = (id) => users.find((u) => u.id == id) || Promise.reject('없어용')

const f = ({ name }) => name
const g = getUserById

const fg2 = (id) =>
  Promise.resolve(id)
    .then(g)
    .then(f)
    .catch((a) => a)

users.pop()
users.pop()

fg2(2).then(console.log)
