import mongoose from 'mongoose';

const SalesSchema = new mongoose.Schema({
    loja: Number,
    weekDay: String,
    date: String,
    hour: String,
    salesPerHour: Number,
    pa: Number,
    tm: Number,
    wap: Number,
    foundation: Number
})

const Sale = mongoose.models.Sale || mongoose.model("Sale", SalesSchema);

export default Sale