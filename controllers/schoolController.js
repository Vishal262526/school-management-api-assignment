const { db } = require("./../config/db");

const addSchoolController = (req, res) => {
  const { name, address, lat, long } = req.body;

  if (!name || !address || !lat || !long) {
    const statusCode = 400;

    res.status(statusCode).json({ statusCode, message: "Invalid Data" });
    return;
  }

  const sql = `INSERT INTO schools (name, address, latitude, longitude) VALUES ('${name}', '${address}', '${lat}', '${long}')`;

  db.query(sql, (err, result) => {
    if (err) {
      console.error("Error inserting School:", err);
      return;
    }

    const statusCode = 200;

    res
      .status(statusCode)
      .json({ statusCode, message: "School Added Successfully" });
  });
};

const getNearSchoolsController = (req, res) => {
  const { lat, long } = req.query;

  if (!lat || !long) {
    const statusCode = 400;

    res.status(statusCode).json({ statusCode, message: "Invalid Data" });
    return;
  }

  const sql = `
    SELECT
        id,
        name,
        address,
        latitude,
        longitude,
        (6371 * ACOS(
            COS(RADIANS(${lat})) *
            COS(RADIANS(latitude)) *
            COS(RADIANS(longitude) - RADIANS(${long})) +
            SIN(RADIANS(${lat})) *
            SIN(RADIANS(latitude))
        )) AS distance
    FROM
        schools
    ORDER BY distance;
  `;

  db.query(sql, (err, result) => {
    if (err) {
      console.error("Error inserting School:", err);
      return;
    }

    const statusCode = 200;

    res
      .status(statusCode)
      .json({ statusCode, message: "Success", data: result });
  });
};

module.exports = { addSchoolController, getNearSchoolsController };
