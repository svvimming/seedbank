import React from "react";
import testimage from "../assets/img/threshold-1.gif";

const randomColor = () => {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

let h, w, newheight, newwidth;

const uniquePositions = () => {
  h = window.innerHeight - 100;
  w = window.innerWidth - 100;
  newheight = Math.floor(Math.random() * h);
  newwidth = Math.floor(Math.random() * w);

  return [newheight, newwidth];
};

function chooseElement(assets) {
  var element = assets[Math.floor(Math.random() * assets.length)];
  return element;
}

//running through a loop

const eventTypeStyling = type => {
  //note: this is already running through a for each in the create links so i don't need to do a queryselect on all the nodes. each valid node is already passing through this function
  //console.log(type);
  switch (type) {
    case "Minor Movement":
      // counter += 1;
      let elType = document.createElement("div");
      elType.className = "threshold";
      elType.style.backgroundImage = `url(${testimage})`;
      let newCoor = uniquePositions();
      //(newCoor);
      elType.style.top = newCoor[0] + "px";
      elType.style.left = newCoor[1] + "px";
      let elWrapper = document.createElement("a");
      elWrapper.className = "thresholdcontainer";
      elWrapper.appendChild(elType);
      document.body.append(elWrapper);
      break;
    default:
      console.log("no event to find name for");
  }
};

//running through a loop

const eventType = eventObj => {
  if (eventObj) {
    if (eventObj.event_type) {
      eventTypeStyling(eventObj.event_type);
      //console.log(eventObj.event_type, "belonging to", eventObj.name);
    } else {
      //console.log(eventObj.name + " has no event name");
    }
  } else {
    //console.log("no valid event object");
  }
};

//--->random placement applied to each element created in createLinks
const dotRandPos = el => {
  var xyCoors = uniquePositions(); // returns array with x y values at index 0 and 1
  el.style.top = xyCoors[0] + "px"; //x-axis value
  el.style.left = xyCoors[1] + "px"; //y-axis value
};

const createLinks = (array, classname) => {
  //refactor for more edge-cases - for not its just a truthy check for array value;
  if (array) {
    array.forEach(el => {
      var newElement = document.createElement("div");
      newElement.className = classname;

      //--->random placement if i want it from the beginning
      // let newCoor = uniquePositions();
      // newElement.style.top = newCoor[0] + "px";
      // newElement.style.left = newCoor[1] + "px";
      //---->

      if (classname === "database") {
        newElement.style.backgroundColor = randomColor();
        dotRandPos(newElement);
        eventType(el);
        //all of this can be excavated to a separate exterior function. refactor
        newElement.textContent = el.name;
        let linkWrapper = document.createElement("a");
        linkWrapper.className = classname + "container";
        linkWrapper.appendChild(newElement);
        document.body.append(linkWrapper);
        // console.log("database condition check");
      } else if (classname === "dot") {
        newElement.style.backgroundColor = randomColor();
        dotRandPos(newElement);
        //this is just the default script that was used for inital testing. creating a pixel link to every page currently on glitch. that is what is consisted of in the eventlist array
        let linkWrapper = document.createElement("a");
        linkWrapper.href = "https://convalizards.glitch.me/" + el;
        linkWrapper.className = "containerRandom";
        linkWrapper.appendChild(newElement);
        document.body.append(linkWrapper);
      } else if (classname === "line") {
        newElement.style.backgroundColor = randomColor();
        dotRandPos(newElement);
        //------>this was introduced if i wanted to random the x axis position only
        // let newCoor2 = uniquePositions();
        // newElement.style.top = "300px";
        // newElement.style.left = newCoor2[1] + "px";
        /// ------>
        //this is just the default script that was used for inital testing. creating a pixel link to every page currently on glitch. that is what is consisted of in the eventlist array
        let linkWrapper = document.createElement("div");
        // linkWrapper.href = "https://convalizards.glitch.me/" + el;
        linkWrapper.className = classname + "container";
        linkWrapper.appendChild(newElement);
        document.body.append(linkWrapper);
      } else if (classname === "gradient") {
        console.log("happening");
        dotRandPos(newElement);
        newElement.style.backgroundImage = `url(${chooseElement(array)})`;
        dotRandPos(newElement);
        //this is just the default script that was used for inital testing. creating a pixel link to every page currently on glitch. that is what is consisted of in the eventlist array
        let linkWrapper = document.createElement("a");

        linkWrapper.className = "containerRandom";
        linkWrapper.appendChild(newElement);
        document.body.append(linkWrapper);
      }
    });
  } else {
    // console.log("array not valid");
  }
};

const RandomLinkPlace = props => {
  createLinks(props.array, props.classname);
  console.log(props.classname, "hello");
  //remember that set Interval can not call a function eg. NOT dotRandPost(parameter()) but dotRandPost(parameter) --->only a callback
  //only because a) the prop can only be read within the scope of this component, i have to use the random placement funciton within it.

  //setInterval(dotRandPos, 2000);
  return <div></div>;
};

export default RandomLinkPlace;

//---NOTE: i need to remove this specific kind of condition check (see below) because if i want t newly added element
//to be rendered, this cancels it out
// return (
//   <div>
//     {target.length > 0
//       ? console.log("elements already created")
//       : createLinks(props.array, props.classname)}
//   </div>
// );
