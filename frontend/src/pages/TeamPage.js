import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import teamAPI from "../api/teamAPI";

export default function TeamPage(props) {
  const params = useParams();
  const [team, setTeam] = useState(null);

  useEffect(() => {
    loadTeam();
  }, [params.id]);

  const loadTeam = async () => {
    const data = await teamAPI.getTeamById(params.id);
    setTeam(data);
  };

  const renderTeam = () => {
    if (!team) {
      return null;
    }
    return (
      <div>
        <h1>{team.name}</h1>
        <img src={team.logo} alt={team.name} height={150} width={150} />
        <p>{team.stadium}</p>
        <p>{team.location}</p>
      </div>
    );
  };
  return <div>{renderTeam()}</div>;
}
