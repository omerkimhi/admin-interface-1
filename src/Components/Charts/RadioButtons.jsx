import React from 'react'
import { RadioButton, RadioGroup } from 'react-radio-buttons'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';


export default function RadioButtons(props) {
    var handleChange = (event) => {
props.setKind(event.target.value)
    }
    return (
        <div>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={props.kind}
                onChange={handleChange}
            >
                <MenuItem value={'price'}>Price</MenuItem>
                <MenuItem value={'rank'}>Rank</MenuItem>
                <MenuItem value={'reservation'}>Reservation</MenuItem>
            </Select>
        </div>
    )
}
