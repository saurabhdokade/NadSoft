const Marks = require('../models/marks.model');

exports.createMark = (newMark, result) => {
    Marks.create(newMark, (err, data) => {
        if (err) result(err, null);
        else result(null, data);
    });
};

exports.getMarkById = (id, result) => {
    Marks.findById(id, (err, data) => {
        if (err) result(err, null);
        else result(null, data);
    });
};

exports.getAllMarks = (result) => {
    Marks.getAll((err, data) => {
        if (err) result(err, null);
        else result(null, data);
    });
};

exports.updateMarkById = (id, mark, result) => {
    Marks.updateById(id, mark, (err, data) => {
        if (err) result(err, null);
        else result(null, data);
    });
};

exports.deleteMarkById = (id, result) => {
    Marks.remove(id, (err, data) => {
        if (err) result(err, null);
        else result(null, data);
    });
};
