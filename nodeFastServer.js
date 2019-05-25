const express = require("express");
const app = express();
var bodyParser = require('body-parser');

let orders = [];

app.use(function(req, res, next) {
    
    res.header("Access-Control-Allow-Origin", "*");
    
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    
    next();

});

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.post("/orderPart", (req, res, next) => {
    console.log("working");
    
    // this.orders 
    // this.orders.push(req.body);
    console.log(this.orders);

    // this.orders = req.body
    //     sucess:true
    // }

    
    res.send(true);
    
});

app.get("/currentPartOrders", (req, res, next) => {
    console.log("Current Part Orders");
    
    let postObj = [{
        number:"1234567",
        client:"Building 32",
        equipment:"Equipment X",
        part:"Pulley D",
        quantity: 2,
        status:"Processing",
        et:"12h"
    },{
        number:"2334567",
        client:"Building 13",
        equipment:"Equipment Y",
        part:"Pulley A",
        quantity: 1,
        status:"Waiting Printer",
        et:"8h"
    },{
        number:"3232567",
        client:"Building 27",
        equipment:"Equipment Z",
        part:"Pulley C",
        quantity: 1,
        status:"Printing",
        et:"12h"
    },{
        number:"4234657",
        client:"Building 14",
        equipment:"Equipment X",
        part:"Pulley H",
        quantity: 4,
        status:"Ready for Delivery",
        et:"48h"
    },{
        number:"5134567",
        client:"Building 25",
        equipment:"Shipping",
        part:"Pulley X",
        quantity: 2,
        status:"Processing",
        et:"76h"
    },{
        number:"6134567",
        client:"Building 30",
        equipment:"Delivered",
        part:"Pulley J",
        quantity: 3,
        status:"Delivered",
        et:"4h"
    }]

    // let content = this.orders;
    
    // [
    //     {id: 101, partName: "pulley X", clientName:'John Doe', clientCode:100},
    //     {id: 106, partName: "pulley Y", clientName:'John Roe', clientCode:101},
    //     {id: 105, partName: "pulley Y", clientName:'John Joe', clientCode:102},
    //     {id: 107, partName: "pulley X", clientName:'John Boe', clientCode:103}
    // ];

    res.json(postObj);
    
});

// app.get("/orders", (req, res, next) => {
//     console.log("working");
    
//     let content = [
//         {id: 101, partName: "pulley X", clientName:'John Doe', clientCode:100},
//         {id: 106, partName: "pulley Y", clientName:'John Roe', clientCode:101},
//         {id: 105, partName: "pulley Y", clientName:'John Joe', clientCode:102},
//         {id: 107, partName: "pulley X", clientName:'John Boe', clientCode:103}
//     ];

//     res.json(content);
    
// });

// app.get("/clientRecord", (req, res, next) => {
//     console.log("working");
    
//     let content = [
//         {name: 'Client A', code: 159},
//         {name: 'Client B', code: 237},
//         {name: 'Client C', code: 240},
//     ];

//     res.json(content);
    
// });

// app.get("/partRecord", (req, res, next) => {
//     console.log("working");
    
//     let content = [
//         {name:'Pulley X',sku:'0001',status: 3, code:1000},
//         {name:'Pulley Y',sku:'0010',status: 0, code:1100},
//         {name:'Panel button X',sku:'0011',status: 6, code:1010},
//         {name:'Panel button Y',sku:'0100',status: 2, code:1110},
//         {name:'Gradient X',sku:'0101',status: 1, code:1001},
//         {name:'Gradient Y',sku:'0110',status: 1, code:1101},
//     ]

//     res.json(content);
    
// });

app.get("/partPerClient", (req, res, next) => {
    console.log("working");
    
    let content = [
        {part: 'Pulley A'},
        {part: 'Pulley B'},
        {part: 'Pulley C'},
    ];

    res.json(content);
    
});

app.get("/serviceOrders", (req, res, next) => {
   
    console.log("working");
    
    let content = [
        {
            number:"1234567",client:"Buiding X",equipment:"Equipment 1",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            number:"6214567",client:"Buiding Y",equipment:"Equipment 2",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            number:"7894634",client:"Buiding Z",equipment:"Equipment 1",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
            number:"9514757",client:"Buiding A",equipment:"Equipment 3",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            number:"3246789",client:"Buiding B",equipment:"Equipment 1",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            number:"1658942",client:"Buiding C",equipment:"Equipment 4",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            number:"1359457",client:"Buiding D",equipment:"Equipment 1",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            number:"3464963",client:"Buiding E",equipment:"Equipment 3",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            number:"7864613",client:"Buiding F",equipment:"Equipment 2",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            number:"2121231",client:"Buiding G",equipment:"Equipment 1",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
    ]

    res.json(content);
    
});




app.listen(3000, () => {
    console.log("Server running on port 3000");
});




// setTimeout(function() {
//     // res.json(content);
// }, 5000);