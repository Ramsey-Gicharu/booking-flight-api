const Flights = require("./models/flight");

//get all Flights
exports.getFlights = async (req, res) =>{
    try{
    const flights = Flights;
    res.status(200).json({
        message: "All flights",
        flights: flights
    });
    }catch{
        res.status(500).json({message: err});
    }

}