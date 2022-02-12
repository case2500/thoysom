import asyncHandler from 'express-async-handler'
import Category from '../models/CategoryModel.js'


// const getCategory= asyncHandler(async (req, res) => {
//   const pageSize = 12
//   const page = Number(req.query.pageNumber) || 1

//   const keyword = req.query.keyword
//     ? {
//       name: {
//         $regex: req.query.keyword,
//         $options: 'i',
//       },
//     }
//     : {}

//   const count = await Category.countDocuments({ ...keyword })
//   console.log(count)
//   const products = await Category.find({ ...keyword  })
//     .limit(pageSize)
//     .skip(pageSize * (page - 1))

//   res.json({ products, page, pages: Math.ceil(count / pageSize) })
//   console.log(products)
// })

const getcat = asyncHandler(async (req, res) => {
  const pageSize = 12
  const page = Number(req.query.pageNumber) || 1

  const keyword = req.query.keyword
    ? {
      name: {
        $regex: req.query.keyword,
        $options: 'i',
      },
    }
    : {}

  const count = await Product.countDocuments({ ...keyword })
  const products = await Product.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1))

  res.json({ products, page, pages: Math.ceil(count / pageSize) })
  console.log(count + req.query.pageNumber)
})

const getCategorys = asyncHandler(async (req, res) => {
  const getCategories = await Category.find()
  res.json( getCategories )
  console.log(getCategories)
})

const createCategory = asyncHandler(async (req, res) => {
  const {name,image,description,status} = req.body
  const catagory = new Category({
    name: name,
    image: image,
    description: description,
    status: status
  })
  const createdCatagory = await catagory.save()
  res.status(201).json(createdCatagory)
})




const updateCategory = asyncHandler(async (req, res) => {
  const {name,image,description,status} = req.body
  const catagory = await Catagory.findById(req.params.id)
  if (catagory) {
    catagory.name = name
    catagory.description = description
    catagory.image = image
    catagory.status = status

    const updatedCatagory = await catagory.save()
    res.json(updatedCatagory)
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})

const getCategoryById = asyncHandler(async (req, res) => {
  const catagory = await Catagory.findById(req.params.id)

  if (catagory) {
    res.json(catagory)
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})

const deleteCategory= asyncHandler(async (req, res) => {

  const category = await Category.findById(req.params.id)
  if (catagory) {
    await category.remove()
    res.json({ message: 'Product removed' })
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})

export {
  getCategorys,
  getCategoryById,
  deleteCategory,
  createCategory,
  updateCategory,
}


