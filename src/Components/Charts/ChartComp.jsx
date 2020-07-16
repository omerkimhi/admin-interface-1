import React from 'react'
import Chart from 'react-chartjs-2'
import RadioButton from './RadioButtons'

export default function ChartComp(props) {
    const [kind, setKind] = React.useState('price');
    var uniqueField = []
    var uniqueCity = []
    var getUnique = (value, index, self) => {
        return self.indexOf(value) === index;
    }
    var getLabel = (props) => {
        switch (props.type) {
            case 'bar': {
                if (props.number === 1) {
                    var fieldArray = props.Spaces.map(item => {
                        return item.field
                    })
                    uniqueField = fieldArray.filter(getUnique)
                    return uniqueField

                }
                else {
                    var fieldArray = props.Spaces.map(item => {
                        return item.city
                    })
                    uniqueCity = fieldArray.filter(getUnique)
                    return uniqueCity

                }
            } break
        }
    }
    
    var prepData = (props) => {


        var Array = []
        if (props.number === 1) {

            Array = uniqueField.map(item => {
                var avg = 0
                var sum = 0
                var arrayByField = props.Spaces.filter(space => space.field === item)
                console.log(arrayByField)
                arrayByField.map(item => {
                    sum = sum + item[kind]
                })
                avg = Math.round(sum / arrayByField.length)
                return avg
            })

            return [{

                label: kind,
                backgroundColor:  "RGB(130, 224, 170)",
                data: Array
            }]
        }
        if (props.number === 0) {
            Array = uniqueCity.map(item => {
                var avg = 0
                var sum = 0
                var arrayByField = props.Spaces.filter(space => space.city === item)
                arrayByField.map(item => {
                    sum = sum + item[kind]
                })
                avg =Math.round( sum / arrayByField.length)
                return avg
            })

            return [{

                label: kind,
                backgroundColor:  "RGB(205, 92, 92)",
                data: Array
            }]
        }

    }

    const data = {
        labels: getLabel(props),
        datasets: prepData(props),
        backgroundColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)'],
        borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)']
    }
    if (props.type === 'bar') {
        return (
            <div style={{ position: 'relative' }}>
            {props.number==1?"Field":"City"}    {"- Average of:" }
                <RadioButton kind={kind} setKind={setKind}></RadioButton>
                <Chart height={100} data={data} type={props.type}></Chart>
            </div>
        )
    }
    else
        return ""
}
