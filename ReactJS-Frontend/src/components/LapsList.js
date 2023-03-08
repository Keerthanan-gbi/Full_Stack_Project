import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import lapService from '../services/lap.service';

const LapList = () => {

  const [laps, setLaps] = useState([]);

  const init = () => {
    lapService.getAll()
      .then(response => {
        console.log('Printing employees data', response.data);
        setLaps(response.data);
      })
      .catch(error => {
        console.log('Something went wrong', error);
      })
  }

  useEffect(() => {
    init();
  }, []);

  const handleDelete = (id) => {
    console.log('Printing id', id);
    lapService.remove(id)
      .then(response => {
        console.log('employee deleted successfully', response.data);
        init();
      })
      .catch(error => {
        console.log('Something went wrong', error);
      })
  }

  return (
    <div className="container">
    <h3><b><u><i><center>GBI LAPTOPS 💻</center></i></u></b></h3>
    <h3><b><u><i><center>BEST SITE FOR BUYING LAPTOPS 💯!</center></i></u></b></h3>
      <h3><b>List of Laptops 🖥️</b></h3>
      <hr/>
      <div>
        <Link to="/add" className="btn btn-primary mb-2">Add Laptop ➕</Link>
        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th>Laptop Name</th>
              <th>Year</th>
              <th>Price</th>
              <th>Ram</th>
              <th>Storage</th>
              <th>Processor</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
          {
            laps.map(lap => (
              <tr key={lap.id}>
                <td>{lap.lapname}</td>
                <td>{lap.year}</td>
                <td>{lap.price}</td>
                <td>{lap.ram}</td>
                <td>{lap.storage}</td>
                <td>{lap.processor}</td>
                <td>
                  <Link className="btn btn-info" to={`/laps/edit/${lap.id}`}>Update</Link>
                 
                  <button className="btn btn-danger ml-2" onClick={() => {
                    handleDelete(lap.id);
                  }}>Delete ✖️</button>
                </td>
              </tr>
            ))
          }
          </tbody>
        </table>
       
      </div>
      <h3><b><u><i><center>ALL THE BEST 😍</center></i></u></b></h3>
    </div>
  );
}

export default LapList;