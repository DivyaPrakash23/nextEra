const express = require("express");
const isloggedin = require("../middlewares/isLoggedin");
const productModel = require("../models/product-Model");
const userModel = require("../models/user-model");
const router = express.Router()

router.get("/", (req,res)=>{
    let error = req.flash("error")
    res.render("index",{loggedin: false});
})
router.get("/shop",isloggedin,async (req,res)=>{
    let products = await productModel.find();
    res.render("shop", {products});
})

router.get("/addtocart/:productid",isloggedin,async (req,res)=>{
    let user = await userModel.findOne({email: req.user.email})
    user.cart.push(req.params.productid)
    await user.save()
    res.redirect("/shop")
})

router.get("/logout",isloggedin, (req,res)=>{
    res.render("shop");
})

module.exports = router;