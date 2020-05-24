import { people, getById } from "./db";


const resolevers = {
    Query: {
        people: () => people,
        person: (_, { id }) => getById(id)
    }
};

export default resolevers;