import chai from 'chai';
import chatHttp from 'chai-http';
import 'chai/register-should';
import app from '../index';

chai.use(chatHttp);
const { expect } = chai;

describe('Testing the player endpoints:', () => {
  it('It should create a player', (done) => {
    const player = {
      player_mail: "thomaszim@free.fr",
      player_pwd: "thomas",
      player_username: "Worldten",
      player_jobs: {
        "Bucheron" : 100,
        "Alchimiste": 66
      },
      player_characters: {
        "Char1":{
          "name": "Worldten",
          "class": "Iop",
          "level": 78
        },
        "Char2":{
          "name": "WorldEight",
          "class": "Zobal",
          "level": 73
        }
      }
    };
    chai.request(app)
      .post('/api/v1/players')
      .set('Accept', 'application/json')
      .send(player)
      .end((err, res) => {
        expect(res.status).to.equal(201);
        expect(res.body.data).to.include({
          player_mail: player.player_mail,
          player_username: player.player_username
        });

      });
      done();
  });

  it('It should not create a player with incomplete parameters', (done) => {
    const player = {
      player_pwd: "thomas",
      player_username: "Worldten",
      player_jobs: { },
      player_characters: { }
    };
    chai.request(app)
      .post('/api/v1/players')
      .set('Accept', 'application/json')
      .send(player)
      .end((err, res) => {
        expect(res.status).to.equal(400);

      });
      done();
  });

  it('It should get all players', (done) => {
    chai.request(app)
      .get('/api/v1/players')
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        res.body.data[0].should.have.property('id');
        res.body.data[0].should.have.property('player_mail');
        res.body.data[0].should.have.property('player_pwd');
        res.body.data[0].should.have.property('player_username');
        res.body.data[0].should.have.property('player_confirmedmail');
        res.body.data[0].should.have.property('player_jobs');
        res.body.data[0].should.have.property('player_characters');

      });
      done();
  });

  it('It should get a particular player', (done) => {
    const playerId = 1;
    chai.request(app)
      .get(`/api/v1/players/${playerId}`)
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        res.body.data.should.have.property('id');
        res.body.data.should.have.property('player_mail');
        res.body.data.should.have.property('player_pwd');
        res.body.data.should.have.property('player_username');
        res.body.data.should.have.property('player_confirmedmail');
        res.body.data.should.have.property('player_jobs');
        res.body.data.should.have.property('player_characters');

      });
      done();
  });

  it('It should not get a particular player with invalid id', (done) => {
    const playerId = -2;
    chai.request(app)
      .get(`/api/v1/players/${playerId}`)
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.status).to.equal(404);
        res.body.should.have.property('message')
                            .eql(`Cannot find Player with the id ${playerId}`);

      });
      done();
  });

  it('It should not get a particular player with non-numeric id', (done) => {
    const playerId = 'aaa';
    chai.request(app)
      .get(`/api/v1/players/${playerId}`)
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.status).to.equal(400);
        res.body.should.have.property('message')
                            .eql('Please input a valid numeric value');

      });
      done();
  });

  it('It should update a player', (done) => {
    const playerId = 1;
    const updatedplayer = {
      id: playerId,
      player_mail: "thomaszim@free.fr",
      player_pwd: "thomas",
      player_username: "Worldten",
      player_jobs: { },
      player_characters: { }
    };
    chai.request(app)
      .put(`/api/v1/players/${playerId}`)
      .set('Accept', 'application/json')
      .send(updatedplayer)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.data.id).equal(updatedplayer.id);
        expect(res.body.data.player_mail).equal(updatedplayer.player_mail);
        expect(res.body.data.player_pwd).equal(updatedplayer.player_pwd);
        expect(res.body.data.player_username).equal(updatedplayer.player_username);

      });
      done();
  });

  it('It should not update a player with invalid id', (done) => {
    const playerId = '-2';
    const updatedplayer = {
      id: playerId,
      player_pwd: "thomas",
      player_username: "Worldten",
    };
    chai.request(app)
      .put(`/api/v1/players/${playerId}`)
      .set('Accept', 'application/json')
      .send(updatedplayer)
      .end((err, res) => {
        expect(res.status).to.equal(404);
        res.body.should.have.property('message')
                            .eql(`Cannot find Player with the id: ${playerId}`);

      });
      done();
  });

  it('It should not update a player with non-numeric id value', (done) => {
    const playerId = 'ggg';
    const updatedplayer = {
      id: playerId,
      player_pwd: "thomas",
      player_username: "Worldten",
      player_jobs: { },
      player_characters: { }
    };
    chai.request(app)
      .put(`/api/v1/players/${playerId}`)
      .set('Accept', 'application/json')
      .send(updatedplayer)
      .end((err, res) => {
        expect(res.status).to.equal(400);
        res.body.should.have.property('message')
                            .eql('Please input a valid numeric value');

      });
      done();
  });


  it('It should delete a player', (done) => {
    const playerId = 2;
    chai.request(app)
      .delete(`/api/v1/players/${playerId}`)
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.data).to.include({});
      });
      done();

  });

  it('It should not delete a player with invalid id', (done) => {
    const playerId = -2;
    chai.request(app)
      .delete(`/api/v1/players/${playerId}`)
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.status).to.equal(404);
        res.body.should.have.property('message')
                            .eql(`Player with the id ${playerId} cannot be found`);
      });
      done();

  });

  it('It should not delete a player with non-numeric id', (done) => {
    const playerId = 'bbb';
    chai.request(app)
      .delete(`/api/v1/players/${playerId}`)
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.status).to.equal(400);
        res.body.should.have.property('message').eql('Please provide a numeric value');
      });
      done();

  });
});