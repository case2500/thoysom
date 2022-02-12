import mongoose from 'mongoose'



const categorySchema = mongoose.Schema(
  {
     
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      // required: true,
    },
 
    description: {
      type: String,
      // required: true,
    },

    status: {
      type: Number,
      // required: true,
      default: 1,
    },
  },
  {
    timestamps: true,
  }
)

const Category = mongoose.model('Category', categorySchema)

export default Category
