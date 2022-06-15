import ReactDOM from "react-dom";
import React from 'react';
import swal from 'sweetalert';
<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.authFunc = this.authFunc.bind(this);
    }

    //------------------------start of WavesKeeper-------------------------------------
    
    authFunc() {
        const authData = { data: "Auth on my site" };
        const seriesname = document.querySelector("#seriesname").value;
        const seriesdescription = document.querySelector("#seriesdescription").value;        
        const startcounter = document.querySelector("#startcounter").value;
        const endcounter = document.querySelector("#endcounter").value;
        
        if (WavesKeeper) {
            WavesKeeper.auth( authData)
            .then(auth => {
            console.log(auth.address);    
            document.getElementById("address").innerHTML = '<div class="text-center" id="address" style="font-size:14px;">Address '+auth.address+'</div>';

WavesKeeper.signAndPublishTransaction({
  type: 16,
  data: {
    fee: {
      tokens: '0.009',
      assetId: 'WAVES',
    },
    dApp: '3KSeWNBG36u8uDZgVCRqHwecbk7JqW3ZGG1',
    call: {
      function: 'RegisterNFTSeries',
    "args": [
      {
        "type": "string",
        "value": seriesname
      },
      {
        "type": "string",
        "value": seriesdescription
      },
      {
        "type": "integer",
        "value": startcounter
      },
      {
        "type": "integer",
        "value": endcounter
      }
    ],
    },
    payment: [],
  },
})
  .then(tx => {
    swal("Transaction Signed", "Your Series Registered Successfully!", "success");
  })
  .catch(error => {
    swal("DApp Error",error.message+": "+error.data,"error");
  });

 //displaying the result on the console
                /*...processing data */
            }).catch(error => {
                console.error( error ); // displaying the result on the console
                /*...processing errors */
            })
        } else {
            alert("To Auth TNShell should be installed.");
        }
    }
        
    render() {
        return (
            <div className="container">
                <input className="btn btn-primary w-100 py-1" type="submit" value="Register" onClick={this.authFunc}/>&nbsp;&nbsp;             
            </div>
        )
    }
}

const app = document.getElementById('app');

class App1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.authFunc = this.authFunc.bind(this);
    }

// 2nd Function Starts Here*/    
        authFunc() {
        const authData = { data: "Auth on my site" };
        const mintseries = document.querySelector("#mintseries").value;

        if (WavesKeeper) {
            WavesKeeper.auth( authData )
            .then(auth => {
    document.getElementById("address").innerHTML = '<div class="text-center" id="address" style="font-size:14px;">Address '+auth.address+'</div>';                
WavesKeeper.signAndPublishTransaction({
  type: 16,
  data: {
    fee: {
      tokens: '0.009',
      assetId: 'WAVES',
    },
    dApp: '3KSeWNBG36u8uDZgVCRqHwecbk7JqW3ZGG1',
    call: {
      function: 'IssueNFTSeries',
      args: [
      {
        "type": "string",
        "value": mintseries
      }
      ],
    },
    payment: [],
  },
})
  .then(tx => {
    swal("Transaction Signed", "You Minted NFT for Series "+mintseries+" Successfully!", "success");
  })
  .catch(error => {
    swal(error.message+": "+error.data);
  });

 //displaying the result on the console
                /*...processing data */
            }).catch(error => {
                console.error( error ); // displaying the result on the console
                /*...processing errors */
            })
        } else {
            alert("To Auth TNShell should be installed.");
        }
    }
        
    render() {
        return (
            <div className="container">
                <input className="btn btn-primary w-100 py-2" type="submit" value="Issue" onClick={this.authFunc}/>&nbsp;&nbsp;             
             </div>
        )
    }
}
const app1 = document.getElementById('app1');

if(app){
    ReactDOM.render(<App/>, app);
}

if(app1){
    ReactDOM.render(<App1/>, app1);
}
