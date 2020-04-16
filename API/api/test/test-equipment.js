import chai from 'chai';
import chatHttp from 'chai-http';
import 'chai/register-should';
import app from '../index';

chai.use(chatHttp);
const { expect } = chai;

describe('Testing the equipment endpoints:', () => {
  it('It should create an equipment', (done) => {
    const equipment =  {
      id: -1,
      equipment_name: "Test",
      equipment_items: {},
      equipment_recipe: {},
      player_id: null,
  };
    chai.request(app)
      .post('/api/v1/equipments')
      .set('Accept', 'application/json')
      .send(equipment)
      .end((err, res) => {
        expect(res.status).to.equal(201);
        expect(res.body.data).to.include({
          id: -1,
          equipment_name: equipment.equipment_name,
          player_id: null,
        });
        done();
      });
  });

  it('It should not create an equipment with incomplete parameters', (done) => {
    const equipment = {
      equipment_items: {},
      equipment_recipe: {},
      player_id: null,
    };
    chai.request(app)
      .post('/api/v1/equipments')
      .set('Accept', 'application/json')
      .send(equipment)
      .end((err, res) => {
        expect(res.status).to.equal(400);
        done();
      });
  });

  it('It should get all equipments', (done) => {
    chai.request(app)
      .get('/api/v1/equipments')
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        res.body.data[0].should.have.property('id');
        res.body.data[0].should.have.property('equipment_name');
        res.body.data[0].should.have.property('equipment_items');
        res.body.data[0].should.have.property('equipment_recipe');
        res.body.data[0].should.have.property('player_id');
        done();
      });
  });

  it('It should get a particular equipment', (done) => {
    const equipmentId = 1;
    chai.request(app)
      .get(`/api/v1/equipments/${equipmentId}`)
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        res.body.data.should.have.property('id');
        res.body.data.should.have.property('equipment_name');
        res.body.data.should.have.property('equipment_items');
        res.body.data.should.have.property('equipment_recipe');
        res.body.data.should.have.property('player_id');
        done();
      });
  });

  it('It should not get a particular equipment with invalid id', (done) => {
    const equipmentId = -2;
    chai.request(app)
      .get(`/api/v1/equipments/${equipmentId}`)
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.status).to.equal(404);
        res.body.should.have.property('message')
                            .eql(`Cannot find Equipment with the id ${equipmentId}`);
        done();
      });
  });

  it('It should not get a particular equipment with non-numeric id', (done) => {
    const equipmentId = 'aaa';
    chai.request(app)
      .get(`/api/v1/equipments/${equipmentId}`)
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.status).to.equal(400);
        res.body.should.have.property('message')
                            .eql('Please input a valid numeric value');
        done();
      });
  });

  it('It should update a equipment', (done) => {
    const equipmentId = -1;
    const updatedequipment = {
      id: equipmentId,
      equipment_name: "TestUpdate",
      equipment_items: {},
      equipment_recipe: {},
      player_id: null,
    };
    chai.request(app)
      .put(`/api/v1/equipments/${equipmentId}`)
      .set('Accept', 'application/json')
      .send(updatedequipment)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.data.id).equal(updatedequipment.id);
        expect(res.body.data.equipment_name).equal(updatedequipment.equipment_name);
        expect(res.body.data.player_id).equal(updatedequipment.player_id);
        done();
      });
  });

  it('It should not update a equipment with invalid id', (done) => {
    const equipmentId = '-2';
    const updatedequipment = {
      id: equipmentId,
      equipment_name: "TestUpdate failed",
      equipment_items: {},
      equipment_recipe: {},
      player_id: null,
    };
    chai.request(app)
      .put(`/api/v1/equipments/${equipmentId}`)
      .set('Accept', 'application/json')
      .send(updatedequipment)
      .end((err, res) => {
        expect(res.status).to.equal(404);
        res.body.should.have.property('message')
                            .eql(`Cannot find Equipment with the id: ${equipmentId}`);
        done();
      });
  });

  it('It should not update a equipment with non-numeric id value', (done) => {
    const equipmentId = 'ggg';
    const updatedequipment = {
      id: equipmentId,
      equipment_name: "TestUpdate failed",
      equipment_items: {},
      equipment_recipe: {},
      player_id: null,
    };
    chai.request(app)
      .put(`/api/v1/equipments/${equipmentId}`)
      .set('Accept', 'application/json')
      .send(updatedequipment)
      .end((err, res) => {
        expect(res.status).to.equal(400);
        res.body.should.have.property('message')
                            .eql('Please input a valid numeric value');
        done();
      });
  });


  it('It should delete a equipment', (done) => {
    const equipmentId = -1;
    chai.request(app)
      .delete(`/api/v1/equipments/${equipmentId}`)
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.data).to.include({});
        done();
      });
  });

  it('It should not delete a equipment with invalid id', (done) => {
    const equipmentId = -2;
    chai.request(app)
      .delete(`/api/v1/equipments/${equipmentId}`)
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.status).to.equal(404);
        res.body.should.have.property('message')
                            .eql(`Equipment with the id ${equipmentId} cannot be found`);
        done();
      });
  });

  it('It should not delete a equipment with non-numeric id', (done) => {
    const equipmentId = 'bbb';
    chai.request(app)
      .delete(`/api/v1/equipments/${equipmentId}`)
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.status).to.equal(400);
        res.body.should.have.property('message').eql('Please provide a numeric value');
        done();
      });
  });
});