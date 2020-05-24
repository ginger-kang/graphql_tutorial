export const people = [
    {
        id: "1",
        name: "kang",
        age: 20,
        gender: "male"
    },
    {
        id: "2",
        name: "choi",
        age: 21,
        gender: "female"
    },
    {
        id: "3",
        name: "ruka",
        age: 18,
        gender: "male"
    }
];

export const getById = id => {
    const filteredPeople = people.filter(person => person.id == id);
    return filteredPeople[0]
}
