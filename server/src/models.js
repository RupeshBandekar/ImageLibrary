const { sql, poolPromise } = require("./../config/db.config");

const getImages = async () => {
    try {
        const pool = await poolPromise;
        const request = pool.request();
        const result = await request.query(`SELECT [Id],[ImageId],[Title],ISNULL([SourceId], 0) AS SourceId,ISNULL([CityId], 0) AS CityId,[IsFavourite]
                                            FROM [ImageLibrary].[dbo].[Image]`);
        return result.recordset;
    } catch (err) {
        console.log(err);
        return null;
    }
};

const syncImages = async (images) => {
    try {
        const pool = await poolPromise;
        images.forEach(async image => {                 
            console.log(image.Id, image.ImageId, image.Title, image.SourceId, image.CityId, image.IsFavourite);
            const request = pool.request();
            request.input("Id", sql.Int, image.Id);
            request.input("ImageId", sql.VarChar, image.ImageId);
            request.input("Title", sql.VarChar, image.Title);
            request.input("SourceId", sql.Int, image.SourceId);
            request.input("CityId", sql.Int, image.CityId);
            request.input("IsFavourite", sql.Bit, image.IsFavourite);
            await request.query("EXEC Sync_Image @Id, @ImageId, @Title, @SourceId, @CityId, @IsFavourite");
        });

        return true;
    } catch (err) {
        console.log(err);
        return false;
    }
};

module.exports = { getImages, syncImages };