
exports.create = async (req, res) => {
    
  res.status(200).json({status: "Success", data: "User created successfully"});
};

exports.read = async (req, res) => {
  res.status(200).json({status: "Success", data: "User read successfully"}); 
};
///api/admin/create
exports.delete = async (req, res) => {
  res.status(200).json({status: "Success", data: "User deleted successfully"}); 
};

exports.update = async (req, res) => {
  res.status(200).json({status: "Success", data: "User updated successfully"});
};
