import React from 'react'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import Button from '@material-ui/core/Button'
import InputLabel from '@material-ui/core/InputLabel'
import FormHelperText from '@material-ui/core/FormHelperText'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

class MyForm extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);

    fetch('/api/form-submit-url', {
      method: 'POST',
      body: data,
    });
  }


render(){
  return(

    <form onSubmit={this.handleSubmit}>
    <h1 align="center"> Data Creation Page</h1>
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '10vh'}}>
        <TextField
          name="teamname"
          label="TeamName"
        />
      </div>
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '10vh'}}>
        <TextField
        name="tags"
        label="Workstream Tags"
        />
      </div>
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '10vh'}}>
        <TextField
        name="teamdl"
        label="TeamDL"
        />
      </div>
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '10vh'}}>
        <TextField
        name="description"
        label="Your Team Description"
        />
      </div>
      <div style={{ textAlign:'center' ,justifyContent:'center', alignItems:'center', width:'60%' }}>
        <p>

        Inflow teams : Data/work From

        </p>
      </div>
      <div style={{ textAlign:'center' ,justifyContent:'center', alignItems:'center', width:'60%' }}>

      <Table  alignItems="center" border="2">
      <TableHead>

          <TableRow >


            <TableCell >
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center' }}>
              Team
              </div>
              </TableCell>
            <TableCell align="right" size= "small">
              <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
              DL
              </div>
            </TableCell>
            <TableCell align="right" size= "small">
              <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
              WorkStream tags
              </div>
            </TableCell>

          </TableRow>
        </TableHead>
        <TableBody>

        <TableRow >

            <TableCell size= "small">
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
              <TextField
                name="fromteam1"
                label="From Team"
              />
            </div>
            </TableCell>

            <TableCell align="right" size= "small">
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
              <TextField
                name="fromdl1"
                label="Team DL"
              />
            </div></TableCell>
            <TableCell align="right" size= "small">
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
              <TextField
                name="fromteamtag1"
                label="Search Keys"
              />
            </div>
            </TableCell>

        </TableRow>

        <TableRow >

            <TableCell >
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
              <TextField
                name="fromteam2"
                label="From Team"
              />
            </div>
            </TableCell>

            <TableCell align="right">
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
              <TextField
                name="fromdl2"
                label="Team DL"
              />
            </div></TableCell>
            <TableCell align="right">
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
              <TextField
                name="fromteamtag2"
                label="Search Keys"
              />
            </div>
            </TableCell>

        </TableRow>


        <TableRow >

            <TableCell >
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
              <TextField
                name="fromteam3"
                label="From Team"
              />
            </div>
            </TableCell>

            <TableCell align="right">
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
              <TextField
                name="fromdl3"
                label="Team DL"
              />
            </div></TableCell>
            <TableCell align="right">
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
              <TextField
                name="fromteamtag3"
                label="Search Keys"
              />
            </div>
            </TableCell>

        </TableRow>

        <TableRow >

            <TableCell >
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
              <TextField
                name="fromteam4"
                label="From Team"
              />
            </div>
            </TableCell>

            <TableCell align="right">
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
              <TextField
                name="fromdl4"
                label="Team DL"
              />
            </div></TableCell>
            <TableCell align="right">
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
              <TextField
                name="fromteamtag4"
                label="Search Keys"
              />
            </div>
            </TableCell>

        </TableRow>

</TableBody>

      </Table>

</div>
<div style={{ textAlign:'center', justifyContent:'center', alignItems:'center' ,width:'60%'}}>
<p>

Outflow teams : Data/work To

</p>
      <Table  alignItems="center" border="2">
      <TableHead>

          <TableRow>



            <TableCell align="right">
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
              Team
              </div>
              </TableCell>
            <TableCell align="right">
              <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
              DL
              </div>
            </TableCell>
            <TableCell align="right">
              <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
              Workstream Tags
              </div></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>

        <TableRow >

            <TableCell >
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
              <TextField
                name="fromteam1"
                label="From Team"
              />
            </div>
            </TableCell>

            <TableCell align="right">
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
              <TextField
                name="fromdl1"
                label="Team DL"
              />
            </div></TableCell>
            <TableCell align="right">
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
              <TextField
                name="fromteamtag1"
                label="Search Keys"
              />
            </div>
            </TableCell>

        </TableRow>

        <TableRow >

            <TableCell >
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
              <TextField
                name="fromteam2"
                label="From Team"
              />
            </div>
            </TableCell>

            <TableCell align="right">
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
              <TextField
                name="fromdl2"
                label="Team DL"
              />
            </div></TableCell>
            <TableCell align="right">
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
              <TextField
                name="fromteamtag2"
                label="Search Keys"
              />
            </div>
            </TableCell>

        </TableRow>


        <TableRow >


            <TableCell >
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
              <TextField
                name="fromteam3"
                label="From Team"
              />
            </div>
            </TableCell>

            <TableCell align="right">
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
              <TextField
                name="fromdl3"
                label="Team DL"
              />
            </div></TableCell>
            <TableCell align="right">
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
              <TextField
                name="fromteamtag3"
                label="Search Keys"
              />
            </div>
            </TableCell>

        </TableRow>

        <TableRow >


            <TableCell >
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
              <TextField
                name="fromteam4"
                label="From Team"
              />
            </div>
            </TableCell>

            <TableCell align="right">
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
              <TextField
                name="fromdl4"
                label="Team DL"
              />
            </div></TableCell>
            <TableCell align="right">
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
              <TextField
                name="fromteamtag4"
                label="Search Keys"
              />
            </div></TableCell>

        </TableRow>

</TableBody>
      </Table>
      </div>
      <div  style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
        <Button variant="contained" color="primary" stype="submit" >
          Submit
        </Button>
      </div>
    </form>

  )


;
}}
export default MyForm;
