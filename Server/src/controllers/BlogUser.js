const BlogUser = require("../model/Blogmodel");
const User = require("../model/Usermodel");

const NewBlog = async (req, res) => {
  const { blogimage, title, description, heading } = req.body;
  console.log("blogpost data is" + blogimage, title, description, heading);
  try {
    if (!blogimage || !title || !description || !heading) {
      return res.status(400).json({
        message: "please fill all the field",
      });
    } else {
      const user = new BlogUser({
        blogimage,
        heading,
        title,
        description,
      });
      const result = await user.save();

      res.status(201).json({
        message: "Blog is successfully post",
        data: result,
      });
    }
  } catch (e) {
    console.error(e);
    res.status(500).json({
      message: "internel server error",
    });
  }
};

const UpdateBlog = async (req, res) => {
  authorId = req.rootuserId;
  const id = req.params.id;

  try {
    const Setbloguser = await User.findByIdAndUpdate(
      { _id: authorId },
      {
        $push: {
          blogs: id,
        },
      }
    );

    const result = await BlogUser.findByIdAndUpdate(
      { _id: id },
      { $set: { authors: authorId, ...req.body } },
      { new: true }
    );

    res.status(200).json({
      data: result,
      message: "blog is published",
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({
      message: "internel server error",
    });
  }
};

const GetBlog = async (req, res) => {
  try {
    const result = await BlogUser.find({})
      .sort({ updatedAt: -1 })
      .populate("authors");

    res.status(201).json({
      message: "Blog is successfully post",
      data: result,
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({
      message: "internel server error",
    });
  }
};


const Getauthorblog = async (req, res) => {
  const blogauthorid = req.params.id;

  try {
    const result = await BlogUser.findById({ _id: blogauthorid });

    res.status(201).json({
      data: result,
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({
      message: "internel server error",
    });
  }
};

const EditAuthorblog = async (req, res) => {
  const blogauthorid = req.params.id;
  console.log("editblog" + req.body);
  try {
    const result = await BlogUser.findByIdAndUpdate(
      {
        _id: blogauthorid,
      },
      req.body,
      { new: true }
    );

    console.log(result)

    res.status(202).json({
      message: "blog has been edited successfully",
      data:result
    })
  } catch (e) {
    console.error(e);
    res.status(500).json({
      message: "internel server error",
    });
  }
};

const GetparticularBlogs = async (req, res) => {
  const authorId = req.rootuserId;
  console.log(authorId);
  const id = req.params.id;
  try {
    const result = await BlogUser.findById({ _id: req.params.id }).populate(
      "authors"
    );
    console.log(result);

    res.status(201).json({
      message: "Blog is successfully post",
      data: result,
      authorId: authorId,
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({
      message: "internel server error",
    });
  }
};

const DeleteBlog = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  try {
    const result = await BlogUser.findByIdAndDelete({ _id: req.params.id });
    console.log(result);
    res.status(204).json({
      message: "successfully deleted the blogs",
      data: result,
    });
  } catch (e) {
    console.error(e);
  }
};

const UpdateLikes = async (req, res) => {
  const authorid = req.params.id;
  console.log(req.params.id);
  const userinfo = req.body;

  console.log(userinfo._id);
  try {
    const blog = await BlogUser.findById({ _id: req.params.id });
    console.log(blog.likes);

    const existuser = blog.likes.includes(userinfo._id);

    if (existuser) {
      blog.activity.total_likes -= 1;
      const index = blog.likes.indexOf(userinfo._id);
      blog.likes.splice(index, 1);
    } else {
      blog.activity.total_likes += 1;
      blog.likes.push(userinfo._id);
    }

    const result = await blog.save();

    res.status(202).json({
      message: "liked",
      data: result,
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({
      message: "internel server error",
    });
  }
};

module.exports = {
  NewBlog,
  GetBlog,
  Getauthorblog,
  EditAuthorblog,
  UpdateBlog,
  GetparticularBlogs,
  DeleteBlog,
  UpdateLikes,
};
