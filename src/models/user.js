import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const addressSchema = new mongoose.Schema({
    label:{
        type:String, default: 'Home'
    },
    street:{
        type:String, required:true
    },
    city:{
        type:String, required:true
    },
    state:{
        type:string
    },
    postalCode:{
        type:String
    },
    country:{
        type:String, default:'Nigeria'
    }
},{_id:true});



const userSchema = new mongoose.Schema({
     name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: [true,'Email is required'],
      unique: true,
      lowercase: true,
      trim: true,
    },
     passwordHash: {
      type: String,
      required: [true,'password is required']
    },

    role: {
      type: String,
      enum: ['customer', 'owner', 'driver', 'admin'],
      default: 'customer',
    },
    addresses: [addressSchema],

    isActive: {
      type: Boolean,
      default: true,
    },


},{timestamps:true});

userSchema.index({email:1}, 
{unique:true});

userSchema.methods.toJSON = function () {
  const user = this.toObject();
  delete user.passwordHash;
  return user;
};

userSchema.methods.comparePassword = async function (plainPassword) {
  return bcrypt.compare(plainPassword, this.passwordHash);
};

const userModel = mongoose.model("User", userSchema);

export default userModel;