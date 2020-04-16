import chai from 'chai';
import chatHttp from 'chai-http';
import 'chai/register-should';
import app from '../index';

chai.use(chatHttp);
const { expect } = chai;

describe('Testing the item endpoints:', () => {
  it('It should create an item', (done) => {
    const item = {
      id: -1,
      item_id: 0,
      item_name: "Test",
      item_level: 0,
      item_type: "Epee",
      item_image: "url",
      item_recipe: {
        "Pépite" : {
          "item_id": 0,
          "item_image": "url",
          "item_level": 0,
          "quantity": 0
        }
      }
    };
    chai.request(app)
      .post('/api/v1/items')
      .set('Accept', 'application/json')
      .send(item)
      .end((err, res) => {
        expect(res.status).to.equal(201);
        expect(res.body.data).to.include({
          id: item.id,
          item_id: item.item_id,
          item_name: item.item_name,
          item_level: item.item_level,
          item_type: item.item_type,
          item_image: item.item_image,
        });
        done();
      });
  });

  it('It should not create an item with incomplete parameters', (done) => {
    const item = {
      id: -1,
      item_name: "Test",
      item_level: 0,
      item_type: "Epee",
      item_image: "url",
      item_recipe:{

      }
    };
    chai.request(app)
      .post('/api/v1/items')
      .set('Accept', 'application/json')
      .send(item)
      .end((err, res) => {
        expect(res.status).to.equal(400);
        done();
      });
  });

  it('It should get all items', (done) => {
    chai.request(app)
      .get('/api/v1/items')
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        res.body.data[0].should.have.property('id');
        res.body.data[0].should.have.property('item_id');
        res.body.data[0].should.have.property('item_level');
        res.body.data[0].should.have.property('item_type');
        res.body.data[0].should.have.property('item_image');
        res.body.data[0].should.have.property('item_recipe');
        done();
      });
  });

  it('It should get a particular item', (done) => {
    const itemId = -1;
    chai.request(app)
      .get(`/api/v1/items/${itemId}`)
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        res.body.data.should.have.property('id');
        res.body.data.should.have.property('item_id');
        res.body.data.should.have.property('item_level');
        res.body.data.should.have.property('item_type');
        res.body.data.should.have.property('item_image');
        res.body.data.should.have.property('item_recipe');
        done();
      });
  });

  it('It should not get a particular item with invalid id', (done) => {
    const itemId = -2;
    chai.request(app)
      .get(`/api/v1/items/${itemId}`)
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.status).to.equal(404);
        res.body.should.have.property('message')
                            .eql(`Cannot find Item with the id ${itemId}`);
        done();
      });
  });

  it('It should not get a particular item with non-numeric id', (done) => {
    const itemId = 'aaa';
    chai.request(app)
      .get(`/api/v1/items/${itemId}`)
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.status).to.equal(400);
        res.body.should.have.property('message')
                            .eql('Please input a valid numeric value');
        done();
      });
  });

  it('It should update a item', (done) => {
    const itemId = -1;
    const updateditem = {
      id: itemId,
      item_id: -1,
      item_name: "TestUpdate",
      item_level: 0,
      item_type: "Epee",
      item_image: "url",
      item_recipe:{

      }
    };
    chai.request(app)
      .put(`/api/v1/items/${itemId}`)
      .set('Accept', 'application/json')
      .send(updateditem)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.data.id).equal(updateditem.id);
        expect(res.body.data.item_id).equal(updateditem.item_id);
        expect(res.body.data.item_name).equal(updateditem.item_name);
        expect(res.body.data.item_level).equal(updateditem.item_level);
        expect(res.body.data.item_type).equal(updateditem.item_type);
        expect(res.body.data.item_image).equal(updateditem.item_image);
        done();
      });
  });

  it('It should not update a item with invalid id', (done) => {
    const itemId = '9999';
    const updateditem = {
      id: itemId,
      item_id: -1,
      item_name: "TestUpdate",
      item_level: 0,
      item_type: "Epee",
      item_image: "url",
      item_recipe:{

      }
    };
    chai.request(app)
      .put(`/api/v1/items/${itemId}`)
      .set('Accept', 'application/json')
      .send(updateditem)
      .end((err, res) => {
        expect(res.status).to.equal(404);
        res.body.should.have.property('message')
                            .eql(`Cannot find Item with the id: ${itemId}`);
        done();
      });
  });

  it('It should not update a item with non-numeric id value', (done) => {
    const itemId = 'ggg';
    const updateditem = {
      id: itemId,
      item_id: -1,
      item_name: "TestUpdate",
      item_level: 0,
      item_type: "Epee",
      item_image: "url",
      item_recipe:{

      }
    };
    chai.request(app)
      .put(`/api/v1/items/${itemId}`)
      .set('Accept', 'application/json')
      .send(updateditem)
      .end((err, res) => {
        expect(res.status).to.equal(400);
        res.body.should.have.property('message')
                            .eql('Please input a valid numeric value');
        done();
      });
  });


  it('It should delete a item', (done) => {
    const itemId = -1;
    chai.request(app)
      .delete(`/api/v1/items/${itemId}`)
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.data).to.include({});
        done();
      });
  });

  it('It should not delete a item with invalid id', (done) => {
    const itemId = -2;
    chai.request(app)
      .delete(`/api/v1/items/${itemId}`)
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.status).to.equal(404);
        res.body.should.have.property('message')
                            .eql(`Item with the id ${itemId} cannot be found`);
        done();
      });
  });

  it('It should not delete a item with non-numeric id', (done) => {
    const itemId = 'bbb';
    chai.request(app)
      .delete(`/api/v1/items/${itemId}`)
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.status).to.equal(400);
        res.body.should.have.property('message').eql('Please provide a numeric value');
        done();
      });
  });
});