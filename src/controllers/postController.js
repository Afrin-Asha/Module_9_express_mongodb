
exports.create = async (req, res) => {
    
  res.status(200).json({status: "Success", data: "Admin created successfully"});
};

exports.read = async (req, res) => {
  res.status(200).json({status: "Success", data: "Post read successfully"}); 
};
///api/admin/create
exports.delete = async (req, res) => {
  res.status(200).json({status: "Success", data: "Post deleted successfully"}); 
};

exports.update = async (req, res) => {
  res.status(200).json({status: "Success", data: "Post updated successfully"});
};
