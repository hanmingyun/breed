const controller = {};

controller.getAll = (req, res) => {
    req.getConnection((err, conn) => {
        var sql = 'SELECT * from breed';

        conn.query(sql, (err, breeds) => {
            if (err) {
                res.json(err);
            }
            res.json({
                message: breeds
            });
        });
    });
};

controller.getOne = (req, res) => {
    var id = req.params.id;
    req.getConnection((err, conn) => {
        var sql = 'SELECT * from breed WHERE uid=' + id;

        conn.query(sql, (err, breed) => {
            if (err) {
                res.json(err);
            }
            if(!breed || breed.length == 0) {
                breed = null;
            } else {
                breed = breed[0];
            }
            res.json({
                message: breed
            });
        });
    });
};

controller.findBySub = (req, res) => {
    var id = req.params.id;
    req.getConnection((err, conn) => {
        var sql = 'SELECT uid, name, imagePath FROM breed WHERE sub_categoryId = (SELECT sub_categoryId FROM breed WHERE uid= ' + id +  ')';

        conn.query(sql, (err, breeds) => {
            if (err) {
                res.json(err);
            }
          
            res.json({
                message: breeds
            });
        });
    });
};

controller.Random = (req, res) => {
    req.getConnection((err, conn) => {
        var sql = 'SELECT * from breed order by RAND() LIMIT 1';

        conn.query(sql, (err, breeds) => {
            if (err) {
                res.json(err);
            }
            var breed;
            if(breeds && breeds.length > 0) {
                breed = breeds[0];
            } else {
                breed = null;
            }
            console.log(breed)
            res.json({
                message: breed
            });
        });
    });
};

controller.Search = (req, res) => {
    var param = req.params.param;
    req.getConnection((err, conn) => {
        var sql = "SELECT * from breed WHERE name LIKE '%"+ param +"%'";

        conn.query(sql, (err, breeds) => {
            if (err) {
                res.json(err);
            }
           
            res.json({
                message: breeds
            });
        });
    });
};

controller.listAll = (req, res) => {
    req.getConnection((err, conn) => {
        var sql = 'SELECT breed.name AS breedName, breed.uid AS breedId, breed.imagePath, category.uid AS categoryId, category.name AS category' +
         ' FROM breed ' +
         ' INNER JOIN sub_category ON sub_category.uid=breed.sub_categoryId ' +
         ' INNER JOIN category ON category.uid=sub_category.parent_id';

        conn.query(sql, (err, breeds) => {
            if (err) {
                res.json(err);
            }
            var result = {};
            breeds.forEach(element => {
                var category = element.category
                if(!(element.category in result)) {
                    result[category] = [];
                }
            });
            
            breeds.forEach(element => {
                var category = element.category
                if (element.category == category) {
                    result[category].push(element.breedName);
                }
            });
            res.json({
                message: result
            });
        });
    });
};

controller.getRandomImage = (req, res) => {
    req.getConnection((err, conn) => {
        var sql = 'SELECT * from breed order by rand() LIMIT 1';

        conn.query(sql, (err, breeds) => {
            if (err) {
                res.json(err);
            }
            var imagePath = "";
            if (breeds.length > 0)
                imagePath = breeds[0].imagePath
            res.json({
                message: imagePath,
                status: "success"
            });
        });
    });
};

controller.getMultipleRandomImages = (req, res) => {
    var num = req.params.num;
    req.getConnection((err, conn) => {
        var sql = 'SELECT * from breed order by RAND() LIMIT ' + num;
        
        conn.query(sql, (err, breeds) => {
            if (err) {
                res.json(err);
            }
            var result = [];
            breeds.forEach(element => {
                result.push(element.imagePath);
            });
            res.json({
                message: result,
                status: "success"
            });
        });
    });
};

controller.getByCategory = (req, res) => {
    var category = req.params.category;
    req.getConnection((err, conn) => {
        var sql = "SELECT breed.* FROM breed " +
        " INNER JOIN sub_category ON sub_category.uid=breed.sub_categoryId" +
        " INNER JOIN category ON category.uid=sub_category.parent_id " +
        " WHERE category.name='" + category + "'";
        
        conn.query(sql, (err, breeds) => {
            if (err) {
                res.json(err);
            }
            var result = [];
            breeds.forEach(element => {
                result.push(element.imagePath);
            });
            res.json({
                message: result,
                status: "success"
            });
        });
    });
};

