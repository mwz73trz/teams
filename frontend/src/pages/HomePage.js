import { useEffect, useState } from "react";
import teamAPI from "../api/teamAPI";
import AllTeams from "../components/AllTeams";

export default function HomePage(props) {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    loadTeams();
  }, []);

  const loadTeams = async () => {
    const data = await teamAPI.getTeams();
    setTeams(data ? data : []);
  };

  const renderTeams = () => {
    return teams.map((team, index) => {
      return <AllTeams team={team} />;
    });
  };
  return (
    <div>
      <h1>My Favorite Teams</h1>
      {renderTeams()}
    </div>
  );
}
