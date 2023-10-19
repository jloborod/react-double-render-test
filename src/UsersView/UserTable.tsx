import { v4 as uuidv4 } from "uuid";
import LazyLoadImage from "@souvik1991/react-lazy-load-image"; // Types not found

interface Props {
  data: any[];
}

const UserTable = ({ data }: Props) =>
  data ? (
    <table>
      <thead>
        <tr>
          <th>Picture</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>City</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          // row.id.value is not unique on this API.
          <tr key={uuidv4()}>
            <td>
              <LazyLoadImage
                className="photo"
                alt="User image"
                placeholder={require("./placeholder.png")}
                src={row.picture.thumbnail}
              ></LazyLoadImage>
            </td>
            <td>{row.name.first}</td>
            <td>{row.name.last}</td>
            <td>{row.email}</td>
            <td>{row.location.city}</td>
            <td>{row.dob.age}</td>
          </tr>
        ))}
      </tbody>
    </table>
  ) : (
    <div>Loading</div>
  );

export default UserTable;
