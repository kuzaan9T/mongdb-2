use("dugsiiye")

db.students.find({ age: { $gt: 22 } })

db.students.find({ courses: "react" })

db.students.find({ name: /^S/ })

db.students.find({ age: { $in: [18, 21] } })

db.students.find({ email: { $not: /@gmail\.com$/ } })

db.students.find({
  $and: [
    { courses: "react" },
    { age: { $gt: 20 } }
  ]
})

db.students.find({
  $or: [
    { courses: "react" },
    { courses: "nodejs" }
  ]
})

db.students.find({
  $or: [
    { name: { $regex: "x", $options: "i" } },
    { email: { $regex: "\\.edu$" } }
  ]
})