controller.getRandomByCategory = (req, res) => {
    var category = req.params.category;
    req.getConnection((err, conn) => {
        var sql = "SELECT breed.* FROM breed " +
            " INNER JOIN sub_category ON sub_category.uid=breed.sub_categoryId" +
            " INNER JOIN category ON category.uid=sub_category.parent_id " +
            " WHERE category.name='" + category + "'" +
            " order by RAND() LIMIT 1";
        
        conn.query(sql, (err, breeds) => {
            if (err) {
                res.json(err);
            }
            var imagePath = "";
            if (breeds.length > 0)
                imagePath = breeds[0].imagePath
            res.json({
                message: imagePath,
                status: "success"
            });
        });
    });
};

controller.getMultipleByCategory = (req, res) => {
    var category = req.params.category;
    var num = req.params.num;
    req.getConnection((err, conn) => {
        var sql = "SELECT breed.* FROM breed " +
            " INNER JOIN sub_category ON sub_category.uid=breed.sub_categoryId" +
            " INNER JOIN category ON category.uid=sub_category.parent_id " +
            " WHERE category.name='" + category + "' order by RAND() LIMIT " + num;
        
        conn.query(sql, (err, breeds) => {
            if (err) {
                res.json(err);
            }
            var result = [];
            breeds.forEach(element => {
                result.push(element.imagePath);
            });
            res.json({
                message: result,
                status: "success"
            });
        });
    });
};

controller.getAllSubCategory = (req, res) => {
    var category = req.params.category;
    
    req.getConnection((err, conn) => {
        var sql = "SELECT sub_category.* FROM sub_category " +
            " INNER JOIN category ON category.uid=sub_category.parent_id " +
            " WHERE category.name='" + category + "'";
        console.log(sql)    
        conn.query(sql, (err, data) => {
            if (err) {
                res.json(err);
            }
            var result = [];
            data.forEach(element => {
                result.push(element.name);
            });
            res.json({
                message: result,
                status: "success"
            });
        });
    });
};

controller.getSubCategoryBreedImages = (req, res) => {
    var category = req.params.category;
    var sub = req.params.sub;

    req.getConnection((err, conn) => {
        var sql = "SELECT breed.* FROM breed " +
            " INNER JOIN sub_category ON sub_category.uid=breed.sub_categoryId" +
            " INNER JOIN category ON category.uid=sub_category.parent_id " +
            " WHERE sub_category.name='" + sub + "'" +
            " AND category.name='" + category + "'";
        console.log(sql)
        conn.query(sql, (err, data) => {
            if (err) {
                res.json(err);
            }
            var result = [];
            data.forEach(element => {
                result.push(element.imagePath);
            });
            res.json({
                message: result,
                status: "success"
            });
        });
    });
};

controller.getRandomSubCategoryBreedImages = (req, res) => {
    var category = req.params.category;
    var sub = req.params.sub;

    req.getConnection((err, conn) => {
        var sql = "SELECT breed.* FROM breed " +
            " INNER JOIN sub_category ON sub_category.uid=breed.sub_categoryId" +
            " INNER JOIN category ON category.uid=sub_category.parent_id " +
            " WHERE category.name='" + category + "'" +
            " AND sub_category.name='" + sub + "' order by RAND() LIMIT 1";
        console.log(sql)
        conn.query(sql, (err, data) => {
            if (err) {
                res.json(err);
            }
            var imagePath = "";
            if(data.length > 0)
                imagePath = data[0].imagePath
            res.json({
                message: imagePath,
                status: "success"
            });
        });
    });
};

controller.getMultipleSubCategoryBreedImages = (req, res) => {
    var category = req.params.category;
    var sub = req.params.sub;
    var num = req.params.num;

    req.getConnection((err, conn) => {
        var sql = "SELECT breed.* FROM breed " +
            " INNER JOIN sub_category ON sub_category.uid=breed.sub_categoryId" +
            " INNER JOIN category ON category.uid=sub_category.parent_id " +
            " WHERE category.name='" + category + "'" +
            " AND sub_category.name='" + sub + "' order by RAND() LIMIT " + num;
        console.log(sql)
        conn.query(sql, (err, data) => {
            if (err) {
                res.json(err);
            }
            var result = [];
            data.forEach(element => {
                result.push(element.imagePath);
            });
            res.json({
                message: result,
                status: "success"
            });
        });
    });
};

controller.getRandomBySubCategory = (req, res) => {
    var sub = req.params.sub;

    req.getConnection((err, conn) => {
        var sql = "SELECT breed.* FROM breed " +
            " INNER JOIN sub_category ON sub_category.uid=breed.sub_categoryId" +
            " WHERE sub_category.name='" + sub + "' order by RAND() LIMIT 1";
        console.log(sql)
        conn.query(sql, (err, data) => {
            if (err) {
                res.json(err);
            }
            var imagePath = "";
            if (data.length > 0)
                imagePath = data[0].imagePath
            res.json({
                message: imagePath,
                status: "success"
            });
        });
    });
};
module.exports = controller;
