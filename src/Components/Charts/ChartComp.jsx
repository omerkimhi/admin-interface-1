import React from "react";
import Chart from "react-chartjs-2";
import RadioButton from "./RadioButtons";

export default function ChartComp(props) {
  const [kind, setKind] = React.useState("price");
  var uniqueField = [];
  var uniqueCity = [];
  var getUnique = (value, index, self) => {
    return self.indexOf(value) === index;
  };
  var getLabel = (props) => {
    if (props.type) {
      if (props.number === 1) {
        var fieldArray = props.Spaces.map((item) => {
          return item.field;
        });
        uniqueField = fieldArray.filter(getUnique);
        return uniqueField;
      } else {
        var fieldArray = props.Spaces.map((item) => {
          return item.city;
        });
        uniqueCity = fieldArray.filter(getUnique);
        return uniqueCity;
      }
    }
  };
  var prepData = (props) => {
    var Array = [];
    var orderId = [];
    var FilterArr = [];
    orderId = props.Orders.map((item) => item.spaceId);
    props.Spaces.map((space) => {
      orderId.map((id) => {
        if (id == space.spaceId) FilterArr.push(space);
      });
    });
    if (props.number === 1) {
      Array = uniqueField.map((item) => {
        var avg = 0;
        var sum = 0;
        if (kind == "reservation") {
          var arrayByField = FilterArr.filter((space) => space.field === item);
          arrayByField.map((item) => {
            sum += 1;
          });
          return sum;
        } else {
          var arrayByField = props.Spaces.filter(
            (space) => space.field === item
          );
          let counter=0;
          sum=0;
          arrayByField.map((item) => {
            if(item[kind]!=3.499)
            {
                counter++;
                sum = sum + item[kind];
            }

          });
          avg = Number(sum / counter).toFixed(2);
          return avg;
        }
      });
      return [
        {
          label: kind,
          backgroundColor: "RGB(130, 224, 170)",
          data: Array,
        },
      ];
    }
    //city
    if (props.number === 0) {
      Array = uniqueCity.map((item) => {
        var avg = 0;
        var sum = 0;

        if (kind == "rank") {
        }

        if (kind == "reservation") {
          var arrayByField = FilterArr.filter((space) => space.city === item);
          arrayByField.map((item) => {
            sum += 1;
          });
          return sum;
        } //field
        else {
          var arrayByField = props.Spaces.filter(
            (space) => space.city === item
          );
          let counter=0;
          sum=0;
        
          arrayByField.map((item) => {
              if(item[kind]!=3.499)
              {
                counter++;
                sum = sum + item[kind];
              }
          });
          avg =  Number(sum / counter).toFixed(2);
          return avg;
        }
      });
      return [
        {
          label: kind,
          backgroundColor: "RGB(205, 92, 92)",
          data: Array,
        },
      ];
    }
  };
  const data = {
    labels: getLabel(props),
    datasets: prepData(props),
    backgroundColor: [
      "rgba(255, 99, 132, 1)",
      "rgba(54, 162, 235, 0.2)",
      "rgba(255, 206, 86, 0.2)",
    ],
    borderColor: [
      "rgba(255,99,132,1)",
      "rgba(54, 162, 235, 1)",
      "rgba(255, 206, 86, 1)",
    ],
  };
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
  if (props.type === "bar") {
    return (
      <div style={{ position: "relative" }}>
        {props.number == 1 ? "Field" : "City"}{" "}
        {kind == "reservation" ? "- Number of:" : "- Average"}
        <RadioButton kind={kind} setKind={setKind}></RadioButton>
        <Chart
          height={200}
          data={data}
          type={props.type}
          options={options}
        ></Chart>
      </div>
    );
  } else return "";
}
