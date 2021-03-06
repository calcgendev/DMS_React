import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';
import CustomScrollbars from '../../../../util/CustomScrollbars';
const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        height: '100%',
        color: 'white'
    },
    buttons: {
        display: 'flex',
        flex: '0 0',
        margin: '10px auto',
        justifyContent: 'space-evenly',
        color: 'white',
        alignItems: 'center',
    },
    inputContainer: {
        display: 'flex',
        flex: '0 0',
        margin: '10px auto',
        justifyContent: 'space-between',
        color: 'white',
        alignItems: 'center',
        width: '80%'
    },
    form: {
        display: 'block',
        border: 'solid 2px #686F76',
        borderRadius: '5px',
        margin: '10px auto',
        width: '90%',
        padding: '10px 0'
    },
    inputLatLng: {

        color: 'white',
        width: '80%',
        margin: '10px auto'
    },
    noWaypoint: {
        padding: '40px'
    }
}));

const CssTextField = withStyles({
    root: {
        '& label.Mui-focused': {
            color: 'white',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'white',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#686F76',
            },
            '&:hover fieldset': {
                borderColor: 'white',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'white',
                color: 'white'
            },
        },
    },
})(TextField);

const BootstrapInput = withStyles((theme) => ({
    root: {
        'label + &': {
            marginTop: theme.spacing(3),
        },
    },
    input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: '#495057',
        border: '1px solid #686F76',
        fontSize: 16,
        color: 'white',
        padding: '10px 26px 10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        '&:focus': {
            borderRadius: 4,
            borderColor: 'white',
        },
    },
}))(InputBase);

const MissionData = props => {
    const classes = useStyles();
    // console.log(props.waypoint);
    return (
        <div className={classes.root}>
            <CustomScrollbars className=" scrollbar">
            {props.create ?null:
                <div className={classes.buttons}>
                    <div><Button onClick={props.openMission} size="small" variant="contained" color="primary">Open</Button></div>
                    <div> 
                        <Button onClick={props.onCreateMission} size="small" variant="contained" color="primary">Create</Button></div>
                </div>}
                {props.create ? <div><div className={classes.form}>
                    <div className={classes.inputContainer}><p>Edit Mission</p></div>
                    <form noValidate autoComplete="off">
                        <div className={classes.inputContainer}>
                            <CssTextField
                                style={{ width: '100%' }}
                                size="small"
                                defaultValue=""
                                variant="outlined"
                                label="Mission Name"
                                value={props.mission.name}
                                onChange={(event) => props.onChangeMission(event,'name')}
                            />
                        </div>
                        <div className={classes.inputContainer}>
                            <span>Mission Speed (m/s)</span>
                            <CssTextField
                                style={{ width: '30%' }}
                                size="small"
                                value={props.mission.speed}
                                variant="outlined"
                                onChange={(event) => props.onChangeMission(event,'speed')}
                            />
                        </div>
                        <div className={classes.inputContainer}>
                            <span>Mission Radius (m)</span>
                            <CssTextField
                                style={{ width: '30%' }}
                                size="small"
                                value={props.mission.radius}
                                variant="outlined"
                                onChange={(event) => props.onChangeMission(event,'radius')}
                            />
                        </div>
                        <div className={classes.inputContainer}>
                        <span>Home</span>
                            <CssTextField
                                style={{ width: '50%' }}
                                size="small"
                                value={props.mission.home}
                                variant="outlined"
                                onChange={(event) => props.onChangeMission(event,'home')}
                            />
                        </div>
                        <div className={classes.inputContainer}>
                        <span>Destination</span>
                            <CssTextField
                                style={{ width: '50%' }}
                                size="small"
                                value={props.mission.destination}
                                variant="outlined"
                                onChange={(event) => props.onChangeMission(event,'destination')}
                            />
                        </div>
                    </form>
                </div>
                    <div className={classes.buttons}>
                        <div><Button onClick={props.onCancel} size="small" variant="contained" color="primary">Cancel</Button></div>
                        <div>{props.action === 'create'?<Button onClick={props.createUpdateMission} size="small" variant="contained" color="primary" disabled={props.mission.waypoints.length === 0}>Confirm</Button>:
                            <Button onClick={props.createUpdateMission} size="small" variant="contained" color="primary" disabled={props.mission.waypoints.length === 0}>Update</Button>}</div>
                    </div>
                    <div className={classes.form}>
                        {props.mission.waypoints.length !== 0 ?
                            <div><div className={classes.inputContainer}><p>Waypoint</p></div>
                                <form noValidate autoComplete="off">


                                    <div className={classes.inputContainer}>
                                        <span>Waypoint Altitude (m)</span>
                                        <CssTextField
                                            style={{ width: '30%' }}
                                            size="small"
                                            value={props.waypoint.altitude}
                                            variant="outlined"
                                            onChange={(event) => props.onChange(event, 'altitude')}
                                        />
                                    </div>
                                    <div className={classes.inputContainer}>
                                        <span>Waypoint Radius (m)</span>
                                        <CssTextField
                                            style={{ width: '30%' }}
                                            size="small"
                                            variant="outlined"
                                            value={props.waypoint.radius}
                                            onChange={(event) => props.onChange(event, 'radius')}
                                        />
                                    </div>
                                    <div className={classes.inputContainer}>
                                        <span>Actions</span>
                                        <Select
                                            native
                                            variant="outlined"
                                            input={<BootstrapInput />}
                                            style={{ width: '60%' }}
                                            value={props.waypoint.action}
                                            onChange={(event) => props.onChange(event, 'action')}
                                        >
                                            <option value={''}></option>
                                            <option value={'waypoint'}>Waypoint</option>
                                            <option value={'hover'}>Hover</option>
                                            <option value={'payload'}>Payload Drop</option>
                                            <option value={'land'}>Land</option>
                                            <option value={'rth'}>Return to Home</option>
                                        </Select>
                                    </div>
                                    <div className={classes.inputLatLng}>
                                        <p>Latitude</p>
                                        <CssTextField
                                            style={{ width: '100%' }}
                                            size="small"
                                            value={props.waypoint.lat}
                                            variant="outlined"
                                        />
                                    </div>
                                    <div className={classes.inputLatLng}>
                                        <p>Longitude</p>
                                        <CssTextField
                                            style={{ width: '100%' }}
                                            size="small"
                                            value={props.waypoint.lng}
                                            variant="outlined"

                                        />
                                    </div>
                                </form></div>:
                        <div className={classes.noWaypoint}><h3>No Waypoints</h3></div>}
                </div></div> : null}
            </CustomScrollbars>
                </div>
    )
}

export default MissionData;