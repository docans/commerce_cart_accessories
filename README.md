commerce_cart_accessories
=========================

This module provides the ability to add accessories product to a main product as related product and have it only show in the cart.

For example in a computer shop, after someone buys System unit and goes to the cart to checkout, Under the System unit product , we will see Related product such as keyboard, mouse etc that are available for the user to add directly to the cart without going out to look for a mouse or keyboard.


Dependencies
===============

Commerce (particularly commerce_cart)
Entityreference

Configuration
=============

Create a new product variation called "Accessories" at "www.example.com/admin/commerce/config/product-variation-types" 

Add an entityreference field to a product type variation that will take accessories (i.e. Product) by going to"www.example.com/admin/commerce/config/product-variation-types/product/fields"

When editing the field, Under "Commerce Product Accessories Settings" check the box next to "Offer products referenced with this field as an accessory to this product type in the cart form"







