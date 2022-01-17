const Product = require('../models/products.model');
const Types = require('../models/types.model');
const News = require('../models/news.model');
const Auths = require('../models/auth.model');
const path = require('path');

module.exports = {
  index: async (req, res) => {
    //   const product = await Product.getAll();
    res.render('admin/index');
  },

  index2: async (req, res) => {
    //   const product = await Product.getAll();
    res.render('adminv2/index');
  },

  product: async (req, res) => {
    res.render('admin/index');
  },

  create: async (req, res) => {
    res.render('admin/addproducts', {
      title: "Add Product Page"
    });
  },

  createProducts: async (req, res) => {
    res.render('admin/createproducts', {
      title: " Create Products Page",
      types: await Types.getAll()
    });
  },

  createProducts2: async (req, res) => {
    res.render('adminv2/createproducts2', {
      title: " Create Products Page",
      types: await Types.getAll()
    });
  },
  
  createTypes: async (req, res) => {
    res.render('admin/createtypes', {
      title: " Create Types Page",
      types: await Product.getAll()
    });
  },

  createTypes2: async (req, res) => {
    res.render('adminv2/createtypes2', {
      title: " Create Types Page",
      types: await Product.getAll()
    });
  },

  createKinds: async (req, res) => {
    res.render('admin/createkinds', {
      title: " Create Kinds Page",
      kinds: await Product.getAll()
    });
  },

  createKinds2: async (req, res) => {
    res.render('adminv2/createkinds2', {
      title: " Create Kinds Page",
      kinds: await Product.getAll()
    });
  },

  // postCreateImage: async (req, res) => {
  //   await Product.create_product(req.body);
  //   res.redirect('/admin/views');
  // },

  viewsProduct: async (req, res) => {
    const product = await Product.getAll();
    res.render('admin/viewproducts', {
      seeds: product,
      title: 'View Manage Page',
    });
  },

  viewsProduct2: async (req, res) => {
    const product = await Product.getAll();
    res.render('adminv2/viewproducts2', {
      seeds: product,
      title: 'View Manage Page',
    });
  },

  viewNews: async (req, res) => {
    const product = await News.getAll();
    res.render('admin/viewnews', {
      news: product,
      title: 'View New Page'
    });
  },

  viewNews2: async (req, res) => {
    const product = await News.getAll();
    res.render('adminv2/viewnews2', {
      news: product,
      title: 'View New Page'
    });
  },

  addNews: async (req, res) => {
    res.render('admin/addnews', {
      types: await News.getAll(),
      title: 'Add News Page'
    })
  },

  addNews2: async (req, res) => {
    res.render('adminv2/addnews2', {
      types: await News.getAll(),
      title: 'Add News Page'
    })
  },

  deleteProduct: async (req, res) => {
    await Product.delete(req.params.id);
    res.redirect('/admin/views');
  },

  deleteProduct2: async (req, res) => {
    await Product.delete(req.params.id);
    res.redirect('/admin/views2');
  },

  deleteTypes: async (req, res) => {
    await Product.delete(req.params.id);
    res.redirect('/admin/create');
  },

  deleteTypes2: async (req, res) => {
    await Product.delete(req.params.id);
    res.redirect('/admin/create2');
  },

  deleteKinds: async (req, res) => {
    await Product.delete(req.params.id);
    res.redirect('/admin/create');
  },

  deleteKinds2: async (req, res) => {
    await Product.delete(req.params.id);
    res.redirect('/admin/create2');
  },

  updateProduct: async (req, res) => {
    res.render('admin/updateproducts', {
      seeds: await Product.get_product(req.params.id),
      types: await Types.getAll(),
      title: 'Update Product',
    });
  },

  updateProduct2: async (req, res) => {
    res.render('adminv2/updateproducts2', {
      seeds: await Product.get_product(req.params.id),
      types: await Types.getAll(),
      title: 'Update Product',
    });
  },

  post_Update: async (req, res) => {
    // console.log(req.body);
    await Product.update_product(req.params.id, req.body);
    res.redirect('/admin/views');
  },

  post_Update2: async (req, res) => {
    // console.log(req.body);
    await Product.update_product(req.params.id, req.body);
    res.redirect('/admin/views2');
  },

  user: async (req, res) => {
    res.render('admin/users', {
      users: await Auths.getAll(),
      title: 'Manage Users'
    })
  },

  user2: async (req, res) => {
    res.render('adminv2/users2', {
      users: await Auths.getAll(),
      title: 'Manage Users'
    })
  },

  deleteUser: async (req, res) => {
    await Auths.delete(req.params.id);
    res.redirect('/admin/users');
  },

  deleteUser2: async (req, res) => {
    await Auths.delete(req.params.id);
    res.redirect('/admin/users2');
  },

  postNew: async (req, res) => {
    let image = req.files.image;

    await image.mv(path.resolve(__dirname, '../public/image', image.name), function (err){
      if (err) console.log(err)
      News.create_new({...req.body,image: '/image/' + image.name});
      res.redirect('/admin/news');
    })
  },

  postNew2: async (req, res) => {
    let image = req.files.image;

    await image.mv(path.resolve(__dirname, '../public/image', image.name), function (err){
      if (err) console.log(err)
      News.create_new({...req.body,image: '/image/' + image.name});
      res.redirect('/admin/news2');
    })
  },

  deleteNews: async (req, res) => {
    await News.delete(req.params.id);
    res.redirect('/admin/news');
  },

  deleteNews2: async (req, res) => {
    await News.delete(req.params.id);
    res.redirect('/admin/news2');
  },
  
  postCreateProducts: async (req, res) => {
    let image = req.files.image;

    await image.mv(path.resolve(__dirname, '../public/image', image.name), function (err){
      if (err) console.log(err)
     Product.create_product({...req.body,image: '/image/' + image.name});
      res.redirect('/admin/views');
    })
  },

  postCreateProducts2: async (req, res) => {
    let image = req.files.image;

    await image.mv(path.resolve(__dirname, '../public/image', image.name), function (err){
      if (err) console.log(err)
     Product.create_product({...req.body,image: '/image/' + image.name});
      res.redirect('/admin/views2');
    })
  }
};
