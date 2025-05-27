import mongoose, {Mongoose} from "mongoose";

const { ObjectId } = mongoose.Schema;

const cartSchema = new mongoose.Schema(
    {
        products: [
            {
                product:
                {
                    type: ObjectId,
                    ref: "Product",
                },
                name: {
                    type: String,
                    //required: true,
                },
                vendor: {
                    type: Object,
                    //required: true,
                },
                image: {
                    type: String,
                    //required: true,
                },
                size: {
                    type: String,
                    //required: true,
                },
                qty: {
                    type: String,
                    //required: true,
                },
                color: {
                    color: String,
                    image: String
                },
                price: Number,
            }
        ],
        cartTotal: Number,
        totalAfterDiscount: Number,
        user: {
            type: ObjectId,
            ref: "User",
        },
    },
    {
        timestamps: true
    }
);

const Cart = mongoose.models.Cart || mongoose.model("Cart", cartSchema)

export default Cart;