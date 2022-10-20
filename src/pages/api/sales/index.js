import Sale from '../../../models/Sales';
import { dbConnection } from '../../../services/dbConnection';

dbConnection();

export default async function handler(req, res ) {
    const { method } = req;

    switch (method) {
        case "GET":
            try {
                const sales = await Sale.find({});
                res.setHeader('Content-Type', 'application/json');
                res.status(200).json({ sucess: true, data: sales });
            } catch (err) {
                res.status(500).json({ sucess: false, err });
            }
            break;

        case "POST":
            try {
                const { loja, weekDay, date, hour, salesPerHour, pa, tm, wap, foundation } = req.body
                if (!loja && !weekDay && !salesPerHour && !pa && !tm && !wap && !foundation) throw "invalid data"
                const sale = await Sale.create({ loja, weekDay, date, hour, salesPerHour, pa, tm, wap, foundation })
                res.setHeader('Content-Type', 'application/json');
                res.status(201).json({ sucess: true, data: sale })
            } catch (err) {
                console.log(err)
                res.status(500).json({ sucess: false, err })
            }
            break;
    }
}
