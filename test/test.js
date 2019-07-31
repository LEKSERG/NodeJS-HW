const chai = require('chai');
const chaiHttp = require ('chai-http');
const app = require('../');

chai.use(chaiHttp);
chai.should();

describe("Todos", () => {
    describe("GET /todos", () => {
        // Test to get all todos record
        it("should get all todos record", (done) => {
             chai.request(app)
                 .get('/todos')
                 .end((err, res) => {
                     res.should.have.status(200);
                     res.body.should.be.a('object');
                     done();
                  });
         });
        // Test to get single todo record
        it("should get a single todo record", (done) => {
             const id = '5d3f4036414180201cae94a1';
             chai.request(app)
                 .get(`/todo/${id}`)
                 .end((err, res) => {
                     res.should.have.status(200);
                     res.body.should.be.a('object');
                     done();
                  });
         });

        // Test to get an eror 404 with wrong id
        it("should not get an error 404 with wrong id", (done) => {
             const id = '5d3f4036414180201cae94zz';
             chai.request(app)
                 .get(`/todo/${id}`)
                 .end((err, res) => {
                     res.should.have.status(404);
                     done();
                  });
         });
    });
});