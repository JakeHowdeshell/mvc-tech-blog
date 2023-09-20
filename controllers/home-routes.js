const router = require("express").Router();
const { User, Post, Comment } = require("../models");
const withAuth = require("../utils/auth.js");

router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ["username"],
        },
        {
          model: Comment,
          attributes: ["content", "user_id", "post_date"],
          include: [
            {
              model: User,
              attributes: ["username"],
            },
          ],
        },
      ],
    });

    const posts = postData.map((post) => post.get({ plain: true }));
    console.log(posts);
    res.render("homepage", {
      posts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//  get route for dashboard
router.get("/dashboard", withAuth, async (req, res) => {
  const loggedInUser = req.session.userId;
  const onDashboard = true;
  try {
    const userPostData = await Post.findAll({
      where: { user_id: loggedInUser },
      include: [
        {
          model: User,
          attributes: ["username"],
        },
        {
          model: Comment,
          attributes: ["content", "user_id", "post_date"],
          include: [
            {
              model: User,
              attributes: ["username"],
            },
          ],
        },
      ],
    });
    const posts = userPostData.map((post) => post.get({ plain: true }));
    console.log(loggedInUser);
    res.render("dashboard", {
      posts,
      loggedIn: req.session.loggedIn,
      onDashboard,
      loggedInUser,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/comment/:id", withAuth, async (req, res) => {
  const loggedInUser = req.session.userId;
  try {
    const userPostData = await Post.findByPk(req.params.id, {
      where: { user_id: loggedInUser },
      include: [
        {
          model: User,
          attributes: ["username"],
        },
        {
          model: Comment,
          attributes: ["content", "user_id", "post_date"],
          include: [
            {
              model: User,
              attributes: ["username"],
            },
          ],
        },
      ],
    });
    const posts = userPostData.get({ plain: true });

    console.log(posts);
    res.render("comments", {
      posts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//   need to add a post route for dashboard
router.post('/dashboard', withAuth, async (req, res) => {
    try {
      const newPost = await Post.create(req.body);

      res.status(200).json(newPost);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  // get route for new post
router.get("/posts", withAuth, (req, res) => {
  const loggedInUser = req.session.userId;
  res.render("posts", {
    loggedInUser,
  });
});
// need to add a put route for dashboard
// router.put('/dashboard', async (req, res) => {
//     try {
//       const newPost = await Post.update({

//       });

//       res.status(200).json(newPost);
//     } catch (err) {
//       res.status(400).json(err);
//     }
//   });
// need to add a delete route for dashboard
// router.delete('/dashboard', async (req, res) => {
//     try {
//       const projectData = await Post.destroy({
//         where: {
//           id: req.params.id,
//           user_id: req.session.user_id,
//         },
//       });

//       if (!projectData) {
//         res.status(404).json({ message: 'No project found with this id!' });
//         return;
//       }

//       res.status(200).json(projectData);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });
//  put route for the homepage to add comments
router.post("/comment", withAuth, async (req, res) => {
  try {
    const { content, post_id } = req.body;
    const addComment = await Comment.create({
      content,
      user_id: req.session.userId,
      post_id: post_id,
    });

    res.status(201).json(addComment);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
// get route for login
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/dashboard");
    return;
  }

  res.render("login");
});
// get route for sign up
router.get("/sign-up", (req, res) => {
  res.render("sign-up");
});

module.exports = router;
