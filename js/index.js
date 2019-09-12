let result = 0;
// $("#submit").on("click", function() {
//   temperature = parseInt( $("#temperature").val() );
//   if (temperature < 56) {
//     $("body").css("background-image", "url(https://i.imgur.com/MJNK0cn.gif)");
//     console.log(temperature, convertToFahrenheit(temperature));
//     result = result + convertToFahrenheit(temperature);
//     $("#result").html(result);
//   }
//   else if (temperature > 55 && temperature < 66) {
//     $("body").css("background-image", "url(https://i.imgur.com/NVj2Lo2.gif)");
//     console.log(temperature, convertToFahrenheit(temperature));
//     result = result + convertToFahrenheit(temperature);
//     $("#result").html(result);
//   }
//   else if (temperature > 65 && temperature < 76) {
//     $("body").css("background-image", "url(https://i.imgur.com/FMFKQpw.gif)");
//     console.log(temperature, convertToFahrenheit(temperature));
//     result = result + convertToFahrenheit(temperature);
//     $("#result").html(result);
//   }
//   else if (temperature > 75) {
//     $("body").css("background-image", "url(https://i.imgur.com/EbuqV5S.gif)");
//     console.log(temperature, convertToFahrenheit(temperature));
//     result = result + convertToFahrenheit(temperature);
//     $("#result").html(result);
//   }
//   });

$("#submit").on("click", function() {
  temperature = parseInt( $("#temperature").val() );
  if (temperature < 13.3) {
    $("body").css("background-image", "url(https://i.imgur.com/MJNK0cn.gif)");
    console.log(temperature, convertToFahrenheit(temperature));
    result = result + convertToFahrenheit(temperature);
    $("#result").html(result);
  }
  else if (temperature > 12.8 && temperature < 18.9) {
    $("body").css("background-image", "url(https://i.imgur.com/NVj2Lo2.gif)");
    console.log(temperature, convertToFahrenheit(temperature));
    result = result + convertToFahrenheit(temperature);
    $("#result").html(result);
  }
  else if (temperature > 18.3 && temperature < 24.4) {
    $("body").css("background-image", "url(https://i.imgur.com/FMFKQpw.gif)");
    console.log(temperature, convertToFahrenheit(temperature));
    result = result + convertToFahrenheit(temperature);
    $("#result").html(result);
  }
  else if (temperature > 23.9) {
    $("body").css("background-image", "url(https://i.imgur.com/EbuqV5S.gif)");
    console.log(temperature, convertToFahrenheit(temperature));
    result = result + convertToFahrenheit(temperature);
    $("#result").html(result);
  }
  });

$("#clear").on("click", function() {
  temperature = parseInt( $("#temperature").val() );
  // if (temperature < 13.3) {
    $("body").css("background-image", "url(https://i.imgur.com/MJNK0cn.gif)");
    console.log(temperature, convertToFahrenheit(temperature));
    result = 0;
    $("#result").html(result);
    $("#temperature").html(result);
  // }
  // else if (temperature > 12.8 && temperature < 18.9) {
    $("body").css("background-image", "url(https://i.imgur.com/NVj2Lo2.gif)");
    console.log(temperature, convertToFahrenheit(temperature));
    result = 0;
    $("#result").html(result);
    $("#temperature").html(result);
  // }
  // else if (temperature > 65 && temperature < 76) {
    $("body").css("background-image", "url(https://i.imgur.com/FMFKQpw.gif)");
    console.log(temperature, convertToFahrenheit(temperature));
    result = 0;
    $("#result").html(result);
    $("#temperature").html(result);
  // }
  // else if (temperature > 75) {
    $("body").css("background-image", "url(https://i.imgur.com/EbuqV5S.gif)");
    console.log(temperature, convertToFahrenheit(temperature));
    result = 0;
    $("#result").html(result);
    $("#temperature").html(result);
  // }
  });

// $("#clear").on("click", function() {
//   temperature = parseInt( $("#temperature").val() );
//   if (temperature < 56) {
//     $("body").css("background-image", "url(https://i.imgur.com/MJNK0cn.gif)");
//     console.log(temperature, convertToFahrenheit(temperature));
//     result = 0;
//     $("#result").html(result);
//   }
//   else if (temperature > 55 && temperature < 66) {
//     $("body").css("background-image", "url(https://i.imgur.com/NVj2Lo2.gif)");
//     console.log(temperature, convertToFahrenheit(temperature));
//     result = 0;
//     $("#result").html(result);
//   }
//   else if (temperature > 65 && temperature < 76) {
//     $("body").css("background-image", "url(https://i.imgur.com/FMFKQpw.gif)");
//     console.log(temperature, convertToFahrenheit(temperature));
//     result = 0;
//     $("#result").html(result);
//   }
//   else if (temperature > 75) {
//     $("body").css("background-image", "url(https://i.imgur.com/EbuqV5S.gif)");
//     console.log(temperature, convertToFahrenheit(temperature));
//     result = 0;
//     $("#result").html(result);
//   }
//   });



function convertToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

function convertToCelsius(fahrenheit) {
  return (fahrenheit - 32) * (5/9);
}