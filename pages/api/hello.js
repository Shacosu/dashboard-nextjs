const {getConnection} = require('../../services/databaseConfig');

export default async function handler(req, res) {
  const {collection, products} = req.body;
  const pool = await getConnection();
  const  { recordset: data } = await pool.request().query(`select top ${products || 25} * from tb_collection_master where uni_collection='${collection}'`)
  console.log(data)
  if (data && data.length > 0) return res.status(200).json({ data })
  else return res.status(404).json({ status: "Not Found", data: [] })
}
