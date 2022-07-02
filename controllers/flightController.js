const Flights = require("./models/flight");

exports.getFlights() = asynch (req, res) => {
    try{
        const flights = await.flights  
        res.stautus(200).json(flights);
    }catch (err){
        res.status(500).json({message: err})
    }
}