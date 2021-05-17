import React, { useState } from 'react';
import UserInfo from './components/UserInfo';

function App() {
  const [githubId, setGithubId] = useState('');
  const [userInfo, setUserInfo] = useState(null);

  const handleGithubId = async (githubId) => {
    if (githubId.length === 0) {
      return alert('文字を入力して下さい');
    }
    try {
      const userInfo = await fetchUserInfo(githubId);
      setUserInfo(userInfo);
      setGithubId('');
    } catch (error) {
      console.error(error);
    }
  };

  const fetchUserInfo = async (userId) => {
    const response = await fetch(
      `https://api.github.com/users/${encodeURIComponent(userId)}`
    );
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  };

  return (
    <>
      <h2>GitHub User Info</h2>
      <input
        type='text'
        placeholder='GitHub ID'
        value={githubId}
        onChange={(event) => setGithubId(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === 'Enter') return handleGithubId(githubId);
        }}
      />
      <button onClick={() => handleGithubId(githubId)}>
        Get user info
      </button>
      {userInfo && <UserInfo {...userInfo}></UserInfo>}
    </>
  );
}

export default App;
