
exports.create = async (req, res) => {
    
  res.status(200).json({status: "Success", data: "SubAdmin created successfully"});
};

exports.read = async (req, res) => {
  res.status(200).json({status: "Success", data: "SubAdmin read successfully"}); 
};
///api/admin/create
exports.delete = async (req, res) => {
  res.status(200).json({status: "Success", data: "SubAdmin deleted successfully"}); 
};

exports.update = async (req, res) => {
  res.status(200).json({status: "Success", data: "SubAdmin updated successfully"});
};
