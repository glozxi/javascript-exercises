const findTheOldest = function(people) {
    const getAge = function(person) {
        if (!('yearOfDeath' in person)) {
            return new Date().getFullYear() - person.yearOfBirth;
        } else {
            return person.yearOfDeath - person.yearOfBirth;
        }
    }
    return people.reduce((person1, person2) => getAge(person1) > getAge(person2)
            ? person1
            : person2
        )
};

// Do not edit below this line
module.exports = findTheOldest;
