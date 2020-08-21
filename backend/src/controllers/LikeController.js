const Dev = require('../model/Dev');

module.exports = {
  async store(req, res) {
    // console.log(req.params.devId); // capturar o parametro na URL
    // console.log(req.headers.user); // capturar o headers user
    // return res.json({ ok: true });
    const { user } = req.headers;
    const { devId } = req.params;

    const loggedDev = await Dev.findById(user);
    const targedDev = await Dev.findById(devId);
    console.log(targedDev);

    if (!targedDev) {
      return res.status(400).json({ error: 'Dev not exists' });
    }

    loggedDev.likes.push(targedDev._id);

    await loggedDev.save();

    return res.json({ loggedDev });
  },
};
