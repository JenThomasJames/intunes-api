const ytdl = require("ytdl-core");

exports.validateLink = (req, res) => {
  const link = req.body.link;
  if (!link || link === undefined)
    res.status(400).json({ message: "Invalid or no link received" });
  const linkValid = ytdl.validateURL(link);
  if (linkValid) res.status(200).json({ message: "The link is valid!" });
  else
    res
      .status(404)
      .json({ message: "The requested video couldn't be located!" });
};
