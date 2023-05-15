const ytdl = require("ytdl-core");

const getLinkFromVideoID = (videoID) => {
  return "https://www.youtube.com/watch?v=" + videoID;
};

exports.validateLink = (req, res) => {
  const videoID = req.params.videoID;
  if (!videoID || videoID === undefined)
    res.status(400).json({ message: "Invalid or no video ID received" });
  const linkValid = ytdl.validateURL(getLinkFromVideoID(videoID));
  if (linkValid) res.status(200).json({ message: "The link is valid!" });
  else
    res
      .status(404)
      .json({ message: "The requested video couldn't be located!" });
};

exports.getMetaInfo = (req, res) => {};
