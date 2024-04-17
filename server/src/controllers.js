const { getImages, syncImages } = require("./models");

const getImagesController = async (req, res) => {
    const images = await getImages();
    if (images) {
        res.json(images);
    } else {
        res.status(404).json({ message: "Images not found" });
    }
};

const syncImagesController = async (req, res) => {
    if (await syncImages(req.body)) {
        res.json({ message: "Images synced successfully" });
    } else {
        res.status(500).json({ message: "Error while synching images" });
    }
};

module.exports = { getImagesController, syncImagesController };