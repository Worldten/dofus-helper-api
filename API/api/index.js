import config from 'dotenv';
import playerRoutes from './server/routes/PlayerRoutes'
import equipmentRoutes from './server/routes/EquipmentRoutes'
import itemsRoutes from './server/routes/ItemRoutes'
import express from 'express';
import bodyParser from 'body-parser';

var cors = require('cors');

const app = express();

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = process.env.PORT || 8000;

app.use('/api/v1/players', playerRoutes);
app.use('/api/v1/equipments', equipmentRoutes);
app.use('/api/v1/items', itemsRoutes);

// when a random route is inputed

app.get('*', (req, res) => res.status(200).send({
   message: 'Welcome to this API.'
}));

app.listen(port, () => {
   console.log(`Server is running on PORT ${port}`);
});

export default app;