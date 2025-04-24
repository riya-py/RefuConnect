import React, { createContext, useState, useContext, useEffect } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userProfile, setUserProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Load user profile from localStorage on initial render
  useEffect(() => {
    const storedProfile = localStorage.getItem('userProfile');
    if (storedProfile) {
      try {
        setUserProfile(JSON.parse(storedProfile));
      } catch (error) {
        console.error('Failed to parse stored profile:', error);
      }
    }
    setIsLoading(false);
  }, []);

  // Save profile to localStorage whenever it changes
  useEffect(() => {
    if (userProfile) {
      localStorage.setItem('userProfile', JSON.stringify(userProfile));
    }
  }, [userProfile]);

  const updateProfile = (newProfile) => {
    setUserProfile(newProfile);
  };

  const clearProfile = () => {
    setUserProfile(null);
    localStorage.removeItem('userProfile');
  };

  return (
    <UserContext.Provider value={{ 
      userProfile, 
      updateProfile, 
      clearProfile,
      isLoading 
    }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);