const controller = {};

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
// controller.edit = (req, res) => {
//     const { id } = req.params;
//     req.getConnection((err, conn) => {
//         conn.query("SELECT * FROM customer WHERE id = ?", [id], (err, rows) => {
//             res.render('customers_edit', {
//                 data: rows[0]
//             })
//         });
//     });
// };

// controller.update = (req, res) => {
//     const { id } = req.params;
//     const newCustomer = req.body;
//     req.getConnection((err, conn) => {

//         conn.query('UPDATE customer set ? where id = ?', [newCustomer, id], (err, rows) => {
//             res.redirect('/');
//         });
//     });
// };

// controller.delete = (req, res) => {
//     const { id } = req.params;
//     req.getConnection((err, connection) => {
//         connection.query('DELETE FROM customer WHERE id = ?', [id], (err, rows) => {
//             res.redirect('/');
//         });
//     });
// }

module.exports = controller;
