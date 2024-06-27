const massageIdInput = document.getElementById('massage-id');
const canDataInput = document.getElementById('can-data');
const submitBtn = document.getElementById('submit-btn');
const msgid = document.getElementById('msgid');
const pgn = document.getElementById('pgn');
const spps = document.getElementById('spps');
const item = document.getElementById('item');
let decimalNumber;

submitBtn.addEventListener('click', () => {
  const hexString = massageIdInput.value;
  const candata = canDataInput.value;

  function hexToBinary(hex) {
    // Remove any leading '0x' if present
    if (hex.startsWith('0x')) {
      hex = hex.substr(4, 4);
    }

    // Convert each hex digit to its 4-bit binary equivalent
    let binary = '';
    for (let i = 0; i < hex.length; i++) {
      const binSegment = parseInt(hex[i], 16).toString(2).padStart(4, '0');
      binary += binSegment;
    }
    msgid.innerHTML= `Message ID: ${hex}`;
    return binary;
  }

  function binaryToDecimal(binary) {
    return parseInt(binary, 2);
  }

  const binaryString = hexToBinary(hexString);
  const decimalNumber = binaryToDecimal(binaryString);

  pgn.innerHTML = `PGN: ${decimalNumber}`;
  // -----------------------------------------------------------------
  console.log('working');
  //----------------------------------------------------------------
  let x = 0;
  let y = 0;
  let z = 0;
  let spn;
  let itm;
  function hexToDecimal(hexString) {
    const decimalNumber2 = parseInt(hexString, 16);
    return decimalNumber2;
  }



  if (decimalNumber == 61444) {
    x = candata.substring(4, 2);
    y = hexToDecimal(x)
    console.log(y);
    z = 0.001 * y + 1.25;
    spps.innerHTML+= `<br> SPN: 513`;
    item.innerHTML += `Actual Engine Torque:  ${z} <br>`;


    x = candata.substring(6, 4);
    y = hexToDecimal(x)
    z = 0.125 * y + 0;
    spps.innerHTML+= `<br> SPN: 190`;
    item.innerHTML += `Engine Speed: ${z} <br>`;
  }

  //----------------------------------------------------------------
  if (decimalNumber == 65257) {
    x = candata.substring(8, 8);
    y = hexToDecimal(x)
    console.log(y);
    z = 0.5 * y + 0;
    spps.innerHTML+= `<br> SPN: 250`;
    item.innerHTML += `Total Fuel Used: ${z} <br>`;
  }

  //----------------------------------------------------------------
  if (decimalNumber == 65276) {
    x = candata.substring(2, 2);
    y = hexToDecimal(x)
    console.log(y);
    z = 0.4 * y + 0;
    spps.innerHTML+= `<br> SPN: 96`;
    item.innerHTML += `Fuel Level 1: ${z} <br>`;


    x = candata.substring(12, 2);
    y = hexToDecimal(x)
    z = 0.4 * y + 0;
    spps.innerHTML+= `<br> SPN: 38`;
    item.innerHTML += `Fuel Level 2: ${z} <br>`;
  }


  //----------------------------------------------------------------
  if (decimalNumber == 65253) {
    x = candata.substring(0, 8);
    y = hexToDecimal(x)
    console.log(y);
    z = 0.05 * y + 0;
    spps.innerHTML+= `<br> SPN: 247`;
    item.innerHTML += `Engine total hours of Operation: ${z} <br>`;
  }


  //----------------------------------------------------------------
  if (decimalNumber == 65217) {
    x = candata.substring(0, 8);
    y = hexToDecimal(x)
    console.log(y);
    z = 5 * y + 0;
    spps.innerHTML+= `<br> SPN: 917`;
    item.innerHTML += `High resolution total vehicle distance: ${z} <br>`;
  }


  //----------------------------------------------------------------
  if (decimalNumber == 65262) {
    x = candata.substring(0, 2);
    y = hexToDecimal(x)
    console.log(y);
    z = 1 * y - 40;
    spps.innerHTML+= `<br> SPN: 110`;
    item.innerHTML += `Engine Coolant Temperature: ${z} <br>`;
  }


  //----------------------------------------------------------------
  if (decimalNumber == 65269) {
    x = candata.substring(6, 4);
    y = hexToDecimal(x)
    console.log(y);
    z = 0.03125 * y - 273;
    spps.innerHTML+= `<br> SPN: 171`;
    item.innerHTML += `Ambient Air Temperature: ${z} <br>`;
  }



  //----------------------------------------------------------------
  if (decimalNumber == 64777) {
    x = candata.substring(8, 8);
    y = hexToDecimal(x)
    console.log(y);
    z = 0.001 * y + 0;
    spps.innerHTML+= `<br> SPN: 5054`;
    item.innerHTML += `High resolution engine total fuel used: ${z} <br>`;
  }


  //----------------------------------------------------------------
  if (decimalNumber == 65266) {
    x = candata.substring(0, 4);
    y = hexToDecimal(x)
    console.log(y);
    z = 0.05 * y + 0;
    spps.innerHTML+= `<br> SPN: 183`;
    item.innerHTML += `Fuel rate: ${z} <br>`;


    x = candata.substring(4, 4);
    y = hexToDecimal(x)
    z = 0.001953125 * y + 0;
    spps.innerHTML+= `<br> SPN: 184`;
    item.innerHTML += `Instantaneous Fuel Economy: ${z} <br>`;
  }


  //----------------------------------------------------------------
  if (decimalNumber == 65198) {
    x = candata.substring(4, 2);
    y = hexToDecimal(x)
    console.log(y);
    z = 8 * y + 0;
    spps.innerHTML+= `<br> SPN: 1087`;
    item.innerHTML += `Service Brake Air Pressure Circuit #1: ${z} <br>`;


    x = candata.substring(6, 2);
    y = hexToDecimal(x)
    z = 8 * y + 0;
    spps.innerHTML+= `<br> SPN: 1088`;
    item.innerHTML += `Service Brake Air Pressure Circuit #2: ${z} <br>`;
  }


  //----------------------------------------------------------------
  if (decimalNumber == 65110) {
    x = candata.substring(0, 2);
    y = hexToDecimal(x)
    console.log(y);
    z = 0.4 * y + 0;
    if (z == 100) {
      let con = document.write("full <br>");
    }
    if (z == 0) {
      con = document.write("empty <br>");
    }
    spps.innerHTML+= `<br> SPN: 1761`;
    item.innerHTML += `Ratio of volume of diesel exhaust fluid to the total volume of diesel: ${z} <br>`;
  }


  //----------------------------------------------------------------
  if (decimalNumber == 61441) {
    x = candata.substring(2, 2);
    y = hexToDecimal(x)
    console.log(y);
    z = 0.4 * y + 0;
    spps.innerHTML+= `<br> SPN: 521`;
    item.innerHTML += `Electronic Brake Controller 1: ${z} <br>`;
  }


  //----------------------------------------------------------------
  if (decimalNumber == 65199) {
    x = candata.substring(8, 8);
    y = hexToDecimal(x)
    console.log(y);
    z = 0.5 * y + 0;
    spps.innerHTML+= `<br> SPN: 1040`;
    item.innerHTML += `Fuel Consumption (Gaseous): ${z} <br>`;
  }

  // -----------------------------------------------------------------
  if (decimalNumber == 61440) {
    x = candata.substring(2, 0);
    y = hexToDecimal(x)
    console.log(y);
    z = 0.01 * y - 1.25;
    spps.innerHTML+= `<br> SPN: 520`;
    item.innerHTML += `Retarder Torque Mode: ${z} <br>`;


    x = candata.substring(12, 4);
    y = hexToDecimal(x)
    z = 0.4 * y + 0;
    spps.innerHTML+= `<br> SPN: 1716`;
    item.innerHTML += `Retarder Selection, non-engine: ${z} <br>`;
  }

  //----------------------------------------------------------------
  if (decimalNumber == 65258) {
    x = candata.substring(2, 4);
    y = hexToDecimal(x)
    console.log(y);
    z = 0.5 * y + 0;
    spps.innerHTML+= `<br> SPN: 582`;
    item.innerHTML += `Axel weight: ${z} <br>`;
  }


  //----------------------------------------------------------------
  if (decimalNumber == 64184) {
    x = candata.substring(1, 1);
    y = hexToDecimal(x)
    console.log(y);
    z = 1 * y + 0;
    spps.innerHTML+= `<br> SPN: 13171`;
    item.innerHTML += `DC Charging State: ${z} <br>`;
    if (z == 0) {
      con = document.write("IDLE <br>");
    }
    if (z == 1) {
      con = document.write("CHARGING <br>");
    }
    if (z == 2) {
      con = document.write("STANDBY <br>");
    }
    if (z >= 3 &&  z<= 9) {
      con = document.write("RESERVED <br>");
    }
    if (z == 10) {
      con = document.write("INITIALI${z}`ING <br>");
    }
    if (z == 11) {
      con = document.write("PRE-CHARGE <br>");
    }
    if (z == 12) {
      con = document.write("TERMINATING <br>");
    }
    if (z == 13) {
      con = document.write("BATTERY FALIURE <br>");
    }
    if (z == 14) {
      con = document.write("EVSE FALIURE <br>");
    }
    if (z == 15) {
      con = document.write("NOT AVAILAIBLE <br>");
    }
  }

  //----------------------------------------------------------------
  if (decimalNumber == 64617) {
    x = candata.substring(0, 4);
    y = hexToDecimal(x)
    console.log(y);
    z = 0.25 * y + 0;
    spps.innerHTML+= `<br> SPN: 15268`;
    item.innerHTML += `HVESS Estimated Remaining Distance: ${z} <br>`;
  }


  //----------------------------------------------------------------
  if (decimalNumber == 65268) {
    x = candata.substring(0, 2);
    y = hexToDecimal(x)
    console.log(y);
    z = 256 * y + 0;
    spps.innerHTML+= `<br> SPN: 929`;
    item.innerHTML += `Tire Location: ${z} <br>`;


    x = candata.substring(2, 2);
    y = hexToDecimal(x)
    z = 4 * y + 0;
    spps.innerHTML+= `<br> SPN: 241`;
    item.innerHTML += `Tire Pressure: ${z} <br>`;
  }

  //----------------------------------------------------------------
  if (decimalNumber == 65279) {
    x = candata.substring(4, 4);
    y = hexToDecimal(x)
    console.log(y);
    z = 1 * y + 0;
    spps.innerHTML+= `<br> SPN: 8428`;
    item.innerHTML += `Fuel Supply Estimated Remaining Distance: ${z} <br>`;
  }

  // -----------------------------------------------------------------
  if (decimalNumber == 65265) {
    x = candata.substring(2, 4);
    y = hexToDecimal(x)
    console.log(y);
    z = 0.00390 * y + 0;
    spps.innerHTML+= `<br> SPN: 84`;
    item.innerHTML += `Wheel based speed: ${z} <br>`;
  }

  //----------------------------------------------------------------
  if (decimalNumber == 61443) {
    x = candata.substring(2, 2);
    y = hexToDecimal(x)
    console.log(y);
    z = 0.004 * y + 0;
    spps.innerHTML+= `<br> SPN: 91`;
    item.innerHTML += `Accelerator Pedal Position: ${z} <br>`;


    x = candata.substring(4, 2);
    y = hexToDecimal(x)
    z = 0.1 * y + 0;
    spps.innerHTML+= `<br> SPN: 92`;
    item.innerHTML += `Engine Percent Load At Current Speed: ${z} <br>`;
  }

// -----------------------------------------------------------------
if (decimalNumber == 65216) {
  x = candata.substring(2, 4);
  y = hexToDecimal(x)
  console.log(y);
  z = 5 * y -160 ;
  spps.innerHTML+= `<br> SPN: 914`;
  item.innerHTML += `Service distance: ${z} <br>`;
}


// -----------------------------------------------------------------
if (decimalNumber == 65136) {
  x = candata.substring(4, 4);
  y = hexToDecimal(x)
  console.log(y);
  z = 10 * y + 0 ;
  spps.innerHTML+= `<br> SPN: 1760`;
  item.innerHTML += `Combination Vehicle Weight: ${z} <br>`;
}

// -----------------------------------------------------------------

if (decimalNumber == 65254) {
  x = candata.substring(0, 2);
  y = hexToDecimal(x)
  console.log(y);
  z = 0.25 * y + 0;
  spps.innerHTML+= `<br> SPN: 959`;
  item.innerHTML += `Second: ${z} <br>`;


  x = candata.substring(2, 2);
  y = hexToDecimal(x)
  z = 1 * y + 0;
  spps.innerHTML+= `<br> SPN: 960`;
  item.innerHTML += `Minute: ${z} <br>`;


  x = candata.substring(4, 2);
  y = hexToDecimal(x)
  z = 1 * y + 0;
  spps.innerHTML+= `<br> SPN: 961`;
  item.innerHTML += `Hours: ${z} <br>`;


  x = candata.substring(6, 2);
  y = hexToDecimal(x)
  z = 1 * y + 0;
  spps.innerHTML+= `<br> SPN: 962`;
  item.innerHTML += `Months: ${z} <br>`;

  
  x = candata.substring(8, 2);
  y = hexToDecimal(x)
  z = 0.25 * y + 0;
  spps.innerHTML+= `<br> SPN: 963`;
  item.innerHTML += `Day: ${z} <br>`;
  
  
  x = candata.substring(10, 2);
  y = hexToDecimal(x)
  z = 1 * y + 1985;
  spps.innerHTML+= `<br> SPN: 964`;
  item.innerHTML += `Years: ${z} <br>`;
}


  //----------------------------------------------------------------
  if (decimalNumber == 61445) {
    x = candata.substring(1, 2);
    y = hexToDecimal(x)
    console.log(y);
    z = 1 * y - 125;
    if (z == 0) {
      con = document.write('nuetral <br>');
    }
    if (z == 251) {
      con = document.write('park <br>');
    }
    spps.innerHTML+= `<br> SPN: 524`;
    item.innerHTML += `Selected Gear: ${z} <br>`;


    x = candata.substring(8, 2);
    y = hexToDecimal(x)
    z = 1 * y - 125;
    if (z == 0) {
      con = document.write('nuetral <br>');
    }
    if (z == 251) {
      con = document.write('park <br>');
    }
    spps.innerHTML+= `<br> SPN: 523`;
    item.innerHTML += `Current Gear : ${z} <br>`;
  }


  // -----------------------------------------------------------------

if (decimalNumber == 65112) {
  x = candata.substring(0, 4);
  y = hexToDecimal(x)
  console.log(y);
  z = 0.1 * y + 0;
  spps.innerHTML+= `<br> SPN: 1725 `;
  item.innerHTML += `Bellow Pressure Front Axle Left: ${z} <br>`;


  x = candata.substring(4, 4);
  y = hexToDecimal(x)
  z = 0.1 * y + 0;
  spps.innerHTML+= `<br> SPN: 1726`;
  item.innerHTML += `Bellow Pressure Front Axle Right ${z} <br>`;


  x = candata.substring(8, 4);
  y = hexToDecimal(x)
  z = 0.1 * y + 0;
  spps.innerHTML+= `<br> SPN: 1727`;
  item.innerHTML += `Bellow Pressure Rear Axle Left: ${z} <br>`;


  x = candata.substring(12, 4);
  y = hexToDecimal(x)
  z = 0.1 * y + 0;
  spps.innerHTML+= `<br> SPN: 1728`;
  item.innerHTML += `Bellow Pressure Rear Axle Right: ${z} <br>`;
}

// -----------------------------------------------------------------
if (decimalNumber == 64695) {
  x = candata.substring(0, 4);
  y = hexToDecimal(x)
  console.log(y);
  z = 1 * y + 0.000025 ;
  spps.innerHTML+= `<br> SPN: 5464 `;
  item.innerHTML += `Vehicle Electrical Power: ${z} <br>`;
}

  // -----------------------------------------------------------------

  if (decimalNumber == 61449) {
    x = candata.substring(0, 4);
    y = hexToDecimal(x)
    console.log(y);
    z = 0.000976 * y + 31374;
    spps.innerHTML+= `<br> SPN: 1807`;
    item.innerHTML += `Steering Wheel Angle: ${z} <br>`;
  
  
    x = candata.substring(10, 4);
    y = hexToDecimal(x)
    z = 0.000976 * y - 15.687;
    spps.innerHTML+= `<br> SPN: 1809`;
    item.innerHTML += `Lateral Acceleration: ${z} <br>`;
  
  
    x = candata.substring(14, 2);
    y = hexToDecimal(x)
    z = 0.1 * y - 12.5;
    spps.innerHTML+= `<br> SPN: 1810`;
    item.innerHTML += `Longitudinal Acceleration: ${z} <br>`;
  
  }

    //----------------------------------------------------------------
    if (decimalNumber == 65262) {
      x = candata.substring(0, 2);
      y = hexToDecimal(x)
      console.log(y);
      z = 1 * y - 40 ;
      spps.innerHTML+= `<br> SPN: 110`;
      item.innerHTML += `Engine coolant temperature: ${z} <br>`;
  
  
      x = candata.substring(4, 4);
      y = hexToDecimal(x)
      z = 0.03125 * y - 273;
      spps.innerHTML+= `<br> SPN: 175`;
      item.innerHTML += `Engine Oil Temprature 1: ${z} <br>`;
    }


    //----------------------------------------------------------------
    if (decimalNumber == 65269) {
      x = candata.substring(2, 4);
      y = hexToDecimal(x)
      console.log(y);
      z = 0.03125 * y - 273 ;
      spps.innerHTML+= `<br> SPN: 170`;
      item.innerHTML += `Cab interior temperature: ${z} <br>`;
  
  
      x = candata.substring(6, 4);
      y = hexToDecimal(x)
      z = 0.03125 * y - 273;
      spps.innerHTML+= `<br> SPN: 171`;
      item.innerHTML += `Ambient Air Temperature: ${z} <br>`;
    }


    //----------------------------------------------------------------
    if (decimalNumber == 61705) {
      x = candata.substring(12, 1);
      y = hexToDecimal(x)
      console.log(y);
      z =  y ;
      if (z == 0) {
        con = document.write("OFF <br>");
      }
      if (z == 1) {
        con = document.write("CIRCULATING <br>");
      }
      if (z == 2) {
        con = document.write("COOLING <br>");
      }
      if (z == 3 ) {
        con = document.write("HEATING <br>");
      }
      if (z == 4) {
        con = document.write("DRYING <br>");
      }
      if (z >= 5 &&  z<= 13) {
        con = document.write("RESERVED <br>");
      }
      if (z == 14) {
        con = document.write("FAULTED <br>");
      }
      if (z == 15) {
        con = document.write("NOT AVAIL <br>");
      }
      spps.innerHTML+= `<br> SPN: 8235`;
      item.innerHTML += `High Voltage Energy Storage System Thermal Management System Status 1: ${z} <br>`;
  

    }

    //----------------------------------------------------------------
    if (decimalNumber == 64606) {
      x = candata.substring(0, 8);
      y = hexToDecimal(x)
      console.log(y);
      z = 100 * y + 0;
      spps.innerHTML+= `<br> SPN: 8211`;
      item.innerHTML += `High Voltage Energy Storage System History: ${z} <br>`;
    }


    //----------------------------------------------------------------
    if (decimalNumber == 65263) {
      x = candata.substring(6, 2);
      y = hexToDecimal(x)
      console.log(y);
      z = 4 * y + 0;
      spps.innerHTML+= `<br> SPN: 100`;
      item.innerHTML += `Engine Oil Pressure 1: ${z} <br>`;
    }


    //----------------------------------------------------------------
    if (decimalNumber == 65272) {
      x = candata.substring(8, 4);
      y = hexToDecimal(x)
      console.log(y);
      z = 0.03125 * y - 273;
      spps.innerHTML+= `<br> SPN: 177`;
      item.innerHTML += `Engine Oil Pressure 1: ${z} <br>`;
    }

});