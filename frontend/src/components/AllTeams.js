import { Link } from "react-router-dom";

export default function AllTeams(props) {
  return (
    <div>
      <Link to={`/teams/${props.team.id}`} key={props.team.id}>
        <img
          src={props.team.logo}
          alt={props.team.name}
          width={200}
          height={200}
        />
      </Link>
    </div>
  );
}
