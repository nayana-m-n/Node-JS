const request = require('supertest')
const app = require('../Assignment3/app')
const User = require('../Assignment3/model/user')

// const userOne ={
//     name :'mike',
//     age:45,
//     email:'mike@gmail.com'
// }

// beforeEach(async()=>{
//     await User.deleteMany()
//     await new User(userOne).save()
// })


describe("POST /api/users",()=>{
    it("Should create a user",async()=>{
        const res = await request(app).post("/users").send({
            name:'RAM',
            age:30,
            email:'ram@gmail.com'
        });
        expect(res.statusCode).toBe(201);
        expect(res.body.name).toBe("RAM")
    });
});

describe("GET/api/user",()=>{
    it('should return all users',async()=>{
        const res = await request(app).get('/users');
        expect(res.statusCode).toBe(200);
        expect(res.body.length).toBeGreaterThan(0);
    });
});

describe("PUT /api/user/:id",()=>{
    it("should update a user", async()=>{
        const res= await request(app).patch("/users/64957f3247c54d7157fb77ac")
        .send({
            name :"RAM",
            age:40,
            email:'ram@gmail.com'
        });
        expect(res.statusCode).toBe(200);
        expect(res.body.age).toBe(40);
    })
})