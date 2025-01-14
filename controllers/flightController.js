const {Flights} = require("../models/Flight");
const {v4: uuid} = require("uuid");

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

//get a single flight
exports.getFlight = async (req,res) =>{
    try {
        let id = req.params.id;
        const flight = Flights.find((flight)=>flight.id === id);

        res.status(200).json({
            message: "flight found",
            flight,
        });
    } catch (err) {
        
    }
}

//creating a flight schedule
exports.createFlight = async (req,res) =>{
    try{
        const {title,time,price, date} = await req.body;
        const newFlight = {
            id: uuid(),
            title,
            time,
            price,
            date,
        }
        
         
       Flights.push(newFlight);
        
        res.status(201).json({
            message: "Flight Created",
            newFlight,
        });
    }catch(err){
        res.status(500).json({message: err.message});
    }
}

//update a flight

exports.updateFlight = async (req,res)=>{
    try {
        let id = req.params.id;
        const flight = Flights.find((flight) => flight.id === id);
        const {title,time,price,date} = await req.body;
           flight.title = title;
            flight.time = time;
            flight.price = price;
            flight.date = date;

            res.status(200).json({
                message: "User updated",
                flight,

            });


    } catch (err) {
       res.status(500).json({message: err.message}) ;
    }
}

exports.deleteFlight = async (req,res)=>{
    try {
        let id = req.params.id;
        const flight = Flights.find((flight) => flight.id === id);
        Flights.splice(Flights.indexOf(flight),1);
        res.status(200).json({
            message: "Flight Deleted",
            flight,

        });

    } catch (error) {
            res.status(500).json({message: err.message}) ;
    }
}
