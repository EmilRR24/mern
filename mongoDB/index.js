// CREATE 5 STUDENTS
db.students.insert({name: "Trey L", home_state: "MD", lucky_number: 2, birthday:{month:1, day:2, year:2000}})

db.students.insert({name: "JaneL", home_state: "HI", lucky_number: 24, birthday:{month:1, day:23, year:2002}})

db.students.insert({name: "Steve S", home_state: "HI", lucky_number: 45, birthday:{month:5, day:2, year:2002}})

db.students.insert({name: "Tim J", home_state: "HI", lucky_number: 25, birthday:{month:6, day:2, year:2001}})

db.students.insert({name: "Kev U", home_state: "CA", lucky_number: 32, birthday:{month:11, day:21, year:2005}})

// GET ALL STUDENTS
db.students.find()

// GET STUDENTS FROM "CA" OR "WA"
db.students.find({ home_state: "CA" })
db.students.find({ home_state: "WA" })

// GET STUDENTS WHOSE LUCKY NUMBER GREATER THAN 3
db.students.find({ lucky_number: {$gt:3} })

// GET STUDENTS WHOSE LUCKY NUMBER IS LESS THAN OR EQUAL TO 10
db.students.find({ lucky_number: {$lte:10} })

// GET STUDENTS WHOSE LUCKY NUMBER IS BETWEEN 1 AND 9
db.students.find({ 
        $and: [
            {lucky_number: {$gt:0} },
            {lucky_number: {$lt:10} }
        ]
    })

// ADD FIELD CALLED "interests" THAT IS AN ARRAY TO STUDENT COLLENTION
db.students.updateMany({},{ $set:{
    interests: ['coding', 'brunch', 'MongoDB']
}
})

// ADD UNIQUE INTEREST TO STUDENT
db.students.update({name: "Steve S"},{ $push:{
    interests: 'Python'
}
})

// ADD 'taxes' INTEREST TO STUDENT - ARRAY
db.students.update({name: "Trey L"},{ $push:{
    interests: 'taxes'
}
})

//REMOVE 'taxes" INTEREST FROM STUDENT - ARRAY
db.students.update({name: "Trey L"},{ $pull:{
    interests: 'taxes'
}
})

// REMOVE STUDENTS FROM CALIFORNIA
db.students.remove({home_state:'CA'})

// REMOVE A STUDENT BY NAME
db.students.remove({name:'Trey L'}, true)

// REMOVE A STUDENT WHOS LUCKY NUMBER IS GREATER THAN 5 (JUST ONE)
db.students.remove({lucky_number:{$gt:5} }, true)

// ADD FIELD CALLED 'number_of_belts' AND SET IT TO 0
db.students.updateMany({},{ $set:{
  number_of_belts: 0
}
})

// INCREMENT 'number_of_belts' BY 1 FOR ALL STUDENTS IN WA
db.students.updateMany({home_state: "WA"}, {$inc:{
  number_of_belts: 1
}
})

// RENAME 'number_of_belts' FIELD TO 'belts_earned'
db.students.updateMany({}, {$rename:{
  number_of_belts: 'belts_earned'
}
})

// REMOVE 'lucky_number' 
db.students.updateMany({}, {$unset: {
  lucky_number: ''
}
})

// ADD A 'updated_on' FIELD AND SET VALUE TO CURRENT DATE
db.students.updateMany({},{ $currentDate:{
  updated_on: {$type:"date"}
}
})