module.exports = app => {
    const { getImagesController, syncImagesController } = require("./controllers");
  
    var router = require("express").Router();

    router.get("/images", getImagesController);
    router.post("/images/sync", syncImagesController);
  
    app.use('/api', router);
  };