console.log(process.env.NODE_ENV);

import db from "./database/models/models.config";
db.sequelize.sync({ alter: false });

import("./routes/sales.routes");
