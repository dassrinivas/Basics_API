import { useEffect, useState } from "react";
import axios from "axios";

const PlayerComponent = () => {
  const [avatarUrl, setAvatarUrl] = useState('');

  useEffect(() => {
    axios.get('https://reqres.in/api/users/1')
      .then(response => {
        const userData = response.data.data;
        const avatar = userData.avatar;

        setAvatarUrl(avatar);
      })
      .catch(error => {
        alert('Error in fetching:', error);
      });
  }, []);

  return (
    <div>
      {avatarUrl && (
        <div>
          <p>Avatar:</p>
          <img src={avatarUrl} alt="User Avatar" />
        </div>
      )}
    </div>
  );
};

// export default PlayerComponent;
